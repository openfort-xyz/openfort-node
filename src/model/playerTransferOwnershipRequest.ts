import { PlayerTransferOwnershipRequest as ApiPlayerTransferOwnershipRequest } from "../generated/model/playerTransferOwnershipRequest";

export interface PlayerTransferOwnershipRequest extends ApiPlayerTransferOwnershipRequest {
    playerId: string;
}
