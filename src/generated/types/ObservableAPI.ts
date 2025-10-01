import {
  AccountsApiRequestFactory,
  AccountsApiResponseProcessor,
} from '../apis/AccountsApi'
import type { Configuration } from '../configuration'
import type { RequestContext, ResponseContext } from '../http/http'
import type { AccountListResponse } from '../models/AccountListResponse'
import type { AccountResponse } from '../models/AccountResponse'
import type { AccountResponseExpandable } from '../models/AccountResponseExpandable'
import type { AccountV2Response } from '../models/AccountV2Response'
import type { APITopic } from '../models/APITopic'
import type { AuthConfig } from '../models/AuthConfig'
import type { AuthenticateOAuthRequest } from '../models/AuthenticateOAuthRequest'
import type { Authorize200Response } from '../models/Authorize200Response'
import type { AuthorizePlayerRequest } from '../models/AuthorizePlayerRequest'
import type { AuthPlayerListResponse } from '../models/AuthPlayerListResponse'
import type { AuthPlayerResponse } from '../models/AuthPlayerResponse'
import type { AuthPlayerResponseWithRecoveryShare } from '../models/AuthPlayerResponseWithRecoveryShare'
import type { AuthProviderListResponse } from '../models/AuthProviderListResponse'
import type { AuthResponse } from '../models/AuthResponse'
import type { AuthSessionResponse } from '../models/AuthSessionResponse'
import type { BaseEntityListResponseAccountV2Response } from '../models/BaseEntityListResponseAccountV2Response'
import type { BaseEntityListResponseLogResponse } from '../models/BaseEntityListResponseLogResponse'
import type { BaseEntityListResponseTriggerResponse } from '../models/BaseEntityListResponseTriggerResponse'
import type { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest'
import type { CompleteRecoveryRequest } from '../models/CompleteRecoveryRequest'
import type { ContractDeleteResponse } from '../models/ContractDeleteResponse'
import type { ContractListResponse } from '../models/ContractListResponse'
import type { ContractReadResponse } from '../models/ContractReadResponse'
import type { ContractResponse } from '../models/ContractResponse'
import type { CreateAccountRequest } from '../models/CreateAccountRequest'
import type { CreateAuthPlayerRequest } from '../models/CreateAuthPlayerRequest'
import type { CreateContractRequest } from '../models/CreateContractRequest'
import type { CreateDeveloperAccountCreateRequest } from '../models/CreateDeveloperAccountCreateRequest'
import type { CreateEventRequest } from '../models/CreateEventRequest'
import type { CreateExchangeRequest } from '../models/CreateExchangeRequest'
import type { CreateForwarderContractRequest } from '../models/CreateForwarderContractRequest'
import type { CreatePaymasterRequest } from '../models/CreatePaymasterRequest'
import type { CreatePolicyRequest } from '../models/CreatePolicyRequest'
import type { CreatePolicyRuleRequest } from '../models/CreatePolicyRuleRequest'
import type { CreateSessionRequest } from '../models/CreateSessionRequest'
import type { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest'
import type { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest'
import type { CreateTriggerRequest } from '../models/CreateTriggerRequest'
import type { DeployRequest } from '../models/DeployRequest'
import type { DeveloperAccountDeleteResponse } from '../models/DeveloperAccountDeleteResponse'
import type { DeveloperAccountGetMessageResponse } from '../models/DeveloperAccountGetMessageResponse'
import type { DeveloperAccountListResponse } from '../models/DeveloperAccountListResponse'
import type { DeveloperAccountResponse } from '../models/DeveloperAccountResponse'
import type { DeveloperAccountResponseExpandable } from '../models/DeveloperAccountResponseExpandable'
import type { EstimateTransactionIntentGasResult } from '../models/EstimateTransactionIntentGasResult'
import type { EventDeleteResponse } from '../models/EventDeleteResponse'
import type { EventListResponse } from '../models/EventListResponse'
import type { EventResponse } from '../models/EventResponse'
import type { ForwarderContractDeleteResponse } from '../models/ForwarderContractDeleteResponse'
import type { ForwarderContractResponse } from '../models/ForwarderContractResponse'
import type { GasReportListResponse } from '../models/GasReportListResponse'
import type { GasReportTransactionIntentsListResponse } from '../models/GasReportTransactionIntentsListResponse'
import type { InventoryListResponse } from '../models/InventoryListResponse'
import type { InventoryResponse } from '../models/InventoryResponse'
import type { JwtKeyResponse } from '../models/JwtKeyResponse'
import type { LinkEmail200Response } from '../models/LinkEmail200Response'
import type { LoginOIDCRequest } from '../models/LoginOIDCRequest'
import type { LoginRequest } from '../models/LoginRequest'
import type { LoginWithIdTokenRequest } from '../models/LoginWithIdTokenRequest'
import type { LogoutRequest } from '../models/LogoutRequest'
import type { OAuthConfigListResponse } from '../models/OAuthConfigListResponse'
import type { OAuthInitRequest } from '../models/OAuthInitRequest'
import type { OAuthProvider } from '../models/OAuthProvider'
import type { OAuthResponse } from '../models/OAuthResponse'
import type { PaymasterDeleteResponse } from '../models/PaymasterDeleteResponse'
import type { PaymasterResponse } from '../models/PaymasterResponse'
import type { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest'
import type { PlayerCreateRequest } from '../models/PlayerCreateRequest'
import type { PlayerDeleteResponse } from '../models/PlayerDeleteResponse'
import type { PlayerListResponse } from '../models/PlayerListResponse'
import type { PlayerResponse } from '../models/PlayerResponse'
import type { PlayerResponseExpandable } from '../models/PlayerResponseExpandable'
import type { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest'
import type { PlayerUpdateRequest } from '../models/PlayerUpdateRequest'
import type { PolicyBalanceWithdrawResponse } from '../models/PolicyBalanceWithdrawResponse'
import type { PolicyDeleteResponse } from '../models/PolicyDeleteResponse'
import type { PolicyListResponse } from '../models/PolicyListResponse'
import type { PolicyResponse } from '../models/PolicyResponse'
import type { PolicyResponseExpandable } from '../models/PolicyResponseExpandable'
import type { PolicyRuleDeleteResponse } from '../models/PolicyRuleDeleteResponse'
import type { PolicyRuleListResponse } from '../models/PolicyRuleListResponse'
import type { PolicyRuleResponse } from '../models/PolicyRuleResponse'
import type { QuoteExchangeResult } from '../models/QuoteExchangeResult'
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest'
import type { RequestResetPasswordRequest } from '../models/RequestResetPasswordRequest'
import type { RequestVerifyEmailRequest } from '../models/RequestVerifyEmailRequest'
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest'
import type { RevokeSessionRequest } from '../models/RevokeSessionRequest'
import type { SessionListResponse } from '../models/SessionListResponse'
import type { SessionResponse } from '../models/SessionResponse'
import type { SessionResponseExpandable } from '../models/SessionResponseExpandable'
import type { SIWEAuthenticateRequest } from '../models/SIWEAuthenticateRequest'
import type { SIWEInitResponse } from '../models/SIWEInitResponse'
import type { SIWERequest } from '../models/SIWERequest'
import type { SignatureRequest } from '../models/SignatureRequest'
import type { SignerIdResponse } from '../models/SignerIdResponse'
import type { SignPayloadRequest } from '../models/SignPayloadRequest'
import type { SignPayloadResponse } from '../models/SignPayloadResponse'
import type { SignupEmailPassword201Response } from '../models/SignupEmailPassword201Response'
import type { SignupRequest } from '../models/SignupRequest'
import type { SortOrder } from '../models/SortOrder'
import type { StartRecoveryRequest } from '../models/StartRecoveryRequest'
import type { Status } from '../models/Status'
import type { SubscriptionDeleteResponse } from '../models/SubscriptionDeleteResponse'
import type { SubscriptionListResponse } from '../models/SubscriptionListResponse'
import type { SubscriptionResponse } from '../models/SubscriptionResponse'
import type { SwitchChainQueriesV2 } from '../models/SwitchChainQueriesV2'
import type { TestTrigger200Response } from '../models/TestTrigger200Response'
import type { ThirdPartyLinkRequest } from '../models/ThirdPartyLinkRequest'
import type { ThirdPartyOAuthRequest } from '../models/ThirdPartyOAuthRequest'
import type { TransactionIntentListResponse } from '../models/TransactionIntentListResponse'
import type { TransactionIntentResponse } from '../models/TransactionIntentResponse'
import type { TransactionIntentResponseExpandable } from '../models/TransactionIntentResponseExpandable'
import type { TransferOwnershipRequest } from '../models/TransferOwnershipRequest'
import type { TriggerDeleteResponse } from '../models/TriggerDeleteResponse'
import type { TriggerResponse } from '../models/TriggerResponse'
import type { UnlinkEmailRequest } from '../models/UnlinkEmailRequest'
import type { UnlinkOAuthRequest } from '../models/UnlinkOAuthRequest'
import type { UpdateContractRequest } from '../models/UpdateContractRequest'
import type { UpdateDeveloperAccountCreateRequest } from '../models/UpdateDeveloperAccountCreateRequest'
import type { UpdatePolicyRequest } from '../models/UpdatePolicyRequest'
import type { UpdatePolicyRuleRequest } from '../models/UpdatePolicyRuleRequest'
import type { VerifyEmailRequest } from '../models/VerifyEmailRequest'
import type { WithdrawalPolicyRequest } from '../models/WithdrawalPolicyRequest'
import { from, map, mergeMap, type Observable, of } from '../rxjsStub'
export class ObservableAccountsApi {
  private requestFactory: AccountsApiRequestFactory
  private responseProcessor: AccountsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: AccountsApiRequestFactory,
    responseProcessor?: AccountsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new AccountsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new AccountsApiResponseProcessor()
  }

  /**
   * Cancel a pending transfer of ownership.
   * Cancel request to transfer ownership of an account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param cancelTransferOwnershipRequest
   */
  public cancelTransferOwnership(
    id: string,
    cancelTransferOwnershipRequest: CancelTransferOwnershipRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.cancelTransferOwnership(
      id,
      cancelTransferOwnershipRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cancelTransferOwnership(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Complete a recovery process of a recoverable account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param completeRecoveryRequest
   */
  public completeRecovery(
    id: string,
    completeRecoveryRequest: CompleteRecoveryRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.completeRecovery(
      id,
      completeRecoveryRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.completeRecovery(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Creates a new blockchain account for the provided player. If not player is provided, a new one will be created.  Account creation does not consume any gas. All accounts of a player will use the same address across blockchains.  Each player can only have one account per chain.
   * Create an account object.
   * @param createAccountRequest
   */
  public createAccount(
    createAccountRequest: CreateAccountRequest,
    _options?: Configuration,
  ): Observable<AccountResponse> {
    const requestContextPromise = this.requestFactory.createAccount(
      createAccountRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * This endpoint can be used to deploy a smart contract account that was counterfactually generated.
   * Deploy an account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param deployRequest
   */
  public deployAccount(
    id: string,
    deployRequest: DeployRequest,
    _options?: Configuration,
  ): Observable<AccountResponse> {
    const requestContextPromise = this.requestFactory.deployAccount(
      id,
      deployRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deployAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * @param id
   */
  public disableAccount(
    id: string,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.disableAccount(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.disableAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves the details of an existing account.  Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.  Returns the latest 10 transaction intents created by this account.
   * Get existing account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param expand
   */
  public getAccount(
    id: string,
    expand?: AccountResponseExpandable[],
    _options?: Configuration,
  ): Observable<AccountResponse> {
    const requestContextPromise = this.requestFactory.getAccount(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * @param id
   */
  public getAccountV2(
    id: string,
    _options?: Configuration,
  ): Observable<AccountV2Response> {
    const requestContextPromise = this.requestFactory.getAccountV2(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccountV2(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of accounts for the given player.  This object represents a player\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  Returns the latest 10 transaction intents for each account.  By default, a maximum of 10 accounts are shown per page.
   * List accounts of a player.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param chainId The chain ID. Must be a [supported chain](/development/chains).
   * @param player Specifies the unique player ID (starts with pla_)
   * @param address Specifies the address of the account
   * @param expand Specifies the fields to expand in the response.
   */
  public getAccounts(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    chainId?: number,
    player?: string,
    address?: string,
    expand?: AccountResponseExpandable[],
    _options?: Configuration,
  ): Observable<AccountListResponse> {
    const requestContextPromise = this.requestFactory.getAccounts(
      limit,
      skip,
      order,
      chainId,
      player,
      address,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccounts(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of accounts for the given user.  This object represents a user\'s account, which is a blockchain smart account that can be used to interact with the blockchain.  The accounts are returned sorted by creation date, with the most recently created accounts appearing first.  Returns the latest 10 transaction intents for each account.  By default, a maximum of 10 accounts are shown per page.
   * List accounts of a user.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param chainId The chain ID. Must be a [supported chain](/development/chains).
   * @param user Specifies the unique user ID (starts with pla_)
   * @param chainType The chain type. Must be either \&quot;EVM\&quot; or \&quot;SVM\&quot;.
   * @param accountType Specifies the type of account. Must be either \&quot;Smart Account\&quot; or \&quot;Externally Owned Account\&quot;.
   * @param address Specifies the account address
   */
  public getAccountsV2(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    chainId?: number,
    user?: string,
    chainType?: string,
    accountType?: string,
    address?: string,
    _options?: Configuration,
  ): Observable<BaseEntityListResponseAccountV2Response> {
    const requestContextPromise = this.requestFactory.getAccountsV2(
      limit,
      skip,
      order,
      chainId,
      user,
      chainType,
      accountType,
      address,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccountsV2(rsp),
            ),
          )
        }),
      )
  }

  /**
   * @param address
   */
  public getSignerIdByAddress(
    address: string,
    _options?: Configuration,
  ): Observable<SignerIdResponse> {
    const requestContextPromise = this.requestFactory.getSignerIdByAddress(
      address,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSignerIdByAddress(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Perform a request to change the owner of an account.  To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
   * Request transfer ownership of account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param transferOwnershipRequest
   */
  public requestTransferOwnership(
    id: string,
    transferOwnershipRequest: TransferOwnershipRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.requestTransferOwnership(
      id,
      transferOwnershipRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.requestTransferOwnership(rsp),
            ),
          )
        }),
      )
  }

  /**
   * **Custodial Accounts only** - Signs the typed repositories value with types repositories structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
   * Sign a given payload
   * @param id Specifies the unique account ID (starts with acc_).
   * @param signPayloadRequest
   */
  public signPayload(
    id: string,
    signPayloadRequest: SignPayloadRequest,
    _options?: Configuration,
  ): Observable<SignPayloadResponse> {
    const requestContextPromise = this.requestFactory.signPayload(
      id,
      signPayloadRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.signPayload(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Start a recovery process of a recoverable account.
   * @param id Specifies the unique account ID (starts with acc_).
   * @param startRecoveryRequest
   */
  public startRecovery(
    id: string,
    startRecoveryRequest: StartRecoveryRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.startRecovery(
      id,
      startRecoveryRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.startRecovery(rsp),
            ),
          )
        }),
      )
  }

  /**
   * @param switchChainQueriesV2
   */
  public switchChainV2(
    switchChainQueriesV2: SwitchChainQueriesV2,
    _options?: Configuration,
  ): Observable<AccountV2Response> {
    const requestContextPromise = this.requestFactory.switchChainV2(
      switchChainQueriesV2,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.switchChainV2(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Synchronize the account state with the blockchain. Specifically, it updates the account owner and whether its deployed or not.
   * Sync account state with the blockchain
   * @param id Specifies the unique account ID (starts with acc_).
   */
  public syncAccount(
    id: string,
    _options?: Configuration,
  ): Observable<AccountResponse> {
    const requestContextPromise = this.requestFactory.syncAccount(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.syncAccount(rsp),
            ),
          )
        }),
      )
  }
}

import {
  AdminAuthenticationApiRequestFactory,
  AdminAuthenticationApiResponseProcessor,
} from '../apis/AdminAuthenticationApi'
export class ObservableAdminAuthenticationApi {
  private requestFactory: AdminAuthenticationApiRequestFactory
  private responseProcessor: AdminAuthenticationApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: AdminAuthenticationApiRequestFactory,
    responseProcessor?: AdminAuthenticationApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new AdminAuthenticationApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new AdminAuthenticationApiResponseProcessor()
  }

  /**
   * @param authorizePlayerRequest
   */
  public authorize(
    authorizePlayerRequest: AuthorizePlayerRequest,
    _options?: Configuration,
  ): Observable<Authorize200Response> {
    const requestContextPromise = this.requestFactory.authorize(
      authorizePlayerRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authorize(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint creates oauth configuration for the current project environment.
   * Create oauth configuration.
   * @param body Specifies the oauth provider specific configuration.
   */
  public create(
    body: AuthConfig,
    _options?: Configuration,
  ): Observable<AuthConfig> {
    const requestContextPromise = this.requestFactory.create(body, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.create(rsp)),
          )
        }),
      )
  }

  /**
   * Creates an authenticated player.  The player will be authenticated with the provider and an embedded account can be pre generated.
   * Create an authenticated player.
   * @param createAuthPlayerRequest
   */
  public createAuthPlayer(
    createAuthPlayerRequest: CreateAuthPlayerRequest,
    _options?: Configuration,
  ): Observable<AuthPlayerResponseWithRecoveryShare> {
    const requestContextPromise = this.requestFactory.createAuthPlayer(
      createAuthPlayerRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createAuthPlayer(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint creates oauth configuration for the current project environment.
   * Create oauth configuration.
   * @param body Specifies the oauth provider specific configuration.
   */
  public createOAuthConfig(
    body: AuthConfig,
    _options?: Configuration,
  ): Observable<AuthConfig> {
    const requestContextPromise = this.requestFactory.createOAuthConfig(
      body,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createOAuthConfig(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Deletes a player auth object.  It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
   * Deletes a player auth object.
   * @param id Specifies the unique player ID (starts with pla_).
   */
  public deleteAuthPlayer(
    id: string,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.deleteAuthPlayer(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteAuthPlayer(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint deletes oauth configuration for specified provider for the current project environment.
   * Delete oauth configuration.
   * @param provider Specifies the oauth provider type.
   */
  public deleteOAuthConfig(
    provider: OAuthProvider,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteOAuthConfig(
      provider,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteOAuthConfig(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves an authenticated player.  Players have linked accounts and are authenticated with a provider.
   * Authenticated player.
   * @param id
   */
  public getAuthPlayer(
    id: string,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.getAuthPlayer(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAuthPlayer(rsp),
            ),
          )
        }),
      )
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
  public getAuthPlayers(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    email?: string,
    externalUserId?: string,
    _options?: Configuration,
  ): Observable<AuthPlayerListResponse> {
    const requestContextPromise = this.requestFactory.getAuthPlayers(
      limit,
      skip,
      order,
      email,
      externalUserId,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAuthPlayers(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint retrieves oauth configuration for specified provider for the current project environment.
   * Get oauth configuration.
   * @param provider Specifies the oauth provider type.
   */
  public getOAuthConfig(
    provider: OAuthProvider,
    _options?: Configuration,
  ): Observable<AuthConfig> {
    const requestContextPromise = this.requestFactory.getOAuthConfig(
      provider,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getOAuthConfig(rsp),
            ),
          )
        }),
      )
  }

  /**
   * List configured OAuth methods for the current project environment.
   * List of oauth configurations.
   */
  public listOAuthConfig(
    _options?: Configuration,
  ): Observable<OAuthConfigListResponse> {
    const requestContextPromise = this.requestFactory.listOAuthConfig(_options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listOAuthConfig(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Verifies the token generated by Openfort Auth.
   * Verify auth token.
   * @param token Specifies the auth token.
   */
  public verifyAuthToken(
    token: string,
    _options?: Configuration,
  ): Observable<AuthSessionResponse> {
    const requestContextPromise = this.requestFactory.verifyAuthToken(
      token,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.verifyAuthToken(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
   * Retrieve player by oauth token.
   * @param authenticateOAuthRequest
   */
  public verifyOAuthToken(
    authenticateOAuthRequest: AuthenticateOAuthRequest,
    _options?: Configuration,
  ): Observable<PlayerResponse> {
    const requestContextPromise = this.requestFactory.verifyOAuthToken(
      authenticateOAuthRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.verifyOAuthToken(rsp),
            ),
          )
        }),
      )
  }
}

import {
  AuthenticationApiRequestFactory,
  AuthenticationApiResponseProcessor,
} from '../apis/AuthenticationApi'
export class ObservableAuthenticationApi {
  private requestFactory: AuthenticationApiRequestFactory
  private responseProcessor: AuthenticationApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthenticationApiRequestFactory,
    responseProcessor?: AuthenticationApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new AuthenticationApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new AuthenticationApiResponseProcessor()
  }

  /**
   * Authenticate player with SIWE
   * @param sIWEAuthenticateRequest
   */
  public authenticateSIWE(
    sIWEAuthenticateRequest: SIWEAuthenticateRequest,
    _options?: Configuration,
  ): Observable<void | AuthResponse> {
    const requestContextPromise = this.requestFactory.authenticateSIWE(
      sIWEAuthenticateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authenticateSIWE(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Get the jwks.json file.  You can use the jwks.json file to verify the signature of a JWT token issued by Openfort Auth.
   * Get the jwks.json file.
   * @param publishableKey Specifies the project publishable key (starts with pk_).
   */
  public getJwks(
    publishableKey: string,
    _options?: Configuration,
  ): Observable<JwtKeyResponse> {
    const requestContextPromise = this.requestFactory.getJwks(
      publishableKey,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.getJwks(rsp)),
          )
        }),
      )
  }

  /**
   * Initialize OAuth.
   * @param oAuthInitRequest
   * @param xGame
   */
  public initOAuth(
    oAuthInitRequest: OAuthInitRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<OAuthResponse> {
    const requestContextPromise = this.requestFactory.initOAuth(
      oAuthInitRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.initOAuth(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Create a challenge to link external wallet to the player.
   * Initialize SIWE.
   * @param sIWERequest
   * @param xGame
   */
  public initSIWE(
    sIWERequest: SIWERequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<SIWEInitResponse> {
    const requestContextPromise = this.requestFactory.initSIWE(
      sIWERequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.initSIWE(rsp)),
          )
        }),
      )
  }

  /**
   * @param loginRequest
   * @param xGame
   */
  public linkEmail(
    loginRequest: LoginRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<LinkEmail200Response> {
    const requestContextPromise = this.requestFactory.linkEmail(
      loginRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.linkEmail(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Initialize Link OAuth.
   * @param oAuthInitRequest
   * @param xGame
   */
  public linkOAuth(
    oAuthInitRequest: OAuthInitRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<OAuthResponse> {
    const requestContextPromise = this.requestFactory.linkOAuth(
      oAuthInitRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.linkOAuth(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Link external wallet.
   * @param sIWEAuthenticateRequest
   */
  public linkSIWE(
    sIWEAuthenticateRequest: SIWEAuthenticateRequest,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse | void> {
    const requestContextPromise = this.requestFactory.linkSIWE(
      sIWEAuthenticateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.linkSIWE(rsp)),
          )
        }),
      )
  }

  /**
   * Initialize Link OAuth.
   * @param thirdPartyLinkRequest
   * @param xGame
   */
  public linkThirdParty(
    thirdPartyLinkRequest: ThirdPartyLinkRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.linkThirdParty(
      thirdPartyLinkRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.linkThirdParty(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Authenticate a player based on email and password.
   * Email and password login.
   * @param loginRequest
   * @param xGame
   */
  public loginEmailPassword(
    loginRequest: LoginRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<SignupEmailPassword201Response> {
    const requestContextPromise = this.requestFactory.loginEmailPassword(
      loginRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.loginEmailPassword(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Authenticate a player from an identity token.
   * OIDC Identity token.
   * @param loginOIDCRequest
   * @param xGame
   */
  public loginOIDC(
    loginOIDCRequest: LoginOIDCRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<AuthResponse> {
    const requestContextPromise = this.requestFactory.loginOIDC(
      loginOIDCRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.loginOIDC(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Authenticate player with oauth token.
   * @param loginWithIdTokenRequest
   */
  public loginWithIdToken(
    loginWithIdTokenRequest: LoginWithIdTokenRequest,
    _options?: Configuration,
  ): Observable<AuthResponse> {
    const requestContextPromise = this.requestFactory.loginWithIdToken(
      loginWithIdTokenRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.loginWithIdToken(rsp),
            ),
          )
        }),
      )
  }

  /**
   * When using Openfort Auth, the endpoint logs out the player.
   * Log out a player.
   * @param logoutRequest
   */
  public logout(
    logoutRequest: LogoutRequest,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.logout(
      logoutRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.logout(rsp)),
          )
        }),
      )
  }

  /**
   */
  public me(_options?: Configuration): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.me(_options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.me(rsp)),
          )
        }),
      )
  }

  /**
   * Initialize OAuth.
   * @param key
   */
  public poolOAuth(
    key: string,
    _options?: Configuration,
  ): Observable<AuthResponse> {
    const requestContextPromise = this.requestFactory.poolOAuth(key, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.poolOAuth(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Get or create a new session for the player based on the refresh token.
   * Refresh or create auth session.
   * @param refreshTokenRequest
   */
  public refresh(
    refreshTokenRequest: RefreshTokenRequest,
    _options?: Configuration,
  ): Observable<AuthResponse> {
    const requestContextPromise = this.requestFactory.refresh(
      refreshTokenRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.refresh(rsp)),
          )
        }),
      )
  }

  /**
   * Create a guest player.
   * Create a guest player.
   * @param xGame
   */
  public registerGuest(
    xGame?: string,
    _options?: Configuration,
  ): Observable<AuthResponse> {
    const requestContextPromise = this.requestFactory.registerGuest(
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.registerGuest(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Start the Email Verification process for a player.
   * Request an Email Verification.
   * @param requestVerifyEmailRequest
   */
  public requestEmailVerification(
    requestVerifyEmailRequest: RequestVerifyEmailRequest,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.requestEmailVerification(
      requestVerifyEmailRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.requestEmailVerification(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Start the Reset process for a player\'s password.
   * Request a Reset password.
   * @param requestResetPasswordRequest
   */
  public requestResetPassword(
    requestResetPasswordRequest: RequestResetPasswordRequest,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.requestResetPassword(
      requestResetPasswordRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.requestResetPassword(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Reset a player\'s password.
   * Reset a password.
   * @param resetPasswordRequest
   */
  public resetPassword(
    resetPasswordRequest: ResetPasswordRequest,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.resetPassword(
      resetPasswordRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.resetPassword(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Create and authenticate a player based on email and password.
   * Email and password signup.
   * @param signupRequest
   * @param xGame
   */
  public signupEmailPassword(
    signupRequest: SignupRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<SignupEmailPassword201Response> {
    const requestContextPromise = this.requestFactory.signupEmailPassword(
      signupRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.signupEmailPassword(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Verify oauth token of a third party auth provider.
   * @param thirdPartyOAuthRequest
   * @param xGame
   */
  public thirdParty(
    thirdPartyOAuthRequest: ThirdPartyOAuthRequest,
    xGame?: string,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.thirdParty(
      thirdPartyOAuthRequest,
      xGame,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.thirdParty(rsp),
            ),
          )
        }),
      )
  }

  /**
   * @param unlinkEmailRequest
   */
  public unlinkEmail(
    unlinkEmailRequest: UnlinkEmailRequest,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.unlinkEmail(
      unlinkEmailRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.unlinkEmail(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Unlink OAuth account
   * @param unlinkOAuthRequest
   */
  public unlinkOAuth(
    unlinkOAuthRequest: UnlinkOAuthRequest,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse> {
    const requestContextPromise = this.requestFactory.unlinkOAuth(
      unlinkOAuthRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.unlinkOAuth(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Unlink external wallet.
   * @param sIWERequest
   */
  public unlinkSIWE(
    sIWERequest: SIWERequest,
    _options?: Configuration,
  ): Observable<AuthPlayerResponse | void> {
    const requestContextPromise = this.requestFactory.unlinkSIWE(
      sIWERequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.unlinkSIWE(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Verify a player\'s email address.
   * Verify an email.
   * @param verifyEmailRequest
   */
  public verifyEmail(
    verifyEmailRequest: VerifyEmailRequest,
    _options?: Configuration,
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.verifyEmail(
      verifyEmailRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.verifyEmail(rsp),
            ),
          )
        }),
      )
  }

  /**
   * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
   * Retrieve player by oauth token.
   * @param authenticateOAuthRequest
   */
  public verifyOAuthToken(
    authenticateOAuthRequest: AuthenticateOAuthRequest,
    _options?: Configuration,
  ): Observable<PlayerResponse> {
    const requestContextPromise = this.requestFactory.verifyOAuthToken(
      authenticateOAuthRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.verifyOAuthToken(rsp),
            ),
          )
        }),
      )
  }
}

import {
  ContractsApiRequestFactory,
  ContractsApiResponseProcessor,
} from '../apis/ContractsApi'
export class ObservableContractsApi {
  private requestFactory: ContractsApiRequestFactory
  private responseProcessor: ContractsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: ContractsApiRequestFactory,
    responseProcessor?: ContractsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new ContractsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new ContractsApiResponseProcessor()
  }

  /**
   * Add a new contract to your project in Openfort
   * Create contract object.
   * @param createContractRequest
   */
  public createContract(
    createContractRequest: CreateContractRequest,
    _options?: Configuration,
  ): Observable<ContractResponse> {
    const requestContextPromise = this.requestFactory.createContract(
      createContractRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete a contract from the project by providing its contract id.
   * Deletes a contract object.
   * @param id Specifies the unique contract ID (starts with con_).
   */
  public deleteContract(
    id: string,
    _options?: Configuration,
  ): Observable<ContractDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteContract(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieve a contract by providing their contract id.
   * Get a contract.
   * @param id Specifies the unique contract ID (starts with con_).
   */
  public getContract(
    id: string,
    _options?: Configuration,
  ): Observable<ContractResponse> {
    const requestContextPromise = this.requestFactory.getContract(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getContract(rsp),
            ),
          )
        }),
      )
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
  public getContracts(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    name?: string,
    deleted?: boolean,
    chainId?: number,
    address?: string,
    _options?: Configuration,
  ): Observable<ContractListResponse> {
    const requestContextPromise = this.requestFactory.getContracts(
      limit,
      skip,
      order,
      name,
      deleted,
      chainId,
      address,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getContracts(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Using this endpoint, you can get the repositories returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
   * Read on chain contract repositories.
   * @param id Specifies the unique contract ID (starts with con_).
   * @param functionName The function name of the contract.
   * @param functionArgs The function arguments of the contract, in string format. Accepts pla_, con_ and acc_ IDs.
   */
  public readContract(
    id: string,
    functionName: string,
    functionArgs?: any[],
    _options?: Configuration,
  ): Observable<ContractReadResponse> {
    const requestContextPromise = this.requestFactory.readContract(
      id,
      functionName,
      functionArgs,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.readContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Updates a contract object.
   * @param id Specifies the unique contract ID (starts with con_).
   * @param updateContractRequest
   */
  public updateContract(
    id: string,
    updateContractRequest: UpdateContractRequest,
    _options?: Configuration,
  ): Observable<ContractResponse> {
    const requestContextPromise = this.requestFactory.updateContract(
      id,
      updateContractRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateContract(rsp),
            ),
          )
        }),
      )
  }
}

import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from '../apis/DefaultApi'
export class ObservableDefaultApi {
  private requestFactory: DefaultApiRequestFactory
  private responseProcessor: DefaultApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new DefaultApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new DefaultApiResponseProcessor()
  }

  /**
   * List configured auth methods for the current project environment.
   * List of auth configurations.
   * @param enabled
   */
  public list(
    enabled?: boolean,
    _options?: Configuration,
  ): Observable<AuthProviderListResponse> {
    const requestContextPromise = this.requestFactory.list(enabled, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.list(rsp)),
          )
        }),
      )
  }
}

import {
  EventsApiRequestFactory,
  EventsApiResponseProcessor,
} from '../apis/EventsApi'
export class ObservableEventsApi {
  private requestFactory: EventsApiRequestFactory
  private responseProcessor: EventsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new EventsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new EventsApiResponseProcessor()
  }

  /**
   * Create a new event.
   * Create a new event.
   * @param createEventRequest
   */
  public createEvent(
    createEventRequest: CreateEventRequest,
    _options?: Configuration,
  ): Observable<EventResponse> {
    const requestContextPromise = this.requestFactory.createEvent(
      createEventRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createEvent(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete an event.
   * Delete an event.
   * @param id Specifies the unique event ID (starts with eve_).
   */
  public deleteEvent(
    id: string,
    _options?: Configuration,
  ): Observable<EventDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteEvent(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteEvent(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Get a single event.
   * Get a single event.
   * @param id Specifies the unique event ID (starts with eve_).
   */
  public getEvent(
    id: string,
    _options?: Configuration,
  ): Observable<EventResponse> {
    const requestContextPromise = this.requestFactory.getEvent(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.getEvent(rsp)),
          )
        }),
      )
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
  public getEvents(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    name?: string,
    deleted?: boolean,
    _options?: Configuration,
  ): Observable<EventListResponse> {
    const requestContextPromise = this.requestFactory.getEvents(
      limit,
      skip,
      order,
      name,
      deleted,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getEvents(rsp),
            ),
          )
        }),
      )
  }
}

import {
  ExchangeApiRequestFactory,
  ExchangeApiResponseProcessor,
} from '../apis/ExchangeApi'
export class ObservableExchangeApi {
  private requestFactory: ExchangeApiRequestFactory
  private responseProcessor: ExchangeApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: ExchangeApiRequestFactory,
    responseProcessor?: ExchangeApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new ExchangeApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new ExchangeApiResponseProcessor()
  }

  /**
   * Creates token swap.
   * Create token swap.
   * @param createExchangeRequest
   */
  public createSwap(
    createExchangeRequest: CreateExchangeRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.createSwap(
      createExchangeRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createSwap(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Quote token swap.
   * Quote token swap.
   * @param createExchangeRequest
   */
  public quoteSwap(
    createExchangeRequest: CreateExchangeRequest,
    _options?: Configuration,
  ): Observable<QuoteExchangeResult> {
    const requestContextPromise = this.requestFactory.quoteSwap(
      createExchangeRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.quoteSwap(rsp),
            ),
          )
        }),
      )
  }
}

import {
  ForwarderContractApiRequestFactory,
  ForwarderContractApiResponseProcessor,
} from '../apis/ForwarderContractApi'
export class ObservableForwarderContractApi {
  private requestFactory: ForwarderContractApiRequestFactory
  private responseProcessor: ForwarderContractApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: ForwarderContractApiRequestFactory,
    responseProcessor?: ForwarderContractApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new ForwarderContractApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new ForwarderContractApiResponseProcessor()
  }

  /**
   * Create a new forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
   * Create a new forwarder contract.
   * @param createForwarderContractRequest
   */
  public createForwarderContract(
    createForwarderContractRequest: CreateForwarderContractRequest,
    _options?: Configuration,
  ): Observable<ForwarderContractResponse> {
    const requestContextPromise = this.requestFactory.createForwarderContract(
      createForwarderContractRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createForwarderContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
   * Delete forwarder contract by id.
   * @param id
   */
  public deleteForwarderContract(
    id: string,
    _options?: Configuration,
  ): Observable<ForwarderContractDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteForwarderContract(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteForwarderContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
   * Get forwarder contract by id.
   * @param id
   */
  public getForwarderContract(
    id: string,
    _options?: Configuration,
  ): Observable<ForwarderContractResponse> {
    const requestContextPromise = this.requestFactory.getForwarderContract(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getForwarderContract(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 forwarder contract are shown per page.
   * List forwarder contract.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   */
  public listForwarderContracts(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    _options?: Configuration,
  ): Observable<ForwarderContractResponse[]> {
    const requestContextPromise = this.requestFactory.listForwarderContracts(
      limit,
      skip,
      order,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listForwarderContracts(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Update a forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
   * Update a forwarder contract.
   * @param id
   * @param createForwarderContractRequest
   */
  public updateForwarderContract(
    id: string,
    createForwarderContractRequest: CreateForwarderContractRequest,
    _options?: Configuration,
  ): Observable<ForwarderContractResponse> {
    const requestContextPromise = this.requestFactory.updateForwarderContract(
      id,
      createForwarderContractRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateForwarderContract(rsp),
            ),
          )
        }),
      )
  }
}

import {
  InventoriesApiRequestFactory,
  InventoriesApiResponseProcessor,
} from '../apis/InventoriesApi'
export class ObservableInventoriesApi {
  private requestFactory: InventoriesApiRequestFactory
  private responseProcessor: InventoriesApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: InventoriesApiRequestFactory,
    responseProcessor?: InventoriesApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new InventoriesApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new InventoriesApiResponseProcessor()
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
  public getAccountCryptoCurrencyInventory(
    id: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contractId?: string[],
    _options?: Configuration,
  ): Observable<InventoryListResponse> {
    const requestContextPromise =
      this.requestFactory.getAccountCryptoCurrencyInventory(
        id,
        limit,
        skip,
        order,
        contractId,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccountCryptoCurrencyInventory(rsp),
            ),
          )
        }),
      )
  }

  /**
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Retrieves the native asset of an existing account.
   * @param id Specifies the unique account ID.
   */
  public getAccountNativeInventory(
    id: string,
    _options?: Configuration,
  ): Observable<InventoryResponse> {
    const requestContextPromise = this.requestFactory.getAccountNativeInventory(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccountNativeInventory(rsp),
            ),
          )
        }),
      )
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
  public getAccountNftInventory(
    id: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contractId?: string[],
    _options?: Configuration,
  ): Observable<InventoryListResponse> {
    const requestContextPromise = this.requestFactory.getAccountNftInventory(
      id,
      limit,
      skip,
      order,
      contractId,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getAccountNftInventory(rsp),
            ),
          )
        }),
      )
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
  public getPlayerCryptoCurrencyInventory(
    id: string,
    chainId: number,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contract?: string[],
    _options?: Configuration,
  ): Observable<InventoryListResponse> {
    const requestContextPromise =
      this.requestFactory.getPlayerCryptoCurrencyInventory(
        id,
        chainId,
        limit,
        skip,
        order,
        contract,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayerCryptoCurrencyInventory(rsp),
            ),
          )
        }),
      )
  }

  /**
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Get native token list of player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param chainId Filter by chain id.
   */
  public getPlayerNativeInventory(
    id: string,
    chainId: number,
    _options?: Configuration,
  ): Observable<InventoryResponse> {
    const requestContextPromise = this.requestFactory.getPlayerNativeInventory(
      id,
      chainId,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayerNativeInventory(rsp),
            ),
          )
        }),
      )
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
  public getPlayerNftInventory(
    id: string,
    chainId: number,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contract?: string[],
    _options?: Configuration,
  ): Observable<InventoryListResponse> {
    const requestContextPromise = this.requestFactory.getPlayerNftInventory(
      id,
      chainId,
      limit,
      skip,
      order,
      contract,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayerNftInventory(rsp),
            ),
          )
        }),
      )
  }
}

import {
  PaymasterApiRequestFactory,
  PaymasterApiResponseProcessor,
} from '../apis/PaymasterApi'
export class ObservablePaymasterApi {
  private requestFactory: PaymasterApiRequestFactory
  private responseProcessor: PaymasterApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: PaymasterApiRequestFactory,
    responseProcessor?: PaymasterApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new PaymasterApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new PaymasterApiResponseProcessor()
  }

  /**
   * Create a new paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
   * Create a new paymaster.
   * @param createPaymasterRequest
   */
  public createPaymaster(
    createPaymasterRequest: CreatePaymasterRequest,
    _options?: Configuration,
  ): Observable<PaymasterResponse> {
    const requestContextPromise = this.requestFactory.createPaymaster(
      createPaymasterRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createPaymaster(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
   * Delete paymaster by id.
   * @param id
   */
  public deletePaymaster(
    id: string,
    _options?: Configuration,
  ): Observable<PaymasterDeleteResponse> {
    const requestContextPromise = this.requestFactory.deletePaymaster(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deletePaymaster(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
   * Get paymaster by id.
   * @param id
   */
  public getPaymaster(
    id: string,
    _options?: Configuration,
  ): Observable<PaymasterResponse> {
    const requestContextPromise = this.requestFactory.getPaymaster(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPaymaster(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of paymasters.  This object represents the paymasters that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 paymasters are shown per page.
   * List paymasters.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   */
  public listPaymasters(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    _options?: Configuration,
  ): Observable<PaymasterResponse[]> {
    const requestContextPromise = this.requestFactory.listPaymasters(
      limit,
      skip,
      order,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listPaymasters(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Update a paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
   * Update a paymaster.
   * @param id
   * @param createPaymasterRequest
   */
  public updatePaymaster(
    id: string,
    createPaymasterRequest: CreatePaymasterRequest,
    _options?: Configuration,
  ): Observable<PaymasterResponse> {
    const requestContextPromise = this.requestFactory.updatePaymaster(
      id,
      createPaymasterRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updatePaymaster(rsp),
            ),
          )
        }),
      )
  }
}

import {
  PlayersApiRequestFactory,
  PlayersApiResponseProcessor,
} from '../apis/PlayersApi'
export class ObservablePlayersApi {
  private requestFactory: PlayersApiRequestFactory
  private responseProcessor: PlayersApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: PlayersApiRequestFactory,
    responseProcessor?: PlayersApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new PlayersApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new PlayersApiResponseProcessor()
  }

  /**
   * This endpoint allows you to cancel a pending transfer of ownership.
   * Cancel request to transfer ownership of a player.
   * @param id
   * @param playerCancelTransferOwnershipRequest
   */
  public cancelTransferAccountOwnership(
    id: string,
    playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise =
      this.requestFactory.cancelTransferAccountOwnership(
        id,
        playerCancelTransferOwnershipRequest,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cancelTransferAccountOwnership(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Creates a player.
   * Create a player object.
   * @param playerCreateRequest
   */
  public createPlayer(
    playerCreateRequest: PlayerCreateRequest,
    _options?: Configuration,
  ): Observable<PlayerResponse> {
    const requestContextPromise = this.requestFactory.createPlayer(
      playerCreateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createPlayer(rsp),
            ),
          )
        }),
      )
  }

  /**
   * It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
   * Deletes a player object.
   * @param id Specifies the unique player ID (starts with pla_).
   */
  public deletePlayer(
    id: string,
    _options?: Configuration,
  ): Observable<PlayerDeleteResponse> {
    const requestContextPromise = this.requestFactory.deletePlayer(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deletePlayer(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves the details of a player that has previously been created.  Returns the latest 10 transaction intents that were created with this player.
   * Retrieves the details of an existing player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param expand Specifies the expandable fields.
   */
  public getPlayer(
    id: string,
    expand?: PlayerResponseExpandable[],
    _options?: Configuration,
  ): Observable<PlayerResponse> {
    const requestContextPromise = this.requestFactory.getPlayer(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayer(rsp),
            ),
          )
        }),
      )
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
  public getPlayers(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: PlayerResponseExpandable[],
    name?: string,
    _options?: Configuration,
  ): Observable<PlayerListResponse> {
    const requestContextPromise = this.requestFactory.getPlayers(
      limit,
      skip,
      order,
      expand,
      name,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayers(rsp),
            ),
          )
        }),
      )
  }

  /**
   * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
   * Request transfer ownership of a player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param playerTransferOwnershipRequest
   */
  public requestTransferAccountOwnership(
    id: string,
    playerTransferOwnershipRequest: PlayerTransferOwnershipRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise =
      this.requestFactory.requestTransferAccountOwnership(
        id,
        playerTransferOwnershipRequest,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.requestTransferAccountOwnership(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Updates the specified player by setting the values of the parameters passed.
   * Updates a player object.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param playerUpdateRequest
   */
  public updatePlayer(
    id: string,
    playerUpdateRequest: PlayerUpdateRequest,
    _options?: Configuration,
  ): Observable<PlayerResponse> {
    const requestContextPromise = this.requestFactory.updatePlayer(
      id,
      playerUpdateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updatePlayer(rsp),
            ),
          )
        }),
      )
  }
}

import {
  PoliciesApiRequestFactory,
  PoliciesApiResponseProcessor,
} from '../apis/PoliciesApi'
export class ObservablePoliciesApi {
  private requestFactory: PoliciesApiRequestFactory
  private responseProcessor: PoliciesApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: PoliciesApiRequestFactory,
    responseProcessor?: PoliciesApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new PoliciesApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new PoliciesApiResponseProcessor()
  }

  /**
   * Create a policy object.
   * @param createPolicyRequest
   */
  public createPolicy(
    createPolicyRequest: CreatePolicyRequest,
    _options?: Configuration,
  ): Observable<PolicyResponse> {
    const requestContextPromise = this.requestFactory.createPolicy(
      createPolicyRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createPolicy(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Transfer ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
   * Withdraw tokens collected by policy.
   * @param id Specifies the unique policy ID (starts with pol_).
   * @param withdrawalPolicyRequest
   */
  public createPolicyWithdrawal(
    id: string,
    withdrawalPolicyRequest: WithdrawalPolicyRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.createPolicyWithdrawal(
      id,
      withdrawalPolicyRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createPolicyWithdrawal(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete a policy object.
   * @param id Specifies the unique policy ID (starts with pol_).
   */
  public deletePolicy(
    id: string,
    _options?: Configuration,
  ): Observable<PolicyDeleteResponse> {
    const requestContextPromise = this.requestFactory.deletePolicy(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deletePolicy(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Disable a policy object.
   * @param id Specifies the unique policy ID (starts with pol_).
   */
  public disablePolicy(
    id: string,
    _options?: Configuration,
  ): Observable<PolicyResponse> {
    const requestContextPromise = this.requestFactory.disablePolicy(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.disablePolicy(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Enable a policy object.
   * @param id Specifies the unique policy ID (starts with pol_).
   */
  public enablePolicy(
    id: string,
    _options?: Configuration,
  ): Observable<PolicyResponse> {
    const requestContextPromise = this.requestFactory.enablePolicy(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.enablePolicy(rsp),
            ),
          )
        }),
      )
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
  public getPolicies(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: PolicyResponseExpandable[],
    name?: string,
    deleted?: boolean,
    chainId?: number,
    enabled?: boolean,
    _options?: Configuration,
  ): Observable<PolicyListResponse> {
    const requestContextPromise = this.requestFactory.getPolicies(
      limit,
      skip,
      order,
      expand,
      name,
      deleted,
      chainId,
      enabled,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicies(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves the details of a Policy that has previously been created.  Returns the latest 10 transaction intents that used this policy.
   * Get a policy object.
   * @param id Specifies the unique policy ID (starts with pol_).
   * @param expand Specifies the fields to expand.
   */
  public getPolicy(
    id: string,
    expand?: PolicyResponseExpandable[],
    _options?: Configuration,
  ): Observable<PolicyResponse> {
    const requestContextPromise = this.requestFactory.getPolicy(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicy(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Get the amount of ERC-20 tokens collected by policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
   * Get amount of tokens paid for gas policy.
   * @param id Specifies the unique policy ID (starts with pol_).
   */
  public getPolicyBalance(
    id: string,
    _options?: Configuration,
  ): Observable<PolicyBalanceWithdrawResponse> {
    const requestContextPromise = this.requestFactory.getPolicyBalance(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicyBalance(rsp),
            ),
          )
        }),
      )
  }

  /**
   * List transaction intents of a policy report.
   * @param id Specifies the unique policy ID (starts with pol_).
   * @param to The start date of the period in unix timestamp.
   * @param _from The end date of the period in unix timestamp.
   */
  public getPolicyReportTransactionIntents(
    id: string,
    to: number,
    _from: number,
    _options?: Configuration,
  ): Observable<GasReportTransactionIntentsListResponse> {
    const requestContextPromise =
      this.requestFactory.getPolicyReportTransactionIntents(
        id,
        to,
        _from,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicyReportTransactionIntents(rsp),
            ),
          )
        }),
      )
  }

  /**
   * List all gas reports of a policy.
   * @param id Specifies the unique policy ID (starts with pol_).
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   */
  public getPolicyTotalGasUsage(
    id: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    _options?: Configuration,
  ): Observable<GasReportListResponse> {
    const requestContextPromise = this.requestFactory.getPolicyTotalGasUsage(
      id,
      limit,
      skip,
      order,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicyTotalGasUsage(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Update a policy object.
   * @param id Specifies the unique policy ID (starts with pol_).
   * @param updatePolicyRequest
   */
  public updatePolicy(
    id: string,
    updatePolicyRequest: UpdatePolicyRequest,
    _options?: Configuration,
  ): Observable<PolicyResponse> {
    const requestContextPromise = this.requestFactory.updatePolicy(
      id,
      updatePolicyRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updatePolicy(rsp),
            ),
          )
        }),
      )
  }
}

import {
  PolicyRulesApiRequestFactory,
  PolicyRulesApiResponseProcessor,
} from '../apis/PolicyRulesApi'
export class ObservablePolicyRulesApi {
  private requestFactory: PolicyRulesApiRequestFactory
  private responseProcessor: PolicyRulesApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: PolicyRulesApiRequestFactory,
    responseProcessor?: PolicyRulesApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new PolicyRulesApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new PolicyRulesApiResponseProcessor()
  }

  /**
   * Create a policy rule object.
   * @param createPolicyRuleRequest
   */
  public createPolicyRule(
    createPolicyRuleRequest: CreatePolicyRuleRequest,
    _options?: Configuration,
  ): Observable<PolicyRuleResponse> {
    const requestContextPromise = this.requestFactory.createPolicyRule(
      createPolicyRuleRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createPolicyRule(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Deletes a policy rule object.
   * @param id Specifies the unique policy rule ID (starts with afu_).
   */
  public deletePolicyRule(
    id: string,
    _options?: Configuration,
  ): Observable<PolicyRuleDeleteResponse> {
    const requestContextPromise = this.requestFactory.deletePolicyRule(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deletePolicyRule(rsp),
            ),
          )
        }),
      )
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
  public getPolicyRules(
    policy: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: 'contract'[],
    _options?: Configuration,
  ): Observable<PolicyRuleListResponse> {
    const requestContextPromise = this.requestFactory.getPolicyRules(
      policy,
      limit,
      skip,
      order,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPolicyRules(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Update a policy rule object.
   * @param id Specifies the unique policy rule ID (starts with afu_).
   * @param updatePolicyRuleRequest
   */
  public updatePolicyRule(
    id: string,
    updatePolicyRuleRequest: UpdatePolicyRuleRequest,
    _options?: Configuration,
  ): Observable<PolicyRuleResponse> {
    const requestContextPromise = this.requestFactory.updatePolicyRule(
      id,
      updatePolicyRuleRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updatePolicyRule(rsp),
            ),
          )
        }),
      )
  }
}

import {
  SessionsApiRequestFactory,
  SessionsApiResponseProcessor,
} from '../apis/SessionsApi'
export class ObservableSessionsApi {
  private requestFactory: SessionsApiRequestFactory
  private responseProcessor: SessionsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: SessionsApiRequestFactory,
    responseProcessor?: SessionsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new SessionsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new SessionsApiResponseProcessor()
  }

  /**
   * Creates a Session.
   * Create a session key.
   * @param createSessionRequest
   * @param xBehalfOfProject
   */
  public createSession(
    createSessionRequest: CreateSessionRequest,
    xBehalfOfProject?: string,
    _options?: Configuration,
  ): Observable<SessionResponse> {
    const requestContextPromise = this.requestFactory.createSession(
      createSessionRequest,
      xBehalfOfProject,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createSession(rsp),
            ),
          )
        }),
      )
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
  public getPlayerSessions(
    player: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: SessionResponseExpandable[],
    _options?: Configuration,
  ): Observable<SessionListResponse> {
    const requestContextPromise = this.requestFactory.getPlayerSessions(
      player,
      limit,
      skip,
      order,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getPlayerSessions(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
   * Returns a player session by session id
   * @param id Specifies the unique session ID (starts with ses_).
   * @param expand Specifies the fields to expand.
   */
  public getSession(
    id: string,
    expand?: SessionResponseExpandable[],
    _options?: Configuration,
  ): Observable<SessionResponse> {
    const requestContextPromise = this.requestFactory.getSession(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSession(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Revoke the session session key.
   * @param revokeSessionRequest
   * @param xBehalfOfProject
   */
  public revokeSession(
    revokeSessionRequest: RevokeSessionRequest,
    xBehalfOfProject?: string,
    _options?: Configuration,
  ): Observable<SessionResponse> {
    const requestContextPromise = this.requestFactory.revokeSession(
      revokeSessionRequest,
      xBehalfOfProject,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.revokeSession(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Send signed userOperationHash to create session.
   * @param id Specifies the unique session ID (starts with ses_).
   * @param signatureRequest
   */
  public signatureSession(
    id: string,
    signatureRequest: SignatureRequest,
    _options?: Configuration,
  ): Observable<SessionResponse> {
    const requestContextPromise = this.requestFactory.signatureSession(
      id,
      signatureRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.signatureSession(rsp),
            ),
          )
        }),
      )
  }
}

import {
  SettingsApiRequestFactory,
  SettingsApiResponseProcessor,
} from '../apis/SettingsApi'
export class ObservableSettingsApi {
  private requestFactory: SettingsApiRequestFactory
  private responseProcessor: SettingsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: SettingsApiRequestFactory,
    responseProcessor?: SettingsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new SettingsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new SettingsApiResponseProcessor()
  }

  /**
   * Create or add a developer account. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
   * Create a developer account.
   * @param createDeveloperAccountCreateRequest
   */
  public createDeveloperAccount(
    createDeveloperAccountCreateRequest: CreateDeveloperAccountCreateRequest,
    _options?: Configuration,
  ): Observable<DeveloperAccountResponse> {
    const requestContextPromise = this.requestFactory.createDeveloperAccount(
      createDeveloperAccountCreateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createDeveloperAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Delete a developer account from the current project.
   * Delete a developer account.
   * @param id Specifies a unique developer account (starts with dac_).
   */
  public deleteDeveloperAccount(
    id: string,
    _options?: Configuration,
  ): Observable<DeveloperAccountDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDeveloperAccount(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteDeveloperAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieve a developer account.  Returns the latest 10 transaction intents that were created with each developer account.
   * Get existing developer account.
   * @param id Specifies the unique developer account ID (starts with dac_).
   * @param expand
   */
  public getDeveloperAccount(
    id: string,
    expand?: DeveloperAccountResponseExpandable[],
    _options?: Configuration,
  ): Observable<DeveloperAccountResponse> {
    const requestContextPromise = this.requestFactory.getDeveloperAccount(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getDeveloperAccount(rsp),
            ),
          )
        }),
      )
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
  public getDeveloperAccounts(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: DeveloperAccountResponseExpandable[],
    deleted?: boolean,
    _options?: Configuration,
  ): Observable<DeveloperAccountListResponse> {
    const requestContextPromise = this.requestFactory.getDeveloperAccounts(
      limit,
      skip,
      order,
      expand,
      deleted,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getDeveloperAccounts(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Generate message, which should be signed by the account your want to add as a developer account.
   * Generate message to sign
   * @param address Specifies the address
   */
  public getVerificationPayload(
    address: string,
    _options?: Configuration,
  ): Observable<DeveloperAccountGetMessageResponse> {
    const requestContextPromise = this.requestFactory.getVerificationPayload(
      address,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getVerificationPayload(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Signs the typed repositories value with types repositories structure for domain using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) specification.
   * Sign a given payload
   * @param id Specifies the unique developer account ID (starts with dac_).
   * @param signPayloadRequest
   */
  public signPayloadDeveloperAccount(
    id: string,
    signPayloadRequest: SignPayloadRequest,
    _options?: Configuration,
  ): Observable<SignPayloadResponse> {
    const requestContextPromise =
      this.requestFactory.signPayloadDeveloperAccount(
        id,
        signPayloadRequest,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.signPayloadDeveloperAccount(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Update a developer account.
   * Update a developer account.
   * @param id
   * @param updateDeveloperAccountCreateRequest
   */
  public updateDeveloperAccount(
    id: string,
    updateDeveloperAccountCreateRequest: UpdateDeveloperAccountCreateRequest,
    _options?: Configuration,
  ): Observable<DeveloperAccountResponse> {
    const requestContextPromise = this.requestFactory.updateDeveloperAccount(
      id,
      updateDeveloperAccountCreateRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateDeveloperAccount(rsp),
            ),
          )
        }),
      )
  }
}

import {
  SubscriptionsApiRequestFactory,
  SubscriptionsApiResponseProcessor,
} from '../apis/SubscriptionsApi'
export class ObservableSubscriptionsApi {
  private requestFactory: SubscriptionsApiRequestFactory
  private responseProcessor: SubscriptionsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: SubscriptionsApiRequestFactory,
    responseProcessor?: SubscriptionsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new SubscriptionsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new SubscriptionsApiResponseProcessor()
  }

  /**
   * Creates a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
   * Create subscription for project.
   * @param createSubscriptionRequest
   */
  public createSubscription(
    createSubscriptionRequest: CreateSubscriptionRequest,
    _options?: Configuration,
  ): Observable<SubscriptionResponse> {
    const requestContextPromise = this.requestFactory.createSubscription(
      createSubscriptionRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createSubscription(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Creates a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
   * Create trigger for subscription.
   * @param id Specifies the unique subscription ID (starts with sub_).
   * @param createTriggerRequest
   */
  public createTrigger(
    id: string,
    createTriggerRequest: CreateTriggerRequest,
    _options?: Configuration,
  ): Observable<TriggerResponse> {
    const requestContextPromise = this.requestFactory.createTrigger(
      id,
      createTriggerRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createTrigger(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Deletes a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
   * Delete subscription of project.
   * @param id Specifies the unique subscription ID (starts with sub_).
   */
  public deleteSubscription(
    id: string,
    _options?: Configuration,
  ): Observable<SubscriptionDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSubscription(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteSubscription(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Deletes a trigger for the given subscription.  This object represents the trigger where the subscription owner has subscribed to.
   * Delete trigger of subscription.
   * @param id Specifies the unique subscription ID (starts with sub_).
   * @param triggerId Specifies the unique subscription ID (starts with sub_).
   */
  public deleteTrigger(
    id: string,
    triggerId: string,
    _options?: Configuration,
  ): Observable<TriggerDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteTrigger(
      id,
      triggerId,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteTrigger(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a subscription for the given project.  This object represents the subscription where the project owner has subscribed to.
   * Get subscription of project.
   * @param id Specifies the unique subscription ID (starts with sub_).
   */
  public getSubscription(
    id: string,
    _options?: Configuration,
  ): Observable<SubscriptionResponse> {
    const requestContextPromise = this.requestFactory.getSubscription(
      id,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSubscription(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of subscriptions for the given project.  This object represents the subscriptions where the project owner has subscribed to.  Subscriptions are returned sorted by creation date, with the most recently created subscriptions appearing first.  By default, a maximum of 10 subscriptions are shown per page.
   * List subscriptions of project.
   */
  public getSubscriptions(
    _options?: Configuration,
  ): Observable<SubscriptionListResponse> {
    const requestContextPromise = this.requestFactory.getSubscriptions(_options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSubscriptions(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a trigger for the given id.  This object represents the trigger where the subscription owner has subscribed to.
   * Get trigger by id.
   * @param id Specifies the unique subscription ID (starts with sub_).
   * @param triggerId Specifies the unique subscription ID (starts with sub_).
   */
  public getTrigger(
    id: string,
    triggerId: string,
    _options?: Configuration,
  ): Observable<TriggerResponse> {
    const requestContextPromise = this.requestFactory.getTrigger(
      id,
      triggerId,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getTrigger(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of triggers for the given subscription.  This object represents the triggers where the subscription owner has subscribed to.  Triggers are returned sorted by creation date, with the most recently created triggers appearing first.  By default, a maximum of 10 triggers are shown per page.
   * List triggers of subscription.
   * @param id Specifies the unique subscription ID (starts with sub_).
   */
  public getTriggers(
    id: string,
    _options?: Configuration,
  ): Observable<BaseEntityListResponseTriggerResponse> {
    const requestContextPromise = this.requestFactory.getTriggers(id, _options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getTriggers(rsp),
            ),
          )
        }),
      )
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
  public listSubscriptionLogs(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    topic?: APITopic,
    status?: Status,
    object?: string,
    subscription?: string,
    trigger?: string,
    requestID?: string,
    _options?: Configuration,
  ): Observable<BaseEntityListResponseLogResponse> {
    const requestContextPromise = this.requestFactory.listSubscriptionLogs(
      limit,
      skip,
      order,
      topic,
      status,
      object,
      subscription,
      trigger,
      requestID,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listSubscriptionLogs(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Test a trigger  Returns a trigger for the given id.
   * Test trigger by id.
   */
  public testTrigger(
    _options?: Configuration,
  ): Observable<TestTrigger200Response> {
    const requestContextPromise = this.requestFactory.testTrigger(_options)

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.testTrigger(rsp),
            ),
          )
        }),
      )
  }
}

import {
  TransactionIntentsApiRequestFactory,
  TransactionIntentsApiResponseProcessor,
} from '../apis/TransactionIntentsApi'
export class ObservableTransactionIntentsApi {
  private requestFactory: TransactionIntentsApiRequestFactory
  private responseProcessor: TransactionIntentsApiResponseProcessor
  private configuration: Configuration

  public constructor(
    configuration: Configuration,
    requestFactory?: TransactionIntentsApiRequestFactory,
    responseProcessor?: TransactionIntentsApiResponseProcessor,
  ) {
    this.configuration = configuration
    this.requestFactory =
      requestFactory || new TransactionIntentsApiRequestFactory(configuration)
    this.responseProcessor =
      responseProcessor || new TransactionIntentsApiResponseProcessor()
  }

  /**
   * Creates a TransactionIntent.  A pending TransactionIntent has the `response` attribute as undefined.  After the TransactionIntent is created and broadcasted to the blockchain, `response` will be populated with the transaction hash and a status (1 success, 0 fail).  When using a non-custodial account, a `nextAction` attribute is returned with the `userOperationHash` that must be signed by the owner of the account.
   * Create a transaction intent object.
   * @param createTransactionIntentRequest
   * @param xBehalfOfProject
   */
  public createTransactionIntent(
    createTransactionIntentRequest: CreateTransactionIntentRequest,
    xBehalfOfProject?: string,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.createTransactionIntent(
      createTransactionIntentRequest,
      xBehalfOfProject,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createTransactionIntent(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Estimate the gas cost of broadcasting a TransactionIntent.  This is a simulation, it does not send the transaction on-chain.  If a Policy ID is used that includes payment of gas in ERC-20 tokens, an extra field `estimatedTXGasFeeToken` is returned with the estimated amount of tokens that will be used.
   * Estimate gas cost of creating a transaction
   * @param createTransactionIntentRequest
   */
  public estimateTransactionIntentCost(
    createTransactionIntentRequest: CreateTransactionIntentRequest,
    _options?: Configuration,
  ): Observable<EstimateTransactionIntentGasResult> {
    const requestContextPromise =
      this.requestFactory.estimateTransactionIntentCost(
        createTransactionIntentRequest,
        _options,
      )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.estimateTransactionIntentCost(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Retrieves the details of a TransactionIntent that has previously been created.
   * Get a transaction intent object.
   * @param id Specifies the unique transaction intent ID (starts with tin_).
   * @param expand Specifies the expandable fields.
   */
  public getTransactionIntent(
    id: string,
    expand?: TransactionIntentResponseExpandable[],
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.getTransactionIntent(
      id,
      expand,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getTransactionIntent(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Returns a list of TransactionIntents.
   * List transaction intents.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param expand Specifies the fields to expand in the response.
   * @param chainId The chain ID. Must be a [supported chain](/development/chains).
   * @param account Filter by account ID or developer account (starts with acc_ or dac_ respectively).
   * @param player Filter by player ID (starts with pla_).
   * @param status Filter by successful (1) or failed (0) transaction intents.
   * @param policy Filter by policy ID (starts with pol_).
   */
  public getTransactionIntents(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: TransactionIntentResponseExpandable[],
    chainId?: number,
    account?: string[],
    player?: string[],
    status?: number,
    policy?: string[],
    _options?: Configuration,
  ): Observable<TransactionIntentListResponse> {
    const requestContextPromise = this.requestFactory.getTransactionIntents(
      limit,
      skip,
      order,
      expand,
      chainId,
      account,
      player,
      status,
      policy,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getTransactionIntents(rsp),
            ),
          )
        }),
      )
  }

  /**
   * Broadcasts a signed TransactionIntent to the blockchain.  Use this endpoint to send the signed `signableHash`. Openfort will then put it on-chain.
   * Send a signed transaction signableHash.
   * @param id Specifies the unique transaction intent ID (starts with tin_).
   * @param signatureRequest
   */
  public signature(
    id: string,
    signatureRequest: SignatureRequest,
    _options?: Configuration,
  ): Observable<TransactionIntentResponse> {
    const requestContextPromise = this.requestFactory.signature(
      id,
      signatureRequest,
      _options,
    )

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise)
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      )
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response)
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            )
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.signature(rsp),
            ),
          )
        }),
      )
  }
}
