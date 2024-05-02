import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { APITopic } from '../models/APITopic';
import { APITopicBALANCECONTRACT } from '../models/APITopicBALANCECONTRACT';
import { APITopicBALANCEDEVACCOUNT } from '../models/APITopicBALANCEDEVACCOUNT';
import { APITopicBALANCEPROJECT } from '../models/APITopicBALANCEPROJECT';
import { APITopicTRANSACTIONSUCCESSFUL } from '../models/APITopicTRANSACTIONSUCCESSFUL';
import { APITriggerType } from '../models/APITriggerType';
import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { AccelbyteOAuthConfig } from '../models/AccelbyteOAuthConfig';
import { Account } from '../models/Account';
import { AccountEventResponse } from '../models/AccountEventResponse';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { AccountResponse } from '../models/AccountResponse';
import { AccountResponseExpandable } from '../models/AccountResponseExpandable';
import { Amount } from '../models/Amount';
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
import { AuthProvider } from '../models/AuthProvider';
import { AuthResponse } from '../models/AuthResponse';
import { AuthSessionResponse } from '../models/AuthSessionResponse';
import { AuthenticateOAuthRequest } from '../models/AuthenticateOAuthRequest';
import { BalanceEventResponse } from '../models/BalanceEventResponse';
import { BalanceResponse } from '../models/BalanceResponse';
import { BaseEntityListResponseDeviceResponse } from '../models/BaseEntityListResponseDeviceResponse';
import { BaseEntityListResponseEventResponse } from '../models/BaseEntityListResponseEventResponse';
import { BaseEntityListResponseLogResponse } from '../models/BaseEntityListResponseLogResponse';
import { BaseEntityListResponseSubscriptionResponse } from '../models/BaseEntityListResponseSubscriptionResponse';
import { BaseEntityListResponseTriggerResponse } from '../models/BaseEntityListResponseTriggerResponse';
import { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest';
import { ChargeCustomTokenPolicyStrategy } from '../models/ChargeCustomTokenPolicyStrategy';
import { CheckoutRequest } from '../models/CheckoutRequest';
import { CheckoutResponse } from '../models/CheckoutResponse';
import { CheckoutSubscriptionRequest } from '../models/CheckoutSubscriptionRequest';
import { CompleteRecoveryRequest } from '../models/CompleteRecoveryRequest';
import { ContractDeleteResponse } from '../models/ContractDeleteResponse';
import { ContractEventResponse } from '../models/ContractEventResponse';
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
import { CreateAuthPlayerRequest } from '../models/CreateAuthPlayerRequest';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreateDeviceRequest } from '../models/CreateDeviceRequest';
import { CreateEventRequest } from '../models/CreateEventRequest';
import { CreateExchangeRequest } from '../models/CreateExchangeRequest';
import { CreatePaymasterRequest } from '../models/CreatePaymasterRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest';
import { CreateProjectRequest } from '../models/CreateProjectRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { CreateTriggerRequest } from '../models/CreateTriggerRequest';
import { CreateWeb3ConnectionRequest } from '../models/CreateWeb3ConnectionRequest';
import { Currency } from '../models/Currency';
import { CustomAuthConfig } from '../models/CustomAuthConfig';
import { DeployRequest } from '../models/DeployRequest';
import { DeprecatedAuthenticatedPlayerResponse } from '../models/DeprecatedAuthenticatedPlayerResponse';
import { DeveloperAccount } from '../models/DeveloperAccount';
import { DeveloperAccountCreateRequest } from '../models/DeveloperAccountCreateRequest';
import { DeveloperAccountDeleteResponse } from '../models/DeveloperAccountDeleteResponse';
import { DeveloperAccountGetMessageResponse } from '../models/DeveloperAccountGetMessageResponse';
import { DeveloperAccountListQueries } from '../models/DeveloperAccountListQueries';
import { DeveloperAccountListResponse } from '../models/DeveloperAccountListResponse';
import { DeveloperAccountResponse } from '../models/DeveloperAccountResponse';
import { DeveloperAccountResponseExpandable } from '../models/DeveloperAccountResponseExpandable';
import { DeviceListQueries } from '../models/DeviceListQueries';
import { DeviceResponse } from '../models/DeviceResponse';
import { DomainData } from '../models/DomainData';
import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeDEVELOPERACCOUNT } from '../models/EntityTypeDEVELOPERACCOUNT';
import { EntityTypeDEVICE } from '../models/EntityTypeDEVICE';
import { EntityTypeEVENT } from '../models/EntityTypeEVENT';
import { EntityTypeINVENTORY } from '../models/EntityTypeINVENTORY';
import { EntityTypeLOG } from '../models/EntityTypeLOG';
import { EntityTypePAYMASTER } from '../models/EntityTypePAYMASTER';
import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { EntityTypePROJECT } from '../models/EntityTypePROJECT';
import { EntityTypeREADCONTRACT } from '../models/EntityTypeREADCONTRACT';
import { EntityTypeSESSION } from '../models/EntityTypeSESSION';
import { EntityTypeSIGNATURE } from '../models/EntityTypeSIGNATURE';
import { EntityTypeSUBSCRIPTION } from '../models/EntityTypeSUBSCRIPTION';
import { EntityTypeTRANSACTIONINTENT } from '../models/EntityTypeTRANSACTIONINTENT';
import { EntityTypeTRIGGER } from '../models/EntityTypeTRIGGER';
import { EntityTypeUSER } from '../models/EntityTypeUSER';
import { EntityTypeWEB3ACTION } from '../models/EntityTypeWEB3ACTION';
import { EntityTypeWEB3CONNECTION } from '../models/EntityTypeWEB3CONNECTION';
import { ErrorTypeINVALIDREQUESTERROR } from '../models/ErrorTypeINVALIDREQUESTERROR';
import { EstimateTransactionIntentGasResult } from '../models/EstimateTransactionIntentGasResult';
import { EventDeleteResponse } from '../models/EventDeleteResponse';
import { EventListQueries } from '../models/EventListQueries';
import { EventResponse } from '../models/EventResponse';
import { Fee } from '../models/Fee';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { FirebaseOAuthConfig } from '../models/FirebaseOAuthConfig';
import { FixedRateTokenPolicyStrategy } from '../models/FixedRateTokenPolicyStrategy';
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { GasReport } from '../models/GasReport';
import { GasReportListResponse } from '../models/GasReportListResponse';
import { GasReportTransactionIntentsInner } from '../models/GasReportTransactionIntentsInner';
import { GoogleOAuthConfig } from '../models/GoogleOAuthConfig';
import { Interaction } from '../models/Interaction';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { InventoryListResponse } from '../models/InventoryListResponse';
import { InventoryResponse } from '../models/InventoryResponse';
import { JwtKey } from '../models/JwtKey';
import { JwtKeyResponse } from '../models/JwtKeyResponse';
import { LinkedAccountResponse } from '../models/LinkedAccountResponse';
import { ListSubscriptionLogsRequest } from '../models/ListSubscriptionLogsRequest';
import { Log } from '../models/Log';
import { LogResponse } from '../models/LogResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LogoutRequest } from '../models/LogoutRequest';
import { LootLockerOAuthConfig } from '../models/LootLockerOAuthConfig';
import { Money } from '../models/Money';
import { MonthRange } from '../models/MonthRange';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { OAuthConfig } from '../models/OAuthConfig';
import { OAuthConfigListResponse } from '../models/OAuthConfigListResponse';
import { OAuthInitRequest } from '../models/OAuthInitRequest';
import { OAuthInitRequestOptions } from '../models/OAuthInitRequestOptions';
import { OAuthProvider } from '../models/OAuthProvider';
import { OAuthProviderACCELBYTE } from '../models/OAuthProviderACCELBYTE';
import { OAuthProviderCUSTOM } from '../models/OAuthProviderCUSTOM';
import { OAuthProviderFIREBASE } from '../models/OAuthProviderFIREBASE';
import { OAuthProviderGOOGLE } from '../models/OAuthProviderGOOGLE';
import { OAuthProviderLOOTLOCKER } from '../models/OAuthProviderLOOTLOCKER';
import { OAuthProviderOIDC } from '../models/OAuthProviderOIDC';
import { OAuthProviderPLAYFAB } from '../models/OAuthProviderPLAYFAB';
import { OAuthProviderSUPABASE } from '../models/OAuthProviderSUPABASE';
import { OAuthRequest } from '../models/OAuthRequest';
import { OAuthResponse } from '../models/OAuthResponse';
import { OIDCAuthConfig } from '../models/OIDCAuthConfig';
import { PagingQueries } from '../models/PagingQueries';
import { PayForUserPolicyStrategy } from '../models/PayForUserPolicyStrategy';
import { PaymasterDeleteResponse } from '../models/PaymasterDeleteResponse';
import { PaymasterResponse } from '../models/PaymasterResponse';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { Plan } from '../models/Plan';
import { PlansResponse } from '../models/PlansResponse';
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
import { PolicyBalanceWithdrawResponse } from '../models/PolicyBalanceWithdrawResponse';
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
import { PreGenerateEmbeddedAccountsConfiguration } from '../models/PreGenerateEmbeddedAccountsConfiguration';
import { PrismaInputJsonValue } from '../models/PrismaInputJsonValue';
import { PrivateKeyPolicy } from '../models/PrivateKeyPolicy';
import { ProjectListResponse } from '../models/ProjectListResponse';
import { ProjectLogs } from '../models/ProjectLogs';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectStatsRequest } from '../models/ProjectStatsRequest';
import { ProjectStatsResponse } from '../models/ProjectStatsResponse';
import { QuoteExchangeResult } from '../models/QuoteExchangeResult';
import { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SIWEAuthenticateRequest } from '../models/SIWEAuthenticateRequest';
import { SIWEInitResponse } from '../models/SIWEInitResponse';
import { SIWERequest } from '../models/SIWERequest';
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
import { SponsorSchemaFIXEDRATE } from '../models/SponsorSchemaFIXEDRATE';
import { SponsorSchemaPAYFORUSER } from '../models/SponsorSchemaPAYFORUSER';
import { StartRecoveryRequest } from '../models/StartRecoveryRequest';
import { Stat } from '../models/Stat';
import { Status } from '../models/Status';
import { SubmitWeb3ActionRequest } from '../models/SubmitWeb3ActionRequest';
import { SubscriptionDeleteResponse } from '../models/SubscriptionDeleteResponse';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { SubscriptionResponsePlan } from '../models/SubscriptionResponsePlan';
import { SupabaseAuthConfig } from '../models/SupabaseAuthConfig';
import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { ThirdPartyOAuthRequest } from '../models/ThirdPartyOAuthRequest';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { Token } from '../models/Token';
import { TokenType } from '../models/TokenType';
import { TradeType } from '../models/TradeType';
import { TransactionConfirmedEventResponse } from '../models/TransactionConfirmedEventResponse';
import { TransactionIntent } from '../models/TransactionIntent';
import { TransactionIntentListQueries } from '../models/TransactionIntentListQueries';
import { TransactionIntentListResponse } from '../models/TransactionIntentListResponse';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { TransactionIntentResponseAccount } from '../models/TransactionIntentResponseAccount';
import { TransactionIntentResponseExpandable } from '../models/TransactionIntentResponseExpandable';
import { TransactionIntentResponsePlayer } from '../models/TransactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from '../models/TransactionIntentResponsePolicy';
import { TransactionStat } from '../models/TransactionStat';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { TriggerDeleteResponse } from '../models/TriggerDeleteResponse';
import { TriggerResponse } from '../models/TriggerResponse';
import { TypedDataField } from '../models/TypedDataField';
import { UnlinkRequest } from '../models/UnlinkRequest';
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
import { WithdrawalPolicyRequest } from '../models/WithdrawalPolicyRequest';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of an account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param cancelTransferOwnershipRequest 
     */
    public cancelTransferOwnership(id: string, cancelTransferOwnershipRequest: CancelTransferOwnershipRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.cancelTransferOwnership(id, cancelTransferOwnershipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelTransferOwnership(rsp)));
            }));
    }

    /**
     * Complete a recovery process of a recoverable account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param completeRecoveryRequest 
     */
    public completeRecovery(id: string, completeRecoveryRequest: CompleteRecoveryRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.completeRecovery(id, completeRecoveryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeRecovery(rsp)));
            }));
    }

    /**
     * Creates a new blockchain account for the provided player. If not player is provided, a new one will be created.  Account creation does not consume any gas. All accounts of a player will use the same address across blockchains.  Each player can only have one account per chain.
     * Create an account object.
     * @param createAccountRequest 
     */
    public createAccount(createAccountRequest: CreateAccountRequest, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.createAccount(createAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccount(rsp)));
            }));
    }

    /**
     * This endpoint can be used to deploy a smart contract account that was counterfactually generated.
     * Deploy an account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param deployRequest 
     */
    public deployAccount(id: string, deployRequest: DeployRequest, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.deployAccount(id, deployRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deployAccount(rsp)));
            }));
    }

    /**
     * Retrieves the details of an existing account.  Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * Get existing account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param expand 
     */
    public getAccount(id: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.getAccount(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccount(rsp)));
            }));
    }

    /**
     * Returns a list of accounts for the given player.  This object represents a player\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 accounts are shown per page.
     * List accounts of a player.
     * @param player Specifies the unique player ID (starts with pla_)
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getAccounts(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Observable<AccountListResponse> {
        const requestContextPromise = this.requestFactory.getAccounts(player, limit, skip, order, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccounts(rsp)));
            }));
    }

    /**
     * Perform a request to change the owner of an account.  To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param transferOwnershipRequest 
     */
    public requestTransferOwnership(id: string, transferOwnershipRequest: TransferOwnershipRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.requestTransferOwnership(id, transferOwnershipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestTransferOwnership(rsp)));
            }));
    }

    /**
     * **Custodial Accounts only** - Signs the typed data value with types data structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
     * Sign a given payload
     * @param id Specifies the unique account ID (starts with acc_).
     * @param signPayloadRequest 
     */
    public signPayload(id: string, signPayloadRequest: SignPayloadRequest, _options?: Configuration): Observable<SignPayloadResponse> {
        const requestContextPromise = this.requestFactory.signPayload(id, signPayloadRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signPayload(rsp)));
            }));
    }

    /**
     * Start a recovery process of a recoverable account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param startRecoveryRequest 
     */
    public startRecovery(id: string, startRecoveryRequest: StartRecoveryRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.startRecovery(id, startRecoveryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startRecovery(rsp)));
            }));
    }

    /**
     * Synchronize the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID (starts with acc_).
     */
    public syncAccount(id: string, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.syncAccount(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.syncAccount(rsp)));
            }));
    }

}

