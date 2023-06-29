import {TransferOwnershipRequest} from "../generated/model/transferOwnershipRequest";

export interface TransferAccountOwnershipRequest extends TransferOwnershipRequest {
    id: string;
}
