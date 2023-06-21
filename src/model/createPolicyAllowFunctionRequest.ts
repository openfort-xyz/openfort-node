import {PolicySchema} from "../generated/model/policySchema";

export interface CreatePolicyAllowFunctionRequest {
    id: string;
    type: PolicySchema;
    function_name: string;
    contract: string;
    project?: string;
}
