import type { UpdateContractRequest as ApiUpdateContractRequest } from '../generated'

export interface UpdateContractRequest extends ApiUpdateContractRequest {
  id: string
}
