import { PlayerUpdateRequest } from "../generated";

export interface UpdatePlayerRequest extends PlayerUpdateRequest {
    id: string;
}
