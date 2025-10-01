import {
  type CreatePaymasterRequest,
  PaymasterApi,
  type PaymasterDeleteResponse,
  type PaymasterResponse,
} from '../generated'
import type { GetPaymasterRequest } from '../models/getPaymasterRequest'
import type { UpdatePaymasterRequest } from '../models/updatePaymasterRequest'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class PaymasterApiWrapper extends BaseApiWrapper<PaymasterApi> {
  static type = 'paymaster'

  constructor(accessToken: string, basePath?: string) {
    super(PaymasterApi, accessToken, basePath)
  }

  /**
   * Create a new paymaster.
   * @param req The paymaster to create
   */
  public async create(req: CreatePaymasterRequest): Promise<PaymasterResponse> {
    return await this.api.createPaymaster(req)
  }

  /**
   * Returns the paymaster with the given id.
   * @param req Criteria to get paymaster.
   */
  public async get(req: GetPaymasterRequest): Promise<PaymasterResponse> {
    return await this.api.getPaymaster(req.id)
  }

  /**
   * Updates a paymaster object.
   * @param req Parameters to update paymaster
   */
  public async update(req: UpdatePaymasterRequest): Promise<PaymasterResponse> {
    const { id, ...body } = req
    return await this.api.updatePaymaster(id, body)
  }

  /**
   * Deletes a paymaster object.
   * @param id Paymaster id to delete
   */
  public async delete(id: string): Promise<PaymasterDeleteResponse> {
    return await this.api.deletePaymaster(id)
  }
}
