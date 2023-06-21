import {PolicySchema} from "../generated/model/policySchema";

export interface UpdatePolicyRulesRequest {
    id: string;
    type: PolicySchema;
    function_name: string;
    policy: string;
    contract: string;
    project?: string;
}
