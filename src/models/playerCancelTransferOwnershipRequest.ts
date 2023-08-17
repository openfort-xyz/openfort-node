import { PlayerCancelTransferOwnershipRequest as ApiPlayerCancelTransferOwnershipRequest } from "../generated";

export interface PlayerCancelTransferOwnershipRequest extends ApiPlayerCancelTransferOwnershipRequest {
    playerId: string;
}
