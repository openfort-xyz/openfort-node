import { UpdatePolicyRequest as ApiUpdatePolicyRequest } from "../generated/model/updatePolicyRequest";

export interface UpdatePolicyRequest extends ApiUpdatePolicyRequest {
	id: string;
}
