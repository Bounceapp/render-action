require('./sourcemap-register.js');module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1498:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSdk = exports.SignInDocument = exports.PullRequestServersDocument = exports.DeploysDocument = exports.DeployDocument = exports.UserFacingTypeSlug = exports.StatusState = exports.StatusLabel = exports.Setting = exports.RollbackSupportStatus = exports.PromotionStatus = exports.PermissionStatus = exports.JobStatus = exports.IacExecutionState = exports.IacExecutionSourceStatus = exports.GitProvider = exports.DatabaseType = exports.DatabaseStatus = exports.DatabaseRole = exports.BillingInfoResponse = exports.BackupStatus = void 0;
const graphql_tag_1 = __importDefault(__webpack_require__(8377));
var BackupStatus;
(function (BackupStatus) {
    BackupStatus["InProgress"] = "IN_PROGRESS";
    BackupStatus["Done"] = "DONE";
})(BackupStatus = exports.BackupStatus || (exports.BackupStatus = {}));
var BillingInfoResponse;
(function (BillingInfoResponse) {
    BillingInfoResponse["Success"] = "SUCCESS";
    BillingInfoResponse["AddressFailed"] = "ADDRESS_FAILED";
    BillingInfoResponse["VatFailed"] = "VAT_FAILED";
})(BillingInfoResponse = exports.BillingInfoResponse || (exports.BillingInfoResponse = {}));
var DatabaseRole;
(function (DatabaseRole) {
    DatabaseRole["Primary"] = "PRIMARY";
    DatabaseRole["Replica"] = "REPLICA";
})(DatabaseRole = exports.DatabaseRole || (exports.DatabaseRole = {}));
var DatabaseStatus;
(function (DatabaseStatus) {
    DatabaseStatus["Creating"] = "CREATING";
    DatabaseStatus["Available"] = "AVAILABLE";
    DatabaseStatus["Unavailable"] = "UNAVAILABLE";
    DatabaseStatus["Suspended"] = "SUSPENDED";
    DatabaseStatus["Unknown"] = "UNKNOWN";
})(DatabaseStatus = exports.DatabaseStatus || (exports.DatabaseStatus = {}));
var DatabaseType;
(function (DatabaseType) {
    DatabaseType["Postgresql"] = "POSTGRESQL";
    DatabaseType["Redis"] = "REDIS";
})(DatabaseType = exports.DatabaseType || (exports.DatabaseType = {}));
var GitProvider;
(function (GitProvider) {
    GitProvider["Github"] = "GITHUB";
    GitProvider["Gitlab"] = "GITLAB";
})(GitProvider = exports.GitProvider || (exports.GitProvider = {}));
var IacExecutionSourceStatus;
(function (IacExecutionSourceStatus) {
    IacExecutionSourceStatus["Created"] = "CREATED";
    IacExecutionSourceStatus["Paused"] = "PAUSED";
    IacExecutionSourceStatus["InSync"] = "IN_SYNC";
    IacExecutionSourceStatus["Syncing"] = "SYNCING";
    IacExecutionSourceStatus["Error"] = "ERROR";
})(IacExecutionSourceStatus = exports.IacExecutionSourceStatus || (exports.IacExecutionSourceStatus = {}));
var IacExecutionState;
(function (IacExecutionState) {
    IacExecutionState["Created"] = "CREATED";
    IacExecutionState["Pending"] = "PENDING";
    IacExecutionState["Running"] = "RUNNING";
    IacExecutionState["Error"] = "ERROR";
    IacExecutionState["Success"] = "SUCCESS";
})(IacExecutionState = exports.IacExecutionState || (exports.IacExecutionState = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["Failed"] = "FAILED";
    JobStatus["Succeeded"] = "SUCCEEDED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var PermissionStatus;
(function (PermissionStatus) {
    PermissionStatus["Pending"] = "pending";
    PermissionStatus["Granted"] = "granted";
})(PermissionStatus = exports.PermissionStatus || (exports.PermissionStatus = {}));
var PromotionStatus;
(function (PromotionStatus) {
    PromotionStatus["Active"] = "ACTIVE";
    PromotionStatus["Expired"] = "EXPIRED";
    PromotionStatus["Invalid"] = "INVALID";
})(PromotionStatus = exports.PromotionStatus || (exports.PromotionStatus = {}));
var RollbackSupportStatus;
(function (RollbackSupportStatus) {
    RollbackSupportStatus["RollbackSupportUnknown"] = "ROLLBACK_SUPPORT_UNKNOWN";
    RollbackSupportStatus["RollbackSupported"] = "ROLLBACK_SUPPORTED";
    RollbackSupportStatus["RollbackUnsupportedNoServiceConfigSnapshot"] = "ROLLBACK_UNSUPPORTED_NO_SERVICE_CONFIG_SNAPSHOT";
    RollbackSupportStatus["RollbackUnsupportedDeployDidNotFinish"] = "ROLLBACK_UNSUPPORTED_DEPLOY_DID_NOT_FINISH";
    RollbackSupportStatus["RollbackUnsupportedDeployNotTerminal"] = "ROLLBACK_UNSUPPORTED_DEPLOY_NOT_TERMINAL";
    RollbackSupportStatus["RollbackUnsupportedDeployLive"] = "ROLLBACK_UNSUPPORTED_DEPLOY_LIVE";
})(RollbackSupportStatus = exports.RollbackSupportStatus || (exports.RollbackSupportStatus = {}));
var Setting;
(function (Setting) {
    Setting["Default"] = "DEFAULT";
    Setting["Notify"] = "NOTIFY";
    Setting["Ignore"] = "IGNORE";
})(Setting = exports.Setting || (exports.Setting = {}));
var StatusLabel;
(function (StatusLabel) {
    StatusLabel["DeploySucceeded"] = "DEPLOY_SUCCEEDED";
    StatusLabel["DeployInProgress"] = "DEPLOY_IN_PROGRESS";
    StatusLabel["DeployFailed"] = "DEPLOY_FAILED";
    StatusLabel["ServiceFailed"] = "SERVICE_FAILED";
    StatusLabel["MaintenanceScheduled"] = "MAINTENANCE_SCHEDULED";
    StatusLabel["MaintenanceInProgress"] = "MAINTENANCE_IN_PROGRESS";
    StatusLabel["RunSucceeded"] = "RUN_SUCCEEDED";
    StatusLabel["Running"] = "RUNNING";
    StatusLabel["RunFailed"] = "RUN_FAILED";
    StatusLabel["RunCancelled"] = "RUN_CANCELLED";
    StatusLabel["Available"] = "AVAILABLE";
    StatusLabel["Creating"] = "CREATING";
    StatusLabel["Unavailable"] = "UNAVAILABLE";
    StatusLabel["Unknown"] = "UNKNOWN";
    StatusLabel["Suspended"] = "SUSPENDED";
})(StatusLabel = exports.StatusLabel || (exports.StatusLabel = {}));
var StatusState;
(function (StatusState) {
    StatusState["Success"] = "SUCCESS";
    StatusState["Danger"] = "DANGER";
    StatusState["Warning"] = "WARNING";
    StatusState["Processing"] = "PROCESSING";
    StatusState["Unknown"] = "UNKNOWN";
})(StatusState = exports.StatusState || (exports.StatusState = {}));
var UserFacingTypeSlug;
(function (UserFacingTypeSlug) {
    UserFacingTypeSlug["Cron"] = "cron";
    UserFacingTypeSlug["Pserv"] = "pserv";
    UserFacingTypeSlug["Static"] = "static";
    UserFacingTypeSlug["Web"] = "web";
    UserFacingTypeSlug["Worker"] = "worker";
})(UserFacingTypeSlug = exports.UserFacingTypeSlug || (exports.UserFacingTypeSlug = {}));
exports.DeployDocument = graphql_tag_1.default `
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
exports.DeploysDocument = graphql_tag_1.default `
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
exports.PullRequestServersDocument = graphql_tag_1.default `
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
exports.SignInDocument = graphql_tag_1.default `
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    idToken
  }
}
    `;
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        Deploy(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeployDocument, variables, requestHeaders));
        },
        Deploys(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeploysDocument, variables, requestHeaders));
        },
        PullRequestServers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.PullRequestServersDocument, variables, requestHeaders));
        },
        SignIn(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.SignInDocument, variables, requestHeaders));
        }
    };
}
exports.getSdk = getSdk;


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Core = __importStar(__webpack_require__(2186));
const Github = __importStar(__webpack_require__(5438));
const graphql_request_1 = __webpack_require__(2476);
const sdk_1 = __webpack_require__(1498);
const wait_1 = __webpack_require__(5817);
/*******************************************
 *** Globals
 ******************************************/
const client = new graphql_request_1.GraphQLClient('https://api.render.com/graphql');
const sdk = sdk_1.getSdk(client);
const octokit = Github.getOctokit(Core.getInput('token'), {
    previews: ['flash', 'ant-man']
});
/*******************************************
 *** Functions
 ******************************************/
function logIn() {
    return __awaiter(this, void 0, void 0, function* () {
        Core.info('Signing in...');
        const email = Core.getInput('email');
        const password = Core.getInput('password');
        const { signIn } = yield sdk.SignIn({ email, password });
        if (!(signIn === null || signIn === void 0 ? void 0 : signIn.idToken)) {
            throw new Error('Sign-in failed!');
        }
        client.setHeader('authorization', `Bearer ${signIn.idToken}`);
    });
}
function findServer({ pr }) {
    return __awaiter(this, void 0, void 0, function* () {
        const serverId = Core.getInput('service-id');
        if (pr) {
            Core.info('Running in Pull Request: Listing Pull Request Servers...');
            const number = pr.toString();
            const { pullRequestServers } = yield sdk.PullRequestServers({ serverId });
            const server = pullRequestServers === null || pullRequestServers === void 0 ? void 0 : pullRequestServers.find(s => (s === null || s === void 0 ? void 0 : s.pullRequest.number) === number);
            if (server && server.server) {
                return server.server.id;
            }
            Core.info('No Pull Request Servers found. Using regular deployment');
        }
        return serverId;
    });
}
function getContext() {
    const { eventName, payload } = Github.context;
    switch (eventName) {
        case 'pull_request':
            const { pull_request: { number, head } } = payload;
            return Object.assign({ pr: number }, head);
        case 'push':
            return Github.context;
        default:
            throw new Error('Invalid event type! Only "pull_request" and "push" are supported. ❌');
    }
}
function findDeploy(context, serverId, retries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        if (retries === 0) {
            Core.info(`Looking deployments for ${serverId}...`);
        }
        const { deploys } = yield sdk.Deploys({ serverId });
        const deploy = deploys === null || deploys === void 0 ? void 0 : deploys.find(d => d.commitId === context.sha &&
            d.branch === context.ref.replace('refs/heads/', ''));
        if (deploy)
            return deploy;
        const max_retries = ~~Core.getInput('retries');
        if (++retries < max_retries) {
            Core.info(`No deployments found. Retrying...(${retries}/${max_retries}) ⏱`);
            yield wait_1.wait(~~Core.getInput('wait'));
            return findDeploy(context, serverId, retries);
        }
        else {
            throw new Error(`No deployment found after ${retries} retries! ⚠️`);
        }
    });
}
function getDeploy(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { deploy } = yield sdk.Deploy({ id });
        if (!deploy) {
            throw new Error(`Deployment ${id} disappeared! ❌`);
        }
        return deploy;
    });
}
function waitForDeploy(deployment) {
    return __awaiter(this, void 0, void 0, function* () {
        const { render } = deployment;
        switch (render === null || render === void 0 ? void 0 : render.status) {
            case 1: // Running
                if (yield updateDeployment(deployment, 'in_progress')) {
                    Core.info(`Deployment still running... ⏱`);
                }
                yield wait_1.wait(~~Core.getInput('wait'));
                return waitForDeploy(Object.assign(Object.assign({}, deployment), { render: yield getDeploy(render.id) }));
            case 2: // Live
            case 3: // Succeeded
                yield wait_1.wait(~~Core.getInput('sleep'));
                yield updateDeployment(deployment, 'success');
                Core.info(`Deployment ${render.id} succeeded ✅`);
                return;
            case 4: // Failed
                yield updateDeployment(deployment, 'failure');
                throw new Error(`Deployment ${render.id} failed! ❌ (${getDeployUrl(render)})`);
            case 5: // Cancelled
                yield updateDeployment(deployment, 'inactive');
                Core.info(`Deployment ${render.id} canceled ⏹`);
                return;
        }
    });
}
function createDeployment(context, { server }) {
    return __awaiter(this, void 0, void 0, function* () {
        Core.info(`Creating ${server.name} GitHub deployment`);
        const state = 'pending';
        const { data } = yield octokit.repos.createDeployment(Object.assign(Object.assign({}, Github.context.repo), { ref: context.ref, description: server.name, environment: `${context.pr ? 'Preview' : 'Production'} – ${server.name}`, production_environment: !context.pr, transient_environment: !!context.pr, auto_merge: false, required_contexts: [], state }));
        return Object.assign(Object.assign({}, data), { state });
    });
}
function updateDeployment({ render, github }, state) {
    return __awaiter(this, void 0, void 0, function* () {
        if (github.state !== state) {
            yield octokit.repos.createDeploymentStatus(Object.assign(Object.assign({}, Github.context.repo), { deployment_id: github.id, log_url: getDeployUrl(render), environment_url: render.server.url, description: state, state }));
            github.state = state;
            return true;
        }
        return false;
    });
}
function getDeployUrl(deploy) {
    return `https://dashboard.render.com/web/${deploy.server.id}/deploys/${deploy.id}`;
}
/*******************************************
 *** Main
 ******************************************/
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Core.info('Starting Render Wait Action');
            yield logIn();
            const context = getContext();
            const serverId = yield findServer(context);
            const render = yield findDeploy(context, serverId);
            const github = yield createDeployment(context, render);
            yield waitForDeploy({ render, github });
        }
        catch (error) {
            Core.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 5817:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wait = void 0;
function wait(milliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            if (isNaN(milliseconds)) {
                throw new Error('milliseconds not a number');
            }
            setTimeout(() => resolve('done!'), milliseconds);
        });
    });
}
exports.wait = wait;


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__webpack_require__(2087));
const utils_1 = __webpack_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __webpack_require__(7351);
const file_command_1 = __webpack_require__(717);
const utils_1 = __webpack_require__(5278);
const os = __importStar(__webpack_require__(2087));
const path = __importStar(__webpack_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(5747));
const os = __importStar(__webpack_require__(2087));
const utils_1 = __webpack_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const fs_1 = __webpack_require__(5747);
const os_1 = __webpack_require__(2087);
class Context {
    /**
     * Hydrate the context from the environment
     */
    constructor() {
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
            if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
                this.payload = JSON.parse(fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
            }
            else {
                const path = process.env.GITHUB_EVENT_PATH;
                process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`);
            }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
        this.job = process.env.GITHUB_JOB;
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
    }
    get issue() {
        const payload = this.payload;
        return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
    }
    get repo() {
        if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            return { owner, repo };
        }
        if (this.payload.repository) {
            return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
        }
        throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 5438:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokit = exports.context = void 0;
const Context = __importStar(__webpack_require__(4087));
const utils_1 = __webpack_require__(3030);
exports.context = new Context.Context();
/**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokit(token, options) {
    return new utils_1.GitHub(utils_1.getOctokitOptions(token, options));
}
exports.getOctokit = getOctokit;
//# sourceMappingURL=github.js.map

/***/ }),

/***/ 7914:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApiBaseUrl = exports.getProxyAgent = exports.getAuthString = void 0;
const httpClient = __importStar(__webpack_require__(9925));
function getAuthString(token, options) {
    if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required');
    }
    else if (token && options.auth) {
        throw new Error('Parameters token and opts.auth may not both be specified');
    }
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
exports.getAuthString = getAuthString;
function getProxyAgent(destinationUrl) {
    const hc = new httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
exports.getProxyAgent = getProxyAgent;
function getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
exports.getApiBaseUrl = getApiBaseUrl;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 3030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokitOptions = exports.GitHub = exports.context = void 0;
const Context = __importStar(__webpack_require__(4087));
const Utils = __importStar(__webpack_require__(7914));
// octokit + plugins
const core_1 = __webpack_require__(6762);
const plugin_rest_endpoint_methods_1 = __webpack_require__(3044);
const plugin_paginate_rest_1 = __webpack_require__(4193);
exports.context = new Context.Context();
const baseUrl = Utils.getApiBaseUrl();
const defaults = {
    baseUrl,
    request: {
        agent: Utils.getProxyAgent(baseUrl)
    }
};
exports.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = Utils.getAuthString(token, opts);
    if (auth) {
        opts.auth = auth;
    }
    return opts;
}
exports.getOctokitOptions = getOctokitOptions;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http = __webpack_require__(8605);
const https = __webpack_require__(7211);
const pm = __webpack_require__(6443);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __webpack_require__(4294);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 6443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

async function auth(token) {
  const tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
  return {
    type: "token",
    token: token,
    tokenType
  };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }

  return `token ${token}`;
}

async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

exports.createTokenAuth = createTokenAuth;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var universalUserAgent = __webpack_require__(5030);
var beforeAfterHook = __webpack_require__(3682);
var request = __webpack_require__(6234);
var graphql = __webpack_require__(8467);
var authToken = __webpack_require__(334);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const VERSION = "3.4.0";

class Octokit {
  constructor(options = {}) {
    const hook = new beforeAfterHook.Collection();
    const requestDefaults = {
      baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = request.request.defaults(requestDefaults);
    this.graphql = graphql.withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        // (2)
        const auth = authToken.createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      const {
        authStrategy
      } = options,
            otherOptions = _objectWithoutProperties(options, ["authStrategy"]);

      const auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯

      hook.wrap("request", auth.hook);
      this.auth = auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    const classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin(...newPlugins) {
    var _a;

    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}
Octokit.VERSION = VERSION;
Octokit.plugins = [];

exports.Octokit = Octokit;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var isPlainObject = __webpack_require__(558);
var universalUserAgent = __webpack_require__(5030);

function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject.isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}

const urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  let method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  const omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }

    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format}`;
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS = merge(oldDefaults, newDefaults);
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

const VERSION = "6.0.11";

const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}`; // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};

const endpoint = withDefaults(null, DEFAULTS);

exports.endpoint = endpoint;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

exports.isPlainObject = isPlainObject;


/***/ }),

/***/ 8467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var request = __webpack_require__(6234);
var universalUserAgent = __webpack_require__(5030);

const VERSION = "4.6.1";

class GraphqlError extends Error {
  constructor(request, response) {
    const message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    Object.assign(this, {
      headers: response.headers
    });
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

const NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }

    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }

  const parsedOptions = typeof query === "string" ? Object.assign({
    query
  }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(response => {
    if (response.data.errors) {
      const headers = {};

      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }

      throw new GraphqlError(requestOptions, {
        headers,
        data: response.data
      });
    }

    return response.data.data;
  });
}

function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);

  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.request.endpoint
  });
}

const graphql$1 = withDefaults(request.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

exports.graphql = graphql$1;
exports.withCustomRequest = withCustomRequest;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const VERSION = "2.13.3";

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */
function normalizePaginatedListResponse(response) {
  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization) return response; // keep the additional properties intact as there is currently no other way
  // to retrieve the same information.

  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;

  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }

  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }

  response.data.total_count = totalCount;
  return response;
}

function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url) return {
          done: true
        };
        const response = await requestMethod({
          method,
          url,
          headers
        });
        const normalizedResponse = normalizePaginatedListResponse(response); // `response.headers.link` format:
        // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
        // sets `url` to undefined if "next" URL is not present or `link` header is not set

        url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
        return {
          value: normalizedResponse
        };
      }

    })
  };
}

function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }

  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;

    function done() {
      earlyExit = true;
    }

    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}

const composePaginateRest = Object.assign(paginate, {
  iterator
});

const paginatingEndpoints = ["GET /app/installations", "GET /applications/grants", "GET /authorizations", "GET /enterprises/{enterprise}/actions/permissions/organizations", "GET /enterprises/{enterprise}/actions/runner-groups", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", "GET /enterprises/{enterprise}/actions/runners", "GET /enterprises/{enterprise}/actions/runners/downloads", "GET /events", "GET /gists", "GET /gists/public", "GET /gists/starred", "GET /gists/{gist_id}/comments", "GET /gists/{gist_id}/commits", "GET /gists/{gist_id}/forks", "GET /installation/repositories", "GET /issues", "GET /marketplace_listing/plans", "GET /marketplace_listing/plans/{plan_id}/accounts", "GET /marketplace_listing/stubbed/plans", "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", "GET /networks/{owner}/{repo}/events", "GET /notifications", "GET /organizations", "GET /orgs/{org}/actions/permissions/repositories", "GET /orgs/{org}/actions/runner-groups", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners", "GET /orgs/{org}/actions/runners", "GET /orgs/{org}/actions/runners/downloads", "GET /orgs/{org}/actions/secrets", "GET /orgs/{org}/actions/secrets/{secret_name}/repositories", "GET /orgs/{org}/blocks", "GET /orgs/{org}/credential-authorizations", "GET /orgs/{org}/events", "GET /orgs/{org}/failed_invitations", "GET /orgs/{org}/hooks", "GET /orgs/{org}/installations", "GET /orgs/{org}/invitations", "GET /orgs/{org}/invitations/{invitation_id}/teams", "GET /orgs/{org}/issues", "GET /orgs/{org}/members", "GET /orgs/{org}/migrations", "GET /orgs/{org}/migrations/{migration_id}/repositories", "GET /orgs/{org}/outside_collaborators", "GET /orgs/{org}/projects", "GET /orgs/{org}/public_members", "GET /orgs/{org}/repos", "GET /orgs/{org}/team-sync/groups", "GET /orgs/{org}/teams", "GET /orgs/{org}/teams/{team_slug}/discussions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/invitations", "GET /orgs/{org}/teams/{team_slug}/members", "GET /orgs/{org}/teams/{team_slug}/projects", "GET /orgs/{org}/teams/{team_slug}/repos", "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings", "GET /orgs/{org}/teams/{team_slug}/teams", "GET /projects/columns/{column_id}/cards", "GET /projects/{project_id}/collaborators", "GET /projects/{project_id}/columns", "GET /repos/{owner}/{repo}/actions/artifacts", "GET /repos/{owner}/{repo}/actions/runners", "GET /repos/{owner}/{repo}/actions/runners/downloads", "GET /repos/{owner}/{repo}/actions/runs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "GET /repos/{owner}/{repo}/actions/secrets", "GET /repos/{owner}/{repo}/actions/workflows", "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "GET /repos/{owner}/{repo}/assignees", "GET /repos/{owner}/{repo}/branches", "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "GET /repos/{owner}/{repo}/code-scanning/alerts", "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "GET /repos/{owner}/{repo}/code-scanning/analyses", "GET /repos/{owner}/{repo}/collaborators", "GET /repos/{owner}/{repo}/comments", "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/commits", "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments", "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", "GET /repos/{owner}/{repo}/commits/{ref}/check-runs", "GET /repos/{owner}/{repo}/commits/{ref}/check-suites", "GET /repos/{owner}/{repo}/commits/{ref}/statuses", "GET /repos/{owner}/{repo}/contributors", "GET /repos/{owner}/{repo}/deployments", "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "GET /repos/{owner}/{repo}/events", "GET /repos/{owner}/{repo}/forks", "GET /repos/{owner}/{repo}/git/matching-refs/{ref}", "GET /repos/{owner}/{repo}/hooks", "GET /repos/{owner}/{repo}/invitations", "GET /repos/{owner}/{repo}/issues", "GET /repos/{owner}/{repo}/issues/comments", "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/issues/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/comments", "GET /repos/{owner}/{repo}/issues/{issue_number}/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/labels", "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", "GET /repos/{owner}/{repo}/keys", "GET /repos/{owner}/{repo}/labels", "GET /repos/{owner}/{repo}/milestones", "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels", "GET /repos/{owner}/{repo}/notifications", "GET /repos/{owner}/{repo}/pages/builds", "GET /repos/{owner}/{repo}/projects", "GET /repos/{owner}/{repo}/pulls", "GET /repos/{owner}/{repo}/pulls/comments", "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments", "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits", "GET /repos/{owner}/{repo}/pulls/{pull_number}/files", "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "GET /repos/{owner}/{repo}/releases", "GET /repos/{owner}/{repo}/releases/{release_id}/assets", "GET /repos/{owner}/{repo}/secret-scanning/alerts", "GET /repos/{owner}/{repo}/stargazers", "GET /repos/{owner}/{repo}/subscribers", "GET /repos/{owner}/{repo}/tags", "GET /repos/{owner}/{repo}/teams", "GET /repositories", "GET /repositories/{repository_id}/environments/{environment_name}/secrets", "GET /scim/v2/enterprises/{enterprise}/Groups", "GET /scim/v2/enterprises/{enterprise}/Users", "GET /scim/v2/organizations/{org}/Users", "GET /search/code", "GET /search/commits", "GET /search/issues", "GET /search/labels", "GET /search/repositories", "GET /search/topics", "GET /search/users", "GET /teams/{team_id}/discussions", "GET /teams/{team_id}/discussions/{discussion_number}/comments", "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /teams/{team_id}/discussions/{discussion_number}/reactions", "GET /teams/{team_id}/invitations", "GET /teams/{team_id}/members", "GET /teams/{team_id}/projects", "GET /teams/{team_id}/repos", "GET /teams/{team_id}/team-sync/group-mappings", "GET /teams/{team_id}/teams", "GET /user/blocks", "GET /user/emails", "GET /user/followers", "GET /user/following", "GET /user/gpg_keys", "GET /user/installations", "GET /user/installations/{installation_id}/repositories", "GET /user/issues", "GET /user/keys", "GET /user/marketplace_purchases", "GET /user/marketplace_purchases/stubbed", "GET /user/memberships/orgs", "GET /user/migrations", "GET /user/migrations/{migration_id}/repositories", "GET /user/orgs", "GET /user/public_emails", "GET /user/repos", "GET /user/repository_invitations", "GET /user/starred", "GET /user/subscriptions", "GET /user/teams", "GET /users", "GET /users/{username}/events", "GET /users/{username}/events/orgs/{org}", "GET /users/{username}/events/public", "GET /users/{username}/followers", "GET /users/{username}/following", "GET /users/{username}/gists", "GET /users/{username}/gpg_keys", "GET /users/{username}/keys", "GET /users/{username}/orgs", "GET /users/{username}/projects", "GET /users/{username}/received_events", "GET /users/{username}/received_events/public", "GET /users/{username}/repos", "GET /users/{username}/starred", "GET /users/{username}/subscriptions"];

function isPaginatingEndpoint(arg) {
  if (typeof arg === "string") {
    return paginatingEndpoints.includes(arg);
  } else {
    return false;
  }
}

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */

function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION;

exports.composePaginateRest = composePaginateRest;
exports.isPaginatingEndpoint = isPaginatingEndpoint;
exports.paginateRest = paginateRest;
exports.paginatingEndpoints = paginatingEndpoints;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const Endpoints = {
  actions: {
    addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
    createOrUpdateEnvironmentSecret: ["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"],
    createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
    createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],
    deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    deleteEnvironmentSecret: ["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"],
    deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],
    downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],
    downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
    downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],
    getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"],
    getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"],
    getEnvironmentSecret: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"],
    getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, {
      renamed: ["actions", "getGithubActionsPermissionsRepository"]
    }],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],
    getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets"],
    listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
    listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
    listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"],
    setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"],
    setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"],
    setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: ["POST /content_references/{content_reference_id}/attachments", {
      mediaType: {
        previews: ["corsair"]
      }
    }],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
    getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
    listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
    removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"],
    getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"],
    getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],
    setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],
    getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, {
      renamedParameters: {
        alert_id: "alert_number"
      }
    }],
    getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getConductCode: ["GET /codes_of_conduct/{key}", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getForRepo: ["GET /repos/{owner}/{repo}/community/code_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }]
  },
  emojis: {
    get: ["GET /emojis"]
  },
  enterpriseAdmin: {
    disableSelectedOrganizationGithubActionsEnterprise: ["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    enableSelectedOrganizationGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    getAllowedActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/selected-actions"],
    getGithubActionsPermissionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions"],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/organizations"],
    setAllowedActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions"],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations"]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, {
      renamed: ["interactions", "getRestrictionsForAuthenticatedUser"]
    }],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"],
    removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, {
      renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"]
    }],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, {
      renamed: ["interactions", "setRestrictionsForAuthenticatedUser"]
    }]
  },
  issues: {
    addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", {
      mediaType: {
        previews: ["mockingbird"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: ["POST /markdown/raw", {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }]
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  orgs: {
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
    removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"],
    deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],
    deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"]
    }],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]
    }],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"],
    getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"],
    getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"],
    getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"],
    getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],
    restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createCard: ["POST /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createColumn: ["POST /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForAuthenticatedUser: ["POST /user/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForOrg: ["POST /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForRepo: ["POST /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    delete: ["DELETE /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteColumn: ["DELETE /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    get: ["GET /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getCard: ["GET /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getColumn: ["GET /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCards: ["GET /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCollaborators: ["GET /projects/{project_id}/collaborators", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listColumns: ["GET /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForRepo: ["GET /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForUser: ["GET /users/{username}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveColumn: ["POST /projects/columns/{column_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    update: ["PATCH /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateCard: ["PATCH /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateColumn: ["PATCH /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", {
      mediaType: {
        previews: ["lydian"]
      }
    }],
    updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]
  },
  rateLimit: {
    get: ["GET /rate_limit"]
  },
  reactions: {
    createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteLegacy: ["DELETE /reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }, {
      deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy"
    }],
    listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }]
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
    addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks{?org,organization}"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate", {
      mediaType: {
        previews: ["baptiste"]
      }
    }],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],
    deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, {
      renamed: ["repos", "downloadZipballArchive"]
    }],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],
    getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
    removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
    updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, {
      renamed: ["repos", "updateStatusCheckProtection"]
    }],
    updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", {
      baseUrl: "https://uploads.github.com"
    }]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", {
      mediaType: {
        previews: ["cloak"]
      }
    }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
    removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlockedByAuthenticated: ["GET /user/blocks"],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};

const VERSION = "4.15.0";

function endpointsToMethods(octokit, endpointsMap) {
  const newMethods = {};

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations] = endpoint;
      const [method, url] = route.split(/ /);
      const endpointDefaults = Object.assign({
        method,
        url
      }, defaults);

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope];

      if (decorations) {
        scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
  }

  return newMethods;
}

function decorate(octokit, scope, methodName, defaults, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults);
  /* istanbul ignore next */

  function withDecorations(...args) {
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    let options = requestWithDefaults.endpoint.merge(...args); // There are currently no other decorations than `.mapToData`

    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: undefined
      });
      return requestWithDefaults(options);
    }

    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
    }

    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }

    if (decorations.renamedParameters) {
      // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
      const options = requestWithDefaults.endpoint.merge(...args);

      for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
        if (name in options) {
          octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);

          if (!(alias in options)) {
            options[alias] = options[name];
          }

          delete options[name];
        }
      }

      return requestWithDefaults(options);
    } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488


    return requestWithDefaults(...args);
  }

  return Object.assign(withDecorations, requestWithDefaults);
}

function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit, Endpoints);
  return _objectSpread2(_objectSpread2({}, api), {}, {
    rest: api
  });
}
restEndpointMethods.VERSION = VERSION;

exports.restEndpointMethods = restEndpointMethods;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deprecation = __webpack_require__(8932);
var once = _interopDefault(__webpack_require__(1223));

const logOnce = once(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    Object.defineProperty(this, "code", {
      get() {
        logOnce(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    this.headers = options.headers || {}; // redact request credentials without mutating original request options

    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }

}

exports.RequestError = RequestError;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var endpoint = __webpack_require__(9440);
var universalUserAgent = __webpack_require__(5030);
var isPlainObject = __webpack_require__(9062);
var nodeFetch = _interopDefault(__webpack_require__(467));
var requestError = __webpack_require__(537);

const VERSION = "5.4.15";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  if (isPlainObject.isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || nodeFetch;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then(response => {
    url = response.url;
    status = response.status;

    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }

    if (status === 204 || status === 205) {
      return;
    } // GitHub API returns 200 for HEAD requests


    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }

      throw new requestError.RequestError(response.statusText, status, {
        headers,
        request: requestOptions
      });
    }

    if (status === 304) {
      throw new requestError.RequestError("Not modified", status, {
        headers,
        request: requestOptions
      });
    }

    if (status >= 400) {
      return response.text().then(message => {
        const error = new requestError.RequestError(message, status, {
          headers,
          request: requestOptions
        });

        try {
          let responseBody = JSON.parse(error.message);
          Object.assign(error, responseBody);
          let errors = responseBody.errors; // Assumption `errors` would always be in Array format

          error.message = error.message + ": " + errors.map(JSON.stringify).join(", ");
        } catch (e) {// ignore, see octokit/rest.js#684
        }

        throw error;
      });
    }

    const contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  }).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof requestError.RequestError) {
      throw error;
    }

    throw new requestError.RequestError(error.message, 500, {
      headers,
      request: requestOptions
    });
  });
}

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults);

  const newApi = function (route, parameters) {
    const endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    const request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

const request = withDefaults(endpoint.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  }
});

exports.request = request;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9062:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

exports.isPlainObject = isPlainObject;


/***/ }),

/***/ 4812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
{
  parallel      : __webpack_require__(8210),
  serial        : __webpack_require__(445),
  serialOrdered : __webpack_require__(3578)
};


/***/ }),

/***/ 1700:
/***/ ((module) => {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),

/***/ 2794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defer = __webpack_require__(5295);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),

/***/ 5295:
/***/ ((module) => {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),

/***/ 9023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var async = __webpack_require__(2794)
  , abort = __webpack_require__(1700)
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),

/***/ 2474:
/***/ ((module) => {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),

/***/ 7942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var abort = __webpack_require__(1700)
  , async = __webpack_require__(2794)
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),

/***/ 8210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(9023)
  , initState  = __webpack_require__(2474)
  , terminator = __webpack_require__(7942)
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),

/***/ 445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var serialOrdered = __webpack_require__(3578);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ 3578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(9023)
  , initState  = __webpack_require__(2474)
  , terminator = __webpack_require__(7942)
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),

/***/ 3682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var register = __webpack_require__(4670)
var addHook = __webpack_require__(5549)
var removeHook = __webpack_require__(6819)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 5549:
/***/ ((module) => {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ 4670:
/***/ ((module) => {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ 6819:
/***/ ((module) => {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ 5443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(1669);
var Stream = __webpack_require__(2413).Stream;
var DelayedStream = __webpack_require__(8611);

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),

/***/ 9805:
/***/ ((module, exports, __webpack_require__) => {

var nodeFetch = __webpack_require__(467)
var realFetch = nodeFetch.default || nodeFetch

var fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url
  }
  return realFetch.call(this, url, options)
}

module.exports = exports = fetch
exports.fetch = fetch
exports.Headers = nodeFetch.Headers
exports.Request = nodeFetch.Request
exports.Response = nodeFetch.Response

// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch


/***/ }),

/***/ 8611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = __webpack_require__(2413).Stream;
var util = __webpack_require__(1669);

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),

/***/ 8932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}

exports.Deprecation = Deprecation;


/***/ }),

/***/ 776:
/***/ ((module) => {

"use strict";


module.exports = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};


/***/ }),

/***/ 5458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defaultIsExtractableFile = __webpack_require__(8403);

module.exports = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};


/***/ }),

/***/ 5498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.ReactNativeFile = __webpack_require__(776);
exports.extractFiles = __webpack_require__(5458);
exports.isExtractableFile = __webpack_require__(8403);


/***/ }),

/***/ 8403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ReactNativeFile = __webpack_require__(776);

module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ }),

/***/ 8119:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var extract_files_1 = __webpack_require__(5498);
var form_data_1 = __importDefault(__webpack_require__(5161));
/**
 * Duck type if NodeJS stream
 * https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
 */
var isExtractableFileEnhanced = function (value) {
    return extract_files_1.isExtractableFile(value) ||
        (value !== null && typeof value === 'object' && typeof value.pipe === 'function');
};
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */
function createRequestBody(query, variables) {
    var _a = extract_files_1.extractFiles({ query: query, variables: variables }, '', isExtractableFileEnhanced), clone = _a.clone, files = _a.files;
    if (files.size === 0) {
        return JSON.stringify(clone);
    }
    var Form = typeof FormData === 'undefined' ? form_data_1.default : FormData;
    var form = new Form();
    form.append('operations', JSON.stringify(clone));
    var map = {};
    var i = 0;
    files.forEach(function (paths) {
        map[++i] = paths;
    });
    form.append('map', JSON.stringify(map));
    i = 0;
    files.forEach(function (paths, file) {
        form.append("" + ++i, file);
    });
    return form;
}
exports.default = createRequestBody;
//# sourceMappingURL=createRequestBody.js.map

/***/ }),

/***/ 2476:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gql = exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = void 0;
var cross_fetch_1 = __importStar(__webpack_require__(9805)), CrossFetch = cross_fetch_1;
var printer_1 = __webpack_require__(8203);
var createRequestBody_1 = __importDefault(__webpack_require__(8119));
var types_1 = __webpack_require__(1065);
var types_2 = __webpack_require__(1065);
Object.defineProperty(exports, "ClientError", ({ enumerable: true, get: function () { return types_2.ClientError; } }));
/**
 * Convert the given headers configuration into a plain object.
 */
var resolveHeaders = function (headers) {
    var oHeaders = {};
    if (headers) {
        if ((typeof Headers !== 'undefined' && headers instanceof Headers) ||
            headers instanceof CrossFetch.Headers) {
            oHeaders = HeadersInstanceToPlainObject(headers);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(function (_a) {
                var name = _a[0], value = _a[1];
                oHeaders[name] = value;
            });
        }
        else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * todo
 */
var GraphQLClient = /** @class */ (function () {
    function GraphQLClient(url, options) {
        this.url = url;
        this.options = options || {};
    }
    GraphQLClient.prototype.rawRequest = function (query, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, localFetch, others, body, response, result, headers_1, status_1, errorResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, localFetch = _b === void 0 ? cross_fetch_1.default : _b, others = __rest(_a, ["headers", "fetch"]);
                        body = createRequestBody_1.default(query, variables);
                        return [4 /*yield*/, localFetch(this.url, __assign({ method: 'POST', headers: __assign(__assign(__assign({}, (typeof body === 'string' ? { 'Content-Type': 'application/json' } : {})), resolveHeaders(headers)), resolveHeaders(requestHeaders)), body: body }, others))];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, getResult(response)];
                    case 2:
                        result = _c.sent();
                        if (response.ok && !result.errors && result.data) {
                            headers_1 = response.headers, status_1 = response.status;
                            return [2 /*return*/, __assign(__assign({}, result), { headers: headers_1, status: status_1 })];
                        }
                        else {
                            errorResult = typeof result === 'string' ? { error: result } : result;
                            throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status, headers: response.headers }), { query: query, variables: variables });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send a GraphQL document to the server.
     */
    GraphQLClient.prototype.request = function (document, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, localFetch, others, resolvedDoc, body, response, result, errorResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, localFetch = _b === void 0 ? cross_fetch_1.default : _b, others = __rest(_a, ["headers", "fetch"]);
                        resolvedDoc = resolveRequestDocument(document);
                        body = createRequestBody_1.default(resolvedDoc, variables);
                        return [4 /*yield*/, localFetch(this.url, __assign({ method: 'POST', headers: __assign(__assign(__assign({}, (typeof body === 'string' ? { 'Content-Type': 'application/json' } : {})), resolveHeaders(headers)), resolveHeaders(requestHeaders)), body: body }, others))];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, getResult(response)];
                    case 2:
                        result = _c.sent();
                        if (response.ok && !result.errors && result.data) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            errorResult = typeof result === 'string' ? { error: result } : result;
                            throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status }), { query: resolvedDoc, variables: variables });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GraphQLClient.prototype.setHeaders = function (headers) {
        this.options.headers = headers;
        return this;
    };
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */
    GraphQLClient.prototype.setHeader = function (key, value) {
        var _a;
        var headers = this.options.headers;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-ignore
            headers[key] = value;
        }
        else {
            this.options.headers = (_a = {}, _a[key] = value, _a);
        }
        return this;
    };
    return GraphQLClient;
}());
exports.GraphQLClient = GraphQLClient;
/**
 * todo
 */
function rawRequest(url, query, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.rawRequest(query, variables)];
        });
    });
}
exports.rawRequest = rawRequest;
/**
 * Send a GraphQL Document to the GraphQL server for exectuion.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await request('https://foo.bar/graphql', `
 *   {
 *     query {
 *       users
 *     }
 *   }
 * `)
 *
 * // You can also pass a GraphQL DocumentNode. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * // If you don't actually care about using DocumentNode but just
 * // want the tooling support for gql template tag like IDE syntax
 * // coloring and prettier autoformat then note you can use the
 * // passthrough gql tag shipped with graphql-request to save a bit
 * // of performance and not have to install another dep into your project.
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 * ```
 */
function request(url, document, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.request(document, variables)];
        });
    });
}
exports.request = request;
exports.default = request;
/**
 * todo
 */
