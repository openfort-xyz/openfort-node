import { z } from 'zod'

import { ActionEnum } from './evmSchema'

// ---------------------------------------------------------------------------
// Operator enums
// ---------------------------------------------------------------------------

export const SolAddressOperatorEnum = z.enum(['in', 'not in'])
export type SolAddressOperator = z.infer<typeof SolAddressOperatorEnum>

export const SolValueOperatorEnum = z.enum(['<=', '>='])
export type SolValueOperator = z.infer<typeof SolValueOperatorEnum>

export const SplAddressOperatorEnum = z.enum(['in', 'not in'])
export type SplAddressOperator = z.infer<typeof SplAddressOperatorEnum>

export const SplValueOperatorEnum = z.enum(['<=', '>='])
export type SplValueOperator = z.infer<typeof SplValueOperatorEnum>

export const MintAddressOperatorEnum = z.enum(['==', 'in'])
export type MintAddressOperator = z.infer<typeof MintAddressOperatorEnum>

export const SolDataOperatorEnum = z.enum([
  'in',
  'not in',
  '<=',
  '>=',
  '==',
  'match',
])
export type SolDataOperator = z.infer<typeof SolDataOperatorEnum>

export const ProgramIdOperatorEnum = z.enum(['in', 'not in'])
export type ProgramIdOperator = z.infer<typeof ProgramIdOperatorEnum>

export const SolNetworkOperatorEnum = z.enum(['in', 'not in'])
export type SolNetworkOperator = z.infer<typeof SolNetworkOperatorEnum>

export const SolNetworkEnum = z.enum(['mainnet-beta', 'devnet', 'testnet'])
export type SolNetwork = z.infer<typeof SolNetworkEnum>

// ---------------------------------------------------------------------------
// Base58 address helper
// ---------------------------------------------------------------------------

const base58Address = z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)

// ---------------------------------------------------------------------------
// Criterion schemas
// ---------------------------------------------------------------------------

/** Solana address criterion — checks transaction recipient against an address list. */
export const SolAddressCriterionSchema = z.object({
  type: z.literal('solAddress'),
  operator: SolAddressOperatorEnum,
  /** List of Solana addresses (Base58). */
  addresses: z.array(base58Address),
})
export type SolAddressCriterion = z.infer<typeof SolAddressCriterionSchema>

/** SOL value criterion — compares SOL transfer amount in lamports. */
export const SolValueCriterionSchema = z.object({
  type: z.literal('solValue'),
  operator: SolValueOperatorEnum,
  /** Value in lamports as string. */
  value: z.string().regex(/^[0-9]+$/),
})
export type SolValueCriterion = z.infer<typeof SolValueCriterionSchema>

/** SPL address criterion — checks SPL token transfer recipient addresses. */
export const SplAddressCriterionSchema = z.object({
  type: z.literal('splAddress'),
  operator: SplAddressOperatorEnum,
  /** List of recipient addresses (Base58). */
  addresses: z.array(base58Address),
})
export type SplAddressCriterion = z.infer<typeof SplAddressCriterionSchema>

/** SPL value criterion — compares SPL token transfer amount. */
export const SplValueCriterionSchema = z.object({
  type: z.literal('splValue'),
  operator: SplValueOperatorEnum,
  /** Token amount as string. */
  value: z.string().regex(/^[0-9]+$/),
})
export type SplValueCriterion = z.infer<typeof SplValueCriterionSchema>

/** Mint address criterion — checks token mint address. */
export const MintAddressCriterionSchema = z.object({
  type: z.literal('mintAddress'),
  operator: MintAddressOperatorEnum,
  /** List of mint addresses (Base58). */
  addresses: z.array(base58Address),
})
export type MintAddressCriterion = z.infer<typeof MintAddressCriterionSchema>

/** Solana data criterion — validates instruction data against an Anchor IDL. */
export const SolDataCriterionSchema = z.object({
  type: z.literal('solData'),
  operator: SolDataOperatorEnum,
  /** Anchor IDL JSON (v0.30+). */
  idl: z.string().min(1),
  /** Instruction name. */
  instructionName: z.string().min(1),
  /** Argument constraints. */
  args: z.record(z.unknown()).optional(),
})
export type SolDataCriterion = z.infer<typeof SolDataCriterionSchema>

/** Program ID criterion — checks involved program IDs. */
export const ProgramIdCriterionSchema = z.object({
  type: z.literal('programId'),
  operator: ProgramIdOperatorEnum,
  /** List of program IDs (Base58). */
  programIds: z.array(base58Address),
})
export type ProgramIdCriterion = z.infer<typeof ProgramIdCriterionSchema>

/** Solana network criterion — restricts to specific Solana networks. */
export const SolNetworkCriterionSchema = z.object({
  type: z.literal('solNetwork'),
  operator: SolNetworkOperatorEnum,
  /** List of networks: "mainnet-beta", "devnet", "testnet". */
  networks: z.array(SolNetworkEnum),
})
export type SolNetworkCriterion = z.infer<typeof SolNetworkCriterionSchema>

/** Solana message criterion — matches a sign-message payload against a regex. */
export const SolMessageCriterionSchema = z.object({
  type: z.literal('solMessage'),
  operator: z.literal('match'),
  /** RE2 regex pattern. */
  pattern: z.string().min(1),
})
export type SolMessageCriterion = z.infer<typeof SolMessageCriterionSchema>

// ---------------------------------------------------------------------------
// Per-operation criteria arrays
// ---------------------------------------------------------------------------

export const SignSolTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      SolAddressCriterionSchema,
      SolValueCriterionSchema,
      SplAddressCriterionSchema,
      SplValueCriterionSchema,
      MintAddressCriterionSchema,
      SolDataCriterionSchema,
      ProgramIdCriterionSchema,
    ]),
  )
  .max(10)

export const SendSolTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      SolAddressCriterionSchema,
      SolValueCriterionSchema,
      SplAddressCriterionSchema,
      SplValueCriterionSchema,
      MintAddressCriterionSchema,
      SolDataCriterionSchema,
      ProgramIdCriterionSchema,
      SolNetworkCriterionSchema,
    ]),
  )
  .max(10)

export const SignSolMessageCriteriaSchema = z
  .array(SolMessageCriterionSchema)
  .max(10)

// ---------------------------------------------------------------------------
// Rule schemas (discriminated by `operation`)
// ---------------------------------------------------------------------------

export const SignSolTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signSolTransaction'),
  criteria: SignSolTransactionCriteriaSchema,
})
export type SignSolTransactionRule = z.infer<
  typeof SignSolTransactionRuleSchema
>

export const SendSolTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sendSolTransaction'),
  criteria: SendSolTransactionCriteriaSchema,
})
export type SendSolTransactionRule = z.infer<
  typeof SendSolTransactionRuleSchema
>

export const SignSolMessageRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signSolMessage'),
  criteria: SignSolMessageCriteriaSchema,
})
export type SignSolMessageRule = z.infer<typeof SignSolMessageRuleSchema>
