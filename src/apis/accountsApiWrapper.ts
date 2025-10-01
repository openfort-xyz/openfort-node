import { AccountsApi } from '../generated'
import type {
  AccountListQueries,
  AccountListResponse,
  AccountResponse,
  CancelTransferOwnershipRequest,
  CompleteRecoveryRequest,
  CreateAccountRequest,
  GetAccountRequest,
  SignPayloadRequest,
  SignPayloadResponse,
  StartRecoveryRequest,
  TransactionIntentResponse,
  TransferOwnershipRequest,
} from '../models'
import type { DeployRequest } from '../models/deployRequest'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class AccountsApiWrapper extends BaseApiWrapper<AccountsApi> {
  static type = 'accounts'

  constructor(accessToken: string, basePath?: string) {
    super(AccountsApi, accessToken, basePath)
  }

  /**
   * Creates an account object.
   * @param req The account to create
   */
  public async create(req: CreateAccountRequest): Promise<AccountResponse> {
    return await this.api.createAccount(req)
  }

  /**
   * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
   * @param req Criteria to get account.
   */
  public async get(req: GetAccountRequest): Promise<AccountResponse> {
    return await this.api.getAccount(req.id, req.expand)
  }

  /**
   * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
   * @param req Criteria to get the list of accounts.
   */
  public async list(req: AccountListQueries): Promise<AccountListResponse> {
    return await this.api.getAccounts(
      req.limit,
      req.skip,
      req.order,
      req.chainId,
      req.player,
      req.address,
      req.expand,
    )
  }

  /**
   * Transfers ownership of an account to an address.
   * @param req Parameters to transfer ownership.
   */
  public async requestTransferOwnership(
    req: TransferOwnershipRequest,
  ): Promise<TransactionIntentResponse> {
    const { id, ...body } = req
    return await this.api.requestTransferOwnership(id, body)
  }

  /**
   * Cancel transfers ownership of an account to an address.
   * @param req Parameters to transfer ownership.
   */
  public async cancelTransferOwnership(
    req: CancelTransferOwnershipRequest,
  ): Promise<TransactionIntentResponse> {
    const { id, ...body } = req
    return await this.api.cancelTransferOwnership(id, body)
  }

  /**
   * Sign a given payload
   * @param req Parameters to sign payload
   */
  public async signPayload(
    req: SignPayloadRequest,
  ): Promise<SignPayloadResponse> {
    const { id, ...body } = req
    return await this.api.signPayload(id, body)
  }

  /**
   * Sync account state with the blockchain
   * @param id Specifies the unique account ID.
   */
  public async sync(id: string): Promise<AccountResponse> {
    return await this.api.syncAccount(id)
  }

  /**
   * This endpoint can be used to deploy an account that was counterfactually generated.
   * Deploy an account.
   * @param id Specifies the unique account ID.
   * @param deployRequest
   */
  public async deploy(req: DeployRequest): Promise<AccountResponse> {
    const { id, ...body } = req
    return await this.api.deployAccount(id, body)
  }

  /**
   * Start a recovery process of a recoverable account.
   */
  public async startRecovery(
    req: StartRecoveryRequest,
  ): Promise<TransactionIntentResponse> {
    const { id, ...body } = req
    return await this.api.startRecovery(id, body)
  }

  /**
   * Complete a recovery process of a recoverable account.
   */
  public async completeRecovery(
    req: CompleteRecoveryRequest,
  ): Promise<TransactionIntentResponse> {
    const { id, ...body } = req
    return await this.api.completeRecovery(id, body)
  }
}
