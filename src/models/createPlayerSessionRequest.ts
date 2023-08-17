import { CreatePlayerSessionRequest as ApiCreatePlayerSessionRequest } from "../generated";

export interface CreatePlayerSessionRequest extends ApiCreatePlayerSessionRequest {
    playerId: string;
}
