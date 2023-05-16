import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AccountResponse } from '../models/AccountResponse';
import { AccountsResponse } from '../models/AccountsResponse';
import { AllowFunctionResponse } from '../models/AllowFunctionResponse';
import { AllowFunctionsResponse } from '../models/AllowFunctionsResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthResponse } from '../models/AuthResponse';
import { ContractResponse } from '../models/ContractResponse';
import { ContractResponseAbi } from '../models/ContractResponseAbi';
import { ContractResponseAbiAnyOfInner } from '../models/ContractResponseAbiAnyOfInner';
import { ContractsResponse } from '../models/ContractsResponse';
import { Fragment } from '../models/Fragment';
import { Gas } from '../models/Gas';
import { GetProjectResponse } from '../models/GetProjectResponse';
import { Interaction } from '../models/Interaction';
import { InventoryResponse } from '../models/InventoryResponse';
import { JsonFragment } from '../models/JsonFragment';
import { Log } from '../models/Log';
import { ParamType } from '../models/ParamType';
import { PlayerResponse } from '../models/PlayerResponse';
import { PlayersResponse } from '../models/PlayersResponse';
import { PoliciesResponse } from '../models/PoliciesResponse';
import { PolicyResponse } from '../models/PolicyResponse';
import { ProjectLogs } from '../models/ProjectLogs';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectsResponse } from '../models/ProjectsResponse';
import { ResponseResponse } from '../models/ResponseResponse';
import { SumGas } from '../models/SumGas';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { TransactionIntentsResponse } from '../models/TransactionIntentsResponse';
import { UserOpResult } from '../models/UserOpResult';

import { ObservableContractsApi } from "./ObservableAPI";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";

export interface ContractsApiCreateContractRequest {
    /**
     * 
     * @type string
     * @memberof ContractsApicreateContract
     */
    name: string
    /**
     * 
     * @type number
     * @memberof ContractsApicreateContract
     */
    chainId: number
    /**
     * 
     * @type string
     * @memberof ContractsApicreateContract
     */
    address?: string
    /**
     * 
     * @type ContractResponseAbi
     * @memberof ContractsApicreateContract
     */
    abi?: ContractResponseAbi
    /**
     * 
     * @type boolean
     * @memberof ContractsApicreateContract
     */
    publicVerification?: boolean
    /**
     * 
     * @type string
     * @memberof ContractsApicreateContract
     */
    project?: string
}

export interface ContractsApiGetContractRequest {
    /**
     * Specifies the unique contract ID.
     * @type string
     * @memberof ContractsApigetContract
     */
    id: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof ContractsApigetContract
     */
    project?: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof ContractsApigetContracts
     */
    project?: string
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an contract object.
     * @param param the request object
     */
    public createContract(param: ContractsApiCreateContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.createContract(param.name, param.chainId, param.address, param.abi, param.publicVerification, param.project,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.getContract(param.id, param.project,  options).toPromise();
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<ContractsResponse> {
        return this.api.getContracts(param.project,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateAccountRequest {
    /**
     * The player ID
     * @type string
     * @memberof DefaultApicreateAccount
     */
    player: string
    /**
     * The project ID
     * @type string
     * @memberof DefaultApicreateAccount
     */
    project?: string
    /**
     * The chain_id
     * @type number
     * @memberof DefaultApicreateAccount
     */
    chainId?: number
}

export interface DefaultApiCreateAllowFunctionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAllowFunction
     */
    type: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAllowFunction
     */
    functionName: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAllowFunction
     */
    contract: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAllowFunction
     */
    policy?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAllowFunction
     */
    project?: string
}

export interface DefaultApiGetAccountRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof DefaultApigetAccount
     */
    id: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof DefaultApigetAccount
     */
    project?: string
}

export interface DefaultApiGetAccountInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof DefaultApigetAccountInventory
     */
    id: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof DefaultApigetAccountInventory
     */
    project?: string
}

export interface DefaultApiGetAccountsRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof DefaultApigetAccounts
     */
    player: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof DefaultApigetAccounts
     */
    project?: string
}

export interface DefaultApiGetAllowFunctionsRequest {
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof DefaultApigetAllowFunctions
     */
    project?: string
    /**
     * Specifies the unique policy ID.
     * @type string
     * @memberof DefaultApigetAllowFunctions
     */
    policy?: string
}

export interface DefaultApiUpdateAllowFunctionRequest {
    /**
     * Specifies the unique allow function ID.
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    type: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    functionName: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    contract: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    policy?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAllowFunction
     */
    project?: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an account object.
     * @param param the request object
     */
    public createAccount(param: DefaultApiCreateAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createAccount(param.player, param.project, param.chainId,  options).toPromise();
    }

