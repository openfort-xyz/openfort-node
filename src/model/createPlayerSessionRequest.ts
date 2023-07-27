import { CreateSessionPlayerRequest } from "../generated/model/createSessionPlayerRequest";

export interface CreatePlayerSessionRequest extends CreateSessionPlayerRequest {
    playerId: string;
}
