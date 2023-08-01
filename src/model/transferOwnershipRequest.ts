import { TransferOwnershipRequest as ApiTransferOwnershipRequest } from "../generated/model/transferOwnershipRequest";

export interface TransferOwnershipRequest extends ApiTransferOwnershipRequest {
    accountId: string;
}
