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
     * Request the ownership transfer of an account to a given address.
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
     * Creates an account object.
     * @param createAccountRequest 
     */
    public createAccount(createAccountRequest: CreateAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createAccount(createAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param expand whether to expand the response or not
     */
    public getAccount(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param player 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     */
    public getAccounts(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents'>, _options?: Configuration): Promise<AccountListResponse> {
        const result = this.api.getAccounts(player, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * Request the ownership transfer of an account to a given address.
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
     * @param loginRequest 
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.login(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param signupRequest 
     */
    public signup(signupRequest: SignupRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.signup(signupRequest, _options);
        return result.toPromise();
    }

    /**
     * @param token 
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
     * Google OAuth. Add a google_client_id and a google_client_secret
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
     * Creates a contract object.
     * @param createContractRequest 
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.createContract(createContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a contract object.
     * @param id 
     */
    public deleteContract(id: string, _options?: Configuration): Promise<ContractDeleteResponse> {
        const result = this.api.deleteContract(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param id Specifies the unique contract ID.
     */
    public getContract(id: string, _options?: Configuration): Promise<ContractResponse> {
        const result = this.api.getContract(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param name 
     * @param deleted 
     * @param chainId 
     * @param address 
     */
    public getContracts(limit?: number, skip?: number, order?: SortOrder, name?: string, deleted?: boolean, chainId?: number, address?: string, _options?: Configuration): Promise<ContractListResponse> {
        const result = this.api.getContracts(limit, skip, order, name, deleted, chainId, address, _options);
        return result.toPromise();
    }

    /**
     * Updates a contract object.
     * @param id 
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
     */
    public getSigninUrl(_options?: Configuration): Promise<GetSigninUrlResponse> {
        const result = this.api.getSigninUrl(_options);
        return result.toPromise();
    }

    /**
     * @param key 
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
     * Retrieves the cryptocurrency assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public getAccountCryptoCurrencyInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getAccountCryptoCurrencyInventory(id, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     */
    public getAccountInventory(id: string, _options?: Configuration): Promise<ObsoleteInventoryResponse> {
        const result = this.api.getAccountInventory(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the native asset of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     */
    public getAccountNativeInventory(id: string, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getAccountNativeInventory(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the NFT assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public getAccountNftInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getAccountNftInventory(id, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the cruptocurrency assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contractId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     */
    public getPlayerInventory(id: string, chainId: number, _options?: Configuration): Promise<ObsoleteInventoryResponse> {
        const result = this.api.getPlayerInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     */
    public getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getPlayerNativeInventory(id, chainId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the NFT assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
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
     * Request the ownership transfer of an account to a given address.
     * @param id 
     * @param playerCancelTransferOwnershipRequest 
     */
    public cancelTransferAccountOwnership(id: string, playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.cancelTransferAccountOwnership(id, playerCancelTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a player object.
     * @param createPlayerRequest 
     */
    public createPlayer(createPlayerRequest: CreatePlayerRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.createPlayer(createPlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an account object for an existing player.
     * @param id Specifies the unique player ID.
     * @param createPlayerAccountRequest 
     */
    public createPlayerAccount(id: string, createPlayerAccountRequest: CreatePlayerAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createPlayerAccount(id, createPlayerAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a session object for the given player.
     * @param id Specifies the unique player ID.
     * @param createPlayerSessionRequest 
     */
    public createPlayerSession(id: string, createPlayerSessionRequest: CreatePlayerSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createPlayerSession(id, createPlayerSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param expand 
     */
    public getPlayer(id: string, expand?: Array<'transactionIntents' | 'accounts'>, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayer(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param id 
     * @param expand 
     */
    public getPlayerAccounts(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Promise<AccountListResponse> {
        const result = this.api.getPlayerAccounts(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param name 
     */
    public getPlayers(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents' | 'accounts'>, name?: string, _options?: Configuration): Promise<PlayerListResponse> {
        const result = this.api.getPlayers(limit, skip, order, expand, name, _options);
        return result.toPromise();
    }

    /**
     * Transfer ownership of an account to an address.
     * @param id Specifies the unique player ID.
     * @param playerTransferOwnershipRequest 
     */
    public requestTransferAccountOwnership(id: string, playerTransferOwnershipRequest: PlayerTransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferAccountOwnership(id, playerTransferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a session object for the given player.
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
     * @param limit 
     * @param skip 
     * @param order 
     * @param email 
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
     * Creates a policy object.
     * @param createPolicyRequest 
     */
    public createPolicy(createPolicyRequest: CreatePolicyRequest, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.createPolicy(createPolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param createPolicyAllowFunctionRequest 
     */
    public createPolicyAllowFunction(id: string, createPolicyAllowFunctionRequest: CreatePolicyAllowFunctionRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyAllowFunction(id, createPolicyAllowFunctionRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a policy object.
     * @param id 
     */
    public deletePolicy(id: string, _options?: Configuration): Promise<PolicyDeleteResponse> {
        const result = this.api.deletePolicy(id, _options);
        return result.toPromise();
    }

    /**
     * Gets all policy objects for a given project.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param name 
     * @param deleted 
     * @param chainId 
     */
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents' | 'policyRules'>, name?: string, deleted?: boolean, chainId?: number, _options?: Configuration): Promise<PolicyListResponse> {
        const result = this.api.getPolicies(limit, skip, order, expand, name, deleted, chainId, _options);
        return result.toPromise();
    }

    /**
     * Gets a policy object for a given project.
     * @param id 
     * @param expand 
     */
    public getPolicy(id: string, expand?: Array<'transactionIntents' | 'policyRules'>, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.getPolicy(id, expand, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param expand 
     */
    public getPolicyAllowFunctions(id: string, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyAllowFunctions(id, expand, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getPolicyTotalGasUsage(id: string, _options?: Configuration): Promise<GasReport> {
        const result = this.api.getPolicyTotalGasUsage(id, _options);
        return result.toPromise();
    }

    /**
     * Updates a policy object.
     * @param id 
     * @param updatePolicyRequest 
     */
    public updatePolicy(id: string, updatePolicyRequest: UpdatePolicyRequest, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.updatePolicy(id, updatePolicyRequest, _options);
        return result.toPromise();
    }

    /**
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
     * Creates an allow function object.
     * @param createPolicyRuleRequest 
     */
    public createPolicyRules(createPolicyRuleRequest: CreatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyRules(createPolicyRuleRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an polciy rule (allow_functions) object.
     * @param id 
     */
    public deletePolicyRules(id: string, _options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        const result = this.api.deletePolicyRules(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param policy 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     */
    public getPolicyRules(policy: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyRules(policy, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * Updates an allow functions object.
     * @param id Specifies the unique allow function ID.
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
     * Creates the session for the account.
     * @param createSessionRequest 
     */
    public createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createSession(createSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param player 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param address 
     */
    public getPlayerSessions(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents'>, address?: string, _options?: Configuration): Promise<SessionListResponse> {
        const result = this.api.getPlayerSessions(player, limit, skip, order, expand, address, _options);
        return result.toPromise();
    }

    /**
     * Returns a player session by session id
     * @param id 
     * @param expand 
     */
    public getSession(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.getSession(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Revokes the session for the account.
     * @param revokeSessionRequest 
     */
    public revokeSession(revokeSessionRequest: RevokeSessionRequest, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.revokeSession(revokeSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param id 
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
     * Creates a transaction intent object.
     * @param createTransactionIntentRequest 
     */
    public createTransactionIntent(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createTransactionIntent(createTransactionIntentRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a transaction intent object.
     * @param id 
     * @param expand 
     */
    public getTransactionIntent(id: string, expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.getTransactionIntent(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param chainId 
     * @param accountId 
     * @param playerId 
     * @param policyId 
     */
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>, chainId?: number, accountId?: Array<string>, playerId?: Array<string>, policyId?: Array<string>, _options?: Configuration): Promise<TransactionIntentListResponse> {
        const result = this.api.getTransactionIntents(limit, skip, order, expand, chainId, accountId, playerId, policyId, _options);
        return result.toPromise();
    }

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param id 
     * @param signatureRequest 
     */
    public signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.signature(id, signatureRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public updateTransactionIntentResponse(id: string, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.updateTransactionIntentResponse(id, _options);
        return result.toPromise();
    }

    /**
     */
    public updateTransactionIntentsResponse(_options?: Configuration): Promise<TransactionIntentListResponse> {
        const result = this.api.updateTransactionIntentsResponse(_options);
        return result.toPromise();
    }


}



