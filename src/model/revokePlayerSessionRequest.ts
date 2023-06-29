import {RevokeSessionPlayerRequest} from "../generated/model/revokeSessionPlayerRequest";

export interface RevokePlayerSessionRequest extends RevokeSessionPlayerRequest {
    playerId: string;
}
