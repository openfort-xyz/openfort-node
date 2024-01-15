import { DeveloperAccountCreateRequest, DeveloperAccountListResponse, DeveloperAccountDeleteResponse } from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { DeveloperAccountResponse, SettingsApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class SettingsApiWrapper extends BaseApiWrapper<SettingsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(SettingsApi, accessToken, basePath);
    }

    /**
     * Create or add a developer account. Developer accounts can be used as for escrow, minting and transferring assets. To add your own external account, add a signature and the address of the account. This verified account can then be used as a verified depositor
     * @param req Parameters to add a depositor address to s project environment
     */
    public async createDeveloperAccount(req: DeveloperAccountCreateRequest): Promise<DeveloperAccountResponse> {
        return await this.api.createDeveloperAccount(req);
    }

    /**
     * Lists the developer accounts of a project.
     */
    public async getDeveloperAccounts(): Promise<DeveloperAccountListResponse> {
        return await this.api.getDeveloperAccounts();
    }

    /**
     * Delete a developer account from a project.
     * @param id Id of the developer account
     */
    public async deleteDeveloperAccount(id: string): Promise<DeveloperAccountDeleteResponse> {
        return await this.api.deleteDeveloperAccount(id);
    }

    /**
     * Generate message, which should be signed for verification of the address ownership.
     * @param address Specifies the address
     */
    public async getVerificationPayload(address: string): Promise<string> {
        const result = await this.api.getVerificationPayload(address);
        return result.message;
    }

    /**
     * Creates or updates webhook address in a project environment configuration.
     * @param url Url of the webhook
     */
    public async updateWebhook(url: string): Promise<void> {
        return await this.api.updateWebhook({ url });
    }

    /**
     * Removes the webhook configuration from the project environment.
     */
    public async removeWebhook(): Promise<void> {
        return await this.api.removeWebhook();
    }
}
