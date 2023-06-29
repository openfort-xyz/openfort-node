import {PolicyRuleRequest} from "../generated/model/policyRuleRequest";

export interface UpdatePolicyRulesRequest extends PolicyRuleRequest {
    id: string;
}
