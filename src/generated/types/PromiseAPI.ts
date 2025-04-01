import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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
import { AccountAbstractionV6Details } from '../models/AccountAbstractionV6Details';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountEventResponse } from '../models/AccountEventResponse';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { AccountResponse } from '../models/AccountResponse';
import { AccountResponseExpandable } from '../models/AccountResponseExpandable';
import { AccountsListQueries } from '../models/AccountsListQueries';
import { Amount } from '../models/Amount';
import { ApiAuthorizedNetworkDeleteResponse } from '../models/ApiAuthorizedNetworkDeleteResponse';
import { ApiAuthorizedNetworkListResponse } from '../models/ApiAuthorizedNetworkListResponse';
import { ApiAuthorizedNetworkResponse } from '../models/ApiAuthorizedNetworkResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApiKeyType } from '../models/ApiKeyType';
import { AppleNativeOAuthConfig } from '../models/AppleNativeOAuthConfig';
import { AppleOAuthConfig } from '../models/AppleOAuthConfig';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthConfig } from '../models/AuthConfig';
import { AuthPlayerListQueries } from '../models/AuthPlayerListQueries';
import { AuthPlayerListResponse } from '../models/AuthPlayerListResponse';
import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { AuthPlayerResponsePlayer } from '../models/AuthPlayerResponsePlayer';
import { AuthPlayerResponseWithRecoveryShare } from '../models/AuthPlayerResponseWithRecoveryShare';
import { AuthProvider } from '../models/AuthProvider';
import { AuthProviderListResponse } from '../models/AuthProviderListResponse';
import { AuthProviderResponse } from '../models/AuthProviderResponse';
import { AuthProviderWithTypeResponse } from '../models/AuthProviderWithTypeResponse';
import { AuthResponse } from '../models/AuthResponse';
import { AuthSessionResponse } from '../models/AuthSessionResponse';
import { AuthenticateOAuthRequest } from '../models/AuthenticateOAuthRequest';
import { AuthenticatedPlayerResponse } from '../models/AuthenticatedPlayerResponse';
import { AuthenticationType } from '../models/AuthenticationType';
import { Authorize200Response } from '../models/Authorize200Response';
import { AuthorizePlayerRequest } from '../models/AuthorizePlayerRequest';
import { BalanceEventResponse } from '../models/BalanceEventResponse';
import { BalanceResponse } from '../models/BalanceResponse';
import { BaseEntityListResponseDeviceResponse } from '../models/BaseEntityListResponseDeviceResponse';
import { BaseEntityListResponseEmailSampleResponse } from '../models/BaseEntityListResponseEmailSampleResponse';
import { BaseEntityListResponseLogResponse } from '../models/BaseEntityListResponseLogResponse';
import { BaseEntityListResponseTriggerResponse } from '../models/BaseEntityListResponseTriggerResponse';
import { BasicAuthProvider } from '../models/BasicAuthProvider';
import { BasicAuthProviderEMAIL } from '../models/BasicAuthProviderEMAIL';
import { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest';
import { ChargeCustomTokenPolicyStrategy } from '../models/ChargeCustomTokenPolicyStrategy';
import { CheckoutRequest } from '../models/CheckoutRequest';
import { CheckoutResponse } from '../models/CheckoutResponse';
import { CheckoutSubscriptionRequest } from '../models/CheckoutSubscriptionRequest';
import { ChildProjectListResponse } from '../models/ChildProjectListResponse';
import { ChildProjectResponse } from '../models/ChildProjectResponse';
import { CodeChallenge } from '../models/CodeChallenge';
import { CodeChallengeVerify } from '../models/CodeChallengeVerify';
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
import { CreateDeveloperAccountCreateRequest } from '../models/CreateDeveloperAccountCreateRequest';
import { CreateDeviceRequest } from '../models/CreateDeviceRequest';
import { CreateEcosystemConfigurationRequest } from '../models/CreateEcosystemConfigurationRequest';
import { CreateEmailSampleRequest } from '../models/CreateEmailSampleRequest';
import { CreateEventRequest } from '../models/CreateEventRequest';
import { CreateExchangeRequest } from '../models/CreateExchangeRequest';
import { CreateForwarderContractRequest } from '../models/CreateForwarderContractRequest';
import { CreatePaymasterRequest } from '../models/CreatePaymasterRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest';
import { CreateProjectRequest } from '../models/CreateProjectRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateSignerRequest } from '../models/CreateSignerRequest';
import { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { CreateTriggerRequest } from '../models/CreateTriggerRequest';
import { Currency } from '../models/Currency';
import { CustomAuthConfig } from '../models/CustomAuthConfig';
import { DeleteSMTPConfigResponse } from '../models/DeleteSMTPConfigResponse';
import { DeployRequest } from '../models/DeployRequest';
import { DeprecatedAuthenticatedPlayerResponse } from '../models/DeprecatedAuthenticatedPlayerResponse';
import { DeveloperAccount } from '../models/DeveloperAccount';
import { DeveloperAccountDeleteResponse } from '../models/DeveloperAccountDeleteResponse';
import { DeveloperAccountGetMessageResponse } from '../models/DeveloperAccountGetMessageResponse';
import { DeveloperAccountListQueries } from '../models/DeveloperAccountListQueries';
import { DeveloperAccountListResponse } from '../models/DeveloperAccountListResponse';
import { DeveloperAccountResponse } from '../models/DeveloperAccountResponse';
import { DeveloperAccountResponseExpandable } from '../models/DeveloperAccountResponseExpandable';
import { DeviceCreateRequest } from '../models/DeviceCreateRequest';
import { DeviceListQueries } from '../models/DeviceListQueries';
import { DeviceResponse } from '../models/DeviceResponse';
import { DiscordOAuthConfig } from '../models/DiscordOAuthConfig';
import { EcosystemConfigurationResponse } from '../models/EcosystemConfigurationResponse';
import { EmailAuthConfig } from '../models/EmailAuthConfig';
import { EmailSampleDeleteResponse } from '../models/EmailSampleDeleteResponse';
import { EmailSampleResponse } from '../models/EmailSampleResponse';
import { EmailTypeRequest } from '../models/EmailTypeRequest';
import { EmailTypeResponse } from '../models/EmailTypeResponse';
import { EmbeddedResponse } from '../models/EmbeddedResponse';
import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeDEVELOPERACCOUNT } from '../models/EntityTypeDEVELOPERACCOUNT';
import { EntityTypeDEVICE } from '../models/EntityTypeDEVICE';
import { EntityTypeEMAILSAMPLE } from '../models/EntityTypeEMAILSAMPLE';
import { EntityTypeEVENT } from '../models/EntityTypeEVENT';
import { EntityTypeFORWARDERCONTRACT } from '../models/EntityTypeFORWARDERCONTRACT';
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
import { EntityTypeSMTPCONFIG } from '../models/EntityTypeSMTPCONFIG';
import { EntityTypeSUBSCRIPTION } from '../models/EntityTypeSUBSCRIPTION';
import { EntityTypeTRANSACTIONINTENT } from '../models/EntityTypeTRANSACTIONINTENT';
import { EntityTypeTRIGGER } from '../models/EntityTypeTRIGGER';
import { EntityTypeUSER } from '../models/EntityTypeUSER';
import { EpicGamesOAuthConfig } from '../models/EpicGamesOAuthConfig';
import { ErrorTypeINVALIDREQUESTERROR } from '../models/ErrorTypeINVALIDREQUESTERROR';
import { EstimateTransactionIntentGasResult } from '../models/EstimateTransactionIntentGasResult';
import { EventDeleteResponse } from '../models/EventDeleteResponse';
import { EventListQueries } from '../models/EventListQueries';
import { EventListResponse } from '../models/EventListResponse';
import { EventResponse } from '../models/EventResponse';
import { ExportedEmbeddedRequest } from '../models/ExportedEmbeddedRequest';
import { FacebookOAuthConfig } from '../models/FacebookOAuthConfig';
import { Fee } from '../models/Fee';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { FirebaseOAuthConfig } from '../models/FirebaseOAuthConfig';
import { FixedRateTokenPolicyStrategy } from '../models/FixedRateTokenPolicyStrategy';
import { ForwarderContractDeleteResponse } from '../models/ForwarderContractDeleteResponse';
import { ForwarderContractResponse } from '../models/ForwarderContractResponse';
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { GasReport } from '../models/GasReport';
import { GasReportListResponse } from '../models/GasReportListResponse';
import { GasReportTransactionIntents } from '../models/GasReportTransactionIntents';
import { GasReportTransactionIntentsListResponse } from '../models/GasReportTransactionIntentsListResponse';
import { GoogleNativeOAuthConfig } from '../models/GoogleNativeOAuthConfig';
import { GoogleOAuthConfig } from '../models/GoogleOAuthConfig';
import { GrantCallbackRequest } from '../models/GrantCallbackRequest';
import { GrantOAuthResponse } from '../models/GrantOAuthResponse';
import { InitEmbeddedRequest } from '../models/InitEmbeddedRequest';
import { Interaction } from '../models/Interaction';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { InventoryListResponse } from '../models/InventoryListResponse';
import { InventoryResponse } from '../models/InventoryResponse';
import { JwtKey } from '../models/JwtKey';
import { JwtKeyResponse } from '../models/JwtKeyResponse';
import { LineOAuthConfig } from '../models/LineOAuthConfig';
import { LinkedAccountResponse } from '../models/LinkedAccountResponse';
import { ListConfigRequest } from '../models/ListConfigRequest';
import { ListQueries } from '../models/ListQueries';
import { ListResponseAccount } from '../models/ListResponseAccount';
import { ListResponseSigner } from '../models/ListResponseSigner';
import { ListSubscriptionLogsRequest } from '../models/ListSubscriptionLogsRequest';
import { Log } from '../models/Log';
import { LogResponse } from '../models/LogResponse';
import { LoginOIDCRequest } from '../models/LoginOIDCRequest';
import { LoginRequest } from '../models/LoginRequest';
import { LogoutRequest } from '../models/LogoutRequest';
import { LootLockerOAuthConfig } from '../models/LootLockerOAuthConfig';
import { Money } from '../models/Money';
import { MonthRange } from '../models/MonthRange';
import { MyEcosystemResponse } from '../models/MyEcosystemResponse';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { OAuthConfigListResponse } from '../models/OAuthConfigListResponse';
import { OAuthInitRequest } from '../models/OAuthInitRequest';
import { OAuthInitRequestOptions } from '../models/OAuthInitRequestOptions';
import { OAuthProvders } from '../models/OAuthProvders';
import { OAuthProvider } from '../models/OAuthProvider';
import { OAuthProviderAPPLE } from '../models/OAuthProviderAPPLE';
import { OAuthProviderDISCORD } from '../models/OAuthProviderDISCORD';
import { OAuthProviderEPICGAMES } from '../models/OAuthProviderEPICGAMES';
import { OAuthProviderFACEBOOK } from '../models/OAuthProviderFACEBOOK';
import { OAuthProviderGOOGLE } from '../models/OAuthProviderGOOGLE';
import { OAuthProviderLINE } from '../models/OAuthProviderLINE';
import { OAuthProviderTWITTER } from '../models/OAuthProviderTWITTER';
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
import { PolicyReportQueries } from '../models/PolicyReportQueries';
import { PolicyReportTransactionIntentsQueries } from '../models/PolicyReportTransactionIntentsQueries';
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
import { PrivateKeyPolicy } from '../models/PrivateKeyPolicy';
import { ProjectListResponse } from '../models/ProjectListResponse';
import { ProjectLogs } from '../models/ProjectLogs';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectStatsRequest } from '../models/ProjectStatsRequest';
import { ProjectStatsResponse } from '../models/ProjectStatsResponse';
import { QuoteExchangeResult } from '../models/QuoteExchangeResult';
import { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import { RegisterEmbeddedRequest } from '../models/RegisterEmbeddedRequest';
import { RequestResetPasswordRequest } from '../models/RequestResetPasswordRequest';
import { RequestVerifyEmailRequest } from '../models/RequestVerifyEmailRequest';
import { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SIWEAuthenticateRequest } from '../models/SIWEAuthenticateRequest';
import { SIWEInitResponse } from '../models/SIWEInitResponse';
import { SIWERequest } from '../models/SIWERequest';
import { SMTPConfigResponse } from '../models/SMTPConfigResponse';
import { SessionListQueries } from '../models/SessionListQueries';
import { SessionListResponse } from '../models/SessionListResponse';
import { SessionResponse } from '../models/SessionResponse';
import { SessionResponseExpandable } from '../models/SessionResponseExpandable';
import { ShamirParams } from '../models/ShamirParams';
import { ShamirSigner } from '../models/ShamirSigner';
import { SignPayloadRequest } from '../models/SignPayloadRequest';
import { SignPayloadResponse } from '../models/SignPayloadResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { Signer } from '../models/Signer';
import { SignerListQueries } from '../models/SignerListQueries';
import { SignerOwner } from '../models/SignerOwner';
import { SignerResponse } from '../models/SignerResponse';
import { SignupRequest } from '../models/SignupRequest';
import { SortOrder } from '../models/SortOrder';
import { SponsorSchema } from '../models/SponsorSchema';
import { SponsorSchemaCHARGECUSTOMTOKENS } from '../models/SponsorSchemaCHARGECUSTOMTOKENS';
import { SponsorSchemaFIXEDRATE } from '../models/SponsorSchemaFIXEDRATE';
import { SponsorSchemaPAYFORUSER } from '../models/SponsorSchemaPAYFORUSER';
import { StandardDetails } from '../models/StandardDetails';
import { StartRecoveryRequest } from '../models/StartRecoveryRequest';
import { Stat } from '../models/Stat';
import { Status } from '../models/Status';
import { SubscriptionDeleteResponse } from '../models/SubscriptionDeleteResponse';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { SubscriptionResponsePlan } from '../models/SubscriptionResponsePlan';
import { SupabaseAuthConfig } from '../models/SupabaseAuthConfig';
import { SwitchChainRequest } from '../models/SwitchChainRequest';
import { TestTrigger200Response } from '../models/TestTrigger200Response';
import { ThirdPartyLinkRequest } from '../models/ThirdPartyLinkRequest';
import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { ThirdPartyOAuthProviderACCELBYTE } from '../models/ThirdPartyOAuthProviderACCELBYTE';
import { ThirdPartyOAuthProviderAPPLENATIVE } from '../models/ThirdPartyOAuthProviderAPPLENATIVE';
import { ThirdPartyOAuthProviderCUSTOM } from '../models/ThirdPartyOAuthProviderCUSTOM';
import { ThirdPartyOAuthProviderFIREBASE } from '../models/ThirdPartyOAuthProviderFIREBASE';
import { ThirdPartyOAuthProviderGOOGLENATIVE } from '../models/ThirdPartyOAuthProviderGOOGLENATIVE';
import { ThirdPartyOAuthProviderLOOTLOCKER } from '../models/ThirdPartyOAuthProviderLOOTLOCKER';
import { ThirdPartyOAuthProviderOIDC } from '../models/ThirdPartyOAuthProviderOIDC';
import { ThirdPartyOAuthProviderPLAYFAB } from '../models/ThirdPartyOAuthProviderPLAYFAB';
import { ThirdPartyOAuthProviderSUPABASE } from '../models/ThirdPartyOAuthProviderSUPABASE';
import { ThirdPartyOAuthRequest } from '../models/ThirdPartyOAuthRequest';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { Token } from '../models/Token';
import { TokenType } from '../models/TokenType';
import { TradeType } from '../models/TradeType';
import { TransactionAbstractionType } from '../models/TransactionAbstractionType';
import { TransactionConfirmedEventResponse } from '../models/TransactionConfirmedEventResponse';
import { TransactionIntent } from '../models/TransactionIntent';
import { TransactionIntentDetails } from '../models/TransactionIntentDetails';
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
import { TwitterOAuthConfig } from '../models/TwitterOAuthConfig';
import { TypedDataField } from '../models/TypedDataField';
import { TypedDomainData } from '../models/TypedDomainData';
import { UnlinkEmailRequest } from '../models/UnlinkEmailRequest';
import { UnlinkOAuthRequest } from '../models/UnlinkOAuthRequest';
import { UpdateContractRequest } from '../models/UpdateContractRequest';
import { UpdateDeveloperAccountCreateRequest } from '../models/UpdateDeveloperAccountCreateRequest';
import { UpdateEmailSampleRequest } from '../models/UpdateEmailSampleRequest';
import { UpdatePolicyRequest } from '../models/UpdatePolicyRequest';
import { UpdatePolicyRuleRequest } from '../models/UpdatePolicyRuleRequest';
import { UpdateProjectApiKeyRequest } from '../models/UpdateProjectApiKeyRequest';
import { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import { UpsertSMTPConfigRequest } from '../models/UpsertSMTPConfigRequest';
import { UserOperationV6 } from '../models/UserOperationV6';
import { UserProjectCreateRequest } from '../models/UserProjectCreateRequest';
import { UserProjectCreateRequestRole } from '../models/UserProjectCreateRequestRole';
import { UserProjectDeleteResponse } from '../models/UserProjectDeleteResponse';
import { UserProjectListResponse } from '../models/UserProjectListResponse';
import { UserProjectResponse } from '../models/UserProjectResponse';
import { UserProjectRole } from '../models/UserProjectRole';
import { UserProjectRoleADMIN } from '../models/UserProjectRoleADMIN';
import { UserProjectRoleMEMBER } from '../models/UserProjectRoleMEMBER';
import { UserProjectUpdateRequest } from '../models/UserProjectUpdateRequest';
import { VerifyEmailRequest } from '../models/VerifyEmailRequest';
import { WebhookResponse } from '../models/WebhookResponse';
import { WithdrawalPolicyRequest } from '../models/WithdrawalPolicyRequest';
import { ZKSyncDetails } from '../models/ZKSyncDetails';
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
     * Cancel a pending transfer of ownership.
     * Cancel request to transfer ownership of an account.
     * @param id Specifies the unique account ID (starts with acc_).
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
     * Creates a new blockchain account for the provided player. If not player is provided, a new one will be created.  Account creation does not consume any gas. All accounts of a player will use the same address across blockchains.  Each player can only have one account per chain.
     * Create an account object.
     * @param createAccountRequest 
     */
    public createAccount(createAccountRequest: CreateAccountRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createAccount(createAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * @param accountCreateRequest 
     */
    public createAccountV2(accountCreateRequest: AccountCreateRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.createAccountV2(accountCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint can be used to deploy a smart contract account that was counterfactually generated.
     * Deploy an account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param deployRequest 
     */
    public deployAccount(id: string, deployRequest: DeployRequest, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.deployAccount(id, deployRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public disableAccount(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing account.  Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.  Returns the latest 10 transaction intents created by this account.
     * Get existing account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param expand 
     */
    public getAccount(id: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(id, expand, _options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     */
    public getAccountV2(accountId: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccountV2(accountId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of accounts for the given player.  This object represents a player\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  Returns the latest 10 transaction intents for each account.  By default, a maximum of 10 accounts are shown per page.
     * List accounts of a player.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param player Specifies the unique player ID (starts with pla_)
     * @param address Specifies the address of the account
     * @param expand Specifies the fields to expand in the response.
     */
    public getAccounts(limit?: number, skip?: number, order?: SortOrder, player?: string, address?: string, expand?: Array<AccountResponseExpandable>, _options?: Configuration): Promise<AccountListResponse> {
        const result = this.api.getAccounts(limit, skip, order, player, address, expand, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param skip 
     * @param order 
     * @param accountType 
     */
    public listAccountsV2(limit?: number, skip?: number, order?: 'asc' | 'desc', accountType?: string, _options?: Configuration): Promise<ListResponseAccount> {
        const result = this.api.listAccountsV2(limit, skip, order, accountType, _options);
        return result.toPromise();
    }

    /**
     * Perform a request to change the owner of an account.  To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param id Specifies the unique account ID (starts with acc_).
     * @param transferOwnershipRequest 
     */
    public requestTransferOwnership(id: string, transferOwnershipRequest: TransferOwnershipRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.requestTransferOwnership(id, transferOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * **Custodial Accounts only** - Signs the typed repositories value with types repositories structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
     * Sign a given payload
     * @param id Specifies the unique account ID (starts with acc_).
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
     * Synchronize the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID (starts with acc_).
     */
    public syncAccount(id: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.syncAccount(id, _options);
        return result.toPromise();
    }


}



import { ObservableAdminAuthenticationApi } from './ObservableAPI';

import { AdminAuthenticationApiRequestFactory, AdminAuthenticationApiResponseProcessor} from "../apis/AdminAuthenticationApi";
export class PromiseAdminAuthenticationApi {
    private api: ObservableAdminAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdminAuthenticationApiRequestFactory,
        responseProcessor?: AdminAuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAdminAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorizePlayerRequest 
     */
    public authorize(authorizePlayerRequest: AuthorizePlayerRequest, _options?: Configuration): Promise<Authorize200Response> {
        const result = this.api.authorize(authorizePlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param body Specifies the oauth provider specific configuration.
     */
    public create(body: AuthConfig, _options?: Configuration): Promise<AuthConfig> {
        const result = this.api.create(body, _options);
        return result.toPromise();
    }

    /**
     * Creates an authenticated player.  The player will be authenticated with the provider and an embedded account can be pre generated.
     * Create an authenticated player.
     * @param createAuthPlayerRequest 
     */
    public createAuthPlayer(createAuthPlayerRequest: CreateAuthPlayerRequest, _options?: Configuration): Promise<AuthPlayerResponseWithRecoveryShare> {
        const result = this.api.createAuthPlayer(createAuthPlayerRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param body Specifies the oauth provider specific configuration.
     */
    public createOAuthConfig(body: AuthConfig, _options?: Configuration): Promise<AuthConfig> {
        const result = this.api.createOAuthConfig(body, _options);
        return result.toPromise();
    }

    /**
     * Deletes a player auth object.  It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
     * Deletes a player auth object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public deleteAuthPlayer(id: string, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.deleteAuthPlayer(id, _options);
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
     * Retrieves a list of authenticated players.  Players have linked accounts and are authenticated with a provider.
     * List authenticated players.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param email Specifies the email address of the user.
     * @param externalUserId Specifies the external user ID.
     */
    public getAuthPlayers(limit?: number, skip?: number, order?: SortOrder, email?: string, externalUserId?: string, _options?: Configuration): Promise<AuthPlayerListResponse> {
        const result = this.api.getAuthPlayers(limit, skip, order, email, externalUserId, _options);
        return result.toPromise();
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public getOAuthConfig(provider: OAuthProvider, _options?: Configuration): Promise<AuthConfig> {
        const result = this.api.getOAuthConfig(provider, _options);
        return result.toPromise();
    }

    /**
     * List configured OAuth methods for the current project environment.
     * List of oauth configurations.
     */
    public listOAuthConfig(_options?: Configuration): Promise<OAuthConfigListResponse> {
        const result = this.api.listOAuthConfig(_options);
        return result.toPromise();
    }

    /**
     * Verifies the token generated by Openfort Auth.
     * Verify auth token.
     * @param token Specifies the auth token.
     */
    public verifyAuthToken(token: string, _options?: Configuration): Promise<AuthSessionResponse> {
        const result = this.api.verifyAuthToken(token, _options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public verifyOAuth(provider: AuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyOAuth(provider, oAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by oauth token.
     * @param authenticateOAuthRequest 
     */
    public verifyOAuthToken(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyOAuthToken(authenticateOAuthRequest, _options);
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
     * Deprecated
     * Authenticate player with oauth token.
     * @param authenticateOAuthRequest 
     */
    public authenticateOAuth(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.authenticateOAuth(authenticateOAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * Authenticate player with SIWE
     * @param sIWEAuthenticateRequest 
     */
    public authenticateSIWE(sIWEAuthenticateRequest: SIWEAuthenticateRequest, _options?: Configuration): Promise<void | AuthResponse> {
        const result = this.api.authenticateSIWE(sIWEAuthenticateRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider, creates or retrieves a player based on his email, and returns the jwt token for the player together with the player id.
     * Authorize player with token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public authorizeWithOAuthToken(provider: AuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Promise<DeprecatedAuthenticatedPlayerResponse> {
        const result = this.api.authorizeWithOAuthToken(provider, oAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * Get the jwks.json file.  You can use the jwks.json file to verify the signature of a JWT token issued by Openfort Auth.
     * Get the jwks.json file.
     * @param publishableKey Specifies the project publishable key (starts with pk_).
     */
    public getJwks(publishableKey: string, _options?: Configuration): Promise<JwtKeyResponse> {
        const result = this.api.getJwks(publishableKey, _options);
        return result.toPromise();
    }

    /**
     * Initialize OAuth.
     * @param oAuthInitRequest 
     * @param xGame 
     */
    public initOAuth(oAuthInitRequest: OAuthInitRequest, xGame?: string, _options?: Configuration): Promise<OAuthResponse> {
        const result = this.api.initOAuth(oAuthInitRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Create a challenge to link external wallet to the player.
     * Initialize SIWE.
     * @param sIWERequest 
     * @param xGame 
     */
    public initSIWE(sIWERequest: SIWERequest, xGame?: string, _options?: Configuration): Promise<SIWEInitResponse> {
        const result = this.api.initSIWE(sIWERequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * @param loginRequest 
     * @param xGame 
     */
    public linkEmail(loginRequest: LoginRequest, xGame?: string, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.linkEmail(loginRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Initialize Link OAuth.
     * @param oAuthInitRequest 
     * @param xGame 
     */
    public linkOAuth(oAuthInitRequest: OAuthInitRequest, xGame?: string, _options?: Configuration): Promise<OAuthResponse> {
        const result = this.api.linkOAuth(oAuthInitRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Link external wallet.
     * @param sIWEAuthenticateRequest 
     */
    public linkSIWE(sIWEAuthenticateRequest: SIWEAuthenticateRequest, _options?: Configuration): Promise<AuthPlayerResponse | void> {
        const result = this.api.linkSIWE(sIWEAuthenticateRequest, _options);
        return result.toPromise();
    }

    /**
     * Initialize Link OAuth.
     * @param thirdPartyLinkRequest 
     * @param xGame 
     */
    public linkThirdParty(thirdPartyLinkRequest: ThirdPartyLinkRequest, xGame?: string, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.linkThirdParty(thirdPartyLinkRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Authenticate a player based on email and password.
     * Email and password login.
     * @param loginRequest 
     * @param xGame 
     */
    public loginEmailPassword(loginRequest: LoginRequest, xGame?: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.loginEmailPassword(loginRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Authenticate a player from an identity token.
     * OIDC Identity token.
     * @param loginOIDCRequest 
     * @param xGame 
     */
    public loginOIDC(loginOIDCRequest: LoginOIDCRequest, xGame?: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.loginOIDC(loginOIDCRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint logs out the player.
     * Log out a player.
     * @param logoutRequest 
     */
    public logout(logoutRequest: LogoutRequest, _options?: Configuration): Promise<void> {
        const result = this.api.logout(logoutRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public me(_options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.me(_options);
        return result.toPromise();
    }

    /**
     * Initialize OAuth.
     * @param key 
     */
    public poolOAuth(key: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.poolOAuth(key, _options);
        return result.toPromise();
    }

    /**
     * Get or create a new session for the player based on the refresh token.
     * Refresh or create auth session.
     * @param refreshTokenRequest 
     */
    public refresh(refreshTokenRequest: RefreshTokenRequest, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.refresh(refreshTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a guest player.
     * Create a guest player.
     * @param xGame 
     */
    public registerGuest(xGame?: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.registerGuest(xGame, _options);
        return result.toPromise();
    }

    /**
     * Start the Email Verification process for a player.
     * Request an Email Verification.
     * @param requestVerifyEmailRequest 
     */
    public requestEmailVerification(requestVerifyEmailRequest: RequestVerifyEmailRequest, _options?: Configuration): Promise<void> {
        const result = this.api.requestEmailVerification(requestVerifyEmailRequest, _options);
        return result.toPromise();
    }

    /**
     * Start the Reset process for a player\'s password.
     * Request a Reset password.
     * @param requestResetPasswordRequest 
     */
    public requestResetPassword(requestResetPasswordRequest: RequestResetPasswordRequest, _options?: Configuration): Promise<void> {
        const result = this.api.requestResetPassword(requestResetPasswordRequest, _options);
        return result.toPromise();
    }

    /**
     * Reset a player\'s password.
     * Reset a password.
     * @param resetPasswordRequest 
     */
    public resetPassword(resetPasswordRequest: ResetPasswordRequest, _options?: Configuration): Promise<void> {
        const result = this.api.resetPassword(resetPasswordRequest, _options);
        return result.toPromise();
    }

    /**
     * Create and authenticate a player based on email and password.
     * Email and password signup.
     * @param signupRequest 
     * @param xGame 
     */
    public signupEmailPassword(signupRequest: SignupRequest, xGame?: string, _options?: Configuration): Promise<AuthResponse> {
        const result = this.api.signupEmailPassword(signupRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * Verify oauth token of a third party auth provider.
     * @param thirdPartyOAuthRequest 
     * @param xGame 
     */
    public thirdParty(thirdPartyOAuthRequest: ThirdPartyOAuthRequest, xGame?: string, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.thirdParty(thirdPartyOAuthRequest, xGame, _options);
        return result.toPromise();
    }

    /**
     * @param unlinkEmailRequest 
     */
    public unlinkEmail(unlinkEmailRequest: UnlinkEmailRequest, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.unlinkEmail(unlinkEmailRequest, _options);
        return result.toPromise();
    }

    /**
     * Unlink OAuth account
     * @param unlinkOAuthRequest 
     */
    public unlinkOAuth(unlinkOAuthRequest: UnlinkOAuthRequest, _options?: Configuration): Promise<AuthPlayerResponse> {
        const result = this.api.unlinkOAuth(unlinkOAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * Unlink external wallet.
     * @param sIWERequest 
     */
    public unlinkSIWE(sIWERequest: SIWERequest, _options?: Configuration): Promise<AuthPlayerResponse | void> {
        const result = this.api.unlinkSIWE(sIWERequest, _options);
        return result.toPromise();
    }

    /**
     * Verify a player\'s email address.
     * Verify an email.
     * @param verifyEmailRequest 
     */
    public verifyEmail(verifyEmailRequest: VerifyEmailRequest, _options?: Configuration): Promise<void> {
        const result = this.api.verifyEmail(verifyEmailRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by token.
     * @param provider OAuth provider
     * @param oAuthRequest 
     */
    public verifyOAuth(provider: AuthProvider, oAuthRequest: OAuthRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyOAuth(provider, oAuthRequest, _options);
        return result.toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by oauth token.
     * @param authenticateOAuthRequest 
     */
    public verifyOAuthToken(authenticateOAuthRequest: AuthenticateOAuthRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.verifyOAuthToken(authenticateOAuthRequest, _options);
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
     * Using this endpoint, you can get the repositories returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read on chain contract repositories.
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
     * List configured auth methods for the current project environment.
     * List of auth configurations.
     * @param enabled 
     */
    public list(enabled?: boolean, _options?: Configuration): Promise<AuthProviderListResponse> {
        const result = this.api.list(enabled, _options);
        return result.toPromise();
    }


}



import { ObservableDevicesApi } from './ObservableAPI';

import { DevicesApiRequestFactory, DevicesApiResponseProcessor} from "../apis/DevicesApi";
export class PromiseDevicesApi {
    private api: ObservableDevicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DevicesApiRequestFactory,
        responseProcessor?: DevicesApiResponseProcessor
    ) {
        this.api = new ObservableDevicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param signerId 
     * @param deviceCreateRequest 
     */
    public createDevice(signerId: string, deviceCreateRequest: DeviceCreateRequest, _options?: Configuration): Promise<DeviceResponse> {
        const result = this.api.createDevice(signerId, deviceCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param signerId 
     * @param deviceId 
     */
    public getDevice(signerId: string, deviceId: string, _options?: Configuration): Promise<DeviceResponse> {
        const result = this.api.getDevice(signerId, deviceId, _options);
        return result.toPromise();
    }

    /**
     * @param signerId 
     * @param limit 
     * @param skip 
     * @param order 
     */
    public listDevices(signerId: string, limit?: number, skip?: number, order?: 'asc' | 'desc', _options?: Configuration): Promise<BaseEntityListResponseDeviceResponse> {
        const result = this.api.listDevices(signerId, limit, skip, order, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new event.
     * Create a new event.
     * @param createEventRequest 
     */
    public createEvent(createEventRequest: CreateEventRequest, _options?: Configuration): Promise<EventResponse> {
        const result = this.api.createEvent(createEventRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete an event.
     * Delete an event.
     * @param id Specifies the unique event ID (starts with eve_).
     */
    public deleteEvent(id: string, _options?: Configuration): Promise<EventDeleteResponse> {
        const result = this.api.deleteEvent(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single event.
     * Get a single event.
     * @param id Specifies the unique event ID (starts with eve_).
     */
    public getEvent(id: string, _options?: Configuration): Promise<EventResponse> {
        const result = this.api.getEvent(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of events.  By default, a maximum of 10 events are shown per page.
     * List events.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param name Specifies the name of the event
     * @param deleted Specifies if display deleted events
     */
    public getEvents(limit?: number, skip?: number, order?: SortOrder, name?: string, deleted?: boolean, _options?: Configuration): Promise<EventListResponse> {
        const result = this.api.getEvents(limit, skip, order, name, deleted, _options);
        return result.toPromise();
    }


}



import { ObservableExchangeApi } from './ObservableAPI';

import { ExchangeApiRequestFactory, ExchangeApiResponseProcessor} from "../apis/ExchangeApi";
export class PromiseExchangeApi {
    private api: ObservableExchangeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangeApiRequestFactory,
        responseProcessor?: ExchangeApiResponseProcessor
    ) {
        this.api = new ObservableExchangeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates token swap.
     * Create token swap.
     * @param createExchangeRequest 
     */
    public createSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createSwap(createExchangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Quote token swap.
     * Quote token swap.
     * @param createExchangeRequest 
     */
    public quoteSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Promise<QuoteExchangeResult> {
        const result = this.api.quoteSwap(createExchangeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableForwarderContractApi } from './ObservableAPI';

import { ForwarderContractApiRequestFactory, ForwarderContractApiResponseProcessor} from "../apis/ForwarderContractApi";
export class PromiseForwarderContractApi {
    private api: ObservableForwarderContractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ForwarderContractApiRequestFactory,
        responseProcessor?: ForwarderContractApiResponseProcessor
    ) {
        this.api = new ObservableForwarderContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
     * Create a new forwarder contract.
     * @param createForwarderContractRequest 
     */
    public createForwarderContract(createForwarderContractRequest: CreateForwarderContractRequest, _options?: Configuration): Promise<ForwarderContractResponse> {
        const result = this.api.createForwarderContract(createForwarderContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
     * Delete forwarder contract by id.
     * @param id 
     */
    public deleteForwarderContract(id: string, _options?: Configuration): Promise<ForwarderContractDeleteResponse> {
        const result = this.api.deleteForwarderContract(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
     * Get forwarder contract by id.
     * @param id 
     */
    public getForwarderContract(id: string, _options?: Configuration): Promise<ForwarderContractResponse> {
        const result = this.api.getForwarderContract(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 forwarder contract are shown per page.
     * List forwarder contract.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public listForwarderContracts(limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Promise<Array<ForwarderContractResponse>> {
        const result = this.api.listForwarderContracts(limit, skip, order, _options);
        return result.toPromise();
    }

    /**
     * Update a forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
     * Update a forwarder contract.
     * @param id 
     * @param createForwarderContractRequest 
     */
    public updateForwarderContract(id: string, createForwarderContractRequest: CreateForwarderContractRequest, _options?: Configuration): Promise<ForwarderContractResponse> {
        const result = this.api.updateForwarderContract(id, createForwarderContractRequest, _options);
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
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
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
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the native asset of an existing account.
     * @param id Specifies the unique account ID.
     */
    public getAccountNativeInventory(id: string, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getAccountNativeInventory(id, _options);
        return result.toPromise();
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
    public getAccountNftInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getAccountNftInventory(id, limit, skip, order, contractId, _options);
        return result.toPromise();
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
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contract?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contract, _options);
        return result.toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get native token list of player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param chainId Filter by chain id.
     */
    public getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Promise<InventoryResponse> {
        const result = this.api.getPlayerNativeInventory(id, chainId, _options);
        return result.toPromise();
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
    public getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contract?: Array<string>, _options?: Configuration): Promise<InventoryListResponse> {
        const result = this.api.getPlayerNftInventory(id, chainId, limit, skip, order, contract, _options);
        return result.toPromise();
    }


}



import { ObservablePaymasterApi } from './ObservableAPI';

import { PaymasterApiRequestFactory, PaymasterApiResponseProcessor} from "../apis/PaymasterApi";
export class PromisePaymasterApi {
    private api: ObservablePaymasterApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymasterApiRequestFactory,
        responseProcessor?: PaymasterApiResponseProcessor
    ) {
        this.api = new ObservablePaymasterApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Create a new paymaster.
     * @param createPaymasterRequest 
     */
    public createPaymaster(createPaymasterRequest: CreatePaymasterRequest, _options?: Configuration): Promise<PaymasterResponse> {
        const result = this.api.createPaymaster(createPaymasterRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Delete paymaster by id.
     * @param id 
     */
    public deletePaymaster(id: string, _options?: Configuration): Promise<PaymasterDeleteResponse> {
        const result = this.api.deletePaymaster(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Get paymaster by id.
     * @param id 
     */
    public getPaymaster(id: string, _options?: Configuration): Promise<PaymasterResponse> {
        const result = this.api.getPaymaster(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of paymasters.  This object represents the paymasters that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 paymasters are shown per page.
     * List paymasters.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public listPaymasters(limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Promise<Array<PaymasterResponse>> {
        const result = this.api.listPaymasters(limit, skip, order, _options);
        return result.toPromise();
    }

    /**
     * Update a paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Update a paymaster.
     * @param id 
     * @param createPaymasterRequest 
     */
    public updatePaymaster(id: string, createPaymasterRequest: CreatePaymasterRequest, _options?: Configuration): Promise<PaymasterResponse> {
        const result = this.api.updatePaymaster(id, createPaymasterRequest, _options);
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
     * Creates a player.
     * Create a player object.
     * @param playerCreateRequest 
     */
    public createPlayer(playerCreateRequest: PlayerCreateRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.createPlayer(playerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
     * Deletes a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public deletePlayer(id: string, _options?: Configuration): Promise<PlayerDeleteResponse> {
        const result = this.api.deletePlayer(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of a player that has previously been created.  Returns the latest 10 transaction intents that were created with this player.
     * Retrieves the details of an existing player.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param expand Specifies the expandable fields.
     */
    public getPlayer(id: string, expand?: Array<PlayerResponseExpandable>, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.getPlayer(id, expand, _options);
        return result.toPromise();
    }

    /**
     * By default, a maximum of 10 players are shown.  Returns the latest 10 transaction intents that were created with each player.
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
     * Updates the specified player by setting the values of the parameters passed.
     * Updates a player object.
     * @param id Specifies the unique player ID (starts with pla_).
     * @param playerUpdateRequest 
     */
    public updatePlayer(id: string, playerUpdateRequest: PlayerUpdateRequest, _options?: Configuration): Promise<PlayerResponse> {
        const result = this.api.updatePlayer(id, playerUpdateRequest, _options);
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
     * Transfer ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Withdraw tokens collected by policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param withdrawalPolicyRequest 
     */
    public createPolicyWithdrawal(id: string, withdrawalPolicyRequest: WithdrawalPolicyRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createPolicyWithdrawal(id, withdrawalPolicyRequest, _options);
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
     * Returns a list of Policies.  Returns the latest 10 transaction intents for each policy.
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
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PolicyResponseExpandable>, name?: string, deleted?: boolean, chainId?: number, enabled?: boolean, _options?: Configuration): Promise<PolicyListResponse> {
        const result = this.api.getPolicies(limit, skip, order, expand, name, deleted, chainId, enabled, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of a Policy that has previously been created.  Returns the latest 10 transaction intents that used this policy.
     * Get a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param expand Specifies the fields to expand.
     */
    public getPolicy(id: string, expand?: Array<PolicyResponseExpandable>, _options?: Configuration): Promise<PolicyResponse> {
        const result = this.api.getPolicy(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Get the amount of ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Get amount of tokens paid for gas policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public getPolicyBalance(id: string, _options?: Configuration): Promise<PolicyBalanceWithdrawResponse> {
        const result = this.api.getPolicyBalance(id, _options);
        return result.toPromise();
    }

    /**
     * List transaction intents of a policy report.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param to The start date of the period in unix timestamp.
     * @param _from The end date of the period in unix timestamp.
     */
    public getPolicyReportTransactionIntents(id: string, to: number, _from: number, _options?: Configuration): Promise<GasReportTransactionIntentsListResponse> {
        const result = this.api.getPolicyReportTransactionIntents(id, to, _from, _options);
        return result.toPromise();
    }

    /**
     * List all gas reports of a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public getPolicyTotalGasUsage(id: string, limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Promise<GasReportListResponse> {
        const result = this.api.getPolicyTotalGasUsage(id, limit, skip, order, _options);
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
    public createPolicyRule(createPolicyRuleRequest: CreatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.createPolicyRule(createPolicyRuleRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     */
    public deletePolicyRule(id: string, _options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        const result = this.api.deletePolicyRule(id, _options);
        return result.toPromise();
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
    public getPolicyRules(policy: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'contract'>, _options?: Configuration): Promise<PolicyRuleListResponse> {
        const result = this.api.getPolicyRules(policy, limit, skip, order, expand, _options);
        return result.toPromise();
    }

    /**
     * Update a policy rule object.
     * @param id Specifies the unique policy rule ID (starts with afu_).
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyRule(id: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Promise<PolicyRuleResponse> {
        const result = this.api.updatePolicyRule(id, updatePolicyRuleRequest, _options);
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
     * Creates a Session.
     * Create a session key.
     * @param createSessionRequest 
     * @param xBehalfOfProject 
     */
    public createSession(createSessionRequest: CreateSessionRequest, xBehalfOfProject?: string, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.createSession(createSessionRequest, xBehalfOfProject, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
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
     * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
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
     * @param xBehalfOfProject 
     */
    public revokeSession(revokeSessionRequest: RevokeSessionRequest, xBehalfOfProject?: string, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.revokeSession(revokeSessionRequest, xBehalfOfProject, _options);
        return result.toPromise();
    }

    /**
     * Send signed userOperationHash to create session.
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
     * Create or add a developer account. Developer accounts can be used as for escrow, minting and transferring assets. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
     * Create a developer account.
     * @param createDeveloperAccountCreateRequest 
     */
    public createDeveloperAccount(createDeveloperAccountCreateRequest: CreateDeveloperAccountCreateRequest, _options?: Configuration): Promise<DeveloperAccountResponse> {
        const result = this.api.createDeveloperAccount(createDeveloperAccountCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a developer account from the current project.
     * Delete a developer account.
     * @param id Specifies a unique developer account (starts with dac_).
     */
    public deleteDeveloperAccount(id: string, _options?: Configuration): Promise<DeveloperAccountDeleteResponse> {
        const result = this.api.deleteDeveloperAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a developer account.  Returns the latest 10 transaction intents that were created with each developer account.
     * Get existing developer account.
     * @param id Specifies the unique developer account ID (starts with dac_).
     * @param expand 
     */
    public getDeveloperAccount(id: string, expand?: Array<DeveloperAccountResponseExpandable>, _options?: Configuration): Promise<DeveloperAccountResponse> {
        const result = this.api.getDeveloperAccount(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the list of the developer accounts for the current project.  Returns the latest 10 transaction intents that were created with each developer account.  By default, a maximum of 10 accounts are shown per page.
     * List of developer accounts.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param deleted Specifies whether to include deleted dev accounts.
     */
    public getDeveloperAccounts(limit?: number, skip?: number, order?: SortOrder, expand?: Array<DeveloperAccountResponseExpandable>, deleted?: boolean, _options?: Configuration): Promise<DeveloperAccountListResponse> {
        const result = this.api.getDeveloperAccounts(limit, skip, order, expand, deleted, _options);
        return result.toPromise();
    }

    /**
     * Generate message, which should be signed by the account your want to add as a developer account.
     * Generate message to sign
     * @param address Specifies the address
     */
    public getVerificationPayload(address: string, _options?: Configuration): Promise<DeveloperAccountGetMessageResponse> {
        const result = this.api.getVerificationPayload(address, _options);
        return result.toPromise();
    }

    /**
     * Update a developer account.
     * Update a developer account.
     * @param id 
     * @param updateDeveloperAccountCreateRequest 
     */
    public updateDeveloperAccount(id: string, updateDeveloperAccountCreateRequest: UpdateDeveloperAccountCreateRequest, _options?: Configuration): Promise<DeveloperAccountResponse> {
        const result = this.api.updateDeveloperAccount(id, updateDeveloperAccountCreateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSignersApi } from './ObservableAPI';

import { SignersApiRequestFactory, SignersApiResponseProcessor} from "../apis/SignersApi";
export class PromiseSignersApi {
    private api: ObservableSignersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SignersApiRequestFactory,
        responseProcessor?: SignersApiResponseProcessor
    ) {
        this.api = new ObservableSignersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createSignerRequest 
     */
    public createSigner(createSignerRequest: CreateSignerRequest, _options?: Configuration): Promise<SignerResponse> {
        const result = this.api.createSigner(createSignerRequest, _options);
        return result.toPromise();
    }

    /**
     * @param signerId 
     */
    public exportSigner(signerId: string, _options?: Configuration): Promise<void> {
        const result = this.api.exportSigner(signerId, _options);
        return result.toPromise();
    }

    /**
     * @param signerId 
     */
    public getSigner(signerId: string, _options?: Configuration): Promise<SignerResponse> {
        const result = this.api.getSigner(signerId, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param skip 
     * @param order 
     * @param signerType 
     * @param account 
     */
    public listSigners(limit?: number, skip?: number, order?: 'asc' | 'desc', signerType?: string, account?: string, _options?: Configuration): Promise<ListResponseSigner> {
        const result = this.api.listSigners(limit, skip, order, signerType, account, _options);
        return result.toPromise();
    }


}



import { ObservableSubscriptionsApi } from './ObservableAPI';

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class PromiseSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Create subscription for project.
     * @param createSubscriptionRequest 
     */
    public createSubscription(createSubscriptionRequest: CreateSubscriptionRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.createSubscription(createSubscriptionRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Create trigger for subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param createTriggerRequest 
     */
    public createTrigger(id: string, createTriggerRequest: CreateTriggerRequest, _options?: Configuration): Promise<TriggerResponse> {
        const result = this.api.createTrigger(id, createTriggerRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Delete subscription of project.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public deleteSubscription(id: string, _options?: Configuration): Promise<SubscriptionDeleteResponse> {
        const result = this.api.deleteSubscription(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Delete trigger of subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param triggerId Specifies the unique subscription ID (starts with sub_).
     */
    public deleteTrigger(id: string, triggerId: string, _options?: Configuration): Promise<TriggerDeleteResponse> {
        const result = this.api.deleteTrigger(id, triggerId, _options);
        return result.toPromise();
    }

    /**
     * Returns a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Get subscription of project.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public getSubscription(id: string, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.getSubscription(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of subscriptions for the given project.  This object represents the subscriptions where the project owner has subscribed to.  Subscriptions are returned sorted by creation date, with the most recently created subscriptions appearing first.  By default, a maximum of 10 subscriptions are shown per page.
     * List subscriptions of project.
     */
    public getSubscriptions(_options?: Configuration): Promise<SubscriptionListResponse> {
        const result = this.api.getSubscriptions(_options);
        return result.toPromise();
    }

    /**
     * Returns a trigger for the given id.  This object represents the trigger where the subscription owner has subscribed to.
     * Get trigger by id.
     * @param id Specifies the unique subscription ID (starts with sub_).
     * @param triggerId Specifies the unique subscription ID (starts with sub_).
     */
    public getTrigger(id: string, triggerId: string, _options?: Configuration): Promise<TriggerResponse> {
        const result = this.api.getTrigger(id, triggerId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of triggers for the given subscription.  This object represents the triggers where the subscription owner has subscribed to.  Triggers are returned sorted by creation date, with the most recently created triggers appearing first.  By default, a maximum of 10 triggers are shown per page.
     * List triggers of subscription.
     * @param id Specifies the unique subscription ID (starts with sub_).
     */
    public getTriggers(id: string, _options?: Configuration): Promise<BaseEntityListResponseTriggerResponse> {
        const result = this.api.getTriggers(id, _options);
        return result.toPromise();
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
    public listSubscriptionLogs(limit?: number, skip?: number, order?: SortOrder, topic?: APITopic, status?: Status, object?: string, subscription?: string, trigger?: string, requestID?: string, _options?: Configuration): Promise<BaseEntityListResponseLogResponse> {
        const result = this.api.listSubscriptionLogs(limit, skip, order, topic, status, object, subscription, trigger, requestID, _options);
        return result.toPromise();
    }

    /**
     * Test a trigger  Returns a trigger for the given id.
     * Test trigger by id.
     */
    public testTrigger(_options?: Configuration): Promise<TestTrigger200Response> {
        const result = this.api.testTrigger(_options);
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
     * Creates a TransactionIntent.  A pending TransactionIntent has the `response` attribute as undefined.  After the TransactionIntent is created and broadcasted to the blockchain, `response` will be populated with the transaction hash and a status (1 success, 0 fail).  When using a non-custodial account, a `nextAction` attribute is returned with the `userOperationHash` that must be signed by the owner of the account.
     * Create a transaction intent object.
     * @param createTransactionIntentRequest 
     * @param xBehalfOfProject 
     */
    public createTransactionIntent(createTransactionIntentRequest: CreateTransactionIntentRequest, xBehalfOfProject?: string, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.createTransactionIntent(createTransactionIntentRequest, xBehalfOfProject, _options);
        return result.toPromise();
    }

    /**
     * Estimate the gas cost of broadcasting a TransactionIntent.  This is a simulation, it does not send the transaction on-chain.  If a Policy ID is used that includes payment of gas in ERC-20 tokens, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens that will be used.
     * Estimate gas cost of creating a transaction
     * @param createTransactionIntentRequest 
     */
    public estimateTransactionIntentCost(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<EstimateTransactionIntentGasResult> {
        const result = this.api.estimateTransactionIntentCost(createTransactionIntentRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of a TransactionIntent that has previously been created.
     * Get a transaction intent object.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param expand Specifies the expandable fields.
     */
    public getTransactionIntent(id: string, expand?: Array<TransactionIntentResponseExpandable>, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.getTransactionIntent(id, expand, _options);
        return result.toPromise();
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
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<TransactionIntentResponseExpandable>, chainId?: number, account?: Array<string>, player?: Array<string>, status?: number, policy?: Array<string>, _options?: Configuration): Promise<TransactionIntentListResponse> {
        const result = this.api.getTransactionIntents(limit, skip, order, expand, chainId, account, player, status, policy, _options);
        return result.toPromise();
    }

    /**
     * Broadcasts a signed TransactionIntent to the blockchain.  Use this endpoint to send the signed `signableHash`. Openfort will then put it on-chain.
     * Send a signed transaction signableHash.
     * @param id Specifies the unique transaction intent ID (starts with tin_).
     * @param signatureRequest 
     */
    public signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<TransactionIntentResponse> {
        const result = this.api.signature(id, signatureRequest, _options);
        return result.toPromise();
    }


}



