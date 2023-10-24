import { OAuthProvider, OAuthRequest } from "../generated";

export interface VerifyOAuthTokenRequest extends OAuthRequest {
    provider: OAuthProvider;
}