function getResult(response) {
    var contentType = response.headers.get('Content-Type');
    if (contentType && contentType.startsWith('application/json')) {
        return response.json();
    }
    else {
        return response.text();
    }
}
/**
 * helpers
 */
function resolveRequestDocument(document) {
    if (typeof document === 'string')
        return document;
    return printer_1.print(document);
}
/**
 * Convenience passthrough template tag to get the benefits of tooling for the gql template tag. This does not actually parse the input into a GraphQL DocumentNode like graphql-tag package does. It just returns the string with any variables given interpolated. Can save you a bit of performance and having to install another package.
 *
 * @example
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * @remarks
 *
 * Several tools in the Node GraphQL ecosystem are hardcoded to specially treat any template tag named "gql". For example see this prettier issue: https://github.com/prettier/prettier/issues/4360. Using this template tag has no runtime effect beyond variable interpolation.
 */
function gql(chunks) {
    var variables = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        variables[_i - 1] = arguments[_i];
    }
    return chunks.reduce(function (accumulator, chunk, index) { return "" + accumulator + chunk + (index in variables ? variables[index] : ''); }, '');
}
exports.gql = gql;
/**
 * Convert Headers instance into regular object
 */
function HeadersInstanceToPlainObject(headers) {
    var o = {};
    headers.forEach(function (v, k) {
        o[k] = v;
    });
    return o;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1065:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientError = void 0;
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(response, request) {
        var _this = this;
        var message = ClientError.extractMessage(response) + ": " + JSON.stringify({
            response: response,
            request: request,
        });
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ClientError.prototype);
        _this.response = response;
        _this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ClientError);
        }
        return _this;
    }
    ClientError.extractMessage = function (response) {
        try {
            return response.errors[0].message;
        }
        catch (e) {
            return "GraphQL Error (Code: " + response.status + ")";
        }
    };
    return ClientError;
}(Error));
exports.ClientError = ClientError;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 5161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CombinedStream = __webpack_require__(5443);
var util = __webpack_require__(1669);
var path = __webpack_require__(5622);
var http = __webpack_require__(8605);
var https = __webpack_require__(7211);
var parseUrl = __webpack_require__(8835).parse;
var fs = __webpack_require__(5747);
var mime = __webpack_require__(3583);
var asynckit = __webpack_require__(4812);
var populate = __webpack_require__(7817);

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) )) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err) {
      this._error(err);
      return;
    }

    // add content length
    request.setHeader('Content-Length', length);

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};


/***/ }),

/***/ 7817:
/***/ ((module) => {

// populates missing values
module.exports = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};


/***/ }),

/***/ 8377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory() :
	0;
}(this, (function () { 'use strict';

var parser = __webpack_require__(655);

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;

})));
//# sourceMappingURL=graphql-tag.umd.js.map


/***/ }),

/***/ 4797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.printError = printError;
exports.GraphQLError = void 0;

var _isObjectLike = _interopRequireDefault(__webpack_require__(5865));

var _symbols = __webpack_require__(3255);

var _location = __webpack_require__(1922);

var _printLocation = __webpack_require__(5250);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return (0, _location.getLocation)(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if ((0, _isObjectLike.default)(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _symbols.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */


exports.GraphQLError = GraphQLError;

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + (0, _printLocation.printLocation)(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + (0, _printLocation.printSourceLocation)(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.syntaxError = syntaxError;

var _GraphQLError = __webpack_require__(4797);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ 3965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defineInspect;

var _invariant = _interopRequireDefault(__webpack_require__(8847));

var _nodejsCustomInspectSymbol = _interopRequireDefault(__webpack_require__(4755));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */
function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || (0, _invariant.default)(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol.default) {
    classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
  }
}


/***/ }),

/***/ 6514:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = devAssert;

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ 102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = inspect;

var _nodejsCustomInspectSymbol = _interopRequireDefault(__webpack_require__(4755));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ 3481:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
var _default = process.env.NODE_ENV === 'production' ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
};

exports.default = _default;


/***/ }),

/***/ 8847:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = invariant;

function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ 5865:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isObjectLike;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ 4755:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
var _default = nodejsCustomInspectSymbol;
exports.default = _default;


/***/ }),

/***/ 5494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNode = isNode;
exports.Token = exports.Location = void 0;

var _defineInspect = _interopRequireDefault(__webpack_require__(3965));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.


exports.Location = Location;
(0, _defineInspect.default)(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.


exports.Token = Token;
(0, _defineInspect.default)(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ 4515:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dedentBlockStringValue = dedentBlockStringValue;
exports.getBlockStringIndentation = getBlockStringIndentation;
exports.printBlockString = printBlockString;

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DirectiveLocation = void 0;

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

exports.DirectiveLocation = DirectiveLocation;


/***/ }),

/***/ 1927:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Kind = void 0;

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

exports.Kind = Kind;


/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
exports.Lexer = void 0;

var _syntaxError = __webpack_require__(2295);

var _ast = __webpack_require__(5494);

var _tokenKind = __webpack_require__(1565);

