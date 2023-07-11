import {PolicyRuleUpdateRequest} from "../generated/model/policyRuleUpdateRequest";

export interface UpdatePolicyAllowFunctionRequest extends PolicyRuleUpdateRequest {
    policy: string;
    policy_rule: string;
}
