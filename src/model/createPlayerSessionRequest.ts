import {CreateSessionPlayerRequest} from "../generated/model/createSessionPlayerRequest";

export interface CreatePlayerSessionRequest extends CreateSessionPlayerRequest {
    player_id: string;
}
