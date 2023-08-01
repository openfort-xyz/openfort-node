import { PlayerCancelTransferOwnershipRequest as ApiPlayerCancelTransferOwnershipRequest } from "../generated/model/playerCancelTransferOwnershipRequest";

export interface PlayerCancelTransferOwnershipRequest extends ApiPlayerCancelTransferOwnershipRequest {
    playerId: string;
}
