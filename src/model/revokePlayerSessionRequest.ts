import {RevokeSessionPlayerRequest} from "../generated/model/revokeSessionPlayerRequest";

export interface RevokePlayerSessionRequest extends RevokeSessionPlayerRequest {
    player_id: string;
}