import { AdminAuthenticationApiRequestFactory, AdminAuthenticationApiResponseProcessor} from "../apis/AdminAuthenticationApi";
export class ObservableAdminAuthenticationApi {
    private requestFactory: AdminAuthenticationApiRequestFactory;
    private responseProcessor: AdminAuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AdminAuthenticationApiRequestFactory,
        responseProcessor?: AdminAuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AdminAuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AdminAuthenticationApiResponseProcessor();
    }

    /**
     * Creates an authenticated player for a third party authentication provider.  The player will be authenticated with the provider and an embedded account can be pre generated.
     * Create an authenticated player for a third party authentication provider.
     * @param createAuthPlayerRequest 
     */
    public createAuthPlayer(createAuthPlayerRequest: CreateAuthPlayerRequest, _options?: Configuration): Observable<AuthPlayerResponse> {
        const requestContextPromise = this.requestFactory.createAuthPlayer(createAuthPlayerRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAuthPlayer(rsp)));
            }));
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param body Specifies the oauth provider specific configuration.
     */
    public createOAuthConfig(body: OAuthConfig, _options?: Configuration): Observable<OAuthConfig> {
        const requestContextPromise = this.requestFactory.createOAuthConfig(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOAuthConfig(rsp)));
            }));
    }

    /**
     * Deletes a player auth object.  It will delete all linked accounts the player is authenticated with.
     * Deletes a player auth object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public deleteAuthPlayer(id: string, _options?: Configuration): Observable<AuthPlayerResponse> {
        const requestContextPromise = this.requestFactory.deleteAuthPlayer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAuthPlayer(rsp)));
            }));
    }

    /**
     * The endpoint deletes oauth configuration for specified provider for the current project environment.
     * Delete oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public deleteOAuthConfig(provider: OAuthProvider, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteOAuthConfig(provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOAuthConfig(rsp)));
            }));
    }

    /**
     * Retrieves a list of authenticated players.  Players have linked accounts and are authenticated with a provider.
     * List authenticated players.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param email Specifies the email address of the user.
     * @param externalUserId Specifies the external user ID.
     */
    public getAuthPlayers(limit?: number, skip?: number, order?: SortOrder, email?: string, externalUserId?: string, _options?: Configuration): Observable<AuthPlayerListResponse> {
        const requestContextPromise = this.requestFactory.getAuthPlayers(limit, skip, order, email, externalUserId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthPlayers(rsp)));
            }));
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public getOAuthConfig(provider: OAuthProvider, _options?: Configuration): Observable<OAuthConfig> {
        const requestContextPromise = this.requestFactory.getOAuthConfig(provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOAuthConfig(rsp)));
            }));
    }

    /**
     * List configured OAuth methods for the current project environment.
     * List of oauth configurations.
     */
    public listOAuthConfig(_options?: Configuration): Observable<OAuthConfigListResponse> {
        const requestContextPromise = this.requestFactory.listOAuthConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOAuthConfig(rsp)));
            }));
    }

    /**
     * Verifies the token generated by Openfort Auth.
     * Verify auth token.
     * @param token Specifies the auth token.
     */
    public verifyAuthToken(token: string, _options?: Configuration): Observable<AuthSessionResponse> {
        const requestContextPromise = this.requestFactory.verifyAuthToken(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyAuthToken(rsp)));
            }));
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public verifyOAuth(provider: OAuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.verifyOAuth(provider, oAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyOAuth(rsp)));
            }));
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by oauth token.
     * @param authenticateOAuthRequest 
     */
    public verifyOAuthToken(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.verifyOAuthToken(authenticateOAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyOAuthToken(rsp)));
            }));
    }

}

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * Authenticate player with oauth token.
     * @param authenticateOAuthRequest 
     */
    public authenticateOAuth(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.authenticateOAuth(authenticateOAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authenticateOAuth(rsp)));
            }));
    }

    /**
     * Authenticate player with SIWE
     * @param sIWEAuthenticateRequest 
     */
    public authenticateSIWE(sIWEAuthenticateRequest: SIWEAuthenticateRequest, _options?: Configuration): Observable<void | AuthResponse> {
        const requestContextPromise = this.requestFactory.authenticateSIWE(sIWEAuthenticateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authenticateSIWE(rsp)));
            }));
    }

    /**
     * The endpoint verifies the token generated by OAuth provider, creates or retrieves a player based on his email, and returns the jwt token for the player together with the player id.
     * Authorize player with token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public authorizeWithOAuthToken(provider: OAuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Observable<DeprecatedAuthenticatedPlayerResponse> {
        const requestContextPromise = this.requestFactory.authorizeWithOAuthToken(provider, oAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorizeWithOAuthToken(rsp)));
            }));
    }

    /**
     * Get the jwks.json file.  You can use the jwks.json file to verify the signature of a JWT token issued by Openfort Auth.
     * Get the jwks.json file.
     * @param publishableKey Specifies the project publishable key (starts with pk_).
     */
    public getJwks(publishableKey: string, _options?: Configuration): Observable<JwtKeyResponse> {
        const requestContextPromise = this.requestFactory.getJwks(publishableKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJwks(rsp)));
            }));
    }

    /**
     * Initialize OAuth.
     * @param oAuthInitRequest 
     */
    public initOAuth(oAuthInitRequest: OAuthInitRequest, _options?: Configuration): Observable<OAuthResponse> {
        const requestContextPromise = this.requestFactory.initOAuth(oAuthInitRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initOAuth(rsp)));
            }));
    }

    /**
     * Create a challenge to link external wallet to the player.
     * Initialize SIWE.
     * @param sIWERequest 
     */
    public initSIWE(sIWERequest: SIWERequest, _options?: Configuration): Observable<SIWEInitResponse> {
        const requestContextPromise = this.requestFactory.initSIWE(sIWERequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initSIWE(rsp)));
            }));
    }

    /**
     * Link external wallet.
     * @param sIWEAuthenticateRequest 
     */
    public linkSIWE(sIWEAuthenticateRequest: SIWEAuthenticateRequest, _options?: Configuration): Observable<AuthPlayerResponse | void> {
        const requestContextPromise = this.requestFactory.linkSIWE(sIWEAuthenticateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkSIWE(rsp)));
            }));
    }

    /**
     * Authenticate a player based on email and password.
     * Email and password login.
     * @param loginRequest 
     */
    public loginEmailPassword(loginRequest: LoginRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.loginEmailPassword(loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginEmailPassword(rsp)));
            }));
    }

    /**
     * When using Openfort Auth, the endpoint logs out the player.
     * Log out a player.
     * @param logoutRequest 
     */
    public logout(logoutRequest: LogoutRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.logout(logoutRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logout(rsp)));
            }));
    }

    /**
     */
    public me(_options?: Configuration): Observable<AuthPlayerResponse> {
        const requestContextPromise = this.requestFactory.me(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.me(rsp)));
            }));
    }

    /**
     * Get or create a new session for the player based on the refresh token.
     * Refresh or create auth session.
     * @param refreshTokenRequest 
     */
    public refresh(refreshTokenRequest: RefreshTokenRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.refresh(refreshTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refresh(rsp)));
            }));
    }

    /**
     * Create and authenticate a player based on email and password.
     * Email and password signup.
     * @param signupRequest 
     */
    public signupEmailPassword(signupRequest: SignupRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.signupEmailPassword(signupRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signupEmailPassword(rsp)));
            }));
    }

    /**
     * Verify oauth token of a third party auth provider.
     * @param thirdPartyOAuthRequest 
     */
    public thirdParty(thirdPartyOAuthRequest: ThirdPartyOAuthRequest, _options?: Configuration): Observable<AuthPlayerResponse> {
        const requestContextPromise = this.requestFactory.thirdParty(thirdPartyOAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.thirdParty(rsp)));
            }));
    }

    /**
     * Unlink OAuth account
     * @param unlinkRequest 
     */
    public unlinkOAuth(unlinkRequest: UnlinkRequest, _options?: Configuration): Observable<AuthPlayerResponse> {
        const requestContextPromise = this.requestFactory.unlinkOAuth(unlinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkOAuth(rsp)));
            }));
    }

    /**
     * Unlink external wallet.
     * @param sIWERequest 
     */
    public unlinkSIWE(sIWERequest: SIWERequest, _options?: Configuration): Observable<AuthPlayerResponse | void> {
        const requestContextPromise = this.requestFactory.unlinkSIWE(sIWERequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkSIWE(rsp)));
            }));
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public verifyOAuth(provider: OAuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.verifyOAuth(provider, oAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyOAuth(rsp)));
            }));
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * Retrieve player by oauth token.
     * @param authenticateOAuthRequest 
     */
    public verifyOAuthToken(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.verifyOAuthToken(authenticateOAuthRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyOAuthToken(rsp)));
            }));
    }

}

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class ObservableContractsApi {
    private requestFactory: ContractsApiRequestFactory;
    private responseProcessor: ContractsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractsApiResponseProcessor();
    }

    /**
     * Add a new contract to your project in Openfort
     * Create contract object.
     * @param createContractRequest 
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Observable<ContractResponse> {
        const requestContextPromise = this.requestFactory.createContract(createContractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContract(rsp)));
            }));
    }

    /**
     * Delete a contract from the project by providing its contract id.
     * Deletes a contract object.
     * @param id Specifies the unique contract ID (starts with con_).
     */
    public deleteContract(id: string, _options?: Configuration): Observable<ContractDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteContract(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContract(rsp)));
            }));
    }

    /**
     * Retrieve a contract by providing their contract id.
     * Get a contract.
     * @param id Specifies the unique contract ID (starts with con_).
     */
    public getContract(id: string, _options?: Configuration): Observable<ContractResponse> {
        const requestContextPromise = this.requestFactory.getContract(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContract(rsp)));
            }));
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
    public getContracts(limit?: number, skip?: number, order?: SortOrder, name?: string, deleted?: boolean, chainId?: number, address?: string, _options?: Configuration): Observable<ContractListResponse> {
        const requestContextPromise = this.requestFactory.getContracts(limit, skip, order, name, deleted, chainId, address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContracts(rsp)));
            }));
    }

    /**
     * Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read on chain contract data.
     * @param id Specifies the unique contract ID (starts with con_).
     * @param functionName The function name of the contract.
     * @param functionArgs The function arguments of the contract, in string format. Accepts pla_, con_ and acc_ IDs.
     */
    public readContract(id: string, functionName: string, functionArgs?: Array<any>, _options?: Configuration): Observable<ContractReadResponse> {
        const requestContextPromise = this.requestFactory.readContract(id, functionName, functionArgs, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readContract(rsp)));
            }));
    }

    /**
     * Updates a contract object.
     * @param id Specifies the unique contract ID (starts with con_).
     * @param updateContractRequest 
     */
    public updateContract(id: string, updateContractRequest: UpdateContractRequest, _options?: Configuration): Observable<ContractResponse> {
        const requestContextPromise = this.requestFactory.updateContract(id, updateContractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContract(rsp)));
            }));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Create a new event.
     * Create a new event.
     * @param createEventRequest 
     */
    public createEvent(createEventRequest: CreateEventRequest, _options?: Configuration): Observable<EventResponse> {
        const requestContextPromise = this.requestFactory.createEvent(createEventRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEvent(rsp)));
            }));
    }

    /**
     * Delete an event.
     * Delete an event.
     * @param id Specifies the unique event ID (starts with eve_).
     */
    public deleteEvent(id: string, _options?: Configuration): Observable<EventDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEvent(rsp)));
            }));
    }

    /**
     * Get a single event.
     * Get a single event.
     * @param id Specifies the unique event ID (starts with eve_).
     */
    public getEvent(id: string, _options?: Configuration): Observable<EventResponse> {
        const requestContextPromise = this.requestFactory.getEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEvent(rsp)));
            }));
    }

    /**
     * Returns a list of events.  By default, a maximum of 10 events are shown per page.
     * List notifications.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param name Specifies the name of the event
     * @param type Specifies the event type (BALANCE or TRANSACTION)
     * @param deleted Specifies if display deleted events
     */
    public getEvents(limit?: number, skip?: number, order?: SortOrder, name?: string, type?: string, deleted?: boolean, _options?: Configuration): Observable<BaseEntityListResponseEventResponse> {
        const requestContextPromise = this.requestFactory.getEvents(limit, skip, order, name, type, deleted, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEvents(rsp)));
            }));
    }

}

