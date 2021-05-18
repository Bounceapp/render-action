import * as Core from '@actions/core'
import * as Github from '@actions/github'
import {PullRequestEvent} from '@octokit/webhooks-definitions/schema'
import {GraphQLClient} from 'graphql-request'

import {Deploy as RenderDeploy, getSdk} from './generated/sdk'
import {wait} from './wait'

/*******************************************
 *** Constants
 ******************************************/
type Context = {sha: string; ref: string; pr?: number}

type GitHubDeploy = {id: number; state?: DeploymentState}

type Deployment = {
  render: RenderDeploy
  github: GitHubDeploy
}

type DeploymentState =
  | 'error'
  | 'failure'
  | 'inactive'
  | 'in_progress'
  | 'queued'
  | 'pending'
  | 'success'

/*******************************************
 *** Constants
 ******************************************/
const MAX_RETRIES = 20

/*******************************************
 *** Globals
 ******************************************/
const client = new GraphQLClient('https://api.render.com/graphql')
const sdk = getSdk(client)
const octokit = Github.getOctokit(Core.getInput('token'), {
  previews: ['flash', 'ant-man']
})

/*******************************************
 *** Functions
 ******************************************/
async function logIn(): Promise<void> {
  Core.info('Signing in...')

  const email = Core.getInput('email')
  const password = Core.getInput('password')
  const {signIn} = await sdk.SignIn({email, password})

  if (!signIn?.idToken) {
    throw new Error('Sign-in failed!')
  }
  client.setHeader('authorization', `Bearer ${signIn.idToken}`)
}

async function findServer({pr}: Context): Promise<string> {
  const serverId = Core.getInput('service-id')
  if (pr) {
    Core.info('Running in Pull Request: Listing Pull Request Servers...')

    const number = pr.toString()
    const {pullRequestServers} = await sdk.PullRequestServers({serverId})
    const server = pullRequestServers?.find(
      s => s?.pullRequest.number === number
    )

    if (server) {
      return server.server.id
    }
    Core.info('No Pull Request Servers found. Using regular deployment')
  }

  return serverId
}

function getContext(): Context {
  const {eventName, payload} = Github.context
  switch (eventName) {
    case 'pull_request':
      const {
        pull_request: {number, head}
      } = payload as PullRequestEvent
      return {pr: number, ...head}
    case 'push':
      return Github.context
    default:
      throw new Error(
        'Invalid event type! Only "pull_request" and "push" are supported. ❌'
      )
  }
}

async function findDeploy(
  context: Context,
  serverId: string,
  retries = 0
): Promise<RenderDeploy> {
  Core.info(`Looking deployments for ${serverId}...`)
  const {deploys} = await sdk.Deploys({serverId})
  const deploy = deploys?.find(
    d =>
      d.commitId === context.sha &&
      d.branch === context.ref.replace('refs/heads/', '')
  ) as RenderDeploy
  if (deploy) {
    return deploy
  }
  if (++retries < MAX_RETRIES) {
    //Core.info(`No deployments found. Retrying...(${retries}/${MAX_RETRIES}) ⏱`)
    await wait(5000)
    return findDeploy(context, serverId, retries)
  } else {
    throw new Error(`No deployment found after ${retries} retries! ⚠️`)
  }
}

async function getDeploy(id: string): Promise<RenderDeploy> {
  const {deploy} = await sdk.Deploy({id})
  if (!deploy) {
    throw new Error(`Deployment ${id} disappeared! ❌`)
  }
  return deploy as RenderDeploy
}

async function waitForDeploy(deployment: Deployment): Promise<void> {
  const {render} = deployment
  switch (render?.status) {
    case 1: // Running
      if (await updateDeployment(deployment, 'in_progress')) {
        Core.info(`Deployment still running... ⏱`)
      }
      await wait(3000)
      return waitForDeploy({...deployment, render: await getDeploy(render.id)})
    case 2: // Live
    case 3: // Succeeded
      await updateDeployment(deployment, 'success')
      Core.info(`Deployment ${render.id} succeeded ✅`)
      return
    case 4: // Failed
      await updateDeployment(deployment, 'failure')
      throw new Error(`Deployment ${render.id} failed! ❌`)
    case 5: // Cancelled
      await updateDeployment(deployment, 'inactive')
      Core.info(`Deployment ${render.id} canceled ⏹`)
      return
  }
}

async function createDeployment(
  context: Context,
  {server}: RenderDeploy
): Promise<GitHubDeploy> {
  Core.info(`Creating ${server.name} GitHub deployment`)
  const state: DeploymentState = 'pending'
  const {data} = await octokit.repos.createDeployment({
    ...Github.context.repo,
    ref: context.ref,
    description: server.name,
    environment: `${context.pr ? 'Preview' : 'Production'} - ${server.name}`,
    production_environment: !context.pr,
    transient_environment: !!context.pr,
    auto_merge: false,
    required_contexts: [],
    state
  })
  return {...data, state} as GitHubDeploy
}

async function updateDeployment(
  {render, github}: Deployment,
  state: DeploymentState
): Promise<boolean> {
  if (github.state !== state) {
    await octokit.repos.createDeploymentStatus({
      ...Github.context.repo,
      deployment_id: github.id,
      log_url: `https://dashboard.render.com/web/${render.server.id}/deploys/${render.id}`,
      environment_url: render.server.url,
      description: state,
      state
    })
    github.state = state
    return true
  }
  return false
}

/*******************************************
 *** Main
 ******************************************/
async function run(): Promise<void> {
  try {
    Core.info('Starting Render Wait Action')
    await logIn()
    const context = getContext()
    const serverId = await findServer(context)
    const render = await findDeploy(context, serverId)
    const github = await createDeployment(context, render)

    await waitForDeploy({render, github})
  } catch (error) {
    Core.setFailed(error.message)
  }
}

run()
