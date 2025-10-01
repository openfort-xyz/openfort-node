export interface GetPolicyRequest {
  id: string
  expand?: Array<'transactionIntents' | 'policyRules'>
}
