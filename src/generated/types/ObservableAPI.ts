import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { AccountInventoryListQueries } from '../models/AccountInventoryListQueries';
import { AccountListQueries } from '../models/AccountListQueries';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
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
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
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
import { PolicyRateLimit } from '../models/PolicyRateLimit';
import { PolicyRateLimitCOUNTPERINTERVAL } from '../models/PolicyRateLimitCOUNTPERINTERVAL';
import { PolicyRateLimitGASPERINTERVAL } from '../models/PolicyRateLimitGASPERINTERVAL';
import { PolicyRateLimitGASPERTRANSACTION } from '../models/PolicyRateLimitGASPERTRANSACTION';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyResponsePolicyRulesInner } from '../models/PolicyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from '../models/PolicyResponseTransactionIntentsInner';
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
     * Request the ownership transfer of an account to a given address.
     * @param id Specifies the unique account ID.
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
     * @param id Specifies the unique account ID.
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
     * Creates an account object.
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
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param expand whether to expand the response or not
     */
    public getAccount(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Observable<AccountResponse> {
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
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param player 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     */
    public getAccounts(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents'>, _options?: Configuration): Observable<AccountListResponse> {
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
     * Request the ownership transfer of an account to a given address.
     * @param id Specifies the unique account ID.
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
     * Sign a given payload
     * @param id Specifies the unique account ID.
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
     * @param id Specifies the unique account ID.
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
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID.
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
     * @param loginRequest 
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.login(loginRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

    /**
     * @param signupRequest 
     */
    public signup(signupRequest: SignupRequest, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.signup(signupRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signup(rsp)));
            }));
    }

    /**
     * @param token 
     */
    public verifyAuthToken(token: string, _options?: Configuration): Observable<PlayerResponse> {
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

}

import { ConfigAuthenticationApiRequestFactory, ConfigAuthenticationApiResponseProcessor} from "../apis/ConfigAuthenticationApi";
export class ObservableConfigAuthenticationApi {
    private requestFactory: ConfigAuthenticationApiRequestFactory;
    private responseProcessor: ConfigAuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigAuthenticationApiRequestFactory,
        responseProcessor?: ConfigAuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigAuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigAuthenticationApiResponseProcessor();
    }

    /**
     * Google OAuth. Add a google_client_id and a google_client_secret
     * @param providerRequest 
     */
    public editProvider(providerRequest: ProviderRequest, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.editProvider(providerRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editProvider(rsp)));
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
     * Creates a contract object.
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
     * Deletes a contract object.
     * @param id 
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
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param id Specifies the unique contract ID.
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
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param name 
     * @param deleted 
     * @param chainId 
     * @param address 
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
     * Updates a contract object.
     * @param id 
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

import { GoogleAuthenticationApiRequestFactory, GoogleAuthenticationApiResponseProcessor} from "../apis/GoogleAuthenticationApi";
export class ObservableGoogleAuthenticationApi {
    private requestFactory: GoogleAuthenticationApiRequestFactory;
    private responseProcessor: GoogleAuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GoogleAuthenticationApiRequestFactory,
        responseProcessor?: GoogleAuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GoogleAuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GoogleAuthenticationApiResponseProcessor();
    }

    /**
     */
    public getSigninUrl(_options?: Configuration): Observable<GetSigninUrlResponse> {
        const requestContextPromise = this.requestFactory.getSigninUrl(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSigninUrl(rsp)));
            }));
    }

    /**
     * @param key 
     */
    public getToken(key: string, _options?: Configuration): Observable<AuthResponse> {
        const requestContextPromise = this.requestFactory.getToken(key, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getToken(rsp)));
            }));
    }

}