import { ExchangeApiRequestFactory, ExchangeApiResponseProcessor} from "../apis/ExchangeApi";
export class ObservableExchangeApi {
    private requestFactory: ExchangeApiRequestFactory;
    private responseProcessor: ExchangeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangeApiRequestFactory,
        responseProcessor?: ExchangeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExchangeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExchangeApiResponseProcessor();
    }

    /**
     * Creates token swap.
     * Create token swap.
     * @param createExchangeRequest 
     */
    public createSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.createSwap(createExchangeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSwap(rsp)));
            }));
    }

    /**
     * Quote token swap.
     * Quote token swap.
     * @param createExchangeRequest 
     */
    public quoteSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Observable<QuoteExchangeResult> {
        const requestContextPromise = this.requestFactory.quoteSwap(createExchangeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.quoteSwap(rsp)));
            }));
    }

}

import { InventoriesApiRequestFactory, InventoriesApiResponseProcessor} from "../apis/InventoriesApi";
export class ObservableInventoriesApi {
    private requestFactory: InventoriesApiRequestFactory;
    private responseProcessor: InventoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoriesApiRequestFactory,
        responseProcessor?: InventoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InventoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InventoriesApiResponseProcessor();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the cryptocurrency assets of an existing account.
     * @param id Specifies the unique account ID.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId 
     */
    public getAccountCryptoCurrencyInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getAccountCryptoCurrencyInventory(id, limit, skip, order, contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountCryptoCurrencyInventory(rsp)));
            }));
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the native asset of an existing account.
     * @param id Specifies the unique account ID.
     */
    public getAccountNativeInventory(id: string, _options?: Configuration): Observable<InventoryResponse> {
        const requestContextPromise = this.requestFactory.getAccountNativeInventory(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountNativeInventory(rsp)));
            }));
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the NFT assets of an existing account.
     * @param id Specifies the unique account ID.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contractId 
     */
    public getAccountNftInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getAccountNftInventory(id, limit, skip, order, contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountNftInventory(rsp)));
            }));
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get cryptocurrency list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contract Filter by contract ID (starts with con_).
     */
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contract?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contract, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerCryptoCurrencyInventory(rsp)));
            }));
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get native token list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     */
    public getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Observable<InventoryResponse> {
        const requestContextPromise = this.requestFactory.getPlayerNativeInventory(id, chainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerNativeInventory(rsp)));
            }));
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get NFTs list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param contract Filter by contract ID (starts with con_).
     */
    public getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contract?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerNftInventory(id, chainId, limit, skip, order, contract, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerNftInventory(rsp)));
            }));
    }

}

