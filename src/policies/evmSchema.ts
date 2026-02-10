import { z } from 'zod'

// ---------------------------------------------------------------------------
// Operator enums
// ---------------------------------------------------------------------------

export const EthValueOperatorEnum = z.enum(['<=', '>=', '<', '>'])
export type EthValueOperator = z.infer<typeof EthValueOperatorEnum>

export const EvmAddressOperatorEnum = z.enum(['in', 'not in'])
export type EvmAddressOperator = z.infer<typeof EvmAddressOperatorEnum>

export const EvmNetworkOperatorEnum = z.enum(['in', 'not in'])
export type EvmNetworkOperator = z.infer<typeof EvmNetworkOperatorEnum>

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
export type EvmDataOperator = z.infer<typeof EvmDataOperatorEnum>

export const EvmTypedDataVerifyingContractOperatorEnum = z.enum([
  'in',
  'not in',
])
export type EvmTypedDataVerifyingContractOperator = z.infer<
  typeof EvmTypedDataVerifyingContractOperatorEnum
>

export const EvmTypedDataFieldOperatorEnum = z.enum(['in', '<=', 'match'])
export type EvmTypedDataFieldOperator = z.infer<
  typeof EvmTypedDataFieldOperatorEnum
>

// ---------------------------------------------------------------------------
// Action enum (shared across EVM rules)
// ---------------------------------------------------------------------------

export const ActionEnum = z.enum(['reject', 'accept'])
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
export type EthValueCriterion = z.infer<typeof EthValueCriterionSchema>

/** EVM address criterion — checks transaction recipient against an address list. */
export const EvmAddressCriterionSchema = z.object({
  type: z.literal('evmAddress'),
  operator: EvmAddressOperatorEnum,
  /** List of EVM addresses (hex format with 0x prefix). */
  addresses: z.array(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
})
export type EvmAddressCriterion = z.infer<typeof EvmAddressCriterionSchema>

/** EVM network criterion — checks transaction chain ID against a list. */
export const EvmNetworkCriterionSchema = z.object({
  type: z.literal('evmNetwork'),
  operator: EvmNetworkOperatorEnum,
  /** List of chain IDs. */
  chainIds: z.array(z.number().int().positive()),
})
export type EvmNetworkCriterion = z.infer<typeof EvmNetworkCriterionSchema>

/** EVM message criterion — matches a personal-sign message against a regex pattern. */
export const EvmMessageCriterionSchema = z.object({
  type: z.literal('evmMessage'),
  operator: z.literal('match'),
  /** RE2 regex pattern to match against the message. */
  pattern: z.string().min(1),
})
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
export type EvmDataCriterion = z.infer<typeof EvmDataCriterionSchema>

/** EVM typed-data verifying-contract criterion — checks the EIP-712 verifying contract address. */
export const EvmTypedDataVerifyingContractCriterionSchema = z.object({
  type: z.literal('evmTypedDataVerifyingContract'),
  operator: EvmTypedDataVerifyingContractOperatorEnum,
  /** List of verifying contract addresses. */
  addresses: z.array(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
})
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
export type EvmTypedDataFieldCriterion = z.infer<
  typeof EvmTypedDataFieldCriterionSchema
>

// ---------------------------------------------------------------------------
// Per-operation criteria arrays
// ---------------------------------------------------------------------------

export const SignEvmTransactionCriteriaSchema = z
  .array(
    z.discriminatedUnion('type', [
      EthValueCriterionSchema,
      EvmAddressCriterionSchema,
      EvmDataCriterionSchema,
    ]),
  )
  .max(10)

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

export const SignEvmMessageCriteriaSchema = z
  .array(z.discriminatedUnion('type', [EvmMessageCriterionSchema]))
  .max(10)

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

export const SignEvmTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmTransaction'),
  criteria: SignEvmTransactionCriteriaSchema,
})
export type SignEvmTransactionRule = z.infer<
  typeof SignEvmTransactionRuleSchema
>

export const SendEvmTransactionRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('sendEvmTransaction'),
  criteria: SendEvmTransactionCriteriaSchema,
})
export type SendEvmTransactionRule = z.infer<
  typeof SendEvmTransactionRuleSchema
>

export const SignEvmMessageRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmMessage'),
  criteria: SignEvmMessageCriteriaSchema,
})
export type SignEvmMessageRule = z.infer<typeof SignEvmMessageRuleSchema>

export const SignEvmTypedDataRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmTypedData'),
  criteria: SignEvmTypedDataCriteriaSchema,
})
export type SignEvmTypedDataRule = z.infer<typeof SignEvmTypedDataRuleSchema>

export const SignEvmHashRuleSchema = z.object({
  action: ActionEnum,
  operation: z.literal('signEvmHash'),
})
export type SignEvmHashRule = z.infer<typeof SignEvmHashRuleSchema>
