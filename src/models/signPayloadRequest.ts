import type { SignPayloadRequest as ApiSignPayloadRequest } from '../generated'

export interface SignPayloadRequest extends ApiSignPayloadRequest {
  id: string
}
