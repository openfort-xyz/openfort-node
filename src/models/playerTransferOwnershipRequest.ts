import { PlayerTransferOwnershipRequest as ApiPlayerTransferOwnershipRequest } from "../generated";

export interface PlayerTransferOwnershipRequest extends ApiPlayerTransferOwnershipRequest {
    playerId: string;
}