import { PaymasterApiRequestFactory, PaymasterApiResponseProcessor} from "../apis/PaymasterApi";
export class ObservablePaymasterApi {
    private requestFactory: PaymasterApiRequestFactory;
    private responseProcessor: PaymasterApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymasterApiRequestFactory,
        responseProcessor?: PaymasterApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymasterApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymasterApiResponseProcessor();
    }

    /**
     * Create a new paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Create a new paymaster.
     * @param createPaymasterRequest 
     */
    public createPaymaster(createPaymasterRequest: CreatePaymasterRequest, _options?: Configuration): Observable<PaymasterResponse> {
        const requestContextPromise = this.requestFactory.createPaymaster(createPaymasterRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymaster(rsp)));
            }));
    }

    /**
     * Delete the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Delete paymaster by id.
     * @param id 
     */
    public deletePaymaster(id: string, _options?: Configuration): Observable<PaymasterDeleteResponse> {
        const requestContextPromise = this.requestFactory.deletePaymaster(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePaymaster(rsp)));
            }));
    }

    /**
     * Returns the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Get paymaster by id.
     * @param id 
     */
    public getPaymaster(id: string, _options?: Configuration): Observable<PaymasterResponse> {
        const requestContextPromise = this.requestFactory.getPaymaster(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymaster(rsp)));
            }));
    }

    /**
     * Returns a list of paymasters.  This object represents the paymasters that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 paymasters are shown per page.
     * List paymasters.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public listPaymasters(limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Observable<Array<PaymasterResponse>> {
        const requestContextPromise = this.requestFactory.listPaymasters(limit, skip, order, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymasters(rsp)));
            }));
    }

    /**
     * Update a paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Update a paymaster.
     * @param id 
     * @param createPaymasterRequest 
     */
    public updatePaymaster(id: string, createPaymasterRequest: CreatePaymasterRequest, _options?: Configuration): Observable<PaymasterResponse> {
        const requestContextPromise = this.requestFactory.updatePaymaster(id, createPaymasterRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymaster(rsp)));
            }));
    }

}

