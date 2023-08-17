import { CancelTransferOwnershipRequest as ApiCancelTransferOwnershipRequest } from "../generated";

export interface CancelTransferOwnershipRequest extends ApiCancelTransferOwnershipRequest {
    accountId: string;
}