    /**
     * Creates an allow function object.
     * @param param the request object
     */
    public createAllowFunction(param: DefaultApiCreateAllowFunctionRequest, options?: Configuration): Promise<AllowFunctionResponse> {
        return this.api.createAllowFunction(param.type, param.functionName, param.contract, param.policy, param.project,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccount(param: DefaultApiGetAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.getAccount(param.id, param.project,  options).toPromise();
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccountInventory(param: DefaultApiGetAccountInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getAccountInventory(param.id, param.project,  options).toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param param the request object
     */
    public getAccounts(param: DefaultApiGetAccountsRequest, options?: Configuration): Promise<AccountsResponse> {
        return this.api.getAccounts(param.player, param.project,  options).toPromise();
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param param the request object
     */
    public getAllowFunctions(param: DefaultApiGetAllowFunctionsRequest = {}, options?: Configuration): Promise<AllowFunctionsResponse> {
        return this.api.getAllowFunctions(param.project, param.policy,  options).toPromise();
    }

    /**
     * Updates your allow functions object.
     * @param param the request object
     */
    public updateAllowFunction(param: DefaultApiUpdateAllowFunctionRequest, options?: Configuration): Promise<AllowFunctionResponse> {
        return this.api.updateAllowFunction(param.id, param.type, param.functionName, param.contract, param.policy, param.project,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiGetProjectLogsRequest {
    /**
     * 
     * @type string
     * @memberof LogsApigetProjectLogs
     */
    project?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof LogsApigetProjectLogs
     */
    method?: Array<string>
    /**
     * 
     * @type string
     * @memberof LogsApigetProjectLogs
     */
    id?: string
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getProjectLogs(param: LogsApiGetProjectLogsRequest = {}, options?: Configuration): Promise<ProjectLogs> {
        return this.api.getProjectLogs(param.project, param.method, param.id,  options).toPromise();
    }

}

import { ObservablePlayersApi } from "./ObservableAPI";
import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";

export interface PlayersApiCreatePlayerRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApicreatePlayer
     */
    name: string
    /**
     * 
     * @type string
     * @memberof PlayersApicreatePlayer
     */
    description?: string
    /**
     * 
     * @type string
     * @memberof PlayersApicreatePlayer
     */
    project?: string
}

export interface PlayersApiCreatePlayerAccountRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApicreatePlayerAccount
     */
    player: string
    /**
     * The player ID
     * @type string
     * @memberof PlayersApicreatePlayerAccount
     */
    player2: string
    /**
     * The project ID
     * @type string
     * @memberof PlayersApicreatePlayerAccount
     */
    project?: string
    /**
     * The chain_id
     * @type number
     * @memberof PlayersApicreatePlayerAccount
     */
    chainId?: number
}

export interface PlayersApiCreateSessionRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApicreateSession
     */
    player: string
    /**
     * 
     * @type string
     * @memberof PlayersApicreateSession
     */
    publicKey: string
    /**
     * 
     * @type string
     * @memberof PlayersApicreateSession
     */
    policy?: string
}

export interface PlayersApiGetPlayerRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApigetPlayer
     */
    id: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof PlayersApigetPlayer
     */
    project?: string
}

export interface PlayersApiGetPlayerAccountsRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApigetPlayerAccounts
     */
    player: string
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof PlayersApigetPlayerAccounts
     */
    project?: string
}

export interface PlayersApiGetPlayerInventoryRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApigetPlayerInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof PlayersApigetPlayerInventory
     */
    chainId: number
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof PlayersApigetPlayerInventory
     */
    project?: string
}

export interface PlayersApiGetPlayersRequest {
    /**
     * Specifies the unique project ID.
     * @type string
     * @memberof PlayersApigetPlayers
     */
    project?: string
}

export interface PlayersApiLoginRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApilogin
     */
    email: string
    /**
     * 
     * @type string
     * @memberof PlayersApilogin
     */
    password: string
}

export interface PlayersApiSignupRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApisignup
     */
    email: string
    /**
     * 
     * @type string
     * @memberof PlayersApisignup
     */
    password: string
}

export interface PlayersApiUpdatePlayerRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    name: string
    /**
     * 
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    description?: string
    /**
     * 
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    project?: string
}

export class ObjectPlayersApi {
    private api: ObservablePlayersApi

    public constructor(configuration: Configuration, requestFactory?: PlayersApiRequestFactory, responseProcessor?: PlayersApiResponseProcessor) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a player object.
     * @param param the request object
     */
    public createPlayer(param: PlayersApiCreatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.createPlayer(param.name, param.description, param.project,  options).toPromise();
    }