import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";
export class ObservablePlayersApi {
    private requestFactory: PlayersApiRequestFactory;
    private responseProcessor: PlayersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersApiRequestFactory,
        responseProcessor?: PlayersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlayersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlayersApiResponseProcessor();
    }

    /**
     * This endpoint allows you to cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of a player.
     * @param id 
     * @param playerCancelTransferOwnershipRequest 
     */
    public cancelTransferAccountOwnership(id: string, playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.cancelTransferAccountOwnership(id, playerCancelTransferOwnershipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelTransferAccountOwnership(rsp)));
            }));
    }

    /**
     * Creates a Player.
     * Create a player object.
     * @param playerCreateRequest 
     */
    public createPlayer(playerCreateRequest: PlayerCreateRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.createPlayer(playerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlayer(rsp)));
            }));
    }

    /**
     * Deletes a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public deletePlayer(id: string, _options?: Configuration): Observable<PlayerDeleteResponse> {
        const requestContextPromise = this.requestFactory.deletePlayer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlayer(rsp)));
            }));
    }

    /**
     * Retrieves the details of an existing player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param expand Specifies the expandable fields.
     */
    public getPlayer(id: string, expand?: Array<PlayerResponseExpandable>, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.getPlayer(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayer(rsp)));
            }));
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
    public getPlayers(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PlayerResponseExpandable>, name?: string, _options?: Configuration): Observable<PlayerListResponse> {
        const requestContextPromise = this.requestFactory.getPlayers(limit, skip, order, expand, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayers(rsp)));
            }));
    }

    /**
     * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of a player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param playerTransferOwnershipRequest 
     */
    public requestTransferAccountOwnership(id: string, playerTransferOwnershipRequest: PlayerTransferOwnershipRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.requestTransferAccountOwnership(id, playerTransferOwnershipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestTransferAccountOwnership(rsp)));
            }));
    }

    /**
     * Updates the specified Player by setting the values of the parameters passed.
     * Updates a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param playerUpdateRequest 
     */
    public updatePlayer(id: string, playerUpdateRequest: PlayerUpdateRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.updatePlayer(id, playerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlayer(rsp)));
            }));
    }

}

