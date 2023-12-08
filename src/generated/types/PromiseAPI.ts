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
import { DomainData } from '../models/DomainData';
import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeINVENTORY } from '../models/EntityTypeINVENTORY';
import { EntityTypePAYMASTERDEPOSITOR } from '../models/EntityTypePAYMASTERDEPOSITOR';
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
import { PaymasterDepositorCreateRequest } from '../models/PaymasterDepositorCreateRequest';
import { PaymasterDepositorDeleteResponse } from '../models/PaymasterDepositorDeleteResponse';
import { PaymasterDepositorGetMessageResponse } from '../models/PaymasterDepositorGetMessageResponse';
import { PaymasterDepositorListResponse } from '../models/PaymasterDepositorListResponse';
import { PaymasterDepositorResponse } from '../models/PaymasterDepositorResponse';
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
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of an account.
     * @param id Specifies the unique account ID.
     * @param cancelTransferOwnershipRequest 
     */
    public cancelTransferOwnership(id: string, cancelTransferOwnershipRequest: CancelTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.cancelTransferOwnership(id, cancelTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Complete a recovery process of a recoverable account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param completeRecoveryRequest 
     */
    public completeRecovery(id: string, completeRecoveryRequest: CompleteRecoveryRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.completeRecovery(id, completeRecoveryRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to add a new account to your Openfort player. Only one account can be active per chain per player.
     * Create an account object.
     * @param createAccountRequest 
     */
    public createAccount(createAccountRequest: CreateAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createAccount(createAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint can be used to deploy an account that was counterfactually generated.
     * Deploy an account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param deployRequest 
     */
    public deployAccount(id: string, deployRequest: DeployRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.deployAccount(id, deployRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * Get existing account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param expand 
     */
    public getAccount(id: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. By default, a maximum of ten accounts are shown per page.
     * List accounts of a player.
     * @param player Specifies the unique player ID (starts with pla_)
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getAccounts(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountListResponse> {
        const result = this.api.getAccounts(player, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param id Specifies the unique account ID.
     * @param transferOwnershipRequest 
     */
    public requestTransferOwnership(id: string, transferOwnershipRequest: TransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferOwnership(id, transferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Signs the typed data value with types data structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
     * Sign a given payload
     * @param id Specifies the unique account ID.
     * @param signPayloadRequest 
     */
    public signPayload(id: string, signPayloadRequest: SignPayloadRequest, _options?: Configuration): Promise<SignPayloadResponse> {
        const result = this.api.signPayload(id, signPayloadRequest, _options);
        return result.toPromise();
    }

    /**
     * Start a recovery process of a recoverable account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param startRecoveryRequest 
     */
    public startRecovery(id: string, startRecoveryRequest: StartRecoveryRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.startRecovery(id, startRecoveryRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint updates the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID (starts with acc_).
     */
    public syncAccount(id: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.syncAccount(id, _options);
        return result.toPromise();
    }


}



import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * When using Openfort Auth, the endpoint authenticates the player based on his email, and returns the jwt token for the player together with the player id.
     * Login a player.
     * @param loginRequest 
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.login(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint creates a player based on his email, and returns the jwt token for the player together with the player id.
     * Sign up a player.
     * @param signupRequest 
     */
    public signup(signupRequest: SignupRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.signup(signupRequest, _options);
        return result.toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint verifies the token generated by Openfort Auth and retrieves a corresponding player.
     * Verify an auth token.
     * @param token Specifies the auth token.
     */
    public verifyAuthToken(token: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyAuthToken(token, _options);
        return result.toPromise();
    }


}



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
     * Add a new contract to your project in Openfort
     * Create contract object.
     * @param createContractRequest 
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.createContract(createContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a contract from the project by providing its contract id.
     * Deletes a contract object.
     * @param id Specifies the unique contract ID (starts with con_).
     */
    public deleteContract(id: string, _options?: Configuration): Promise<ContractDeleteResponse> {
        const result = this.api.deleteContract(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a contract by providing their contract id.
     * Get a contract.
     * @param id Specifies the unique contract ID (starts with con_).
     */
    public getContract(id: string, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.getContract(id, _options);
        return result.toPromise();
    }

    /**
     * List of all contracts per project. By default, a maximum of ten contracts are shown.
     * List contracts.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param name Specifies the name of the contract.
     * @param deleted Specifies whether to include deleted contracts.
     * @param chainId The chain ID of the contract.
     * @param address Specifies the address of the contract.
     */
    public getContracts(limit?: number, skip?: number, order?: SortOrder, name?: string, deleted?: boolean, chainId?: number, address?: string, _options?: Configuration): Promise<ContractListResponse> {
        const result = this.api.getContracts(limit, skip, order, name, deleted, chainId, address, _options);
        return result.toPromise();
    }

    /**
     * Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read on chain contract data.
     * @param id Specifies the unique contract ID (starts with con_).
     * @param functionName The function name of the contract.
     * @param functionArgs The function arguments of the contract, in string format. Accepts pla_, con_ and acc_ IDs.
     */
    public readContract(id: string, functionName: string, functionArgs?: Array<any>, _options?: Configuration): Promise<ContractReadResponse> {
        const result = this.api.readContract(id, functionName, functionArgs, _options);
        return result.toPromise();
    }

    /**
     * Updates a contract object.
     * @param id Specifies the unique contract ID (starts with con_).
     * @param updateContractRequest 
     */
    public updateContract(id: string, updateContractRequest: UpdateContractRequest, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.updateContract(id, updateContractRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGoogleAuthenticationApi } from './ObservableAPI';

import { GoogleAuthenticationApiRequestFactory, GoogleAuthenticationApiResponseProcessor} from "../apis/GoogleAuthenticationApi";
export class PromiseGoogleAuthenticationApi {
    private api: ObservableGoogleAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GoogleAuthenticationApiRequestFactory,
        responseProcessor?: GoogleAuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableGoogleAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the google oauth signin url.
     */
    public getSigninUrl(_options?: Configuration): Promise<GetSigninUrlResponse> {
        const result = this.api.getSigninUrl(_options);
        return result.toPromise();
    }

    /**
     * Get the google oauth token.
     * @param key Specifies the oauth key.
     */
    public getToken(key: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.getToken(key, _options);
        return result.toPromise();
    }


}



import { ObservableInventoriesApi } from './ObservableAPI';

import { InventoriesApiRequestFactory, InventoriesApiResponseProcessor} from "../apis/InventoriesApi";
export class PromiseInventoriesApi {
    private api: ObservableInventoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoriesApiRequestFactory,
        responseProcessor?: InventoriesApiResponseProcessor
    ) {
        this.api = new ObservableInventoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the cryptocurrency assets of an existing account.
     * @param id Specifies the unique account ID.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId 
     */
    public getAccountCryptoCurrencyInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getAccountCryptoCurrencyInventory(id, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Get inventory of account.
     * @param id Specifies the unique account ID (starts with acc_).
     */
    public getAccountInventory(id: string, _options?: Configuration): Promise<ObsoleteInventoryResponse> {
        const result = this.api.getAccountInventory(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the native asset of an existing account.
     * @param id Specifies the unique account ID.
     */
    public getAccountNativeInventory(id: string, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getAccountNativeInventory(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the NFT assets of an existing account.
     * @param id Specifies the unique account ID.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId 
     */
    public getAccountNftInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getAccountNftInventory(id, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Get cryptocurrency list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId Filter by contract ID (starts with con_).
     */
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Get inventory of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     */
    public getPlayerInventory(id: string, chainId: number, _options?: Configuration): Promise<ObsoleteInventoryResponse> {
        const result = this.api.getPlayerInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Get native token list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     */
    public getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getPlayerNativeInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Get NFTs list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId Filter by contract ID (starts with con_).
     */
    public getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerNftInventory(id, chainId, limit, skip, order, contractId, _options);
        return result.toPromise();
    }


}



import { ObservableOAuthApi } from './ObservableAPI';

import { OAuthApiRequestFactory, OAuthApiResponseProcessor} from "../apis/OAuthApi";
export class PromiseOAuthApi {
    private api: ObservableOAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuthApiRequestFactory,
        responseProcessor?: OAuthApiResponseProcessor
    ) {
        this.api = new ObservableOAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The endpoint verifies the token generated by OAuth provider, creates or retrieves a player based on his email, and returns the jwt token for the player together with the player id.
     * Authorize player with token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public authorizeWithOAuthToken(provider: OAuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Promise<AuthorizeWithOAuthToken200Response> {
        const result = this.api.authorizeWithOAuthToken(provider, oAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param body Specifies the oauth provider specific configuration.
     */
    public createOAuthConfig(body: OAuthConfig, _options?: Configuration): Promise<OAuthConfig> {
        const result = this.api.createOAuthConfig(body, _options);
        return result.toPromise();
    }

    /**
     * The endpoint deletes oauth configuration for specified provider for the current project environment.
     * Delete oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public deleteOAuthConfig(provider: OAuthProvider, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOAuthConfig(provider, _options);
        return result.toPromise();
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public getOAuthConfig(provider: OAuthProvider, _options?: Configuration): Promise<OAuthConfig> {
        const result = this.api.getOAuthConfig(provider, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the player based on his id in the external provider system.
     * Retrieve player by external id.
     * @param provider OAuth provider
     * @param externalUserId External user id
     */
    public getPlayerByExternalId(provider: OAuthProvider, externalUserId: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayerByExternalId(provider, externalUserId, _options);
        return result.toPromise();
    }

    /**
     * The endpoint retrieves the list of oauth configurations for the current project environment.
     * List of oauth configurations.
     */
    public listOAuthConfig(_options?: Configuration): Promise<OAuthConfigListResponse> {
        const result = this.api.listOAuthConfig(_options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public verifyOAuthToken(provider: OAuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyOAuthToken(provider, oAuthRequest, _options);
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
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of a player.
     * @param id 
     * @param playerCancelTransferOwnershipRequest 
     */
    public cancelTransferAccountOwnership(id: string, playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.cancelTransferAccountOwnership(id, playerCancelTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Add a new player to your player list in Openfort.
     * Create a player object.
     * @param playerCreateRequest 
     */
    public createPlayer(playerCreateRequest: PlayerCreateRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.createPlayer(playerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create account object for a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param createPlayerAccountRequest 
     */
    public createPlayerAccount(id: string, createPlayerAccountRequest: CreatePlayerAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createPlayerAccount(id, createPlayerAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Create session object for a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param createPlayerSessionRequest 
     */
    public createPlayerSession(id: string, createPlayerSessionRequest: CreatePlayerSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createPlayerSession(id, createPlayerSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public deletePlayer(id: string, _options?: Configuration): Promise<PlayerDeleteResponse> {
        const result = this.api.deletePlayer(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param expand Specifies the expandable fields.
     */
    public getPlayer(id: string, expand?: Array<PlayerResponseExpandable>, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayer(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List of accounts of a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param expand Specifies the expandable fields.
     */
    public getPlayerAccounts(id: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountListResponse> {
        const result = this.api.getPlayerAccounts(id, expand, _options);
        return result.toPromise();
    }

    /**
     * By default, a maximum of ten players are shown.
     * List players.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param name Filter by player name.
     */
    public getPlayers(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PlayerResponseExpandable>, name?: string, _options?: Configuration): Promise<PlayerListResponse> {
        const result = this.api.getPlayers(limit, skip, order, expand, name, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param playerTransferOwnershipRequest 
     */
    public requestTransferAccountOwnership(id: string, playerTransferOwnershipRequest: PlayerTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferAccountOwnership(id, playerTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Revoke session object for a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param revokeSessionPlayerRequest 
     */
    public revokePlayerSession(id: string, revokeSessionPlayerRequest: RevokeSessionPlayerRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.revokePlayerSession(id, revokeSessionPlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param playerUpdateRequest 
     */
    public updatePlayer(id: string, playerUpdateRequest: PlayerUpdateRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.updatePlayer(id, playerUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePlayersAuthenticationApi } from './ObservableAPI';

import { PlayersAuthenticationApiRequestFactory, PlayersAuthenticationApiResponseProcessor} from "../apis/PlayersAuthenticationApi";
export class PromisePlayersAuthenticationApi {
    private api: ObservablePlayersAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersAuthenticationApiRequestFactory,
        responseProcessor?: PlayersAuthenticationApiResponseProcessor
    ) {
        this.api = new ObservablePlayersAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List authenticated players.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param email Specifies the email address of the user.
     */
    public getAuthenticatedPlayers(limit?: number, skip?: number, order?: SortOrder, email?: string, _options?: Configuration): Promise<AuthPlayerListResponse> {
        const result = this.api.getAuthenticatedPlayers(limit, skip, order, email, _options);
        return result.toPromise();
    }

    /**
     * Register a key for the authenticated player.
     * @param registerPlayerEncryptedKeyRequest 
     */
    public registerKey(registerPlayerEncryptedKeyRequest: RegisterPlayerEncryptedKeyRequest, _options?: Configuration): Promise<RegisterPlayerEncryptedKeyResponse> {
        const result = this.api.registerKey(registerPlayerEncryptedKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the key for the authenticated player.
     */
    public retrieveKey(_options?: Configuration): Promise<RetrievePlayerEncryptedKeyResponse> {
        const result = this.api.retrieveKey(_options);
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
     * @param createPolicyRequest 
     */
    public createPolicy(createPolicyRequest: CreatePolicyRequest, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.createPolicy(createPolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a policy rule object for a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param createPolicyAllowFunctionRequest 
     */
    public createPolicyAllowFunction(id: string, createPolicyAllowFunctionRequest: CreatePolicyAllowFunctionRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyAllowFunction(id, createPolicyAllowFunctionRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public deletePolicy(id: string, _options?: Configuration): Promise<PolicyDeleteResponse> {
        const result = this.api.deletePolicy(id, _options);
        return result.toPromise();
    }

    /**
     * Disable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public disablePolicy(id: string, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.disablePolicy(id, _options);
        return result.toPromise();
    }

    /**
     * Enable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public enablePolicy(id: string, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.enablePolicy(id, _options);
        return result.toPromise();
    }

    /**
     * List policies.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param name Specifies the name of the policy.
     * @param deleted Specifies whether to include deleted contracts.
     * @param chainId The chain ID of the policy.
     * @param enabled Specifies whether to include enabled contracts.
     */
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PolicyResponseExpandable>, name?: string, deleted?: boolean, chainId?: number, enabled?: boolean, _options?: Configuration): Promise<PolicyListResponse> {
        const result = this.api.getPolicies(limit, skip, order, expand, name, deleted, chainId, enabled, _options);
        return result.toPromise();
    }

    /**
     * Get a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param expand Specifies the fields to expand.
     */
    public getPolicy(id: string, expand?: Array<PolicyResponseExpandable>, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.getPolicy(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param expand Specifies the fields to expand.
     */
    public getPolicyAllowFunctions(id: string, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyAllowFunctions(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List all gas reports of a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public getPolicyTotalGasUsage(id: string, _options?: Configuration): Promise<GasReport> {
        const result = this.api.getPolicyTotalGasUsage(id, _options);
        return result.toPromise();
    }

    /**
     * Update a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param updatePolicyRequest 
     */
    public updatePolicy(id: string, updatePolicyRequest: UpdatePolicyRequest, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.updatePolicy(id, updatePolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a policy rule object of a policy.
     * @param policy Specifies the unique policy ID (starts with pol_).
     * @param policyRule Specifies the unique policy rule ID (starts with afu_).
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyAllowFunction(policy: string, policyRule: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.updatePolicyAllowFunction(policy, policyRule, updatePolicyRuleRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePolicyRulesApi } from './ObservableAPI';

import { PolicyRulesApiRequestFactory, PolicyRulesApiResponseProcessor} from "../apis/PolicyRulesApi";
export class PromisePolicyRulesApi {
    private api: ObservablePolicyRulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyRulesApiRequestFactory,
        responseProcessor?: PolicyRulesApiResponseProcessor
    ) {
        this.api = new ObservablePolicyRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a policy rule object.
     * @param createPolicyRuleRequest 
     */
    public createPolicyRules(createPolicyRuleRequest: CreatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyRules(createPolicyRuleRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     */
    public deletePolicyRules(id: string, _options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        const result = this.api.deletePolicyRules(id, _options);
        return result.toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param policy Specifies the unique policy ID (starts with pol_).
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getPolicyRules(policy: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyRules(policy, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * Update a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyRules(id: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.updatePolicyRules(id, updatePolicyRuleRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSessionsApi } from './ObservableAPI';

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class PromiseSessionsApi {
    private api: ObservableSessionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a session key.
     * @param createSessionRequest 
     */
    public createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createSession(createSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * List session keys of a player.
     * @param player The player ID (starts with pla_)
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getPlayerSessions(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<SessionResponseExpandable>, _options?: Configuration): Promise<SessionListResponse> {
        const result = this.api.getPlayerSessions(player, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a player session by session id
     * @param id Specifies the unique session ID (starts with ses_).
     * @param expand Specifies the fields to expand.
     */
    public getSession(id: string, expand?: Array<SessionResponseExpandable>, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.getSession(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Revoke the session session key.
     * @param revokeSessionRequest 
     */
    public revokeSession(revokeSessionRequest: RevokeSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.revokeSession(revokeSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Send signed userOpHash to create session.
     * @param id Specifies the unique session ID (starts with ses_).
     * @param signatureRequest 
     */
    public signatureSession(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.signatureSession(id, signatureRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Verify signature and add a depositor address to the current project environment.
     * Add depositor address.
     * @param paymasterDepositorCreateRequest 
     */
    public addDepositorAddress(paymasterDepositorCreateRequest: PaymasterDepositorCreateRequest, _options?: Configuration): Promise<PaymasterDepositorResponse> {
        const result = this.api.addDepositorAddress(paymasterDepositorCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the list of the depositor addresses for the current project environment.
     * List of depositor addresses.
     */
    public getDepositorAddresses(_options?: Configuration): Promise<PaymasterDepositorListResponse> {
        const result = this.api.getDepositorAddresses(_options);
        return result.toPromise();
    }

    /**
     * Generate message, which should be signed for verification of the address ownership.
     * Generate message to sign
     * @param address Specifies the paymaster depositor address
     */
    public getMessageForSigningDepositorAddress(address: string, _options?: Configuration): Promise<PaymasterDepositorGetMessageResponse> {
        const result = this.api.getMessageForSigningDepositorAddress(address, _options);
        return result.toPromise();
    }

    /**
     * Remove a depositor address from the current project environment.
     * Removes depositor address.
     * @param id Specifies unique identifier of depositor address.
     */
    public removeDepositorAddress(id: string, _options?: Configuration): Promise<PaymasterDepositorDeleteResponse> {
        const result = this.api.removeDepositorAddress(id, _options);
        return result.toPromise();
    }

    /**
     * Updated the current project environment settings by removing the webhook address. After that system will stop sending events of the transaction intent state changes
     * Removes webhook.
     */
    public removeWebhook(_options?: Configuration): Promise<void> {
        const result = this.api.removeWebhook(_options);
        return result.toPromise();
    }

    /**
     * Updated the current project environment settings by assigning the webhook address. This address is used to send events about the changes of the transaction intent state.
     * Update webhook.
     * @param settingsWebhookUpdateRequest 
     */
    public updateWebhook(settingsWebhookUpdateRequest: SettingsWebhookUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateWebhook(settingsWebhookUpdateRequest, _options);
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
     * Retrieve a transaction intent by providing their id on Openfort. Transaction intents that have not been processed yet, have the `response` attribute as undefined.
     * Create a transaction intent object.
     * @param createTransactionIntentRequest 
     */
    public createTransactionIntent(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createTransactionIntent(createTransactionIntentRequest, _options);
        return result.toPromise();
    }

    /**
     * Estimate the gas cost of creating a transaction intent and putting it on chain. If a policy that includes payment of gas in ERC-20 tokens is provided, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens.
     * Estimate gas cost of creating a transaction
     * @param createTransactionIntentRequest 
     */
    public estimateTransactionIntentCost(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<EstimateTransactionIntentGasResult> {
        const result = this.api.estimateTransactionIntentCost(createTransactionIntentRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a transaction intent object.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param expand Specifies the expandable fields.
     */
    public getTransactionIntent(id: string, expand?: Array<TransactionIntentResponseExpandable>, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.getTransactionIntent(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List transaction intents.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param chainId The chain ID.
     * @param accountId Filter by account ID.
     * @param playerId Filter by player ID (starts with pla_).
     * @param policyId Filter by policy ID (starts with pol_).
     */
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<TransactionIntentResponseExpandable>, chainId?: number, accountId?: Array<string>, playerId?: Array<string>, policyId?: Array<string>, _options?: Configuration): Promise<TransactionIntentListResponse> {
        const result = this.api.getTransactionIntents(limit, skip, order, expand, chainId, accountId, playerId, policyId, _options);
        return result.toPromise();
    }

    /**
     * For non-custodial smart accounts, each on chain action using their wallet, they must sign the userOperationHash received from the `POST` API endpoint that creates a transactionIntent.
     * Send a signed transaction userOperationHash.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param signatureRequest 
     */
    public signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.signature(id, signatureRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWeb3ConnectionsApi } from './ObservableAPI';

import { Web3ConnectionsApiRequestFactory, Web3ConnectionsApiResponseProcessor} from "../apis/Web3ConnectionsApi";
export class PromiseWeb3ConnectionsApi {
    private api: ObservableWeb3ConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: Web3ConnectionsApiRequestFactory,
        responseProcessor?: Web3ConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableWeb3ConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to create a new web3 connection to your Openfort player. Together with the player ID (pla_), you need to provide a chain ID. The chain to use is required because Openfort needs to make sure the account is deployed, as counterfactual addresses cannot use web3 connections. The `uri` body parameter must contain a [WalletConnect pairing URI](https://specs.walletconnect.com/2.0/specs/clients/core/pairing/pairing-uri).
     * Create a Web3 Connection object.
     * @param createWeb3ConnectionRequest 
     */
    public createWeb3Connection(createWeb3ConnectionRequest: CreateWeb3ConnectionRequest, _options?: Configuration): Promise<Web3ConnectionResponse> {
        const result = this.api.createWeb3Connection(createWeb3ConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of web3 actions for the given web3 connection. The actions are returned sorted by creation date, with the most recently received action appearing first. By default, a maximum of ten actions are shown per page.
     * List Web3 actions from a web3 connection.
     * @param id Specifies the web3Connection ID (starts with web3_).
     */
    public getWeb3Actions(id: string, _options?: Configuration): Promise<Web3ActionListResponse> {
        const result = this.api.getWeb3Actions(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing web3 connection. Supply the unique web3 connection ID from either a web3 connection creation request or the web3 connection list. Openfort will return the corresponding web3 connection information.
     * Get a web3Connection object.
     * @param id Specifies the unique web3Connection ID (starts with web3_).
     * @param expand Specifies the fields to expand.
     */
    public getWeb3Connection(id: string, expand?: Array<Web3ConnectionResponseExpandable>, _options?: Configuration): Promise<Web3ConnectionResponse> {
        const result = this.api.getWeb3Connection(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of web3 connections for the given player. The connections are returned sorted by creation date, with the most recently created connections appearing first. By default, a maximum of ten connections are shown per page.
     * List Web3 connections.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param player Specifies the unique player ID (starts with pla_)
     * @param disconnected Specifies connection status
     */
    public getWeb3Connections(limit?: number, skip?: number, order?: SortOrder, player?: string, disconnected?: boolean, _options?: Configuration): Promise<Web3ConnectionListResponse> {
        const result = this.api.getWeb3Connections(limit, skip, order, player, disconnected, _options);
        return result.toPromise();
    }

    /**
     * Approve or Reject a web3 action for the given web3 connection.
     * Approve or Reject a web3 action
     * @param id Specifies the web3Connection ID (starts with web3_).
     * @param web3Action Specifies web3_action (starts with act_).
     * @param submitWeb3ActionRequest 
     */
    public submitWeb3Action(id: string, web3Action: string, submitWeb3ActionRequest: SubmitWeb3ActionRequest, _options?: Configuration): Promise<Web3ActionResponse> {
        const result = this.api.submitWeb3Action(id, web3Action, submitWeb3ActionRequest, _options);
        return result.toPromise();
    }


}



