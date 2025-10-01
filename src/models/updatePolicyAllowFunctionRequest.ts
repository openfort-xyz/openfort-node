import type { UpdatePolicyRuleRequest } from '../generated'

export interface UpdatePolicyAllowFunctionRequest
  extends UpdatePolicyRuleRequest {
  policy: string
  policyRule: string
}
