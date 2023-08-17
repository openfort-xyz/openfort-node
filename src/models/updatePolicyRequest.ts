import { UpdatePolicyRequest as ApiUpdatePolicyRequest } from "../generated";

export interface UpdatePolicyRequest extends ApiUpdatePolicyRequest {
    id: string;
}
