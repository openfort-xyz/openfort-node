import {PlayerRequest} from "../generated/model/playerRequest";

export interface UpdatePlayerRequest extends PlayerRequest{
    id: string;
}
