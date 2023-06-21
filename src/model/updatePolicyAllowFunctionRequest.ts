import {PolicySchema} from "../generated/model/policySchema";

export interface UpdatePolicyAllowFunctionRequest {
    policy: string;
    policy_rule: string;
    function_name: string;
    contract: string;
    type?: PolicySchema;
    policy2?: string;
    project?: string;
}
