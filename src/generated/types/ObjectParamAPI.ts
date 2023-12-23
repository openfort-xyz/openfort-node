import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { AccelbyteOAuthConfig } from '../models/AccelbyteOAuthConfig';
import { Account } from '../models/Account';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { AccountResponse } from '../models/AccountResponse';
import { AccountResponseExpandable } from '../models/AccountResponseExpandable';
import { ApiAuthorizedNetworkListResponse } from '../models/ApiAuthorizedNetworkListResponse';
import { ApiAuthorizedNetworkResponse } from '../models/ApiAuthorizedNetworkResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApiKeyType } from '../models/ApiKeyType';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthPlayerListQueries } from '../models/AuthPlayerListQueries';
import { AuthPlayerListResponse } from '../models/AuthPlayerListResponse';
import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { AuthPlayerResponsePlayer } from '../models/AuthPlayerResponsePlayer';
import { AuthResponse } from '../models/AuthResponse';
import { AuthenticatedPlayerResponse } from '../models/AuthenticatedPlayerResponse';
import { AuthorizeWithOAuthToken200Response } from '../models/AuthorizeWithOAuthToken200Response';
import { BalanceResponse } from '../models/BalanceResponse';
import { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest';
import { ChargeCustomTokenPolicyStrategy } from '../models/ChargeCustomTokenPolicyStrategy';
import { CheckoutRequest } from '../models/CheckoutRequest';
import { CheckoutResponse } from '../models/CheckoutResponse';
import { CompleteRecoveryRequest } from '../models/CompleteRecoveryRequest';
import { ContractDeleteResponse } from '../models/ContractDeleteResponse';
import { ContractListQueries } from '../models/ContractListQueries';
import { ContractListResponse } from '../models/ContractListResponse';
import { ContractPolicyRuleResponse } from '../models/ContractPolicyRuleResponse';
import { ContractPolicyRuleResponseContract } from '../models/ContractPolicyRuleResponseContract';
import { ContractReadQueries } from '../models/ContractReadQueries';
import { ContractReadResponse } from '../models/ContractReadResponse';
import { ContractResponse } from '../models/ContractResponse';
import { CountPerIntervalLimitPolicyRuleResponse } from '../models/CountPerIntervalLimitPolicyRuleResponse';
import { CreateAccountRequest } from '../models/CreateAccountRequest';
import { CreateApiAuthorizedNetworkRequest } from '../models/CreateApiAuthorizedNetworkRequest';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreatePlayerAccountRequest } from '../models/CreatePlayerAccountRequest';
import { CreatePlayerSessionRequest } from '../models/CreatePlayerSessionRequest';
import { CreatePolicyAllowFunctionRequest } from '../models/CreatePolicyAllowFunctionRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest';
import { CreateProjectRequest } from '../models/CreateProjectRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { CreateWeb3ConnectionRequest } from '../models/CreateWeb3ConnectionRequest';
import { Currency } from '../models/Currency';
import { DataAccountTypes } from '../models/DataAccountTypes';
import { DeployRequest } from '../models/DeployRequest';
import { DeveloperAccountCreateRequest } from '../models/DeveloperAccountCreateRequest';
import { DeveloperAccountDeleteResponse } from '../models/DeveloperAccountDeleteResponse';
import { DeveloperAccountGetMessageResponse } from '../models/DeveloperAccountGetMessageResponse';
import { DeveloperAccountListResponse } from '../models/DeveloperAccountListResponse';
import { DeveloperAccountResponse } from '../models/DeveloperAccountResponse';
import { DomainData } from '../models/DomainData';
import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeDEVELOPERACCOUNT } from '../models/EntityTypeDEVELOPERACCOUNT';
import { EntityTypeINVENTORY } from '../models/EntityTypeINVENTORY';
import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { EntityTypePROJECT } from '../models/EntityTypePROJECT';
import { EntityTypeREADCONTRACT } from '../models/EntityTypeREADCONTRACT';
import { EntityTypeSESSION } from '../models/EntityTypeSESSION';
import { EntityTypeSIGNATURE } from '../models/EntityTypeSIGNATURE';
import { EntityTypeTRANSACTIONINTENT } from '../models/EntityTypeTRANSACTIONINTENT';
import { EntityTypeUSER } from '../models/EntityTypeUSER';
import { EntityTypeWEB3ACTION } from '../models/EntityTypeWEB3ACTION';
import { EntityTypeWEB3CONNECTION } from '../models/EntityTypeWEB3CONNECTION';
import { ErrorTypeINVALIDREQUESTERROR } from '../models/ErrorTypeINVALIDREQUESTERROR';
import { EstimateTransactionIntentGasResult } from '../models/EstimateTransactionIntentGasResult';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { FirebaseOAuthConfig } from '../models/FirebaseOAuthConfig';
import { FixedRateTokenPolicyStrategy } from '../models/FixedRateTokenPolicyStrategy';
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { GasReport } from '../models/GasReport';
import { GasReportDataInner } from '../models/GasReportDataInner';
import { GasReportDataInnerPeriod } from '../models/GasReportDataInnerPeriod';
import { GasReportDataInnerTransactionIntentsInner } from '../models/GasReportDataInnerTransactionIntentsInner';
import { GetSigninUrlResponse } from '../models/GetSigninUrlResponse';
import { GoogleOAuthConfig } from '../models/GoogleOAuthConfig';
import { Interaction } from '../models/Interaction';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { InventoryListResponse } from '../models/InventoryListResponse';
import { InventoryResponse } from '../models/InventoryResponse';
import { Log } from '../models/Log';
import { LoginRequest } from '../models/LoginRequest';
import { LootLockerOAuthConfig } from '../models/LootLockerOAuthConfig';
import { Money } from '../models/Money';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { OAuthConfig } from '../models/OAuthConfig';
import { OAuthConfigListResponse } from '../models/OAuthConfigListResponse';
import { OAuthProvider } from '../models/OAuthProvider';
import { OAuthProviderACCELBYTE } from '../models/OAuthProviderACCELBYTE';
import { OAuthProviderFIREBASE } from '../models/OAuthProviderFIREBASE';
import { OAuthProviderGOOGLE } from '../models/OAuthProviderGOOGLE';
import { OAuthProviderLOOTLOCKER } from '../models/OAuthProviderLOOTLOCKER';
import { OAuthProviderPLAYFAB } from '../models/OAuthProviderPLAYFAB';
import { OAuthRequest } from '../models/OAuthRequest';
import { ObsoleteAssetInventory } from '../models/ObsoleteAssetInventory';
import { ObsoleteAssetType } from '../models/ObsoleteAssetType';
import { ObsoleteInventoryResponse } from '../models/ObsoleteInventoryResponse';
import { PayForUserPolicyStrategy } from '../models/PayForUserPolicyStrategy';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { PlayFabOAuthConfig } from '../models/PlayFabOAuthConfig';
import { Player } from '../models/Player';
import { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest';
import { PlayerCreateRequest } from '../models/PlayerCreateRequest';
import { PlayerDeleteResponse } from '../models/PlayerDeleteResponse';
import { PlayerInventoryListQueries } from '../models/PlayerInventoryListQueries';
import { PlayerInventoryQueries } from '../models/PlayerInventoryQueries';
import { PlayerListQueries } from '../models/PlayerListQueries';
import { PlayerListResponse } from '../models/PlayerListResponse';
import { PlayerMetadataValue } from '../models/PlayerMetadataValue';
import { PlayerResponse } from '../models/PlayerResponse';
import { PlayerResponseAccountsInner } from '../models/PlayerResponseAccountsInner';
import { PlayerResponseExpandable } from '../models/PlayerResponseExpandable';
import { PlayerResponseTransactionIntentsInner } from '../models/PlayerResponseTransactionIntentsInner';
import { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest';
import { PlayerUpdateRequest } from '../models/PlayerUpdateRequest';
import { Policy } from '../models/Policy';
import { PolicyDeleteResponse } from '../models/PolicyDeleteResponse';
import { PolicyListQueries } from '../models/PolicyListQueries';
import { PolicyListResponse } from '../models/PolicyListResponse';
import { PolicyRateLimit } from '../models/PolicyRateLimit';
import { PolicyRateLimitCOUNTPERINTERVAL } from '../models/PolicyRateLimitCOUNTPERINTERVAL';
import { PolicyRateLimitGASPERINTERVAL } from '../models/PolicyRateLimitGASPERINTERVAL';
import { PolicyRateLimitGASPERTRANSACTION } from '../models/PolicyRateLimitGASPERTRANSACTION';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyResponseExpandable } from '../models/PolicyResponseExpandable';
import { PolicyResponsePolicyRulesInner } from '../models/PolicyResponsePolicyRulesInner';
import { PolicyRuleDeleteResponse } from '../models/PolicyRuleDeleteResponse';
import { PolicyRuleListQueries } from '../models/PolicyRuleListQueries';
import { PolicyRuleListResponse } from '../models/PolicyRuleListResponse';
import { PolicyRuleResponse } from '../models/PolicyRuleResponse';
import { PolicyRuleType } from '../models/PolicyRuleType';
import { PolicyRuleTypeACCOUNT } from '../models/PolicyRuleTypeACCOUNT';
import { PolicyRuleTypeCONTRACT } from '../models/PolicyRuleTypeCONTRACT';
import { PolicyRuleTypeRATELIMIT } from '../models/PolicyRuleTypeRATELIMIT';
import { PolicyStrategy } from '../models/PolicyStrategy';
import { PolicyStrategyRequest } from '../models/PolicyStrategyRequest';
import { PrismaInputJsonValue } from '../models/PrismaInputJsonValue';
import { PrivateKeyPolicy } from '../models/PrivateKeyPolicy';
import { ProjectListResponse } from '../models/ProjectListResponse';
import { ProjectLogs } from '../models/ProjectLogs';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectStatsRequest } from '../models/ProjectStatsRequest';
import { ProjectStatsResponse } from '../models/ProjectStatsResponse';
import { ProjectWebhookRequest } from '../models/ProjectWebhookRequest';
import { RegisterPlayerEncryptedKeyRequest } from '../models/RegisterPlayerEncryptedKeyRequest';
import { RegisterPlayerEncryptedKeyResponse } from '../models/RegisterPlayerEncryptedKeyResponse';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RetrievePlayerEncryptedKeyResponse } from '../models/RetrievePlayerEncryptedKeyResponse';
import { RevokeSessionPlayerRequest } from '../models/RevokeSessionPlayerRequest';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SessionListQueries } from '../models/SessionListQueries';
import { SessionListResponse } from '../models/SessionListResponse';
import { SessionResponse } from '../models/SessionResponse';
import { SessionResponseExpandable } from '../models/SessionResponseExpandable';
import { SettingsWebhookUpdateRequest } from '../models/SettingsWebhookUpdateRequest';
import { SignPayloadRequest } from '../models/SignPayloadRequest';
import { SignPayloadResponse } from '../models/SignPayloadResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignupRequest } from '../models/SignupRequest';
import { SortOrder } from '../models/SortOrder';
import { SponsorSchema } from '../models/SponsorSchema';
import { SponsorSchemaCHARGECUSTOMTOKENS } from '../models/SponsorSchemaCHARGECUSTOMTOKENS';
import { SponsorSchemaFIXEDRATE } from '../models/SponsorSchemaFIXEDRATE';
import { SponsorSchemaPAYFORUSER } from '../models/SponsorSchemaPAYFORUSER';
import { StartRecoveryRequest } from '../models/StartRecoveryRequest';
import { Stat } from '../models/Stat';
import { SubmitWeb3ActionRequest } from '../models/SubmitWeb3ActionRequest';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { TransactionIntent } from '../models/TransactionIntent';
import { TransactionIntentListQueries } from '../models/TransactionIntentListQueries';
import { TransactionIntentListResponse } from '../models/TransactionIntentListResponse';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { TransactionIntentResponseAccount } from '../models/TransactionIntentResponseAccount';
import { TransactionIntentResponseExpandable } from '../models/TransactionIntentResponseExpandable';
import { TransactionIntentResponsePlayer } from '../models/TransactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from '../models/TransactionIntentResponsePolicy';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { TypedDataField } from '../models/TypedDataField';
import { UpdateContractRequest } from '../models/UpdateContractRequest';
import { UpdatePolicyRequest } from '../models/UpdatePolicyRequest';
import { UpdatePolicyRuleRequest } from '../models/UpdatePolicyRuleRequest';
import { UpdateProjectApiKeyRequest } from '../models/UpdateProjectApiKeyRequest';
import { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import { UserProjectCreateRequest } from '../models/UserProjectCreateRequest';
import { UserProjectCreateRequestRole } from '../models/UserProjectCreateRequestRole';
import { UserProjectDeleteResponse } from '../models/UserProjectDeleteResponse';
import { UserProjectListResponse } from '../models/UserProjectListResponse';
import { UserProjectResponse } from '../models/UserProjectResponse';
import { UserProjectRole } from '../models/UserProjectRole';
import { UserProjectRoleADMIN } from '../models/UserProjectRoleADMIN';
import { UserProjectRoleMEMBER } from '../models/UserProjectRoleMEMBER';
import { UserProjectUpdateRequest } from '../models/UserProjectUpdateRequest';
import { Web3ActionListResponse } from '../models/Web3ActionListResponse';
import { Web3ActionResponse } from '../models/Web3ActionResponse';
import { Web3ActionStatusEnum } from '../models/Web3ActionStatusEnum';
import { Web3ConnectionListQueries } from '../models/Web3ConnectionListQueries';
import { Web3ConnectionListResponse } from '../models/Web3ConnectionListResponse';
import { Web3ConnectionResponse } from '../models/Web3ConnectionResponse';
import { Web3ConnectionResponseExpandable } from '../models/Web3ConnectionResponseExpandable';
import { Web3ConnectionResponsePlayer } from '../models/Web3ConnectionResponsePlayer';
import { WebhookResponse } from '../models/WebhookResponse';

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
     * Specifies the unique account ID (starts with acc_).
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

export interface AccountsApiDeployAccountRequest {
    /**
     * Specifies the unique account ID (starts with acc_).
     * @type string
     * @memberof AccountsApideployAccount
     */
    id: string
    /**
     * 
     * @type DeployRequest
     * @memberof AccountsApideployAccount
     */
    deployRequest: DeployRequest
}

export interface AccountsApiGetAccountRequest {
    /**
     * Specifies the unique account ID (starts with acc_).
     * @type string
     * @memberof AccountsApigetAccount
     */
    id: string
    /**
     * 
     * @type Array&lt;AccountResponseExpandable&gt;
     * @memberof AccountsApigetAccount
     */
    expand?: Array<AccountResponseExpandable>
}

export interface AccountsApiGetAccountsRequest {
    /**
     * Specifies the unique player ID (starts with pla_)
     * @type string
     * @memberof AccountsApigetAccounts
     */
    player: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof AccountsApigetAccounts
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof AccountsApigetAccounts
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof AccountsApigetAccounts
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;AccountResponseExpandable&gt;
     * @memberof AccountsApigetAccounts
     */
    expand?: Array<AccountResponseExpandable>
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
     * Specifies the unique account ID (starts with acc_).
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
     * Specifies the unique account ID (starts with acc_).
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
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of an account.
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
     * This endpoint allows you to add a new account to your Openfort player. Only one account can be active per chain per player.
     * Create an account object.
     * @param param the request object
     */
    public createAccount(param: AccountsApiCreateAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createAccount(param.createAccountRequest,  options).toPromise();
    }

    /**
     * This endpoint can be used to deploy an account that was counterfactually generated.
     * Deploy an account.
     * @param param the request object
     */
    public deployAccount(param: AccountsApiDeployAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.deployAccount(param.id, param.deployRequest,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * Get existing account.
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.getAccount(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. By default, a maximum of ten accounts are shown per page.
     * List accounts of a player.
     * @param param the request object
     */
    public getAccounts(param: AccountsApiGetAccountsRequest, options?: Configuration): Promise<AccountListResponse> {
        return this.api.getAccounts(param.player, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param param the request object
     */
    public requestTransferOwnership(param: AccountsApiRequestTransferOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.requestTransferOwnership(param.id, param.transferOwnershipRequest,  options).toPromise();
    }

    /**
     * Signs the typed data value with types data structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
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
     * This endpoint updates the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
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
     * Specifies the auth token.
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
     * When using Openfort Auth, the endpoint authenticates the player based on his email, and returns the jwt token for the player together with the player id.
     * Login a player.
     * @param param the request object
     */
    public login(param: AuthenticationApiLoginRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint creates a player based on his email, and returns the jwt token for the player together with the player id.
     * Sign up a player.
     * @param param the request object
     */
    public signup(param: AuthenticationApiSignupRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.signup(param.signupRequest,  options).toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint verifies the token generated by Openfort Auth and retrieves a corresponding player.
     * Verify an auth token.
     * @param param the request object
     */
    public verifyAuthToken(param: AuthenticationApiVerifyAuthTokenRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.verifyAuthToken(param.token,  options).toPromise();
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
     * Specifies the unique contract ID (starts with con_).
     * @type string
     * @memberof ContractsApideleteContract
     */
    id: string
}

export interface ContractsApiGetContractRequest {
    /**
     * Specifies the unique contract ID (starts with con_).
     * @type string
     * @memberof ContractsApigetContract
     */
    id: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof ContractsApigetContracts
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof ContractsApigetContracts
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof ContractsApigetContracts
     */
    order?: SortOrder
    /**
     * Specifies the name of the contract.
     * @type string
     * @memberof ContractsApigetContracts
     */
    name?: string
    /**
     * Specifies whether to include deleted contracts.
     * @type boolean
     * @memberof ContractsApigetContracts
     */
    deleted?: boolean
    /**
     * The chain ID of the contract.
     * @type number
     * @memberof ContractsApigetContracts
     */
    chainId?: number
    /**
     * Specifies the address of the contract.
     * @type string
     * @memberof ContractsApigetContracts
     */
    address?: string
}

export interface ContractsApiReadContractRequest {
    /**
     * Specifies the unique contract ID (starts with con_).
     * @type string
     * @memberof ContractsApireadContract
     */
    id: string
    /**
     * The function name of the contract.
     * @type string
     * @memberof ContractsApireadContract
     */
    functionName: string
    /**
     * The function arguments of the contract, in string format. Accepts pla_, con_ and acc_ IDs.
     * @type Array&lt;any&gt;
     * @memberof ContractsApireadContract
     */
    functionArgs?: Array<any>
}

export interface ContractsApiUpdateContractRequest {
    /**
     * Specifies the unique contract ID (starts with con_).
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
     * Add a new contract to your project in Openfort
     * Create contract object.
     * @param param the request object
     */
    public createContract(param: ContractsApiCreateContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.createContract(param.createContractRequest,  options).toPromise();
    }

    /**
     * Delete a contract from the project by providing its contract id.
     * Deletes a contract object.
     * @param param the request object
     */
    public deleteContract(param: ContractsApiDeleteContractRequest, options?: Configuration): Promise<ContractDeleteResponse> {
        return this.api.deleteContract(param.id,  options).toPromise();
    }

    /**
     * Retrieve a contract by providing their contract id.
     * Get a contract.
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<ContractResponse> {
        return this.api.getContract(param.id,  options).toPromise();
    }

    /**
     * List of all contracts per project. By default, a maximum of ten contracts are shown.
     * List contracts.
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<ContractListResponse> {
        return this.api.getContracts(param.limit, param.skip, param.order, param.name, param.deleted, param.chainId, param.address,  options).toPromise();
    }

    /**
     * Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read on chain contract data.
     * @param param the request object
     */
    public readContract(param: ContractsApiReadContractRequest, options?: Configuration): Promise<ContractReadResponse> {
        return this.api.readContract(param.id, param.functionName, param.functionArgs,  options).toPromise();
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
     * Specifies the oauth key.
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
     * Get the google oauth signin url.
     * @param param the request object
     */
    public getSigninUrl(param: GoogleAuthenticationApiGetSigninUrlRequest = {}, options?: Configuration): Promise<GetSigninUrlResponse> {
        return this.api.getSigninUrl( options).toPromise();
    }

    /**
     * Get the google oauth token.
     * @param param the request object
     */
    public getToken(param: GoogleAuthenticationApiGetTokenRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.getToken(param.key,  options).toPromise();
    }

}

import { ObservableInventoriesApi } from "./ObservableAPI";
import { InventoriesApiRequestFactory, InventoriesApiResponseProcessor} from "../apis/InventoriesApi";

export interface InventoriesApiGetAccountCryptoCurrencyInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoriesApigetAccountCryptoCurrencyInventory
     */
    id: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof InventoriesApigetAccountCryptoCurrencyInventory
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof InventoriesApigetAccountCryptoCurrencyInventory
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof InventoriesApigetAccountCryptoCurrencyInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoriesApigetAccountCryptoCurrencyInventory
     */
    contractId?: Array<string>
}

export interface InventoriesApiGetAccountInventoryRequest {
    /**
     * Specifies the unique account ID (starts with acc_).
     * @type string
     * @memberof InventoriesApigetAccountInventory
     */
    id: string
}

export interface InventoriesApiGetAccountNativeInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoriesApigetAccountNativeInventory
     */
    id: string
}

export interface InventoriesApiGetAccountNftInventoryRequest {
    /**
     * Specifies the unique account ID.
     * @type string
     * @memberof InventoriesApigetAccountNftInventory
     */
    id: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof InventoriesApigetAccountNftInventory
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof InventoriesApigetAccountNftInventory
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof InventoriesApigetAccountNftInventory
     */
    order?: SortOrder
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof InventoriesApigetAccountNftInventory
     */
    contractId?: Array<string>
}

export interface InventoriesApiGetPlayerCryptoCurrencyInventoryRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    id: string
    /**
     * Filter by chain id.
     * @type number
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    chainId: number
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    order?: SortOrder
    /**
     * Filter by contract ID (starts with con_).
     * @type Array&lt;string&gt;
     * @memberof InventoriesApigetPlayerCryptoCurrencyInventory
     */
    contractId?: Array<string>
}

export interface InventoriesApiGetPlayerInventoryRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof InventoriesApigetPlayerInventory
     */
    id: string
    /**
     * Filter by chain id.
     * @type number
     * @memberof InventoriesApigetPlayerInventory
     */
    chainId: number
}

export interface InventoriesApiGetPlayerNativeInventoryRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof InventoriesApigetPlayerNativeInventory
     */
    id: string
    /**
     * Filter by chain id.
     * @type number
     * @memberof InventoriesApigetPlayerNativeInventory
     */
    chainId: number
}

export interface InventoriesApiGetPlayerNftInventoryRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof InventoriesApigetPlayerNftInventory
     */
    id: string
    /**
     * Filter by chain id.
     * @type number
     * @memberof InventoriesApigetPlayerNftInventory
     */
    chainId: number
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof InventoriesApigetPlayerNftInventory
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof InventoriesApigetPlayerNftInventory
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof InventoriesApigetPlayerNftInventory
     */
    order?: SortOrder
    /**
     * Filter by contract ID (starts with con_).
     * @type Array&lt;string&gt;
     * @memberof InventoriesApigetPlayerNftInventory
     */
    contractId?: Array<string>
}

export class ObjectInventoriesApi {
    private api: ObservableInventoriesApi

    public constructor(configuration: Configuration, requestFactory?: InventoriesApiRequestFactory, responseProcessor?: InventoriesApiResponseProcessor) {
        this.api = new ObservableInventoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the cryptocurrency assets of an existing account.
     * @param param the request object
     */
    public getAccountCryptoCurrencyInventory(param: InventoriesApiGetAccountCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountCryptoCurrencyInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Get inventory of account.
     * @param param the request object
     */
    public getAccountInventory(param: InventoriesApiGetAccountInventoryRequest, options?: Configuration): Promise<ObsoleteInventoryResponse> {
        return this.api.getAccountInventory(param.id,  options).toPromise();
    }

    /**
     * Retrieves the native asset of an existing account.
     * @param param the request object
     */
    public getAccountNativeInventory(param: InventoriesApiGetAccountNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getAccountNativeInventory(param.id,  options).toPromise();
    }

    /**
     * Retrieves the NFT assets of an existing account.
     * @param param the request object
     */
    public getAccountNftInventory(param: InventoriesApiGetAccountNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountNftInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Get cryptocurrency list of player.
     * @param param the request object
     */
    public getPlayerCryptoCurrencyInventory(param: InventoriesApiGetPlayerCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerCryptoCurrencyInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * Get inventory of player.
     * @param param the request object
     */
    public getPlayerInventory(param: InventoriesApiGetPlayerInventoryRequest, options?: Configuration): Promise<ObsoleteInventoryResponse> {
        return this.api.getPlayerInventory(param.id, param.chainId,  options).toPromise();
    }

    /**
     * Get native token list of player.
     * @param param the request object
     */
    public getPlayerNativeInventory(param: InventoriesApiGetPlayerNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getPlayerNativeInventory(param.id, param.chainId,  options).toPromise();
    }

    /**
     * Get NFTs list of player.
     * @param param the request object
     */
    public getPlayerNftInventory(param: InventoriesApiGetPlayerNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerNftInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

}

import { ObservableOAuthApi } from "./ObservableAPI";
import { OAuthApiRequestFactory, OAuthApiResponseProcessor} from "../apis/OAuthApi";

export interface OAuthApiAuthorizeWithOAuthTokenRequest {
    /**
     * OAuth provider
     * @type OAuthProvider
     * @memberof OAuthApiauthorizeWithOAuthToken
     */
    provider: OAuthProvider
    /**
     * 
     * @type OAuthRequest
     * @memberof OAuthApiauthorizeWithOAuthToken
     */
    oAuthRequest: OAuthRequest
}

export interface OAuthApiCreateOAuthConfigRequest {
    /**
     * Specifies the oauth provider specific configuration.
     * @type OAuthConfig
     * @memberof OAuthApicreateOAuthConfig
     */
    body: OAuthConfig
}

export interface OAuthApiDeleteOAuthConfigRequest {
    /**
     * Specifies the oauth provider type.
     * @type OAuthProvider
     * @memberof OAuthApideleteOAuthConfig
     */
    provider: OAuthProvider
}

export interface OAuthApiGetOAuthConfigRequest {
    /**
     * Specifies the oauth provider type.
     * @type OAuthProvider
     * @memberof OAuthApigetOAuthConfig
     */
    provider: OAuthProvider
}

export interface OAuthApiGetPlayerByExternalIdRequest {
    /**
     * OAuth provider
     * @type OAuthProvider
     * @memberof OAuthApigetPlayerByExternalId
     */
    provider: OAuthProvider
    /**
     * External user id
     * @type string
     * @memberof OAuthApigetPlayerByExternalId
     */
    externalUserId: string
}

export interface OAuthApiListOAuthConfigRequest {
}

export interface OAuthApiVerifyOAuthTokenRequest {
    /**
     * OAuth provider
     * @type OAuthProvider
     * @memberof OAuthApiverifyOAuthToken
     */
    provider: OAuthProvider
    /**
     * 
     * @type OAuthRequest
     * @memberof OAuthApiverifyOAuthToken
     */
    oAuthRequest: OAuthRequest
}

export class ObjectOAuthApi {
    private api: ObservableOAuthApi

    public constructor(configuration: Configuration, requestFactory?: OAuthApiRequestFactory, responseProcessor?: OAuthApiResponseProcessor) {
        this.api = new ObservableOAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The endpoint verifies the token generated by OAuth provider, creates or retrieves a player based on his email, and returns the jwt token for the player together with the player id.
     * Authorize player with token.
     * @param param the request object
     */
    public authorizeWithOAuthToken(param: OAuthApiAuthorizeWithOAuthTokenRequest, options?: Configuration): Promise<AuthorizeWithOAuthToken200Response> {
        return this.api.authorizeWithOAuthToken(param.provider, param.oAuthRequest,  options).toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param param the request object
     */
    public createOAuthConfig(param: OAuthApiCreateOAuthConfigRequest, options?: Configuration): Promise<OAuthConfig> {
        return this.api.createOAuthConfig(param.body,  options).toPromise();
    }

    /**
     * The endpoint deletes oauth configuration for specified provider for the current project environment.
     * Delete oauth configuration.
     * @param param the request object
     */
    public deleteOAuthConfig(param: OAuthApiDeleteOAuthConfigRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOAuthConfig(param.provider,  options).toPromise();
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param param the request object
     */
    public getOAuthConfig(param: OAuthApiGetOAuthConfigRequest, options?: Configuration): Promise<OAuthConfig> {
        return this.api.getOAuthConfig(param.provider,  options).toPromise();
    }

    /**
     * Retrieves the player based on his id in the external provider system.
     * Retrieve player by external id.
     * @param param the request object
     */
    public getPlayerByExternalId(param: OAuthApiGetPlayerByExternalIdRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.getPlayerByExternalId(param.provider, param.externalUserId,  options).toPromise();
    }

    /**
     * The endpoint retrieves the list of oauth configurations for the current project environment.
     * List of oauth configurations.
     * @param param the request object
     */
    public listOAuthConfig(param: OAuthApiListOAuthConfigRequest = {}, options?: Configuration): Promise<OAuthConfigListResponse> {
        return this.api.listOAuthConfig( options).toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by token.
     * @param param the request object
     */
    public verifyOAuthToken(param: OAuthApiVerifyOAuthTokenRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.verifyOAuthToken(param.provider, param.oAuthRequest,  options).toPromise();
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
     * @type PlayerCreateRequest
     * @memberof PlayersApicreatePlayer
     */
    playerCreateRequest: PlayerCreateRequest
}

export interface PlayersApiCreatePlayerAccountRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
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
     * Specifies the unique player ID (starts with pla_).
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

export interface PlayersApiDeletePlayerRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof PlayersApideletePlayer
     */
    id: string
}

export interface PlayersApiGetPlayerRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof PlayersApigetPlayer
     */
    id: string
    /**
     * Specifies the expandable fields.
     * @type Array&lt;PlayerResponseExpandable&gt;
     * @memberof PlayersApigetPlayer
     */
    expand?: Array<PlayerResponseExpandable>
}

export interface PlayersApiGetPlayerAccountsRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof PlayersApigetPlayerAccounts
     */
    id: string
    /**
     * Specifies the expandable fields.
     * @type Array&lt;AccountResponseExpandable&gt;
     * @memberof PlayersApigetPlayerAccounts
     */
    expand?: Array<AccountResponseExpandable>
}

export interface PlayersApiGetPlayersRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PlayersApigetPlayers
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PlayersApigetPlayers
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PlayersApigetPlayers
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;PlayerResponseExpandable&gt;
     * @memberof PlayersApigetPlayers
     */
    expand?: Array<PlayerResponseExpandable>
    /**
     * Filter by player name.
     * @type string
     * @memberof PlayersApigetPlayers
     */
    name?: string
}

export interface PlayersApiRequestTransferAccountOwnershipRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
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
     * Specifies the unique player ID (starts with pla_).
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
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof PlayersApiupdatePlayer
     */
    id: string
    /**
     * 
     * @type PlayerUpdateRequest
     * @memberof PlayersApiupdatePlayer
     */
    playerUpdateRequest: PlayerUpdateRequest
}

export class ObjectPlayersApi {
    private api: ObservablePlayersApi

    public constructor(configuration: Configuration, requestFactory?: PlayersApiRequestFactory, responseProcessor?: PlayersApiResponseProcessor) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of a player.
     * @param param the request object
     */
    public cancelTransferAccountOwnership(param: PlayersApiCancelTransferAccountOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.cancelTransferAccountOwnership(param.id, param.playerCancelTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Add a new player to your player list in Openfort.
     * Create a player object.
     * @param param the request object
     */
    public createPlayer(param: PlayersApiCreatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.createPlayer(param.playerCreateRequest,  options).toPromise();
    }

    /**
     * Create account object for a player.
     * @param param the request object
     */
    public createPlayerAccount(param: PlayersApiCreatePlayerAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createPlayerAccount(param.id, param.createPlayerAccountRequest,  options).toPromise();
    }

    /**
     * Create session object for a player.
     * @param param the request object
     */
    public createPlayerSession(param: PlayersApiCreatePlayerSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.createPlayerSession(param.id, param.createPlayerSessionRequest,  options).toPromise();
    }

    /**
     * Deletes a player object.
     * @param param the request object
     */
    public deletePlayer(param: PlayersApiDeletePlayerRequest, options?: Configuration): Promise<PlayerDeleteResponse> {
        return this.api.deletePlayer(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing player.
     * @param param the request object
     */
    public getPlayer(param: PlayersApiGetPlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.getPlayer(param.id, param.expand,  options).toPromise();
    }

    /**
     * List of accounts of a player.
     * @param param the request object
     */
    public getPlayerAccounts(param: PlayersApiGetPlayerAccountsRequest, options?: Configuration): Promise<AccountListResponse> {
        return this.api.getPlayerAccounts(param.id, param.expand,  options).toPromise();
    }

    /**
     * By default, a maximum of ten players are shown.
     * List players.
     * @param param the request object
     */
    public getPlayers(param: PlayersApiGetPlayersRequest = {}, options?: Configuration): Promise<PlayerListResponse> {
        return this.api.getPlayers(param.limit, param.skip, param.order, param.expand, param.name,  options).toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of a player.
     * @param param the request object
     */
    public requestTransferAccountOwnership(param: PlayersApiRequestTransferAccountOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.requestTransferAccountOwnership(param.id, param.playerTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Revoke session object for a player.
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
        return this.api.updatePlayer(param.id, param.playerUpdateRequest,  options).toPromise();
    }

}

import { ObservablePlayersAuthenticationApi } from "./ObservableAPI";
import { PlayersAuthenticationApiRequestFactory, PlayersAuthenticationApiResponseProcessor} from "../apis/PlayersAuthenticationApi";

export interface PlayersAuthenticationApiGetAuthenticatedPlayersRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    order?: SortOrder
    /**
     * Specifies the email address of the user.
     * @type string
     * @memberof PlayersAuthenticationApigetAuthenticatedPlayers
     */
    email?: string
}

export interface PlayersAuthenticationApiRegisterKeyRequest {
    /**
     * 
     * @type RegisterPlayerEncryptedKeyRequest
     * @memberof PlayersAuthenticationApiregisterKey
     */
    registerPlayerEncryptedKeyRequest: RegisterPlayerEncryptedKeyRequest
}

export interface PlayersAuthenticationApiRetrieveKeyRequest {
}

export class ObjectPlayersAuthenticationApi {
    private api: ObservablePlayersAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: PlayersAuthenticationApiRequestFactory, responseProcessor?: PlayersAuthenticationApiResponseProcessor) {
        this.api = new ObservablePlayersAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List authenticated players.
     * @param param the request object
     */
    public getAuthenticatedPlayers(param: PlayersAuthenticationApiGetAuthenticatedPlayersRequest = {}, options?: Configuration): Promise<AuthPlayerListResponse> {
        return this.api.getAuthenticatedPlayers(param.limit, param.skip, param.order, param.email,  options).toPromise();
    }

    /**
     * Register a key for the authenticated player.
     * @param param the request object
     */
    public registerKey(param: PlayersAuthenticationApiRegisterKeyRequest, options?: Configuration): Promise<RegisterPlayerEncryptedKeyResponse> {
        return this.api.registerKey(param.registerPlayerEncryptedKeyRequest,  options).toPromise();
    }

    /**
     * Retrieve the key for the authenticated player.
     * @param param the request object
     */
    public retrieveKey(param: PlayersAuthenticationApiRetrieveKeyRequest = {}, options?: Configuration): Promise<RetrievePlayerEncryptedKeyResponse> {
        return this.api.retrieveKey( options).toPromise();
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
     * Specifies the unique policy ID (starts with pol_).
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
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApideletePolicy
     */
    id: string
}

export interface PoliciesApiDisablePolicyRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApidisablePolicy
     */
    id: string
}

export interface PoliciesApiEnablePolicyRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApienablePolicy
     */
    id: string
}

export interface PoliciesApiGetPoliciesRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PoliciesApigetPolicies
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;PolicyResponseExpandable&gt;
     * @memberof PoliciesApigetPolicies
     */
    expand?: Array<PolicyResponseExpandable>
    /**
     * Specifies the name of the policy.
     * @type string
     * @memberof PoliciesApigetPolicies
     */
    name?: string
    /**
     * Specifies whether to include deleted contracts.
     * @type boolean
     * @memberof PoliciesApigetPolicies
     */
    deleted?: boolean
    /**
     * The chain ID of the policy.
     * @type number
     * @memberof PoliciesApigetPolicies
     */
    chainId?: number
    /**
     * Specifies whether to include enabled contracts.
     * @type boolean
     * @memberof PoliciesApigetPolicies
     */
    enabled?: boolean
}

export interface PoliciesApiGetPolicyRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicy
     */
    id: string
    /**
     * Specifies the fields to expand.
     * @type Array&lt;PolicyResponseExpandable&gt;
     * @memberof PoliciesApigetPolicy
     */
    expand?: Array<PolicyResponseExpandable>
}

export interface PoliciesApiGetPolicyAllowFunctionsRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    id: string
    /**
     * Specifies the fields to expand.
     * @type Array&lt;&#39;contract&#39;&gt;
     * @memberof PoliciesApigetPolicyAllowFunctions
     */
    expand?: Array<'contract'>
}

export interface PoliciesApiGetPolicyTotalGasUsageRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    id: string
}

export interface PoliciesApiUpdatePolicyRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
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
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApiupdatePolicyAllowFunction
     */
    policy: string
    /**
     * Specifies the unique policy rule ID (starts with afu_).
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
     * Create a policy object.
     * @param param the request object
     */
    public createPolicy(param: PoliciesApiCreatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.createPolicy(param.createPolicyRequest,  options).toPromise();
    }

    /**
     * Create a policy rule object for a policy.
     * @param param the request object
     */
    public createPolicyAllowFunction(param: PoliciesApiCreatePolicyAllowFunctionRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.createPolicyAllowFunction(param.id, param.createPolicyAllowFunctionRequest,  options).toPromise();
    }

    /**
     * Delete a policy object.
     * @param param the request object
     */
    public deletePolicy(param: PoliciesApiDeletePolicyRequest, options?: Configuration): Promise<PolicyDeleteResponse> {
        return this.api.deletePolicy(param.id,  options).toPromise();
    }

    /**
     * Disable a policy object.
     * @param param the request object
     */
    public disablePolicy(param: PoliciesApiDisablePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.disablePolicy(param.id,  options).toPromise();
    }

    /**
     * Enable a policy object.
     * @param param the request object
     */
    public enablePolicy(param: PoliciesApiEnablePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.enablePolicy(param.id,  options).toPromise();
    }

    /**
     * List policies.
     * @param param the request object
     */
    public getPolicies(param: PoliciesApiGetPoliciesRequest = {}, options?: Configuration): Promise<PolicyListResponse> {
        return this.api.getPolicies(param.limit, param.skip, param.order, param.expand, param.name, param.deleted, param.chainId, param.enabled,  options).toPromise();
    }

    /**
     * Get a policy object.
     * @param param the request object
     */
    public getPolicy(param: PoliciesApiGetPolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.getPolicy(param.id, param.expand,  options).toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param param the request object
     */
    public getPolicyAllowFunctions(param: PoliciesApiGetPolicyAllowFunctionsRequest, options?: Configuration): Promise<PolicyRuleListResponse> {
        return this.api.getPolicyAllowFunctions(param.id, param.expand,  options).toPromise();
    }

    /**
     * List all gas reports of a policy.
     * @param param the request object
     */
    public getPolicyTotalGasUsage(param: PoliciesApiGetPolicyTotalGasUsageRequest, options?: Configuration): Promise<GasReport> {
        return this.api.getPolicyTotalGasUsage(param.id,  options).toPromise();
    }

    /**
     * Update a policy object.
     * @param param the request object
     */
    public updatePolicy(param: PoliciesApiUpdatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.updatePolicy(param.id, param.updatePolicyRequest,  options).toPromise();
    }

    /**
     * Update a policy rule object of a policy.
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
     * Specifies the unique policy rule ID (starts with afu_).
     * @type string
     * @memberof PolicyRulesApideletePolicyRules
     */
    id: string
}

export interface PolicyRulesApiGetPolicyRulesRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PolicyRulesApigetPolicyRules
     */
    policy: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PolicyRulesApigetPolicyRules
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PolicyRulesApigetPolicyRules
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PolicyRulesApigetPolicyRules
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;&#39;contract&#39;&gt;
     * @memberof PolicyRulesApigetPolicyRules
     */
    expand?: Array<'contract'>
}

export interface PolicyRulesApiUpdatePolicyRulesRequest {
    /**
     * Specifies the unique policy rule ID (starts with afu_).
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
     * Create a policy rule object.
     * @param param the request object
     */
    public createPolicyRules(param: PolicyRulesApiCreatePolicyRulesRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.createPolicyRules(param.createPolicyRuleRequest,  options).toPromise();
    }

    /**
     * Deletes a policy rule object.
     * @param param the request object
     */
    public deletePolicyRules(param: PolicyRulesApiDeletePolicyRulesRequest, options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        return this.api.deletePolicyRules(param.id,  options).toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param param the request object
     */
    public getPolicyRules(param: PolicyRulesApiGetPolicyRulesRequest, options?: Configuration): Promise<PolicyRuleListResponse> {
        return this.api.getPolicyRules(param.policy, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * Update a policy rule object.
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
     * The player ID (starts with pla_)
     * @type string
     * @memberof SessionsApigetPlayerSessions
     */
    player: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof SessionsApigetPlayerSessions
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof SessionsApigetPlayerSessions
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof SessionsApigetPlayerSessions
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;SessionResponseExpandable&gt;
     * @memberof SessionsApigetPlayerSessions
     */
    expand?: Array<SessionResponseExpandable>
}

export interface SessionsApiGetSessionRequest {
    /**
     * Specifies the unique session ID (starts with ses_).
     * @type string
     * @memberof SessionsApigetSession
     */
    id: string
    /**
     * Specifies the fields to expand.
     * @type Array&lt;SessionResponseExpandable&gt;
     * @memberof SessionsApigetSession
     */
    expand?: Array<SessionResponseExpandable>
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
     * Specifies the unique session ID (starts with ses_).
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
     * Create a session key.
     * @param param the request object
     */
    public createSession(param: SessionsApiCreateSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.createSession(param.createSessionRequest,  options).toPromise();
    }

    /**
     * List session keys of a player.
     * @param param the request object
     */
    public getPlayerSessions(param: SessionsApiGetPlayerSessionsRequest, options?: Configuration): Promise<SessionListResponse> {
        return this.api.getPlayerSessions(param.player, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * Returns a player session by session id
     * @param param the request object
     */
    public getSession(param: SessionsApiGetSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.getSession(param.id, param.expand,  options).toPromise();
    }

    /**
     * Revoke the session session key.
     * @param param the request object
     */
    public revokeSession(param: SessionsApiRevokeSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.revokeSession(param.revokeSessionRequest,  options).toPromise();
    }

    /**
     * Send signed userOpHash to create session.
     * @param param the request object
     */
    public signatureSession(param: SessionsApiSignatureSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.signatureSession(param.id, param.signatureRequest,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiCreateDeveloperAccountRequest {
    /**
     * 
     * @type DeveloperAccountCreateRequest
     * @memberof SettingsApicreateDeveloperAccount
     */
    developerAccountCreateRequest: DeveloperAccountCreateRequest
}

export interface SettingsApiDeleteDeveloperAccountRequest {
    /**
     * Specifies a unique developer account.
     * @type string
     * @memberof SettingsApideleteDeveloperAccount
     */
    id: string
}

export interface SettingsApiGetDeveloperAccountsRequest {
}

export interface SettingsApiGetVerificationPayloadRequest {
    /**
     * Specifies the address
     * @type string
     * @memberof SettingsApigetVerificationPayload
     */
    address: string
}

export interface SettingsApiRemoveWebhookRequest {
}

export interface SettingsApiUpdateWebhookRequest {
    /**
     * 
     * @type SettingsWebhookUpdateRequest
     * @memberof SettingsApiupdateWebhook
     */
    settingsWebhookUpdateRequest: SettingsWebhookUpdateRequest
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create or add a developer account. Developer accounts can be used as for escrow, minting and transferring assets. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
     * Create a developer account.
     * @param param the request object
     */
    public createDeveloperAccount(param: SettingsApiCreateDeveloperAccountRequest, options?: Configuration): Promise<DeveloperAccountResponse> {
        return this.api.createDeveloperAccount(param.developerAccountCreateRequest,  options).toPromise();
    }

    /**
     * Delete a developer account from the current project.
     * Delete a developer account.
     * @param param the request object
     */
    public deleteDeveloperAccount(param: SettingsApiDeleteDeveloperAccountRequest, options?: Configuration): Promise<DeveloperAccountDeleteResponse> {
        return this.api.deleteDeveloperAccount(param.id,  options).toPromise();
    }

    /**
     * Retrieve the list of the developer accounts for the current project.
     * List of developer accounts.
     * @param param the request object
     */
    public getDeveloperAccounts(param: SettingsApiGetDeveloperAccountsRequest = {}, options?: Configuration): Promise<DeveloperAccountListResponse> {
        return this.api.getDeveloperAccounts( options).toPromise();
    }

    /**
     * Generate message, which should be signed by the account your want to add as a developer account.
     * Generate message to sign
     * @param param the request object
     */
    public getVerificationPayload(param: SettingsApiGetVerificationPayloadRequest, options?: Configuration): Promise<DeveloperAccountGetMessageResponse> {
        return this.api.getVerificationPayload(param.address,  options).toPromise();
    }

    /**
     * Updated the current project environment settings by removing the webhook address. After that system will stop sending events of the transaction intent state changes
     * Removes webhook.
     * @param param the request object
     */
    public removeWebhook(param: SettingsApiRemoveWebhookRequest = {}, options?: Configuration): Promise<void> {
        return this.api.removeWebhook( options).toPromise();
    }

    /**
     * Updated the current project environment settings by assigning the webhook address. This address is used to send events about the changes of the transaction intent state.
     * Update webhook.
     * @param param the request object
     */
    public updateWebhook(param: SettingsApiUpdateWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.updateWebhook(param.settingsWebhookUpdateRequest,  options).toPromise();
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

export interface TransactionIntentsApiEstimateTransactionIntentCostRequest {
    /**
     * 
     * @type CreateTransactionIntentRequest
     * @memberof TransactionIntentsApiestimateTransactionIntentCost
     */
    createTransactionIntentRequest: CreateTransactionIntentRequest
}

export interface TransactionIntentsApiGetTransactionIntentRequest {
    /**
     * Specifies the unique transaction intent ID (starts with tin_).
     * @type string
     * @memberof TransactionIntentsApigetTransactionIntent
     */
    id: string
    /**
     * Specifies the expandable fields.
     * @type Array&lt;TransactionIntentResponseExpandable&gt;
     * @memberof TransactionIntentsApigetTransactionIntent
     */
    expand?: Array<TransactionIntentResponseExpandable>
}

export interface TransactionIntentsApiGetTransactionIntentsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;TransactionIntentResponseExpandable&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    expand?: Array<TransactionIntentResponseExpandable>
    /**
     * The chain ID.
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    chainId?: number
    /**
     * Filter by account ID.
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    accountId?: Array<string>
    /**
     * Filter by player ID (starts with pla_).
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    playerId?: Array<string>
    /**
     * Filter by policy ID (starts with pol_).
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    policyId?: Array<string>
}

export interface TransactionIntentsApiSignatureRequest {
    /**
     * Specifies the unique transaction intent ID (starts with tin_).
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

export class ObjectTransactionIntentsApi {
    private api: ObservableTransactionIntentsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionIntentsApiRequestFactory, responseProcessor?: TransactionIntentsApiResponseProcessor) {
        this.api = new ObservableTransactionIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a transaction intent by providing their id on Openfort. Transaction intents that have not been processed yet, have the `response` attribute as undefined.
     * Create a transaction intent object.
     * @param param the request object
     */
    public createTransactionIntent(param: TransactionIntentsApiCreateTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.createTransactionIntent(param.createTransactionIntentRequest,  options).toPromise();
    }

    /**
     * Estimate the gas cost of creating a transaction intent and putting it on chain. If a policy that includes payment of gas in ERC-20 tokens is provided, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens.
     * Estimate gas cost of creating a transaction
     * @param param the request object
     */
    public estimateTransactionIntentCost(param: TransactionIntentsApiEstimateTransactionIntentCostRequest, options?: Configuration): Promise<EstimateTransactionIntentGasResult> {
        return this.api.estimateTransactionIntentCost(param.createTransactionIntentRequest,  options).toPromise();
    }

    /**
     * Get a transaction intent object.
     * @param param the request object
     */
    public getTransactionIntent(param: TransactionIntentsApiGetTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.getTransactionIntent(param.id, param.expand,  options).toPromise();
    }

    /**
     * List transaction intents.
     * @param param the request object
     */
    public getTransactionIntents(param: TransactionIntentsApiGetTransactionIntentsRequest = {}, options?: Configuration): Promise<TransactionIntentListResponse> {
        return this.api.getTransactionIntents(param.limit, param.skip, param.order, param.expand, param.chainId, param.accountId, param.playerId, param.policyId,  options).toPromise();
    }

    /**
     * For non-custodial smart accounts, each on chain action using their wallet, they must sign the userOperationHash received from the `POST` API endpoint that creates a transactionIntent.
     * Send a signed transaction userOperationHash.
     * @param param the request object
     */
    public signature(param: TransactionIntentsApiSignatureRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.signature(param.id, param.signatureRequest,  options).toPromise();
    }

}

import { ObservableWeb3ConnectionsApi } from "./ObservableAPI";
import { Web3ConnectionsApiRequestFactory, Web3ConnectionsApiResponseProcessor} from "../apis/Web3ConnectionsApi";

export interface Web3ConnectionsApiCreateWeb3ConnectionRequest {
    /**
     * 
     * @type CreateWeb3ConnectionRequest
     * @memberof Web3ConnectionsApicreateWeb3Connection
     */
    createWeb3ConnectionRequest: CreateWeb3ConnectionRequest
}

export interface Web3ConnectionsApiGetWeb3ActionsRequest {
    /**
     * Specifies the web3Connection ID (starts with web3_).
     * @type string
     * @memberof Web3ConnectionsApigetWeb3Actions
     */
    id: string
}

export interface Web3ConnectionsApiGetWeb3ConnectionRequest {
    /**
     * Specifies the unique web3Connection ID (starts with web3_).
     * @type string
     * @memberof Web3ConnectionsApigetWeb3Connection
     */
    id: string
    /**
     * Specifies the fields to expand.
     * @type Array&lt;Web3ConnectionResponseExpandable&gt;
     * @memberof Web3ConnectionsApigetWeb3Connection
     */
    expand?: Array<Web3ConnectionResponseExpandable>
}

export interface Web3ConnectionsApiGetWeb3ConnectionsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof Web3ConnectionsApigetWeb3Connections
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof Web3ConnectionsApigetWeb3Connections
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof Web3ConnectionsApigetWeb3Connections
     */
    order?: SortOrder
    /**
     * Specifies the unique player ID (starts with pla_)
     * @type string
     * @memberof Web3ConnectionsApigetWeb3Connections
     */
    player?: string
    /**
     * Specifies connection status
     * @type boolean
     * @memberof Web3ConnectionsApigetWeb3Connections
     */
    disconnected?: boolean
}

export interface Web3ConnectionsApiSubmitWeb3ActionRequest {
    /**
     * Specifies the web3Connection ID (starts with web3_).
     * @type string
     * @memberof Web3ConnectionsApisubmitWeb3Action
     */
    id: string
    /**
     * Specifies web3_action (starts with act_).
     * @type string
     * @memberof Web3ConnectionsApisubmitWeb3Action
     */
    web3Action: string
    /**
     * 
     * @type SubmitWeb3ActionRequest
     * @memberof Web3ConnectionsApisubmitWeb3Action
     */
    submitWeb3ActionRequest: SubmitWeb3ActionRequest
}

export class ObjectWeb3ConnectionsApi {
    private api: ObservableWeb3ConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: Web3ConnectionsApiRequestFactory, responseProcessor?: Web3ConnectionsApiResponseProcessor) {
        this.api = new ObservableWeb3ConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to create a new web3 connection to your Openfort player. Together with the player ID (pla_), you need to provide a chain ID. The chain to use is required because Openfort needs to make sure the account is deployed, as counterfactual addresses cannot use web3 connections. The `uri` body parameter must contain a [WalletConnect pairing URI](https://specs.walletconnect.com/2.0/specs/clients/core/pairing/pairing-uri).
     * Create a Web3 Connection object.
     * @param param the request object
     */
    public createWeb3Connection(param: Web3ConnectionsApiCreateWeb3ConnectionRequest, options?: Configuration): Promise<Web3ConnectionResponse> {
        return this.api.createWeb3Connection(param.createWeb3ConnectionRequest,  options).toPromise();
    }

    /**
     * Returns a list of web3 actions for the given web3 connection. The actions are returned sorted by creation date, with the most recently received action appearing first. By default, a maximum of ten actions are shown per page.
     * List Web3 actions from a web3 connection.
     * @param param the request object
     */
    public getWeb3Actions(param: Web3ConnectionsApiGetWeb3ActionsRequest, options?: Configuration): Promise<Web3ActionListResponse> {
        return this.api.getWeb3Actions(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing web3 connection. Supply the unique web3 connection ID from either a web3 connection creation request or the web3 connection list. Openfort will return the corresponding web3 connection information.
     * Get a web3Connection object.
     * @param param the request object
     */
    public getWeb3Connection(param: Web3ConnectionsApiGetWeb3ConnectionRequest, options?: Configuration): Promise<Web3ConnectionResponse> {
        return this.api.getWeb3Connection(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of web3 connections for the given player. The connections are returned sorted by creation date, with the most recently created connections appearing first. By default, a maximum of ten connections are shown per page.
     * List Web3 connections.
     * @param param the request object
     */
    public getWeb3Connections(param: Web3ConnectionsApiGetWeb3ConnectionsRequest = {}, options?: Configuration): Promise<Web3ConnectionListResponse> {
        return this.api.getWeb3Connections(param.limit, param.skip, param.order, param.player, param.disconnected,  options).toPromise();
    }

    /**
     * Approve or Reject a web3 action for the given web3 connection.
     * Approve or Reject a web3 action
     * @param param the request object
     */
    public submitWeb3Action(param: Web3ConnectionsApiSubmitWeb3ActionRequest, options?: Configuration): Promise<Web3ActionResponse> {
        return this.api.submitWeb3Action(param.id, param.web3Action, param.submitWeb3ActionRequest,  options).toPromise();
    }

}