import { PoliciesApiRequestFactory, PoliciesApiResponseProcessor} from "../apis/PoliciesApi";
export class ObservablePoliciesApi {
    private requestFactory: PoliciesApiRequestFactory;
    private responseProcessor: PoliciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PoliciesApiRequestFactory,
        responseProcessor?: PoliciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PoliciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PoliciesApiResponseProcessor();
    }

    /**
     * Create a policy object.
     * @param createPolicyRequest 
     */
    public createPolicy(createPolicyRequest: CreatePolicyRequest, _options?: Configuration): Observable<PolicyResponse> {
        const requestContextPromise = this.requestFactory.createPolicy(createPolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPolicy(rsp)));
            }));
    }

    /**
     * Transfer ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Withdraw tokens collected by policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param withdrawalPolicyRequest 
     */
    public createPolicyWithdrawal(id: string, withdrawalPolicyRequest: WithdrawalPolicyRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.createPolicyWithdrawal(id, withdrawalPolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPolicyWithdrawal(rsp)));
            }));
    }

    /**
     * Delete a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public deletePolicy(id: string, _options?: Configuration): Observable<PolicyDeleteResponse> {
        const requestContextPromise = this.requestFactory.deletePolicy(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePolicy(rsp)));
            }));
    }

    /**
     * Disable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public disablePolicy(id: string, _options?: Configuration): Observable<PolicyResponse> {
        const requestContextPromise = this.requestFactory.disablePolicy(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disablePolicy(rsp)));
            }));
    }

    /**
     * Enable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public enablePolicy(id: string, _options?: Configuration): Observable<PolicyResponse> {
        const requestContextPromise = this.requestFactory.enablePolicy(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enablePolicy(rsp)));
            }));
    }

    /**
     * Returns a list of Policies.
     * List policies.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param name Specifies the name of the policy.
     * @param deleted Specifies whether to include deleted policies.
     * @param chainId The chain ID of the policy.
     * @param enabled Specifies whether to include enabled policies.
     */
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PolicyResponseExpandable>, name?: string, deleted?: boolean, chainId?: number, enabled?: boolean, _options?: Configuration): Observable<PolicyListResponse> {
        const requestContextPromise = this.requestFactory.getPolicies(limit, skip, order, expand, name, deleted, chainId, enabled, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicies(rsp)));
            }));
    }

    /**
     * Retrieves the details of a Policy that has previously been created.
     * Get a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param expand Specifies the fields to expand.
     */
    public getPolicy(id: string, expand?: Array<PolicyResponseExpandable>, _options?: Configuration): Observable<PolicyResponse> {
        const requestContextPromise = this.requestFactory.getPolicy(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicy(rsp)));
            }));
    }

    /**
     * Get the amount of ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Get amount of tokens paid for gas policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public getPolicyBalance(id: string, _options?: Configuration): Observable<PolicyBalanceWithdrawResponse> {
        const requestContextPromise = this.requestFactory.getPolicyBalance(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyBalance(rsp)));
            }));
    }

    /**
     * List all gas reports of a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public getPolicyTotalGasUsage(id: string, _options?: Configuration): Observable<GasReportListResponse> {
        const requestContextPromise = this.requestFactory.getPolicyTotalGasUsage(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyTotalGasUsage(rsp)));
            }));
    }

    /**
     * Update a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param updatePolicyRequest 
     */
    public updatePolicy(id: string, updatePolicyRequest: UpdatePolicyRequest, _options?: Configuration): Observable<PolicyResponse> {
        const requestContextPromise = this.requestFactory.updatePolicy(id, updatePolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePolicy(rsp)));
            }));
    }

}

