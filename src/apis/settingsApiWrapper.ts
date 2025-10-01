import { type DeveloperAccountResponse, SettingsApi } from '../generated'
import type {
  CreateDeveloperAccountCreateRequest,
  DeveloperAccountDeleteResponse,
  DeveloperAccountListResponse,
} from '../models'
import type { GetDeveloperAccountRequest } from '../models/getDeveloperAccountRequest'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class SettingsApiWrapper extends BaseApiWrapper<SettingsApi> {
  static type = 'settings'

  constructor(accessToken: string, basePath?: string) {
    super(SettingsApi, accessToken, basePath)
  }

  /**
   * Create or add a developer account. Developer accounts can be used as for escrow, minting and transferring assets. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
   * @param req Parameters to add a depositor address to s project environment
   */
  public async createDeveloperAccount(
    req: CreateDeveloperAccountCreateRequest,
  ): Promise<DeveloperAccountResponse> {
    return await this.api.createDeveloperAccount(req)
  }

  /**
   * Lists the developer accounts of a project.
   */
  public async getDeveloperAccounts(): Promise<DeveloperAccountListResponse> {
    return await this.api.getDeveloperAccounts()
  }

  /**
   * Retrieve the list of the developer accounts for the current project
   */
  public async getDeveloperAccount(
    req: GetDeveloperAccountRequest,
  ): Promise<DeveloperAccountResponse> {
    return await this.api.getDeveloperAccount(req.id, req.expand)
  }

  /**
   * Delete a developer account from a project.
   * @param id Id of the developer account
   */
  public async deleteDeveloperAccount(
    id: string,
  ): Promise<DeveloperAccountDeleteResponse> {
    return await this.api.deleteDeveloperAccount(id)
  }

  /**
   * Generate message, which should be signed for verification of the address ownership.
   * @param address Specifies the address
   */
  public async getVerificationPayload(address: string): Promise<string> {
    const result = await this.api.getVerificationPayload(address)
    return result.message
  }
}
