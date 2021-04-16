import * as core from '@actions/core'
import * as github from '@actions/github'
import {PullRequestEvent} from '@octokit/webhooks-definitions/schema'
import {GraphQLClient} from 'graphql-request'

import {Deploy, getSdk} from './generated/sdk'
import {wait} from './wait'

/*******************************************
 *** Constants
 ******************************************/
const MAX_RETRIES = 10

const client = new GraphQLClient('https://api.render.com/graphql')
const sdk = getSdk(client)

/*******************************************
 *** Functions
 ******************************************/
async function logIn(): Promise<void> {
  const email = core.getInput('email')
  const password = core.getInput('password')
  core.info('Signing in...')
  const {signIn} = await sdk.SignIn({email, password})
  if (!signIn?.idToken) {
    throw new Error('Sign-in failed!')
  }
  client.setHeader('authorization', `Bearer ${signIn.idToken}`)
}

async function findServer(): Promise<string> {
  const serverId = core.getInput('service-id')
  const pr = github.context.payload.pull_request?.number

  if (pr) {
    core.info('Running in Pull Request: Listing Pull Request Servers...')
    const servers = await sdk.PullRequestServers({serverId})
    const server = servers.pullRequestServers?.find(
      s => s?.pullRequest.number === pr.toString()
    )
    if (server) {
      return server.server.id
    }
    core.info('No Pull Request Servers found. Using regular deployment')
  }

  return serverId
}

function getContext(): {sha: string; ref: string} {
  switch (github.context.eventName) {
    case 'pull_request':
      return (github.context.payload as PullRequestEvent).pull_request.head
    case 'push':
      return github.context
    default:
      throw new Error(
        'Invalid event type! Only "pull_request" and "push" are supported. ❌'
      )
  }
}

async function findDeploy(serverId: string, retries = 0): Promise<Deploy> {
  const context = getContext()

  core.info(`Listing deployments for ${context}...`)
  const {deploys} = await sdk.Deploys({serverId})
  const deploy = deploys?.find(
    d =>
      d.commitId === context.sha &&
      d.branch === context.ref.replace('refs/heads/', '')
  ) as Deploy
  if (deploy) {
    return deploy
  }
  if (++retries < MAX_RETRIES) {
    core.info(`No deployments found. Retrying...(${retries}/${MAX_RETRIES}) ⏱`)
    await wait(5000)
    return findDeploy(serverId, retries)
  } else {
    throw new Error(`No deployment found after ${retries} retries! ⚠️`)
  }
}

async function getDeploy(id: string): Promise<Deploy> {
  const response = await sdk.Deploy({id})
  if (!response?.deploy) {
    throw new Error(`Deployment ${id} disappeared! ❌`)
  }
  return response.deploy as Deploy
}

async function waitForDeploy(deploy: Deploy): Promise<void> {
  switch (deploy?.status) {
    case 1: // Running
      core.info(`Deployment still running... ⏱`)
      await wait(1000)
      deploy = await getDeploy(deploy.id)
      return waitForDeploy(deploy)
    case 2: // Live
    case 3: // Succeeded
      core.info(`Deployment ${deploy.id} succeeded ✅`)
      return
    case 4: // Failed
      throw new Error(`Deployment ${deploy.id} failed! ❌`)
    case 5: // Cancelled
      core.info(`Deployment ${deploy.id} canceled ⏹`)
      return
  }
}

/*******************************************
 *** Main
 ******************************************/
async function run(): Promise<void> {
  try {
    core.info('Starting Render Wait Action')
    await logIn()
    const serverId = await findServer()
    const deploy = await findDeploy(serverId)
    waitForDeploy(deploy)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
