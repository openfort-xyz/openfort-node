import { AuthenticationApi, PlayerResponse } from "../generated";
import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class IamApiWrapper extends BaseApiWrapper<AuthenticationApi> {
    constructor(accessToken: string, basePath?: string) {
        super(AuthenticationApi, accessToken, basePath);
    }

    /**
     * Verify an auth token.
     * @param token Specifies the auth token.
     */
    public async verifyToken(token: string): Promise<PlayerResponse> {
        return await this.api.verifyAuthToken(token);
    }
}