import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";
export class ObservableInventoryApi {
    private requestFactory: InventoryApiRequestFactory;
    private responseProcessor: InventoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoryApiRequestFactory,
        responseProcessor?: InventoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InventoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InventoryApiResponseProcessor();
    }

    /**
     * Retrieves the cryptocurrency assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
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
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     */
    public getAccountInventory(id: string, _options?: Configuration): Observable<ObsoleteInventoryResponse> {
        const requestContextPromise = this.requestFactory.getAccountInventory(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountInventory(rsp)));
            }));
    }

    /**
     * Retrieves the native asset of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
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
     * Retrieves the NFT assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
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
     * Retrieves the cruptocurrency assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerCryptoCurrencyInventory(id, chainId, limit, skip, order, contractId, _options);

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
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     */
    public getPlayerInventory(id: string, chainId: number, _options?: Configuration): Observable<ObsoleteInventoryResponse> {
        const requestContextPromise = this.requestFactory.getPlayerInventory(id, chainId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerInventory(rsp)));
            }));
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
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
     * Retrieves the NFT assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Observable<InventoryListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerNftInventory(id, chainId, limit, skip, order, contractId, _options);

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
     * Request the ownership transfer of an account to a given address.
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
     * Creates a player object.
     * @param createPlayerRequest 
     */
    public createPlayer(createPlayerRequest: CreatePlayerRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.createPlayer(createPlayerRequest, _options);

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
     * Creates an account object for an existing player.
     * @param id Specifies the unique player ID.
     * @param createPlayerAccountRequest 
     */
    public createPlayerAccount(id: string, createPlayerAccountRequest: CreatePlayerAccountRequest, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.createPlayerAccount(id, createPlayerAccountRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlayerAccount(rsp)));
            }));
    }

    /**
     * Creates a session object for the given player.
     * @param id Specifies the unique player ID.
     * @param createPlayerSessionRequest 
     */
    public createPlayerSession(id: string, createPlayerSessionRequest: CreatePlayerSessionRequest, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.createPlayerSession(id, createPlayerSessionRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlayerSession(rsp)));
            }));
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param expand 
     */
    public getPlayer(id: string, expand?: Array<'transactionIntents' | 'accounts'>, _options?: Configuration): Observable<PlayerResponse> {
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
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param id 
     * @param expand 
     */
    public getPlayerAccounts(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Observable<AccountListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerAccounts(id, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerAccounts(rsp)));
            }));
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param name 
     */
    public getPlayers(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents' | 'accounts'>, name?: string, _options?: Configuration): Observable<PlayerListResponse> {
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
     * Transfer ownership of an account to an address.
     * @param id Specifies the unique player ID.
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
     * Creates a session object for the given player.
     * @param id Specifies the unique player ID.
     * @param revokeSessionPlayerRequest 
     */
    public revokePlayerSession(id: string, revokeSessionPlayerRequest: RevokeSessionPlayerRequest, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.revokePlayerSession(id, revokeSessionPlayerRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokePlayerSession(rsp)));
            }));
    }

    /**
     * Updates a player object.
     * @param id Specifies the unique player ID.
     * @param playerRequest 
     */
    public updatePlayer(id: string, playerRequest: PlayerRequest, _options?: Configuration): Observable<PlayerResponse> {
        const requestContextPromise = this.requestFactory.updatePlayer(id, playerRequest, _options);

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

import { PlayersAuthenticationApiRequestFactory, PlayersAuthenticationApiResponseProcessor} from "../apis/PlayersAuthenticationApi";
export class ObservablePlayersAuthenticationApi {
    private requestFactory: PlayersAuthenticationApiRequestFactory;
    private responseProcessor: PlayersAuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersAuthenticationApiRequestFactory,
        responseProcessor?: PlayersAuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlayersAuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlayersAuthenticationApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param skip 
     * @param order 
     * @param email 
     */
    public getAuthenticatedPlayers(limit?: number, skip?: number, order?: SortOrder, email?: string, _options?: Configuration): Observable<AuthPlayerListResponse> {
        const requestContextPromise = this.requestFactory.getAuthenticatedPlayers(limit, skip, order, email, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthenticatedPlayers(rsp)));
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
     * Creates a policy object.
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
     * @param id 
     * @param createPolicyAllowFunctionRequest 
     */
    public createPolicyAllowFunction(id: string, createPolicyAllowFunctionRequest: CreatePolicyAllowFunctionRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.createPolicyAllowFunction(id, createPolicyAllowFunctionRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPolicyAllowFunction(rsp)));
            }));
    }

    /**
     * Deletes a policy object.
     * @param id 
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
     * Gets all policy objects for a given project.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param name 
     * @param deleted 
     * @param chainId 
     */
    public getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents' | 'policyRules'>, name?: string, deleted?: boolean, chainId?: number, _options?: Configuration): Observable<PolicyListResponse> {
        const requestContextPromise = this.requestFactory.getPolicies(limit, skip, order, expand, name, deleted, chainId, _options);

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
     * Gets a policy object for a given project.
     * @param id 
     * @param expand 
     */
    public getPolicy(id: string, expand?: Array<'transactionIntents' | 'policyRules'>, _options?: Configuration): Observable<PolicyResponse> {
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
     * @param id 
     * @param expand 
     */
    public getPolicyAllowFunctions(id: string, expand?: Array<'contract'>, _options?: Configuration): Observable<PolicyRuleListResponse> {
        const requestContextPromise = this.requestFactory.getPolicyAllowFunctions(id, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyAllowFunctions(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getPolicyTotalGasUsage(id: string, _options?: Configuration): Observable<GasReport> {
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
     * Updates a policy object.
     * @param id 
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

    /**
     * @param policy 
     * @param policyRule 
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyAllowFunction(policy: string, policyRule: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.updatePolicyAllowFunction(policy, policyRule, updatePolicyRuleRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePolicyAllowFunction(rsp)));
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
     * Creates an allow function object.
     * @param createPolicyRuleRequest 
     */
    public createPolicyRules(createPolicyRuleRequest: CreatePolicyRuleRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.createPolicyRules(createPolicyRuleRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPolicyRules(rsp)));
            }));
    }

    /**
     * Deletes an polciy rule (allow_functions) object.
     * @param id 
     */
    public deletePolicyRules(id: string, _options?: Configuration): Observable<PolicyRuleDeleteResponse> {
        const requestContextPromise = this.requestFactory.deletePolicyRules(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePolicyRules(rsp)));
            }));
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param policy 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
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
     * Updates an allow functions object.
     * @param id Specifies the unique allow function ID.
     * @param updatePolicyRuleRequest 
     */
    public updatePolicyRules(id: string, updatePolicyRuleRequest: UpdatePolicyRuleRequest, _options?: Configuration): Observable<PolicyRuleResponse> {
        const requestContextPromise = this.requestFactory.updatePolicyRules(id, updatePolicyRuleRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePolicyRules(rsp)));
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
     * Creates the session for the account.
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
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param player 
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param address 
     */
    public getPlayerSessions(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<'transactionIntents'>, address?: string, _options?: Configuration): Observable<SessionListResponse> {
        const requestContextPromise = this.requestFactory.getPlayerSessions(player, limit, skip, order, expand, address, _options);

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
     * Returns a player session by session id
     * @param id 
     * @param expand 
     */
    public getSession(id: string, expand?: Array<'transactionIntents'>, _options?: Configuration): Observable<SessionResponse> {
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
     * Revokes the session for the account.
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
     * Confirms the creation of a session with an external owner.
     * @param id 
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
     * Creates a transaction intent object.
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
     * Retrieves a transaction intent object.
     * @param id 
     * @param expand 
     */
    public getTransactionIntent(id: string, expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>, _options?: Configuration): Observable<TransactionIntentResponse> {
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
    public getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<'nextAction' | 'policy' | 'player' | 'account'>, chainId?: number, accountId?: Array<string>, playerId?: Array<string>, policyId?: Array<string>, _options?: Configuration): Observable<TransactionIntentListResponse> {
        const requestContextPromise = this.requestFactory.getTransactionIntents(limit, skip, order, expand, chainId, accountId, playerId, policyId, _options);

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
     * Confirms the creation of a transaction intent with an external owner.
     * @param id 
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

    /**
     * @param id 
     */
    public updateTransactionIntentResponse(id: string, _options?: Configuration): Observable<TransactionIntentResponse> {
        const requestContextPromise = this.requestFactory.updateTransactionIntentResponse(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTransactionIntentResponse(rsp)));
            }));
    }

    /**
     */
    public updateTransactionIntentsResponse(_options?: Configuration): Observable<TransactionIntentListResponse> {
        const requestContextPromise = this.requestFactory.updateTransactionIntentsResponse(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTransactionIntentsResponse(rsp)));
            }));
    }

}
