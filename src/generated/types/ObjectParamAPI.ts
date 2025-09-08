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
import { AccountEventResponse } from '../models/AccountEventResponse';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListQueriesV2 } from '../models/AccountListQueriesV2';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { AccountResponse } from '../models/AccountResponse';
import { AccountResponseExpandable } from '../models/AccountResponseExpandable';
import { AccountResponsePlayer } from '../models/AccountResponsePlayer';
import { AccountV2Response } from '../models/AccountV2Response';
import { ActionRequiredResponse } from '../models/ActionRequiredResponse';
import { Actions } from '../models/Actions';
import { AllowedOriginsRequest } from '../models/AllowedOriginsRequest';
import { AllowedOriginsResponse } from '../models/AllowedOriginsResponse';
import { Amount } from '../models/Amount';
import { ApiAuthorizedNetworkDeleteResponse } from '../models/ApiAuthorizedNetworkDeleteResponse';
import { ApiAuthorizedNetworkListResponse } from '../models/ApiAuthorizedNetworkListResponse';
import { ApiAuthorizedNetworkResponse } from '../models/ApiAuthorizedNetworkResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApiKeyType } from '../models/ApiKeyType';
import { AppleOAuthConfig } from '../models/AppleOAuthConfig';
import { AssetInventory } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthConfig } from '../models/AuthConfig';
import { AuthMigrationListResponse } from '../models/AuthMigrationListResponse';
import { AuthMigrationResponse } from '../models/AuthMigrationResponse';
import { AuthMigrationStatus } from '../models/AuthMigrationStatus';
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
import { AuthenticateOAuthRequestProvider } from '../models/AuthenticateOAuthRequestProvider';
import { AuthenticatedPlayerResponse } from '../models/AuthenticatedPlayerResponse';
import { AuthenticationType } from '../models/AuthenticationType';
import { Authorize200Response } from '../models/Authorize200Response';
import { AuthorizePlayerRequest } from '../models/AuthorizePlayerRequest';
import { BalanceEventResponse } from '../models/BalanceEventResponse';
import { BalanceResponse } from '../models/BalanceResponse';
import { BaseEntityListResponseAccountV2Response } from '../models/BaseEntityListResponseAccountV2Response';
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
import { CreateEmbeddedRequest } from '../models/CreateEmbeddedRequest';
import { CreateEventRequest } from '../models/CreateEventRequest';
import { CreateExchangeRequest } from '../models/CreateExchangeRequest';
import { CreateForwarderContractRequest } from '../models/CreateForwarderContractRequest';
import { CreateMigrationRequest } from '../models/CreateMigrationRequest';
import { CreatePaymasterRequest } from '../models/CreatePaymasterRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest';
import { CreateProjectRequest } from '../models/CreateProjectRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { CreateTriggerRequest } from '../models/CreateTriggerRequest';
import { Currency } from '../models/Currency';
import { CustomAuthConfig } from '../models/CustomAuthConfig';
import { DeleteSMTPConfigResponse } from '../models/DeleteSMTPConfigResponse';
import { DeployRequest } from '../models/DeployRequest';
import { DeveloperAccount } from '../models/DeveloperAccount';
import { DeveloperAccountDeleteResponse } from '../models/DeveloperAccountDeleteResponse';
import { DeveloperAccountGetMessageResponse } from '../models/DeveloperAccountGetMessageResponse';
import { DeveloperAccountListQueries } from '../models/DeveloperAccountListQueries';
import { DeveloperAccountListResponse } from '../models/DeveloperAccountListResponse';
import { DeveloperAccountResponse } from '../models/DeveloperAccountResponse';
import { DeveloperAccountResponseExpandable } from '../models/DeveloperAccountResponseExpandable';
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
import { EmbeddedV2Response } from '../models/EmbeddedV2Response';
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
import { LinkEmail200Response } from '../models/LinkEmail200Response';
import { LinkedAccountResponse } from '../models/LinkedAccountResponse';
import { ListConfigRequest } from '../models/ListConfigRequest';
import { ListMigrationsRequest } from '../models/ListMigrationsRequest';
import { ListSubscriptionLogsRequest } from '../models/ListSubscriptionLogsRequest';
import { Log } from '../models/Log';
import { LogResponse } from '../models/LogResponse';
import { LoginOIDCRequest } from '../models/LoginOIDCRequest';
import { LoginRequest } from '../models/LoginRequest';
import { LoginWithIdTokenRequest } from '../models/LoginWithIdTokenRequest';
import { LogoutRequest } from '../models/LogoutRequest';
import { LootLockerOAuthConfig } from '../models/LootLockerOAuthConfig';
import { MappingStrategy } from '../models/MappingStrategy';
import { Money } from '../models/Money';
import { MonthRange } from '../models/MonthRange';
import { MyEcosystemResponse } from '../models/MyEcosystemResponse';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { OAuthConfigListResponse } from '../models/OAuthConfigListResponse';
import { OAuthInitRequest } from '../models/OAuthInitRequest';
import { OAuthInitRequestOptions } from '../models/OAuthInitRequestOptions';
import { OAuthProvider } from '../models/OAuthProvider';
import { OAuthProviderAPPLE } from '../models/OAuthProviderAPPLE';
import { OAuthProviderDISCORD } from '../models/OAuthProviderDISCORD';
import { OAuthProviderEPICGAMES } from '../models/OAuthProviderEPICGAMES';
import { OAuthProviderFACEBOOK } from '../models/OAuthProviderFACEBOOK';
import { OAuthProviderGOOGLE } from '../models/OAuthProviderGOOGLE';
import { OAuthProviderLINE } from '../models/OAuthProviderLINE';
import { OAuthProviderTWITTER } from '../models/OAuthProviderTWITTER';
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
import { RecoverV2EmbeddedRequest } from '../models/RecoverV2EmbeddedRequest';
import { RecoverV2Response } from '../models/RecoverV2Response';
import { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import { RegisterEmbeddedRequest } from '../models/RegisterEmbeddedRequest';
import { RegisterEmbeddedV2Request } from '../models/RegisterEmbeddedV2Request';
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
import { SignPayloadRequest } from '../models/SignPayloadRequest';
import { SignPayloadResponse } from '../models/SignPayloadResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignerIdResponse } from '../models/SignerIdResponse';
import { SignupEmailPassword201Response } from '../models/SignupEmailPassword201Response';
import { SignupRequest } from '../models/SignupRequest';
import { SmartAccountData } from '../models/SmartAccountData';
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
import { SwitchChainQueriesV2 } from '../models/SwitchChainQueriesV2';
import { SwitchChainRequest } from '../models/SwitchChainRequest';
import { TestTrigger200Response } from '../models/TestTrigger200Response';
import { ThirdPartyLinkRequest } from '../models/ThirdPartyLinkRequest';
import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { ThirdPartyOAuthProviderACCELBYTE } from '../models/ThirdPartyOAuthProviderACCELBYTE';
import { ThirdPartyOAuthProviderCUSTOM } from '../models/ThirdPartyOAuthProviderCUSTOM';
import { ThirdPartyOAuthProviderFIREBASE } from '../models/ThirdPartyOAuthProviderFIREBASE';
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
import { TransactionStatus } from '../models/TransactionStatus';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { Transition } from '../models/Transition';
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
import { UpdateMigrationRequest } from '../models/UpdateMigrationRequest';
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

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiCancelTransferOwnershipRequest {
    /**
     * Specifies the unique account ID (starts with acc_).
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

export interface AccountsApiDisableAccountRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApidisableAccount
     */
    id: string
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

export interface AccountsApiGetAccountV2Request {
    /**
     * 
     * @type string
     * @memberof AccountsApigetAccountV2
     */
    id: string
}

export interface AccountsApiGetAccountsRequest {
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
     * The chain ID. Must be a [supported chain](/development/chains).
     * @type number
     * @memberof AccountsApigetAccounts
     */
    chainId?: number
    /**
     * Specifies the unique player ID (starts with pla_)
     * @type string
     * @memberof AccountsApigetAccounts
     */
    player?: string
    /**
     * Specifies the address of the account
     * @type string
     * @memberof AccountsApigetAccounts
     */
    address?: string
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;AccountResponseExpandable&gt;
     * @memberof AccountsApigetAccounts
     */
    expand?: Array<AccountResponseExpandable>
}

export interface AccountsApiGetAccountsV2Request {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof AccountsApigetAccountsV2
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof AccountsApigetAccountsV2
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof AccountsApigetAccountsV2
     */
    order?: SortOrder
    /**
     * The chain ID. Must be a [supported chain](/development/chains).
     * @type number
     * @memberof AccountsApigetAccountsV2
     */
    chainId?: number
    /**
     * Specifies the unique user ID (starts with pla_)
     * @type string
     * @memberof AccountsApigetAccountsV2
     */
    user?: string
    /**
     * The chain type. Must be either \&quot;EVM\&quot; or \&quot;SVM\&quot;.
     * @type string
     * @memberof AccountsApigetAccountsV2
     */
    chainType?: string
    /**
     * Specifies the type of account. Must be either \&quot;Smart Account\&quot; or \&quot;Externally Owned Account\&quot;.
     * @type string
     * @memberof AccountsApigetAccountsV2
     */
    accountType?: string
    /**
     * Specifies the account address
     * @type string
     * @memberof AccountsApigetAccountsV2
     */
    address?: string
}

export interface AccountsApiGetSignerIdByAddressRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApigetSignerIdByAddress
     */
    address: string
}

export interface AccountsApiRequestTransferOwnershipRequest {
    /**
     * Specifies the unique account ID (starts with acc_).
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
     * Specifies the unique account ID (starts with acc_).
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

export interface AccountsApiSwitchChainV2Request {
    /**
     * 
     * @type SwitchChainQueriesV2
     * @memberof AccountsApiswitchChainV2
     */
    switchChainQueriesV2: SwitchChainQueriesV2
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
     * Cancel a pending transfer of ownership.
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
     * Creates a new blockchain account for the provided player. If not player is provided, a new one will be created.  Account creation does not consume any gas. All accounts of a player will use the same address across blockchains.  Each player can only have one account per chain.
     * Create an account object.
     * @param param the request object
     */
    public createAccount(param: AccountsApiCreateAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.createAccount(param.createAccountRequest,  options).toPromise();
    }

    /**
     * This endpoint can be used to deploy a smart contract account that was counterfactually generated.
     * Deploy an account.
     * @param param the request object
     */
    public deployAccount(param: AccountsApiDeployAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.deployAccount(param.id, param.deployRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public disableAccount(param: AccountsApiDisableAccountRequest, options?: Configuration): Promise<void> {
        return this.api.disableAccount(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing account.  Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.  Returns the latest 10 transaction intents created by this account.
     * Get existing account.
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.getAccount(param.id, param.expand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAccountV2(param: AccountsApiGetAccountV2Request, options?: Configuration): Promise<AccountV2Response> {
        return this.api.getAccountV2(param.id,  options).toPromise();
    }

    /**
     * Returns a list of accounts for the given player.  This object represents a player\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  Returns the latest 10 transaction intents for each account.  By default, a maximum of 10 accounts are shown per page.
     * List accounts of a player.
     * @param param the request object
     */
    public getAccounts(param: AccountsApiGetAccountsRequest = {}, options?: Configuration): Promise<AccountListResponse> {
        return this.api.getAccounts(param.limit, param.skip, param.order, param.chainId, param.player, param.address, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of accounts for the given user.  This object represents a user\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  Returns the latest 10 transaction intents for each account.  By default, a maximum of 10 accounts are shown per page.
     * List accounts of a user.
     * @param param the request object
     */
    public getAccountsV2(param: AccountsApiGetAccountsV2Request = {}, options?: Configuration): Promise<BaseEntityListResponseAccountV2Response> {
        return this.api.getAccountsV2(param.limit, param.skip, param.order, param.chainId, param.user, param.chainType, param.accountType, param.address,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSignerIdByAddress(param: AccountsApiGetSignerIdByAddressRequest, options?: Configuration): Promise<SignerIdResponse> {
        return this.api.getSignerIdByAddress(param.address,  options).toPromise();
    }

    /**
     * Perform a request to change the owner of an account.  To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
     * Request transfer ownership of account.
     * @param param the request object
     */
    public requestTransferOwnership(param: AccountsApiRequestTransferOwnershipRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.requestTransferOwnership(param.id, param.transferOwnershipRequest,  options).toPromise();
    }

    /**
     * **Custodial Accounts only** - Signs the typed repositories value with types repositories structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
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
     * @param param the request object
     */
    public switchChainV2(param: AccountsApiSwitchChainV2Request, options?: Configuration): Promise<AccountV2Response> {
        return this.api.switchChainV2(param.switchChainQueriesV2,  options).toPromise();
    }

    /**
     * Synchronize the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
     * Sync account state with the blockchain
     * @param param the request object
     */
    public syncAccount(param: AccountsApiSyncAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.syncAccount(param.id,  options).toPromise();
    }

}

import { ObservableAdminAuthenticationApi } from "./ObservableAPI";
import { AdminAuthenticationApiRequestFactory, AdminAuthenticationApiResponseProcessor} from "../apis/AdminAuthenticationApi";

export interface AdminAuthenticationApiAuthorizeRequest {
    /**
     * 
     * @type AuthorizePlayerRequest
     * @memberof AdminAuthenticationApiauthorize
     */
    authorizePlayerRequest: AuthorizePlayerRequest
}

export interface AdminAuthenticationApiCreateRequest {
    /**
     * Specifies the oauth provider specific configuration.
     * @type AuthConfig
     * @memberof AdminAuthenticationApicreate
     */
    body: AuthConfig
}

export interface AdminAuthenticationApiCreateAuthPlayerRequest {
    /**
     * 
     * @type CreateAuthPlayerRequest
     * @memberof AdminAuthenticationApicreateAuthPlayer
     */
    createAuthPlayerRequest: CreateAuthPlayerRequest
}

export interface AdminAuthenticationApiCreateOAuthConfigRequest {
    /**
     * Specifies the oauth provider specific configuration.
     * @type AuthConfig
     * @memberof AdminAuthenticationApicreateOAuthConfig
     */
    body: AuthConfig
}

export interface AdminAuthenticationApiDeleteAuthPlayerRequest {
    /**
     * Specifies the unique player ID (starts with pla_).
     * @type string
     * @memberof AdminAuthenticationApideleteAuthPlayer
     */
    id: string
}

export interface AdminAuthenticationApiDeleteOAuthConfigRequest {
    /**
     * Specifies the oauth provider type.
     * @type OAuthProvider
     * @memberof AdminAuthenticationApideleteOAuthConfig
     */
    provider: OAuthProvider
}

export interface AdminAuthenticationApiGetAuthPlayerRequest {
    /**
     * 
     * @type string
     * @memberof AdminAuthenticationApigetAuthPlayer
     */
    id: string
}

export interface AdminAuthenticationApiGetAuthPlayersRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof AdminAuthenticationApigetAuthPlayers
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof AdminAuthenticationApigetAuthPlayers
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof AdminAuthenticationApigetAuthPlayers
     */
    order?: SortOrder
    /**
     * Specifies the email address of the user.
     * @type string
     * @memberof AdminAuthenticationApigetAuthPlayers
     */
    email?: string
    /**
     * Specifies the external user ID.
     * @type string
     * @memberof AdminAuthenticationApigetAuthPlayers
     */
    externalUserId?: string
}

export interface AdminAuthenticationApiGetOAuthConfigRequest {
    /**
     * Specifies the oauth provider type.
     * @type OAuthProvider
     * @memberof AdminAuthenticationApigetOAuthConfig
     */
    provider: OAuthProvider
}

export interface AdminAuthenticationApiListOAuthConfigRequest {
}

export interface AdminAuthenticationApiVerifyAuthTokenRequest {
    /**
     * Specifies the auth token.
     * @type string
     * @memberof AdminAuthenticationApiverifyAuthToken
     */
    token: string
}

export interface AdminAuthenticationApiVerifyOAuthTokenRequest {
    /**
     * 
     * @type AuthenticateOAuthRequest
     * @memberof AdminAuthenticationApiverifyOAuthToken
     */
    authenticateOAuthRequest: AuthenticateOAuthRequest
}

export class ObjectAdminAuthenticationApi {
    private api: ObservableAdminAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AdminAuthenticationApiRequestFactory, responseProcessor?: AdminAuthenticationApiResponseProcessor) {
        this.api = new ObservableAdminAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authorize(param: AdminAuthenticationApiAuthorizeRequest, options?: Configuration): Promise<Authorize200Response> {
        return this.api.authorize(param.authorizePlayerRequest,  options).toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param param the request object
     */
    public create(param: AdminAuthenticationApiCreateRequest, options?: Configuration): Promise<AuthConfig> {
        return this.api.create(param.body,  options).toPromise();
    }

    /**
     * Creates an authenticated player.  The player will be authenticated with the provider and an embedded account can be pre generated.
     * Create an authenticated player.
     * @param param the request object
     */
    public createAuthPlayer(param: AdminAuthenticationApiCreateAuthPlayerRequest, options?: Configuration): Promise<AuthPlayerResponseWithRecoveryShare> {
        return this.api.createAuthPlayer(param.createAuthPlayerRequest,  options).toPromise();
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param param the request object
     */
    public createOAuthConfig(param: AdminAuthenticationApiCreateOAuthConfigRequest, options?: Configuration): Promise<AuthConfig> {
        return this.api.createOAuthConfig(param.body,  options).toPromise();
    }

    /**
     * Deletes a player auth object.  It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
     * Deletes a player auth object.
     * @param param the request object
     */
    public deleteAuthPlayer(param: AdminAuthenticationApiDeleteAuthPlayerRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.deleteAuthPlayer(param.id,  options).toPromise();
    }

    /**
     * The endpoint deletes oauth configuration for specified provider for the current project environment.
     * Delete oauth configuration.
     * @param param the request object
     */
    public deleteOAuthConfig(param: AdminAuthenticationApiDeleteOAuthConfigRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOAuthConfig(param.provider,  options).toPromise();
    }

    /**
     * Retrieves an authenticated player.  Players have linked accounts and are authenticated with a provider.
     * Authenticated player.
     * @param param the request object
     */
    public getAuthPlayer(param: AdminAuthenticationApiGetAuthPlayerRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.getAuthPlayer(param.id,  options).toPromise();
    }

    /**
     * Retrieves a list of authenticated players.  Players have linked accounts and are authenticated with a provider.
     * List authenticated players.
     * @param param the request object
     */
    public getAuthPlayers(param: AdminAuthenticationApiGetAuthPlayersRequest = {}, options?: Configuration): Promise<AuthPlayerListResponse> {
        return this.api.getAuthPlayers(param.limit, param.skip, param.order, param.email, param.externalUserId,  options).toPromise();
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param param the request object
     */
    public getOAuthConfig(param: AdminAuthenticationApiGetOAuthConfigRequest, options?: Configuration): Promise<AuthConfig> {
        return this.api.getOAuthConfig(param.provider,  options).toPromise();
    }

    /**
     * List configured OAuth methods for the current project environment.
     * List of oauth configurations.
     * @param param the request object
     */
    public listOAuthConfig(param: AdminAuthenticationApiListOAuthConfigRequest = {}, options?: Configuration): Promise<OAuthConfigListResponse> {
        return this.api.listOAuthConfig( options).toPromise();
    }

    /**
     * Verifies the token generated by Openfort Auth.
     * Verify auth token.
     * @param param the request object
     */
    public verifyAuthToken(param: AdminAuthenticationApiVerifyAuthTokenRequest, options?: Configuration): Promise<AuthSessionResponse> {
        return this.api.verifyAuthToken(param.token,  options).toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by oauth token.
     * @param param the request object
     */
    public verifyOAuthToken(param: AdminAuthenticationApiVerifyOAuthTokenRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.verifyOAuthToken(param.authenticateOAuthRequest,  options).toPromise();
    }

}

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiAuthenticateSIWERequest {
    /**
     * 
     * @type SIWEAuthenticateRequest
     * @memberof AuthenticationApiauthenticateSIWE
     */
    sIWEAuthenticateRequest: SIWEAuthenticateRequest
}

export interface AuthenticationApiGetJwksRequest {
    /**
     * Specifies the project publishable key (starts with pk_).
     * @type string
     * @memberof AuthenticationApigetJwks
     */
    publishableKey: string
}

export interface AuthenticationApiInitOAuthRequest {
    /**
     * 
     * @type OAuthInitRequest
     * @memberof AuthenticationApiinitOAuth
     */
    oAuthInitRequest: OAuthInitRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApiinitOAuth
     */
    xGame?: string
}

export interface AuthenticationApiInitSIWERequest {
    /**
     * 
     * @type SIWERequest
     * @memberof AuthenticationApiinitSIWE
     */
    sIWERequest: SIWERequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApiinitSIWE
     */
    xGame?: string
}

export interface AuthenticationApiLinkEmailRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthenticationApilinkEmail
     */
    loginRequest: LoginRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApilinkEmail
     */
    xGame?: string
}

export interface AuthenticationApiLinkOAuthRequest {
    /**
     * 
     * @type OAuthInitRequest
     * @memberof AuthenticationApilinkOAuth
     */
    oAuthInitRequest: OAuthInitRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApilinkOAuth
     */
    xGame?: string
}

export interface AuthenticationApiLinkSIWERequest {
    /**
     * 
     * @type SIWEAuthenticateRequest
     * @memberof AuthenticationApilinkSIWE
     */
    sIWEAuthenticateRequest: SIWEAuthenticateRequest
}

export interface AuthenticationApiLinkThirdPartyRequest {
    /**
     * 
     * @type ThirdPartyLinkRequest
     * @memberof AuthenticationApilinkThirdParty
     */
    thirdPartyLinkRequest: ThirdPartyLinkRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApilinkThirdParty
     */
    xGame?: string
}

export interface AuthenticationApiLoginEmailPasswordRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthenticationApiloginEmailPassword
     */
    loginRequest: LoginRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApiloginEmailPassword
     */
    xGame?: string
}

export interface AuthenticationApiLoginOIDCRequest {
    /**
     * 
     * @type LoginOIDCRequest
     * @memberof AuthenticationApiloginOIDC
     */
    loginOIDCRequest: LoginOIDCRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApiloginOIDC
     */
    xGame?: string
}

export interface AuthenticationApiLoginWithIdTokenRequest {
    /**
     * 
     * @type LoginWithIdTokenRequest
     * @memberof AuthenticationApiloginWithIdToken
     */
    loginWithIdTokenRequest: LoginWithIdTokenRequest
}

export interface AuthenticationApiLogoutRequest {
    /**
     * 
     * @type LogoutRequest
     * @memberof AuthenticationApilogout
     */
    logoutRequest: LogoutRequest
}

export interface AuthenticationApiMeRequest {
}

export interface AuthenticationApiPoolOAuthRequest {
    /**
     * 
     * @type string
     * @memberof AuthenticationApipoolOAuth
     */
    key: string
}

export interface AuthenticationApiRefreshRequest {
    /**
     * 
     * @type RefreshTokenRequest
     * @memberof AuthenticationApirefresh
     */
    refreshTokenRequest: RefreshTokenRequest
}

export interface AuthenticationApiRegisterGuestRequest {
    /**
     * 
     * @type string
     * @memberof AuthenticationApiregisterGuest
     */
    xGame?: string
}

export interface AuthenticationApiRequestEmailVerificationRequest {
    /**
     * 
     * @type RequestVerifyEmailRequest
     * @memberof AuthenticationApirequestEmailVerification
     */
    requestVerifyEmailRequest: RequestVerifyEmailRequest
}

export interface AuthenticationApiRequestResetPasswordRequest {
    /**
     * 
     * @type RequestResetPasswordRequest
     * @memberof AuthenticationApirequestResetPassword
     */
    requestResetPasswordRequest: RequestResetPasswordRequest
}

export interface AuthenticationApiResetPasswordRequest {
    /**
     * 
     * @type ResetPasswordRequest
     * @memberof AuthenticationApiresetPassword
     */
    resetPasswordRequest: ResetPasswordRequest
}

export interface AuthenticationApiSignupEmailPasswordRequest {
    /**
     * 
     * @type SignupRequest
     * @memberof AuthenticationApisignupEmailPassword
     */
    signupRequest: SignupRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApisignupEmailPassword
     */
    xGame?: string
}

export interface AuthenticationApiThirdPartyRequest {
    /**
     * 
     * @type ThirdPartyOAuthRequest
     * @memberof AuthenticationApithirdParty
     */
    thirdPartyOAuthRequest: ThirdPartyOAuthRequest
    /**
     * 
     * @type string
     * @memberof AuthenticationApithirdParty
     */
    xGame?: string
}

export interface AuthenticationApiUnlinkEmailRequest {
    /**
     * 
     * @type UnlinkEmailRequest
     * @memberof AuthenticationApiunlinkEmail
     */
    unlinkEmailRequest: UnlinkEmailRequest
}

export interface AuthenticationApiUnlinkOAuthRequest {
    /**
     * 
     * @type UnlinkOAuthRequest
     * @memberof AuthenticationApiunlinkOAuth
     */
    unlinkOAuthRequest: UnlinkOAuthRequest
}

export interface AuthenticationApiUnlinkSIWERequest {
    /**
     * 
     * @type SIWERequest
     * @memberof AuthenticationApiunlinkSIWE
     */
    sIWERequest: SIWERequest
}

export interface AuthenticationApiVerifyEmailRequest {
    /**
     * 
     * @type VerifyEmailRequest
     * @memberof AuthenticationApiverifyEmail
     */
    verifyEmailRequest: VerifyEmailRequest
}

export interface AuthenticationApiVerifyOAuthTokenRequest {
    /**
     * 
     * @type AuthenticateOAuthRequest
     * @memberof AuthenticationApiverifyOAuthToken
     */
    authenticateOAuthRequest: AuthenticateOAuthRequest
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticate player with SIWE
     * @param param the request object
     */
    public authenticateSIWE(param: AuthenticationApiAuthenticateSIWERequest, options?: Configuration): Promise<void | AuthResponse> {
        return this.api.authenticateSIWE(param.sIWEAuthenticateRequest,  options).toPromise();
    }

    /**
     * Get the jwks.json file.  You can use the jwks.json file to verify the signature of a JWT token issued by Openfort Auth.
     * Get the jwks.json file.
     * @param param the request object
     */
    public getJwks(param: AuthenticationApiGetJwksRequest, options?: Configuration): Promise<JwtKeyResponse> {
        return this.api.getJwks(param.publishableKey,  options).toPromise();
    }

    /**
     * Initialize OAuth.
     * @param param the request object
     */
    public initOAuth(param: AuthenticationApiInitOAuthRequest, options?: Configuration): Promise<OAuthResponse> {
        return this.api.initOAuth(param.oAuthInitRequest, param.xGame,  options).toPromise();
    }

    /**
     * Create a challenge to link external wallet to the player.
     * Initialize SIWE.
     * @param param the request object
     */
    public initSIWE(param: AuthenticationApiInitSIWERequest, options?: Configuration): Promise<SIWEInitResponse> {
        return this.api.initSIWE(param.sIWERequest, param.xGame,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public linkEmail(param: AuthenticationApiLinkEmailRequest, options?: Configuration): Promise<LinkEmail200Response> {
        return this.api.linkEmail(param.loginRequest, param.xGame,  options).toPromise();
    }

    /**
     * Initialize Link OAuth.
     * @param param the request object
     */
    public linkOAuth(param: AuthenticationApiLinkOAuthRequest, options?: Configuration): Promise<OAuthResponse> {
        return this.api.linkOAuth(param.oAuthInitRequest, param.xGame,  options).toPromise();
    }

    /**
     * Link external wallet.
     * @param param the request object
     */
    public linkSIWE(param: AuthenticationApiLinkSIWERequest, options?: Configuration): Promise<AuthPlayerResponse | void> {
        return this.api.linkSIWE(param.sIWEAuthenticateRequest,  options).toPromise();
    }

    /**
     * Initialize Link OAuth.
     * @param param the request object
     */
    public linkThirdParty(param: AuthenticationApiLinkThirdPartyRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.linkThirdParty(param.thirdPartyLinkRequest, param.xGame,  options).toPromise();
    }

    /**
     * Authenticate a player based on email and password.
     * Email and password login.
     * @param param the request object
     */
    public loginEmailPassword(param: AuthenticationApiLoginEmailPasswordRequest, options?: Configuration): Promise<SignupEmailPassword201Response> {
        return this.api.loginEmailPassword(param.loginRequest, param.xGame,  options).toPromise();
    }

    /**
     * Authenticate a player from an identity token.
     * OIDC Identity token.
     * @param param the request object
     */
    public loginOIDC(param: AuthenticationApiLoginOIDCRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.loginOIDC(param.loginOIDCRequest, param.xGame,  options).toPromise();
    }

    /**
     * Authenticate player with oauth token.
     * @param param the request object
     */
    public loginWithIdToken(param: AuthenticationApiLoginWithIdTokenRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.loginWithIdToken(param.loginWithIdTokenRequest,  options).toPromise();
    }

    /**
     * When using Openfort Auth, the endpoint logs out the player.
     * Log out a player.
     * @param param the request object
     */
    public logout(param: AuthenticationApiLogoutRequest, options?: Configuration): Promise<void> {
        return this.api.logout(param.logoutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public me(param: AuthenticationApiMeRequest = {}, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.me( options).toPromise();
    }

    /**
     * Initialize OAuth.
     * @param param the request object
     */
    public poolOAuth(param: AuthenticationApiPoolOAuthRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.poolOAuth(param.key,  options).toPromise();
    }

    /**
     * Get or create a new session for the player based on the refresh token.
     * Refresh or create auth session.
     * @param param the request object
     */
    public refresh(param: AuthenticationApiRefreshRequest, options?: Configuration): Promise<AuthResponse> {
        return this.api.refresh(param.refreshTokenRequest,  options).toPromise();
    }

    /**
     * Create a guest player.
     * Create a guest player.
     * @param param the request object
     */
    public registerGuest(param: AuthenticationApiRegisterGuestRequest = {}, options?: Configuration): Promise<AuthResponse> {
        return this.api.registerGuest(param.xGame,  options).toPromise();
    }

    /**
     * Start the Email Verification process for a player.
     * Request an Email Verification.
     * @param param the request object
     */
    public requestEmailVerification(param: AuthenticationApiRequestEmailVerificationRequest, options?: Configuration): Promise<void> {
        return this.api.requestEmailVerification(param.requestVerifyEmailRequest,  options).toPromise();
    }

    /**
     * Start the Reset process for a player\'s password.
     * Request a Reset password.
     * @param param the request object
     */
    public requestResetPassword(param: AuthenticationApiRequestResetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.requestResetPassword(param.requestResetPasswordRequest,  options).toPromise();
    }

    /**
     * Reset a player\'s password.
     * Reset a password.
     * @param param the request object
     */
    public resetPassword(param: AuthenticationApiResetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.resetPassword(param.resetPasswordRequest,  options).toPromise();
    }

    /**
     * Create and authenticate a player based on email and password.
     * Email and password signup.
     * @param param the request object
     */
    public signupEmailPassword(param: AuthenticationApiSignupEmailPasswordRequest, options?: Configuration): Promise<SignupEmailPassword201Response> {
        return this.api.signupEmailPassword(param.signupRequest, param.xGame,  options).toPromise();
    }

    /**
     * Verify oauth token of a third party auth provider.
     * @param param the request object
     */
    public thirdParty(param: AuthenticationApiThirdPartyRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.thirdParty(param.thirdPartyOAuthRequest, param.xGame,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public unlinkEmail(param: AuthenticationApiUnlinkEmailRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.unlinkEmail(param.unlinkEmailRequest,  options).toPromise();
    }

    /**
     * Unlink OAuth account
     * @param param the request object
     */
    public unlinkOAuth(param: AuthenticationApiUnlinkOAuthRequest, options?: Configuration): Promise<AuthPlayerResponse> {
        return this.api.unlinkOAuth(param.unlinkOAuthRequest,  options).toPromise();
    }

    /**
     * Unlink external wallet.
     * @param param the request object
     */
    public unlinkSIWE(param: AuthenticationApiUnlinkSIWERequest, options?: Configuration): Promise<AuthPlayerResponse | void> {
        return this.api.unlinkSIWE(param.sIWERequest,  options).toPromise();
    }

    /**
     * Verify a player\'s email address.
     * Verify an email.
     * @param param the request object
     */
    public verifyEmail(param: AuthenticationApiVerifyEmailRequest, options?: Configuration): Promise<void> {
        return this.api.verifyEmail(param.verifyEmailRequest,  options).toPromise();
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
     * Retrieve player by oauth token.
     * @param param the request object
     */
    public verifyOAuthToken(param: AuthenticationApiVerifyOAuthTokenRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.verifyOAuthToken(param.authenticateOAuthRequest,  options).toPromise();
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
     * Using this endpoint, you can get the repositories returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read on chain contract repositories.
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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiListRequest {
    /**
     * 
     * @type boolean
     * @memberof DefaultApilist
     */
    enabled?: boolean
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List configured auth methods for the current project environment.
     * List of auth configurations.
     * @param param the request object
     */
    public list(param: DefaultApiListRequest = {}, options?: Configuration): Promise<AuthProviderListResponse> {
        return this.api.list(param.enabled,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiCreateEventRequest {
    /**
     * 
     * @type CreateEventRequest
     * @memberof EventsApicreateEvent
     */
    createEventRequest: CreateEventRequest
}

export interface EventsApiDeleteEventRequest {
    /**
     * Specifies the unique event ID (starts with eve_).
     * @type string
     * @memberof EventsApideleteEvent
     */
    id: string
}

export interface EventsApiGetEventRequest {
    /**
     * Specifies the unique event ID (starts with eve_).
     * @type string
     * @memberof EventsApigetEvent
     */
    id: string
}

export interface EventsApiGetEventsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof EventsApigetEvents
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof EventsApigetEvents
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof EventsApigetEvents
     */
    order?: SortOrder
    /**
     * Specifies the name of the event
     * @type string
     * @memberof EventsApigetEvents
     */
    name?: string
    /**
     * Specifies if display deleted events
     * @type boolean
     * @memberof EventsApigetEvents
     */
    deleted?: boolean
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new event.
     * Create a new event.
     * @param param the request object
     */
    public createEvent(param: EventsApiCreateEventRequest, options?: Configuration): Promise<EventResponse> {
        return this.api.createEvent(param.createEventRequest,  options).toPromise();
    }

    /**
     * Delete an event.
     * Delete an event.
     * @param param the request object
     */
    public deleteEvent(param: EventsApiDeleteEventRequest, options?: Configuration): Promise<EventDeleteResponse> {
        return this.api.deleteEvent(param.id,  options).toPromise();
    }

    /**
     * Get a single event.
     * Get a single event.
     * @param param the request object
     */
    public getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<EventResponse> {
        return this.api.getEvent(param.id,  options).toPromise();
    }

    /**
     * Returns a list of events.  By default, a maximum of 10 events are shown per page.
     * List events.
     * @param param the request object
     */
    public getEvents(param: EventsApiGetEventsRequest = {}, options?: Configuration): Promise<EventListResponse> {
        return this.api.getEvents(param.limit, param.skip, param.order, param.name, param.deleted,  options).toPromise();
    }

}

import { ObservableExchangeApi } from "./ObservableAPI";
import { ExchangeApiRequestFactory, ExchangeApiResponseProcessor} from "../apis/ExchangeApi";

export interface ExchangeApiCreateSwapRequest {
    /**
     * 
     * @type CreateExchangeRequest
     * @memberof ExchangeApicreateSwap
     */
    createExchangeRequest: CreateExchangeRequest
}

export interface ExchangeApiQuoteSwapRequest {
    /**
     * 
     * @type CreateExchangeRequest
     * @memberof ExchangeApiquoteSwap
     */
    createExchangeRequest: CreateExchangeRequest
}

export class ObjectExchangeApi {
    private api: ObservableExchangeApi

    public constructor(configuration: Configuration, requestFactory?: ExchangeApiRequestFactory, responseProcessor?: ExchangeApiResponseProcessor) {
        this.api = new ObservableExchangeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates token swap.
     * Create token swap.
     * @param param the request object
     */
    public createSwap(param: ExchangeApiCreateSwapRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.createSwap(param.createExchangeRequest,  options).toPromise();
    }

    /**
     * Quote token swap.
     * Quote token swap.
     * @param param the request object
     */
    public quoteSwap(param: ExchangeApiQuoteSwapRequest, options?: Configuration): Promise<QuoteExchangeResult> {
        return this.api.quoteSwap(param.createExchangeRequest,  options).toPromise();
    }

}

import { ObservableForwarderContractApi } from "./ObservableAPI";
import { ForwarderContractApiRequestFactory, ForwarderContractApiResponseProcessor} from "../apis/ForwarderContractApi";

export interface ForwarderContractApiCreateForwarderContractRequest {
    /**
     * 
     * @type CreateForwarderContractRequest
     * @memberof ForwarderContractApicreateForwarderContract
     */
    createForwarderContractRequest: CreateForwarderContractRequest
}

export interface ForwarderContractApiDeleteForwarderContractRequest {
    /**
     * 
     * @type string
     * @memberof ForwarderContractApideleteForwarderContract
     */
    id: string
}

export interface ForwarderContractApiGetForwarderContractRequest {
    /**
     * 
     * @type string
     * @memberof ForwarderContractApigetForwarderContract
     */
    id: string
}

export interface ForwarderContractApiListForwarderContractsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof ForwarderContractApilistForwarderContracts
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof ForwarderContractApilistForwarderContracts
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof ForwarderContractApilistForwarderContracts
     */
    order?: SortOrder
}

export interface ForwarderContractApiUpdateForwarderContractRequest {
    /**
     * 
     * @type string
     * @memberof ForwarderContractApiupdateForwarderContract
     */
    id: string
    /**
     * 
     * @type CreateForwarderContractRequest
     * @memberof ForwarderContractApiupdateForwarderContract
     */
    createForwarderContractRequest: CreateForwarderContractRequest
}

export class ObjectForwarderContractApi {
    private api: ObservableForwarderContractApi

    public constructor(configuration: Configuration, requestFactory?: ForwarderContractApiRequestFactory, responseProcessor?: ForwarderContractApiResponseProcessor) {
        this.api = new ObservableForwarderContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
     * Create a new forwarder contract.
     * @param param the request object
     */
    public createForwarderContract(param: ForwarderContractApiCreateForwarderContractRequest, options?: Configuration): Promise<ForwarderContractResponse> {
        return this.api.createForwarderContract(param.createForwarderContractRequest,  options).toPromise();
    }

    /**
     * Delete the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
     * Delete forwarder contract by id.
     * @param param the request object
     */
    public deleteForwarderContract(param: ForwarderContractApiDeleteForwarderContractRequest, options?: Configuration): Promise<ForwarderContractDeleteResponse> {
        return this.api.deleteForwarderContract(param.id,  options).toPromise();
    }

    /**
     * Returns the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
     * Get forwarder contract by id.
     * @param param the request object
     */
    public getForwarderContract(param: ForwarderContractApiGetForwarderContractRequest, options?: Configuration): Promise<ForwarderContractResponse> {
        return this.api.getForwarderContract(param.id,  options).toPromise();
    }

    /**
     * Returns a list of forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 forwarder contract are shown per page.
     * List forwarder contract.
     * @param param the request object
     */
    public listForwarderContracts(param: ForwarderContractApiListForwarderContractsRequest = {}, options?: Configuration): Promise<Array<ForwarderContractResponse>> {
        return this.api.listForwarderContracts(param.limit, param.skip, param.order,  options).toPromise();
    }

    /**
     * Update a forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
     * Update a forwarder contract.
     * @param param the request object
     */
    public updateForwarderContract(param: ForwarderContractApiUpdateForwarderContractRequest, options?: Configuration): Promise<ForwarderContractResponse> {
        return this.api.updateForwarderContract(param.id, param.createForwarderContractRequest,  options).toPromise();
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
    contract?: Array<string>
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
    contract?: Array<string>
}

export class ObjectInventoriesApi {
    private api: ObservableInventoriesApi

    public constructor(configuration: Configuration, requestFactory?: InventoriesApiRequestFactory, responseProcessor?: InventoriesApiResponseProcessor) {
        this.api = new ObservableInventoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the cryptocurrency assets of an existing account.
     * @param param the request object
     */
    public getAccountCryptoCurrencyInventory(param: InventoriesApiGetAccountCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountCryptoCurrencyInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the native asset of an existing account.
     * @param param the request object
     */
    public getAccountNativeInventory(param: InventoriesApiGetAccountNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getAccountNativeInventory(param.id,  options).toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the NFT assets of an existing account.
     * @param param the request object
     */
    public getAccountNftInventory(param: InventoriesApiGetAccountNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getAccountNftInventory(param.id, param.limit, param.skip, param.order, param.contractId,  options).toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get cryptocurrency list of player.
     * @param param the request object
     */
    public getPlayerCryptoCurrencyInventory(param: InventoriesApiGetPlayerCryptoCurrencyInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerCryptoCurrencyInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contract,  options).toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get native token list of player.
     * @param param the request object
     */
    public getPlayerNativeInventory(param: InventoriesApiGetPlayerNativeInventoryRequest, options?: Configuration): Promise<InventoryResponse> {
        return this.api.getPlayerNativeInventory(param.id, param.chainId,  options).toPromise();
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get NFTs list of player.
     * @param param the request object
     */
    public getPlayerNftInventory(param: InventoriesApiGetPlayerNftInventoryRequest, options?: Configuration): Promise<InventoryListResponse> {
        return this.api.getPlayerNftInventory(param.id, param.chainId, param.limit, param.skip, param.order, param.contract,  options).toPromise();
    }

}

import { ObservablePaymasterApi } from "./ObservableAPI";
import { PaymasterApiRequestFactory, PaymasterApiResponseProcessor} from "../apis/PaymasterApi";

export interface PaymasterApiCreatePaymasterRequest {
    /**
     * 
     * @type CreatePaymasterRequest
     * @memberof PaymasterApicreatePaymaster
     */
    createPaymasterRequest: CreatePaymasterRequest
}

export interface PaymasterApiDeletePaymasterRequest {
    /**
     * 
     * @type string
     * @memberof PaymasterApideletePaymaster
     */
    id: string
}

export interface PaymasterApiGetPaymasterRequest {
    /**
     * 
     * @type string
     * @memberof PaymasterApigetPaymaster
     */
    id: string
}

export interface PaymasterApiListPaymastersRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PaymasterApilistPaymasters
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PaymasterApilistPaymasters
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PaymasterApilistPaymasters
     */
    order?: SortOrder
}

export interface PaymasterApiUpdatePaymasterRequest {
    /**
     * 
     * @type string
     * @memberof PaymasterApiupdatePaymaster
     */
    id: string
    /**
     * 
     * @type CreatePaymasterRequest
     * @memberof PaymasterApiupdatePaymaster
     */
    createPaymasterRequest: CreatePaymasterRequest
}

export class ObjectPaymasterApi {
    private api: ObservablePaymasterApi

    public constructor(configuration: Configuration, requestFactory?: PaymasterApiRequestFactory, responseProcessor?: PaymasterApiResponseProcessor) {
        this.api = new ObservablePaymasterApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Create a new paymaster.
     * @param param the request object
     */
    public createPaymaster(param: PaymasterApiCreatePaymasterRequest, options?: Configuration): Promise<PaymasterResponse> {
        return this.api.createPaymaster(param.createPaymasterRequest,  options).toPromise();
    }

    /**
     * Delete the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Delete paymaster by id.
     * @param param the request object
     */
    public deletePaymaster(param: PaymasterApiDeletePaymasterRequest, options?: Configuration): Promise<PaymasterDeleteResponse> {
        return this.api.deletePaymaster(param.id,  options).toPromise();
    }

    /**
     * Returns the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
     * Get paymaster by id.
     * @param param the request object
     */
    public getPaymaster(param: PaymasterApiGetPaymasterRequest, options?: Configuration): Promise<PaymasterResponse> {
        return this.api.getPaymaster(param.id,  options).toPromise();
    }

    /**
     * Returns a list of paymasters.  This object represents the paymasters that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 paymasters are shown per page.
     * List paymasters.
     * @param param the request object
     */
    public listPaymasters(param: PaymasterApiListPaymastersRequest = {}, options?: Configuration): Promise<Array<PaymasterResponse>> {
        return this.api.listPaymasters(param.limit, param.skip, param.order,  options).toPromise();
    }

    /**
     * Update a paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
     * Update a paymaster.
     * @param param the request object
     */
    public updatePaymaster(param: PaymasterApiUpdatePaymasterRequest, options?: Configuration): Promise<PaymasterResponse> {
        return this.api.updatePaymaster(param.id, param.createPaymasterRequest,  options).toPromise();
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
     * Creates a player.
     * Create a player object.
     * @param param the request object
     */
    public createPlayer(param: PlayersApiCreatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.createPlayer(param.playerCreateRequest,  options).toPromise();
    }

    /**
     * It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
     * Deletes a player object.
     * @param param the request object
     */
    public deletePlayer(param: PlayersApiDeletePlayerRequest, options?: Configuration): Promise<PlayerDeleteResponse> {
        return this.api.deletePlayer(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of a player that has previously been created.  Returns the latest 10 transaction intents that were created with this player.
     * Retrieves the details of an existing player.
     * @param param the request object
     */
    public getPlayer(param: PlayersApiGetPlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.getPlayer(param.id, param.expand,  options).toPromise();
    }

    /**
     * By default, a maximum of 10 players are shown.  Returns the latest 10 transaction intents that were created with each player.
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
     * Updates the specified player by setting the values of the parameters passed.
     * Updates a player object.
     * @param param the request object
     */
    public updatePlayer(param: PlayersApiUpdatePlayerRequest, options?: Configuration): Promise<PlayerResponse> {
        return this.api.updatePlayer(param.id, param.playerUpdateRequest,  options).toPromise();
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

export interface PoliciesApiCreatePolicyWithdrawalRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApicreatePolicyWithdrawal
     */
    id: string
    /**
     * 
     * @type WithdrawalPolicyRequest
     * @memberof PoliciesApicreatePolicyWithdrawal
     */
    withdrawalPolicyRequest: WithdrawalPolicyRequest
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
     * Specifies whether to include deleted policies.
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
     * Specifies whether to include enabled policies.
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

export interface PoliciesApiGetPolicyBalanceRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicyBalance
     */
    id: string
}

export interface PoliciesApiGetPolicyReportTransactionIntentsRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicyReportTransactionIntents
     */
    id: string
    /**
     * The start date of the period in unix timestamp.
     * @type number
     * @memberof PoliciesApigetPolicyReportTransactionIntents
     */
    to: number
    /**
     * The end date of the period in unix timestamp.
     * @type number
     * @memberof PoliciesApigetPolicyReportTransactionIntents
     */
    _from: number
}

export interface PoliciesApiGetPolicyTotalGasUsageRequest {
    /**
     * Specifies the unique policy ID (starts with pol_).
     * @type string
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    id: string
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof PoliciesApigetPolicyTotalGasUsage
     */
    order?: SortOrder
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
     * Transfer ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Withdraw tokens collected by policy.
     * @param param the request object
     */
    public createPolicyWithdrawal(param: PoliciesApiCreatePolicyWithdrawalRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.createPolicyWithdrawal(param.id, param.withdrawalPolicyRequest,  options).toPromise();
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
     * Returns a list of Policies.  Returns the latest 10 transaction intents for each policy.
     * List policies.
     * @param param the request object
     */
    public getPolicies(param: PoliciesApiGetPoliciesRequest = {}, options?: Configuration): Promise<PolicyListResponse> {
        return this.api.getPolicies(param.limit, param.skip, param.order, param.expand, param.name, param.deleted, param.chainId, param.enabled,  options).toPromise();
    }

    /**
     * Retrieves the details of a Policy that has previously been created.  Returns the latest 10 transaction intents that used this policy.
     * Get a policy object.
     * @param param the request object
     */
    public getPolicy(param: PoliciesApiGetPolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.getPolicy(param.id, param.expand,  options).toPromise();
    }

    /**
     * Get the amount of ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Get amount of tokens paid for gas policy.
     * @param param the request object
     */
    public getPolicyBalance(param: PoliciesApiGetPolicyBalanceRequest, options?: Configuration): Promise<PolicyBalanceWithdrawResponse> {
        return this.api.getPolicyBalance(param.id,  options).toPromise();
    }

    /**
     * List transaction intents of a policy report.
     * @param param the request object
     */
    public getPolicyReportTransactionIntents(param: PoliciesApiGetPolicyReportTransactionIntentsRequest, options?: Configuration): Promise<GasReportTransactionIntentsListResponse> {
        return this.api.getPolicyReportTransactionIntents(param.id, param.to, param._from,  options).toPromise();
    }

    /**
     * List all gas reports of a policy.
     * @param param the request object
     */
    public getPolicyTotalGasUsage(param: PoliciesApiGetPolicyTotalGasUsageRequest, options?: Configuration): Promise<GasReportListResponse> {
        return this.api.getPolicyTotalGasUsage(param.id, param.limit, param.skip, param.order,  options).toPromise();
    }

    /**
     * Update a policy object.
     * @param param the request object
     */
    public updatePolicy(param: PoliciesApiUpdatePolicyRequest, options?: Configuration): Promise<PolicyResponse> {
        return this.api.updatePolicy(param.id, param.updatePolicyRequest,  options).toPromise();
    }

}

import { ObservablePolicyRulesApi } from "./ObservableAPI";
import { PolicyRulesApiRequestFactory, PolicyRulesApiResponseProcessor} from "../apis/PolicyRulesApi";

export interface PolicyRulesApiCreatePolicyRuleRequest {
    /**
     * 
     * @type CreatePolicyRuleRequest
     * @memberof PolicyRulesApicreatePolicyRule
     */
    createPolicyRuleRequest: CreatePolicyRuleRequest
}

export interface PolicyRulesApiDeletePolicyRuleRequest {
    /**
     * Specifies the unique policy rule ID (starts with afu_).
     * @type string
     * @memberof PolicyRulesApideletePolicyRule
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

export interface PolicyRulesApiUpdatePolicyRuleRequest {
    /**
     * Specifies the unique policy rule ID (starts with afu_).
     * @type string
     * @memberof PolicyRulesApiupdatePolicyRule
     */
    id: string
    /**
     * 
     * @type UpdatePolicyRuleRequest
     * @memberof PolicyRulesApiupdatePolicyRule
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
    public createPolicyRule(param: PolicyRulesApiCreatePolicyRuleRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.createPolicyRule(param.createPolicyRuleRequest,  options).toPromise();
    }

    /**
     * Deletes a policy rule object.
     * @param param the request object
     */
    public deletePolicyRule(param: PolicyRulesApiDeletePolicyRuleRequest, options?: Configuration): Promise<PolicyRuleDeleteResponse> {
        return this.api.deletePolicyRule(param.id,  options).toPromise();
    }

    /**
     * Returns a list of policy rules of a policy.  The policy rules are returned sorted by creation date, with the most recently created policy rules appearing first.  By default, a maximum of 10 policy rules are shown per page.
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
    public updatePolicyRule(param: PolicyRulesApiUpdatePolicyRuleRequest, options?: Configuration): Promise<PolicyRuleResponse> {
        return this.api.updatePolicyRule(param.id, param.updatePolicyRuleRequest,  options).toPromise();
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
    /**
     * 
     * @type string
     * @memberof SessionsApicreateSession
     */
    xBehalfOfProject?: string
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
    /**
     * 
     * @type string
     * @memberof SessionsApirevokeSession
     */
    xBehalfOfProject?: string
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
     * Creates a Session.
     * Create a session key.
     * @param param the request object
     */
    public createSession(param: SessionsApiCreateSessionRequest, options?: Configuration): Promise<SessionResponse> {
        return this.api.createSession(param.createSessionRequest, param.xBehalfOfProject,  options).toPromise();
    }

    /**
     * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
     * List session keys of a player.
     * @param param the request object
     */
    public getPlayerSessions(param: SessionsApiGetPlayerSessionsRequest, options?: Configuration): Promise<SessionListResponse> {
        return this.api.getPlayerSessions(param.player, param.limit, param.skip, param.order, param.expand,  options).toPromise();
    }

    /**
     * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
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
        return this.api.revokeSession(param.revokeSessionRequest, param.xBehalfOfProject,  options).toPromise();
    }

    /**
     * Send signed userOperationHash to create session.
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
     * @type CreateDeveloperAccountCreateRequest
     * @memberof SettingsApicreateDeveloperAccount
     */
    createDeveloperAccountCreateRequest: CreateDeveloperAccountCreateRequest
}

export interface SettingsApiDeleteDeveloperAccountRequest {
    /**
     * Specifies a unique developer account (starts with dac_).
     * @type string
     * @memberof SettingsApideleteDeveloperAccount
     */
    id: string
}

export interface SettingsApiGetDeveloperAccountRequest {
    /**
     * Specifies the unique developer account ID (starts with dac_).
     * @type string
     * @memberof SettingsApigetDeveloperAccount
     */
    id: string
    /**
     * 
     * @type Array&lt;DeveloperAccountResponseExpandable&gt;
     * @memberof SettingsApigetDeveloperAccount
     */
    expand?: Array<DeveloperAccountResponseExpandable>
}

export interface SettingsApiGetDeveloperAccountsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof SettingsApigetDeveloperAccounts
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof SettingsApigetDeveloperAccounts
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof SettingsApigetDeveloperAccounts
     */
    order?: SortOrder
    /**
     * Specifies the fields to expand in the response.
     * @type Array&lt;DeveloperAccountResponseExpandable&gt;
     * @memberof SettingsApigetDeveloperAccounts
     */
    expand?: Array<DeveloperAccountResponseExpandable>
    /**
     * Specifies whether to include deleted dev accounts.
     * @type boolean
     * @memberof SettingsApigetDeveloperAccounts
     */
    deleted?: boolean
}

export interface SettingsApiGetVerificationPayloadRequest {
    /**
     * Specifies the address
     * @type string
     * @memberof SettingsApigetVerificationPayload
     */
    address: string
}

export interface SettingsApiSignPayloadDeveloperAccountRequest {
    /**
     * Specifies the unique developer account ID (starts with dac_).
     * @type string
     * @memberof SettingsApisignPayloadDeveloperAccount
     */
    id: string
    /**
     * 
     * @type SignPayloadRequest
     * @memberof SettingsApisignPayloadDeveloperAccount
     */
    signPayloadRequest: SignPayloadRequest
}

export interface SettingsApiUpdateDeveloperAccountRequest {
    /**
     * 
     * @type string
     * @memberof SettingsApiupdateDeveloperAccount
     */
    id: string
    /**
     * 
     * @type UpdateDeveloperAccountCreateRequest
     * @memberof SettingsApiupdateDeveloperAccount
     */
    updateDeveloperAccountCreateRequest: UpdateDeveloperAccountCreateRequest
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create or add a developer account. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
     * Create a developer account.
     * @param param the request object
     */
    public createDeveloperAccount(param: SettingsApiCreateDeveloperAccountRequest, options?: Configuration): Promise<DeveloperAccountResponse> {
        return this.api.createDeveloperAccount(param.createDeveloperAccountCreateRequest,  options).toPromise();
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
     * Retrieve a developer account.  Returns the latest 10 transaction intents that were created with each developer account.
     * Get existing developer account.
     * @param param the request object
     */
    public getDeveloperAccount(param: SettingsApiGetDeveloperAccountRequest, options?: Configuration): Promise<DeveloperAccountResponse> {
        return this.api.getDeveloperAccount(param.id, param.expand,  options).toPromise();
    }

    /**
     * Retrieve the list of the developer accounts for the current project.  Returns the latest 10 transaction intents that were created with each developer account.  By default, a maximum of 10 accounts are shown per page.
     * List of developer accounts.
     * @param param the request object
     */
    public getDeveloperAccounts(param: SettingsApiGetDeveloperAccountsRequest = {}, options?: Configuration): Promise<DeveloperAccountListResponse> {
        return this.api.getDeveloperAccounts(param.limit, param.skip, param.order, param.expand, param.deleted,  options).toPromise();
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
     * Signs the typed repositories value with types repositories structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
     * Sign a given payload
     * @param param the request object
     */
    public signPayloadDeveloperAccount(param: SettingsApiSignPayloadDeveloperAccountRequest, options?: Configuration): Promise<SignPayloadResponse> {
        return this.api.signPayloadDeveloperAccount(param.id, param.signPayloadRequest,  options).toPromise();
    }

    /**
     * Update a developer account.
     * Update a developer account.
     * @param param the request object
     */
    public updateDeveloperAccount(param: SettingsApiUpdateDeveloperAccountRequest, options?: Configuration): Promise<DeveloperAccountResponse> {
        return this.api.updateDeveloperAccount(param.id, param.updateDeveloperAccountCreateRequest,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiCreateSubscriptionRequest {
    /**
     * 
     * @type CreateSubscriptionRequest
     * @memberof SubscriptionsApicreateSubscription
     */
    createSubscriptionRequest: CreateSubscriptionRequest
}

export interface SubscriptionsApiCreateTriggerRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApicreateTrigger
     */
    id: string
    /**
     * 
     * @type CreateTriggerRequest
     * @memberof SubscriptionsApicreateTrigger
     */
    createTriggerRequest: CreateTriggerRequest
}

export interface SubscriptionsApiDeleteSubscriptionRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApideleteSubscription
     */
    id: string
}

export interface SubscriptionsApiDeleteTriggerRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApideleteTrigger
     */
    id: string
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApideleteTrigger
     */
    triggerId: string
}

export interface SubscriptionsApiGetSubscriptionRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApigetSubscription
     */
    id: string
}

export interface SubscriptionsApiGetSubscriptionsRequest {
}

export interface SubscriptionsApiGetTriggerRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApigetTrigger
     */
    id: string
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApigetTrigger
     */
    triggerId: string
}

export interface SubscriptionsApiGetTriggersRequest {
    /**
     * Specifies the unique subscription ID (starts with sub_).
     * @type string
     * @memberof SubscriptionsApigetTriggers
     */
    id: string
}

export interface SubscriptionsApiListSubscriptionLogsRequest {
    /**
     * Specifies the maximum number of records to return.
     * @type number
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    limit?: number
    /**
     * Specifies the offset for the first records to return.
     * @type number
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    skip?: number
    /**
     * Specifies the order in which to sort the results.
     * @type SortOrder
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    order?: SortOrder
    /**
     * Specifies the topic of the subscription logs
     * @type APITopic
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    topic?: APITopic
    /**
     * Specifies the status of the subscription logs
     * @type Status
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    status?: Status
    /**
     * Specifies the object ID of the object related to triggered notification
     * @type string
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    object?: string
    /**
     * Specifies the subscription ID
     * @type string
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    subscription?: string
    /**
     * Specifies the trigger ID
     * @type string
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    trigger?: string
    /**
     * Specifies the request ID
     * @type string
     * @memberof SubscriptionsApilistSubscriptionLogs
     */
    requestID?: string
}

export interface SubscriptionsApiTestTriggerRequest {
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Create subscription for project.
     * @param param the request object
     */
    public createSubscription(param: SubscriptionsApiCreateSubscriptionRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.createSubscription(param.createSubscriptionRequest,  options).toPromise();
    }

    /**
     * Creates a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Create trigger for subscription.
     * @param param the request object
     */
    public createTrigger(param: SubscriptionsApiCreateTriggerRequest, options?: Configuration): Promise<TriggerResponse> {
        return this.api.createTrigger(param.id, param.createTriggerRequest,  options).toPromise();
    }

    /**
     * Deletes a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Delete subscription of project.
     * @param param the request object
     */
    public deleteSubscription(param: SubscriptionsApiDeleteSubscriptionRequest, options?: Configuration): Promise<SubscriptionDeleteResponse> {
        return this.api.deleteSubscription(param.id,  options).toPromise();
    }

    /**
     * Deletes a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
     * Delete trigger of subscription.
     * @param param the request object
     */
    public deleteTrigger(param: SubscriptionsApiDeleteTriggerRequest, options?: Configuration): Promise<TriggerDeleteResponse> {
        return this.api.deleteTrigger(param.id, param.triggerId,  options).toPromise();
    }

    /**
     * Returns a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
     * Get subscription of project.
     * @param param the request object
     */
    public getSubscription(param: SubscriptionsApiGetSubscriptionRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.getSubscription(param.id,  options).toPromise();
    }

    /**
     * Returns a list of subscriptions for the given project.  This object represents the subscriptions where the project owner has subscribed to.  Subscriptions are returned sorted by creation date, with the most recently created subscriptions appearing first.  By default, a maximum of 10 subscriptions are shown per page.
     * List subscriptions of project.
     * @param param the request object
     */
    public getSubscriptions(param: SubscriptionsApiGetSubscriptionsRequest = {}, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.getSubscriptions( options).toPromise();
    }

    /**
     * Returns a trigger for the given id.  This object represents the trigger where the subscription owner has subscribed to.
     * Get trigger by id.
     * @param param the request object
     */
    public getTrigger(param: SubscriptionsApiGetTriggerRequest, options?: Configuration): Promise<TriggerResponse> {
        return this.api.getTrigger(param.id, param.triggerId,  options).toPromise();
    }

    /**
     * Returns a list of triggers for the given subscription.  This object represents the triggers where the subscription owner has subscribed to.  Triggers are returned sorted by creation date, with the most recently created triggers appearing first.  By default, a maximum of 10 triggers are shown per page.
     * List triggers of subscription.
     * @param param the request object
     */
    public getTriggers(param: SubscriptionsApiGetTriggersRequest, options?: Configuration): Promise<BaseEntityListResponseTriggerResponse> {
        return this.api.getTriggers(param.id,  options).toPromise();
    }

    /**
     * Lists logs of the triggered subscriptions for the given project.  This object represents the logs of the triggered subscriptions where the project owner has subscribed to.
     * List logs of triggered subscriptions.
     * @param param the request object
     */
    public listSubscriptionLogs(param: SubscriptionsApiListSubscriptionLogsRequest = {}, options?: Configuration): Promise<BaseEntityListResponseLogResponse> {
        return this.api.listSubscriptionLogs(param.limit, param.skip, param.order, param.topic, param.status, param.object, param.subscription, param.trigger, param.requestID,  options).toPromise();
    }

    /**
     * Test a trigger  Returns a trigger for the given id.
     * Test trigger by id.
     * @param param the request object
     */
    public testTrigger(param: SubscriptionsApiTestTriggerRequest = {}, options?: Configuration): Promise<TestTrigger200Response> {
        return this.api.testTrigger( options).toPromise();
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
    /**
     * 
     * @type string
     * @memberof TransactionIntentsApicreateTransactionIntent
     */
    xBehalfOfProject?: string
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
     * The chain ID. Must be a [supported chain](/development/chains).
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    chainId?: number
    /**
     * Filter by account ID or developer account (starts with acc_ or dac_ respectively).
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    account?: Array<string>
    /**
     * Filter by player ID (starts with pla_).
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    player?: Array<string>
    /**
     * Filter by successful (1) or failed (0) transaction intents.
     * @type number
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    status?: number
    /**
     * Filter by policy ID (starts with pol_).
     * @type Array&lt;string&gt;
     * @memberof TransactionIntentsApigetTransactionIntents
     */
    policy?: Array<string>
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
     * Creates a TransactionIntent.  A pending TransactionIntent has the `response` attribute as undefined.  After the TransactionIntent is created and broadcasted to the blockchain, `response` will be populated with the transaction hash and a status (1 success, 0 fail).  When using a non-custodial account, a `nextAction` attribute is returned with the `userOperationHash` that must be signed by the owner of the account.
     * Create a transaction intent object.
     * @param param the request object
     */
    public createTransactionIntent(param: TransactionIntentsApiCreateTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.createTransactionIntent(param.createTransactionIntentRequest, param.xBehalfOfProject,  options).toPromise();
    }

    /**
     * Estimate the gas cost of broadcasting a TransactionIntent.  This is a simulation, it does not send the transaction on-chain.  If a Policy ID is used that includes payment of gas in ERC-20 tokens, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens that will be used.
     * Estimate gas cost of creating a transaction
     * @param param the request object
     */
    public estimateTransactionIntentCost(param: TransactionIntentsApiEstimateTransactionIntentCostRequest, options?: Configuration): Promise<EstimateTransactionIntentGasResult> {
        return this.api.estimateTransactionIntentCost(param.createTransactionIntentRequest,  options).toPromise();
    }

    /**
     * Retrieves the details of a TransactionIntent that has previously been created.
     * Get a transaction intent object.
     * @param param the request object
     */
    public getTransactionIntent(param: TransactionIntentsApiGetTransactionIntentRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.getTransactionIntent(param.id, param.expand,  options).toPromise();
    }

    /**
     * Returns a list of TransactionIntents.
     * List transaction intents.
     * @param param the request object
     */
    public getTransactionIntents(param: TransactionIntentsApiGetTransactionIntentsRequest = {}, options?: Configuration): Promise<TransactionIntentListResponse> {
        return this.api.getTransactionIntents(param.limit, param.skip, param.order, param.expand, param.chainId, param.account, param.player, param.status, param.policy,  options).toPromise();
    }

    /**
     * Broadcasts a signed TransactionIntent to the blockchain.  Use this endpoint to send the signed `signableHash`. Openfort will then put it on-chain.
     * Send a signed transaction signableHash.
     * @param param the request object
     */
    public signature(param: TransactionIntentsApiSignatureRequest, options?: Configuration): Promise<TransactionIntentResponse> {
        return this.api.signature(param.id, param.signatureRequest,  options).toPromise();
    }

}
