import { z } from 'zod'

import {
  SendEvmTransactionRuleSchema,
  SignEvmHashRuleSchema,
  SignEvmMessageRuleSchema,
  SignEvmTransactionRuleSchema,
  SignEvmTypedDataRuleSchema,
} from './evmSchema'
import {
  SendSolTransactionRuleSchema,
  SignSolMessageRuleSchema,
  SignSolTransactionRuleSchema,
} from './solanaSchema'

// ---------------------------------------------------------------------------
// Policy scope
// ---------------------------------------------------------------------------

export const PolicyScopeEnum = z.enum(['project', 'account'])
export type PolicyScope = z.infer<typeof PolicyScopeEnum>

// ---------------------------------------------------------------------------
// Composed rule schema (discriminated union over `operation`)
// ---------------------------------------------------------------------------

export const RuleSchema = z.discriminatedUnion('operation', [
  SignEvmTransactionRuleSchema,
  SendEvmTransactionRuleSchema,
  SignEvmMessageRuleSchema,
  SignEvmTypedDataRuleSchema,
  SignEvmHashRuleSchema,
  SignSolTransactionRuleSchema,
  SendSolTransactionRuleSchema,
  SignSolMessageRuleSchema,
])

export type Rule = z.infer<typeof RuleSchema>

// ---------------------------------------------------------------------------
// Create / Update body schemas
// ---------------------------------------------------------------------------

export const CreatePolicyBodySchema = z.object({
  /** The scope of the policy. 'project' applies to all accounts, 'account' applies to a specific account. */
  scope: PolicyScopeEnum,
  /** A description of what this policy does. */
  description: z.string().optional(),
  /** The account ID for account-scoped policies (starts with acc_). Required when scope is 'account'. */
  accountId: z.string().optional(),
  /** Whether the policy is enabled. */
  enabled: z.boolean().optional(),
  /** Priority of the policy. Higher priority policies are evaluated first. */
  priority: z.number().int().optional(),
  /** The rules that make up this policy. Maximum 10 rules per policy. */
  rules: z.array(RuleSchema).min(1).max(10),
})

export type CreatePolicyBody = z.infer<typeof CreatePolicyBodySchema>

export const UpdatePolicyBodySchema = z.object({
  /** A description of what this policy does. */
  description: z.string().optional(),
  /** Whether the policy is enabled. */
  enabled: z.boolean().optional(),
  /** Priority of the policy. Higher priority policies are evaluated first. */
  priority: z.number().int().optional(),
  /** The rules that make up this policy. If provided, replaces all existing rules. Maximum 10 rules. */
  rules: z.array(RuleSchema).min(1).max(10).optional(),
})

export type UpdatePolicyBody = z.infer<typeof UpdatePolicyBodySchema>
