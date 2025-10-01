import type { TransferOwnershipRequest as ApiTransferOwnershipRequest } from '../generated'

export interface TransferOwnershipRequest extends ApiTransferOwnershipRequest {
  id: string
}
