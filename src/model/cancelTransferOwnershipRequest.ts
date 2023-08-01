import { CancelTransferOwnershipRequest as ApiCancelTransferOwnershipRequest } from "../generated/model/cancelTransferOwnershipRequest";

export interface CancelTransferOwnershipRequest extends ApiCancelTransferOwnershipRequest {
    accountId: string;
}
