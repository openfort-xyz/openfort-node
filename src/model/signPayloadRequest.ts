import { SignPayloadRequest as ApiSignPayloadRequest } from "../generated/model/signPayloadRequest";

export interface SignPayloadRequest extends ApiSignPayloadRequest {
	id: string;
}
