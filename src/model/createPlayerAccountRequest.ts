import {AccountPlayerRequest} from "../generated/model/accountPlayerRequest";

export interface CreatePlayerAccountRequest extends AccountPlayerRequest {
    player_id: string;
}
