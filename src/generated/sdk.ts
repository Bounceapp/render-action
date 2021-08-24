import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Time: any;
};

export type ApiToken = {
  __typename?: 'APIToken';
  id: Scalars['String'];
  createdAt: Scalars['Time'];
  label: Scalars['String'];
  lastUsedAt?: Maybe<Scalars['Time']>;
  /** Actual token value to use. Non-null only on generation. */
  token?: Maybe<Scalars['String']>;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  idToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AutoscalingConfig = {
  __typename?: 'AutoscalingConfig';
  enabled: Scalars['Boolean'];
  min: Scalars['Int'];
  max: Scalars['Int'];
  cpuPercentage: Scalars['Int'];
  cpuEnabled: Scalars['Boolean'];
  memoryPercentage: Scalars['Int'];
  memoryEnabled: Scalars['Boolean'];
};

export type AutoscalingConfigChanged = ServiceEvent & {
  __typename?: 'AutoscalingConfigChanged';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  config: AutoscalingConfig;
};

export type AutoscalingEnded = ServiceEvent & {
  __typename?: 'AutoscalingEnded';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  fromInstances: Scalars['Int'];
  toInstances: Scalars['Int'];
};

export type AutoscalingInput = {
  enabled: Scalars['Boolean'];
  min: Scalars['Int'];
  max: Scalars['Int'];
  cpuPercentage: Scalars['Int'];
  cpuEnabled: Scalars['Boolean'];
  memoryPercentage: Scalars['Int'];
  memoryEnabled: Scalars['Boolean'];
};

export type AutoscalingStarted = ServiceEvent & {
  __typename?: 'AutoscalingStarted';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  fromInstances: Scalars['Int'];
  toInstances: Scalars['Int'];
};

export type Backup = {
  __typename?: 'Backup';
  id: Scalars['String'];
  createdAt: Scalars['Time'];
  status?: Maybe<BackupStatus>;
  baseUrl?: Maybe<Scalars['String']>;
  sqlUrl?: Maybe<Scalars['String']>;
};

export type BackupEdge = {
  __typename?: 'BackupEdge';
  node: Backup;
};

export type BackupPage = {
  __typename?: 'BackupPage';
  edges: Array<BackupEdge>;
};

export enum BackupStatus {
  InProgress = 'IN_PROGRESS',
  Done = 'DONE'
}

export type Bandwidth = {
  __typename?: 'Bandwidth';
  points: Array<BandwidthPoint>;
  totalMB: Scalars['Int'];
};

export type BandwidthPoint = {
  __typename?: 'BandwidthPoint';
  time: Scalars['Time'];
  bandwidthMB: Scalars['Int'];
};

export type BillingInfo = {
  __typename?: 'BillingInfo';
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  region: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  vatNumber: Scalars['String'];
};

export type BillingInfoInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  region: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  vatNumber: Scalars['String'];
};

export type BillingInfoOutput = {
  __typename?: 'BillingInfoOutput';
  owner?: Maybe<Owner>;
  response: BillingInfoResponse;
};

export enum BillingInfoResponse {
  Success = 'SUCCESS',
  AddressFailed = 'ADDRESS_FAILED',
  VatFailed = 'VAT_FAILED'
}

export type BranchDeleted = ServiceEvent & {
  __typename?: 'BranchDeleted';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  deletedBranch: Scalars['String'];
  newBranch: Scalars['String'];
};

export type Build = {
  __typename?: 'Build';
  commitCreatedAt: Scalars['Time'];
  commitId: Scalars['String'];
  commitMessage: Scalars['String'];
  commitShortId: Scalars['String'];
  commitURL: Scalars['String'];
  createdAt: Scalars['Time'];
  id: Scalars['String'];
  status: Scalars['Int'];
  updatedAt: Scalars['Time'];
};

export type BuildDeployEndReason = {
  __typename?: 'BuildDeployEndReason';
  buildFailed?: Maybe<Build>;
  newBuild?: Maybe<Build>;
  newDeploy?: Maybe<Deploy>;
  failure?: Maybe<FailureReason>;
  timedOutSeconds?: Maybe<Scalars['Int']>;
};

export type BuildDeployTrigger = {
  __typename?: 'BuildDeployTrigger';
  firstBuild?: Maybe<Scalars['Boolean']>;
  clusterSynced?: Maybe<Scalars['Boolean']>;
  envUpdated?: Maybe<Scalars['Boolean']>;
  manual?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  updatedProperty?: Maybe<Scalars['String']>;
  newCommit?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['Boolean']>;
  clearCache?: Maybe<Scalars['Boolean']>;
  rollback?: Maybe<Scalars['Boolean']>;
  rollbackTargetDeployID?: Maybe<Scalars['String']>;
};

export type BuildEnded = ServiceEvent & {
  __typename?: 'BuildEnded';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  buildId: Scalars['String'];
  build?: Maybe<Build>;
  status: Scalars['Int'];
  reason?: Maybe<BuildDeployEndReason>;
};

export type BuildStarted = ServiceEvent & {
  __typename?: 'BuildStarted';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  buildId: Scalars['String'];
  build?: Maybe<Build>;
  trigger?: Maybe<BuildDeployTrigger>;
};

export type CardInput = {
  last4: Scalars['String'];
  brand: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  id: Scalars['String'];
  domain: Scalars['String'];
  issued: Scalars['Boolean'];
  errors?: Maybe<Scalars['JSON']>;
};

export type Charge = {
  __typename?: 'Charge';
  period: Period;
  startTime: Scalars['Time'];
  endTime?: Maybe<Scalars['Time']>;
  name: Scalars['String'];
  billableId: Scalars['String'];
  chargeType: Scalars['String'];
  cost: Scalars['Int'];
  rate: Scalars['Int'];
  duration: Scalars['Int'];
  bandwidthGB: Scalars['Float'];
  estimatedCost: Scalars['Int'];
  deleted: Scalars['Boolean'];
  suspended: Scalars['Boolean'];
  serviceType: Scalars['String'];
  details: Array<ChargeDetail>;
};

export type ChargeDetail = {
  __typename?: 'ChargeDetail';
  plan: Scalars['String'];
  rateCentsPerHour: Scalars['Float'];
  usageHours: Scalars['Float'];
};