    /**
     * Updates an account object of an existing player.
     * @param param the request object
     */
    public createPlayerAccount(param: PlayersApiCreatePlayerAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createPlayerAccount(param.player, param.player2, param.project, param.chainId,  options).toPromise();
    }

    /**
     * Creates the session for the player.
     * @param param the request object
     */
    public createSession(param: PlayersApiCreateSessionRequest, options?: Configuration): Promise<void> {
        return this.api.createSession(param.player, param.publicKey, param.policy,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayer(param: PlayersApiGetPlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.getPlayer(param.id, param.project,  options).toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param param the request object
     */
    public getPlayerAccounts(param: PlayersApiGetPlayerAccountsRequest, options?: Configuration): Promise<AccountsResponse> {
        return this.api.getPlayerAccounts(param.player, param.project,  options).toPromise();
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayerInventory(param: PlayersApiGetPlayerInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getPlayerInventory(param.id, param.chainId, param.project,  options).toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param param the request object
     */
    public getPlayers(param: PlayersApiGetPlayersRequest = {}, options?: Configuration): Promise<PlayersResponse> {
        return this.api.getPlayers(param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: PlayersApiLoginRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.login(param.email, param.password,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public signup(param: PlayersApiSignupRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.signup(param.email, param.password,  options).toPromise();
    }

    /**
     * Updates a player object.
     * @param param the request object
     */
    public updatePlayer(param: PlayersApiUpdatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.updatePlayer(param.id, param.name, param.description, param.project,  options).toPromise();
    }

}

import { ObservablePoliciesApi } from "./ObservableAPI";
import { PoliciesApiRequestFactory, PoliciesApiResponseProcessor} from "../apis/PoliciesApi";

export interface PoliciesApiCreatePolicyRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicy
     */
    name: string
    /**
     * 
     * @type number
     * @memberof PoliciesApicreatePolicy
     */
    chainId: number
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicy
     */
    strategy?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicy
     */
    project?: string
}

export interface PoliciesApiCreatePolicyAllowFunctionRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    policy: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    type: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    functionName: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    contract: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    policy2?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    project?: string
}

export interface PoliciesApiGetPoliciesRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicies
     */
    project?: string
}

export interface PoliciesApiGetPolicyRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicy
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicy
     */
    project?: string
}

export interface PoliciesApiGetPolicyAllowFunctionsRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    policy: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    project?: string
}

export interface PoliciesApiGetPolicyDailyGasUsageRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyDailyGasUsage
     */
    policy: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyDailyGasUsage
     */
    _from?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyDailyGasUsage
     */
    to?: string
}

export interface PoliciesApiGetPolicyTotalGasUsageRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    policy: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    _from?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    to?: string
}

export interface PoliciesApiUpdatePolicyRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicy
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicy
     */
    name?: string
    /**
     * 
     * @type number
     * @memberof PoliciesApiupdatePolicy
     */
    chainId?: number
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicy
     */
    strategy?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicy
     */
    project?: string
}

