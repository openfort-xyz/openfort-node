import {
  type CreateExchangeRequest,
  ExchangeApi,
  type QuoteExchangeResult,
  type TransactionIntentResponse,
} from '../generated'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class ExchangeApiWrapper extends BaseApiWrapper<ExchangeApi> {
  static type = 'exchange'

  constructor(accessToken: string, basePath?: string) {
    super(ExchangeApi, accessToken, basePath)
  }

  /**
   * Creates token swap.
   * @param req The account to create
   */
  public async createSwap(
    req: CreateExchangeRequest,
  ): Promise<TransactionIntentResponse> {
    return await this.api.createSwap(req)
  }

  /**
   * Quote token swap.
   * @param req Criteria to get account.
   */
  public async quoteSwap(
    req: CreateExchangeRequest,
  ): Promise<QuoteExchangeResult> {
    return await this.api.quoteSwap(req)
  }
}
