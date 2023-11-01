import { PlayerRequest } from "../generated";

export interface UpdatePlayerRequest extends PlayerRequest {
    id: string;
}
