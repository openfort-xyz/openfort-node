import {PlayerTransferOwnershipRequest} from "../generated/model/playerTransferOwnershipRequest";

export interface TransferPlayerAccountOwnershipRequest extends PlayerTransferOwnershipRequest {
    player_id: string;
}