import { PolicyRulesApiRequestFactory, PolicyRulesApiResponseProcessor} from "../apis/PolicyRulesApi";
export class ObservablePolicyRulesApi {
    private requestFactory: PolicyRulesApiRequestFactory;
    private responseProcessor: PolicyRulesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyRulesApiRequestFactory,
        responseProcessor?: PolicyRulesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PolicyRulesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PolicyRulesApiResponseProcessor();
    }

    /**
     * Create a policy rule object.
     * @param createPolicyRuleRequest 
     */
    public createPolicyRule(createPolicyRuleRequest: CreatePolicyRuleRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.createPolicyRule(createPolicyRuleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPolicyRule(rsp)));
            }));
    }

    /**
     * Deletes a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     */
    public deletePolicyRule(id: string, _options?: Configuration): Observable<PolicyRuleDeleteResponse> {
        const requestContextPromise = this.requestFactory.deletePolicyRule(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePolicyRule(rsp)));
            }));
    }

    /**
     * Returns a list of policy rules of a policy.  The policy rules are returned sorted by creation date, with the most recently created policy rules appearing first.  By default, a maximum of 10 policy rules are shown per page.
     * List policy rules of a policy.
     * @param policy Specifies the unique policy ID (starts with pol_).
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getPolicyRules(policy: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'contract'>, _options?: Configuration): Observable<PolicyRuleListResponse> {
        const requestContextPromise = this.requestFactory.getPolicyRules(policy, limit, skip, order, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyRules(rsp)));
            }));
    }

    /**
     * Update a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyRule(id: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.updatePolicyRule(id, updatePolicyRuleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePolicyRule(rsp)));
            }));
    }

}

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class ObservableSessionsApi {
    private requestFactory: SessionsApiRequestFactory;
    private responseProcessor: SessionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionsApiResponseProcessor();
    }

    /**
     * Creates a Session.
     * Create a session key.
     * @param createSessionRequest 
     */
    public createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.createSession(createSessionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSession(rsp)));
            }));
    }

    /**
     * Returns a list of Sessions.
     * List session keys of a player.
     * @param player The player ID (starts with pla_)
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     */
    public getPlayerSessions(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<SessionResponseExpandable>, _options?: Configuration): Observable<SessionListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerSessions(player, limit, skip, order, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerSessions(rsp)));
            }));
    }

    /**
     * Retrieves the details of a Session that has previously been created.
     * Returns a player session by session id
     * @param id Specifies the unique session ID (starts with ses_).
     * @param expand Specifies the fields to expand.
     */
    public getSession(id: string, expand?: Array<SessionResponseExpandable>, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.getSession(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSession(rsp)));
            }));
    }

    /**
     * Revoke the session session key.
     * @param revokeSessionRequest 
     */
    public revokeSession(revokeSessionRequest: RevokeSessionRequest, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.revokeSession(revokeSessionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeSession(rsp)));
            }));
    }

    /**
     * Send signed userOperationHash to create session.
     * @param id Specifies the unique session ID (starts with ses_).
     * @param signatureRequest 
     */
    public signatureSession(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.signatureSession(id, signatureRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signatureSession(rsp)));
            }));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Create or add a developer account. Developer accounts can be used as for escrow, minting and transferring assets. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
     * Create a developer account.
     * @param developerAccountCreateRequest 
     */
    public createDeveloperAccount(developerAccountCreateRequest: DeveloperAccountCreateRequest, _options?: Configuration): Observable<DeveloperAccountResponse> {
        const requestContextPromise = this.requestFactory.createDeveloperAccount(developerAccountCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDeveloperAccount(rsp)));
            }));
    }

    /**
     * Delete a developer account from the current project.
     * Delete a developer account.
     * @param id Specifies a unique developer account (starts with dac_).
     */
    public deleteDeveloperAccount(id: string, _options?: Configuration): Observable<DeveloperAccountDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteDeveloperAccount(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDeveloperAccount(rsp)));
            }));
    }

    /**
     * Retrieve a developer account.
     * Get existing developer account.
     * @param id Specifies the unique developer account ID (starts with dac_).
     * @param expand 
     */
    public getDeveloperAccount(id: string, expand?: Array<DeveloperAccountResponseExpandable>, _options?: Configuration): Observable<DeveloperAccountResponse> {
        const requestContextPromise = this.requestFactory.getDeveloperAccount(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeveloperAccount(rsp)));
            }));
    }

    /**
     * Retrieve the list of the developer accounts for the current project.  By default, a maximum of 10 accounts are shown per page.
     * List of developer accounts.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param deleted Specifies whether to include deleted dev accounts.
     */
    public getDeveloperAccounts(limit?: number, skip?: number, order?: SortOrder, expand?: Array<DeveloperAccountResponseExpandable>, deleted?: boolean, _options?: Configuration): Observable<DeveloperAccountListResponse> {
        const requestContextPromise = this.requestFactory.getDeveloperAccounts(limit, skip, order, expand, deleted, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeveloperAccounts(rsp)));
            }));
    }

    /**
     * Generate message, which should be signed by the account your want to add as a developer account.
     * Generate message to sign
     * @param address Specifies the address
     */
    public getVerificationPayload(address: string, _options?: Configuration): Observable<DeveloperAccountGetMessageResponse> {
        const requestContextPromise = this.requestFactory.getVerificationPayload(address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVerificationPayload(rsp)));
            }));
    }

}

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class ObservableSubscriptionsApi {
    private requestFactory: SubscriptionsApiRequestFactory;
    private responseProcessor: SubscriptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApiResponseProcessor();
    }

    /**
     * Creates a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Create subscription for project.
     * @param createSubscriptionRequest 
     */
    public createSubscription(createSubscriptionRequest: CreateSubscriptionRequest, _options?: Configuration): Observable<SubscriptionResponse> {
        const requestContextPromise = this.requestFactory.createSubscription(createSubscriptionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscription(rsp)));
            }));
    }

    /**
     * Creates a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Create trigger for subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param createTriggerRequest 
     */
    public createTrigger(id: string, createTriggerRequest: CreateTriggerRequest, _options?: Configuration): Observable<TriggerResponse> {
        const requestContextPromise = this.requestFactory.createTrigger(id, createTriggerRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTrigger(rsp)));
            }));
    }

    /**
     * Deletes a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Delete subscription of project.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public deleteSubscription(id: string, _options?: Configuration): Observable<SubscriptionDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteSubscription(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSubscription(rsp)));
            }));
    }

    /**
     * Deletes a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Delete trigger of subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param triggerId Specifies the unique subscription ID (starts with sub_).
     */
    public deleteTrigger(id: string, triggerId: string, _options?: Configuration): Observable<TriggerDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteTrigger(id, triggerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTrigger(rsp)));
            }));
    }

    /**
     * Returns a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Get subscription of project.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public getSubscription(id: string, _options?: Configuration): Observable<SubscriptionResponse> {
        const requestContextPromise = this.requestFactory.getSubscription(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscription(rsp)));
            }));
    }

    /**
     * Returns a list of subscriptions for the given project.  This object represents the subscriptions where the project owner has subscribed to.  Subscriptions are returned sorted by creation date, with the most recently created subscriptions appearing first.  By default, a maximum of 10 subscriptions are shown per page.
     * List subscriptions of project.
     */
    public getSubscriptions(_options?: Configuration): Observable<BaseEntityListResponseSubscriptionResponse> {
        const requestContextPromise = this.requestFactory.getSubscriptions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscriptions(rsp)));
            }));
    }

    /**
     * Returns a trigger for the given id.  This object represents the trigger where the subscription owner has subscribed to.
     * Get trigger by id.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param triggerId Specifies the unique subscription ID (starts with sub_).
     */
    public getTrigger(id: string, triggerId: string, _options?: Configuration): Observable<TriggerResponse> {
        const requestContextPromise = this.requestFactory.getTrigger(id, triggerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTrigger(rsp)));
            }));
    }

    /**
     * Returns a list of triggers for the given subscription.  This object represents the triggers where the subscription owner has subscribed to.  Triggers are returned sorted by creation date, with the most recently created triggers appearing first.  By default, a maximum of 10 triggers are shown per page.
     * List triggers of subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public getTriggers(id: string, _options?: Configuration): Observable<BaseEntityListResponseTriggerResponse> {
        const requestContextPromise = this.requestFactory.getTriggers(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTriggers(rsp)));
            }));
    }

    /**
     * Lists logs of the triggered subscriptions for the given project.  This object represents the logs of the triggered subscriptions where the project owner has subscribed to.
     * List logs of triggered subscriptions.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param topic Specifies the topic of the subscription logs
     * @param status Specifies the status of the subscription logs
     * @param object Specifies the object ID of the object related to triggered notification
     * @param subscription Specifies the subscription ID
     * @param trigger Specifies the trigger ID
     * @param requestID Specifies the request ID
     */
    public listSubscriptionLogs(limit?: number, skip?: number, order?: SortOrder, topic?: APITopic, status?: Status, object?: string, subscription?: string, trigger?: string, requestID?: string, _options?: Configuration): Observable<BaseEntityListResponseLogResponse> {
        const requestContextPromise = this.requestFactory.listSubscriptionLogs(limit, skip, order, topic, status, object, subscription, trigger, requestID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionLogs(rsp)));
            }));
    }

    /**
     * Test a trigger  Returns a trigger for the given id.
     * Test trigger by id.
     */
    public testTrigger(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.testTrigger(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testTrigger(rsp)));
            }));
    }

}