export type CidrBlockAndDescription = {
  __typename?: 'CidrBlockAndDescription';
  cidrBlock: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CidrBlockAndDescriptionInput = {
  cidrBlock: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CommitIgnored = ServiceEvent & {
  __typename?: 'CommitIgnored';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  commit: Scalars['String'];
  commitUrl: Scalars['String'];
};

export type CronJob = Service & {
  __typename?: 'CronJob';
  id: Scalars['String'];
  autoDeploy: Scalars['Boolean'];
  baseDir?: Maybe<Scalars['String']>;
  build?: Maybe<Build>;
  buildCommand: Scalars['String'];
  canBill: Scalars['Boolean'];
  command: Scalars['String'];
  createdAt: Scalars['Time'];
  dockerCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  env: Env;
  lastSuccessfulRunAt?: Maybe<Scalars['Time']>;
  metrics: Metrics;
  name: Scalars['String'];
  notifyOnFail: Setting;
  owner: Owner;
  pendingPermissions: Array<PendingPermission>;
  plan: Plan;
  referentPermissions: Array<Permission>;
  region: Region;
  repo: Repo;
  schedule: Scalars['String'];
  slug: Scalars['String'];
  sourceBranch: Scalars['String'];
  state: Scalars['String'];
  suspenders: Array<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  user: User;
  userFacingType: Scalars['String'];
  userFacingTypeSlug: UserFacingTypeSlug;
};


export type CronJobMetricsArgs = {
  historyMinutes?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

export type CronJobInput = {
  autoDeploy?: Maybe<Scalars['Boolean']>;
  baseDir?: Maybe<Scalars['String']>;
  branch: Scalars['String'];
  buildCommand: Scalars['String'];
  command: Scalars['String'];
  dockerCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  envId: Scalars['String'];
  envVars?: Maybe<Array<EnvVarInput>>;
  name: Scalars['String'];
  ownerId: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  repo: RepoInput;
  schedule: Scalars['String'];
};

export type CronJobRun = {
  __typename?: 'CronJobRun';
  id: Scalars['String'];
  startedAt?: Maybe<Scalars['Time']>;
  completedAt?: Maybe<Scalars['Time']>;
  status: Scalars['String'];
  triggeredByUser?: Maybe<Scalars['String']>;
  canceledByUser?: Maybe<Scalars['String']>;
};

export type CronJobRunEnded = ServiceEvent & {
  __typename?: 'CronJobRunEnded';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  cronJobRunId: Scalars['String'];
  cronJobRun?: Maybe<CronJobRun>;
  status: Scalars['Int'];
  newRun?: Maybe<CronJobRun>;
  reason?: Maybe<FailureReason>;
  user?: Maybe<User>;
};

export type CronJobRunStarted = ServiceEvent & {
  __typename?: 'CronJobRunStarted';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  cronJobRunId: Scalars['String'];
  cronJobRun?: Maybe<CronJobRun>;
  triggeredByUser?: Maybe<User>;
};

export type CustomDomain = {
  __typename?: 'CustomDomain';
  id: Scalars['String'];
  name: Scalars['String'];
  server: Server;
  redirectForName?: Maybe<Scalars['String']>;
  publicSuffix?: Maybe<Scalars['String']>;
  isApex: Scalars['Boolean'];
  verified: Scalars['Boolean'];
};

export type CustomDomainInput = {
  name: Scalars['String'];
  serverId: Scalars['String'];
};

export type Database = {
  __typename?: 'Database';
  id: Scalars['String'];
  ipAllowList?: Maybe<Array<CidrBlockAndDescription>>;
  backups?: Maybe<BackupPage>;
  canBill: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  databaseName: Scalars['String'];
  databaseUser: Scalars['String'];
  isMaxPlan: Scalars['Boolean'];
  maintenanceScheduledAt?: Maybe<Scalars['Time']>;
  metrics: DatabaseMetrics;
  name: Scalars['String'];
  owner: Owner;
  password?: Maybe<Scalars['String']>;
  pendingMaintenanceBy?: Maybe<Scalars['Time']>;
  externalHostname: Scalars['String'];
  externalPort: Scalars['Int'];
  plan: Scalars['String'];
  primary?: Maybe<Database>;
  productVersion: Scalars['String'];
  readReplicas?: Maybe<Scalars['Int']>;
  readReplicasPlan?: Maybe<Scalars['String']>;
  region: Region;
  replicas: Array<Database>;
  role: DatabaseRole;
  status: DatabaseStatus;
  storageAvailable?: Maybe<Scalars['String']>;
  storageTotal?: Maybe<Scalars['String']>;
  storageUsed?: Maybe<Scalars['String']>;
  storageUsedPercent?: Maybe<Scalars['String']>;
  suspenders: Array<Scalars['String']>;
  type: DatabaseType;
  postgresMajorVersion?: Maybe<Scalars['String']>;
};


export type DatabaseMetricsArgs = {
  historyMinutes?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

export type DatabaseInput = {
  databaseName?: Maybe<Scalars['String']>;
  databaseUser?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId: Scalars['String'];
  plan?: Maybe<Scalars['String']>;
  productVersion?: Maybe<Scalars['String']>;
  readReplicas?: Maybe<Scalars['Int']>;
  readReplicasPlan?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  type: DatabaseType;
  version: Scalars['String'];
};

export type DatabaseMetrics = {
  __typename?: 'DatabaseMetrics';
  samples: Array<DatabaseSampleValue>;
};

export type DatabaseReplicaInput = {
  clusterID: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  type: DatabaseType;
};

export enum DatabaseRole {
  Primary = 'PRIMARY',
  Replica = 'REPLICA'
}

export type DatabaseSampleValue = {
  __typename?: 'DatabaseSampleValue';
  time: Scalars['Time'];
  memory?: Maybe<Scalars['Float']>;
  cpu?: Maybe<Scalars['Int']>;
  storageAvailableBytes?: Maybe<Scalars['Int']>;
  storageUsedBytes?: Maybe<Scalars['Int']>;
  activeConnections?: Maybe<Scalars['Int']>;
  replicationLag?: Maybe<Scalars['Int']>;
};

export enum DatabaseStatus {
  Creating = 'CREATING',
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Suspended = 'SUSPENDED',
  Unknown = 'UNKNOWN'
}

export enum DatabaseType {
  Postgresql = 'POSTGRESQL'
}

export type DatabaseV2 = {
  __typename?: 'DatabaseV2';
  database: Database;
  v2Options: DatabaseV2Options;
};

export type DatabaseV2Input = {
  database: DatabaseInput;
  v2Options?: Maybe<DatabaseV2OptionsInput>;
};

export type DatabaseV2Options = {
  __typename?: 'DatabaseV2Options';
  highAvailability: Scalars['Boolean'];
};

export type DatabaseV2OptionsInput = {
  highAvailability: Scalars['Boolean'];
};

export type Deploy = {
  __typename?: 'Deploy';
  initialDeployHookFinishedAtUnixNano: Scalars['String'];
  branch: Scalars['String'];
  buildId: Scalars['String'];
  commitCreatedAt: Scalars['Time'];
  commitId: Scalars['String'];
  commitMessage: Scalars['String'];
  commitShortId: Scalars['String'];
  commitURL: Scalars['String'];
  createdAt: Scalars['Time'];
  finishedAt?: Maybe<Scalars['Time']>;
  finishedAtUnixNano: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['Int'];
  updatedAt: Scalars['Time'];
  server: Server;
  serviceConfigSnapshot?: Maybe<ServiceConfigSnapshot>;
  rollbackSupportStatus: RollbackSupportStatus;
};

export type DeployEnded = ServiceEvent & {
  __typename?: 'DeployEnded';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  deployId: Scalars['String'];
  deploy?: Maybe<Deploy>;
  status: Scalars['Int'];
  reason?: Maybe<BuildDeployEndReason>;
};

export type DeployStarted = ServiceEvent & {
  __typename?: 'DeployStarted';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  deployId: Scalars['String'];
  deploy?: Maybe<Deploy>;
  trigger?: Maybe<BuildDeployTrigger>;
};

export type Disk = {
  __typename?: 'Disk';
  id: Scalars['String'];
  name: Scalars['String'];
  sizeGB: Scalars['Int'];
  mountPath: Scalars['String'];
  plan?: Maybe<Plan>;
  fsOwnerID?: Maybe<Scalars['String']>;
  metrics: Array<DiskSample>;
  snapshots?: Maybe<Array<Maybe<DiskSnapshot>>>;
};


export type DiskMetricsArgs = {
  historyMinutes?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

export type DiskAction = {
  __typename?: 'DiskAction';
  created: Scalars['Boolean'];
  fromSizeGB?: Maybe<Scalars['Int']>;
  toSizeGB?: Maybe<Scalars['Int']>;
  deleted: Scalars['Boolean'];
};

export type DiskEvent = ServiceEvent & {
  __typename?: 'DiskEvent';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  action: DiskAction;
};

export type DiskInput = {
  name: Scalars['String'];
  sizeGB: Scalars['Int'];
  mountPath: Scalars['String'];
  fsOwnerID?: Maybe<Scalars['String']>;
};

export type DiskSample = {
  __typename?: 'DiskSample';
  time: Scalars['Time'];
  usedBytes: Scalars['Int'];
  availableBytes: Scalars['Int'];
};

export type DiskSnapshot = {
  __typename?: 'DiskSnapshot';
  createdAt: Scalars['Time'];
  snapshotKey: Scalars['String'];
};

export type Env = {
  __typename?: 'Env';
  id: Scalars['String'];
  isStatic: Scalars['Boolean'];
  language: Scalars['String'];
  name: Scalars['String'];
  sampleBuildCommand: Scalars['String'];
  sampleStartCommand: Scalars['String'];
};

export type EnvGroup = {
  __typename?: 'EnvGroup';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  userId: Scalars['String'];
  envVars: Array<EnvVar>;
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type EnvVar = {
  __typename?: 'EnvVar';
  id: Scalars['String'];
  isFile: Scalars['Boolean'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EnvVarInput = {
  id?: Maybe<Scalars['String']>;
  isFile: Scalars['Boolean'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ExtraInstancesChanged = ServiceEvent & {
  __typename?: 'ExtraInstancesChanged';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  fromInstances: Scalars['Int'];
  toInstances: Scalars['Int'];
};

export type FailureReason = {
  __typename?: 'FailureReason';
  evicted?: Maybe<Scalars['Boolean']>;
  nonZeroExit?: Maybe<Scalars['Int']>;
  oomKilled?: Maybe<OomKilledData>;
  timedOutSeconds?: Maybe<Scalars['Int']>;
  unhealthy?: Maybe<Scalars['String']>;
};

export type GitBranch = {
  __typename?: 'GitBranch';
  name: Scalars['String'];
  latestCommit?: Maybe<GitCommit>;
};

export type GitCommit = {
  __typename?: 'GitCommit';
  id: Scalars['String'];
  url: Scalars['String'];
  shortId: Scalars['String'];
  message: Scalars['String'];
  createdAt: Scalars['Time'];
};

export enum GitProvider {
  Github = 'GITHUB',
  Gitlab = 'GITLAB'
}

export type GitRepo = {
  __typename?: 'GitRepo';
  id: Scalars['String'];
  provider: GitProvider;
  providerId: Scalars['String'];
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  nameWithOwner?: Maybe<Scalars['String']>;
  owner: GitRepoOwner;
  shortDescriptionHTML?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  defaultBranch: GitBranch;
  languages?: Maybe<Array<Scalars['String']>>;
  branches: Array<GitBranch>;
  suggestedEnv?: Maybe<Scalars['String']>;
  suggestedStartCommand?: Maybe<Scalars['String']>;
  suggestedBuildCommand?: Maybe<Scalars['String']>;
  suggestedPublishPath?: Maybe<Scalars['String']>;
  suggestedFramework?: Maybe<Scalars['String']>;
  suggestions?: Maybe<Array<Suggestion>>;
};

export type GitRepoOwner = {
  __typename?: 'GitRepoOwner';
  id: Scalars['String'];
  login: Scalars['String'];
};

export type GithubAuthResult = {
  __typename?: 'GithubAuthResult';
  githubUser?: Maybe<GithubUser>;
  githubToken: Scalars['String'];
  idToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userExists: Scalars['Boolean'];
};

export type GithubUser = {
  __typename?: 'GithubUser';
  email: Scalars['String'];
  id: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
};

export type GitlabAuthResult = {
  __typename?: 'GitlabAuthResult';
  gitlabUser?: Maybe<GitlabUser>;
  idToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userExists: Scalars['Boolean'];
};

export type GitlabUser = {
  __typename?: 'GitlabUser';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
};

export type GoogleAuthResult = {
  __typename?: 'GoogleAuthResult';
  googleUser?: Maybe<GoogleUser>;
  idToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type GoogleUser = {
  __typename?: 'GoogleUser';
  id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Header = {
  __typename?: 'Header';
  id: Scalars['String'];
  createdAt: Scalars['Time'];
  key: Scalars['String'];
  path: Scalars['String'];
  serviceId: Scalars['String'];
  value: Scalars['String'];
};

export type HeaderInput = {
  id?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
  enabled: Scalars['Boolean'];
};

export type IacEnvVarInput = {
  serviceName: Scalars['String'];
  serviceType: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type IacExecution = {
  __typename?: 'IACExecution';
  id?: Maybe<Scalars['String']>;
  actionStates?: Maybe<Array<IacExecutionActionState>>;
  commit?: Maybe<GitCommit>;
  completedAt?: Maybe<Scalars['Time']>;
  createdAt?: Maybe<Scalars['Time']>;
  errors?: Maybe<Scalars['JSON']>;
  plan?: Maybe<Scalars['JSON']>;
  source?: Maybe<IacExecutionSource>;
  startedAt?: Maybe<Scalars['Time']>;
  state?: Maybe<IacExecutionState>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type IacExecutionActionState = {
  __typename?: 'IACExecutionActionState';
  state?: Maybe<IacExecutionState>;
  message?: Maybe<Scalars['String']>;
};

export type IacExecutionAndSource = {
  __typename?: 'IACExecutionAndSource';
  source?: Maybe<IacExecutionSource>;
  execution?: Maybe<IacExecution>;
};

export type IacExecutionSource = {
  __typename?: 'IACExecutionSource';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  lastSyncAt?: Maybe<Scalars['Time']>;
  repo?: Maybe<Repo>;
  branch?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  status?: Maybe<IacExecutionSourceStatus>;
  executions?: Maybe<IacExecutionsPage>;
  resources?: Maybe<Array<IacManagedResource>>;
};


export type IacExecutionSourceExecutionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Time']>;
};

export enum IacExecutionSourceStatus {
  Created = 'CREATED',
  Paused = 'PAUSED',
  InSync = 'IN_SYNC',
  Syncing = 'SYNCING',
  Error = 'ERROR'
}

export enum IacExecutionState {
  Created = 'CREATED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Error = 'ERROR',
  Success = 'SUCCESS'
}

export type IacExecutionsPage = {
  __typename?: 'IACExecutionsPage';
  hasMore?: Maybe<Scalars['Boolean']>;
  executions?: Maybe<Array<IacExecution>>;
};

export type IacManagedResource = Server | CronJob | Database | EnvGroup;

export type InitialDeployHookEnded = ServiceEvent & {
  __typename?: 'InitialDeployHookEnded';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  deployId: Scalars['String'];
  deploy?: Maybe<Deploy>;
  status: Scalars['String'];
  hookId: Scalars['Int'];
};

export type InitialDeployHookStarted = ServiceEvent & {
  __typename?: 'InitialDeployHookStarted';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  deployId: Scalars['String'];
  deploy?: Maybe<Deploy>;
  hookId: Scalars['Int'];
};

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['String'];
  total: Scalars['Int'];
  status: Scalars['String'];
  period: Period;
  startDate: Scalars['Time'];
  endDate?: Maybe<Scalars['Time']>;
  invoiceItems: Array<InvoiceItem>;
  billingInfo?: Maybe<BillingInfo>;
  pdfLink: Scalars['String'];
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  chargeAmount: Scalars['Int'];
  amountChargedToCredit: Scalars['Int'];
  amountChargedToCard: Scalars['Int'];
  serviceType: Scalars['String'];
  rate?: Maybe<Scalars['Int']>;
  duration: Scalars['Int'];
  bandwidthGB: Scalars['Float'];
  name: Scalars['String'];
  details: Array<InvoiceItemDetail>;
};

export type InvoiceItemDetail = {
  __typename?: 'InvoiceItemDetail';
  plan: Scalars['String'];
  rateCentsPerHour: Scalars['Float'];
  usageHours: Scalars['Float'];
};

export type Invoices = {
  __typename?: 'Invoices';
  cursor?: Maybe<Scalars['Int']>;
  invoices: Array<Invoice>;
  hasMore: Scalars['Boolean'];
};


export type Job = {
  __typename?: 'Job';
  id: Scalars['String'];
  serviceId: Scalars['String'];
  startCommand: Scalars['String'];
  planId: Scalars['String'];
  createdAt: Scalars['Time'];
  startedAt?: Maybe<Scalars['Time']>;
  finishedAt?: Maybe<Scalars['Time']>;
  status?: Maybe<JobStatus>;
};

export enum JobStatus {
  Failed = 'FAILED',
  Succeeded = 'SUCCEEDED'
}

export type LogEndpointInfo = {
  __typename?: 'LogEndpointInfo';
  endpoint?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type LogEntry = {
  __typename?: 'LogEntry';
  id: Scalars['String'];
  serviceId: Scalars['String'];
  buildId: Scalars['String'];
  deployId: Scalars['String'];
  timestamp: Scalars['String'];
  text: Scalars['String'];
};

export type Metrics = {
  __typename?: 'Metrics';
  samples: Array<SampleValue>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDiskToServer?: Maybe<Server>;
  addEnvGroupToService?: Maybe<EnvGroup>;
  addFeatureFlagToUser?: Maybe<User>;
  addUserToTeam?: Maybe<User>;
  adminLoginAs?: Maybe<AuthResult>;
  approveIACSync?: Maybe<IacExecutionAndSource>;
  buildCronJob?: Maybe<Build>;
  cancelCronJobRun?: Maybe<CronJobRun>;
  createCronJob?: Maybe<CronJob>;
  /** deprecated */
  createCustomDomain?: Maybe<CustomDomain>;
  createCustomDomains?: Maybe<Array<CustomDomain>>;
  createDatabase?: Maybe<Database>;
  createDatabaseBackup: Scalars['Boolean'];
  createDatabaseReplica?: Maybe<Database>;
  createDatabaseV2?: Maybe<DatabaseV2>;
  createEnvGroup?: Maybe<EnvGroup>;
  createPassword?: Maybe<AuthResult>;
  createServer?: Maybe<Server>;
  createTeam?: Maybe<Team>;
  deleteCronJob: Scalars['Boolean'];
  deleteCustomDomain: Scalars['Boolean'];
  deleteDatabase: Scalars['Boolean'];
  deleteDisk: Server;
  deleteEnvGroup: Scalars['Boolean'];
  deleteIACExecutionSource: Scalars['Boolean'];
  deleteServer: Scalars['Boolean'];
  deleteTeam: Scalars['Boolean'];
  deleteUserAccount: Scalars['Boolean'];
  deployServer?: Maybe<Deploy>;
  disable2FA: Scalars['Boolean'];
  githubAuth?: Maybe<GithubAuthResult>;
  gitlabAuth?: Maybe<GitlabAuthResult>;
  gitlabConnect: Scalars['Boolean'];
  googleAuth?: Maybe<GoogleAuthResult>;
  grantPermissions: Array<Permission>;
  inviteAndShare: Array<PendingPermission>;
  inviteToTeam?: Maybe<PendingUser>;
  inviteUser: Scalars['Boolean'];
  markTOSAccepted?: Maybe<User>;
  new2FABackupCodes: Array<TwoFactorBackupCode>;
  newOTPRequest?: Maybe<OtpRequest>;
  passwordResetConfirm?: Maybe<AuthResult>;
  performMaintenance: Database;
  performServerMaintenance: Server;
  planIACSync?: Maybe<IacExecutionAndSource>;
  provisionAPIToken?: Maybe<ApiToken>;
  refreshCustomDomainStatus: Scalars['Boolean'];
  removeEnvGroupFromService: Scalars['Boolean'];
  removePendingUserFromTeam: Scalars['Boolean'];
  removeSlackAuth: Owner;
  removeUserFromTeam: Scalars['Boolean'];
  removeUserGithub?: Maybe<User>;
  requestEmailReset: Scalars['Boolean'];
  resendEmailVerificationEmail?: Maybe<User>;
  resetEmail?: Maybe<User>;
  resetPassword: Scalars['Boolean'];
  restoreDiskSnapshot: Server;
  resumeDatabase: Database;
  resumeService: Service;
  revokeAPIToken: Scalars['Boolean'];
  revokeAllPermissions: Array<Scalars['String']>;
  rollbackToDeploy: Deploy;
  runCronJob: Scalars['Boolean'];
  saveEnvVars: Array<EnvVar>;
  saveHeaders: Array<Header>;
  saveRedirectRules: Array<RedirectRule>;
  saveSecretFiles: Array<EnvVar>;
  setIACAutoSync?: Maybe<IacExecutionAndSource>;
  signIn?: Maybe<AuthResult>;
  signUp?: Maybe<AuthResult>;
  slackAuth: Owner;
  startShell: Scalars['Boolean'];
  suspendDatabase: Database;
  suspendService: Service;
  unsubscribeForever: Scalars['Boolean'];
  updateAPIToken?: Maybe<ApiToken>;
  updateBillingInfo?: Maybe<Owner>;
  updateBillingInfoWithResult?: Maybe<BillingInfoOutput>;
  updateCard?: Maybe<Owner>;
  updateCronJobAutoDeploy?: Maybe<CronJob>;
  updateCronJobBaseDir?: Maybe<CronJob>;
  updateCronJobBranch?: Maybe<CronJob>;
  updateCronJobBuildCommand?: Maybe<CronJob>;
  updateCronJobCommand?: Maybe<CronJob>;
  updateCronJobDockerCommand?: Maybe<CronJob>;
  updateCronJobDockerfilePath?: Maybe<CronJob>;
  updateCronJobName?: Maybe<CronJob>;
  updateCronJobSchedule?: Maybe<CronJob>;
  updateDatabaseDisplayName?: Maybe<Database>;
  updateDatabaseIpAllowList?: Maybe<Database>;
  updateDatabasePlan?: Maybe<Database>;
  updateDatabaseReadReplicas?: Maybe<Database>;
  updateDisk?: Maybe<Server>;
  updateEnvGroupEnvVars: Array<EnvVar>;
  updateEnvGroupName?: Maybe<EnvGroup>;
  updateEnvGroupSecretFiles: Array<EnvVar>;
  updateIacSourceName: IacExecutionSource;
  updateOwnerNotificationSetting?: Maybe<Owner>;
  updateOwnerLogEndpoint?: Maybe<Owner>;
  updateServerAutoDeploy?: Maybe<Server>;
  updateServerAutoscalingConfig?: Maybe<Server>;
  updateServerBaseDir?: Maybe<Server>;
  updateServerBranch?: Maybe<Server>;
  updateServerBuildCommand?: Maybe<Server>;
  updateServerDockerCommand?: Maybe<Server>;
  updateServerDockerfilePath?: Maybe<Server>;
  updateServerHealthCheckPath?: Maybe<Server>;
  updateServerInstanceCount?: Maybe<Server>;
  updateServerName?: Maybe<Server>;
  updateServerPRPreviewsEnabled?: Maybe<Server>;
  updateServerPlan?: Maybe<Server>;
  updateServerStartCommand?: Maybe<Server>;
  updateServerStaticPublishPath?: Maybe<Server>;
  updateServiceNotificationSetting: Service;
  updateTeamProfile?: Maybe<Team>;
  updateUserNotificationSetting?: Maybe<User>;
  updateUserNotifyOnPrUpdate?: Maybe<User>;
  updateUserProfile?: Maybe<User>;
  verifyEmail?: Maybe<AuthResult>;
  verifyOneTimePassword?: Maybe<AuthResult>;
  verifyOTPRequest: Scalars['Boolean'];
};


export type MutationAddDiskToServerArgs = {
  serviceId: Scalars['String'];
  diskInput: DiskInput;
};


export type MutationAddEnvGroupToServiceArgs = {
  serviceId: Scalars['String'];
  envGroupId: Scalars['String'];
};


export type MutationAddFeatureFlagToUserArgs = {
  featureFlag: Scalars['String'];
};


export type MutationAddUserToTeamArgs = {
  teamId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationAdminLoginAsArgs = {
  requestId: Scalars['String'];
};


export type MutationApproveIacSyncArgs = {
  name?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  executionId?: Maybe<Scalars['String']>;
  envVars?: Maybe<Array<IacEnvVarInput>>;
};


export type MutationBuildCronJobArgs = {
  cronJobId: Scalars['String'];
};


export type MutationCancelCronJobRunArgs = {
  cronJobId: Scalars['String'];
  runId: Scalars['String'];
};


export type MutationCreateCronJobArgs = {
  cronJob: CronJobInput;
};


export type MutationCreateCustomDomainArgs = {
  customDomain: CustomDomainInput;
};


export type MutationCreateCustomDomainsArgs = {
  customDomain: CustomDomainInput;
};


export type MutationCreateDatabaseArgs = {
  database: DatabaseInput;
};


export type MutationCreateDatabaseBackupArgs = {
  id: Scalars['String'];
};


export type MutationCreateDatabaseReplicaArgs = {
  replica: DatabaseReplicaInput;
};


export type MutationCreateDatabaseV2Args = {
  database: DatabaseV2Input;
};


export type MutationCreateEnvGroupArgs = {
  name: Scalars['String'];
  envVarInputs: Array<EnvVarInput>;
  ownerId: Scalars['String'];
};


export type MutationCreatePasswordArgs = {
  password: Scalars['String'];
};


export type MutationCreateServerArgs = {
  server: ServerInput;
};


export type MutationCreateTeamArgs = {
  team: TeamInput;
};


export type MutationDeleteCronJobArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCustomDomainArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDatabaseArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDiskArgs = {
  serviceId: Scalars['String'];
};


export type MutationDeleteEnvGroupArgs = {
  id: Scalars['String'];
};


export type MutationDeleteIacExecutionSourceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteServerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserAccountArgs = {
  id: Scalars['String'];
  serviceUsers?: Maybe<Array<ServiceUserPair>>;
};


export type MutationDeployServerArgs = {
  id: Scalars['String'];
  clearCache?: Maybe<Scalars['Boolean']>;
};


export type MutationDisable2FaArgs = {
  userId: Scalars['String'];
};


export type MutationGithubAuthArgs = {
  accessCode: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type MutationGitlabAuthArgs = {
  accessCode: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type MutationGitlabConnectArgs = {
  accessCode: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationGoogleAuthArgs = {
  token: Scalars['String'];
};


export type MutationGrantPermissionsArgs = {
  permissions: Array<PermissionInput>;
};


export type MutationInviteAndShareArgs = {
  email: Scalars['String'];
  action: Scalars['String'];
  serviceId: Scalars['String'];
};


export type MutationInviteToTeamArgs = {
  email: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationInviteUserArgs = {
  email: Scalars['String'];
};


export type MutationNew2FaBackupCodesArgs = {
  userId: Scalars['String'];
};


export type MutationNewOtpRequestArgs = {
  userId: Scalars['String'];
};


export type MutationPasswordResetConfirmArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationPerformMaintenanceArgs = {
  databaseID: Scalars['String'];
  at?: Maybe<Scalars['Time']>;
};


export type MutationPerformServerMaintenanceArgs = {
  serverID: Scalars['String'];
  at?: Maybe<Scalars['Time']>;
};


export type MutationPlanIacSyncArgs = {
  name?: Maybe<Scalars['String']>;
  provider: GitProvider;
  repoOwner: Scalars['String'];
  repoName: Scalars['String'];
  branch?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  newGroupTrackExisting?: Maybe<Scalars['Boolean']>;
};


export type MutationProvisionApiTokenArgs = {
  label?: Maybe<Scalars['String']>;
};


export type MutationRefreshCustomDomainStatusArgs = {
  id: Scalars['String'];
};


export type MutationRemoveEnvGroupFromServiceArgs = {
  serviceId: Scalars['String'];
  envGroupId: Scalars['String'];
};


export type MutationRemovePendingUserFromTeamArgs = {
  teamId: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveSlackAuthArgs = {
  ownerId: Scalars['String'];
};


export type MutationRemoveUserFromTeamArgs = {
  teamId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRequestEmailResetArgs = {
  newEmail: Scalars['String'];
};


export type MutationResendEmailVerificationEmailArgs = {
  userId: Scalars['String'];
  next?: Maybe<Scalars['String']>;
};


export type MutationResetEmailArgs = {
  token: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRestoreDiskSnapshotArgs = {
  diskId: Scalars['String'];
  snapshotKey: Scalars['String'];
};


export type MutationResumeDatabaseArgs = {
  id: Scalars['String'];
};


export type MutationResumeServiceArgs = {
  id: Scalars['String'];
};


export type MutationRevokeApiTokenArgs = {
  id: Scalars['String'];
};


export type MutationRevokeAllPermissionsArgs = {
  subjectId: Scalars['String'];
  objectId: Scalars['String'];
};


export type MutationRollbackToDeployArgs = {
  id: Scalars['String'];
};


export type MutationRunCronJobArgs = {
  id: Scalars['String'];
};


export type MutationSaveEnvVarsArgs = {
  serviceId: Scalars['String'];
  envVarInputs: Array<EnvVarInput>;
};


export type MutationSaveHeadersArgs = {
  serviceId: Scalars['String'];
  headerInputs: Array<HeaderInput>;
};


export type MutationSaveRedirectRulesArgs = {
  serverId: Scalars['String'];
  rules: Array<RedirectRuleInput>;
};


export type MutationSaveSecretFilesArgs = {
  serviceId: Scalars['String'];
  fileInputs: Array<EnvVarInput>;
};


export type MutationSetIacAutoSyncArgs = {
  sourceId: Scalars['String'];
  autoSync: Scalars['Boolean'];
};


export type MutationSignInArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  signup: SignupInput;
};


export type MutationSlackAuthArgs = {
  ownerId: Scalars['String'];
  accessCode: Scalars['String'];
  redirect: Scalars['String'];
};


export type MutationStartShellArgs = {
  serviceId: Scalars['String'];
};


export type MutationSuspendDatabaseArgs = {
  id: Scalars['String'];
};


export type MutationSuspendServiceArgs = {
  id: Scalars['String'];
};


export type MutationUnsubscribeForeverArgs = {
  email: Scalars['String'];
};


export type MutationUpdateApiTokenArgs = {
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
};


export type MutationUpdateBillingInfoArgs = {
  info: BillingInfoInput;
};


export type MutationUpdateBillingInfoWithResultArgs = {
  info: BillingInfoInput;
};


export type MutationUpdateCardArgs = {
  id: Scalars['String'];
  token: Scalars['String'];
  brand: Scalars['String'];
  last4: Scalars['String'];
  country: Scalars['String'];
  region: Scalars['String'];
};


export type MutationUpdateCronJobAutoDeployArgs = {
  id: Scalars['String'];
  autoDeploy: Scalars['Boolean'];
};


export type MutationUpdateCronJobBaseDirArgs = {
  id: Scalars['String'];
  baseDir: Scalars['String'];
};


export type MutationUpdateCronJobBranchArgs = {
  id: Scalars['String'];
  branch: Scalars['String'];
};


export type MutationUpdateCronJobBuildCommandArgs = {
  id: Scalars['String'];
  buildCommand: Scalars['String'];
};


export type MutationUpdateCronJobCommandArgs = {
  id: Scalars['String'];
  command: Scalars['String'];
};


export type MutationUpdateCronJobDockerCommandArgs = {
  id: Scalars['String'];
  dockerCommand: Scalars['String'];
};


export type MutationUpdateCronJobDockerfilePathArgs = {
  id: Scalars['String'];
  dockerfilePath: Scalars['String'];
};


export type MutationUpdateCronJobNameArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateCronJobScheduleArgs = {
  id: Scalars['String'];
  schedule: Scalars['String'];
};


export type MutationUpdateDatabaseDisplayNameArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateDatabaseIpAllowListArgs = {
  id: Scalars['String'];
  list: Array<CidrBlockAndDescriptionInput>;
  oldList: Array<CidrBlockAndDescriptionInput>;
};


export type MutationUpdateDatabasePlanArgs = {
  id: Scalars['String'];
  plan: Scalars['String'];
};


export type MutationUpdateDatabaseReadReplicasArgs = {
  id: Scalars['String'];
  readReplicas: Scalars['Int'];
};


export type MutationUpdateDiskArgs = {
  serviceId: Scalars['String'];
  input: DiskInput;
};


export type MutationUpdateEnvGroupEnvVarsArgs = {
  id: Scalars['String'];
  envVarInputs: Array<EnvVarInput>;
};


export type MutationUpdateEnvGroupNameArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
};


export type MutationUpdateEnvGroupSecretFilesArgs = {
  id: Scalars['String'];
  fileInputs: Array<EnvVarInput>;
};


export type MutationUpdateIacSourceNameArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateOwnerNotificationSettingArgs = {
  id: Scalars['String'];
  notificationSetting: Setting;
};


export type MutationUpdateOwnerLogEndpointArgs = {
  id: Scalars['String'];
  endpoint: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateServerAutoDeployArgs = {
  id: Scalars['String'];
  autoDeploy: Scalars['Boolean'];
};


export type MutationUpdateServerAutoscalingConfigArgs = {
  id: Scalars['String'];
  autoscalingInput: AutoscalingInput;
};


export type MutationUpdateServerBaseDirArgs = {
  id: Scalars['String'];
  baseDir: Scalars['String'];
};


export type MutationUpdateServerBranchArgs = {
  id: Scalars['String'];
  branch: Scalars['String'];
};


export type MutationUpdateServerBuildCommandArgs = {
  id: Scalars['String'];
  buildCommand: Scalars['String'];
};


export type MutationUpdateServerDockerCommandArgs = {
  id: Scalars['String'];
  dockerCommand: Scalars['String'];
};


export type MutationUpdateServerDockerfilePathArgs = {
  id: Scalars['String'];
  dockerfilePath: Scalars['String'];
};


export type MutationUpdateServerHealthCheckPathArgs = {
  id: Scalars['String'];
  healthCheckPath?: Maybe<Scalars['String']>;
};


export type MutationUpdateServerInstanceCountArgs = {
  id: Scalars['String'];
  count: Scalars['Int'];
};


export type MutationUpdateServerNameArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateServerPrPreviewsEnabledArgs = {
  id: Scalars['String'];
  enabled: Scalars['Boolean'];
};


export type MutationUpdateServerPlanArgs = {
  id: Scalars['String'];
  plan: Scalars['String'];
};


export type MutationUpdateServerStartCommandArgs = {
  id: Scalars['String'];
  startCommand: Scalars['String'];
};


export type MutationUpdateServerStaticPublishPathArgs = {
  id: Scalars['String'];
  staticPublishPath: Scalars['String'];
};


export type MutationUpdateServiceNotificationSettingArgs = {
  id: Scalars['String'];
  notificationSetting: Setting;
};


export type MutationUpdateTeamProfileArgs = {
  id: Scalars['String'];
  profileInput: TeamProfileInput;
};


export type MutationUpdateUserNotificationSettingArgs = {
  id: Scalars['String'];
  notificationSetting: Setting;
};


export type MutationUpdateUserNotifyOnPrUpdateArgs = {
  id: Scalars['String'];
  notificationSetting: Setting;
};


export type MutationUpdateUserProfileArgs = {
  id: Scalars['String'];
  profileInput: UserProfileInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};


export type MutationVerifyOneTimePasswordArgs = {
  code: Scalars['String'];
};


export type MutationVerifyOtpRequestArgs = {
  requestId: Scalars['String'];
  otp: Scalars['String'];
};

export type OomKillToast = Toast & {
  __typename?: 'OOMKillToast';
  toast: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type OomKilledData = {
  __typename?: 'OOMKilledData';
  memoryRequest?: Maybe<Scalars['String']>;
  memoryLimit?: Maybe<Scalars['String']>;
};

export type OtpRequest = {
  __typename?: 'OTPRequest';
  id: Scalars['String'];
  key: Scalars['String'];
  qrCode: Scalars['String'];
};

export type Object = Server | CronJob;

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['String'];
  email: Scalars['String'];
  user?: Maybe<User>;
  team?: Maybe<Team>;
  balance: Scalars['Int'];
  canBill: Scalars['Boolean'];
  cardBrand: Scalars['String'];
  cardLast4: Scalars['String'];
  createdAt: Scalars['Time'];
  notifyOnFail: Setting;
  slackConnected: Scalars['Boolean'];
  billingInfo?: Maybe<BillingInfo>;
  /** Trial length in seconds */
  trialLength: Scalars['Int'];
  logEndpoint?: Maybe<LogEndpointInfo>;
};

export type PendingPermission = {
  __typename?: 'PendingPermission';
  email: Scalars['String'];
  action: Scalars['String'];
};

export type PendingUser = {
  __typename?: 'PendingUser';
  email: Scalars['String'];
};

export type Period = {
  __typename?: 'Period';
  year: Scalars['Int'];
  month: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  subject: Subject;
  action: Scalars['String'];
  object: Object;
};

export type PermissionInput = {
  subjectId: Scalars['String'];
  action: Scalars['String'];
  objectId: Scalars['String'];
};

export type Plan = {
  __typename?: 'Plan';
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type PlanChanged = ServiceEvent & {
  __typename?: 'PlanChanged';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  from: Scalars['String'];
  to: Scalars['String'];
};

export type PlanData = {
  __typename?: 'PlanData';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  cpu: Scalars['String'];
  mem: Scalars['String'];
  size: Scalars['String'];
  needsPaymentInfo: Scalars['Boolean'];
};

export type PullRequest = {
  __typename?: 'PullRequest';
  id: Scalars['String'];
  providerPullRequestId: Scalars['String'];
  number: Scalars['String'];
  url: Scalars['String'];
  title: Scalars['String'];
  userLogin: Scalars['String'];
  userURL: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type PullRequestServer = {
  __typename?: 'PullRequestServer';
  server?: Maybe<Server>;
  pullRequest: PullRequest;
  executionSourceID?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  initialDeployHookLogs: Array<LogEntry>;
  allEnvs: Array<Env>;
  allRegions: Array<Region>;
  build?: Maybe<Build>;
  buildLogs: Array<LogEntry>;
  buildsForCronJob: Array<Build>;
  cannyToken: Scalars['String'];
  certificate?: Maybe<Certificate>;
  /** Communal services are services made by the user that are part of a team with more than one member */
  communalServicesForUser: Array<Service>;
  cronJob?: Maybe<CronJob>;
  cronJobRuns: Array<CronJobRun>;
  currentLiveDeploy?: Maybe<Deploy>;
  customDomains: Array<CustomDomain>;
  database?: Maybe<Database>;
  databaseV2Options?: Maybe<DatabaseV2Options>;
  databasePlans: Array<PlanData>;
  databasesForOwner: Array<Database>;
  databasesForUser: Array<Database>;
  deploy?: Maybe<Deploy>;
  deployLogs: Array<LogEntry>;
  deploys: Array<Deploy>;
  envGroup?: Maybe<EnvGroup>;
  envGroupNameExists: Scalars['Boolean'];
  envGroupsForOwner: Array<EnvGroup>;
  envGroupsForService: Array<EnvGroup>;
  envVarsForService: Array<EnvVar>;
  gitRepo?: Maybe<GitRepo>;
  headersForService: Array<Header>;
  iacExecution?: Maybe<IacExecution>;
  iacExecutionSource?: Maybe<IacExecutionSource>;
  iacExecutionSources?: Maybe<Array<IacExecutionSource>>;
  invoice?: Maybe<Invoice>;
  invoicesForOwner: Invoices;
  jobs?: Maybe<Array<Maybe<Job>>>;
  newPaidServiceAllowed: Scalars['Boolean'];
  owner?: Maybe<Owner>;
  pullRequestServers?: Maybe<Array<Maybe<PullRequestServer>>>;
  redirectRules: Array<RedirectRule>;
  server?: Maybe<Server>;
  serverPlans: Array<PlanData>;
  service?: Maybe<Service>;
  serviceGroupNameExists: Scalars['Boolean'];
  serviceLogs: Array<LogEntry>;
  serviceMetrics: ServiceMetrics;
  servicesForEnvGroup: Array<Service>;
  servicesForOwner: Array<Service>;
  servicesForUser: Array<Service>;
  staticPlans: Array<PlanData>;
  team?: Maybe<Team>;
  teamNameExistsForEmail: Scalars['Boolean'];
  teamsForUser: Array<Team>;
  testToast: Scalars['Boolean'];
  twoFactorBackupCodes: Array<TwoFactorBackupCode>;
  unbilledChargesForOwner: Array<Charge>;
  user?: Maybe<User>;
  userRepoList: Array<GitRepo>;
  validatePasswordResetToken: Scalars['String'];
  serviceEvents: ServiceEventsResult;
};


export type QueryInitialDeployHookLogsArgs = {
  deployId: Scalars['String'];
};


export type QueryBuildArgs = {
  id: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
};


export type QueryBuildLogsArgs = {
  buildId: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
};


export type QueryBuildsForCronJobArgs = {
  cronJobId: Scalars['String'];
  limit: Scalars['Int'];
};


export type QueryCannyTokenArgs = {
  userId: Scalars['String'];
};


export type QueryCertificateArgs = {
  domain: Scalars['String'];
  serverId: Scalars['String'];
};


export type QueryCronJobArgs = {
  id: Scalars['String'];
};


export type QueryCronJobRunsArgs = {
  cronJobId: Scalars['String'];
};


export type QueryCurrentLiveDeployArgs = {
  serverId: Scalars['String'];
};


export type QueryCustomDomainsArgs = {
  serverId: Scalars['String'];
};


export type QueryDatabaseArgs = {
  id: Scalars['String'];
};


export type QueryDatabaseV2OptionsArgs = {
  databaseId: Scalars['String'];
};


export type QueryDatabasesForOwnerArgs = {
  ownerId: Scalars['String'];
};


export type QueryDatabasesForUserArgs = {
  userId: Scalars['String'];
};


export type QueryDeployArgs = {
  id: Scalars['String'];
};


export type QueryDeployLogsArgs = {
  deployId: Scalars['String'];
};


export type QueryDeploysArgs = {
  serverId: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QueryEnvGroupArgs = {
  id: Scalars['String'];
};


export type QueryEnvGroupNameExistsArgs = {
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
};


export type QueryEnvGroupsForOwnerArgs = {
  ownerId: Scalars['String'];
};


export type QueryEnvGroupsForServiceArgs = {
  serviceId: Scalars['String'];
};


export type QueryEnvVarsForServiceArgs = {
  serviceId: Scalars['String'];
  isFile: Scalars['Boolean'];
};


export type QueryGitRepoArgs = {
  id?: Maybe<Scalars['String']>;
  provider: GitProvider;
  ownerName?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
};


export type QueryHeadersForServiceArgs = {
  serviceId: Scalars['String'];
};


export type QueryIacExecutionArgs = {
  id: Scalars['String'];
};


export type QueryIacExecutionSourceArgs = {
  id: Scalars['String'];
};


export type QueryIacExecutionSourcesArgs = {
  ownerId?: Maybe<Scalars['String']>;
};


export type QueryInvoiceArgs = {
  id: Scalars['String'];
};


export type QueryInvoicesForOwnerArgs = {
  ownerId: Scalars['String'];
  cursor?: Maybe<Scalars['Int']>;
};


export type QueryJobsArgs = {
  serverId: Scalars['String'];
};


export type QueryNewPaidServiceAllowedArgs = {
  userId: Scalars['String'];
};


export type QueryOwnerArgs = {
  ownerId: Scalars['String'];
};


export type QueryPullRequestServersArgs = {
  serverId: Scalars['String'];
};


export type QueryRedirectRulesArgs = {
  serverId: Scalars['String'];
};


export type QueryServerArgs = {
  id: Scalars['String'];
};


export type QueryServiceArgs = {
  id: Scalars['String'];
};


export type QueryServiceGroupNameExistsArgs = {
  ownerId: Scalars['String'];
  name: Scalars['String'];
};


export type QueryServiceLogsArgs = {
  serviceId: Scalars['String'];
};


export type QueryServiceMetricsArgs = {
  serviceId: Scalars['String'];
  historyMinutes: Scalars['Int'];
  step: Scalars['Int'];
};


export type QueryServicesForEnvGroupArgs = {
  envGroupId: Scalars['String'];
};


export type QueryServicesForOwnerArgs = {
  ownerId: Scalars['String'];
  includeSharedServices?: Maybe<Scalars['Boolean']>;
};


export type QueryServicesForUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryTeamArgs = {
  teamId: Scalars['String'];
};


export type QueryTeamNameExistsForEmailArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type QueryTeamsForUserArgs = {
  userId: Scalars['String'];
};


export type QueryTestToastArgs = {
  id: Scalars['String'];
};


export type QueryTwoFactorBackupCodesArgs = {
  userId: Scalars['String'];
};


export type QueryUnbilledChargesForOwnerArgs = {
  ownerId: Scalars['String'];
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>;
};


export type QueryUserRepoListArgs = {
  id: Scalars['String'];
};


export type QueryValidatePasswordResetTokenArgs = {
  token: Scalars['String'];
};


export type QueryServiceEventsArgs = {
  serviceId: Scalars['String'];
  before?: Maybe<Scalars['Time']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RedirectRule = {
  __typename?: 'RedirectRule';
  id: Scalars['String'];
  sequence: Scalars['Int'];
  source: Scalars['String'];
  destination: Scalars['String'];
  enabled: Scalars['Boolean'];
  httpStatus: Scalars['Int'];
  createdAt: Scalars['Time'];
  override: Scalars['Boolean'];
  serverId: Scalars['String'];
};

export type RedirectRuleInput = {
  id?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  destination: Scalars['String'];
  enabled: Scalars['Boolean'];
  override?: Maybe<Scalars['Boolean']>;
  httpStatus?: Maybe<Scalars['Int']>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['String'];
  description: Scalars['String'];
};

export type Repo = {
  __typename?: 'Repo';
  id: Scalars['String'];
  name: Scalars['String'];
  provider: GitProvider;
  providerId: Scalars['String'];
  ownerName: Scalars['String'];
  webURL: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  isFork: Scalars['Boolean'];
};

export type RepoInput = {
  name: Scalars['String'];
  ownerName: Scalars['String'];
  webURL: Scalars['String'];
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  provider: GitProvider;
  providerId: Scalars['String'];
  defaultBranchName: Scalars['String'];
};

export enum RollbackSupportStatus {
  RollbackSupportUnknown = 'ROLLBACK_SUPPORT_UNKNOWN',
  RollbackSupported = 'ROLLBACK_SUPPORTED',
  RollbackUnsupportedNoServiceConfigSnapshot = 'ROLLBACK_UNSUPPORTED_NO_SERVICE_CONFIG_SNAPSHOT',
  RollbackUnsupportedDeployDidNotFinish = 'ROLLBACK_UNSUPPORTED_DEPLOY_DID_NOT_FINISH',
  RollbackUnsupportedDeployNotTerminal = 'ROLLBACK_UNSUPPORTED_DEPLOY_NOT_TERMINAL',
  RollbackUnsupportedDeployLive = 'ROLLBACK_UNSUPPORTED_DEPLOY_LIVE'
}

export type SampleValue = {
  __typename?: 'SampleValue';
  time: Scalars['Time'];
  memory?: Maybe<Scalars['Float']>;
  memoryAvgPerMille?: Maybe<Scalars['Int']>;
  cpu?: Maybe<Scalars['Int']>;
  cpuAvgPerMille?: Maybe<Scalars['Int']>;
  instances?: Maybe<Scalars['Int']>;
};

export type Server = Service & {
  __typename?: 'Server';
  id: Scalars['String'];
  autoDeploy: Scalars['Boolean'];
  autoscalingConfig?: Maybe<AutoscalingConfig>;
  bandwidthMB: Bandwidth;
  baseDir?: Maybe<Scalars['String']>;
  buildCommand: Scalars['String'];
  canBill: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  deletedAt?: Maybe<Scalars['Time']>;
  deploy?: Maybe<Deploy>;
  deployKey?: Maybe<Scalars['String']>;
  disk?: Maybe<Disk>;
  dockerCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  env: Env;
  extraInstances: Scalars['Int'];
  healthCheckPath: Scalars['String'];
  isPrivate?: Maybe<Scalars['Boolean']>;
  isWorker: Scalars['Boolean'];
  maintenanceScheduledAt?: Maybe<Scalars['Time']>;
  metrics: Metrics;
  name: Scalars['String'];
  notifyOnFail: Setting;
  openPorts?: Maybe<Scalars['JSON']>;
  owner: Owner;
  parentServer?: Maybe<Server>;
  pendingMaintenanceBy?: Maybe<Scalars['Time']>;
  pendingPermissions: Array<PendingPermission>;
  plan: Plan;
  prPreviewsEnabled: Scalars['Boolean'];
  pullRequestId: Scalars['String'];
  referentPermissions: Array<Permission>;
  region: Region;
  repo: Repo;
  slug: Scalars['String'];
  sourceBranch: Scalars['String'];
  startCommand: Scalars['String'];
  state: Scalars['String'];
  staticPublishPath: Scalars['String'];
  suspenders: Array<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  url: Scalars['String'];
  user: User;
  userFacingType: Scalars['String'];
  userFacingTypeSlug: UserFacingTypeSlug;
  verifiedDomains?: Maybe<Array<Scalars['String']>>;
};


export type ServerMetricsArgs = {
  historyMinutes?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

export type ServerAvailable = ServiceEvent & {
  __typename?: 'ServerAvailable';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
};

export type ServerFailed = ServiceEvent & {
  __typename?: 'ServerFailed';
  id: Scalars['String'];
  service: Service;
  timestamp: Scalars['Time'];
  reason?: Maybe<FailureReason>;
};

export type ServerInput = {
  autoDeploy?: Maybe<Scalars['Boolean']>;
  baseDir?: Maybe<Scalars['String']>;
  branch: Scalars['String'];
  buildCommand: Scalars['String'];
  disk?: Maybe<DiskInput>;
  dockerCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  envId: Scalars['String'];
  envVars?: Maybe<Array<EnvVarInput>>;
  healthCheckPath?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  isWorker?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  ownerId: Scalars['String'];
  plan?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  repo: RepoInput;
  startCommand?: Maybe<Scalars['String']>;
  staticPublishPath?: Maybe<Scalars['String']>;
};

export type Service = {
  id: Scalars['String'];
  autoDeploy: Scalars['Boolean'];
  baseDir?: Maybe<Scalars['String']>;
  buildCommand: Scalars['String'];
  canBill: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  dockerCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  env: Env;
  metrics: Metrics;
  name: Scalars['String'];
  notifyOnFail: Setting;
  owner: Owner;
  pendingPermissions: Array<PendingPermission>;
  plan: Plan;
  referentPermissions: Array<Permission>;
  region: Region;
  repo: Repo;
  slug: Scalars['String'];
  sourceBranch: Scalars['String'];
  state: Scalars['String'];
  suspenders: Array<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  user: User;
  userFacingType: Scalars['String'];
  userFacingTypeSlug: UserFacingTypeSlug;
};


export type ServiceMetricsArgs = {
  historyMinutes?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

export type ServiceConfigSnapshot = {
  __typename?: 'ServiceConfigSnapshot';
  deletedEnvGroupCount: Scalars['Int'];
  dockerCommand?: Maybe<Scalars['String']>;
  envGroups: Array<EnvGroup>;
  envVars: Array<EnvVar>;
  healthCheckPath?: Maybe<Scalars['String']>;
  instances: Scalars['Int'];
  plan?: Maybe<PlanData>;
  runCommand?: Maybe<Scalars['String']>;
};

export type ServiceEvent = {
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
};

export type ServiceEventsResult = {
  __typename?: 'ServiceEventsResult';
  hasMore: Scalars['Boolean'];
  events: Array<ServiceEvent>;
};

export type ServiceMetrics = {
  __typename?: 'ServiceMetrics';
  samples: Array<SampleValue>;
};

export type ServiceResumed = ServiceEvent & {
  __typename?: 'ServiceResumed';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
};

export type ServiceSuspended = ServiceEvent & {
  __typename?: 'ServiceSuspended';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
};

export type ServiceUserPair = {
  serviceId: Scalars['String'];
  userId: Scalars['String'];
};

export enum Setting {
  Default = 'DEFAULT',
  Notify = 'NOTIFY',
  Ignore = 'IGNORE'
}

export type SignupInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  githubId?: Maybe<Scalars['String']>;
  githubToken?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  gitlabId?: Maybe<Scalars['String']>;
  inviteCode?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
};

export type Subject = User;

export type Subscription = {
  __typename?: 'Subscription';
  buildLogAdded?: Maybe<LogEntry>;
  buildsForCronJob?: Maybe<Build>;
  certificateStatus?: Maybe<Certificate>;
  cronJobRuns?: Maybe<CronJobRun>;
  database?: Maybe<Database>;
  databaseSuspension?: Maybe<SuspensionInfo>;
  deployCreated?: Maybe<Deploy>;
  deployUpdated?: Maybe<Deploy>;
  iacExecution?: Maybe<IacExecution>;
  iacExecutions?: Maybe<IacExecution>;
  /** deprecated */
  pullRequestServerCreated?: Maybe<PullRequestServer>;
  pullRequestServerCreatedOrDeleted?: Maybe<PullRequestServer>;
  serviceLogAdded?: Maybe<LogEntry>;
  serviceSuspension?: Maybe<SuspensionInfo>;
  serviceUpdated: Service;
  toast?: Maybe<Toast>;
  serviceEvents?: Maybe<ServiceEvent>;
};


export type SubscriptionBuildLogAddedArgs = {
  buildId: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
};


export type SubscriptionBuildsForCronJobArgs = {
  cronJobId: Scalars['String'];
};


export type SubscriptionCertificateStatusArgs = {
  domain: Scalars['String'];
  serverId: Scalars['String'];
};


export type SubscriptionCronJobRunsArgs = {
  cronJobId: Scalars['String'];
};


export type SubscriptionDatabaseArgs = {
  id: Scalars['String'];
};


export type SubscriptionDatabaseSuspensionArgs = {
  id: Scalars['String'];
};


export type SubscriptionDeployCreatedArgs = {
  serverId: Scalars['String'];
};


export type SubscriptionDeployUpdatedArgs = {
  deployId: Scalars['String'];
};


export type SubscriptionIacExecutionArgs = {
  id: Scalars['String'];
};


export type SubscriptionIacExecutionsArgs = {
  sourceId: Scalars['String'];
};


export type SubscriptionPullRequestServerCreatedArgs = {
  serverId: Scalars['String'];
};


export type SubscriptionPullRequestServerCreatedOrDeletedArgs = {
  serverId: Scalars['String'];
};


export type SubscriptionServiceLogAddedArgs = {
  serviceId: Scalars['String'];
};


export type SubscriptionServiceSuspensionArgs = {
  serviceId: Scalars['String'];
};


export type SubscriptionServiceUpdatedArgs = {
  id: Scalars['String'];
};


export type SubscriptionServiceEventsArgs = {
  serviceId: Scalars['String'];
};

export type Suggestion = {
  __typename?: 'Suggestion';
  framework?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  startCommand?: Maybe<Scalars['String']>;
  publishPath?: Maybe<Scalars['String']>;
};

export type SuspenderAdded = ServiceEvent & {
  __typename?: 'SuspenderAdded';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  actor: Scalars['String'];
  suspendedByUser?: Maybe<User>;
};

export type SuspenderRemoved = ServiceEvent & {
  __typename?: 'SuspenderRemoved';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  actor: Scalars['String'];
  resumedByUser?: Maybe<User>;
};

export type SuspensionInfo = {
  __typename?: 'SuspensionInfo';
  id: Scalars['String'];
  state: Scalars['String'];
  suspenders: Array<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  users: Array<User>;
  pendingUsers: Array<PendingUser>;
};

export type TeamInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  transfer: Scalars['Boolean'];
  card?: Maybe<CardInput>;
};

export type TeamProfileInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type TestToast = Toast & {
  __typename?: 'TestToast';
  toast: Scalars['String'];
};


export type Toast = {
  toast: Scalars['String'];
};

export type TwoFactorBackupCode = {
  __typename?: 'TwoFactorBackupCode';
  id: Scalars['String'];
  code: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  apiTokens?: Maybe<Array<ApiToken>>;
  balance: Scalars['Int'];
  canBill: Scalars['Boolean'];
  cardBrand: Scalars['String'];
  cardLast4: Scalars['String'];
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  featureFlags: Array<Scalars['String']>;
  githubId: Scalars['String'];
  gitlabId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  notifyOnFail: Setting;
  notifyOnPrUpdate: Setting;
  otpEnabled: Scalars['Boolean'];
  passwordExists: Scalars['Boolean'];
  tosAcceptedAt: Scalars['Time'];
  intercomHMAC?: Maybe<Scalars['String']>;
};

export enum UserFacingTypeSlug {
  Cron = 'cron',
  Pserv = 'pserv',
  Static = 'static',
  Web = 'web',
  Worker = 'worker'
}

export type UserProfileInput = {
  name: Scalars['String'];
};

export type UserServerUnhealthy = ServiceEvent & {
  __typename?: 'UserServerUnhealthy';
  id: Scalars['String'];
  timestamp: Scalars['Time'];
  service: Service;
  message: Scalars['String'];
};

export type DeployQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeployQuery = (
  { __typename?: 'Query' }
  & { deploy?: Maybe<(
    { __typename?: 'Deploy' }
    & Pick<Deploy, 'id' | 'status'>
    & { server: (
      { __typename?: 'Server' }
      & Pick<Server, 'id' | 'url'>
    ) }
  )> }
);

export type DeploysQueryVariables = Exact<{
  serverId: Scalars['String'];
}>;


export type DeploysQuery = (
  { __typename?: 'Query' }
  & { deploys: Array<(
    { __typename?: 'Deploy' }
    & Pick<Deploy, 'id' | 'status' | 'branch' | 'commitId'>
    & { server: (
      { __typename?: 'Server' }
      & Pick<Server, 'id' | 'name'>
    ) }
  )> }
);

export type PullRequestServersQueryVariables = Exact<{
  serverId: Scalars['String'];
}>;


export type PullRequestServersQuery = (
  { __typename?: 'Query' }
  & { pullRequestServers?: Maybe<Array<Maybe<(
    { __typename?: 'PullRequestServer' }
    & { pullRequest: (
      { __typename?: 'PullRequest' }
      & Pick<PullRequest, 'number'>
    ), server?: Maybe<(
      { __typename?: 'Server' }
      & Pick<Server, 'id'>
    )> }
  )>>> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'AuthResult' }
    & Pick<AuthResult, 'idToken'>
  )> }
);


export const DeployDocument = gql`
    query Deploy($id: String!) {
  deploy(id: $id) {
    id
    status
    server {
      id
      url
    }
  }
}
    `;
export const DeploysDocument = gql`
    query Deploys($serverId: String!) {
  deploys(serverId: $serverId) {
    id
    status
    branch
    commitId
    server {
      id
      name
    }
  }
}
    `;
export const PullRequestServersDocument = gql`
    query PullRequestServers($serverId: String!) {
  pullRequestServers(serverId: $serverId) {
    pullRequest {
      number
    }
    server {
      id
    }
  }
}
    `;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    idToken
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Deploy(variables: DeployQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeployQuery> {
      return withWrapper(() => client.request<DeployQuery>(DeployDocument, variables, requestHeaders));
    },
    Deploys(variables: DeploysQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeploysQuery> {
      return withWrapper(() => client.request<DeploysQuery>(DeploysDocument, variables, requestHeaders));
    },
    PullRequestServers(variables: PullRequestServersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PullRequestServersQuery> {
      return withWrapper(() => client.request<PullRequestServersQuery>(PullRequestServersDocument, variables, requestHeaders));
    },
    SignIn(variables: SignInMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignInMutation> {
      return withWrapper(() => client.request<SignInMutation>(SignInDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;