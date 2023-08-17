import { RevokeSessionPlayerRequest } from "../generated";

export interface RevokePlayerSessionRequest extends RevokeSessionPlayerRequest {
    playerId: string;
}
