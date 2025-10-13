import { AccountsApi } from '../generated'
import type {
  AccountListQueriesV2,
  AccountV2Response,
  BaseEntityListResponseAccountV2Response,
  SwitchChainQueriesV2,
} from '../models'
import type { GetAccountV2Request } from '../models/getAccountV2Request'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class AccountsV2ApiWrapper extends BaseApiWrapper<AccountsApi> {
  static type = 'accounts'

  constructor(accessToken: string, basePath?: string) {
    super(AccountsApi, accessToken, basePath)
  }

  /**
   * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
   * @param req Criteria to get account.
   */
  public async get(req: GetAccountV2Request): Promise<AccountV2Response> {
    return await this.api.getAccountV2(req.id)
  }

  /**
   * Create an account in destination chain given an account.
   * @param req Request to switch account given account id and chain target.
   */
  public async switchChain(req: SwitchChainQueriesV2): Promise<AccountV2Response> {
    return await this.api.switchChainV2(req)
  }

  /**
   * Returns a list of accounts for the given user. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
   * @param req Criteria to get the list of accounts.
   */
  public async list(
    req: AccountListQueriesV2,
  ): Promise<BaseEntityListResponseAccountV2Response> {
    return await this.api.getAccountsV2(
      req.limit,
      req.skip,
      req.order,
      req.chainId,
      req.user,
      req.chainType,
      req.accountType,
      req.address,
    )
  }
}
