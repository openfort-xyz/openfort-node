import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountResponse } from '../models/AccountResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthPlayerListQueries } from '../models/AuthPlayerListQueries';
import { AuthPlayerListResponse } from '../models/AuthPlayerListResponse';
import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { AuthResponse } from '../models/AuthResponse';
import { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest';
import { ChargeCustomTokenPolicyStrategy } from '../models/ChargeCustomTokenPolicyStrategy';
import { CompleteRecoveryRequest } from '../models/CompleteRecoveryRequest';
import { ContractDeleteResponse } from '../models/ContractDeleteResponse';
import { ContractListQueries } from '../models/ContractListQueries';
import { ContractListResponse } from '../models/ContractListResponse';
import { ContractResponse } from '../models/ContractResponse';
import { CreateAccountRequest } from '../models/CreateAccountRequest';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreatePlayerAccountRequest } from '../models/CreatePlayerAccountRequest';
import { CreatePlayerRequest } from '../models/CreatePlayerRequest';
import { CreatePlayerSessionRequest } from '../models/CreatePlayerSessionRequest';
import { CreatePolicyAllowFunctionRequest } from '../models/CreatePolicyAllowFunctionRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { DataAccountTypes } from '../models/DataAccountTypes';
import { DomainData } from '../models/DomainData';
import { EditRoleRequest } from '../models/EditRoleRequest';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeINVENTORY } from '../models/EntityTypeINVENTORY';
import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { EntityTypePROJECT } from '../models/EntityTypePROJECT';
import { EntityTypeSESSION } from '../models/EntityTypeSESSION';
import { EntityTypeSIGNATURE } from '../models/EntityTypeSIGNATURE';
import { EntityTypeTRANSACTIONINTENT } from '../models/EntityTypeTRANSACTIONINTENT';
import { EntityTypeUSER } from '../models/EntityTypeUSER';
import { ErrorTypeINVALIDREQUESTERROR } from '../models/ErrorTypeINVALIDREQUESTERROR';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { GasReport } from '../models/GasReport';
import { GetSigninUrlResponse } from '../models/GetSigninUrlResponse';
import { Interaction } from '../models/Interaction';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { InventoryListResponse } from '../models/InventoryListResponse';
import { InventoryResponse } from '../models/InventoryResponse';
import { InvitedMemberResponse } from '../models/InvitedMemberResponse';
import { Log } from '../models/Log';
import { LoginRequest } from '../models/LoginRequest';
import { MemberRemoveResponse } from '../models/MemberRemoveResponse';
import { MemberRequest } from '../models/MemberRequest';
import { MemberResponse } from '../models/MemberResponse';
import { MembersResponse } from '../models/MembersResponse';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { ObsoleteAssetInventory } from '../models/ObsoleteAssetInventory';
import { ObsoleteAssetType } from '../models/ObsoleteAssetType';
import { ObsoleteInventoryResponse } from '../models/ObsoleteInventoryResponse';
import { PKPolicy } from '../models/PKPolicy';
import { PayForUserPolicyStrategy } from '../models/PayForUserPolicyStrategy';
import { PickAccountResponseId } from '../models/PickAccountResponseId';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { PickPolicyResponseId } from '../models/PickPolicyResponseId';
import { PickPolicyRuleResponseId } from '../models/PickPolicyRuleResponseId';
import { PickTransactionIntentResponseId } from '../models/PickTransactionIntentResponseId';
import { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest';
import { PlayerInventoryListQueries } from '../models/PlayerInventoryListQueries';
import { PlayerListQueries } from '../models/PlayerListQueries';
import { PlayerListResponse } from '../models/PlayerListResponse';
import { PlayerRequest } from '../models/PlayerRequest';
import { PlayerResponse } from '../models/PlayerResponse';
import { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest';
import { PolicyDeleteResponse } from '../models/PolicyDeleteResponse';
import { PolicyListQueries } from '../models/PolicyListQueries';
import { PolicyListResponse } from '../models/PolicyListResponse';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyResponsePolicyRulesInner } from '../models/PolicyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from '../models/PolicyResponseTransactionIntentsInner';
import { PolicyRuleDeleteResponse } from '../models/PolicyRuleDeleteResponse';
import { PolicyRuleListQueries } from '../models/PolicyRuleListQueries';
import { PolicyRuleListResponse } from '../models/PolicyRuleListResponse';
import { PolicyRuleResponse } from '../models/PolicyRuleResponse';
import { PolicyRuleResponseContract } from '../models/PolicyRuleResponseContract';
import { PolicyRuleType } from '../models/PolicyRuleType';
import { PolicyStrategy } from '../models/PolicyStrategy';
import { PolicyStrategyRequest } from '../models/PolicyStrategyRequest';
import { PrismaInputJsonValue } from '../models/PrismaInputJsonValue';
import { ProjectListResponse } from '../models/ProjectListResponse';
import { ProjectLogs } from '../models/ProjectLogs';
import { ProjectRequest } from '../models/ProjectRequest';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectRole } from '../models/ProjectRole';
import { ProviderRequest } from '../models/ProviderRequest';
import { ProviderResponse } from '../models/ProviderResponse';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RevokeSessionPlayerRequest } from '../models/RevokeSessionPlayerRequest';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SessionListQueries } from '../models/SessionListQueries';
import { SessionListResponse } from '../models/SessionListResponse';
import { SessionResponse } from '../models/SessionResponse';
import { SignPayloadRequest } from '../models/SignPayloadRequest';
import { SignPayloadResponse } from '../models/SignPayloadResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignupRequest } from '../models/SignupRequest';
import { SortOrder } from '../models/SortOrder';
import { SponsorSchema } from '../models/SponsorSchema';
import { SponsorSchemaCHARGECUSTOMTOKENS } from '../models/SponsorSchemaCHARGECUSTOMTOKENS';
import { SponsorSchemaPAYFORUSER } from '../models/SponsorSchemaPAYFORUSER';
import { StartRecoveryRequest } from '../models/StartRecoveryRequest';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { TransactionIntentListQueries } from '../models/TransactionIntentListQueries';
import { TransactionIntentListResponse } from '../models/TransactionIntentListResponse';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { TransactionIntentResponseAccount } from '../models/TransactionIntentResponseAccount';
import { TransactionIntentResponsePlayer } from '../models/TransactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from '../models/TransactionIntentResponsePolicy';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { TypedDataField } from '../models/TypedDataField';
import { UpdateContractRequest } from '../models/UpdateContractRequest';
import { UpdatePolicyRequest } from '../models/UpdatePolicyRequest';
import { UpdatePolicyRuleRequest } from '../models/UpdatePolicyRuleRequest';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiCancelTransferOwnershipRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApicancelTransferOwnership
     */
    id: string
    /**
     * 
     * @type CancelTransferOwnershipRequest
     * @memberof AccountsApicancelTransferOwnership
     */
    cancelTransferOwnershipRequest: CancelTransferOwnershipRequest
}

export interface AccountsApiCompleteRecoveryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApicompleteRecovery
     */
    id: string
    /**
     * 
     * @type CompleteRecoveryRequest
     * @memberof AccountsApicompleteRecovery
     */
    completeRecoveryRequest: CompleteRecoveryRequest
}

export interface AccountsApiCreateAccountRequest {
    /**
     * 
     * @type CreateAccountRequest
     * @memberof AccountsApicreateAccount
     */
    createAccountRequest: CreateAccountRequest
}

export interface AccountsApiGetAccountRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApigetAccount
     */
    id: string
    /**
     * whether to expand the response or not
     * @type Array&lt;&#39;transactionIntents&#39;&gt;
     * @memberof AccountsApigetAccount
     */
    expand?: Array<'transactionIntents'>
}

export interface AccountsApiGetAccountsRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApigetAccounts
     */
    player: string
    /**
     * 
     * @type number
     * @memberof AccountsApigetAccounts
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof AccountsApigetAccounts
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof AccountsApigetAccounts
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39;&gt;
     * @memberof AccountsApigetAccounts
     */
    expand?: Array<'transactionIntents'>
}

export interface AccountsApiRequestTransferOwnershipRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApirequestTransferOwnership
     */
    id: string
    /**
     * 
     * @type TransferOwnershipRequest
     * @memberof AccountsApirequestTransferOwnership
     */
    transferOwnershipRequest: TransferOwnershipRequest
}

export interface AccountsApiSignPayloadRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApisignPayload
     */
    id: string
    /**
     * 
     * @type SignPayloadRequest
     * @memberof AccountsApisignPayload
     */
    signPayloadRequest: SignPayloadRequest
}

export interface AccountsApiStartRecoveryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApistartRecovery
     */
    id: string
    /**
     * 
     * @type StartRecoveryRequest
     * @memberof AccountsApistartRecovery
     */
    startRecoveryRequest: StartRecoveryRequest
}

export interface AccountsApiSyncAccountRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof AccountsApisyncAccount
     */
    id: string
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request the ownership transfer of an account to a given address.
     * @param param the request object
     */
    public cancelTransferOwnership(param: AccountsApiCancelTransferOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.cancelTransferOwnership(param.id, param.cancelTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Complete a recovery process of a recoverable account.
     * @param param the request object
     */
    public completeRecovery(param: AccountsApiCompleteRecoveryRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.completeRecovery(param.id, param.completeRecoveryRequest,  options).toPromise();
    }

    /**
     * Creates an account object.
     * @param param the request object
     */
    public createAccount(param: AccountsApiCreateAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createAccount(param.createAccountRequest,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.getAccount(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param param the request object
     */
    public getAccounts(param: AccountsApiGetAccountsRequest, options?: Configuration): Promise<AccountListResponse> {
        return this.api.getAccounts(param.player, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * Request the ownership transfer of an account to a given address.
     * @param param the request object
     */
    public requestTransferOwnership(param: AccountsApiRequestTransferOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.requestTransferOwnership(param.id, param.transferOwnershipRequest,  options).toPromise();
    }

    /**
     * Sign a given payload
     * @param param the request object
     */
    public signPayload(param: AccountsApiSignPayloadRequest, options?: Configuration): Promise<SignPayloadResponse> {
        return this.api.signPayload(param.id, param.signPayloadRequest,  options).toPromise();
    }

    /**
     * Start a recovery process of a recoverable account.
     * @param param the request object
     */
    public startRecovery(param: AccountsApiStartRecoveryRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.startRecovery(param.id, param.startRecoveryRequest,  options).toPromise();
    }

    /**
     * Sync account state with the blockchain
     * @param param the request object
     */
    public syncAccount(param: AccountsApiSyncAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.syncAccount(param.id,  options).toPromise();
    }

}

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthenticationApilogin
     */
    loginRequest: LoginRequest
}

export interface AuthenticationApiSignupRequest {
    /**
     * 
     * @type SignupRequest
     * @memberof AuthenticationApisignup
     */
    signupRequest: SignupRequest
}

export interface AuthenticationApiVerifyAuthTokenRequest {
    /**
     * 
     * @type string
     * @memberof AuthenticationApiverifyAuthToken
     */
    token: string
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public login(param: AuthenticationApiLoginRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public signup(param: AuthenticationApiSignupRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.signup(param.signupRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public verifyAuthToken(param: AuthenticationApiVerifyAuthTokenRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.verifyAuthToken(param.token,  options).toPromise();
    }

}

import { ObservableConfigAuthenticationApi } from "./ObservableAPI";
import { ConfigAuthenticationApiRequestFactory, ConfigAuthenticationApiResponseProcessor} from "../apis/ConfigAuthenticationApi";

export interface ConfigAuthenticationApiEditProviderRequest {
    /**
     * 
     * @type ProviderRequest
     * @memberof ConfigAuthenticationApieditProvider
     */
    providerRequest: ProviderRequest
}

export class ObjectConfigAuthenticationApi {
    private api: ObservableConfigAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: ConfigAuthenticationApiRequestFactory, responseProcessor?: ConfigAuthenticationApiResponseProcessor) {
        this.api = new ObservableConfigAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Google OAuth. Add a google_client_id and a google_client_secret
     * @param param the request object
     */
    public editProvider(param: ConfigAuthenticationApiEditProviderRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.editProvider(param.providerRequest,  options).toPromise();
    }

}

import { ObservableContractsApi } from "./ObservableAPI";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";

export interface ContractsApiCreateContractRequest {
    /**
     * 
     * @type CreateContractRequest
     * @memberof ContractsApicreateContract
     */
    createContractRequest: CreateContractRequest
}

export interface ContractsApiDeleteContractRequest {
    /**
     * 
     * @type string
     * @memberof ContractsApideleteContract
     */
    id: string
}

export interface ContractsApiGetContractRequest {
    /**
     * Specifies the unique contract ID.
     * @type string
     * @memberof ContractsApigetContract
     */
    id: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * 
     * @type number
     * @memberof ContractsApigetContracts
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ContractsApigetContracts
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof ContractsApigetContracts
     */
    order?: SortOrder
    /**
     * 
     * @type string
     * @memberof ContractsApigetContracts
     */
    name?: string
    /**
     * 
     * @type boolean
     * @memberof ContractsApigetContracts
     */
    deleted?: boolean
    /**
     * 
     * @type number
     * @memberof ContractsApigetContracts
     */
    chainId?: number
    /**
     * 
     * @type string
     * @memberof ContractsApigetContracts
     */
    address?: string
}

export interface ContractsApiUpdateContractRequest {
    /**
     * 
     * @type string
     * @memberof ContractsApiupdateContract
     */
    id: string
    /**
     * 
     * @type UpdateContractRequest
     * @memberof ContractsApiupdateContract
     */
    updateContractRequest: UpdateContractRequest
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a contract object.
     * @param param the request object
     */
    public createContract(param: ContractsApiCreateContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.createContract(param.createContractRequest,  options).toPromise();
    }

    /**
     * Deletes a contract object.
     * @param param the request object
     */
    public deleteContract(param: ContractsApiDeleteContractRequest, options?: Configuration): Promise<ContractDeleteResponse> {
        return this.api.deleteContract(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.getContract(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<ContractListResponse> {
        return this.api.getContracts(param.limit, param.skip, param.order, param.name, param.deleted, param.chainId, param.address,  options).toPromise();
    }

    /**
     * Updates a contract object.
     * @param param the request object
     */
    public updateContract(param: ContractsApiUpdateContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.updateContract(param.id, param.updateContractRequest,  options).toPromise();
    }

}

import { ObservableGoogleAuthenticationApi } from "./ObservableAPI";
import { GoogleAuthenticationApiRequestFactory, GoogleAuthenticationApiResponseProcessor} from "../apis/GoogleAuthenticationApi";

export interface GoogleAuthenticationApiGetSigninUrlRequest {
}

export interface GoogleAuthenticationApiGetTokenRequest {
    /**
     * 
     * @type string
     * @memberof GoogleAuthenticationApigetToken
     */
    key: string
}

export class ObjectGoogleAuthenticationApi {
    private api: ObservableGoogleAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: GoogleAuthenticationApiRequestFactory, responseProcessor?: GoogleAuthenticationApiResponseProcessor) {
        this.api = new ObservableGoogleAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getSigninUrl(param: GoogleAuthenticationApiGetSigninUrlRequest = {}, options?: Configuration): Promise<GetSigninUrlResponse> {
        return this.api.getSigninUrl( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getToken(param: GoogleAuthenticationApiGetTokenRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.getToken(param.key,  options).toPromise();
    }

}

import { ObservableInventoryApi } from "./ObservableAPI";
import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";

export interface InventoryApiGetAccountCryptoCurrencyInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoryApigetAccountCryptoCurrencyInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetAccountCryptoCurrencyInventory
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetAccountCryptoCurrencyInventory
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof InventoryApigetAccountCryptoCurrencyInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoryApigetAccountCryptoCurrencyInventory
     */
    contractId?: Array<string>
}

export interface InventoryApiGetAccountInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoryApigetAccountInventory
     */
    id: string
}

export interface InventoryApiGetAccountNativeInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoryApigetAccountNativeInventory
     */
    id: string
}

export interface InventoryApiGetAccountNftInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoryApigetAccountNftInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetAccountNftInventory
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetAccountNftInventory
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof InventoryApigetAccountNftInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoryApigetAccountNftInventory
     */
    contractId?: Array<string>
}

export interface InventoryApiGetPlayerCryptoCurrencyInventoryRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    chainId: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoryApigetPlayerCryptoCurrencyInventory
     */
    contractId?: Array<string>
}

export interface InventoryApiGetPlayerInventoryRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof InventoryApigetPlayerInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerInventory
     */
    chainId: number
}

export interface InventoryApiGetPlayerNativeInventoryRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof InventoryApigetPlayerNativeInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerNativeInventory
     */
    chainId: number
}

export interface InventoryApiGetPlayerNftInventoryRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof InventoryApigetPlayerNftInventory
     */
    id: string
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerNftInventory
     */
    chainId: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerNftInventory
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InventoryApigetPlayerNftInventory
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof InventoryApigetPlayerNftInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoryApigetPlayerNftInventory
     */
    contractId?: Array<string>
}

export class ObjectInventoryApi {
    private api: ObservableInventoryApi

    public constructor(configuration: Configuration, requestFactory?: InventoryApiRequestFactory, responseProcessor?: InventoryApiResponseProcessor) {
        this.api = new ObservableInventoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the cryptocurrency assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccountCryptoCurrencyInventory(param: InventoryApiGetAccountCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountCryptoCurrencyInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccountInventory(param: InventoryApiGetAccountInventoryRequest, options?: Configuration): Promise<ObsoleteInventoryResponse> {
        return this.api.getAccountInventory(param.id,  options).toPromise();
    }

    /**
     * Retrieves the native asset of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccountNativeInventory(param: InventoryApiGetAccountNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getAccountNativeInventory(param.id,  options).toPromise();
    }

    /**
     * Retrieves the NFT assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param param the request object
     */
    public getAccountNftInventory(param: InventoryApiGetAccountNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountNftInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Retrieves the cruptocurrency assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayerCryptoCurrencyInventory(param: InventoryApiGetPlayerCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerCryptoCurrencyInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayerInventory(param: InventoryApiGetPlayerInventoryRequest, options?: Configuration): Promise<ObsoleteInventoryResponse> {
        return this.api.getPlayerInventory(param.id, param.chainId,  options).toPromise();
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayerNativeInventory(param: InventoryApiGetPlayerNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getPlayerNativeInventory(param.id, param.chainId,  options).toPromise();
    }

    /**
     * Retrieves the NFT assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayerNftInventory(param: InventoryApiGetPlayerNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerNftInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

}

import { ObservablePlayersApi } from "./ObservableAPI";
import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";

export interface PlayersApiCancelTransferAccountOwnershipRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApicancelTransferAccountOwnership
     */
    id: string
    /**
     * 
     * @type PlayerCancelTransferOwnershipRequest
     * @memberof PlayersApicancelTransferAccountOwnership
     */
    playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest
}

export interface PlayersApiCreatePlayerRequest {
    /**
     * 
     * @type CreatePlayerRequest
     * @memberof PlayersApicreatePlayer
     */
    createPlayerRequest: CreatePlayerRequest
}

export interface PlayersApiCreatePlayerAccountRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApicreatePlayerAccount
     */
    id: string
    /**
     * 
     * @type CreatePlayerAccountRequest
     * @memberof PlayersApicreatePlayerAccount
     */
    createPlayerAccountRequest: CreatePlayerAccountRequest
}

export interface PlayersApiCreatePlayerSessionRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApicreatePlayerSession
     */
    id: string
    /**
     * 
     * @type CreatePlayerSessionRequest
     * @memberof PlayersApicreatePlayerSession
     */
    createPlayerSessionRequest: CreatePlayerSessionRequest
}

export interface PlayersApiGetPlayerRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApigetPlayer
     */
    id: string
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39; | &#39;accounts&#39;&gt;
     * @memberof PlayersApigetPlayer
     */
    expand?: Array<'transactionIntents' | 'accounts'>
}

export interface PlayersApiGetPlayerAccountsRequest {
    /**
     * 
     * @type string
     * @memberof PlayersApigetPlayerAccounts
     */
    id: string
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39;&gt;
     * @memberof PlayersApigetPlayerAccounts
     */
    expand?: Array<'transactionIntents'>
}

export interface PlayersApiGetPlayersRequest {
    /**
     * 
     * @type number
     * @memberof PlayersApigetPlayers
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PlayersApigetPlayers
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof PlayersApigetPlayers
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39; | &#39;accounts&#39;&gt;
     * @memberof PlayersApigetPlayers
     */
    expand?: Array<'transactionIntents' | 'accounts'>
    /**
     * 
     * @type string
     * @memberof PlayersApigetPlayers
     */
    name?: string
}

export interface PlayersApiRequestTransferAccountOwnershipRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApirequestTransferAccountOwnership
     */
    id: string
    /**
     * 
     * @type PlayerTransferOwnershipRequest
     * @memberof PlayersApirequestTransferAccountOwnership
     */
    playerTransferOwnershipRequest: PlayerTransferOwnershipRequest
}

export interface PlayersApiRevokePlayerSessionRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApirevokePlayerSession
     */
    id: string
    /**
     * 
     * @type RevokeSessionPlayerRequest
     * @memberof PlayersApirevokePlayerSession
     */
    revokeSessionPlayerRequest: RevokeSessionPlayerRequest
}

export interface PlayersApiUpdatePlayerRequest {
    /**
     * Specifies the unique player ID.
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    id: string
    /**
     * 
     * @type PlayerRequest
     * @memberof PlayersApiupdatePlayer
     */
    playerRequest: PlayerRequest
}

export class ObjectPlayersApi {
    private api: ObservablePlayersApi

    public constructor(configuration: Configuration, requestFactory?: PlayersApiRequestFactory, responseProcessor?: PlayersApiResponseProcessor) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request the ownership transfer of an account to a given address.
     * @param param the request object
     */
    public cancelTransferAccountOwnership(param: PlayersApiCancelTransferAccountOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.cancelTransferAccountOwnership(param.id, param.playerCancelTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Creates a player object.
     * @param param the request object
     */
    public createPlayer(param: PlayersApiCreatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.createPlayer(param.createPlayerRequest,  options).toPromise();
    }

    /**
     * Creates an account object for an existing player.
     * @param param the request object
     */
    public createPlayerAccount(param: PlayersApiCreatePlayerAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createPlayerAccount(param.id, param.createPlayerAccountRequest,  options).toPromise();
    }

    /**
     * Creates a session object for the given player.
     * @param param the request object
     */
    public createPlayerSession(param: PlayersApiCreatePlayerSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.createPlayerSession(param.id, param.createPlayerSessionRequest,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param param the request object
     */
    public getPlayer(param: PlayersApiGetPlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.getPlayer(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param param the request object
     */
    public getPlayerAccounts(param: PlayersApiGetPlayerAccountsRequest, options?: Configuration): Promise<AccountListResponse> {
        return this.api.getPlayerAccounts(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param param the request object
     */
    public getPlayers(param: PlayersApiGetPlayersRequest = {}, options?: Configuration): Promise<PlayerListResponse> {
        return this.api.getPlayers(param.limit, param.skip, param.order, param.expand, param.name,  options).toPromise();
    }

    /**
     * Transfer ownership of an account to an address.
     * @param param the request object
     */
    public requestTransferAccountOwnership(param: PlayersApiRequestTransferAccountOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.requestTransferAccountOwnership(param.id, param.playerTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Creates a session object for the given player.
     * @param param the request object
     */
    public revokePlayerSession(param: PlayersApiRevokePlayerSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.revokePlayerSession(param.id, param.revokeSessionPlayerRequest,  options).toPromise();
    }

    /**
     * Updates a player object.
     * @param param the request object
     */
    public updatePlayer(param: PlayersApiUpdatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.updatePlayer(param.id, param.playerRequest,  options).toPromise();
    }

}

import { ObservablePlayersAuthenticationApi } from "./ObservableAPI";
import { PlayersAuthenticationApiRequestFactory, PlayersAuthenticationApiResponseProcessor} from "../apis/PlayersAuthenticationApi";

export interface PlayersAuthenticationApiGetAuthenticatedPlayersRequest {
    /**
     * 
     * @type number
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    order?: SortOrder
    /**
     * 
     * @type string
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    email?: string
}

export class ObjectPlayersAuthenticationApi {
    private api: ObservablePlayersAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: PlayersAuthenticationApiRequestFactory, responseProcessor?: PlayersAuthenticationApiResponseProcessor) {
        this.api = new ObservablePlayersAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getAuthenticatedPlayers(param: PlayersAuthenticationApiGetAuthenticatedPlayersRequest = {}, options?: Configuration): Promise<AuthPlayerListResponse> {
        return this.api.getAuthenticatedPlayers(param.limit, param.skip, param.order, param.email,  options).toPromise();
    }

}

import { ObservablePoliciesApi } from "./ObservableAPI";
import { PoliciesApiRequestFactory, PoliciesApiResponseProcessor} from "../apis/PoliciesApi";

export interface PoliciesApiCreatePolicyRequest {
    /**
     * 
     * @type CreatePolicyRequest
     * @memberof PoliciesApicreatePolicy
     */
    createPolicyRequest: CreatePolicyRequest
}

export interface PoliciesApiCreatePolicyAllowFunctionRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    id: string
    /**
     * 
     * @type CreatePolicyAllowFunctionRequest
     * @memberof PoliciesApicreatePolicyAllowFunction
     */
    createPolicyAllowFunctionRequest: CreatePolicyAllowFunctionRequest
}

export interface PoliciesApiDeletePolicyRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApideletePolicy
     */
    id: string
}

export interface PoliciesApiGetPoliciesRequest {
    /**
     * 
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof PoliciesApigetPolicies
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39; | &#39;policyRules&#39;&gt;
     * @memberof PoliciesApigetPolicies
     */
    expand?: Array<'transactionIntents' | 'policyRules'>
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicies
     */
    name?: string
    /**
     * 
     * @type boolean
     * @memberof PoliciesApigetPolicies
     */
    deleted?: boolean
    /**
     * 
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    chainId?: number
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
     * @type Array&lt;&#39;transactionIntents&#39; | &#39;policyRules&#39;&gt;
     * @memberof PoliciesApigetPolicy
     */
    expand?: Array<'transactionIntents' | 'policyRules'>
}

export interface PoliciesApiGetPolicyAllowFunctionsRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    id: string
    /**
     * 
     * @type Array&lt;&#39;contract&#39;&gt;
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    expand?: Array<'contract'>
}

export interface PoliciesApiGetPolicyTotalGasUsageRequest {
    /**
     * 
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    id: string
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
     * @type UpdatePolicyRequest
     * @memberof PoliciesApiupdatePolicy
     */
    updatePolicyRequest: UpdatePolicyRequest
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
    policyRule: string
    /**
     * 
     * @type UpdatePolicyRuleRequest
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    updatePolicyRuleRequest: UpdatePolicyRuleRequest
}

export class ObjectPoliciesApi {
    private api: ObservablePoliciesApi

    public constructor(configuration: Configuration, requestFactory?: PoliciesApiRequestFactory, responseProcessor?: PoliciesApiResponseProcessor) {
        this.api = new ObservablePoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a policy object.
     * @param param the request object
     */
    public createPolicy(param: PoliciesApiCreatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.createPolicy(param.createPolicyRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createPolicyAllowFunction(param: PoliciesApiCreatePolicyAllowFunctionRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.createPolicyAllowFunction(param.id, param.createPolicyAllowFunctionRequest,  options).toPromise();
    }

    /**
     * Deletes a policy object.
     * @param param the request object
     */
    public deletePolicy(param: PoliciesApiDeletePolicyRequest, options?: Configuration): Promise<PolicyDeleteResponse> {
        return this.api.deletePolicy(param.id,  options).toPromise();
    }

    /**
     * Gets all policy objects for a given project.
     * @param param the request object
     */
    public getPolicies(param: PoliciesApiGetPoliciesRequest = {}, options?: Configuration): Promise<PolicyListResponse> {
        return this.api.getPolicies(param.limit, param.skip, param.order, param.expand, param.name, param.deleted, param.chainId,  options).toPromise();
    }

    /**
     * Gets a policy object for a given project.
     * @param param the request object
     */
    public getPolicy(param: PoliciesApiGetPolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.getPolicy(param.id, param.expand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicyAllowFunctions(param: PoliciesApiGetPolicyAllowFunctionsRequest, options?: Configuration): Promise<PolicyRuleListResponse> {
        return this.api.getPolicyAllowFunctions(param.id, param.expand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPolicyTotalGasUsage(param: PoliciesApiGetPolicyTotalGasUsageRequest, options?: Configuration): Promise<GasReport> {
        return this.api.getPolicyTotalGasUsage(param.id,  options).toPromise();
    }

    /**
     * Updates a policy object.
     * @param param the request object
     */
    public updatePolicy(param: PoliciesApiUpdatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.updatePolicy(param.id, param.updatePolicyRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updatePolicyAllowFunction(param: PoliciesApiUpdatePolicyAllowFunctionRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.updatePolicyAllowFunction(param.policy, param.policyRule, param.updatePolicyRuleRequest,  options).toPromise();
    }

}

import { ObservablePolicyRulesApi } from "./ObservableAPI";
import { PolicyRulesApiRequestFactory, PolicyRulesApiResponseProcessor} from "../apis/PolicyRulesApi";

export interface PolicyRulesApiCreatePolicyRulesRequest {
    /**
     * 
     * @type CreatePolicyRuleRequest
     * @memberof PolicyRulesApicreatePolicyRules
     */
    createPolicyRuleRequest: CreatePolicyRuleRequest
}

export interface PolicyRulesApiDeletePolicyRulesRequest {
    /**
     * 
     * @type string
     * @memberof PolicyRulesApideletePolicyRules
     */
    id: string
}

export interface PolicyRulesApiGetPolicyRulesRequest {
    /**
     * 
     * @type string
     * @memberof PolicyRulesApigetPolicyRules
     */
    policy: string
    /**
     * 
     * @type number
     * @memberof PolicyRulesApigetPolicyRules
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PolicyRulesApigetPolicyRules
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof PolicyRulesApigetPolicyRules
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;contract&#39;&gt;
     * @memberof PolicyRulesApigetPolicyRules
     */
    expand?: Array<'contract'>
}

export interface PolicyRulesApiUpdatePolicyRulesRequest {
    /**
     * Specifies the unique allow function ID.
     * @type string
     * @memberof PolicyRulesApiupdatePolicyRules
     */
    id: string
    /**
     * 
     * @type UpdatePolicyRuleRequest
     * @memberof PolicyRulesApiupdatePolicyRules
     */
    updatePolicyRuleRequest: UpdatePolicyRuleRequest
}

export class ObjectPolicyRulesApi {
    private api: ObservablePolicyRulesApi

    public constructor(configuration: Configuration, requestFactory?: PolicyRulesApiRequestFactory, responseProcessor?: PolicyRulesApiResponseProcessor) {
        this.api = new ObservablePolicyRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an allow function object.
     * @param param the request object
     */
    public createPolicyRules(param: PolicyRulesApiCreatePolicyRulesRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.createPolicyRules(param.createPolicyRuleRequest,  options).toPromise();
    }

    /**
     * Deletes an polciy rule (allow_functions) object.
     * @param param the request object
     */
    public deletePolicyRules(param: PolicyRulesApiDeletePolicyRulesRequest, options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        return this.api.deletePolicyRules(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param param the request object
     */
    public getPolicyRules(param: PolicyRulesApiGetPolicyRulesRequest, options?: Configuration): Promise<PolicyRuleListResponse> {
        return this.api.getPolicyRules(param.policy, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * Updates an allow functions object.
     * @param param the request object
     */
    public updatePolicyRules(param: PolicyRulesApiUpdatePolicyRulesRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.updatePolicyRules(param.id, param.updatePolicyRuleRequest,  options).toPromise();
    }

}

import { ObservableSessionsApi } from "./ObservableAPI";
import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";

export interface SessionsApiCreateSessionRequest {
    /**
     * 
     * @type CreateSessionRequest
     * @memberof SessionsApicreateSession
     */
    createSessionRequest: CreateSessionRequest
}

export interface SessionsApiGetPlayerSessionsRequest {
    /**
     * 
     * @type string
     * @memberof SessionsApigetPlayerSessions
     */
    player: string
    /**
     * 
     * @type number
     * @memberof SessionsApigetPlayerSessions
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof SessionsApigetPlayerSessions
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof SessionsApigetPlayerSessions
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39;&gt;
     * @memberof SessionsApigetPlayerSessions
     */
    expand?: Array<'transactionIntents'>
    /**
     * 
     * @type string
     * @memberof SessionsApigetPlayerSessions
     */
    address?: string
}

export interface SessionsApiGetSessionRequest {
    /**
     * 
     * @type string
     * @memberof SessionsApigetSession
     */
    id: string
    /**
     * 
     * @type Array&lt;&#39;transactionIntents&#39;&gt;
     * @memberof SessionsApigetSession
     */
    expand?: Array<'transactionIntents'>
}

export interface SessionsApiRevokeSessionRequest {
    /**
     * 
     * @type RevokeSessionRequest
     * @memberof SessionsApirevokeSession
     */
    revokeSessionRequest: RevokeSessionRequest
}

export interface SessionsApiSignatureSessionRequest {
    /**
     * 
     * @type string
     * @memberof SessionsApisignatureSession
     */
    id: string
    /**
     * 
     * @type SignatureRequest
     * @memberof SessionsApisignatureSession
     */
    signatureRequest: SignatureRequest
}

export class ObjectSessionsApi {
    private api: ObservableSessionsApi

    public constructor(configuration: Configuration, requestFactory?: SessionsApiRequestFactory, responseProcessor?: SessionsApiResponseProcessor) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates the session for the account.
     * @param param the request object
     */
    public createSession(param: SessionsApiCreateSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.createSession(param.createSessionRequest,  options).toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param param the request object
     */
    public getPlayerSessions(param: SessionsApiGetPlayerSessionsRequest, options?: Configuration): Promise<SessionListResponse> {
        return this.api.getPlayerSessions(param.player, param.limit, param.skip, param.order, param.expand, param.address,  options).toPromise();
    }

    /**
     * Returns a player session by session id
     * @param param the request object
     */
    public getSession(param: SessionsApiGetSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.getSession(param.id, param.expand,  options).toPromise();
    }

    /**
     * Revokes the session for the account.
     * @param param the request object
     */
    public revokeSession(param: SessionsApiRevokeSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.revokeSession(param.revokeSessionRequest,  options).toPromise();
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param param the request object
     */
    public signatureSession(param: SessionsApiSignatureSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.signatureSession(param.id, param.signatureRequest,  options).toPromise();
    }

}

import { ObservableTransactionIntentsApi } from "./ObservableAPI";
import { TransactionIntentsApiRequestFactory, TransactionIntentsApiResponseProcessor} from "../apis/TransactionIntentsApi";

export interface TransactionIntentsApiCreateTransactionIntentRequest {
    /**
     * 
     * @type CreateTransactionIntentRequest
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    createTransactionIntentRequest: CreateTransactionIntentRequest
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
     * @type Array&lt;&#39;nextAction&#39; | &#39;policy&#39; | &#39;player&#39; | &#39;account&#39;&gt;
     * @memberof TransactionIntentsApigetTransactionIntent
     */
    expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>
}

export interface TransactionIntentsApiGetTransactionIntentsRequest {
    /**
     * 
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    skip?: number
    /**
     * 
     * @type SortOrder
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;&#39;nextAction&#39; | &#39;policy&#39; | &#39;player&#39; | &#39;account&#39;&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>
    /**
     * 
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    chainId?: number
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    accountId?: Array<string>
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    playerId?: Array<string>
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    policyId?: Array<string>
}

export interface TransactionIntentsApiSignatureRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApisignature
     */
    id: string
    /**
     * 
     * @type SignatureRequest
     * @memberof TransactionIntentsApisignature
     */
    signatureRequest: SignatureRequest
}

export interface TransactionIntentsApiUpdateTransactionIntentResponseRequest {
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApiupdateTransactionIntentResponse
     */
    id: string
}

export interface TransactionIntentsApiUpdateTransactionIntentsResponseRequest {
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
        return this.api.createTransactionIntent(param.createTransactionIntentRequest,  options).toPromise();
    }

    /**
     * Retrieves a transaction intent object.
     * @param param the request object
     */
    public getTransactionIntent(param: TransactionIntentsApiGetTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.getTransactionIntent(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param param the request object
     */
    public getTransactionIntents(param: TransactionIntentsApiGetTransactionIntentsRequest = {}, options?: Configuration): Promise<TransactionIntentListResponse> {
        return this.api.getTransactionIntents(param.limit, param.skip, param.order, param.expand, param.chainId, param.accountId, param.playerId, param.policyId,  options).toPromise();
    }

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param param the request object
     */
    public signature(param: TransactionIntentsApiSignatureRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.signature(param.id, param.signatureRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTransactionIntentResponse(param: TransactionIntentsApiUpdateTransactionIntentResponseRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.updateTransactionIntentResponse(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTransactionIntentsResponse(param: TransactionIntentsApiUpdateTransactionIntentsResponseRequest = {}, options?: Configuration): Promise<TransactionIntentListResponse> {
        return this.api.updateTransactionIntentsResponse( options).toPromise();
    }

}
