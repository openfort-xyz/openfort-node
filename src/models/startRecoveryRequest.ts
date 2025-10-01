import type { StartRecoveryRequest as ApiStartRecoveryRequest } from '../generated'

export interface StartRecoveryRequest extends ApiStartRecoveryRequest {
  id: string
}
