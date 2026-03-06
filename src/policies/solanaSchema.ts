import { z } from 'zod'

import { ActionEnum } from './evmSchema'

// ---------------------------------------------------------------------------
// Operator enums
// ---------------------------------------------------------------------------

/** Zod enum for Solana address membership operators. */
export const SolAddressOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for Solana address criteria ('in' or 'not in'). */
export type SolAddressOperator = z.infer<typeof SolAddressOperatorEnum>

/** Zod enum for SOL value comparison operators. */
export const SolValueOperatorEnum = z.enum(['<=', '>='])
/** Comparison operator for SOL value criteria ('<=' or '>='). */
export type SolValueOperator = z.infer<typeof SolValueOperatorEnum>

/** Zod enum for SPL token address membership operators. */
export const SplAddressOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for SPL token address criteria ('in' or 'not in'). */
export type SplAddressOperator = z.infer<typeof SplAddressOperatorEnum>

/** Zod enum for SPL token value comparison operators. */
export const SplValueOperatorEnum = z.enum(['<=', '>='])
/** Comparison operator for SPL token value criteria ('<=' or '>='). */
export type SplValueOperator = z.infer<typeof SplValueOperatorEnum>

/** Zod enum for token mint address operators. */
export const MintAddressOperatorEnum = z.enum(['==', 'in'])
/** Operator for mint address criteria ('==' for exact match, 'in' for list membership). */
export type MintAddressOperator = z.infer<typeof MintAddressOperatorEnum>

/** Zod enum for Solana instruction data comparison operators. */
export const SolDataOperatorEnum = z.enum([
  'in',
  'not in',
  '<=',
  '>=',
  '==',
  'match',
])
/** Operator for Solana instruction data criteria (comparison, membership, or regex match). */
export type SolDataOperator = z.infer<typeof SolDataOperatorEnum>

/** Zod enum for program ID membership operators. */
export const ProgramIdOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for program ID criteria ('in' or 'not in'). */
export type ProgramIdOperator = z.infer<typeof ProgramIdOperatorEnum>

/** Zod enum for Solana network membership operators. */
export const SolNetworkOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for Solana network criteria ('in' or 'not in'). */
export type SolNetworkOperator = z.infer<typeof SolNetworkOperatorEnum>

/** Zod enum for Solana network identifiers. */
export const SolNetworkEnum = z.enum(['mainnet-beta', 'devnet', 'testnet'])
/** A Solana network identifier: 'mainnet-beta', 'devnet', or 'testnet'. */
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
/** A criterion that checks whether a transaction's recipient is in (or not in) a Solana address list. */
export type SolAddressCriterion = z.infer<typeof SolAddressCriterionSchema>

/** SOL value criterion — compares SOL transfer amount in lamports. */
export const SolValueCriterionSchema = z.object({
  type: z.literal('solValue'),
  operator: SolValueOperatorEnum,
  /** Value in lamports as string. */
  value: z.string().regex(/^[0-9]+$/),
})
/** A criterion that compares a SOL transfer amount (in lamports) using a comparison operator. */
export type SolValueCriterion = z.infer<typeof SolValueCriterionSchema>

/** SPL address criterion — checks SPL token transfer recipient addresses. */
export const SplAddressCriterionSchema = z.object({
  type: z.literal('splAddress'),
  operator: SplAddressOperatorEnum,
  /** List of recipient addresses (Base58). */
  addresses: z.array(base58Address),
})
/** A criterion that checks whether an SPL token transfer recipient is in (or not in) an address list. */
export type SplAddressCriterion = z.infer<typeof SplAddressCriterionSchema>

/** SPL value criterion — compares SPL token transfer amount. */
export const SplValueCriterionSchema = z.object({
  type: z.literal('splValue'),
  operator: SplValueOperatorEnum,
  /** Token amount as string. */
  value: z.string().regex(/^[0-9]+$/),
})
/** A criterion that compares an SPL token transfer amount using a comparison operator. */
export type SplValueCriterion = z.infer<typeof SplValueCriterionSchema>

