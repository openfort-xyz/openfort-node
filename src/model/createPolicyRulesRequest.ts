import {PolicySchema} from "../generated/model/policySchema";

export interface CreatePolicyRulesRequest {
    type: PolicySchema;
    function_name: string;
    policy: string;
    contract: string;
    project?: string;
}