import { TransactionIntentsApiRequestFactory, TransactionIntentsApiResponseProcessor} from "../apis/TransactionIntentsApi";
export class ObservableTransactionIntentsApi {
    private requestFactory: TransactionIntentsApiRequestFactory;
    private responseProcessor: TransactionIntentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionIntentsApiRequestFactory,
        responseProcessor?: TransactionIntentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionIntentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionIntentsApiResponseProcessor();
    }

    /**
     * Creates a TransactionIntent.  A pending TransactionIntent has the `response` attribute as undefined.  After the TransactionIntent is created and broadcasted to the blockchain, `response` will be populated with the transaction hash and a status (1 success, 0 fail).  When using a non-custodial account, a `nextAction` attribute is returned with the `userOperationHash` that must be signed by the owner of the account.
     * Create a transaction intent object.
     * @param createTransactionIntentRequest 
     */
    public createTransactionIntent(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.createTransactionIntent(createTransactionIntentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransactionIntent(rsp)));
            }));
    }

    /**
     * Estimate the gas cost of broadcasting a TransactionIntent.  This is a simulation, it does not send the transaction on-chain.  If a Policy ID is used that includes payment of gas in ERC-20 tokens, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens that will be used.
     * Estimate gas cost of creating a transaction
     * @param createTransactionIntentRequest 
     */
    public estimateTransactionIntentCost(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Observable<EstimateTransactionIntentGasResult> {
        const requestContextPromise = this.requestFactory.estimateTransactionIntentCost(createTransactionIntentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.estimateTransactionIntentCost(rsp)));
            }));
    }

    /**
     * Retrieves the details of a TransactionIntent that has previously been created.
     * Get a transaction intent object.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param expand Specifies the expandable fields.
     */
    public getTransactionIntent(id: string, expand?: Array<TransactionIntentResponseExpandable>, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.getTransactionIntent(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionIntent(rsp)));
            }));
    }

    /**
     * Returns a list of TransactionIntents.
     * List transaction intents.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param chainId The chain ID. Must be a [supported chain](/chains).
     * @param account Filter by account ID or developer account (starts with acc_ or dac_ respectively).
     * @param player Filter by player ID (starts with pla_).
     * @param status Filter by successful (1) or failed (0) transaction intents.
     * @param policy Filter by policy ID (starts with pol_).
     */
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<TransactionIntentResponseExpandable>, chainId?: number, account?: Array<string>, player?: Array<string>, status?: number, policy?: Array<string>, _options?: Configuration): Observable<TransactionIntentListResponse> {
        const requestContextPromise = this.requestFactory.getTransactionIntents(limit, skip, order, expand, chainId, account, player, status, policy, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionIntents(rsp)));
            }));
    }

    /**
     * Broadcasts a signed TransactionIntent to the blockchain.  Use this endpoint to send the signed `userOperationHash`. Openfort will then put it on-chain.
     * Send a signed transaction userOperationHash.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param signatureRequest 
     */
    public signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.signature(id, signatureRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signature(rsp)));
            }));
    }

}

import { Web3ConnectionsApiRequestFactory, Web3ConnectionsApiResponseProcessor} from "../apis/Web3ConnectionsApi";
export class ObservableWeb3ConnectionsApi {
    private requestFactory: Web3ConnectionsApiRequestFactory;
    private responseProcessor: Web3ConnectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: Web3ConnectionsApiRequestFactory,
        responseProcessor?: Web3ConnectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new Web3ConnectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new Web3ConnectionsApiResponseProcessor();
    }

    /**
     * This endpoint allows you to create a new web3 connection to your Openfort player. Together with the player ID (pla_), you need to provide a chain ID. The chain to use is required because Openfort needs to make sure the account is deployed, as counterfactual addresses cannot use web3 connections. The `uri` body parameter must contain a [WalletConnect pairing URI](https://specs.walletconnect.com/2.0/specs/clients/core/pairing/pairing-uri).
     * Create a Web3 Connection object.
     * @param createWeb3ConnectionRequest 
     */
    public createWeb3Connection(createWeb3ConnectionRequest: CreateWeb3ConnectionRequest, _options?: Configuration): Observable<Web3ConnectionResponse> {
        const requestContextPromise = this.requestFactory.createWeb3Connection(createWeb3ConnectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWeb3Connection(rsp)));
            }));
    }

    /**
     * Returns a list of web3 actions for the given web3 connection. The actions are returned sorted by creation date, with the most recently received action appearing first. By default, a maximum of ten actions are shown per page.
     * List Web3 actions from a web3 connection.
     * @param id Specifies the web3Connection ID (starts with web3_).
     */
    public getWeb3Actions(id: string, _options?: Configuration): Observable<Web3ActionListResponse> {
        const requestContextPromise = this.requestFactory.getWeb3Actions(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWeb3Actions(rsp)));
            }));
    }

    /**
     * Retrieves the details of an existing web3 connection. Supply the unique web3 connection ID from either a web3 connection creation request or the web3 connection list. Openfort will return the corresponding web3 connection information.
     * Get a web3Connection object.
     * @param id Specifies the unique web3Connection ID (starts with web3_).
     * @param expand Specifies the fields to expand.
     */
    public getWeb3Connection(id: string, expand?: Array<Web3ConnectionResponseExpandable>, _options?: Configuration): Observable<Web3ConnectionResponse> {
        const requestContextPromise = this.requestFactory.getWeb3Connection(id, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWeb3Connection(rsp)));
            }));
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
    public getWeb3Connections(limit?: number, skip?: number, order?: SortOrder, player?: string, disconnected?: boolean, _options?: Configuration): Observable<Web3ConnectionListResponse> {
        const requestContextPromise = this.requestFactory.getWeb3Connections(limit, skip, order, player, disconnected, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWeb3Connections(rsp)));
            }));
    }

    /**
     * Approve or Reject a web3 action for the given web3 connection.
     * Approve or Reject a web3 action
     * @param id Specifies the web3Connection ID (starts with web3_).
     * @param web3Action Specifies web3_action (starts with act_).
     * @param submitWeb3ActionRequest 
     */
    public submitWeb3Action(id: string, web3Action: string, submitWeb3ActionRequest: SubmitWeb3ActionRequest, _options?: Configuration): Observable<Web3ActionResponse> {
        const requestContextPromise = this.requestFactory.submitWeb3Action(id, web3Action, submitWeb3ActionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitWeb3Action(rsp)));
            }));
    }

}
