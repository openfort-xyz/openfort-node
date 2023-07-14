import {PlayerTransferOwnershipRequest} from "../generated/model/playerTransferOwnershipRequest";

export interface TransferPlayerAccountOwnershipRequest extends PlayerTransferOwnershipRequest {
    playerId: string;
}
