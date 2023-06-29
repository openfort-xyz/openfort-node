import {AccountPlayerRequest} from "../generated/model/accountPlayerRequest";

export interface CreatePlayerAccountRequest extends AccountPlayerRequest {
    playerId: string;
}
