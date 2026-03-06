import { z } from 'zod'

import {
  SendEvmTransactionRuleSchema,
  SignEvmHashRuleSchema,
  SignEvmMessageRuleSchema,
  SignEvmTransactionRuleSchema,
  SignEvmTypedDataRuleSchema,
  SponsorEvmTransactionRuleSchema,
} from './evmSchema'
import {
  SendSolTransactionRuleSchema,
  SignSolMessageRuleSchema,
  SignSolTransactionRuleSchema,
  SponsorSolTransactionRuleSchema,
} from './solanaSchema'

// ---------------------------------------------------------------------------
// Policy scope
// ---------------------------------------------------------------------------

/** Zod enum for policy scope — either 'project' (all accounts) or 'account' (single account). */
export const PolicyScopeEnum = z.enum(['project', 'account'])
/** The scope of a policy: 'project' applies to all accounts, 'account' applies to a specific account. */
export type PolicyScope = z.infer<typeof PolicyScopeEnum>

// ---------------------------------------------------------------------------
// Composed rule schema (discriminated union over `operation`)
// ---------------------------------------------------------------------------

/** Zod schema for a policy rule — a discriminated union over the `operation` field covering all EVM and Solana rule types. */
export const RuleSchema = z.discriminatedUnion('operation', [
  SignEvmTransactionRuleSchema,
  SendEvmTransactionRuleSchema,
  SignEvmMessageRuleSchema,
  SignEvmTypedDataRuleSchema,
  SignEvmHashRuleSchema,
  SponsorEvmTransactionRuleSchema,
  SignSolTransactionRuleSchema,
  SendSolTransactionRuleSchema,
  SignSolMessageRuleSchema,
  SponsorSolTransactionRuleSchema,
])

/** A single policy rule. Each rule specifies an operation (e.g. signEvmTransaction), an action (accept/reject), and optional criteria. */
export type Rule = z.infer<typeof RuleSchema>

// ---------------------------------------------------------------------------
// Create / Update body schemas
// ---------------------------------------------------------------------------

/** Zod schema for the request body when creating a new policy. */
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

/** Request body for creating a new policy. */
export type CreatePolicyBody = z.infer<typeof CreatePolicyBodySchema>

/** Zod schema for the request body when updating an existing policy. */
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

/** Request body for updating an existing policy. */
export type UpdatePolicyBody = z.infer<typeof UpdatePolicyBodySchema>
