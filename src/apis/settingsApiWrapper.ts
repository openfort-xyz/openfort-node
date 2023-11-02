import {
    PaymasterDepositorCreateRequest,
    PaymasterDepositorResponse,
    PaymasterDepositorListResponse,
    PaymasterDepositorDeleteResponse,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { SettingsApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class SettingsApiWrapper extends BaseApiWrapper<SettingsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(SettingsApi, accessToken, basePath);
    }

    /**
     * Adds a depositor address to a project environment.
     * @param req Parameters to add a depositor address to s project environment
     */
    public async addDepositorAddress(req: PaymasterDepositorCreateRequest): Promise<PaymasterDepositorResponse> {
        return await this.api.addDepositorAddress(req);
    }

    /**
     * Lists the depositor addresses of a project.
     */
    public async getDepositorAddresses(): Promise<PaymasterDepositorListResponse> {
        return await this.api.getDepositorAddresses();
    }

    /**
     * Removes a depositor address from a project.
     * @param id Id of the depositor address to remove
     */
    public async removeDepositorAddress(id: string): Promise<PaymasterDepositorDeleteResponse> {
        return await this.api.removeDepositorAddress(id);
    }

    /**
     * Generate message, which should be signed for verification of the address ownership.
     * @param address Specifies the paymaster depositor address
     */
    public async getMessageForSigningDepositorAddress(address: string): Promise<string> {
        const result = await this.api.getMessageForSigningDepositorAddress(address);
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
