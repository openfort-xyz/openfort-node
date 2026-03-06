import { z } from 'zod'

// ---------------------------------------------------------------------------
// Operator enums
// ---------------------------------------------------------------------------

/** Zod enum for ETH value comparison operators. */
export const EthValueOperatorEnum = z.enum(['<=', '>=', '<', '>'])
/** Comparison operator for ETH value criteria (e.g. '<=', '>='). */
export type EthValueOperator = z.infer<typeof EthValueOperatorEnum>

/** Zod enum for EVM address membership operators. */
export const EvmAddressOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for EVM address criteria ('in' or 'not in'). */
export type EvmAddressOperator = z.infer<typeof EvmAddressOperatorEnum>

/** Zod enum for EVM network (chain ID) membership operators. */
export const EvmNetworkOperatorEnum = z.enum(['in', 'not in'])
/** Membership operator for EVM network criteria ('in' or 'not in'). */
export type EvmNetworkOperator = z.infer<typeof EvmNetworkOperatorEnum>

/** Zod enum for EVM calldata operators (comparison, membership, and regex match). */
export const EvmDataOperatorEnum = z.enum([
  'in',
  'not in',
  '<',
  '<=',
  '>',
  '>=',
  '==',
  'match',
])
/** Operator for EVM calldata criteria (comparison, membership, or regex match). */
export type EvmDataOperator = z.infer<typeof EvmDataOperatorEnum>

/** Zod enum for EIP-712 verifying contract membership operators. */
export const EvmTypedDataVerifyingContractOperatorEnum = z.enum([
  'in',
  'not in',
])
/** Membership operator for EIP-712 verifying contract criteria ('in' or 'not in'). */
export type EvmTypedDataVerifyingContractOperator = z.infer<
  typeof EvmTypedDataVerifyingContractOperatorEnum
>

/** Zod enum for EIP-712 typed data field operators. */
export const EvmTypedDataFieldOperatorEnum = z.enum(['in', '<=', 'match'])
/** Operator for EIP-712 typed data field criteria (membership, comparison, or regex match). */
export type EvmTypedDataFieldOperator = z.infer<
  typeof EvmTypedDataFieldOperatorEnum
>

// ---------------------------------------------------------------------------
// Action enum (shared across EVM rules)
// ---------------------------------------------------------------------------

/** Zod enum for rule actions — 'reject' blocks the operation, 'accept' allows it. */
export const ActionEnum = z.enum(['reject', 'accept'])
/** The action to take when a rule matches: 'reject' or 'accept'. */
export type Action = z.infer<typeof ActionEnum>

// ---------------------------------------------------------------------------
// Criterion schemas
// ---------------------------------------------------------------------------

/** ETH value criterion — compares transaction value in wei. */
export const EthValueCriterionSchema = z.object({
  type: z.literal('ethValue'),
  operator: EthValueOperatorEnum,
  /** Value in wei as a string. */
  ethValue: z.string().regex(/^[0-9]+$/),
})
/** A criterion that compares a transaction's ETH value (in wei) using a comparison operator. */
export type EthValueCriterion = z.infer<typeof EthValueCriterionSchema>

/** EVM address criterion — checks transaction recipient against an address list. */
export const EvmAddressCriterionSchema = z.object({
  type: z.literal('evmAddress'),
  operator: EvmAddressOperatorEnum,
  /** List of EVM addresses (hex format with 0x prefix). */
  addresses: z.array(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
})
/** A criterion that checks whether a transaction's recipient is in (or not in) an address list. */
export type EvmAddressCriterion = z.infer<typeof EvmAddressCriterionSchema>

/** EVM network criterion — checks transaction chain ID against a list. */
export const EvmNetworkCriterionSchema = z.object({
  type: z.literal('evmNetwork'),
  operator: EvmNetworkOperatorEnum,
  /** List of chain IDs. */
  chainIds: z.array(z.number().int().positive()),
})
/** A criterion that checks whether a transaction's chain ID is in (or not in) a list of networks. */
export type EvmNetworkCriterion = z.infer<typeof EvmNetworkCriterionSchema>

/** EVM message criterion — matches a personal-sign message against a regex pattern. */
export const EvmMessageCriterionSchema = z.object({
  type: z.literal('evmMessage'),
  operator: z.literal('match'),
  /** RE2 regex pattern to match against the message. */
  pattern: z.string().min(1),
})
/** A criterion that matches a personal-sign (EIP-191) message against a regex pattern. */
export type EvmMessageCriterion = z.infer<typeof EvmMessageCriterionSchema>

/** EVM data criterion — validates transaction calldata against an ABI + function + args. */
export const EvmDataCriterionSchema = z.object({
  type: z.literal('evmData'),
  operator: EvmDataOperatorEnum,
  /** Contract ABI as JSON string. */
  abi: z.string().min(1),
  /** Function name to match. */
  functionName: z.string().min(1),
  /** Argument constraints. */
  args: z.record(z.unknown()).optional(),
})
/** A criterion that validates transaction calldata against a contract ABI, function name, and argument constraints. */
export type EvmDataCriterion = z.infer<typeof EvmDataCriterionSchema>

/** EVM typed-data verifying-contract criterion — checks the EIP-712 verifying contract address. */
export const EvmTypedDataVerifyingContractCriterionSchema = z.object({
  type: z.literal('evmTypedDataVerifyingContract'),
  operator: EvmTypedDataVerifyingContractOperatorEnum,
  /** List of verifying contract addresses. */
  addresses: z.array(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
})
/** A criterion that checks whether an EIP-712 verifying contract address is in (or not in) a list. */
export type EvmTypedDataVerifyingContractCriterion = z.infer<
  typeof EvmTypedDataVerifyingContractCriterionSchema
>

/** EVM typed-data field criterion — validates a specific field within EIP-712 typed data. */
export const EvmTypedDataFieldCriterionSchema = z.object({
  type: z.literal('evmTypedDataField'),
  operator: EvmTypedDataFieldOperatorEnum,
  /** Dot-notation path to the field (e.g. "order.buyer"). */
  fieldPath: z.string().min(1),
  /** Values for "in" operator. */
  values: z.array(z.string()).optional(),
  /** Value for "<=" or "match" operators. */
  value: z.string().optional(),
})
/** A criterion that validates a specific field within EIP-712 typed data by path. */
export type EvmTypedDataFieldCriterion = z.infer<
  typeof EvmTypedDataFieldCriterionSchema
>

// ---------------------------------------------------------------------------
// Per-operation criteria arrays
// ---------------------------------------------------------------------------

/** Criteria schema for `signEvmTransaction` rules — supports ETH value, address, and calldata criteria. */
export const SignEvmTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      EthValueCriterionSchema,
      EvmAddressCriterionSchema,
      EvmDataCriterionSchema,
    ]),
  )
  .max(10)

