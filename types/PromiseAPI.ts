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
import { ObservableContractsApi } from './ObservableAPI';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an contract object.
     * @param name 
     * @param chainId 
     * @param address 
     * @param abi 
     * @param publicVerification 
     * @param project 
     */
    public createContract(name: string, chainId: number, address?: string, abi?: ContractResponseAbi, publicVerification?: boolean, project?: string, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.createContract(name, chainId, address, abi, publicVerification, project, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param id Specifies the unique contract ID.
     * @param project Specifies the unique project ID.
     */
    public getContract(id: string, project?: string, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.getContract(id, project, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param project Specifies the unique project ID.
     */
    public getContracts(project?: string, _options?: Configuration): Promise<ContractsResponse> {
        const result = this.api.getContracts(project, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an account object.
     * @param player The player ID
     * @param project The project ID
     * @param chainId The chain_id
     */
    public createAccount(player: string, project?: string, chainId?: number, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createAccount(player, project, chainId, _options);
        return result.toPromise();
    }

    /**
     * Creates an allow function object.
     * @param type 
     * @param functionName 
     * @param contract 
     * @param policy 
     * @param project 
     */
    public createAllowFunction(type: string, functionName: string, contract: string, policy?: string, project?: string, _options?: Configuration): Promise<AllowFunctionResponse> {
        const result = this.api.createAllowFunction(type, functionName, contract, policy, project, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param project Specifies the unique project ID.
     */
    public getAccount(id: string, project?: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(id, project, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param project Specifies the unique project ID.
     */
    public getAccountInventory(id: string, project?: string, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getAccountInventory(id, project, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param player Specifies the unique player ID.
     * @param project Specifies the unique project ID.
     */
    public getAccounts(player: string, project?: string, _options?: Configuration): Promise<AccountsResponse> {
        const result = this.api.getAccounts(player, project, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param project Specifies the unique project ID.
     * @param policy Specifies the unique policy ID.
     */
    public getAllowFunctions(project?: string, policy?: string, _options?: Configuration): Promise<AllowFunctionsResponse> {
        const result = this.api.getAllowFunctions(project, policy, _options);
        return result.toPromise();
    }

    /**
     * Updates your allow functions object.
     * @param id Specifies the unique allow function ID.
     * @param type 
     * @param functionName 
     * @param contract 
     * @param policy 
     * @param project 
     */
    public updateAllowFunction(id: string, type: string, functionName: string, contract: string, policy?: string, project?: string, _options?: Configuration): Promise<AllowFunctionResponse> {
        const result = this.api.updateAllowFunction(id, type, functionName, contract, policy, project, _options);
        return result.toPromise();
    }


}



import { ObservableLogsApi } from './ObservableAPI';

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param project 
     * @param method 
     * @param id 
     */
    public getProjectLogs(project?: string, method?: Array<string>, id?: string, _options?: Configuration): Promise<ProjectLogs> {
        const result = this.api.getProjectLogs(project, method, id, _options);
        return result.toPromise();
    }


}



import { ObservablePlayersApi } from './ObservableAPI';

import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";
export class PromisePlayersApi {
    private api: ObservablePlayersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersApiRequestFactory,
        responseProcessor?: PlayersApiResponseProcessor
    ) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a player object.
     * @param name 
     * @param description 
     * @param project 
     */
    public createPlayer(name: string, description?: string, project?: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.createPlayer(name, description, project, _options);
        return result.toPromise();
    }

    /**
     * Updates an account object of an existing player.
     * @param player Specifies the unique player ID.
     * @param player2 The player ID
     * @param project The project ID
     * @param chainId The chain_id
     */
    public createPlayerAccount(player: string, player2: string, project?: string, chainId?: number, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createPlayerAccount(player, player2, project, chainId, _options);
        return result.toPromise();
    }

    /**
     * Creates the session for the player.
     * @param player 
     * @param publicKey 
     * @param policy 
     */
    public createSession(player: string, publicKey: string, policy?: string, _options?: Configuration): Promise<void> {
        const result = this.api.createSession(player, publicKey, policy, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param project Specifies the unique project ID.
     */
    public getPlayer(id: string, project?: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayer(id, project, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param player Specifies the unique player ID.
     * @param project Specifies the unique project ID.
     */
    public getPlayerAccounts(player: string, project?: string, _options?: Configuration): Promise<AccountsResponse> {
        const result = this.api.getPlayerAccounts(player, project, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param project Specifies the unique project ID.
     */
    public getPlayerInventory(id: string, chainId: number, project?: string, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getPlayerInventory(id, chainId, project, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param project Specifies the unique project ID.
     */
    public getPlayers(project?: string, _options?: Configuration): Promise<PlayersResponse> {
        const result = this.api.getPlayers(project, _options);
        return result.toPromise();
    }

    /**
     * @param email 
     * @param password 
     */
    public login(email: string, password: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.login(email, password, _options);
        return result.toPromise();
    }

    /**
     * @param email 
     * @param password 
     */
    public signup(email: string, password: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.signup(email, password, _options);
        return result.toPromise();
    }

    /**
     * Updates a player object.
     * @param id 
     * @param name 
     * @param description 
     * @param project 
     */
    public updatePlayer(id: string, name: string, description?: string, project?: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.updatePlayer(id, name, description, project, _options);
        return result.toPromise();
    }


}



import { ObservablePoliciesApi } from './ObservableAPI';

import { PoliciesApiRequestFactory, PoliciesApiResponseProcessor} from "../apis/PoliciesApi";
export class PromisePoliciesApi {
    private api: ObservablePoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PoliciesApiRequestFactory,
        responseProcessor?: PoliciesApiResponseProcessor
    ) {
        this.api = new ObservablePoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a policy object.
     * @param name 
     * @param chainId 
     * @param strategy 
     * @param project 
     */
    public createPolicy(name: string, chainId: number, strategy?: string, project?: string, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.createPolicy(name, chainId, strategy, project, _options);
        return result.toPromise();
    }

    /**
     * @param policy 
     * @param type 
     * @param functionName 
     * @param contract 
     * @param policy2 
     * @param project 
     */
    public createPolicyAllowFunction(policy: string, type: string, functionName: string, contract: string, policy2?: string, project?: string, _options?: Configuration): Promise<AllowFunctionResponse> {
        const result = this.api.createPolicyAllowFunction(policy, type, functionName, contract, policy2, project, _options);
        return result.toPromise();
    }

    /**
     * @param project 
     */
    public getPolicies(project?: string, _options?: Configuration): Promise<PoliciesResponse> {
        const result = this.api.getPolicies(project, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param project 
     */
    public getPolicy(id: string, project?: string, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.getPolicy(id, project, _options);
        return result.toPromise();
    }

    /**
     * @param policy 
     * @param project 
     */
    public getPolicyAllowFunctions(policy: string, project?: string, _options?: Configuration): Promise<AllowFunctionsResponse> {
        const result = this.api.getPolicyAllowFunctions(policy, project, _options);
        return result.toPromise();
    }

    /**
     * @param policy 
     * @param _from 
     * @param to 
     */
    public getPolicyDailyGasUsage(policy: string, _from?: string, to?: string, _options?: Configuration): Promise<Gas> {
        const result = this.api.getPolicyDailyGasUsage(policy, _from, to, _options);
        return result.toPromise();
    }

    /**
     * @param policy 
     * @param _from 
     * @param to 
     */
    public getPolicyTotalGasUsage(policy: string, _from?: string, to?: string, _options?: Configuration): Promise<SumGas> {
        const result = this.api.getPolicyTotalGasUsage(policy, _from, to, _options);
        return result.toPromise();
    }

    /**
     * Updates a policy object.
     * @param id 
     * @param name 
     * @param chainId 
     * @param strategy 
     * @param project 
     */
    public updatePolicy(id: string, name?: string, chainId?: number, strategy?: string, project?: string, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.updatePolicy(id, name, chainId, strategy, project, _options);
        return result.toPromise();
    }

    /**
     * @param policy 
     * @param id 
     * @param type 
     * @param functionName 
     * @param policy2 
     * @param project 
     * @param contract 
     */
    public updatePolicyAllowFunction(policy: string, id: string, type?: string, functionName?: string, policy2?: string, project?: string, contract?: string, _options?: Configuration): Promise<AllowFunctionResponse> {
        const result = this.api.updatePolicyAllowFunction(policy, id, type, functionName, policy2, project, contract, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a project object.
     * @param name 
     * @param livemode 
     * @param project 
     */
    public createProject(name: string, livemode?: boolean, project?: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.createProject(name, livemode, project, _options);
        return result.toPromise();
    }

    /**
     */
    public get(_options?: Configuration): Promise<GetProjectResponse> {
        const result = this.api.get(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getProject(id: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.getProject(id, _options);
        return result.toPromise();
    }

    /**
     * @param project 
     */
    public getProjects(project?: string, _options?: Configuration): Promise<ProjectsResponse> {
        const result = this.api.getProjects(project, _options);
        return result.toPromise();
    }

    /**
     * Updates a project object.
     * @param id 
     * @param name 
     * @param livemode 
     * @param project 
     */
    public updateProject(id: string, name: string, livemode?: boolean, project?: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.updateProject(id, name, livemode, project, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionIntentsApi } from './ObservableAPI';

import { TransactionIntentsApiRequestFactory, TransactionIntentsApiResponseProcessor} from "../apis/TransactionIntentsApi";
export class PromiseTransactionIntentsApi {
    private api: ObservableTransactionIntentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionIntentsApiRequestFactory,
        responseProcessor?: TransactionIntentsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a transaction intent object.
     * @param player 
     * @param chainId 
     * @param optimistic 
     * @param interactions 
     * @param policy 
     * @param project 
     */
    public createTransactionIntent(player: string, chainId: number, optimistic: boolean, interactions: Array<Interaction>, policy?: string, project?: string, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createTransactionIntent(player, chainId, optimistic, interactions, policy, project, _options);
        return result.toPromise();
    }

    /**
     * Updates a transaction intent object.
     * @param id 
     * @param project 
     */
    public getTransactionIntent(id: string, project?: string, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.getTransactionIntent(id, project, _options);
        return result.toPromise();
    }

    /**
     * @param project 
     */
    public getTransactionIntents(project?: string, _options?: Configuration): Promise<TransactionIntentsResponse> {
        const result = this.api.getTransactionIntents(project, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param project 
     */
    public updateTransactionIntentResponse(id: string, project?: string, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.updateTransactionIntentResponse(id, project, _options);
        return result.toPromise();
    }

    /**
     * @param project 
     */
    public updateTransactionIntentsResponse(project?: string, _options?: Configuration): Promise<TransactionIntentsResponse> {
        const result = this.api.updateTransactionIntentsResponse(project, _options);
        return result.toPromise();
    }


}



