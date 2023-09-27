import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { Account } from '../models/Account';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { AccountResponse } from '../models/AccountResponse';
import { AccountResponseExpandable } from '../models/AccountResponseExpandable';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthPlayerListQueries } from '../models/AuthPlayerListQueries';
import { AuthPlayerListResponse } from '../models/AuthPlayerListResponse';
import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { AuthPlayerResponsePlayer } from '../models/AuthPlayerResponsePlayer';
import { AuthResponse } from '../models/AuthResponse';
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
import { ContractResponse } from '../models/ContractResponse';
import { CountPerIntervalLimitPolicyRuleResponse } from '../models/CountPerIntervalLimitPolicyRuleResponse';
import { CreateAccountRequest } from '../models/CreateAccountRequest';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreatePlayerAccountRequest } from '../models/CreatePlayerAccountRequest';
import { CreatePlayerRequest } from '../models/CreatePlayerRequest';
import { CreatePlayerSessionRequest } from '../models/CreatePlayerSessionRequest';
import { CreatePolicyAllowFunctionRequest } from '../models/CreatePolicyAllowFunctionRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateProjectRequest } from '../models/CreateProjectRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { Currency } from '../models/Currency';
import { DataAccountTypes } from '../models/DataAccountTypes';
import { DomainData } from '../models/DomainData';
import { EditRoleRequest } from '../models/EditRoleRequest';
import { EntityIdResponse } from '../models/EntityIdResponse';
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
import { EstimateTransactionIntentGasResult } from '../models/EstimateTransactionIntentGasResult';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { GasReport } from '../models/GasReport';
import { GasReportDataInner } from '../models/GasReportDataInner';
import { GasReportDataInnerPeriod } from '../models/GasReportDataInnerPeriod';
import { GasReportDataInnerTransactionIntentsInner } from '../models/GasReportDataInnerTransactionIntentsInner';
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
import { Money } from '../models/Money';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { ObsoleteAssetInventory } from '../models/ObsoleteAssetInventory';
import { ObsoleteAssetType } from '../models/ObsoleteAssetType';
import { ObsoleteInventoryResponse } from '../models/ObsoleteInventoryResponse';
import { PayForUserPolicyStrategy } from '../models/PayForUserPolicyStrategy';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { Player } from '../models/Player';
import { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest';
import { PlayerInventoryListQueries } from '../models/PlayerInventoryListQueries';
import { PlayerInventoryQueries } from '../models/PlayerInventoryQueries';
import { PlayerListQueries } from '../models/PlayerListQueries';
import { PlayerListResponse } from '../models/PlayerListResponse';
import { PlayerRequest } from '../models/PlayerRequest';
import { PlayerResponse } from '../models/PlayerResponse';
import { PlayerResponseAccountsInner } from '../models/PlayerResponseAccountsInner';
import { PlayerResponseExpandable } from '../models/PlayerResponseExpandable';
import { PlayerResponseTransactionIntentsInner } from '../models/PlayerResponseTransactionIntentsInner';
import { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest';
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
import { ProviderRequest } from '../models/ProviderRequest';
import { ProviderResponse } from '../models/ProviderResponse';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RevokeSessionPlayerRequest } from '../models/RevokeSessionPlayerRequest';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SessionListQueries } from '../models/SessionListQueries';
import { SessionListResponse } from '../models/SessionListResponse';
import { SessionResponse } from '../models/SessionResponse';
import { SessionResponseExpandable } from '../models/SessionResponseExpandable';
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
import { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import { UserListResponse } from '../models/UserListResponse';
import { UserProjectRole } from '../models/UserProjectRole';
import { UserResponse } from '../models/UserResponse';
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
     * Cancel request of ownership transfer of an account.
     * @param id Specifies the unique account ID.
     * @param cancelTransferOwnershipRequest 
     */
    public cancelTransferOwnership(id: string, cancelTransferOwnershipRequest: CancelTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.cancelTransferOwnership(id, cancelTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Complete a recovery process of a recoverable account.
     * @param id Specifies the unique account ID.
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
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * Get existing account.
     * @param id Specifies the unique account ID.
     * @param expand 
     */
    public getAccount(id: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. By default, a maximum of ten accounts are shown per page.
     * List accounts of a player.
     * @param player Specifies the unique player ID
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
     * Request ownership transfer of an account.
     * @param id Specifies the unique account ID.
     * @param transferOwnershipRequest 
     */
    public requestTransferOwnership(id: string, transferOwnershipRequest: TransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferOwnership(id, transferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
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
     * @param id Specifies the unique account ID.
     * @param startRecoveryRequest 
     */
    public startRecovery(id: string, startRecoveryRequest: StartRecoveryRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.startRecovery(id, startRecoveryRequest, _options);
        return result.toPromise();
    }

    /**
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID.
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
     * Login a player.
     * @param loginRequest 
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.login(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * Sign up a player.
     * @param signupRequest 
     */
    public signup(signupRequest: SignupRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.signup(signupRequest, _options);
        return result.toPromise();
    }

    /**
     * Verify an auth token.
     * @param token Specifies the auth token.
     */
    public verifyAuthToken(token: string, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyAuthToken(token, _options);
        return result.toPromise();
    }


}



import { ObservableConfigAuthenticationApi } from './ObservableAPI';

import { ConfigAuthenticationApiRequestFactory, ConfigAuthenticationApiResponseProcessor} from "../apis/ConfigAuthenticationApi";
export class PromiseConfigAuthenticationApi {
    private api: ObservableConfigAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigAuthenticationApiRequestFactory,
        responseProcessor?: ConfigAuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableConfigAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Configure Google OAuth2.
     * @param providerRequest 
     */
    public editProvider(providerRequest: ProviderRequest, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.editProvider(providerRequest, _options);
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
     * @param id Specifies the unique contract ID.
     */
    public deleteContract(id: string, _options?: Configuration): Promise<ContractDeleteResponse> {
        const result = this.api.deleteContract(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a contract by providing their contract id.
     * Get a contract.
     * @param id Specifies the unique contract ID.
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
     * Updates a contract object.
     * @param id Specifies the unique contract ID.
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



import { ObservableInventoryApi } from './ObservableAPI';

import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";
export class PromiseInventoryApi {
    private api: ObservableInventoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoryApiRequestFactory,
        responseProcessor?: InventoryApiResponseProcessor
    ) {
        this.api = new ObservableInventoryApi(configuration, requestFactory, responseProcessor);
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
     * @param id Specifies the unique account ID.
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
     * @param id Specifies the unique player ID.
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId Filter by contract ID.
     */
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Get inventory of player.
     * @param id Specifies the unique player ID.
     * @param chainId Filter by chain id.
     */
    public getPlayerInventory(id: string, chainId: number, _options?: Configuration): Promise<ObsoleteInventoryResponse> {
        const result = this.api.getPlayerInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Get native token list of player.
     * @param id Specifies the unique player ID.
     * @param chainId Filter by chain id.
     */
    public getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getPlayerNativeInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Get NFTs list of player.
     * @param id Specifies the unique player ID.
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId Filter by contract ID.
     */
    public getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerNftInventory(id, chainId, limit, skip, order, contractId, _options);
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
     * Cancel request to transfer ownership of an account.
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
     * @param createPlayerRequest 
     */
    public createPlayer(createPlayerRequest: CreatePlayerRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.createPlayer(createPlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * Create account object for a player.
     * @param id Specifies the unique player ID.
     * @param createPlayerAccountRequest 
     */
    public createPlayerAccount(id: string, createPlayerAccountRequest: CreatePlayerAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createPlayerAccount(id, createPlayerAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Create session object for a player.
     * @param id Specifies the unique player ID.
     * @param createPlayerSessionRequest 
     */
    public createPlayerSession(id: string, createPlayerSessionRequest: CreatePlayerSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createPlayerSession(id, createPlayerSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing player.
     * @param id Specifies the unique player ID.
     * @param expand Specifies the expandable fields.
     */
    public getPlayer(id: string, expand?: Array<PlayerResponseExpandable>, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayer(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List of accounts of a player.
     * @param id Specifies the unique player ID.
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
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of an account.
     * @param id 
     * @param playerCancelTransferOwnershipRequest 
     */
    public obsoleteCancelTransferAccountOwnership(id: string, playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.obsoleteCancelTransferAccountOwnership(id, playerCancelTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param id Specifies the unique player ID.
     * @param playerTransferOwnershipRequest 
     */
    public obsoleteRequestTransferAccountOwnership(id: string, playerTransferOwnershipRequest: PlayerTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.obsoleteRequestTransferAccountOwnership(id, playerTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param id Specifies the unique player ID.
     * @param playerTransferOwnershipRequest 
     */
    public requestTransferAccountOwnership(id: string, playerTransferOwnershipRequest: PlayerTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferAccountOwnership(id, playerTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Revoke session object for a player.
     * @param id Specifies the unique player ID.
     * @param revokeSessionPlayerRequest 
     */
    public revokePlayerSession(id: string, revokeSessionPlayerRequest: RevokeSessionPlayerRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.revokePlayerSession(id, revokeSessionPlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a player object.
     * @param id Specifies the unique player ID.
     * @param playerRequest 
     */
    public updatePlayer(id: string, playerRequest: PlayerRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.updatePlayer(id, playerRequest, _options);
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
     * @param id Specifies the unique policy ID.
     * @param createPolicyAllowFunctionRequest 
     */
    public createPolicyAllowFunction(id: string, createPolicyAllowFunctionRequest: CreatePolicyAllowFunctionRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyAllowFunction(id, createPolicyAllowFunctionRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a policy object.
     * @param id Specifies the unique policy ID.
     */
    public deletePolicy(id: string, _options?: Configuration): Promise<PolicyDeleteResponse> {
        const result = this.api.deletePolicy(id, _options);
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
     */
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PolicyResponseExpandable>, name?: string, deleted?: boolean, chainId?: number, _options?: Configuration): Promise<PolicyListResponse> {
        const result = this.api.getPolicies(limit, skip, order, expand, name, deleted, chainId, _options);
        return result.toPromise();
    }

    /**
     * Get a policy object.
     * @param id Specifies the unique policy ID.
     * @param expand Specifies the fields to expand.
     */
    public getPolicy(id: string, expand?: Array<PolicyResponseExpandable>, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.getPolicy(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param id Specifies the unique policy ID.
     * @param expand Specifies the fields to expand.
     */
    public getPolicyAllowFunctions(id: string, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyAllowFunctions(id, expand, _options);
        return result.toPromise();
    }

    /**
     * List all gas reports of a policy.
     * @param id Specifies the unique policy ID.
     */
    public getPolicyTotalGasUsage(id: string, _options?: Configuration): Promise<GasReport> {
        const result = this.api.getPolicyTotalGasUsage(id, _options);
        return result.toPromise();
    }

    /**
     * Update a policy object.
     * @param id Specifies the unique policy ID.
     * @param updatePolicyRequest 
     */
    public updatePolicy(id: string, updatePolicyRequest: UpdatePolicyRequest, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.updatePolicy(id, updatePolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a policy rule object of a policy.
     * @param policy 
     * @param policyRule 
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
     * @param id Specifies the unique policy rule ID.
     */
    public deletePolicyRules(id: string, _options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        const result = this.api.deletePolicyRules(id, _options);
        return result.toPromise();
    }

    /**
     * List policy rules of a policy.
     * @param policy Specifies the unique policy ID.
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
     * @param id Specifies the unique policy rule ID.
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
     * @param player The player ID
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
     * @param id Specifies the unique session ID.
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
     * Confirms the creation of a session with an external owner.
     * @param id Specifies the unique session ID.
     * @param signatureRequest 
     */
    public signatureSession(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.signatureSession(id, signatureRequest, _options);
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
     * Estimate the gas cost of creating a transaction intent and putting it onchain.
     * Estimate gas cost of creating a transaction
     * @param createTransactionIntentRequest 
     */
    public estimateTransactionIntentCost(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<EstimateTransactionIntentGasResult> {
        const result = this.api.estimateTransactionIntentCost(createTransactionIntentRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a transaction intent object.
     * @param id Specifies the unique transaction intent ID.
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
     * @param playerId Filter by player ID.
     * @param policyId Filter by policy ID.
     */
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<TransactionIntentResponseExpandable>, chainId?: number, accountId?: Array<string>, playerId?: Array<string>, policyId?: Array<string>, _options?: Configuration): Promise<TransactionIntentListResponse> {
        const result = this.api.getTransactionIntents(limit, skip, order, expand, chainId, accountId, playerId, policyId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to put a userOperationHash signature on-chain. This means players that have informed (and use) an [externally-owned account (EOA)](https://ethereum.org/en/developers/docs/accounts/) to authorize operations, such as registering a session key, for their gaming accounts.  Given that players with non-custodial accounts are the only ones in possession of the private key, they must sign the information inside the `nextAction` value received from the `POST` API endpoint that creates a transaction_intent, even with their session-keys. Once signed, the client needs to send the signed message using the `/signature` endpoint or use one of the available client-side libraries to do so.
     * Confirms the creation of a transaction intent with an external owner.
     * @param id Specifies the unique transaction intent ID.
     * @param signatureRequest 
     */
    public signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.signature(id, signatureRequest, _options);
        return result.toPromise();
    }


}