/** Criteria schema for `sendEvmTransaction` rules — supports ETH value, address, network, and calldata criteria. */
export const SendEvmTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      EthValueCriterionSchema,
      EvmAddressCriterionSchema,
      EvmNetworkCriterionSchema,
      EvmDataCriterionSchema,
    ]),
  )
  .max(10)

/** Criteria schema for `signEvmMessage` rules — supports message pattern matching. */
export const SignEvmMessageCriteriaSchema = z
  .array(z.discriminatedUnion('type', [EvmMessageCriterionSchema]))
  .max(10)

/** Criteria schema for `signEvmTypedData` rules — supports typed data field and verifying contract criteria. */
export const SignEvmTypedDataCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      EvmTypedDataFieldCriterionSchema,
      EvmTypedDataVerifyingContractCriterionSchema,
    ]),
  )
  .max(10)

// ---------------------------------------------------------------------------
// Rule schemas (discriminated by `operation`)
// ---------------------------------------------------------------------------

/** Zod schema for a rule that governs EVM transaction signing. */
export const SignEvmTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmTransaction'),
  criteria: SignEvmTransactionCriteriaSchema,
})
/** A policy rule for the `signEvmTransaction` operation. */
export type SignEvmTransactionRule = z.infer<
  typeof SignEvmTransactionRuleSchema
>

/** Zod schema for a rule that governs EVM transaction sending (includes network criteria). */
export const SendEvmTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sendEvmTransaction'),
  criteria: SendEvmTransactionCriteriaSchema,
})
/** A policy rule for the `sendEvmTransaction` operation. */
export type SendEvmTransactionRule = z.infer<
  typeof SendEvmTransactionRuleSchema
>

/** Zod schema for a rule that governs EVM message signing (EIP-191). */
export const SignEvmMessageRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmMessage'),
  criteria: SignEvmMessageCriteriaSchema,
})
/** A policy rule for the `signEvmMessage` operation. */
export type SignEvmMessageRule = z.infer<typeof SignEvmMessageRuleSchema>

/** Zod schema for a rule that governs EIP-712 typed data signing. */
export const SignEvmTypedDataRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmTypedData'),
  criteria: SignEvmTypedDataCriteriaSchema,
})
/** A policy rule for the `signEvmTypedData` operation. */
export type SignEvmTypedDataRule = z.infer<typeof SignEvmTypedDataRuleSchema>

/** Zod schema for a rule that governs raw EVM hash signing (no criteria). */
export const SignEvmHashRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmHash'),
})
/** A policy rule for the `signEvmHash` operation. */
export type SignEvmHashRule = z.infer<typeof SignEvmHashRuleSchema>

/** Sponsor EVM transaction uses the same criteria as send (address, value, network, data). */
export const SponsorEvmTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      EthValueCriterionSchema,
      EvmAddressCriterionSchema,
      EvmNetworkCriterionSchema,
      EvmDataCriterionSchema,
    ]),
  )
  .max(10)

/** Zod schema for a rule that governs EVM transaction gas sponsorship. */
export const SponsorEvmTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sponsorEvmTransaction'),
  criteria: SponsorEvmTransactionCriteriaSchema,
})
/** A policy rule for the `sponsorEvmTransaction` operation. */
export type SponsorEvmTransactionRule = z.infer<
  typeof SponsorEvmTransactionRuleSchema
>
