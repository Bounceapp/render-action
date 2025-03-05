import * as Core from '@actions/core'
import * as Github from '@actions/github'
import {HttpClient} from '@actions/http-client'
import {BearerCredentialHandler} from '@actions/http-client/lib/auth'
import {PullRequestEvent} from '@octokit/webhooks-types'

import {wait} from './wait'
import {TypedResponse} from '@actions/http-client/lib/interfaces'

/*******************************************
 *** Types
 ******************************************/
type Context = {sha: string; ref: string; pr?: number}

type RenderService = {
  id: string
  name: string
  ownerId: string
  serviceDetails: {
    parentServer: {id: string}
    url: string
  }
}

type RenderServiceCursor = {
  cursor: string
  service: RenderService
}

type RenderCustomDomain = {
  id: string
  name: string
}

type RenderCustomDomainCursor = {
  cursor: string
  customDomain: RenderCustomDomain
}

type RenderDeploy = {
  id: string
  commit: {id: string}
  status:
    | 'created'
    | 'build_in_progress'
    | 'update_in_progress'
    | 'live'
    | 'deactivated'
    | 'build_failed'
    | 'update_failed'
    | 'canceled'
    | 'pre_deploy_in_progress'
    | 'pre_deploy_failed'
  service: RenderService
}

type RenderDeployCursor = {
  cursor: string
  deploy: RenderDeploy
}

type WaitForDeployArgs = {
  render: RenderDeploy
  previousStatus?: RenderDeploy['status']
}

/*******************************************
 *** Globals
 ******************************************/
const client = new HttpClient('render-action', [new BearerCredentialHandler(Core.getInput('render-token'))])

const MAX_RETRIES = 3
const fetchWithRetry = async <TData>(url: string, retryNumber = 0): Promise<TypedResponse<TData>> => {
  try {
    return await client.getJson<TData>(url)
  } catch (error) {
    const canRetry = retryNumber < MAX_RETRIES
    const isTimeoutError = error instanceof Error && /timeout/i.test(error.message)

    if (isTimeoutError && canRetry) {
      return fetchWithRetry(url, retryNumber + 1)
    }

    throw error
  }
}

/*******************************************
 *** Functions
 ******************************************/
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
      throw new Error('Invalid event type! Only "pull_request" and "push" are supported. ❌')
  }
}

async function findCustomDomain({id: service_id}: RenderService): Promise<string | undefined> {
  const {result: domains} = await fetchWithRetry<RenderCustomDomainCursor[]>(
    `https://api.render.com/v1/services/${service_id}/domains?verificationStatus=verified&limit=1`
  )

  if (domains && domains.length > 0) {
    return domains[0].customDomain.name
  }
}

async function findService(context: Context, retries = 0): Promise<RenderService> {
  const serviceId = Core.getInput('service-id')
  const {result: service} = await fetchWithRetry<RenderService>(`https://api.render.com/v1/services/${serviceId}`)
  if (!service) {
    throw new Error(`Server ${serviceId} not found! ❌`)
  }

  if (context.pr) {
    Core.info('Running in Pull Request: Listing Pull Request Servers...')
    return findPRService(context.pr, service, retries)
  } else {
    const customDomain = await findCustomDomain(service)
    if (customDomain) {
      Core.info(`Using custom domain ${customDomain}`)
      service.serviceDetails.url = customDomain
    }

    return service
  }
}

async function findPRService(pr: number, parentService: RenderService, retries = 0): Promise<RenderService> {
  const {result: cursors} = await fetchWithRetry<RenderServiceCursor[]>(
    `https://api.render.com/v1/services?name=${parentService.name}%20PR%20%23${pr}&ownerId=${parentService.ownerId}`
  )

  const prService = cursors?.find(c => c.service.serviceDetails.parentServer.id === parentService.id)?.service
  if (prService) return prService

  const max_retries = ~~Core.getInput('retries')
  if (++retries < max_retries) {
    Core.info(`No pull request service found. Retrying...(${retries}/${max_retries}) ⏱`)
    await wait(~~Core.getInput('wait'))
    return findPRService(pr, parentService, retries)
  } else {
    throw new Error(`No pull request service found after ${retries} retries! ⚠️`)
  }
}

async function findDeploy(context: Context, service: RenderService, retries = 0): Promise<RenderDeploy> {
  if (retries === 0) {
    Core.info(`Looking deployments for ${service.id}...`)
  }

  const {result: cursors} = await fetchWithRetry<RenderDeployCursor[]>(
    `https://api.render.com/v1/services/${service.id}/deploys`
  )

  const deploy = cursors?.find(c => c.deploy.commit.id === context.sha)?.deploy
  if (deploy) return {...deploy, service}

  const max_retries = ~~Core.getInput('retries')
  if (++retries < max_retries) {
    Core.info(`No deployments found. Retrying...(${retries}/${max_retries}) ⏱`)
    await wait(~~Core.getInput('wait'))
    return findDeploy(context, service, retries)
  } else {
    throw new Error(`No deployment found after ${retries} retries! ⚠️`)
  }
}

async function getDeploy({id, service}: RenderDeploy): Promise<RenderDeploy> {
  const {result: deploy} = await fetchWithRetry<RenderDeploy>(
    `https://api.render.com/v1/services/${service.id}/deploys/${id}`
  )
  if (!deploy) {
    throw new Error(`Deployment ${id} disappeared! ❌`)
  }
  return {...deploy, service}
}

async function waitForDeploy({render, previousStatus}: WaitForDeployArgs): Promise<void> {
  switch (render?.status) {
    case 'created':
    case 'build_in_progress':
    case 'pre_deploy_in_progress':
    case 'update_in_progress':
      if (previousStatus !== render.status) {
        Core.info(`Deployment still running... ⏱`)
      }
      await wait(~~Core.getInput('wait'))
      return waitForDeploy({render: await getDeploy(render), previousStatus: render.status})
    case 'live':
      await wait(~~Core.getInput('sleep'))
      Core.info(`Deployment ${render.id} succeeded ✅`)
      return
    case 'build_failed':
    case 'pre_deploy_failed':
    case 'update_failed':
      throw new Error(`Deployment ${render.id} failed! ❌ (${getDeployUrl(render)})`)
    case 'deactivated': // Failed
    case 'canceled': // Cancelled
      Core.info(`Deployment ${render.id} canceled ⏹`)
      return
  }
}

function getDeployUrl(deploy: RenderDeploy): string {
  return `https://dashboard.render.com/web/${deploy.service.id}/deploys/${deploy.id}`
}

/*******************************************
 *** Main
 ******************************************/
async function run(): Promise<void> {
  try {
    Core.info('Starting Render Wait Action')

    const context = getContext()
    const service = await findService(context)
    const render = await findDeploy(context, service)
    await waitForDeploy({render})

    Core.setOutput('url', service.serviceDetails.url)
  } catch (error) {
    if (error instanceof Error) {
      Core.setFailed(error.message)
    }
  }
}

run()