export interface PoliciesApiUpdatePolicyAllowFunctionRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    policy: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    type?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    functionName?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    policy2?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    project?: string
    /**
     * 
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    contract?: string
}

export class ObjectPoliciesApi {
    private api: ObservablePoliciesApi

    public constructor(configuration: Configuration, requestFactory?: PoliciesApiRequestFactory, responseProcessor?: PoliciesApiResponseProcessor) {
        this.api = new ObservablePoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a policy object.
     * @param param the request object
     */
    public createPolicy(param: PoliciesApiCreatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.createPolicy(param.name, param.chainId, param.strategy, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createPolicyAllowFunction(param: PoliciesApiCreatePolicyAllowFunctionRequest, options?: Configuration): Promise<AllowFunctionResponse> {
        return this.api.createPolicyAllowFunction(param.policy, param.type, param.functionName, param.contract, param.policy2, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicies(param: PoliciesApiGetPoliciesRequest = {}, options?: Configuration): Promise<PoliciesResponse> {
        return this.api.getPolicies(param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicy(param: PoliciesApiGetPolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.getPolicy(param.id, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicyAllowFunctions(param: PoliciesApiGetPolicyAllowFunctionsRequest, options?: Configuration): Promise<AllowFunctionsResponse> {
        return this.api.getPolicyAllowFunctions(param.policy, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicyDailyGasUsage(param: PoliciesApiGetPolicyDailyGasUsageRequest, options?: Configuration): Promise<Gas> {
        return this.api.getPolicyDailyGasUsage(param.policy, param._from, param.to,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicyTotalGasUsage(param: PoliciesApiGetPolicyTotalGasUsageRequest, options?: Configuration): Promise<SumGas> {
        return this.api.getPolicyTotalGasUsage(param.policy, param._from, param.to,  options).toPromise();
    }

    /**
     * Updates a policy object.
     * @param param the request object
     */
    public updatePolicy(param: PoliciesApiUpdatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.updatePolicy(param.id, param.name, param.chainId, param.strategy, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updatePolicyAllowFunction(param: PoliciesApiUpdatePolicyAllowFunctionRequest, options?: Configuration): Promise<AllowFunctionResponse> {
        return this.api.updatePolicyAllowFunction(param.policy, param.id, param.type, param.functionName, param.policy2, param.project, param.contract,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiCreateProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProject
     */
    name: string
    /**
     * 
     * @type boolean
     * @memberof ProjectsApicreateProject
     */
    livemode?: boolean
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProject
     */
    project?: string
}

export interface ProjectsApiGetRequest {
}

export interface ProjectsApiGetProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProject
     */
    id: string
}

export interface ProjectsApiGetProjectsRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjects
     */
    project?: string
}

export interface ProjectsApiUpdateProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    name: string
    /**
     * 
     * @type boolean
     * @memberof ProjectsApiupdateProject
     */
    livemode?: boolean
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    project?: string
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a project object.
     * @param param the request object
     */
    public createProject(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.createProject(param.name, param.livemode, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public get(param: ProjectsApiGetRequest = {}, options?: Configuration): Promise<GetProjectResponse> {
        return this.api.get( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getProject(param: ProjectsApiGetProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.getProject(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getProjects(param: ProjectsApiGetProjectsRequest = {}, options?: Configuration): Promise<ProjectsResponse> {
        return this.api.getProjects(param.project,  options).toPromise();
    }

    /**
     * Updates a project object.
     * @param param the request object
     */
    public updateProject(param: ProjectsApiUpdateProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.updateProject(param.id, param.name, param.livemode, param.project,  options).toPromise();
    }

}

import { ObservableTransactionIntentsApi } from "./ObservableAPI";
import { TransactionIntentsApiRequestFactory, TransactionIntentsApiResponseProcessor} from "../apis/TransactionIntentsApi";

export interface TransactionIntentsApiCreateTransactionIntentRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    player: string
    /**
     * 
     * @type number
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    chainId: number
    /**
     * 
     * @type boolean
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    optimistic: boolean
    /**
     * 
     * @type Array&lt;Interaction&gt;
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    interactions: Array<Interaction>
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    policy?: string
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    project?: string
}

export interface TransactionIntentsApiGetTransactionIntentRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApigetTransactionIntent
     */
    id: string
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApigetTransactionIntent
     */
    project?: string
}

export interface TransactionIntentsApiGetTransactionIntentsRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    project?: string
}

export interface TransactionIntentsApiUpdateTransactionIntentResponseRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApiupdateTransactionIntentResponse
     */
    id: string
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApiupdateTransactionIntentResponse
     */
    project?: string
}

export interface TransactionIntentsApiUpdateTransactionIntentsResponseRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApiupdateTransactionIntentsResponse
     */
    project?: string
}

export class ObjectTransactionIntentsApi {
    private api: ObservableTransactionIntentsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionIntentsApiRequestFactory, responseProcessor?: TransactionIntentsApiResponseProcessor) {
        this.api = new ObservableTransactionIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a transaction intent object.
     * @param param the request object
     */
    public createTransactionIntent(param: TransactionIntentsApiCreateTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.createTransactionIntent(param.player, param.chainId, param.optimistic, param.interactions, param.policy, param.project,  options).toPromise();
    }

    /**
     * Updates a transaction intent object.
     * @param param the request object
     */
    public getTransactionIntent(param: TransactionIntentsApiGetTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.getTransactionIntent(param.id, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTransactionIntents(param: TransactionIntentsApiGetTransactionIntentsRequest = {}, options?: Configuration): Promise<TransactionIntentsResponse> {
        return this.api.getTransactionIntents(param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTransactionIntentResponse(param: TransactionIntentsApiUpdateTransactionIntentResponseRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.updateTransactionIntentResponse(param.id, param.project,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTransactionIntentsResponse(param: TransactionIntentsApiUpdateTransactionIntentsResponseRequest = {}, options?: Configuration): Promise<TransactionIntentsResponse> {
        return this.api.updateTransactionIntentsResponse(param.project,  options).toPromise();
    }

}