var _blockString = __webpack_require__(4515);

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast.Token(_tokenKind.TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind.TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind.TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */


exports.Lexer = Lexer;

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind.TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast.Token(_tokenKind.TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast.Token(_tokenKind.TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast.Token(_tokenKind.TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast.Token(_tokenKind.TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast.Token(_tokenKind.TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast.Token(_tokenKind.TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast.Token(_tokenKind.TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast.Token(_tokenKind.TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast.Token(_tokenKind.TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast.Token(_tokenKind.TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast.Token(_tokenKind.TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast.Token(_tokenKind.TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast.Token(_tokenKind.TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast.Token(_tokenKind.TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw (0, _syntaxError.syntaxError)(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast.Token(_tokenKind.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast.Token(_tokenKind.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast.Token(isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast.Token(_tokenKind.TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast.Token(_tokenKind.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast.Token(_tokenKind.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ 1922:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLocation = getLocation;

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.Parser = void 0;

var _syntaxError = __webpack_require__(2295);

var _kinds = __webpack_require__(1927);

var _ast = __webpack_require__(5494);

var _tokenKind = __webpack_require__(1565);

var _source = __webpack_require__(5521);

var _directiveLocation = __webpack_require__(1205);

var _lexer = __webpack_require__(4605);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */


function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */


function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */


var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
    this._lexer = new _lexer.Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind.TokenKind.NAME);
    return {
      kind: _kinds.Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.DOCUMENT,
      definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind.TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
      return {
        kind: _kinds.Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind.TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds.Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.DOLLAR);
    return {
      kind: _kinds.Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.SELECTION_SET,
      selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds.Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    return {
      kind: _kinds.Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
      return {
        kind: _kinds.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind.TokenKind.INT:
        this._lexer.advance();

        return {
          kind: _kinds.Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind.TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds.Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind.TokenKind.STRING:
      case _tokenKind.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind.TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds.Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds.Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds.Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds.Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind.TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind.TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds.Kind.LIST,
      values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds.Kind.OBJECT,
      fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    return {
      kind: _kinds.Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.AT);
    return {
      kind: _kinds.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind.TokenKind.BRACKET_R);
      type = {
        kind: _kinds.Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
      return {
        kind: _kinds.Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
    return {
      kind: _kinds.Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind.TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind.TokenKind.AMP) || this.peek(_tokenKind.TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind.TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds.Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind.TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds.Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation.DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast.Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */


exports.Parser = Parser;

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return (0, _lexer.isPunctuatorTokenKind)(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ 5250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.printLocation = printLocation;
exports.printSourceLocation = printSourceLocation;

var _location = __webpack_require__(1922);

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */


function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ 8203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.print = print;

var _visitor = __webpack_require__(5678);

var _blockString = __webpack_require__(4515);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, {
    leave: printDocASTReducer
  });
}

var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? (0, _blockString.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ 5521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isSource = isSource;
exports.Source = void 0;

var _symbols = __webpack_require__(3255);

var _inspect = _interopRequireDefault(__webpack_require__(102));

var _devAssert = _interopRequireDefault(__webpack_require__(6514));

var _instanceOf = _interopRequireDefault(__webpack_require__(3481));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || (0, _devAssert.default)(0, "Body must be a string. Received: ".concat((0, _inspect.default)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0, _devAssert.default)(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0, _devAssert.default)(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _symbols.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */


exports.Source = Source;

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return (0, _instanceOf.default)(source, Source);
}


/***/ }),

/***/ 1565:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TokenKind = void 0;

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

exports.TokenKind = TokenKind;


/***/ }),

/***/ 5678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.getVisitFn = getVisitFn;
exports.BREAK = exports.QueryDocumentKeys = void 0;

var _inspect = _interopRequireDefault(__webpack_require__(102));

var _ast = __webpack_require__(5494);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
exports.QueryDocumentKeys = QueryDocumentKeys;
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

exports.BREAK = BREAK;

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!(0, _ast.isNode)(node)) {
        throw new Error("Invalid AST Node: ".concat((0, _inspect.default)(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if ((0, _ast.isNode)(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */


function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SYMBOL_TO_STRING_TAG = exports.SYMBOL_ASYNC_ITERATOR = exports.SYMBOL_ITERATOR = void 0;
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

exports.SYMBOL_ITERATOR = SYMBOL_ITERATOR;
var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

exports.SYMBOL_ASYNC_ITERATOR = SYMBOL_ASYNC_ITERATOR;
var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';
exports.SYMBOL_TO_STRING_TAG = SYMBOL_TO_STRING_TAG;


/***/ }),

/***/ 7426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(3313)


/***/ }),

/***/ 3583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(7426)
var extname = __webpack_require__(5622).extname

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ 467:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__webpack_require__(2413));
var http = _interopDefault(__webpack_require__(8605));
var Url = _interopDefault(__webpack_require__(8835));
var https = _interopDefault(__webpack_require__(7211));
var zlib = _interopDefault(__webpack_require__(8761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __webpack_require__(2877).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(2940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(1631);
var tls = __webpack_require__(4016);
var http = __webpack_require__(8605);
var https = __webpack_require__(7211);
var events = __webpack_require__(8614);
var assert = __webpack_require__(2357);
var util = __webpack_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 5030:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }

  return "<environment undetectable>";
}

exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 2877:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 3313:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"application/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"application/3gpdash-qoe-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/3gpp-ims+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/a2l\":{\"source\":\"iana\"},\"application/activemessage\":{\"source\":\"iana\"},\"application/activity+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-directory+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcost+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcostparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointprop+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointpropparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-error+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/aml\":{\"source\":\"iana\"},\"application/andrew-inset\":{\"source\":\"iana\",\"extensions\":[\"ez\"]},\"application/applefile\":{\"source\":\"iana\"},\"application/applixware\":{\"source\":\"apache\",\"extensions\":[\"aw\"]},\"application/atf\":{\"source\":\"iana\"},\"application/atfx\":{\"source\":\"iana\"},\"application/atom+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atom\"]},\"application/atomcat+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomcat\"]},\"application/atomdeleted+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/atomicmail\":{\"source\":\"iana\"},\"application/atomsvc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomsvc\"]},\"application/atsc-dwd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/atsc-held+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/atsc-rsat+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/atxml\":{\"source\":\"iana\"},\"application/auth-policy+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/bacnet-xdd+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/batch-smtp\":{\"source\":\"iana\"},\"application/bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/beep+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/calendar+json\":{\"source\":\"iana\",\"compressible\":true},\"application/calendar+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/call-completion\":{\"source\":\"iana\"},\"application/cals-1840\":{\"source\":\"iana\"},\"application/cbor\":{\"source\":\"iana\"},\"application/cccex\":{\"source\":\"iana\"},\"application/ccmp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ccxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ccxml\"]},\"application/cdfx+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cdmi-capability\":{\"source\":\"iana\",\"extensions\":[\"cdmia\"]},\"application/cdmi-container\":{\"source\":\"iana\",\"extensions\":[\"cdmic\"]},\"application/cdmi-domain\":{\"source\":\"iana\",\"extensions\":[\"cdmid\"]},\"application/cdmi-object\":{\"source\":\"iana\",\"extensions\":[\"cdmio\"]},\"application/cdmi-queue\":{\"source\":\"iana\",\"extensions\":[\"cdmiq\"]},\"application/cdni\":{\"source\":\"iana\"},\"application/cea\":{\"source\":\"iana\"},\"application/cea-2018+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cellml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cfw\":{\"source\":\"iana\"},\"application/clue_info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cms\":{\"source\":\"iana\"},\"application/cnrp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-group+json\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-payload\":{\"source\":\"iana\"},\"application/commonground\":{\"source\":\"iana\"},\"application/conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cose\":{\"source\":\"iana\"},\"application/cose-key\":{\"source\":\"iana\"},\"application/cose-key-set\":{\"source\":\"iana\"},\"application/cpl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/csrattrs\":{\"source\":\"iana\"},\"application/csta+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cstadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/csvm+json\":{\"source\":\"iana\",\"compressible\":true},\"application/cu-seeme\":{\"source\":\"apache\",\"extensions\":[\"cu\"]},\"application/cwt\":{\"source\":\"iana\"},\"application/cybercash\":{\"source\":\"iana\"},\"application/dart\":{\"compressible\":true},\"application/dash+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpd\"]},\"application/dashdelta\":{\"source\":\"iana\"},\"application/davmount+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"davmount\"]},\"application/dca-rft\":{\"source\":\"iana\"},\"application/dcd\":{\"source\":\"iana\"},\"application/dec-dx\":{\"source\":\"iana\"},\"application/dialog-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom\":{\"source\":\"iana\"},\"application/dicom+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dii\":{\"source\":\"iana\"},\"application/dit\":{\"source\":\"iana\"},\"application/dns\":{\"source\":\"iana\"},\"application/dns+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dns-message\":{\"source\":\"iana\"},\"application/docbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dbk\"]},\"application/dskpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dssc+der\":{\"source\":\"iana\",\"extensions\":[\"dssc\"]},\"application/dssc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdssc\"]},\"application/dvcs\":{\"source\":\"iana\"},\"application/ecmascript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ecma\",\"es\"]},\"application/edi-consent\":{\"source\":\"iana\"},\"application/edi-x12\":{\"source\":\"iana\",\"compressible\":false},\"application/edifact\":{\"source\":\"iana\",\"compressible\":false},\"application/efi\":{\"source\":\"iana\"},\"application/emergencycalldata.comment+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.deviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.ecall.msd\":{\"source\":\"iana\"},\"application/emergencycalldata.providerinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.serviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.subscriberinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.veds+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emma+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"emma\"]},\"application/emotionml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/encaprtp\":{\"source\":\"iana\"},\"application/epp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/epub+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"epub\"]},\"application/eshop\":{\"source\":\"iana\"},\"application/exi\":{\"source\":\"iana\",\"extensions\":[\"exi\"]},\"application/expect-ct-report+json\":{\"source\":\"iana\",\"compressible\":true},\"application/fastinfoset\":{\"source\":\"iana\"},\"application/fastsoap\":{\"source\":\"iana\"},\"application/fdt+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/fhir+json\":{\"source\":\"iana\",\"compressible\":true},\"application/fhir+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/fido.trusted-apps+json\":{\"compressible\":true},\"application/fits\":{\"source\":\"iana\"},\"application/flexfec\":{\"source\":\"iana\"},\"application/font-sfnt\":{\"source\":\"iana\"},\"application/font-tdpfr\":{\"source\":\"iana\",\"extensions\":[\"pfr\"]},\"application/font-woff\":{\"source\":\"iana\",\"compressible\":false},\"application/framework-attributes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/geo+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"geojson\"]},\"application/geo+json-seq\":{\"source\":\"iana\"},\"application/geopackage+sqlite3\":{\"source\":\"iana\"},\"application/geoxacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/gltf-buffer\":{\"source\":\"iana\"},\"application/gml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gml\"]},\"application/gpx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"gpx\"]},\"application/gxf\":{\"source\":\"apache\",\"extensions\":[\"gxf\"]},\"application/gzip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gz\"]},\"application/h224\":{\"source\":\"iana\"},\"application/held+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/hjson\":{\"extensions\":[\"hjson\"]},\"application/http\":{\"source\":\"iana\"},\"application/hyperstudio\":{\"source\":\"iana\",\"extensions\":[\"stk\"]},\"application/ibe-key-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pkg-reply+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pp-data\":{\"source\":\"iana\"},\"application/iges\":{\"source\":\"iana\"},\"application/im-iscomposing+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/index\":{\"source\":\"iana\"},\"application/index.cmd\":{\"source\":\"iana\"},\"application/index.obj\":{\"source\":\"iana\"},\"application/index.response\":{\"source\":\"iana\"},\"application/index.vnd\":{\"source\":\"iana\"},\"application/inkml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ink\",\"inkml\"]},\"application/iotp\":{\"source\":\"iana\"},\"application/ipfix\":{\"source\":\"iana\",\"extensions\":[\"ipfix\"]},\"application/ipp\":{\"source\":\"iana\"},\"application/isup\":{\"source\":\"iana\"},\"application/its+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/java-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jar\",\"war\",\"ear\"]},\"application/java-serialized-object\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"ser\"]},\"application/java-vm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"class\"]},\"application/javascript\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"js\",\"mjs\"]},\"application/jf2feed+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jose\":{\"source\":\"iana\"},\"application/jose+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jrd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"json\",\"map\"]},\"application/json-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json-seq\":{\"source\":\"iana\"},\"application/json5\":{\"extensions\":[\"json5\"]},\"application/jsonml+json\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"jsonml\"]},\"application/jwk+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwk-set+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwt\":{\"source\":\"iana\"},\"application/kpml-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/kpml-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ld+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"jsonld\"]},\"application/lgr+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/link-format\":{\"source\":\"iana\"},\"application/load-control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lost+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lostxml\"]},\"application/lostsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lxf\":{\"source\":\"iana\"},\"application/mac-binhex40\":{\"source\":\"iana\",\"extensions\":[\"hqx\"]},\"application/mac-compactpro\":{\"source\":\"apache\",\"extensions\":[\"cpt\"]},\"application/macwriteii\":{\"source\":\"iana\"},\"application/mads+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mads\"]},\"application/manifest+json\":{\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"webmanifest\"]},\"application/marc\":{\"source\":\"iana\",\"extensions\":[\"mrc\"]},\"application/marcxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mrcx\"]},\"application/mathematica\":{\"source\":\"iana\",\"extensions\":[\"ma\",\"nb\",\"mb\"]},\"application/mathml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mathml\"]},\"application/mathml-content+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mathml-presentation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-associated-procedure-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-deregister+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-envelope+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-protection-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-reception-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-schedule+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-user-service-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbox\":{\"source\":\"iana\",\"extensions\":[\"mbox\"]},\"application/media-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/media_control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mediaservercontrol+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mscml\"]},\"application/merge-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/metalink+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"metalink\"]},\"application/metalink4+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"meta4\"]},\"application/mets+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mets\"]},\"application/mf4\":{\"source\":\"iana\"},\"application/mikey\":{\"source\":\"iana\"},\"application/mipc\":{\"source\":\"iana\"},\"application/mmt-aei+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mmt-usd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mods+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mods\"]},\"application/moss-keys\":{\"source\":\"iana\"},\"application/moss-signature\":{\"source\":\"iana\"},\"application/mosskey-data\":{\"source\":\"iana\"},\"application/mosskey-request\":{\"source\":\"iana\"},\"application/mp21\":{\"source\":\"iana\",\"extensions\":[\"m21\",\"mp21\"]},\"application/mp4\":{\"source\":\"iana\",\"extensions\":[\"mp4s\",\"m4p\"]},\"application/mpeg4-generic\":{\"source\":\"iana\"},\"application/mpeg4-iod\":{\"source\":\"iana\"},\"application/mpeg4-iod-xmt\":{\"source\":\"iana\"},\"application/mrb-consumer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mrb-publish+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/msc-ivr+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/msc-mixer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/msword\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"doc\",\"dot\"]},\"application/mud+json\":{\"source\":\"iana\",\"compressible\":true},\"application/mxf\":{\"source\":\"iana\",\"extensions\":[\"mxf\"]},\"application/n-quads\":{\"source\":\"iana\",\"extensions\":[\"nq\"]},\"application/n-triples\":{\"source\":\"iana\",\"extensions\":[\"nt\"]},\"application/nasdata\":{\"source\":\"iana\"},\"application/news-checkgroups\":{\"source\":\"iana\"},\"application/news-groupinfo\":{\"source\":\"iana\"},\"application/news-transmission\":{\"source\":\"iana\"},\"application/nlsml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/node\":{\"source\":\"iana\"},\"application/nss\":{\"source\":\"iana\"},\"application/ocsp-request\":{\"source\":\"iana\"},\"application/ocsp-response\":{\"source\":\"iana\"},\"application/octet-stream\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"bin\",\"dms\",\"lrf\",\"mar\",\"so\",\"dist\",\"distz\",\"pkg\",\"bpk\",\"dump\",\"elc\",\"deploy\",\"exe\",\"dll\",\"deb\",\"dmg\",\"iso\",\"img\",\"msi\",\"msp\",\"msm\",\"buffer\"]},\"application/oda\":{\"source\":\"iana\",\"extensions\":[\"oda\"]},\"application/odm+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/odx\":{\"source\":\"iana\"},\"application/oebps-package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"opf\"]},\"application/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogx\"]},\"application/omdoc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"omdoc\"]},\"application/onenote\":{\"source\":\"apache\",\"extensions\":[\"onetoc\",\"onetoc2\",\"onetmp\",\"onepkg\"]},\"application/oscore\":{\"source\":\"iana\"},\"application/oxps\":{\"source\":\"iana\",\"extensions\":[\"oxps\"]},\"application/p2p-overlay+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/parityfec\":{\"source\":\"iana\"},\"application/passport\":{\"source\":\"iana\"},\"application/patch-ops-error+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xer\"]},\"application/pdf\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pdf\"]},\"application/pdx\":{\"source\":\"iana\"},\"application/pem-certificate-chain\":{\"source\":\"iana\"},\"application/pgp-encrypted\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pgp\"]},\"application/pgp-keys\":{\"source\":\"iana\"},\"application/pgp-signature\":{\"source\":\"iana\",\"extensions\":[\"asc\",\"sig\"]},\"application/pics-rules\":{\"source\":\"apache\",\"extensions\":[\"prf\"]},\"application/pidf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/pidf-diff+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/pkcs10\":{\"source\":\"iana\",\"extensions\":[\"p10\"]},\"application/pkcs12\":{\"source\":\"iana\"},\"application/pkcs7-mime\":{\"source\":\"iana\",\"extensions\":[\"p7m\",\"p7c\"]},\"application/pkcs7-signature\":{\"source\":\"iana\",\"extensions\":[\"p7s\"]},\"application/pkcs8\":{\"source\":\"iana\",\"extensions\":[\"p8\"]},\"application/pkcs8-encrypted\":{\"source\":\"iana\"},\"application/pkix-attr-cert\":{\"source\":\"iana\",\"extensions\":[\"ac\"]},\"application/pkix-cert\":{\"source\":\"iana\",\"extensions\":[\"cer\"]},\"application/pkix-crl\":{\"source\":\"iana\",\"extensions\":[\"crl\"]},\"application/pkix-pkipath\":{\"source\":\"iana\",\"extensions\":[\"pkipath\"]},\"application/pkixcmp\":{\"source\":\"iana\",\"extensions\":[\"pki\"]},\"application/pls+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pls\"]},\"application/poc-settings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/postscript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ai\",\"eps\",\"ps\"]},\"application/ppsp-tracker+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/provenance+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/prs.alvestrand.titrax-sheet\":{\"source\":\"iana\"},\"application/prs.cww\":{\"source\":\"iana\",\"extensions\":[\"cww\"]},\"application/prs.hpub+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/prs.nprend\":{\"source\":\"iana\"},\"application/prs.plucker\":{\"source\":\"iana\"},\"application/prs.rdf-xml-crypt\":{\"source\":\"iana\"},\"application/prs.xsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/pskc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pskcxml\"]},\"application/qsig\":{\"source\":\"iana\"},\"application/raml+yaml\":{\"compressible\":true,\"extensions\":[\"raml\"]},\"application/raptorfec\":{\"source\":\"iana\"},\"application/rdap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/rdf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rdf\",\"owl\"]},\"application/reginfo+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rif\"]},\"application/relax-ng-compact-syntax\":{\"source\":\"iana\",\"extensions\":[\"rnc\"]},\"application/remote-printing\":{\"source\":\"iana\"},\"application/reputon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/resource-lists+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rl\"]},\"application/resource-lists-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rld\"]},\"application/rfc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/riscos\":{\"source\":\"iana\"},\"application/rlmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/rls-services+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rs\"]},\"application/route-apd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/route-s-tsid+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/route-usd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/rpki-ghostbusters\":{\"source\":\"iana\",\"extensions\":[\"gbr\"]},\"application/rpki-manifest\":{\"source\":\"iana\",\"extensions\":[\"mft\"]},\"application/rpki-publication\":{\"source\":\"iana\"},\"application/rpki-roa\":{\"source\":\"iana\",\"extensions\":[\"roa\"]},\"application/rpki-updown\":{\"source\":\"iana\"},\"application/rsd+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rsd\"]},\"application/rss+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rss\"]},\"application/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"application/rtploopback\":{\"source\":\"iana\"},\"application/rtx\":{\"source\":\"iana\"},\"application/samlassertion+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/samlmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sbml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sbml\"]},\"application/scaip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/scim+json\":{\"source\":\"iana\",\"compressible\":true},\"application/scvp-cv-request\":{\"source\":\"iana\",\"extensions\":[\"scq\"]},\"application/scvp-cv-response\":{\"source\":\"iana\",\"extensions\":[\"scs\"]},\"application/scvp-vp-request\":{\"source\":\"iana\",\"extensions\":[\"spq\"]},\"application/scvp-vp-response\":{\"source\":\"iana\",\"extensions\":[\"spp\"]},\"application/sdp\":{\"source\":\"iana\",\"extensions\":[\"sdp\"]},\"application/secevent+jwt\":{\"source\":\"iana\"},\"application/senml+cbor\":{\"source\":\"iana\"},\"application/senml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/senml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/senml-exi\":{\"source\":\"iana\"},\"application/sensml+cbor\":{\"source\":\"iana\"},\"application/sensml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/sensml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sensml-exi\":{\"source\":\"iana\"},\"application/sep+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sep-exi\":{\"source\":\"iana\"},\"application/session-info\":{\"source\":\"iana\"},\"application/set-payment\":{\"source\":\"iana\"},\"application/set-payment-initiation\":{\"source\":\"iana\",\"extensions\":[\"setpay\"]},\"application/set-registration\":{\"source\":\"iana\"},\"application/set-registration-initiation\":{\"source\":\"iana\",\"extensions\":[\"setreg\"]},\"application/sgml\":{\"source\":\"iana\"},\"application/sgml-open-catalog\":{\"source\":\"iana\"},\"application/shf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"shf\"]},\"application/sieve\":{\"source\":\"iana\",\"extensions\":[\"siv\",\"sieve\"]},\"application/simple-filter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/simple-message-summary\":{\"source\":\"iana\"},\"application/simplesymbolcontainer\":{\"source\":\"iana\"},\"application/sipc\":{\"source\":\"iana\"},\"application/slate\":{\"source\":\"iana\"},\"application/smil\":{\"source\":\"iana\"},\"application/smil+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"smi\",\"smil\"]},\"application/smpte336m\":{\"source\":\"iana\"},\"application/soap+fastinfoset\":{\"source\":\"iana\"},\"application/soap+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sparql-query\":{\"source\":\"iana\",\"extensions\":[\"rq\"]},\"application/sparql-results+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"srx\"]},\"application/spirits-event+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sql\":{\"source\":\"iana\"},\"application/srgs\":{\"source\":\"iana\",\"extensions\":[\"gram\"]},\"application/srgs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"grxml\"]},\"application/sru+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sru\"]},\"application/ssdl+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ssdl\"]},\"application/ssml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ssml\"]},\"application/stix+json\":{\"source\":\"iana\",\"compressible\":true},\"application/swid+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/tamp-apex-update\":{\"source\":\"iana\"},\"application/tamp-apex-update-confirm\":{\"source\":\"iana\"},\"application/tamp-community-update\":{\"source\":\"iana\"},\"application/tamp-community-update-confirm\":{\"source\":\"iana\"},\"application/tamp-error\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust-confirm\":{\"source\":\"iana\"},\"application/tamp-status-query\":{\"source\":\"iana\"},\"application/tamp-status-response\":{\"source\":\"iana\"},\"application/tamp-update\":{\"source\":\"iana\"},\"application/tamp-update-confirm\":{\"source\":\"iana\"},\"application/tar\":{\"compressible\":true},\"application/taxii+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tei+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tei\",\"teicorpus\"]},\"application/tetra_isi\":{\"source\":\"iana\"},\"application/thraud+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tfi\"]},\"application/timestamp-query\":{\"source\":\"iana\"},\"application/timestamp-reply\":{\"source\":\"iana\"},\"application/timestamped-data\":{\"source\":\"iana\",\"extensions\":[\"tsd\"]},\"application/tlsrpt+gzip\":{\"source\":\"iana\"},\"application/tlsrpt+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tnauthlist\":{\"source\":\"iana\"},\"application/toml\":{\"compressible\":true,\"extensions\":[\"toml\"]},\"application/trickle-ice-sdpfrag\":{\"source\":\"iana\"},\"application/trig\":{\"source\":\"iana\"},\"application/ttml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/tve-trigger\":{\"source\":\"iana\"},\"application/tzif\":{\"source\":\"iana\"},\"application/tzif-leap\":{\"source\":\"iana\"},\"application/ulpfec\":{\"source\":\"iana\"},\"application/urc-grpsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-ressheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-targetdesc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-uisocketdesc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vemmi\":{\"source\":\"iana\"},\"application/vividence.scriptfile\":{\"source\":\"apache\"},\"application/vnd.1000minds.decision-model+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-prose+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-prose-pc3ch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-v2x-local-service-information\":{\"source\":\"iana\"},\"application/vnd.3gpp.access-transfer-events+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.bsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.gmop+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mc-signalling-ear\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-payload\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-signalling\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-floor-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-signed+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-init-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-transmission-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mid-call+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.pic-bw-large\":{\"source\":\"iana\",\"extensions\":[\"plb\"]},\"application/vnd.3gpp.pic-bw-small\":{\"source\":\"iana\",\"extensions\":[\"psb\"]},\"application/vnd.3gpp.pic-bw-var\":{\"source\":\"iana\",\"extensions\":[\"pvb\"]},\"application/vnd.3gpp.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp.sms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-ext+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.state-and-event-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.ussd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.bcmcsinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp2.tcap\":{\"source\":\"iana\",\"extensions\":[\"tcap\"]},\"application/vnd.3lightssoftware.imagescal\":{\"source\":\"iana\"},\"application/vnd.3m.post-it-notes\":{\"source\":\"iana\",\"extensions\":[\"pwn\"]},\"application/vnd.accpac.simply.aso\":{\"source\":\"iana\",\"extensions\":[\"aso\"]},\"application/vnd.accpac.simply.imp\":{\"source\":\"iana\",\"extensions\":[\"imp\"]},\"application/vnd.acucobol\":{\"source\":\"iana\",\"extensions\":[\"acu\"]},\"application/vnd.acucorp\":{\"source\":\"iana\",\"extensions\":[\"atc\",\"acutc\"]},\"application/vnd.adobe.air-application-installer-package+zip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"air\"]},\"application/vnd.adobe.flash.movie\":{\"source\":\"iana\"},\"application/vnd.adobe.formscentral.fcdt\":{\"source\":\"iana\",\"extensions\":[\"fcdt\"]},\"application/vnd.adobe.fxp\":{\"source\":\"iana\",\"extensions\":[\"fxp\",\"fxpl\"]},\"application/vnd.adobe.partial-upload\":{\"source\":\"iana\"},\"application/vnd.adobe.xdp+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdp\"]},\"application/vnd.adobe.xfdf\":{\"source\":\"iana\",\"extensions\":[\"xfdf\"]},\"application/vnd.aether.imp\":{\"source\":\"iana\"},\"application/vnd.afpc.afplinedata\":{\"source\":\"iana\"},\"application/vnd.afpc.modca\":{\"source\":\"iana\"},\"application/vnd.ah-barcode\":{\"source\":\"iana\"},\"application/vnd.ahead.space\":{\"source\":\"iana\",\"extensions\":[\"ahead\"]},\"application/vnd.airzip.filesecure.azf\":{\"source\":\"iana\",\"extensions\":[\"azf\"]},\"application/vnd.airzip.filesecure.azs\":{\"source\":\"iana\",\"extensions\":[\"azs\"]},\"application/vnd.amadeus+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.amazon.ebook\":{\"source\":\"apache\",\"extensions\":[\"azw\"]},\"application/vnd.amazon.mobi8-ebook\":{\"source\":\"iana\"},\"application/vnd.americandynamics.acc\":{\"source\":\"iana\",\"extensions\":[\"acc\"]},\"application/vnd.amiga.ami\":{\"source\":\"iana\",\"extensions\":[\"ami\"]},\"application/vnd.amundsen.maze+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.android.ota\":{\"source\":\"iana\"},\"application/vnd.android.package-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"apk\"]},\"application/vnd.anki\":{\"source\":\"iana\"},\"application/vnd.anser-web-certificate-issue-initiation\":{\"source\":\"iana\",\"extensions\":[\"cii\"]},\"application/vnd.anser-web-funds-transfer-initiation\":{\"source\":\"apache\",\"extensions\":[\"fti\"]},\"application/vnd.antix.game-component\":{\"source\":\"iana\",\"extensions\":[\"atx\"]},\"application/vnd.apache.thrift.binary\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.compact\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.json\":{\"source\":\"iana\"},\"application/vnd.api+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apothekende.reservation+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apple.installer+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpkg\"]},\"application/vnd.apple.keynote\":{\"source\":\"iana\",\"extensions\":[\"keynote\"]},\"application/vnd.apple.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"m3u8\"]},\"application/vnd.apple.numbers\":{\"source\":\"iana\",\"extensions\":[\"numbers\"]},\"application/vnd.apple.pages\":{\"source\":\"iana\",\"extensions\":[\"pages\"]},\"application/vnd.apple.pkpass\":{\"compressible\":false,\"extensions\":[\"pkpass\"]},\"application/vnd.arastra.swi\":{\"source\":\"iana\"},\"application/vnd.aristanetworks.swi\":{\"source\":\"iana\",\"extensions\":[\"swi\"]},\"application/vnd.artisan+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.artsquare\":{\"source\":\"iana\"},\"application/vnd.astraea-software.iota\":{\"source\":\"iana\",\"extensions\":[\"iota\"]},\"application/vnd.audiograph\":{\"source\":\"iana\",\"extensions\":[\"aep\"]},\"application/vnd.autopackage\":{\"source\":\"iana\"},\"application/vnd.avalon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.avistar+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.balsamiq.bmml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.balsamiq.bmpr\":{\"source\":\"iana\"},\"application/vnd.banana-accounting\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.error\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bekitzur-stech+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bint.med-content\":{\"source\":\"iana\"},\"application/vnd.biopax.rdf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.blink-idb-value-wrapper\":{\"source\":\"iana\"},\"application/vnd.blueice.multipass\":{\"source\":\"iana\",\"extensions\":[\"mpm\"]},\"application/vnd.bluetooth.ep.oob\":{\"source\":\"iana\"},\"application/vnd.bluetooth.le.oob\":{\"source\":\"iana\"},\"application/vnd.bmi\":{\"source\":\"iana\",\"extensions\":[\"bmi\"]},\"application/vnd.bpf\":{\"source\":\"iana\"},\"application/vnd.bpf3\":{\"source\":\"iana\"},\"application/vnd.businessobjects\":{\"source\":\"iana\",\"extensions\":[\"rep\"]},\"application/vnd.byu.uapi+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cab-jscript\":{\"source\":\"iana\"},\"application/vnd.canon-cpdl\":{\"source\":\"iana\"},\"application/vnd.canon-lips\":{\"source\":\"iana\"},\"application/vnd.capasystems-pg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cendio.thinlinc.clientconf\":{\"source\":\"iana\"},\"application/vnd.century-systems.tcp_stream\":{\"source\":\"iana\"},\"application/vnd.chemdraw+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cdxml\"]},\"application/vnd.chess-pgn\":{\"source\":\"iana\"},\"application/vnd.chipnuts.karaoke-mmd\":{\"source\":\"iana\",\"extensions\":[\"mmd\"]},\"application/vnd.ciedi\":{\"source\":\"iana\"},\"application/vnd.cinderella\":{\"source\":\"iana\",\"extensions\":[\"cdy\"]},\"application/vnd.cirpack.isdn-ext\":{\"source\":\"iana\"},\"application/vnd.citationstyles.style+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csl\"]},\"application/vnd.claymore\":{\"source\":\"iana\",\"extensions\":[\"cla\"]},\"application/vnd.cloanto.rp9\":{\"source\":\"iana\",\"extensions\":[\"rp9\"]},\"application/vnd.clonk.c4group\":{\"source\":\"iana\",\"extensions\":[\"c4g\",\"c4d\",\"c4f\",\"c4p\",\"c4u\"]},\"application/vnd.cluetrust.cartomobile-config\":{\"source\":\"iana\",\"extensions\":[\"c11amc\"]},\"application/vnd.cluetrust.cartomobile-config-pkg\":{\"source\":\"iana\",\"extensions\":[\"c11amz\"]},\"application/vnd.coffeescript\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet-template\":{\"source\":\"iana\"},\"application/vnd.collection+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.doc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.next+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.comicbook+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.comicbook-rar\":{\"source\":\"iana\"},\"application/vnd.commerce-battelle\":{\"source\":\"iana\"},\"application/vnd.commonspace\":{\"source\":\"iana\",\"extensions\":[\"csp\"]},\"application/vnd.contact.cmsg\":{\"source\":\"iana\",\"extensions\":[\"cdbcmsg\"]},\"application/vnd.coreos.ignition+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cosmocaller\":{\"source\":\"iana\",\"extensions\":[\"cmc\"]},\"application/vnd.crick.clicker\":{\"source\":\"iana\",\"extensions\":[\"clkx\"]},\"application/vnd.crick.clicker.keyboard\":{\"source\":\"iana\",\"extensions\":[\"clkk\"]},\"application/vnd.crick.clicker.palette\":{\"source\":\"iana\",\"extensions\":[\"clkp\"]},\"application/vnd.crick.clicker.template\":{\"source\":\"iana\",\"extensions\":[\"clkt\"]},\"application/vnd.crick.clicker.wordbank\":{\"source\":\"iana\",\"extensions\":[\"clkw\"]},\"application/vnd.criticaltools.wbs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wbs\"]},\"application/vnd.cryptii.pipe+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.crypto-shade-file\":{\"source\":\"iana\"},\"application/vnd.ctc-posml\":{\"source\":\"iana\",\"extensions\":[\"pml\"]},\"application/vnd.ctct.ws+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cups-pdf\":{\"source\":\"iana\"},\"application/vnd.cups-postscript\":{\"source\":\"iana\"},\"application/vnd.cups-ppd\":{\"source\":\"iana\",\"extensions\":[\"ppd\"]},\"application/vnd.cups-raster\":{\"source\":\"iana\"},\"application/vnd.cups-raw\":{\"source\":\"iana\"},\"application/vnd.curl\":{\"source\":\"iana\"},\"application/vnd.curl.car\":{\"source\":\"apache\",\"extensions\":[\"car\"]},\"application/vnd.curl.pcurl\":{\"source\":\"apache\",\"extensions\":[\"pcurl\"]},\"application/vnd.cyan.dean.root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cybank\":{\"source\":\"iana\"},\"application/vnd.d2l.coursepackage1p0+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.dart\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dart\"]},\"application/vnd.data-vision.rdz\":{\"source\":\"iana\",\"extensions\":[\"rdz\"]},\"application/vnd.datapackage+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dataresource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.debian.binary-package\":{\"source\":\"iana\"},\"application/vnd.dece.data\":{\"source\":\"iana\",\"extensions\":[\"uvf\",\"uvvf\",\"uvd\",\"uvvd\"]},\"application/vnd.dece.ttml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uvt\",\"uvvt\"]},\"application/vnd.dece.unspecified\":{\"source\":\"iana\",\"extensions\":[\"uvx\",\"uvvx\"]},\"application/vnd.dece.zip\":{\"source\":\"iana\",\"extensions\":[\"uvz\",\"uvvz\"]},\"application/vnd.denovo.fcselayout-link\":{\"source\":\"iana\",\"extensions\":[\"fe_launch\"]},\"application/vnd.desmume.movie\":{\"source\":\"iana\"},\"application/vnd.dir-bi.plate-dl-nosuffix\":{\"source\":\"iana\"},\"application/vnd.dm.delegation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dna\":{\"source\":\"iana\",\"extensions\":[\"dna\"]},\"application/vnd.document+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dolby.mlp\":{\"source\":\"apache\",\"extensions\":[\"mlp\"]},\"application/vnd.dolby.mobile.1\":{\"source\":\"iana\"},\"application/vnd.dolby.mobile.2\":{\"source\":\"iana\"},\"application/vnd.doremir.scorecloud-binary-document\":{\"source\":\"iana\"},\"application/vnd.dpgraph\":{\"source\":\"iana\",\"extensions\":[\"dpg\"]},\"application/vnd.dreamfactory\":{\"source\":\"iana\",\"extensions\":[\"dfac\"]},\"application/vnd.drive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ds-keypoint\":{\"source\":\"apache\",\"extensions\":[\"kpxx\"]},\"application/vnd.dtg.local\":{\"source\":\"iana\"},\"application/vnd.dtg.local.flash\":{\"source\":\"iana\"},\"application/vnd.dtg.local.html\":{\"source\":\"iana\"},\"application/vnd.dvb.ait\":{\"source\":\"iana\",\"extensions\":[\"ait\"]},\"application/vnd.dvb.dvbj\":{\"source\":\"iana\"},\"application/vnd.dvb.esgcontainer\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcdftnotifaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess2\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgpdd\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcroaming\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-base\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-enhancement\":{\"source\":\"iana\"},\"application/vnd.dvb.notif-aggregate-root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-container+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-generic+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-msglist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-init+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.pfr\":{\"source\":\"iana\"},\"application/vnd.dvb.service\":{\"source\":\"iana\",\"extensions\":[\"svc\"]},\"application/vnd.dxr\":{\"source\":\"iana\"},\"application/vnd.dynageo\":{\"source\":\"iana\",\"extensions\":[\"geo\"]},\"application/vnd.dzr\":{\"source\":\"iana\"},\"application/vnd.easykaraoke.cdgdownload\":{\"source\":\"iana\"},\"application/vnd.ecdis-update\":{\"source\":\"iana\"},\"application/vnd.ecip.rlp\":{\"source\":\"iana\"},\"application/vnd.ecowin.chart\":{\"source\":\"iana\",\"extensions\":[\"mag\"]},\"application/vnd.ecowin.filerequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.fileupdate\":{\"source\":\"iana\"},\"application/vnd.ecowin.series\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesrequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesupdate\":{\"source\":\"iana\"},\"application/vnd.efi.img\":{\"source\":\"iana\"},\"application/vnd.efi.iso\":{\"source\":\"iana\"},\"application/vnd.emclient.accessrequest+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.enliven\":{\"source\":\"iana\",\"extensions\":[\"nml\"]},\"application/vnd.enphase.envoy\":{\"source\":\"iana\"},\"application/vnd.eprints.data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.epson.esf\":{\"source\":\"iana\",\"extensions\":[\"esf\"]},\"application/vnd.epson.msf\":{\"source\":\"iana\",\"extensions\":[\"msf\"]},\"application/vnd.epson.quickanime\":{\"source\":\"iana\",\"extensions\":[\"qam\"]},\"application/vnd.epson.salt\":{\"source\":\"iana\",\"extensions\":[\"slt\"]},\"application/vnd.epson.ssf\":{\"source\":\"iana\",\"extensions\":[\"ssf\"]},\"application/vnd.ericsson.quickcall\":{\"source\":\"iana\"},\"application/vnd.espass-espass+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.eszigno3+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"es3\",\"et3\"]},\"application/vnd.etsi.aoc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.asic-e+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.asic-s+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.cug+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvcommand+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-bc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-cod+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-npvr+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvservice+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mcid+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mheg5\":{\"source\":\"iana\"},\"application/vnd.etsi.overload-control-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.pstn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.sci+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.simservs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.timestamp-token\":{\"source\":\"iana\"},\"application/vnd.etsi.tsl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.tsl.der\":{\"source\":\"iana\"},\"application/vnd.eudora.data\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.profile\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.settings\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.theme\":{\"source\":\"iana\"},\"application/vnd.exstream-empower+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.exstream-package\":{\"source\":\"iana\"},\"application/vnd.ezpix-album\":{\"source\":\"iana\",\"extensions\":[\"ez2\"]},\"application/vnd.ezpix-package\":{\"source\":\"iana\",\"extensions\":[\"ez3\"]},\"application/vnd.f-secure.mobile\":{\"source\":\"iana\"},\"application/vnd.fastcopy-disk-image\":{\"source\":\"iana\"},\"application/vnd.fdf\":{\"source\":\"iana\",\"extensions\":[\"fdf\"]},\"application/vnd.fdsn.mseed\":{\"source\":\"iana\",\"extensions\":[\"mseed\"]},\"application/vnd.fdsn.seed\":{\"source\":\"iana\",\"extensions\":[\"seed\",\"dataless\"]},\"application/vnd.ffsns\":{\"source\":\"iana\"},\"application/vnd.ficlab.flb+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.filmit.zfc\":{\"source\":\"iana\"},\"application/vnd.fints\":{\"source\":\"iana\"},\"application/vnd.firemonkeys.cloudcell\":{\"source\":\"iana\"},\"application/vnd.flographit\":{\"source\":\"iana\",\"extensions\":[\"gph\"]},\"application/vnd.fluxtime.clip\":{\"source\":\"iana\",\"extensions\":[\"ftc\"]},\"application/vnd.font-fontforge-sfd\":{\"source\":\"iana\"},\"application/vnd.framemaker\":{\"source\":\"iana\",\"extensions\":[\"fm\",\"frame\",\"maker\",\"book\"]},\"application/vnd.frogans.fnc\":{\"source\":\"iana\",\"extensions\":[\"fnc\"]},\"application/vnd.frogans.ltf\":{\"source\":\"iana\",\"extensions\":[\"ltf\"]},\"application/vnd.fsc.weblaunch\":{\"source\":\"iana\",\"extensions\":[\"fsc\"]},\"application/vnd.fujitsu.oasys\":{\"source\":\"iana\",\"extensions\":[\"oas\"]},\"application/vnd.fujitsu.oasys2\":{\"source\":\"iana\",\"extensions\":[\"oa2\"]},\"application/vnd.fujitsu.oasys3\":{\"source\":\"iana\",\"extensions\":[\"oa3\"]},\"application/vnd.fujitsu.oasysgp\":{\"source\":\"iana\",\"extensions\":[\"fg5\"]},\"application/vnd.fujitsu.oasysprs\":{\"source\":\"iana\",\"extensions\":[\"bh2\"]},\"application/vnd.fujixerox.art-ex\":{\"source\":\"iana\"},\"application/vnd.fujixerox.art4\":{\"source\":\"iana\"},\"application/vnd.fujixerox.ddd\":{\"source\":\"iana\",\"extensions\":[\"ddd\"]},\"application/vnd.fujixerox.docuworks\":{\"source\":\"iana\",\"extensions\":[\"xdw\"]},\"application/vnd.fujixerox.docuworks.binder\":{\"source\":\"iana\",\"extensions\":[\"xbd\"]},\"application/vnd.fujixerox.docuworks.container\":{\"source\":\"iana\"},\"application/vnd.fujixerox.hbpl\":{\"source\":\"iana\"},\"application/vnd.fut-misnet\":{\"source\":\"iana\"},\"application/vnd.futoin+cbor\":{\"source\":\"iana\"},\"application/vnd.futoin+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.fuzzysheet\":{\"source\":\"iana\",\"extensions\":[\"fzs\"]},\"application/vnd.genomatix.tuxedo\":{\"source\":\"iana\",\"extensions\":[\"txd\"]},\"application/vnd.geo+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geocube+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geogebra.file\":{\"source\":\"iana\",\"extensions\":[\"ggb\"]},\"application/vnd.geogebra.tool\":{\"source\":\"iana\",\"extensions\":[\"ggt\"]},\"application/vnd.geometry-explorer\":{\"source\":\"iana\",\"extensions\":[\"gex\",\"gre\"]},\"application/vnd.geonext\":{\"source\":\"iana\",\"extensions\":[\"gxt\"]},\"application/vnd.geoplan\":{\"source\":\"iana\",\"extensions\":[\"g2w\"]},\"application/vnd.geospace\":{\"source\":\"iana\",\"extensions\":[\"g3w\"]},\"application/vnd.gerber\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt-response\":{\"source\":\"iana\"},\"application/vnd.gmx\":{\"source\":\"iana\",\"extensions\":[\"gmx\"]},\"application/vnd.google-apps.document\":{\"compressible\":false,\"extensions\":[\"gdoc\"]},\"application/vnd.google-apps.presentation\":{\"compressible\":false,\"extensions\":[\"gslides\"]},\"application/vnd.google-apps.spreadsheet\":{\"compressible\":false,\"extensions\":[\"gsheet\"]},\"application/vnd.google-earth.kml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"kml\"]},\"application/vnd.google-earth.kmz\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"kmz\"]},\"application/vnd.gov.sk.e-form+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.gov.sk.e-form+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.gov.sk.xmldatacontainer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.grafeq\":{\"source\":\"iana\",\"extensions\":[\"gqf\",\"gqs\"]},\"application/vnd.gridmp\":{\"source\":\"iana\"},\"application/vnd.groove-account\":{\"source\":\"iana\",\"extensions\":[\"gac\"]},\"application/vnd.groove-help\":{\"source\":\"iana\",\"extensions\":[\"ghf\"]},\"application/vnd.groove-identity-message\":{\"source\":\"iana\",\"extensions\":[\"gim\"]},\"application/vnd.groove-injector\":{\"source\":\"iana\",\"extensions\":[\"grv\"]},\"application/vnd.groove-tool-message\":{\"source\":\"iana\",\"extensions\":[\"gtm\"]},\"application/vnd.groove-tool-template\":{\"source\":\"iana\",\"extensions\":[\"tpl\"]},\"application/vnd.groove-vcard\":{\"source\":\"iana\",\"extensions\":[\"vcg\"]},\"application/vnd.hal+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hal+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"hal\"]},\"application/vnd.handheld-entertainment+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zmm\"]},\"application/vnd.hbci\":{\"source\":\"iana\",\"extensions\":[\"hbci\"]},\"application/vnd.hc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hcl-bireports\":{\"source\":\"iana\"},\"application/vnd.hdt\":{\"source\":\"iana\"},\"application/vnd.heroku+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hhe.lesson-player\":{\"source\":\"iana\",\"extensions\":[\"les\"]},\"application/vnd.hp-hpgl\":{\"source\":\"iana\",\"extensions\":[\"hpgl\"]},\"application/vnd.hp-hpid\":{\"source\":\"iana\",\"extensions\":[\"hpid\"]},\"application/vnd.hp-hps\":{\"source\":\"iana\",\"extensions\":[\"hps\"]},\"application/vnd.hp-jlyt\":{\"source\":\"iana\",\"extensions\":[\"jlt\"]},\"application/vnd.hp-pcl\":{\"source\":\"iana\",\"extensions\":[\"pcl\"]},\"application/vnd.hp-pclxl\":{\"source\":\"iana\",\"extensions\":[\"pclxl\"]},\"application/vnd.httphone\":{\"source\":\"iana\"},\"application/vnd.hydrostatix.sof-data\":{\"source\":\"iana\",\"extensions\":[\"sfd-hdstx\"]},\"application/vnd.hyper+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyper-item+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyperdrive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hzn-3d-crossword\":{\"source\":\"iana\"},\"application/vnd.ibm.afplinedata\":{\"source\":\"iana\"},\"application/vnd.ibm.electronic-media\":{\"source\":\"iana\"},\"application/vnd.ibm.minipay\":{\"source\":\"iana\",\"extensions\":[\"mpy\"]},\"application/vnd.ibm.modcap\":{\"source\":\"iana\",\"extensions\":[\"afp\",\"listafp\",\"list3820\"]},\"application/vnd.ibm.rights-management\":{\"source\":\"iana\",\"extensions\":[\"irm\"]},\"application/vnd.ibm.secure-container\":{\"source\":\"iana\",\"extensions\":[\"sc\"]},\"application/vnd.iccprofile\":{\"source\":\"iana\",\"extensions\":[\"icc\",\"icm\"]},\"application/vnd.ieee.1905\":{\"source\":\"iana\"},\"application/vnd.igloader\":{\"source\":\"iana\",\"extensions\":[\"igl\"]},\"application/vnd.imagemeter.folder+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.imagemeter.image+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.immervision-ivp\":{\"source\":\"iana\",\"extensions\":[\"ivp\"]},\"application/vnd.immervision-ivu\":{\"source\":\"iana\",\"extensions\":[\"ivu\"]},\"application/vnd.ims.imsccv1p1\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p2\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p3\":{\"source\":\"iana\"},\"application/vnd.ims.lis.v2.result+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolconsumerprofile+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy.id+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings.simple+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informedcontrol.rms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informix-visionary\":{\"source\":\"iana\"},\"application/vnd.infotech.project\":{\"source\":\"iana\"},\"application/vnd.infotech.project+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.innopath.wamp.notification\":{\"source\":\"iana\"},\"application/vnd.insors.igm\":{\"source\":\"iana\",\"extensions\":[\"igm\"]},\"application/vnd.intercon.formnet\":{\"source\":\"iana\",\"extensions\":[\"xpw\",\"xpx\"]},\"application/vnd.intergeo\":{\"source\":\"iana\",\"extensions\":[\"i2g\"]},\"application/vnd.intertrust.digibox\":{\"source\":\"iana\"},\"application/vnd.intertrust.nncp\":{\"source\":\"iana\"},\"application/vnd.intu.qbo\":{\"source\":\"iana\",\"extensions\":[\"qbo\"]},\"application/vnd.intu.qfx\":{\"source\":\"iana\",\"extensions\":[\"qfx\"]},\"application/vnd.iptc.g2.catalogitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.conceptitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.knowledgeitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.packageitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.planningitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ipunplugged.rcprofile\":{\"source\":\"iana\",\"extensions\":[\"rcprofile\"]},\"application/vnd.irepository.package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"irp\"]},\"application/vnd.is-xpr\":{\"source\":\"iana\",\"extensions\":[\"xpr\"]},\"application/vnd.isac.fcs\":{\"source\":\"iana\",\"extensions\":[\"fcs\"]},\"application/vnd.iso11783-10+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.jam\":{\"source\":\"iana\",\"extensions\":[\"jam\"]},\"application/vnd.japannet-directory-service\":{\"source\":\"iana\"},\"application/vnd.japannet-jpnstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-payment-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-registration\":{\"source\":\"iana\"},\"application/vnd.japannet-registration-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-setstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-verification\":{\"source\":\"iana\"},\"application/vnd.japannet-verification-wakeup\":{\"source\":\"iana\"},\"application/vnd.jcp.javame.midlet-rms\":{\"source\":\"iana\",\"extensions\":[\"rms\"]},\"application/vnd.jisp\":{\"source\":\"iana\",\"extensions\":[\"jisp\"]},\"application/vnd.joost.joda-archive\":{\"source\":\"iana\",\"extensions\":[\"joda\"]},\"application/vnd.jsk.isdn-ngn\":{\"source\":\"iana\"},\"application/vnd.kahootz\":{\"source\":\"iana\",\"extensions\":[\"ktz\",\"ktr\"]},\"application/vnd.kde.karbon\":{\"source\":\"iana\",\"extensions\":[\"karbon\"]},\"application/vnd.kde.kchart\":{\"source\":\"iana\",\"extensions\":[\"chrt\"]},\"application/vnd.kde.kformula\":{\"source\":\"iana\",\"extensions\":[\"kfo\"]},\"application/vnd.kde.kivio\":{\"source\":\"iana\",\"extensions\":[\"flw\"]},\"application/vnd.kde.kontour\":{\"source\":\"iana\",\"extensions\":[\"kon\"]},\"application/vnd.kde.kpresenter\":{\"source\":\"iana\",\"extensions\":[\"kpr\",\"kpt\"]},\"application/vnd.kde.kspread\":{\"source\":\"iana\",\"extensions\":[\"ksp\"]},\"application/vnd.kde.kword\":{\"source\":\"iana\",\"extensions\":[\"kwd\",\"kwt\"]},\"application/vnd.kenameaapp\":{\"source\":\"iana\",\"extensions\":[\"htke\"]},\"application/vnd.kidspiration\":{\"source\":\"iana\",\"extensions\":[\"kia\"]},\"application/vnd.kinar\":{\"source\":\"iana\",\"extensions\":[\"kne\",\"knp\"]},\"application/vnd.koan\":{\"source\":\"iana\",\"extensions\":[\"skp\",\"skd\",\"skt\",\"skm\"]},\"application/vnd.kodak-descriptor\":{\"source\":\"iana\",\"extensions\":[\"sse\"]},\"application/vnd.las\":{\"source\":\"iana\"},\"application/vnd.las.las+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.las.las+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lasxml\"]},\"application/vnd.laszip\":{\"source\":\"iana\"},\"application/vnd.leap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.liberty-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.llamagraphics.life-balance.desktop\":{\"source\":\"iana\",\"extensions\":[\"lbd\"]},\"application/vnd.llamagraphics.life-balance.exchange+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lbe\"]},\"application/vnd.logipipe.circuit+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.loom\":{\"source\":\"iana\"},\"application/vnd.lotus-1-2-3\":{\"source\":\"iana\",\"extensions\":[\"123\"]},\"application/vnd.lotus-approach\":{\"source\":\"iana\",\"extensions\":[\"apr\"]},\"application/vnd.lotus-freelance\":{\"source\":\"iana\",\"extensions\":[\"pre\"]},\"application/vnd.lotus-notes\":{\"source\":\"iana\",\"extensions\":[\"nsf\"]},\"application/vnd.lotus-organizer\":{\"source\":\"iana\",\"extensions\":[\"org\"]},\"application/vnd.lotus-screencam\":{\"source\":\"iana\",\"extensions\":[\"scm\"]},\"application/vnd.lotus-wordpro\":{\"source\":\"iana\",\"extensions\":[\"lwp\"]},\"application/vnd.macports.portpkg\":{\"source\":\"iana\",\"extensions\":[\"portpkg\"]},\"application/vnd.mapbox-vector-tile\":{\"source\":\"iana\"},\"application/vnd.marlin.drm.actiontoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.conftoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.license+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.mdcf\":{\"source\":\"iana\"},\"application/vnd.mason+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.maxmind.maxmind-db\":{\"source\":\"iana\"},\"application/vnd.mcd\":{\"source\":\"iana\",\"extensions\":[\"mcd\"]},\"application/vnd.medcalcdata\":{\"source\":\"iana\",\"extensions\":[\"mc1\"]},\"application/vnd.mediastation.cdkey\":{\"source\":\"iana\",\"extensions\":[\"cdkey\"]},\"application/vnd.meridian-slingshot\":{\"source\":\"iana\"},\"application/vnd.mfer\":{\"source\":\"iana\",\"extensions\":[\"mwf\"]},\"application/vnd.mfmp\":{\"source\":\"iana\",\"extensions\":[\"mfm\"]},\"application/vnd.micro+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.micrografx.flo\":{\"source\":\"iana\",\"extensions\":[\"flo\"]},\"application/vnd.micrografx.igx\":{\"source\":\"iana\",\"extensions\":[\"igx\"]},\"application/vnd.microsoft.portable-executable\":{\"source\":\"iana\"},\"application/vnd.microsoft.windows.thumbnail-cache\":{\"source\":\"iana\"},\"application/vnd.miele+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.mif\":{\"source\":\"iana\",\"extensions\":[\"mif\"]},\"application/vnd.minisoft-hp3000-save\":{\"source\":\"iana\"},\"application/vnd.mitsubishi.misty-guard.trustweb\":{\"source\":\"iana\"},\"application/vnd.mobius.daf\":{\"source\":\"iana\",\"extensions\":[\"daf\"]},\"application/vnd.mobius.dis\":{\"source\":\"iana\",\"extensions\":[\"dis\"]},\"application/vnd.mobius.mbk\":{\"source\":\"iana\",\"extensions\":[\"mbk\"]},\"application/vnd.mobius.mqy\":{\"source\":\"iana\",\"extensions\":[\"mqy\"]},\"application/vnd.mobius.msl\":{\"source\":\"iana\",\"extensions\":[\"msl\"]},\"application/vnd.mobius.plc\":{\"source\":\"iana\",\"extensions\":[\"plc\"]},\"application/vnd.mobius.txf\":{\"source\":\"iana\",\"extensions\":[\"txf\"]},\"application/vnd.mophun.application\":{\"source\":\"iana\",\"extensions\":[\"mpn\"]},\"application/vnd.mophun.certificate\":{\"source\":\"iana\",\"extensions\":[\"mpc\"]},\"application/vnd.motorola.flexsuite\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.adsi\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.fis\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.gotap\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.kmr\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.ttc\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.wem\":{\"source\":\"iana\"},\"application/vnd.motorola.iprm\":{\"source\":\"iana\"},\"application/vnd.mozilla.xul+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xul\"]},\"application/vnd.ms-3mfdocument\":{\"source\":\"iana\"},\"application/vnd.ms-artgalry\":{\"source\":\"iana\",\"extensions\":[\"cil\"]},\"application/vnd.ms-asf\":{\"source\":\"iana\"},\"application/vnd.ms-cab-compressed\":{\"source\":\"iana\",\"extensions\":[\"cab\"]},\"application/vnd.ms-color.iccprofile\":{\"source\":\"apache\"},\"application/vnd.ms-excel\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xls\",\"xlm\",\"xla\",\"xlc\",\"xlt\",\"xlw\"]},\"application/vnd.ms-excel.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlam\"]},\"application/vnd.ms-excel.sheet.binary.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsb\"]},\"application/vnd.ms-excel.sheet.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsm\"]},\"application/vnd.ms-excel.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xltm\"]},\"application/vnd.ms-fontobject\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eot\"]},\"application/vnd.ms-htmlhelp\":{\"source\":\"iana\",\"extensions\":[\"chm\"]},\"application/vnd.ms-ims\":{\"source\":\"iana\",\"extensions\":[\"ims\"]},\"application/vnd.ms-lrm\":{\"source\":\"iana\",\"extensions\":[\"lrm\"]},\"application/vnd.ms-office.activex+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-officetheme\":{\"source\":\"iana\",\"extensions\":[\"thmx\"]},\"application/vnd.ms-opentype\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-outlook\":{\"compressible\":false,\"extensions\":[\"msg\"]},\"application/vnd.ms-package.obfuscated-opentype\":{\"source\":\"apache\"},\"application/vnd.ms-pki.seccat\":{\"source\":\"apache\",\"extensions\":[\"cat\"]},\"application/vnd.ms-pki.stl\":{\"source\":\"apache\",\"extensions\":[\"stl\"]},\"application/vnd.ms-playready.initiator+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-powerpoint\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ppt\",\"pps\",\"pot\"]},\"application/vnd.ms-powerpoint.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppam\"]},\"application/vnd.ms-powerpoint.presentation.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"pptm\"]},\"application/vnd.ms-powerpoint.slide.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"sldm\"]},\"application/vnd.ms-powerpoint.slideshow.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppsm\"]},\"application/vnd.ms-powerpoint.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"potm\"]},\"application/vnd.ms-printdevicecapabilities+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-printing.printticket+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-printschematicket+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-project\":{\"source\":\"iana\",\"extensions\":[\"mpp\",\"mpt\"]},\"application/vnd.ms-tnef\":{\"source\":\"iana\"},\"application/vnd.ms-windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.nwprinting.oob\":{\"source\":\"iana\"},\"application/vnd.ms-windows.printerpairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.wsd.oob\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-resp\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-resp\":{\"source\":\"iana\"},\"application/vnd.ms-word.document.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"docm\"]},\"application/vnd.ms-word.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"dotm\"]},\"application/vnd.ms-works\":{\"source\":\"iana\",\"extensions\":[\"wps\",\"wks\",\"wcm\",\"wdb\"]},\"application/vnd.ms-wpl\":{\"source\":\"iana\",\"extensions\":[\"wpl\"]},\"application/vnd.ms-xpsdocument\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xps\"]},\"application/vnd.msa-disk-image\":{\"source\":\"iana\"},\"application/vnd.mseq\":{\"source\":\"iana\",\"extensions\":[\"mseq\"]},\"application/vnd.msign\":{\"source\":\"iana\"},\"application/vnd.multiad.creator\":{\"source\":\"iana\"},\"application/vnd.multiad.creator.cif\":{\"source\":\"iana\"},\"application/vnd.music-niff\":{\"source\":\"iana\"},\"application/vnd.musician\":{\"source\":\"iana\",\"extensions\":[\"mus\"]},\"application/vnd.muvee.style\":{\"source\":\"iana\",\"extensions\":[\"msty\"]},\"application/vnd.mynfc\":{\"source\":\"iana\",\"extensions\":[\"taglet\"]},\"application/vnd.ncd.control\":{\"source\":\"iana\"},\"application/vnd.ncd.reference\":{\"source\":\"iana\"},\"application/vnd.nearst.inv+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nervana\":{\"source\":\"iana\"},\"application/vnd.netfpx\":{\"source\":\"iana\"},\"application/vnd.neurolanguage.nlu\":{\"source\":\"iana\",\"extensions\":[\"nlu\"]},\"application/vnd.nimn\":{\"source\":\"iana\"},\"application/vnd.nintendo.nitro.rom\":{\"source\":\"iana\"},\"application/vnd.nintendo.snes.rom\":{\"source\":\"iana\"},\"application/vnd.nitf\":{\"source\":\"iana\",\"extensions\":[\"ntf\",\"nitf\"]},\"application/vnd.noblenet-directory\":{\"source\":\"iana\",\"extensions\":[\"nnd\"]},\"application/vnd.noblenet-sealer\":{\"source\":\"iana\",\"extensions\":[\"nns\"]},\"application/vnd.noblenet-web\":{\"source\":\"iana\",\"extensions\":[\"nnw\"]},\"application/vnd.nokia.catalogs\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.iptv.config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.isds-radio-presets\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.landmarkcollection+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.n-gage.ac+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.n-gage.data\":{\"source\":\"iana\",\"extensions\":[\"ngdat\"]},\"application/vnd.nokia.n-gage.symbian.install\":{\"source\":\"iana\",\"extensions\":[\"n-gage\"]},\"application/vnd.nokia.ncd\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.radio-preset\":{\"source\":\"iana\",\"extensions\":[\"rpst\"]},\"application/vnd.nokia.radio-presets\":{\"source\":\"iana\",\"extensions\":[\"rpss\"]},\"application/vnd.novadigm.edm\":{\"source\":\"iana\",\"extensions\":[\"edm\"]},\"application/vnd.novadigm.edx\":{\"source\":\"iana\",\"extensions\":[\"edx\"]},\"application/vnd.novadigm.ext\":{\"source\":\"iana\",\"extensions\":[\"ext\"]},\"application/vnd.ntt-local.content-share\":{\"source\":\"iana\"},\"application/vnd.ntt-local.file-transfer\":{\"source\":\"iana\"},\"application/vnd.ntt-local.ogw_remote-access\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_remote\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_tcp_stream\":{\"source\":\"iana\"},\"application/vnd.oasis.opendocument.chart\":{\"source\":\"iana\",\"extensions\":[\"odc\"]},\"application/vnd.oasis.opendocument.chart-template\":{\"source\":\"iana\",\"extensions\":[\"otc\"]},\"application/vnd.oasis.opendocument.database\":{\"source\":\"iana\",\"extensions\":[\"odb\"]},\"application/vnd.oasis.opendocument.formula\":{\"source\":\"iana\",\"extensions\":[\"odf\"]},\"application/vnd.oasis.opendocument.formula-template\":{\"source\":\"iana\",\"extensions\":[\"odft\"]},\"application/vnd.oasis.opendocument.graphics\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odg\"]},\"application/vnd.oasis.opendocument.graphics-template\":{\"source\":\"iana\",\"extensions\":[\"otg\"]},\"application/vnd.oasis.opendocument.image\":{\"source\":\"iana\",\"extensions\":[\"odi\"]},\"application/vnd.oasis.opendocument.image-template\":{\"source\":\"iana\",\"extensions\":[\"oti\"]},\"application/vnd.oasis.opendocument.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odp\"]},\"application/vnd.oasis.opendocument.presentation-template\":{\"source\":\"iana\",\"extensions\":[\"otp\"]},\"application/vnd.oasis.opendocument.spreadsheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ods\"]},\"application/vnd.oasis.opendocument.spreadsheet-template\":{\"source\":\"iana\",\"extensions\":[\"ots\"]},\"application/vnd.oasis.opendocument.text\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odt\"]},\"application/vnd.oasis.opendocument.text-master\":{\"source\":\"iana\",\"extensions\":[\"odm\"]},\"application/vnd.oasis.opendocument.text-template\":{\"source\":\"iana\",\"extensions\":[\"ott\"]},\"application/vnd.oasis.opendocument.text-web\":{\"source\":\"iana\",\"extensions\":[\"oth\"]},\"application/vnd.obn\":{\"source\":\"iana\"},\"application/vnd.ocf+cbor\":{\"source\":\"iana\"},\"application/vnd.oftn.l10n+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessdownload+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessstreaming+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.cspg-hexbinary\":{\"source\":\"iana\"},\"application/vnd.oipf.dae.svg+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.dae.xhtml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.mippvcontrolmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.pae.gem\":{\"source\":\"iana\"},\"application/vnd.oipf.spdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.spdlist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.ueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.userprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.olpc-sugar\":{\"source\":\"iana\",\"extensions\":[\"xo\"]},\"application/vnd.oma-scws-config\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-request\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-response\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.associated-procedure-parameter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.drm-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.imd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.ltkm\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.notification+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.provisioningtrigger\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgboot\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgdd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sgdu\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.simple-symbol-container\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.smartcard-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sprov+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.stkm\":{\"source\":\"iana\"},\"application/vnd.oma.cab-address-book+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-feature-handler+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-pcc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-subs-invite+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-user-prefs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.dcd\":{\"source\":\"iana\"},\"application/vnd.oma.dcdc\":{\"source\":\"iana\"},\"application/vnd.oma.dd2+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dd2\"]},\"application/vnd.oma.drm.risd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.group-usage-list+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+tlv\":{\"source\":\"iana\"},\"application/vnd.oma.pal+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.detailed-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.final-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.groups+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.invocation-descriptor+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.optimized-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.push\":{\"source\":\"iana\"},\"application/vnd.oma.scidm.messages+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.xcap-directory+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omads-email+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omads-file+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omads-folder+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omaloc-supl-init\":{\"source\":\"iana\"},\"application/vnd.onepager\":{\"source\":\"iana\"},\"application/vnd.onepagertamp\":{\"source\":\"iana\"},\"application/vnd.onepagertamx\":{\"source\":\"iana\"},\"application/vnd.onepagertat\":{\"source\":\"iana\"},\"application/vnd.onepagertatp\":{\"source\":\"iana\"},\"application/vnd.onepagertatx\":{\"source\":\"iana\"},\"application/vnd.openblox.game+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openblox.game-binary\":{\"source\":\"iana\"},\"application/vnd.openeye.oeb\":{\"source\":\"iana\"},\"application/vnd.openofficeorg.extension\":{\"source\":\"apache\",\"extensions\":[\"oxt\"]},\"application/vnd.openstreetmap.data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.custom-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.customxmlproperties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawing+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chart+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.extended-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pptx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slide\":{\"source\":\"iana\",\"extensions\":[\"sldx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow\":{\"source\":\"iana\",\"extensions\":[\"ppsx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tags+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.template\":{\"source\":\"iana\",\"extensions\":[\"potx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xlsx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template\":{\"source\":\"iana\",\"extensions\":[\"xltx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.theme+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.themeoverride+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.vmldrawing\":{\"source\":\"iana\"},\"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"docx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template\":{\"source\":\"iana\",\"extensions\":[\"dotx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.core-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.relationships+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oracle.resource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.orange.indata\":{\"source\":\"iana\"},\"application/vnd.osa.netdeploy\":{\"source\":\"iana\"},\"application/vnd.osgeo.mapguide.package\":{\"source\":\"iana\",\"extensions\":[\"mgp\"]},\"application/vnd.osgi.bundle\":{\"source\":\"iana\"},\"application/vnd.osgi.dp\":{\"source\":\"iana\",\"extensions\":[\"dp\"]},\"application/vnd.osgi.subsystem\":{\"source\":\"iana\",\"extensions\":[\"esa\"]},\"application/vnd.otps.ct-kip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oxli.countgraph\":{\"source\":\"iana\"},\"application/vnd.pagerduty+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.palm\":{\"source\":\"iana\",\"extensions\":[\"pdb\",\"pqa\",\"oprc\"]},\"application/vnd.panoply\":{\"source\":\"iana\"},\"application/vnd.paos.xml\":{\"source\":\"iana\"},\"application/vnd.patentdive\":{\"source\":\"iana\"},\"application/vnd.patientecommsdoc\":{\"source\":\"iana\"},\"application/vnd.pawaafile\":{\"source\":\"iana\",\"extensions\":[\"paw\"]},\"application/vnd.pcos\":{\"source\":\"iana\"},\"application/vnd.pg.format\":{\"source\":\"iana\",\"extensions\":[\"str\"]},\"application/vnd.pg.osasli\":{\"source\":\"iana\",\"extensions\":[\"ei6\"]},\"application/vnd.piaccess.application-licence\":{\"source\":\"iana\"},\"application/vnd.picsel\":{\"source\":\"iana\",\"extensions\":[\"efif\"]},\"application/vnd.pmi.widget\":{\"source\":\"iana\",\"extensions\":[\"wg\"]},\"application/vnd.poc.group-advertisement+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.pocketlearn\":{\"source\":\"iana\",\"extensions\":[\"plf\"]},\"application/vnd.powerbuilder6\":{\"source\":\"iana\",\"extensions\":[\"pbd\"]},\"application/vnd.powerbuilder6-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75-s\":{\"source\":\"iana\"},\"application/vnd.preminet\":{\"source\":\"iana\"},\"application/vnd.previewsystems.box\":{\"source\":\"iana\",\"extensions\":[\"box\"]},\"application/vnd.proteus.magazine\":{\"source\":\"iana\",\"extensions\":[\"mgz\"]},\"application/vnd.psfs\":{\"source\":\"iana\"},\"application/vnd.publishare-delta-tree\":{\"source\":\"iana\",\"extensions\":[\"qps\"]},\"application/vnd.pvi.ptid1\":{\"source\":\"iana\",\"extensions\":[\"ptid\"]},\"application/vnd.pwg-multiplexed\":{\"source\":\"iana\"},\"application/vnd.pwg-xhtml-print+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.qualcomm.brew-app-res\":{\"source\":\"iana\"},\"application/vnd.quarantainenet\":{\"source\":\"iana\"},\"application/vnd.quark.quarkxpress\":{\"source\":\"iana\",\"extensions\":[\"qxd\",\"qxt\",\"qwd\",\"qwt\",\"qxl\",\"qxb\"]},\"application/vnd.quobject-quoxdocument\":{\"source\":\"iana\"},\"application/vnd.radisys.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-stream+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-base+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-detect+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-sendrecv+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-group+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-speech+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-transform+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rainstor.data\":{\"source\":\"iana\"},\"application/vnd.rapid\":{\"source\":\"iana\"},\"application/vnd.rar\":{\"source\":\"iana\"},\"application/vnd.realvnc.bed\":{\"source\":\"iana\",\"extensions\":[\"bed\"]},\"application/vnd.recordare.musicxml\":{\"source\":\"iana\",\"extensions\":[\"mxl\"]},\"application/vnd.recordare.musicxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"musicxml\"]},\"application/vnd.renlearn.rlprint\":{\"source\":\"iana\"},\"application/vnd.restful+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rig.cryptonote\":{\"source\":\"iana\",\"extensions\":[\"cryptonote\"]},\"application/vnd.rim.cod\":{\"source\":\"apache\",\"extensions\":[\"cod\"]},\"application/vnd.rn-realmedia\":{\"source\":\"apache\",\"extensions\":[\"rm\"]},\"application/vnd.rn-realmedia-vbr\":{\"source\":\"apache\",\"extensions\":[\"rmvb\"]},\"application/vnd.route66.link66+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"link66\"]},\"application/vnd.rs-274x\":{\"source\":\"iana\"},\"application/vnd.ruckus.download\":{\"source\":\"iana\"},\"application/vnd.s3sms\":{\"source\":\"iana\"},\"application/vnd.sailingtracker.track\":{\"source\":\"iana\",\"extensions\":[\"st\"]},\"application/vnd.sbm.cid\":{\"source\":\"iana\"},\"application/vnd.sbm.mid2\":{\"source\":\"iana\"},\"application/vnd.scribus\":{\"source\":\"iana\"},\"application/vnd.sealed.3df\":{\"source\":\"iana\"},\"application/vnd.sealed.csf\":{\"source\":\"iana\"},\"application/vnd.sealed.doc\":{\"source\":\"iana\"},\"application/vnd.sealed.eml\":{\"source\":\"iana\"},\"application/vnd.sealed.mht\":{\"source\":\"iana\"},\"application/vnd.sealed.net\":{\"source\":\"iana\"},\"application/vnd.sealed.ppt\":{\"source\":\"iana\"},\"application/vnd.sealed.tiff\":{\"source\":\"iana\"},\"application/vnd.sealed.xls\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.html\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.pdf\":{\"source\":\"iana\"},\"application/vnd.seemail\":{\"source\":\"iana\",\"extensions\":[\"see\"]},\"application/vnd.sema\":{\"source\":\"iana\",\"extensions\":[\"sema\"]},\"application/vnd.semd\":{\"source\":\"iana\",\"extensions\":[\"semd\"]},\"application/vnd.semf\":{\"source\":\"iana\",\"extensions\":[\"semf\"]},\"application/vnd.shade-save-file\":{\"source\":\"iana\"},\"application/vnd.shana.informed.formdata\":{\"source\":\"iana\",\"extensions\":[\"ifm\"]},\"application/vnd.shana.informed.formtemplate\":{\"source\":\"iana\",\"extensions\":[\"itp\"]},\"application/vnd.shana.informed.interchange\":{\"source\":\"iana\",\"extensions\":[\"iif\"]},\"application/vnd.shana.informed.package\":{\"source\":\"iana\",\"extensions\":[\"ipk\"]},\"application/vnd.shootproof+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.shopkick+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.sigrok.session\":{\"source\":\"iana\"},\"application/vnd.simtech-mindmapper\":{\"source\":\"iana\",\"extensions\":[\"twd\",\"twds\"]},\"application/vnd.siren+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.smaf\":{\"source\":\"iana\",\"extensions\":[\"mmf\"]},\"application/vnd.smart.notebook\":{\"source\":\"iana\"},\"application/vnd.smart.teacher\":{\"source\":\"iana\",\"extensions\":[\"teacher\"]},\"application/vnd.software602.filler.form+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.software602.filler.form-xml-zip\":{\"source\":\"iana\"},\"application/vnd.solent.sdkm+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sdkm\",\"sdkd\"]},\"application/vnd.spotfire.dxp\":{\"source\":\"iana\",\"extensions\":[\"dxp\"]},\"application/vnd.spotfire.sfs\":{\"source\":\"iana\",\"extensions\":[\"sfs\"]},\"application/vnd.sqlite3\":{\"source\":\"iana\"},\"application/vnd.sss-cod\":{\"source\":\"iana\"},\"application/vnd.sss-dtf\":{\"source\":\"iana\"},\"application/vnd.sss-ntf\":{\"source\":\"iana\"},\"application/vnd.stardivision.calc\":{\"source\":\"apache\",\"extensions\":[\"sdc\"]},\"application/vnd.stardivision.draw\":{\"source\":\"apache\",\"extensions\":[\"sda\"]},\"application/vnd.stardivision.impress\":{\"source\":\"apache\",\"extensions\":[\"sdd\"]},\"application/vnd.stardivision.math\":{\"source\":\"apache\",\"extensions\":[\"smf\"]},\"application/vnd.stardivision.writer\":{\"source\":\"apache\",\"extensions\":[\"sdw\",\"vor\"]},\"application/vnd.stardivision.writer-global\":{\"source\":\"apache\",\"extensions\":[\"sgl\"]},\"application/vnd.stepmania.package\":{\"source\":\"iana\",\"extensions\":[\"smzip\"]},\"application/vnd.stepmania.stepchart\":{\"source\":\"iana\",\"extensions\":[\"sm\"]},\"application/vnd.street-stream\":{\"source\":\"iana\"},\"application/vnd.sun.wadl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wadl\"]},\"application/vnd.sun.xml.calc\":{\"source\":\"apache\",\"extensions\":[\"sxc\"]},\"application/vnd.sun.xml.calc.template\":{\"source\":\"apache\",\"extensions\":[\"stc\"]},\"application/vnd.sun.xml.draw\":{\"source\":\"apache\",\"extensions\":[\"sxd\"]},\"application/vnd.sun.xml.draw.template\":{\"source\":\"apache\",\"extensions\":[\"std\"]},\"application/vnd.sun.xml.impress\":{\"source\":\"apache\",\"extensions\":[\"sxi\"]},\"application/vnd.sun.xml.impress.template\":{\"source\":\"apache\",\"extensions\":[\"sti\"]},\"application/vnd.sun.xml.math\":{\"source\":\"apache\",\"extensions\":[\"sxm\"]},\"application/vnd.sun.xml.writer\":{\"source\":\"apache\",\"extensions\":[\"sxw\"]},\"application/vnd.sun.xml.writer.global\":{\"source\":\"apache\",\"extensions\":[\"sxg\"]},\"application/vnd.sun.xml.writer.template\":{\"source\":\"apache\",\"extensions\":[\"stw\"]},\"application/vnd.sus-calendar\":{\"source\":\"iana\",\"extensions\":[\"sus\",\"susp\"]},\"application/vnd.svd\":{\"source\":\"iana\",\"extensions\":[\"svd\"]},\"application/vnd.swiftview-ics\":{\"source\":\"iana\"},\"application/vnd.symbian.install\":{\"source\":\"apache\",\"extensions\":[\"sis\",\"sisx\"]},\"application/vnd.syncml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xsm\"]},\"application/vnd.syncml.dm+wbxml\":{\"source\":\"iana\",\"extensions\":[\"bdm\"]},\"application/vnd.syncml.dm+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdm\"]},\"application/vnd.syncml.dm.notification\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.syncml.dmtnds+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmtnds+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.syncml.ds.notification\":{\"source\":\"iana\"},\"application/vnd.tableschema+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tao.intent-module-archive\":{\"source\":\"iana\",\"extensions\":[\"tao\"]},\"application/vnd.tcpdump.pcap\":{\"source\":\"iana\",\"extensions\":[\"pcap\",\"cap\",\"dmp\"]},\"application/vnd.think-cell.ppttc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tmd.mediaflex.api+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tml\":{\"source\":\"iana\"},\"application/vnd.tmobile-livetv\":{\"source\":\"iana\",\"extensions\":[\"tmo\"]},\"application/vnd.tri.onesource\":{\"source\":\"iana\"},\"application/vnd.trid.tpt\":{\"source\":\"iana\",\"extensions\":[\"tpt\"]},\"application/vnd.triscape.mxs\":{\"source\":\"iana\",\"extensions\":[\"mxs\"]},\"application/vnd.trueapp\":{\"source\":\"iana\",\"extensions\":[\"tra\"]},\"application/vnd.truedoc\":{\"source\":\"iana\"},\"application/vnd.ubisoft.webplayer\":{\"source\":\"iana\"},\"application/vnd.ufdl\":{\"source\":\"iana\",\"extensions\":[\"ufd\",\"ufdl\"]},\"application/vnd.uiq.theme\":{\"source\":\"iana\",\"extensions\":[\"utz\"]},\"application/vnd.umajin\":{\"source\":\"iana\",\"extensions\":[\"umj\"]},\"application/vnd.unity\":{\"source\":\"iana\",\"extensions\":[\"unityweb\"]},\"application/vnd.uoml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uoml\"]},\"application/vnd.uplanet.alert\":{\"source\":\"iana\"},\"application/vnd.uplanet.alert-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.list\":{\"source\":\"iana\"},\"application/vnd.uplanet.list-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.signal\":{\"source\":\"iana\"},\"application/vnd.uri-map\":{\"source\":\"iana\"},\"application/vnd.valve.source.material\":{\"source\":\"iana\"},\"application/vnd.vcx\":{\"source\":\"iana\",\"extensions\":[\"vcx\"]},\"application/vnd.vd-study\":{\"source\":\"iana\"},\"application/vnd.vectorworks\":{\"source\":\"iana\"},\"application/vnd.vel+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.verimatrix.vcas\":{\"source\":\"iana\"},\"application/vnd.veryant.thin\":{\"source\":\"iana\"},\"application/vnd.ves.encrypted\":{\"source\":\"iana\"},\"application/vnd.vidsoft.vidconference\":{\"source\":\"iana\"},\"application/vnd.visio\":{\"source\":\"iana\",\"extensions\":[\"vsd\",\"vst\",\"vss\",\"vsw\"]},\"application/vnd.visionary\":{\"source\":\"iana\",\"extensions\":[\"vis\"]},\"application/vnd.vividence.scriptfile\":{\"source\":\"iana\"},\"application/vnd.vsf\":{\"source\":\"iana\",\"extensions\":[\"vsf\"]},\"application/vnd.wap.sic\":{\"source\":\"iana\"},\"application/vnd.wap.slc\":{\"source\":\"iana\"},\"application/vnd.wap.wbxml\":{\"source\":\"iana\",\"extensions\":[\"wbxml\"]},\"application/vnd.wap.wmlc\":{\"source\":\"iana\",\"extensions\":[\"wmlc\"]},\"application/vnd.wap.wmlscriptc\":{\"source\":\"iana\",\"extensions\":[\"wmlsc\"]},\"application/vnd.webturbo\":{\"source\":\"iana\",\"extensions\":[\"wtb\"]},\"application/vnd.wfa.p2p\":{\"source\":\"iana\"},\"application/vnd.wfa.wsc\":{\"source\":\"iana\"},\"application/vnd.windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.wmc\":{\"source\":\"iana\"},\"application/vnd.wmf.bootstrap\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica.package\":{\"source\":\"iana\"},\"application/vnd.wolfram.player\":{\"source\":\"iana\",\"extensions\":[\"nbp\"]},\"application/vnd.wordperfect\":{\"source\":\"iana\",\"extensions\":[\"wpd\"]},\"application/vnd.wqd\":{\"source\":\"iana\",\"extensions\":[\"wqd\"]},\"application/vnd.wrq-hp3000-labelled\":{\"source\":\"iana\"},\"application/vnd.wt.stf\":{\"source\":\"iana\",\"extensions\":[\"stf\"]},\"application/vnd.wv.csp+wbxml\":{\"source\":\"iana\"},\"application/vnd.wv.csp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.wv.ssp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xacml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xara\":{\"source\":\"iana\",\"extensions\":[\"xar\"]},\"application/vnd.xfdl\":{\"source\":\"iana\",\"extensions\":[\"xfdl\"]},\"application/vnd.xfdl.webform\":{\"source\":\"iana\"},\"application/vnd.xmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xmpie.cpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.dpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.plan\":{\"source\":\"iana\"},\"application/vnd.xmpie.ppkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.xlim\":{\"source\":\"iana\"},\"application/vnd.yamaha.hv-dic\":{\"source\":\"iana\",\"extensions\":[\"hvd\"]},\"application/vnd.yamaha.hv-script\":{\"source\":\"iana\",\"extensions\":[\"hvs\"]},\"application/vnd.yamaha.hv-voice\":{\"source\":\"iana\",\"extensions\":[\"hvp\"]},\"application/vnd.yamaha.openscoreformat\":{\"source\":\"iana\",\"extensions\":[\"osf\"]},\"application/vnd.yamaha.openscoreformat.osfpvg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"osfpvg\"]},\"application/vnd.yamaha.remote-setup\":{\"source\":\"iana\"},\"application/vnd.yamaha.smaf-audio\":{\"source\":\"iana\",\"extensions\":[\"saf\"]},\"application/vnd.yamaha.smaf-phrase\":{\"source\":\"iana\",\"extensions\":[\"spf\"]},\"application/vnd.yamaha.through-ngn\":{\"source\":\"iana\"},\"application/vnd.yamaha.tunnel-udpencap\":{\"source\":\"iana\"},\"application/vnd.yaoweme\":{\"source\":\"iana\"},\"application/vnd.yellowriver-custom-menu\":{\"source\":\"iana\",\"extensions\":[\"cmp\"]},\"application/vnd.youtube.yt\":{\"source\":\"iana\"},\"application/vnd.zul\":{\"source\":\"iana\",\"extensions\":[\"zir\",\"zirz\"]},\"application/vnd.zzazz.deck+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zaz\"]},\"application/voicexml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vxml\"]},\"application/voucher-cms+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vq-rtcpxr\":{\"source\":\"iana\"},\"application/wasm\":{\"compressible\":true,\"extensions\":[\"wasm\"]},\"application/watcherinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/webpush-options+json\":{\"source\":\"iana\",\"compressible\":true},\"application/whoispp-query\":{\"source\":\"iana\"},\"application/whoispp-response\":{\"source\":\"iana\"},\"application/widget\":{\"source\":\"iana\",\"extensions\":[\"wgt\"]},\"application/winhlp\":{\"source\":\"apache\",\"extensions\":[\"hlp\"]},\"application/wita\":{\"source\":\"iana\"},\"application/wordperfect5.1\":{\"source\":\"iana\"},\"application/wsdl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wsdl\"]},\"application/wspolicy+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wspolicy\"]},\"application/x-7z-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"7z\"]},\"application/x-abiword\":{\"source\":\"apache\",\"extensions\":[\"abw\"]},\"application/x-ace-compressed\":{\"source\":\"apache\",\"extensions\":[\"ace\"]},\"application/x-amf\":{\"source\":\"apache\"},\"application/x-apple-diskimage\":{\"source\":\"apache\",\"extensions\":[\"dmg\"]},\"application/x-arj\":{\"compressible\":false,\"extensions\":[\"arj\"]},\"application/x-authorware-bin\":{\"source\":\"apache\",\"extensions\":[\"aab\",\"x32\",\"u32\",\"vox\"]},\"application/x-authorware-map\":{\"source\":\"apache\",\"extensions\":[\"aam\"]},\"application/x-authorware-seg\":{\"source\":\"apache\",\"extensions\":[\"aas\"]},\"application/x-bcpio\":{\"source\":\"apache\",\"extensions\":[\"bcpio\"]},\"application/x-bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/x-bittorrent\":{\"source\":\"apache\",\"extensions\":[\"torrent\"]},\"application/x-blorb\":{\"source\":\"apache\",\"extensions\":[\"blb\",\"blorb\"]},\"application/x-bzip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz\"]},\"application/x-bzip2\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz2\",\"boz\"]},\"application/x-cbr\":{\"source\":\"apache\",\"extensions\":[\"cbr\",\"cba\",\"cbt\",\"cbz\",\"cb7\"]},\"application/x-cdlink\":{\"source\":\"apache\",\"extensions\":[\"vcd\"]},\"application/x-cfs-compressed\":{\"source\":\"apache\",\"extensions\":[\"cfs\"]},\"application/x-chat\":{\"source\":\"apache\",\"extensions\":[\"chat\"]},\"application/x-chess-pgn\":{\"source\":\"apache\",\"extensions\":[\"pgn\"]},\"application/x-chrome-extension\":{\"extensions\":[\"crx\"]},\"application/x-cocoa\":{\"source\":\"nginx\",\"extensions\":[\"cco\"]},\"application/x-compress\":{\"source\":\"apache\"},\"application/x-conference\":{\"source\":\"apache\",\"extensions\":[\"nsc\"]},\"application/x-cpio\":{\"source\":\"apache\",\"extensions\":[\"cpio\"]},\"application/x-csh\":{\"source\":\"apache\",\"extensions\":[\"csh\"]},\"application/x-deb\":{\"compressible\":false},\"application/x-debian-package\":{\"source\":\"apache\",\"extensions\":[\"deb\",\"udeb\"]},\"application/x-dgc-compressed\":{\"source\":\"apache\",\"extensions\":[\"dgc\"]},\"application/x-director\":{\"source\":\"apache\",\"extensions\":[\"dir\",\"dcr\",\"dxr\",\"cst\",\"cct\",\"cxt\",\"w3d\",\"fgd\",\"swa\"]},\"application/x-doom\":{\"source\":\"apache\",\"extensions\":[\"wad\"]},\"application/x-dtbncx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ncx\"]},\"application/x-dtbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dtb\"]},\"application/x-dtbresource+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"res\"]},\"application/x-dvi\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"dvi\"]},\"application/x-envoy\":{\"source\":\"apache\",\"extensions\":[\"evy\"]},\"application/x-eva\":{\"source\":\"apache\",\"extensions\":[\"eva\"]},\"application/x-font-bdf\":{\"source\":\"apache\",\"extensions\":[\"bdf\"]},\"application/x-font-dos\":{\"source\":\"apache\"},\"application/x-font-framemaker\":{\"source\":\"apache\"},\"application/x-font-ghostscript\":{\"source\":\"apache\",\"extensions\":[\"gsf\"]},\"application/x-font-libgrx\":{\"source\":\"apache\"},\"application/x-font-linux-psf\":{\"source\":\"apache\",\"extensions\":[\"psf\"]},\"application/x-font-pcf\":{\"source\":\"apache\",\"extensions\":[\"pcf\"]},\"application/x-font-snf\":{\"source\":\"apache\",\"extensions\":[\"snf\"]},\"application/x-font-speedo\":{\"source\":\"apache\"},\"application/x-font-sunos-news\":{\"source\":\"apache\"},\"application/x-font-type1\":{\"source\":\"apache\",\"extensions\":[\"pfa\",\"pfb\",\"pfm\",\"afm\"]},\"application/x-font-vfont\":{\"source\":\"apache\"},\"application/x-freearc\":{\"source\":\"apache\",\"extensions\":[\"arc\"]},\"application/x-futuresplash\":{\"source\":\"apache\",\"extensions\":[\"spl\"]},\"application/x-gca-compressed\":{\"source\":\"apache\",\"extensions\":[\"gca\"]},\"application/x-glulx\":{\"source\":\"apache\",\"extensions\":[\"ulx\"]},\"application/x-gnumeric\":{\"source\":\"apache\",\"extensions\":[\"gnumeric\"]},\"application/x-gramps-xml\":{\"source\":\"apache\",\"extensions\":[\"gramps\"]},\"application/x-gtar\":{\"source\":\"apache\",\"extensions\":[\"gtar\"]},\"application/x-gzip\":{\"source\":\"apache\"},\"application/x-hdf\":{\"source\":\"apache\",\"extensions\":[\"hdf\"]},\"application/x-httpd-php\":{\"compressible\":true,\"extensions\":[\"php\"]},\"application/x-install-instructions\":{\"source\":\"apache\",\"extensions\":[\"install\"]},\"application/x-iso9660-image\":{\"source\":\"apache\",\"extensions\":[\"iso\"]},\"application/x-java-archive-diff\":{\"source\":\"nginx\",\"extensions\":[\"jardiff\"]},\"application/x-java-jnlp-file\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jnlp\"]},\"application/x-javascript\":{\"compressible\":true},\"application/x-latex\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"latex\"]},\"application/x-lua-bytecode\":{\"extensions\":[\"luac\"]},\"application/x-lzh-compressed\":{\"source\":\"apache\",\"extensions\":[\"lzh\",\"lha\"]},\"application/x-makeself\":{\"source\":\"nginx\",\"extensions\":[\"run\"]},\"application/x-mie\":{\"source\":\"apache\",\"extensions\":[\"mie\"]},\"application/x-mobipocket-ebook\":{\"source\":\"apache\",\"extensions\":[\"prc\",\"mobi\"]},\"application/x-mpegurl\":{\"compressible\":false},\"application/x-ms-application\":{\"source\":\"apache\",\"extensions\":[\"application\"]},\"application/x-ms-shortcut\":{\"source\":\"apache\",\"extensions\":[\"lnk\"]},\"application/x-ms-wmd\":{\"source\":\"apache\",\"extensions\":[\"wmd\"]},\"application/x-ms-wmz\":{\"source\":\"apache\",\"extensions\":[\"wmz\"]},\"application/x-ms-xbap\":{\"source\":\"apache\",\"extensions\":[\"xbap\"]},\"application/x-msaccess\":{\"source\":\"apache\",\"extensions\":[\"mdb\"]},\"application/x-msbinder\":{\"source\":\"apache\",\"extensions\":[\"obd\"]},\"application/x-mscardfile\":{\"source\":\"apache\",\"extensions\":[\"crd\"]},\"application/x-msclip\":{\"source\":\"apache\",\"extensions\":[\"clp\"]},\"application/x-msdos-program\":{\"extensions\":[\"exe\"]},\"application/x-msdownload\":{\"source\":\"apache\",\"extensions\":[\"exe\",\"dll\",\"com\",\"bat\",\"msi\"]},\"application/x-msmediaview\":{\"source\":\"apache\",\"extensions\":[\"mvb\",\"m13\",\"m14\"]},\"application/x-msmetafile\":{\"source\":\"apache\",\"extensions\":[\"wmf\",\"wmz\",\"emf\",\"emz\"]},\"application/x-msmoney\":{\"source\":\"apache\",\"extensions\":[\"mny\"]},\"application/x-mspublisher\":{\"source\":\"apache\",\"extensions\":[\"pub\"]},\"application/x-msschedule\":{\"source\":\"apache\",\"extensions\":[\"scd\"]},\"application/x-msterminal\":{\"source\":\"apache\",\"extensions\":[\"trm\"]},\"application/x-mswrite\":{\"source\":\"apache\",\"extensions\":[\"wri\"]},\"application/x-netcdf\":{\"source\":\"apache\",\"extensions\":[\"nc\",\"cdf\"]},\"application/x-ns-proxy-autoconfig\":{\"compressible\":true,\"extensions\":[\"pac\"]},\"application/x-nzb\":{\"source\":\"apache\",\"extensions\":[\"nzb\"]},\"application/x-perl\":{\"source\":\"nginx\",\"extensions\":[\"pl\",\"pm\"]},\"application/x-pilot\":{\"source\":\"nginx\",\"extensions\":[\"prc\",\"pdb\"]},\"application/x-pkcs12\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"p12\",\"pfx\"]},\"application/x-pkcs7-certificates\":{\"source\":\"apache\",\"extensions\":[\"p7b\",\"spc\"]},\"application/x-pkcs7-certreqresp\":{\"source\":\"apache\",\"extensions\":[\"p7r\"]},\"application/x-rar-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"rar\"]},\"application/x-redhat-package-manager\":{\"source\":\"nginx\",\"extensions\":[\"rpm\"]},\"application/x-research-info-systems\":{\"source\":\"apache\",\"extensions\":[\"ris\"]},\"application/x-sea\":{\"source\":\"nginx\",\"extensions\":[\"sea\"]},\"application/x-sh\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"sh\"]},\"application/x-shar\":{\"source\":\"apache\",\"extensions\":[\"shar\"]},\"application/x-shockwave-flash\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"swf\"]},\"application/x-silverlight-app\":{\"source\":\"apache\",\"extensions\":[\"xap\"]},\"application/x-sql\":{\"source\":\"apache\",\"extensions\":[\"sql\"]},\"application/x-stuffit\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"sit\"]},\"application/x-stuffitx\":{\"source\":\"apache\",\"extensions\":[\"sitx\"]},\"application/x-subrip\":{\"source\":\"apache\",\"extensions\":[\"srt\"]},\"application/x-sv4cpio\":{\"source\":\"apache\",\"extensions\":[\"sv4cpio\"]},\"application/x-sv4crc\":{\"source\":\"apache\",\"extensions\":[\"sv4crc\"]},\"application/x-t3vm-image\":{\"source\":\"apache\",\"extensions\":[\"t3\"]},\"application/x-tads\":{\"source\":\"apache\",\"extensions\":[\"gam\"]},\"application/x-tar\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"tar\"]},\"application/x-tcl\":{\"source\":\"apache\",\"extensions\":[\"tcl\",\"tk\"]},\"application/x-tex\":{\"source\":\"apache\",\"extensions\":[\"tex\"]},\"application/x-tex-tfm\":{\"source\":\"apache\",\"extensions\":[\"tfm\"]},\"application/x-texinfo\":{\"source\":\"apache\",\"extensions\":[\"texinfo\",\"texi\"]},\"application/x-tgif\":{\"source\":\"apache\",\"extensions\":[\"obj\"]},\"application/x-ustar\":{\"source\":\"apache\",\"extensions\":[\"ustar\"]},\"application/x-virtualbox-hdd\":{\"compressible\":true,\"extensions\":[\"hdd\"]},\"application/x-virtualbox-ova\":{\"compressible\":true,\"extensions\":[\"ova\"]},\"application/x-virtualbox-ovf\":{\"compressible\":true,\"extensions\":[\"ovf\"]},\"application/x-virtualbox-vbox\":{\"compressible\":true,\"extensions\":[\"vbox\"]},\"application/x-virtualbox-vbox-extpack\":{\"compressible\":false,\"extensions\":[\"vbox-extpack\"]},\"application/x-virtualbox-vdi\":{\"compressible\":true,\"extensions\":[\"vdi\"]},\"application/x-virtualbox-vhd\":{\"compressible\":true,\"extensions\":[\"vhd\"]},\"application/x-virtualbox-vmdk\":{\"compressible\":true,\"extensions\":[\"vmdk\"]},\"application/x-wais-source\":{\"source\":\"apache\",\"extensions\":[\"src\"]},\"application/x-web-app-manifest+json\":{\"compressible\":true,\"extensions\":[\"webapp\"]},\"application/x-www-form-urlencoded\":{\"source\":\"iana\",\"compressible\":true},\"application/x-x509-ca-cert\":{\"source\":\"apache\",\"extensions\":[\"der\",\"crt\",\"pem\"]},\"application/x-xfig\":{\"source\":\"apache\",\"extensions\":[\"fig\"]},\"application/x-xliff+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xlf\"]},\"application/x-xpinstall\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"xpi\"]},\"application/x-xz\":{\"source\":\"apache\",\"extensions\":[\"xz\"]},\"application/x-zmachine\":{\"source\":\"apache\",\"extensions\":[\"z1\",\"z2\",\"z3\",\"z4\",\"z5\",\"z6\",\"z7\",\"z8\"]},\"application/x400-bp\":{\"source\":\"iana\"},\"application/xacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xaml+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xaml\"]},\"application/xcap-att+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcap-caps+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcap-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdf\"]},\"application/xcap-el+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcap-error+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcap-ns+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcon-conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcon-conference-info-diff+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xenc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xenc\"]},\"application/xhtml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xhtml\",\"xht\"]},\"application/xhtml-voice+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/xliff+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\",\"xsl\",\"xsd\",\"rng\"]},\"application/xml-dtd\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dtd\"]},\"application/xml-external-parsed-entity\":{\"source\":\"iana\"},\"application/xml-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xmpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xop+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xop\"]},\"application/xproc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xpl\"]},\"application/xslt+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xslt\"]},\"application/xspf+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xspf\"]},\"application/xv+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mxml\",\"xhvml\",\"xvml\",\"xvm\"]},\"application/yang\":{\"source\":\"iana\",\"extensions\":[\"yang\"]},\"application/yang-data+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yin+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"yin\"]},\"application/zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"zip\"]},\"application/zlib\":{\"source\":\"iana\"},\"application/zstd\":{\"source\":\"iana\"},\"audio/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"audio/32kadpcm\":{\"source\":\"iana\"},\"audio/3gpp\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"3gpp\"]},\"audio/3gpp2\":{\"source\":\"iana\"},\"audio/aac\":{\"source\":\"iana\"},\"audio/ac3\":{\"source\":\"iana\"},\"audio/adpcm\":{\"source\":\"apache\",\"extensions\":[\"adp\"]},\"audio/amr\":{\"source\":\"iana\"},\"audio/amr-wb\":{\"source\":\"iana\"},\"audio/amr-wb+\":{\"source\":\"iana\"},\"audio/aptx\":{\"source\":\"iana\"},\"audio/asc\":{\"source\":\"iana\"},\"audio/atrac-advanced-lossless\":{\"source\":\"iana\"},\"audio/atrac-x\":{\"source\":\"iana\"},\"audio/atrac3\":{\"source\":\"iana\"},\"audio/basic\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"au\",\"snd\"]},\"audio/bv16\":{\"source\":\"iana\"},\"audio/bv32\":{\"source\":\"iana\"},\"audio/clearmode\":{\"source\":\"iana\"},\"audio/cn\":{\"source\":\"iana\"},\"audio/dat12\":{\"source\":\"iana\"},\"audio/dls\":{\"source\":\"iana\"},\"audio/dsr-es201108\":{\"source\":\"iana\"},\"audio/dsr-es202050\":{\"source\":\"iana\"},\"audio/dsr-es202211\":{\"source\":\"iana\"},\"audio/dsr-es202212\":{\"source\":\"iana\"},\"audio/dv\":{\"source\":\"iana\"},\"audio/dvi4\":{\"source\":\"iana\"},\"audio/eac3\":{\"source\":\"iana\"},\"audio/encaprtp\":{\"source\":\"iana\"},\"audio/evrc\":{\"source\":\"iana\"},\"audio/evrc-qcp\":{\"source\":\"iana\"},\"audio/evrc0\":{\"source\":\"iana\"},\"audio/evrc1\":{\"source\":\"iana\"},\"audio/evrcb\":{\"source\":\"iana\"},\"audio/evrcb0\":{\"source\":\"iana\"},\"audio/evrcb1\":{\"source\":\"iana\"},\"audio/evrcnw\":{\"source\":\"iana\"},\"audio/evrcnw0\":{\"source\":\"iana\"},\"audio/evrcnw1\":{\"source\":\"iana\"},\"audio/evrcwb\":{\"source\":\"iana\"},\"audio/evrcwb0\":{\"source\":\"iana\"},\"audio/evrcwb1\":{\"source\":\"iana\"},\"audio/evs\":{\"source\":\"iana\"},\"audio/flexfec\":{\"source\":\"iana\"},\"audio/fwdred\":{\"source\":\"iana\"},\"audio/g711-0\":{\"source\":\"iana\"},\"audio/g719\":{\"source\":\"iana\"},\"audio/g722\":{\"source\":\"iana\"},\"audio/g7221\":{\"source\":\"iana\"},\"audio/g723\":{\"source\":\"iana\"},\"audio/g726-16\":{\"source\":\"iana\"},\"audio/g726-24\":{\"source\":\"iana\"},\"audio/g726-32\":{\"source\":\"iana\"},\"audio/g726-40\":{\"source\":\"iana\"},\"audio/g728\":{\"source\":\"iana\"},\"audio/g729\":{\"source\":\"iana\"},\"audio/g7291\":{\"source\":\"iana\"},\"audio/g729d\":{\"source\":\"iana\"},\"audio/g729e\":{\"source\":\"iana\"},\"audio/gsm\":{\"source\":\"iana\"},\"audio/gsm-efr\":{\"source\":\"iana\"},\"audio/gsm-hr-08\":{\"source\":\"iana\"},\"audio/ilbc\":{\"source\":\"iana\"},\"audio/ip-mr_v2.5\":{\"source\":\"iana\"},\"audio/isac\":{\"source\":\"apache\"},\"audio/l16\":{\"source\":\"iana\"},\"audio/l20\":{\"source\":\"iana\"},\"audio/l24\":{\"source\":\"iana\",\"compressible\":false},\"audio/l8\":{\"source\":\"iana\"},\"audio/lpc\":{\"source\":\"iana\"},\"audio/melp\":{\"source\":\"iana\"},\"audio/melp1200\":{\"source\":\"iana\"},\"audio/melp2400\":{\"source\":\"iana\"},\"audio/melp600\":{\"source\":\"iana\"},\"audio/midi\":{\"source\":\"apache\",\"extensions\":[\"mid\",\"midi\",\"kar\",\"rmi\"]},\"audio/mobile-xmf\":{\"source\":\"iana\"},\"audio/mp3\":{\"compressible\":false,\"extensions\":[\"mp3\"]},\"audio/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"m4a\",\"mp4a\"]},\"audio/mp4a-latm\":{\"source\":\"iana\"},\"audio/mpa\":{\"source\":\"iana\"},\"audio/mpa-robust\":{\"source\":\"iana\"},\"audio/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpga\",\"mp2\",\"mp2a\",\"mp3\",\"m2a\",\"m3a\"]},\"audio/mpeg4-generic\":{\"source\":\"iana\"},\"audio/musepack\":{\"source\":\"apache\"},\"audio/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"oga\",\"ogg\",\"spx\"]},\"audio/opus\":{\"source\":\"iana\"},\"audio/parityfec\":{\"source\":\"iana\"},\"audio/pcma\":{\"source\":\"iana\"},\"audio/pcma-wb\":{\"source\":\"iana\"},\"audio/pcmu\":{\"source\":\"iana\"},\"audio/pcmu-wb\":{\"source\":\"iana\"},\"audio/prs.sid\":{\"source\":\"iana\"},\"audio/qcelp\":{\"source\":\"iana\"},\"audio/raptorfec\":{\"source\":\"iana\"},\"audio/red\":{\"source\":\"iana\"},\"audio/rtp-enc-aescm128\":{\"source\":\"iana\"},\"audio/rtp-midi\":{\"source\":\"iana\"},\"audio/rtploopback\":{\"source\":\"iana\"},\"audio/rtx\":{\"source\":\"iana\"},\"audio/s3m\":{\"source\":\"apache\",\"extensions\":[\"s3m\"]},\"audio/silk\":{\"source\":\"apache\",\"extensions\":[\"sil\"]},\"audio/smv\":{\"source\":\"iana\"},\"audio/smv-qcp\":{\"source\":\"iana\"},\"audio/smv0\":{\"source\":\"iana\"},\"audio/sp-midi\":{\"source\":\"iana\"},\"audio/speex\":{\"source\":\"iana\"},\"audio/t140c\":{\"source\":\"iana\"},\"audio/t38\":{\"source\":\"iana\"},\"audio/telephone-event\":{\"source\":\"iana\"},\"audio/tetra_acelp\":{\"source\":\"iana\"},\"audio/tone\":{\"source\":\"iana\"},\"audio/uemclip\":{\"source\":\"iana\"},\"audio/ulpfec\":{\"source\":\"iana\"},\"audio/usac\":{\"source\":\"iana\"},\"audio/vdvi\":{\"source\":\"iana\"},\"audio/vmr-wb\":{\"source\":\"iana\"},\"audio/vnd.3gpp.iufp\":{\"source\":\"iana\"},\"audio/vnd.4sb\":{\"source\":\"iana\"},\"audio/vnd.audiokoz\":{\"source\":\"iana\"},\"audio/vnd.celp\":{\"source\":\"iana\"},\"audio/vnd.cisco.nse\":{\"source\":\"iana\"},\"audio/vnd.cmles.radio-events\":{\"source\":\"iana\"},\"audio/vnd.cns.anp1\":{\"source\":\"iana\"},\"audio/vnd.cns.inf1\":{\"source\":\"iana\"},\"audio/vnd.dece.audio\":{\"source\":\"iana\",\"extensions\":[\"uva\",\"uvva\"]},\"audio/vnd.digital-winds\":{\"source\":\"iana\",\"extensions\":[\"eol\"]},\"audio/vnd.dlna.adts\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.1\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.2\":{\"source\":\"iana\"},\"audio/vnd.dolby.mlp\":{\"source\":\"iana\"},\"audio/vnd.dolby.mps\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2x\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2z\":{\"source\":\"iana\"},\"audio/vnd.dolby.pulse.1\":{\"source\":\"iana\"},\"audio/vnd.dra\":{\"source\":\"iana\",\"extensions\":[\"dra\"]},\"audio/vnd.dts\":{\"source\":\"iana\",\"extensions\":[\"dts\"]},\"audio/vnd.dts.hd\":{\"source\":\"iana\",\"extensions\":[\"dtshd\"]},\"audio/vnd.dts.uhd\":{\"source\":\"iana\"},\"audio/vnd.dvb.file\":{\"source\":\"iana\"},\"audio/vnd.everad.plj\":{\"source\":\"iana\"},\"audio/vnd.hns.audio\":{\"source\":\"iana\"},\"audio/vnd.lucent.voice\":{\"source\":\"iana\",\"extensions\":[\"lvp\"]},\"audio/vnd.ms-playready.media.pya\":{\"source\":\"iana\",\"extensions\":[\"pya\"]},\"audio/vnd.nokia.mobile-xmf\":{\"source\":\"iana\"},\"audio/vnd.nortel.vbk\":{\"source\":\"iana\"},\"audio/vnd.nuera.ecelp4800\":{\"source\":\"iana\",\"extensions\":[\"ecelp4800\"]},\"audio/vnd.nuera.ecelp7470\":{\"source\":\"iana\",\"extensions\":[\"ecelp7470\"]},\"audio/vnd.nuera.ecelp9600\":{\"source\":\"iana\",\"extensions\":[\"ecelp9600\"]},\"audio/vnd.octel.sbc\":{\"source\":\"iana\"},\"audio/vnd.presonus.multitrack\":{\"source\":\"iana\"},\"audio/vnd.qcelp\":{\"source\":\"iana\"},\"audio/vnd.rhetorex.32kadpcm\":{\"source\":\"iana\"},\"audio/vnd.rip\":{\"source\":\"iana\",\"extensions\":[\"rip\"]},\"audio/vnd.rn-realaudio\":{\"compressible\":false},\"audio/vnd.sealedmedia.softseal.mpeg\":{\"source\":\"iana\"},\"audio/vnd.vmx.cvsd\":{\"source\":\"iana\"},\"audio/vnd.wave\":{\"compressible\":false},\"audio/vorbis\":{\"source\":\"iana\",\"compressible\":false},\"audio/vorbis-config\":{\"source\":\"iana\"},\"audio/wav\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/wave\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"weba\"]},\"audio/x-aac\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"aac\"]},\"audio/x-aiff\":{\"source\":\"apache\",\"extensions\":[\"aif\",\"aiff\",\"aifc\"]},\"audio/x-caf\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"caf\"]},\"audio/x-flac\":{\"source\":\"apache\",\"extensions\":[\"flac\"]},\"audio/x-m4a\":{\"source\":\"nginx\",\"extensions\":[\"m4a\"]},\"audio/x-matroska\":{\"source\":\"apache\",\"extensions\":[\"mka\"]},\"audio/x-mpegurl\":{\"source\":\"apache\",\"extensions\":[\"m3u\"]},\"audio/x-ms-wax\":{\"source\":\"apache\",\"extensions\":[\"wax\"]},\"audio/x-ms-wma\":{\"source\":\"apache\",\"extensions\":[\"wma\"]},\"audio/x-pn-realaudio\":{\"source\":\"apache\",\"extensions\":[\"ram\",\"ra\"]},\"audio/x-pn-realaudio-plugin\":{\"source\":\"apache\",\"extensions\":[\"rmp\"]},\"audio/x-realaudio\":{\"source\":\"nginx\",\"extensions\":[\"ra\"]},\"audio/x-tta\":{\"source\":\"apache\"},\"audio/x-wav\":{\"source\":\"apache\",\"extensions\":[\"wav\"]},\"audio/xm\":{\"source\":\"apache\",\"extensions\":[\"xm\"]},\"chemical/x-cdx\":{\"source\":\"apache\",\"extensions\":[\"cdx\"]},\"chemical/x-cif\":{\"source\":\"apache\",\"extensions\":[\"cif\"]},\"chemical/x-cmdf\":{\"source\":\"apache\",\"extensions\":[\"cmdf\"]},\"chemical/x-cml\":{\"source\":\"apache\",\"extensions\":[\"cml\"]},\"chemical/x-csml\":{\"source\":\"apache\",\"extensions\":[\"csml\"]},\"chemical/x-pdb\":{\"source\":\"apache\"},\"chemical/x-xyz\":{\"source\":\"apache\",\"extensions\":[\"xyz\"]},\"font/collection\":{\"source\":\"iana\",\"extensions\":[\"ttc\"]},\"font/otf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"otf\"]},\"font/sfnt\":{\"source\":\"iana\"},\"font/ttf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ttf\"]},\"font/woff\":{\"source\":\"iana\",\"extensions\":[\"woff\"]},\"font/woff2\":{\"source\":\"iana\",\"extensions\":[\"woff2\"]},\"image/aces\":{\"source\":\"iana\",\"extensions\":[\"exr\"]},\"image/apng\":{\"compressible\":false,\"extensions\":[\"apng\"]},\"image/avci\":{\"source\":\"iana\"},\"image/avcs\":{\"source\":\"iana\"},\"image/bmp\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/cgm\":{\"source\":\"iana\",\"extensions\":[\"cgm\"]},\"image/dicom-rle\":{\"source\":\"iana\",\"extensions\":[\"drle\"]},\"image/emf\":{\"source\":\"iana\",\"extensions\":[\"emf\"]},\"image/fits\":{\"source\":\"iana\",\"extensions\":[\"fits\"]},\"image/g3fax\":{\"source\":\"iana\",\"extensions\":[\"g3\"]},\"image/gif\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gif\"]},\"image/heic\":{\"source\":\"iana\",\"extensions\":[\"heic\"]},\"image/heic-sequence\":{\"source\":\"iana\",\"extensions\":[\"heics\"]},\"image/heif\":{\"source\":\"iana\",\"extensions\":[\"heif\"]},\"image/heif-sequence\":{\"source\":\"iana\",\"extensions\":[\"heifs\"]},\"image/hej2k\":{\"source\":\"iana\",\"extensions\":[\"hej2\"]},\"image/hsj2\":{\"source\":\"iana\",\"extensions\":[\"hsj2\"]},\"image/ief\":{\"source\":\"iana\",\"extensions\":[\"ief\"]},\"image/jls\":{\"source\":\"iana\",\"extensions\":[\"jls\"]},\"image/jp2\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jp2\",\"jpg2\"]},\"image/jpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpeg\",\"jpg\",\"jpe\"]},\"image/jph\":{\"source\":\"iana\",\"extensions\":[\"jph\"]},\"image/jphc\":{\"source\":\"iana\",\"extensions\":[\"jhc\"]},\"image/jpm\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpm\"]},\"image/jpx\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpx\",\"jpf\"]},\"image/jxr\":{\"source\":\"iana\",\"extensions\":[\"jxr\"]},\"image/jxra\":{\"source\":\"iana\",\"extensions\":[\"jxra\"]},\"image/jxrs\":{\"source\":\"iana\",\"extensions\":[\"jxrs\"]},\"image/jxs\":{\"source\":\"iana\",\"extensions\":[\"jxs\"]},\"image/jxsc\":{\"source\":\"iana\",\"extensions\":[\"jxsc\"]},\"image/jxsi\":{\"source\":\"iana\",\"extensions\":[\"jxsi\"]},\"image/jxss\":{\"source\":\"iana\",\"extensions\":[\"jxss\"]},\"image/ktx\":{\"source\":\"iana\",\"extensions\":[\"ktx\"]},\"image/naplps\":{\"source\":\"iana\"},\"image/pjpeg\":{\"compressible\":false},\"image/png\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"png\"]},\"image/prs.btif\":{\"source\":\"iana\",\"extensions\":[\"btif\"]},\"image/prs.pti\":{\"source\":\"iana\",\"extensions\":[\"pti\"]},\"image/pwg-raster\":{\"source\":\"iana\"},\"image/sgi\":{\"source\":\"apache\",\"extensions\":[\"sgi\"]},\"image/svg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"svg\",\"svgz\"]},\"image/t38\":{\"source\":\"iana\",\"extensions\":[\"t38\"]},\"image/tiff\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"tif\",\"tiff\"]},\"image/tiff-fx\":{\"source\":\"iana\",\"extensions\":[\"tfx\"]},\"image/vnd.adobe.photoshop\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"psd\"]},\"image/vnd.airzip.accelerator.azv\":{\"source\":\"iana\",\"extensions\":[\"azv\"]},\"image/vnd.cns.inf2\":{\"source\":\"iana\"},\"image/vnd.dece.graphic\":{\"source\":\"iana\",\"extensions\":[\"uvi\",\"uvvi\",\"uvg\",\"uvvg\"]},\"image/vnd.djvu\":{\"source\":\"iana\",\"extensions\":[\"djvu\",\"djv\"]},\"image/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"image/vnd.dwg\":{\"source\":\"iana\",\"extensions\":[\"dwg\"]},\"image/vnd.dxf\":{\"source\":\"iana\",\"extensions\":[\"dxf\"]},\"image/vnd.fastbidsheet\":{\"source\":\"iana\",\"extensions\":[\"fbs\"]},\"image/vnd.fpx\":{\"source\":\"iana\",\"extensions\":[\"fpx\"]},\"image/vnd.fst\":{\"source\":\"iana\",\"extensions\":[\"fst\"]},\"image/vnd.fujixerox.edmics-mmr\":{\"source\":\"iana\",\"extensions\":[\"mmr\"]},\"image/vnd.fujixerox.edmics-rlc\":{\"source\":\"iana\",\"extensions\":[\"rlc\"]},\"image/vnd.globalgraphics.pgb\":{\"source\":\"iana\"},\"image/vnd.microsoft.icon\":{\"source\":\"iana\",\"extensions\":[\"ico\"]},\"image/vnd.mix\":{\"source\":\"iana\"},\"image/vnd.mozilla.apng\":{\"source\":\"iana\"},\"image/vnd.ms-dds\":{\"extensions\":[\"dds\"]},\"image/vnd.ms-modi\":{\"source\":\"iana\",\"extensions\":[\"mdi\"]},\"image/vnd.ms-photo\":{\"source\":\"apache\",\"extensions\":[\"wdp\"]},\"image/vnd.net-fpx\":{\"source\":\"iana\",\"extensions\":[\"npx\"]},\"image/vnd.radiance\":{\"source\":\"iana\"},\"image/vnd.sealed.png\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.gif\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.jpg\":{\"source\":\"iana\"},\"image/vnd.svf\":{\"source\":\"iana\"},\"image/vnd.tencent.tap\":{\"source\":\"iana\",\"extensions\":[\"tap\"]},\"image/vnd.valve.source.texture\":{\"source\":\"iana\",\"extensions\":[\"vtf\"]},\"image/vnd.wap.wbmp\":{\"source\":\"iana\",\"extensions\":[\"wbmp\"]},\"image/vnd.xiff\":{\"source\":\"iana\",\"extensions\":[\"xif\"]},\"image/vnd.zbrush.pcx\":{\"source\":\"iana\",\"extensions\":[\"pcx\"]},\"image/webp\":{\"source\":\"apache\",\"extensions\":[\"webp\"]},\"image/wmf\":{\"source\":\"iana\",\"extensions\":[\"wmf\"]},\"image/x-3ds\":{\"source\":\"apache\",\"extensions\":[\"3ds\"]},\"image/x-cmu-raster\":{\"source\":\"apache\",\"extensions\":[\"ras\"]},\"image/x-cmx\":{\"source\":\"apache\",\"extensions\":[\"cmx\"]},\"image/x-freehand\":{\"source\":\"apache\",\"extensions\":[\"fh\",\"fhc\",\"fh4\",\"fh5\",\"fh7\"]},\"image/x-icon\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ico\"]},\"image/x-jng\":{\"source\":\"nginx\",\"extensions\":[\"jng\"]},\"image/x-mrsid-image\":{\"source\":\"apache\",\"extensions\":[\"sid\"]},\"image/x-ms-bmp\":{\"source\":\"nginx\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/x-pcx\":{\"source\":\"apache\",\"extensions\":[\"pcx\"]},\"image/x-pict\":{\"source\":\"apache\",\"extensions\":[\"pic\",\"pct\"]},\"image/x-portable-anymap\":{\"source\":\"apache\",\"extensions\":[\"pnm\"]},\"image/x-portable-bitmap\":{\"source\":\"apache\",\"extensions\":[\"pbm\"]},\"image/x-portable-graymap\":{\"source\":\"apache\",\"extensions\":[\"pgm\"]},\"image/x-portable-pixmap\":{\"source\":\"apache\",\"extensions\":[\"ppm\"]},\"image/x-rgb\":{\"source\":\"apache\",\"extensions\":[\"rgb\"]},\"image/x-tga\":{\"source\":\"apache\",\"extensions\":[\"tga\"]},\"image/x-xbitmap\":{\"source\":\"apache\",\"extensions\":[\"xbm\"]},\"image/x-xcf\":{\"compressible\":false},\"image/x-xpixmap\":{\"source\":\"apache\",\"extensions\":[\"xpm\"]},\"image/x-xwindowdump\":{\"source\":\"apache\",\"extensions\":[\"xwd\"]},\"message/cpim\":{\"source\":\"iana\"},\"message/delivery-status\":{\"source\":\"iana\"},\"message/disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"disposition-notification\"]},\"message/external-body\":{\"source\":\"iana\"},\"message/feedback-report\":{\"source\":\"iana\"},\"message/global\":{\"source\":\"iana\",\"extensions\":[\"u8msg\"]},\"message/global-delivery-status\":{\"source\":\"iana\",\"extensions\":[\"u8dsn\"]},\"message/global-disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"u8mdn\"]},\"message/global-headers\":{\"source\":\"iana\",\"extensions\":[\"u8hdr\"]},\"message/http\":{\"source\":\"iana\",\"compressible\":false},\"message/imdn+xml\":{\"source\":\"iana\",\"compressible\":true},\"message/news\":{\"source\":\"iana\"},\"message/partial\":{\"source\":\"iana\",\"compressible\":false},\"message/rfc822\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eml\",\"mime\"]},\"message/s-http\":{\"source\":\"iana\"},\"message/sip\":{\"source\":\"iana\"},\"message/sipfrag\":{\"source\":\"iana\"},\"message/tracking-status\":{\"source\":\"iana\"},\"message/vnd.si.simp\":{\"source\":\"iana\"},\"message/vnd.wfa.wsc\":{\"source\":\"iana\",\"extensions\":[\"wsc\"]},\"model/3mf\":{\"source\":\"iana\",\"extensions\":[\"3mf\"]},\"model/gltf+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gltf\"]},\"model/gltf-binary\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"glb\"]},\"model/iges\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"igs\",\"iges\"]},\"model/mesh\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"msh\",\"mesh\",\"silo\"]},\"model/stl\":{\"source\":\"iana\",\"extensions\":[\"stl\"]},\"model/vnd.collada+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dae\"]},\"model/vnd.dwf\":{\"source\":\"iana\",\"extensions\":[\"dwf\"]},\"model/vnd.flatland.3dml\":{\"source\":\"iana\"},\"model/vnd.gdl\":{\"source\":\"iana\",\"extensions\":[\"gdl\"]},\"model/vnd.gs-gdl\":{\"source\":\"apache\"},\"model/vnd.gs.gdl\":{\"source\":\"iana\"},\"model/vnd.gtw\":{\"source\":\"iana\",\"extensions\":[\"gtw\"]},\"model/vnd.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"model/vnd.mts\":{\"source\":\"iana\",\"extensions\":[\"mts\"]},\"model/vnd.opengex\":{\"source\":\"iana\",\"extensions\":[\"ogex\"]},\"model/vnd.parasolid.transmit.binary\":{\"source\":\"iana\",\"extensions\":[\"x_b\"]},\"model/vnd.parasolid.transmit.text\":{\"source\":\"iana\",\"extensions\":[\"x_t\"]},\"model/vnd.rosette.annotated-data-model\":{\"source\":\"iana\"},\"model/vnd.usdz+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"usdz\"]},\"model/vnd.valve.source.compiled-map\":{\"source\":\"iana\",\"extensions\":[\"bsp\"]},\"model/vnd.vtu\":{\"source\":\"iana\",\"extensions\":[\"vtu\"]},\"model/vrml\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"wrl\",\"vrml\"]},\"model/x3d+binary\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3db\",\"x3dbz\"]},\"model/x3d+fastinfoset\":{\"source\":\"iana\",\"extensions\":[\"x3db\"]},\"model/x3d+vrml\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3dv\",\"x3dvz\"]},\"model/x3d+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"x3d\",\"x3dz\"]},\"model/x3d-vrml\":{\"source\":\"iana\",\"extensions\":[\"x3dv\"]},\"multipart/alternative\":{\"source\":\"iana\",\"compressible\":false},\"multipart/appledouble\":{\"source\":\"iana\"},\"multipart/byteranges\":{\"source\":\"iana\"},\"multipart/digest\":{\"source\":\"iana\"},\"multipart/encrypted\":{\"source\":\"iana\",\"compressible\":false},\"multipart/form-data\":{\"source\":\"iana\",\"compressible\":false},\"multipart/header-set\":{\"source\":\"iana\"},\"multipart/mixed\":{\"source\":\"iana\"},\"multipart/multilingual\":{\"source\":\"iana\"},\"multipart/parallel\":{\"source\":\"iana\"},\"multipart/related\":{\"source\":\"iana\",\"compressible\":false},\"multipart/report\":{\"source\":\"iana\"},\"multipart/signed\":{\"source\":\"iana\",\"compressible\":false},\"multipart/vnd.bint.med-plus\":{\"source\":\"iana\"},\"multipart/voice-message\":{\"source\":\"iana\"},\"multipart/x-mixed-replace\":{\"source\":\"iana\"},\"text/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"text/cache-manifest\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"appcache\",\"manifest\"]},\"text/calendar\":{\"source\":\"iana\",\"extensions\":[\"ics\",\"ifb\"]},\"text/calender\":{\"compressible\":true},\"text/cmd\":{\"compressible\":true},\"text/coffeescript\":{\"extensions\":[\"coffee\",\"litcoffee\"]},\"text/css\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"css\"]},\"text/csv\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csv\"]},\"text/csv-schema\":{\"source\":\"iana\"},\"text/directory\":{\"source\":\"iana\"},\"text/dns\":{\"source\":\"iana\"},\"text/ecmascript\":{\"source\":\"iana\"},\"text/encaprtp\":{\"source\":\"iana\"},\"text/enriched\":{\"source\":\"iana\"},\"text/flexfec\":{\"source\":\"iana\"},\"text/fwdred\":{\"source\":\"iana\"},\"text/grammar-ref-list\":{\"source\":\"iana\"},\"text/html\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"html\",\"htm\",\"shtml\"]},\"text/jade\":{\"extensions\":[\"jade\"]},\"text/javascript\":{\"source\":\"iana\",\"compressible\":true},\"text/jcr-cnd\":{\"source\":\"iana\"},\"text/jsx\":{\"compressible\":true,\"extensions\":[\"jsx\"]},\"text/less\":{\"compressible\":true,\"extensions\":[\"less\"]},\"text/markdown\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"markdown\",\"md\"]},\"text/mathml\":{\"source\":\"nginx\",\"extensions\":[\"mml\"]},\"text/mdx\":{\"compressible\":true,\"extensions\":[\"mdx\"]},\"text/mizar\":{\"source\":\"iana\"},\"text/n3\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"n3\"]},\"text/parameters\":{\"source\":\"iana\"},\"text/parityfec\":{\"source\":\"iana\"},\"text/plain\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"txt\",\"text\",\"conf\",\"def\",\"list\",\"log\",\"in\",\"ini\"]},\"text/provenance-notation\":{\"source\":\"iana\"},\"text/prs.fallenstein.rst\":{\"source\":\"iana\"},\"text/prs.lines.tag\":{\"source\":\"iana\",\"extensions\":[\"dsc\"]},\"text/prs.prop.logic\":{\"source\":\"iana\"},\"text/raptorfec\":{\"source\":\"iana\"},\"text/red\":{\"source\":\"iana\"},\"text/rfc822-headers\":{\"source\":\"iana\"},\"text/richtext\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtx\"]},\"text/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"text/rtp-enc-aescm128\":{\"source\":\"iana\"},\"text/rtploopback\":{\"source\":\"iana\"},\"text/rtx\":{\"source\":\"iana\"},\"text/sgml\":{\"source\":\"iana\",\"extensions\":[\"sgml\",\"sgm\"]},\"text/shex\":{\"extensions\":[\"shex\"]},\"text/slim\":{\"extensions\":[\"slim\",\"slm\"]},\"text/strings\":{\"source\":\"iana\"},\"text/stylus\":{\"extensions\":[\"stylus\",\"styl\"]},\"text/t140\":{\"source\":\"iana\"},\"text/tab-separated-values\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tsv\"]},\"text/troff\":{\"source\":\"iana\",\"extensions\":[\"t\",\"tr\",\"roff\",\"man\",\"me\",\"ms\"]},\"text/turtle\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"ttl\"]},\"text/ulpfec\":{\"source\":\"iana\"},\"text/uri-list\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uri\",\"uris\",\"urls\"]},\"text/vcard\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vcard\"]},\"text/vnd.a\":{\"source\":\"iana\"},\"text/vnd.abc\":{\"source\":\"iana\"},\"text/vnd.ascii-art\":{\"source\":\"iana\"},\"text/vnd.curl\":{\"source\":\"iana\",\"extensions\":[\"curl\"]},\"text/vnd.curl.dcurl\":{\"source\":\"apache\",\"extensions\":[\"dcurl\"]},\"text/vnd.curl.mcurl\":{\"source\":\"apache\",\"extensions\":[\"mcurl\"]},\"text/vnd.curl.scurl\":{\"source\":\"apache\",\"extensions\":[\"scurl\"]},\"text/vnd.debian.copyright\":{\"source\":\"iana\"},\"text/vnd.dmclientscript\":{\"source\":\"iana\"},\"text/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"text/vnd.esmertec.theme-descriptor\":{\"source\":\"iana\"},\"text/vnd.ficlab.flt\":{\"source\":\"iana\"},\"text/vnd.fly\":{\"source\":\"iana\",\"extensions\":[\"fly\"]},\"text/vnd.fmi.flexstor\":{\"source\":\"iana\",\"extensions\":[\"flx\"]},\"text/vnd.gml\":{\"source\":\"iana\"},\"text/vnd.graphviz\":{\"source\":\"iana\",\"extensions\":[\"gv\"]},\"text/vnd.hgl\":{\"source\":\"iana\"},\"text/vnd.in3d.3dml\":{\"source\":\"iana\",\"extensions\":[\"3dml\"]},\"text/vnd.in3d.spot\":{\"source\":\"iana\",\"extensions\":[\"spot\"]},\"text/vnd.iptc.newsml\":{\"source\":\"iana\"},\"text/vnd.iptc.nitf\":{\"source\":\"iana\"},\"text/vnd.latex-z\":{\"source\":\"iana\"},\"text/vnd.motorola.reflex\":{\"source\":\"iana\"},\"text/vnd.ms-mediapackage\":{\"source\":\"iana\"},\"text/vnd.net2phone.commcenter.command\":{\"source\":\"iana\"},\"text/vnd.radisys.msml-basic-layout\":{\"source\":\"iana\"},\"text/vnd.senx.warpscript\":{\"source\":\"iana\"},\"text/vnd.si.uricatalogue\":{\"source\":\"iana\"},\"text/vnd.sosi\":{\"source\":\"iana\"},\"text/vnd.sun.j2me.app-descriptor\":{\"source\":\"iana\",\"extensions\":[\"jad\"]},\"text/vnd.trolltech.linguist\":{\"source\":\"iana\"},\"text/vnd.wap.si\":{\"source\":\"iana\"},\"text/vnd.wap.sl\":{\"source\":\"iana\"},\"text/vnd.wap.wml\":{\"source\":\"iana\",\"extensions\":[\"wml\"]},\"text/vnd.wap.wmlscript\":{\"source\":\"iana\",\"extensions\":[\"wmls\"]},\"text/vtt\":{\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"vtt\"]},\"text/x-asm\":{\"source\":\"apache\",\"extensions\":[\"s\",\"asm\"]},\"text/x-c\":{\"source\":\"apache\",\"extensions\":[\"c\",\"cc\",\"cxx\",\"cpp\",\"h\",\"hh\",\"dic\"]},\"text/x-component\":{\"source\":\"nginx\",\"extensions\":[\"htc\"]},\"text/x-fortran\":{\"source\":\"apache\",\"extensions\":[\"f\",\"for\",\"f77\",\"f90\"]},\"text/x-gwt-rpc\":{\"compressible\":true},\"text/x-handlebars-template\":{\"extensions\":[\"hbs\"]},\"text/x-java-source\":{\"source\":\"apache\",\"extensions\":[\"java\"]},\"text/x-jquery-tmpl\":{\"compressible\":true},\"text/x-lua\":{\"extensions\":[\"lua\"]},\"text/x-markdown\":{\"compressible\":true,\"extensions\":[\"mkd\"]},\"text/x-nfo\":{\"source\":\"apache\",\"extensions\":[\"nfo\"]},\"text/x-opml\":{\"source\":\"apache\",\"extensions\":[\"opml\"]},\"text/x-org\":{\"compressible\":true,\"extensions\":[\"org\"]},\"text/x-pascal\":{\"source\":\"apache\",\"extensions\":[\"p\",\"pas\"]},\"text/x-processing\":{\"compressible\":true,\"extensions\":[\"pde\"]},\"text/x-sass\":{\"extensions\":[\"sass\"]},\"text/x-scss\":{\"extensions\":[\"scss\"]},\"text/x-setext\":{\"source\":\"apache\",\"extensions\":[\"etx\"]},\"text/x-sfv\":{\"source\":\"apache\",\"extensions\":[\"sfv\"]},\"text/x-suse-ymp\":{\"compressible\":true,\"extensions\":[\"ymp\"]},\"text/x-uuencode\":{\"source\":\"apache\",\"extensions\":[\"uu\"]},\"text/x-vcalendar\":{\"source\":\"apache\",\"extensions\":[\"vcs\"]},\"text/x-vcard\":{\"source\":\"apache\",\"extensions\":[\"vcf\"]},\"text/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\"]},\"text/xml-external-parsed-entity\":{\"source\":\"iana\"},\"text/yaml\":{\"extensions\":[\"yaml\",\"yml\"]},\"video/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"video/3gpp\":{\"source\":\"iana\",\"extensions\":[\"3gp\",\"3gpp\"]},\"video/3gpp-tt\":{\"source\":\"iana\"},\"video/3gpp2\":{\"source\":\"iana\",\"extensions\":[\"3g2\"]},\"video/bmpeg\":{\"source\":\"iana\"},\"video/bt656\":{\"source\":\"iana\"},\"video/celb\":{\"source\":\"iana\"},\"video/dv\":{\"source\":\"iana\"},\"video/encaprtp\":{\"source\":\"iana\"},\"video/flexfec\":{\"source\":\"iana\"},\"video/h261\":{\"source\":\"iana\",\"extensions\":[\"h261\"]},\"video/h263\":{\"source\":\"iana\",\"extensions\":[\"h263\"]},\"video/h263-1998\":{\"source\":\"iana\"},\"video/h263-2000\":{\"source\":\"iana\"},\"video/h264\":{\"source\":\"iana\",\"extensions\":[\"h264\"]},\"video/h264-rcdo\":{\"source\":\"iana\"},\"video/h264-svc\":{\"source\":\"iana\"},\"video/h265\":{\"source\":\"iana\"},\"video/iso.segment\":{\"source\":\"iana\"},\"video/jpeg\":{\"source\":\"iana\",\"extensions\":[\"jpgv\"]},\"video/jpeg2000\":{\"source\":\"iana\"},\"video/jpm\":{\"source\":\"apache\",\"extensions\":[\"jpm\",\"jpgm\"]},\"video/mj2\":{\"source\":\"iana\",\"extensions\":[\"mj2\",\"mjp2\"]},\"video/mp1s\":{\"source\":\"iana\"},\"video/mp2p\":{\"source\":\"iana\"},\"video/mp2t\":{\"source\":\"iana\",\"extensions\":[\"ts\"]},\"video/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mp4\",\"mp4v\",\"mpg4\"]},\"video/mp4v-es\":{\"source\":\"iana\"},\"video/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpeg\",\"mpg\",\"mpe\",\"m1v\",\"m2v\"]},\"video/mpeg4-generic\":{\"source\":\"iana\"},\"video/mpv\":{\"source\":\"iana\"},\"video/nv\":{\"source\":\"iana\"},\"video/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogv\"]},\"video/parityfec\":{\"source\":\"iana\"},\"video/pointer\":{\"source\":\"iana\"},\"video/quicktime\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"qt\",\"mov\"]},\"video/raptorfec\":{\"source\":\"iana\"},\"video/raw\":{\"source\":\"iana\"},\"video/rtp-enc-aescm128\":{\"source\":\"iana\"},\"video/rtploopback\":{\"source\":\"iana\"},\"video/rtx\":{\"source\":\"iana\"},\"video/smpte291\":{\"source\":\"iana\"},\"video/smpte292m\":{\"source\":\"iana\"},\"video/ulpfec\":{\"source\":\"iana\"},\"video/vc1\":{\"source\":\"iana\"},\"video/vc2\":{\"source\":\"iana\"},\"video/vnd.cctv\":{\"source\":\"iana\"},\"video/vnd.dece.hd\":{\"source\":\"iana\",\"extensions\":[\"uvh\",\"uvvh\"]},\"video/vnd.dece.mobile\":{\"source\":\"iana\",\"extensions\":[\"uvm\",\"uvvm\"]},\"video/vnd.dece.mp4\":{\"source\":\"iana\"},\"video/vnd.dece.pd\":{\"source\":\"iana\",\"extensions\":[\"uvp\",\"uvvp\"]},\"video/vnd.dece.sd\":{\"source\":\"iana\",\"extensions\":[\"uvs\",\"uvvs\"]},\"video/vnd.dece.video\":{\"source\":\"iana\",\"extensions\":[\"uvv\",\"uvvv\"]},\"video/vnd.directv.mpeg\":{\"source\":\"iana\"},\"video/vnd.directv.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dlna.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dvb.file\":{\"source\":\"iana\",\"extensions\":[\"dvb\"]},\"video/vnd.fvt\":{\"source\":\"iana\",\"extensions\":[\"fvt\"]},\"video/vnd.hns.video\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsavc\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsmpeg2\":{\"source\":\"iana\"},\"video/vnd.motorola.video\":{\"source\":\"iana\"},\"video/vnd.motorola.videop\":{\"source\":\"iana\"},\"video/vnd.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"mxu\",\"m4u\"]},\"video/vnd.ms-playready.media.pyv\":{\"source\":\"iana\",\"extensions\":[\"pyv\"]},\"video/vnd.nokia.interleaved-multimedia\":{\"source\":\"iana\"},\"video/vnd.nokia.mp4vr\":{\"source\":\"iana\"},\"video/vnd.nokia.videovoip\":{\"source\":\"iana\"},\"video/vnd.objectvideo\":{\"source\":\"iana\"},\"video/vnd.radgamettools.bink\":{\"source\":\"iana\"},\"video/vnd.radgamettools.smacker\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg1\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg4\":{\"source\":\"iana\"},\"video/vnd.sealed.swf\":{\"source\":\"iana\"},\"video/vnd.sealedmedia.softseal.mov\":{\"source\":\"iana\"},\"video/vnd.uvvu.mp4\":{\"source\":\"iana\",\"extensions\":[\"uvu\",\"uvvu\"]},\"video/vnd.vivo\":{\"source\":\"iana\",\"extensions\":[\"viv\"]},\"video/vnd.youtube.yt\":{\"source\":\"iana\"},\"video/vp8\":{\"source\":\"iana\"},\"video/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"webm\"]},\"video/x-f4v\":{\"source\":\"apache\",\"extensions\":[\"f4v\"]},\"video/x-fli\":{\"source\":\"apache\",\"extensions\":[\"fli\"]},\"video/x-flv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"flv\"]},\"video/x-m4v\":{\"source\":\"apache\",\"extensions\":[\"m4v\"]},\"video/x-matroska\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"mkv\",\"mk3d\",\"mks\"]},\"video/x-mng\":{\"source\":\"apache\",\"extensions\":[\"mng\"]},\"video/x-ms-asf\":{\"source\":\"apache\",\"extensions\":[\"asf\",\"asx\"]},\"video/x-ms-vob\":{\"source\":\"apache\",\"extensions\":[\"vob\"]},\"video/x-ms-wm\":{\"source\":\"apache\",\"extensions\":[\"wm\"]},\"video/x-ms-wmv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"wmv\"]},\"video/x-ms-wmx\":{\"source\":\"apache\",\"extensions\":[\"wmx\"]},\"video/x-ms-wvx\":{\"source\":\"apache\",\"extensions\":[\"wvx\"]},\"video/x-msvideo\":{\"source\":\"apache\",\"extensions\":[\"avi\"]},\"video/x-sgi-movie\":{\"source\":\"apache\",\"extensions\":[\"movie\"]},\"video/x-smv\":{\"source\":\"apache\",\"extensions\":[\"smv\"]},\"x-conference/x-cooltalk\":{\"source\":\"apache\",\"extensions\":[\"ice\"]},\"x-shader/x-fragment\":{\"compressible\":true},\"x-shader/x-vertex\":{\"compressible\":true}}");

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(3109);
/******/ })()
;
//# sourceMappingURL=index.js.map