import * as Core from '@actions/core'
import * as Github from '@actions/github'
import * as Cache from '@actions/cache'
import {PullRequestEvent} from '@octokit/webhooks-definitions/schema'
import {GraphQLClient} from 'graphql-request'
import fs from 'fs/promises'

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

type Server = {
  id: string
  url: string
}

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
  const tokenFileName = 'token'
  const tokenKey = `render-${email}`

  let token = undefined
  try {
    Core.info('Downloading cached token...')
    await Cache.restoreCache([tokenFileName], tokenKey)
    token = await fs.readFile(tokenFileName, 'utf8')

    // Test token
    await sdk.User(undefined, {authorization: `Bearer ${token}`})
    Core.info('Cached token found. Using it.')
  } catch (error) {
    Core.info(`Cached token not found (${error}). Signing in...`)
    const password = Core.getInput('password')
    const {signIn} = await sdk.SignIn({email, password})
    if (!signIn?.idToken) {
      throw new Error('Sign-in failed!')
    }
    token = signIn.idToken

    // Save the token for future runs
    Core.info('Caching Render authentication token...')
    await fs.writeFile(tokenFileName, token)
    await Cache.saveCache([tokenFileName], tokenKey)
    Core.info('Render token cached for future usage.')
  }
  client.setHeader('authorization', `Bearer ${token}`)
}

async function findServer({pr}: Context): Promise<Server> {
  const serverId = Core.getInput('service-id')
  if (pr) {
    Core.info('Running in Pull Request: Listing Pull Request Servers...')

    const {pullRequestServers} = await sdk.PullRequestServers({serverId})
    const server = pullRequestServers?.find(
      s => s?.pullRequest.number === pr.toString()
    )

    if (server && server.server) {
      return server.server
    }
    Core.info('No Pull Request Servers found. Using regular deployment')
  }

  const {server} = await sdk.Server({id: serverId})
  if (!server) {
    throw new Error(`Server ${serverId} not found! ❌`)
  }
  return server
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
  if (retries === 0) {
    Core.info(`Looking deployments for ${serverId}...`)
  }
  const {deploys} = await sdk.Deploys({serverId})
  const deploy = deploys?.find(
    d =>
      d.commitId === context.sha &&
      d.branch === context.ref.replace('refs/heads/', '')
  ) as RenderDeploy
  if (deploy) return deploy
  const max_retries = ~~Core.getInput('retries')
  if (++retries < max_retries) {
    Core.info(`No deployments found. Retrying...(${retries}/${max_retries}) ⏱`)
    await wait(~~Core.getInput('wait'))
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
      await wait(~~Core.getInput('wait'))
      return waitForDeploy({...deployment, render: await getDeploy(render.id)})
    case 2: // Live
    case 3: // Succeeded
      await wait(~~Core.getInput('sleep'))
      await updateDeployment(deployment, 'success')
      Core.info(`Deployment ${render.id} succeeded ✅`)
      return
    case 4: // Failed
      await updateDeployment(deployment, 'failure')

      throw new Error(
        `Deployment ${render.id} failed! ❌ (${getDeployUrl(render)})`
      )
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
    environment: `${context.pr ? 'Preview' : 'Production'} – ${server.name}`,
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
      log_url: getDeployUrl(render),
      environment_url: render.server.url,
      description: state,
      state
    })
    github.state = state
    return true
  }
  return false
}

function getDeployUrl(deploy: RenderDeploy): string {
  return `https://dashboard.render.com/web/${deploy.server.id}/deploys/${deploy.id}`
}

/*******************************************
 *** Main
 ******************************************/
async function run(): Promise<void> {
  try {
    Core.info('Starting Render Wait Action')

    await logIn()
    const context = getContext()
    const server = await findServer(context)
    const render = await findDeploy(context, server.id)
    const github = await createDeployment(context, render)
    await waitForDeploy({render, github})

    Core.setOutput('url', server.url)
  } catch (error) {
    if (error instanceof Error) {
      Core.setFailed(error.message)
    }
  }
}

run()