/** Mint address criterion — checks token mint address. */
export const MintAddressCriterionSchema = z.object({
  type: z.literal('mintAddress'),
  operator: MintAddressOperatorEnum,
  /** List of mint addresses (Base58). */
  addresses: z.array(base58Address),
})
/** A criterion that checks the SPL token mint address for exact match or list membership. */
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
/** A criterion that validates Solana instruction data against an Anchor IDL, instruction name, and argument constraints. */
export type SolDataCriterion = z.infer<typeof SolDataCriterionSchema>

/** Program ID criterion — checks involved program IDs. */
export const ProgramIdCriterionSchema = z.object({
  type: z.literal('programId'),
  operator: ProgramIdOperatorEnum,
  /** List of program IDs (Base58). */
  programIds: z.array(base58Address),
})
/** A criterion that checks whether a transaction involves program IDs in (or not in) a list. */
export type ProgramIdCriterion = z.infer<typeof ProgramIdCriterionSchema>

/** Solana network criterion — restricts to specific Solana networks. */
export const SolNetworkCriterionSchema = z.object({
  type: z.literal('solNetwork'),
  operator: SolNetworkOperatorEnum,
  /** List of networks: "mainnet-beta", "devnet", "testnet". */
  networks: z.array(SolNetworkEnum),
})
/** A criterion that restricts a rule to specific Solana networks. */
export type SolNetworkCriterion = z.infer<typeof SolNetworkCriterionSchema>

/** Solana message criterion — matches a sign-message payload against a regex. */
export const SolMessageCriterionSchema = z.object({
  type: z.literal('solMessage'),
  operator: z.literal('match'),
  /** RE2 regex pattern. */
  pattern: z.string().min(1),
})
/** A criterion that matches a Solana sign-message payload against a regex pattern. */
export type SolMessageCriterion = z.infer<typeof SolMessageCriterionSchema>

// ---------------------------------------------------------------------------
// Per-operation criteria arrays
// ---------------------------------------------------------------------------

/** Criteria schema for `signSolTransaction` rules — supports address, value, SPL, mint, data, and program ID criteria. */
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

/** Criteria schema for `sendSolTransaction` rules — extends sign criteria with network criterion. */
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

/** Criteria schema for `signSolMessage` rules — supports message pattern matching. */
export const SignSolMessageCriteriaSchema = z
  .array(SolMessageCriterionSchema)
  .max(10)

// ---------------------------------------------------------------------------
// Rule schemas (discriminated by `operation`)
// ---------------------------------------------------------------------------

/** Zod schema for a rule that governs Solana transaction signing. */
export const SignSolTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signSolTransaction'),
  criteria: SignSolTransactionCriteriaSchema,
})
/** A policy rule for the `signSolTransaction` operation. */
export type SignSolTransactionRule = z.infer<
  typeof SignSolTransactionRuleSchema
>

/** Zod schema for a rule that governs Solana transaction sending (includes network criteria). */
export const SendSolTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sendSolTransaction'),
  criteria: SendSolTransactionCriteriaSchema,
})
/** A policy rule for the `sendSolTransaction` operation. */
export type SendSolTransactionRule = z.infer<
  typeof SendSolTransactionRuleSchema
>

/** Zod schema for a rule that governs Solana message signing. */
export const SignSolMessageRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signSolMessage'),
  criteria: SignSolMessageCriteriaSchema,
})
/** A policy rule for the `signSolMessage` operation. */
export type SignSolMessageRule = z.infer<typeof SignSolMessageRuleSchema>

/** Sponsor Solana transaction uses the same criteria as send (address, value, SPL, mint, data, program, network). */
export const SponsorSolTransactionCriteriaSchema = z
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

/** Zod schema for a rule that governs Solana transaction fee sponsorship. */
export const SponsorSolTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sponsorSolTransaction'),
  criteria: SponsorSolTransactionCriteriaSchema,
})
/** A policy rule for the `sponsorSolTransaction` operation. */
export type SponsorSolTransactionRule = z.infer<
  typeof SponsorSolTransactionRuleSchema
>
