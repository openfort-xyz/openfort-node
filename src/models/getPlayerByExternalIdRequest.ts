import { OAuthProvider } from "../generated";

export interface GetPlayerByExternalIdRequest {
    provider: OAuthProvider;
    externalId: string;
}
