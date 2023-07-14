import {UpdatePolicyRuleRequest} from "../generated/model/updatePolicyRuleRequest";

export interface UpdatePolicyAllowFunctionRequest extends UpdatePolicyRuleRequest {
    policy: string;
    policyRule: string;
}
