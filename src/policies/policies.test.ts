import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import {
  CreatePolicyBodySchema,
  RuleSchema,
  UpdatePolicyBodySchema,
} from './types'

// ---------------------------------------------------------------------------
// CreatePolicyBodySchema
// ---------------------------------------------------------------------------

describe('CreatePolicyBodySchema', () => {
  // =========================================================================
  // EVM — signEvmTransaction
  // =========================================================================

  describe('signEvmTransaction', () => {
    it('should accept a valid ethValue criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '>',
                ethValue: '1000000000000000000',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a valid evmAddress criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmAddress',
                operator: 'not in',
                addresses: ['0x000000000000000000000000000000000000dEaD'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a valid evmData criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: 'in',
                abi: '[{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}]}]',
                functionName: 'transfer',
                args: { value: '1000' },
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept multiple criteria (AND logic)', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        accountId: 'acc_123',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '>',
                ethValue: '500000000000000000',
              },
              {
                type: 'evmAddress',
                operator: 'in',
                addresses: ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject invalid ethValue format (non-numeric)', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '>',
                ethValue: 'not-a-number',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject invalid EVM address format', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmAddress',
                operator: 'in',
                addresses: ['not-an-address'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should accept evmData criterion without optional args', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: 'in',
                abi: '[{"type":"function","name":"balanceOf","inputs":[{"name":"owner","type":"address"}]}]',
                functionName: 'balanceOf',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept evmData criterion with multiple operators', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: '<=',
                abi: '[]',
                functionName: 'transfer',
                args: { value: '10000' },
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept evmData criterion with "match" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: 'match',
                abi: '[]',
                functionName: 'setName',
                args: { name: '^safe-.*' },
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject evmData criterion with empty abi', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: 'in',
                abi: '',
                functionName: 'transfer',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject evmData criterion with empty functionName', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmData',
                operator: 'in',
                abi: '[]',
                functionName: '',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject evmAddress criterion with invalid operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'evmAddress',
                operator: '>',
                addresses: ['0x000000000000000000000000000000000000dEaD'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject Solana criteria on signEvmTransaction', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'solAddress',
                operator: 'in',
                addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // EVM — sendEvmTransaction
  // =========================================================================

  describe('sendEvmTransaction', () => {
    it('should accept evmNetwork criterion with chain IDs', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendEvmTransaction',
            criteria: [
              {
                type: 'evmNetwork',
                operator: 'in',
                chainIds: [1, 137, 42161],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept all four supported criteria types', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'sendEvmTransaction',
            criteria: [
              { type: 'ethValue', operator: '<=', ethValue: '100000000' },
              {
                type: 'evmAddress',
                operator: 'in',
                addresses: ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e'],
              },
              { type: 'evmNetwork', operator: 'not in', chainIds: [5] },
              {
                type: 'evmData',
                operator: '==',
                abi: '[]',
                functionName: 'approve',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject evmNetwork with non-integer chain IDs', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendEvmTransaction',
            criteria: [
              {
                type: 'evmNetwork',
                operator: 'in',
                chainIds: [1.5],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject evmNetwork with negative chain IDs', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendEvmTransaction',
            criteria: [
              {
                type: 'evmNetwork',
                operator: 'in',
                chainIds: [-1],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject evmNetwork with string chain IDs (not numbers)', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendEvmTransaction',
            criteria: [
              {
                type: 'evmNetwork',
                operator: 'in',
                chainIds: ['ethereum'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // EVM — signEvmMessage
  // =========================================================================

  describe('signEvmMessage', () => {
    it('should accept a valid evmMessage criterion with regex pattern', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmMessage',
            criteria: [
              {
                type: 'evmMessage',
                operator: 'match',
                pattern: '^Sign in to Example\\.com',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject evmMessage criterion with empty pattern', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmMessage',
            criteria: [
              {
                type: 'evmMessage',
                operator: 'match',
                pattern: '',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject evmMessage criterion with wrong operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmMessage',
            criteria: [
              {
                type: 'evmMessage',
                operator: 'in',
                pattern: '.*',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject ethValue criterion on signEvmMessage', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmMessage',
            criteria: [{ type: 'ethValue', operator: '>', ethValue: '100' }],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // EVM — signEvmTypedData
  // =========================================================================

  describe('signEvmTypedData', () => {
    it('should accept evmTypedDataVerifyingContract criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataVerifyingContract',
                operator: 'in',
                addresses: ['0x1234567890123456789012345678901234567890'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept evmTypedDataField criterion with "in" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataField',
                operator: 'in',
                fieldPath: 'order.buyer',
                values: ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept evmTypedDataField criterion with "<=" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataField',
                operator: '<=',
                fieldPath: 'order.price',
                value: '1000000',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept evmTypedDataField criterion with "match" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataField',
                operator: 'match',
                fieldPath: 'metadata.description',
                value: '^safe-.*',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept combined verifyingContract and field criteria', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataVerifyingContract',
                operator: 'in',
                addresses: ['0x1234567890123456789012345678901234567890'],
              },
              {
                type: 'evmTypedDataField',
                operator: '<=',
                fieldPath: 'order.amount',
                value: '100000',
              },
              {
                type: 'evmTypedDataField',
                operator: 'in',
                fieldPath: 'order.token',
                values: ['USDC', 'USDT'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject evmTypedDataField with empty fieldPath', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataField',
                operator: 'in',
                fieldPath: '',
                values: ['x'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject ethValue criterion on signEvmTypedData', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTypedData',
            criteria: [{ type: 'ethValue', operator: '>', ethValue: '100' }],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // EVM — signEvmHash
  // =========================================================================

  describe('signEvmHash', () => {
    it('should accept a rule with no criteria', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmHash',
          },
        ],
      })
      expect(result.success).toBe(true)
    })
  })

  // =========================================================================
  // Solana — signSolTransaction
  // =========================================================================

  describe('signSolTransaction', () => {
    it('should accept a valid solAddress criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solAddress',
                operator: 'in',
                addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a valid solValue criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solValue',
                operator: '>=',
                value: '1000000000',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept splAddress, splValue, and mintAddress criteria', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        accountId: 'acc_789',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'splAddress',
                operator: 'in',
                addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
              },
              {
                type: 'splValue',
                operator: '>=',
                value: '1000000',
              },
              {
                type: 'mintAddress',
                operator: 'in',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a valid solData criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solData',
                operator: 'in',
                idl: '{"address":"11111111111111111111111111111111","instructions":[]}',
                instructionName: 'transfer',
                args: { lamports: '1000000' },
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a valid programId criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'programId',
                operator: 'in',
                programIds: [
                  '11111111111111111111111111111112',
                  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                ],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept multiple criteria (AND logic)', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        accountId: 'acc_complex',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solAddress',
                operator: 'in',
                addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
              },
              {
                type: 'solValue',
                operator: '>=',
                value: '500000000',
              },
              {
                type: 'mintAddress',
                operator: 'in',
                addresses: ['So11111111111111111111111111111111111111112'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept solData criterion without optional args', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solData',
                operator: '==',
                idl: '{"address":"11111111111111111111111111111111","instructions":[{"name":"transfer"}]}',
                instructionName: 'transfer',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept solData criterion with "match" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solData',
                operator: 'match',
                idl: '{}',
                instructionName: 'initialize',
                args: { name: '^safe-.*' },
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject solData criterion with empty idl', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solData',
                operator: 'in',
                idl: '',
                instructionName: 'transfer',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject solData criterion with empty instructionName', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solData',
                operator: 'in',
                idl: '{}',
                instructionName: '',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should accept mintAddress criterion with "==" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'mintAddress',
                operator: '==',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject mintAddress criterion with unsupported operator "not in"', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'mintAddress',
                operator: 'not in',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject non-numeric splValue', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'splValue',
                operator: '>=',
                value: 'abc',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject non-numeric solValue', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'solValue',
                operator: '>=',
                value: 'not-a-number',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject EVM-format addresses in Solana criteria', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'splAddress',
                operator: 'in',
                addresses: ['0x1234567890123456789012345678901234567890'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject EVM criteria on signSolTransaction', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '>',
                ethValue: '1000000000000000000',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject EVM-format addresses in programId criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              {
                type: 'programId',
                operator: 'in',
                programIds: ['0x1234567890123456789012345678901234567890'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // Solana — sendSolTransaction
  // =========================================================================

  describe('sendSolTransaction', () => {
    it('should accept a valid solNetwork criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['devnet'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept all eight supported criteria types', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        accountId: 'acc_sol_full',
        rules: [
          {
            action: 'reject',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solAddress',
                operator: 'in',
                addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
              },
              { type: 'solValue', operator: '<=', value: '1000000000' },
              {
                type: 'splAddress',
                operator: 'not in',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
              { type: 'splValue', operator: '<=', value: '50000' },
              {
                type: 'mintAddress',
                operator: '==',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
              {
                type: 'solData',
                operator: 'in',
                idl: '{}',
                instructionName: 'transfer',
              },
              {
                type: 'programId',
                operator: 'in',
                programIds: ['11111111111111111111111111111112'],
              },
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['mainnet-beta'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept multiple network values', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['mainnet-beta', 'devnet', 'testnet'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject invalid network name', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['invalid-network'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should accept programId with "not in" operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'reject',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'programId',
                operator: 'not in',
                programIds: ['TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'],
              },
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['mainnet-beta'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })
  })

  // =========================================================================
  // Solana — signSolMessage
  // =========================================================================

  describe('signSolMessage', () => {
    it('should accept a valid solMessage criterion', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolMessage',
            criteria: [
              {
                type: 'solMessage',
                operator: 'match',
                pattern: '^hello ([a-z]+)$',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should reject solMessage criterion with empty pattern', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolMessage',
            criteria: [
              {
                type: 'solMessage',
                operator: 'match',
                pattern: '',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject solMessage criterion with wrong operator', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolMessage',
            criteria: [
              {
                type: 'solMessage',
                operator: 'in',
                pattern: '.*',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject wrong criterion type for signSolMessage', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signSolMessage',
            criteria: [
              {
                type: 'solValue',
                operator: '>=',
                value: '1000000000',
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(false)
    })
  })

  // =========================================================================
  // Mixed rules
  // =========================================================================

  describe('mixed EVM + Solana rules', () => {
    it('should accept a policy with both EVM and Solana rules', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '<=',
                ethValue: '1000000000000000000',
              },
            ],
          },
          {
            action: 'reject',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solNetwork',
                operator: 'not in',
                networks: ['mainnet-beta'],
              },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a policy covering all EVM operations', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        description: 'Comprehensive EVM policy',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmTransaction',
            criteria: [
              {
                type: 'ethValue',
                operator: '>',
                ethValue: '5000000000000000000',
              },
            ],
          },
          {
            action: 'accept',
            operation: 'sendEvmTransaction',
            criteria: [
              { type: 'evmNetwork', operator: 'in', chainIds: [1, 137] },
              {
                type: 'ethValue',
                operator: '<=',
                ethValue: '1000000000000000000',
              },
            ],
          },
          {
            action: 'accept',
            operation: 'signEvmMessage',
            criteria: [
              { type: 'evmMessage', operator: 'match', pattern: '^Sign in to' },
            ],
          },
          {
            action: 'accept',
            operation: 'signEvmTypedData',
            criteria: [
              {
                type: 'evmTypedDataVerifyingContract',
                operator: 'in',
                addresses: ['0x1234567890123456789012345678901234567890'],
              },
            ],
          },
          {
            action: 'reject',
            operation: 'signEvmHash',
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should accept a policy covering all Solana operations', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        accountId: 'acc_sol_comprehensive',
        rules: [
          {
            action: 'reject',
            operation: 'signSolTransaction',
            criteria: [
              { type: 'solValue', operator: '>=', value: '10000000000' },
              {
                type: 'programId',
                operator: 'not in',
                programIds: ['11111111111111111111111111111112'],
              },
            ],
          },
          {
            action: 'accept',
            operation: 'sendSolTransaction',
            criteria: [
              {
                type: 'solNetwork',
                operator: 'in',
                networks: ['mainnet-beta'],
              },
              {
                type: 'mintAddress',
                operator: 'in',
                addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
              },
            ],
          },
          {
            action: 'accept',
            operation: 'signSolMessage',
            criteria: [
              { type: 'solMessage', operator: 'match', pattern: '^Approve:' },
            ],
          },
        ],
      })
      expect(result.success).toBe(true)
    })
  })

  // =========================================================================
  // Body-level validation
  // =========================================================================

  describe('body-level validation', () => {
    it('should reject missing scope', () => {
      const result = CreatePolicyBodySchema.safeParse({
        rules: [
          {
            action: 'reject',
            operation: 'signEvmHash',
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject empty rules array', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [],
      })
      expect(result.success).toBe(false)
    })

    it('should reject more than 10 rules', () => {
      const rules = Array.from({ length: 11 }, () => ({
        action: 'reject' as const,
        operation: 'signEvmHash' as const,
      }))
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules,
      })
      expect(result.success).toBe(false)
    })

    it('should reject invalid operation', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'project',
        rules: [
          {
            action: 'accept',
            operation: 'invalidOperation',
            criteria: [],
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should reject invalid scope', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'invalid',
        rules: [
          {
            action: 'reject',
            operation: 'signEvmHash',
          },
        ],
      })
      expect(result.success).toBe(false)
    })

    it('should accept optional fields', () => {
      const result = CreatePolicyBodySchema.safeParse({
        scope: 'account',
        description: 'My wallet policy',
        accountId: 'acc_test',
        enabled: true,
        priority: 10,
        rules: [
          {
            action: 'reject',
            operation: 'signEvmHash',
          },
        ],
      })
      expect(result.success).toBe(true)
    })

    it('should throw ZodError on .parse() for invalid input', () => {
      expect(() =>
        CreatePolicyBodySchema.parse({
          scope: 'project',
          rules: [
            {
              action: 'reject',
              operation: 'signEvmTransaction',
              criteria: [{ type: 'INVALID', operator: '>', ethValue: '100' }],
            },
          ],
        }),
      ).toThrow(ZodError)
    })
  })
})

// ---------------------------------------------------------------------------
// UpdatePolicyBodySchema
// ---------------------------------------------------------------------------

describe('UpdatePolicyBodySchema', () => {
  it('should accept a valid update with rules', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      description: 'Updated policy',
      rules: [
        {
          action: 'accept',
          operation: 'signEvmTransaction',
          criteria: [
            {
              type: 'ethValue',
              operator: '>',
              ethValue: '1000000000000000000',
            },
          ],
        },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('should accept an update with only description', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      description: 'New description',
    })
    expect(result.success).toBe(true)
  })

  it('should accept an update with only enabled', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      enabled: false,
    })
    expect(result.success).toBe(true)
  })

  it('should accept an update with only priority', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      priority: 5,
    })
    expect(result.success).toBe(true)
  })

  it('should reject invalid operation in update rules', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      rules: [
        {
          action: 'accept',
          operation: 'invalidOperation',
          criteria: [],
        },
      ],
    })
    expect(result.success).toBe(false)
  })

  it('should reject wrong criteria for operation in update', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      rules: [
        {
          action: 'reject',
          operation: 'signEvmTransaction',
          criteria: [
            {
              type: 'solAddress',
              operator: 'in',
              addresses: ['9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'],
            },
          ],
        },
      ],
    })
    expect(result.success).toBe(false)
  })

  it('should accept Solana rules in update', () => {
    const result = UpdatePolicyBodySchema.safeParse({
      description: 'Updated Solana policy',
      rules: [
        {
          action: 'reject',
          operation: 'sendSolTransaction',
          criteria: [
            {
              type: 'splValue',
              operator: '>=',
              value: '5000000',
            },
            {
              type: 'mintAddress',
              operator: 'in',
              addresses: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
            },
          ],
        },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('should reject more than 10 rules in update', () => {
    const rules = Array.from({ length: 11 }, () => ({
      action: 'reject' as const,
      operation: 'signEvmHash' as const,
    }))
    const result = UpdatePolicyBodySchema.safeParse({ rules })
    expect(result.success).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// RuleSchema directly
// ---------------------------------------------------------------------------

describe('RuleSchema', () => {
  it('should parse a valid EVM rule', () => {
    const result = RuleSchema.safeParse({
      action: 'reject',
      operation: 'signEvmTransaction',
      criteria: [{ type: 'ethValue', operator: '>', ethValue: '100' }],
    })
    expect(result.success).toBe(true)
  })

  it('should parse a valid Solana rule', () => {
    const result = RuleSchema.safeParse({
      action: 'accept',
      operation: 'signSolMessage',
      criteria: [{ type: 'solMessage', operator: 'match', pattern: '.*' }],
    })
    expect(result.success).toBe(true)
  })

  it('should reject an unknown operation', () => {
    const result = RuleSchema.safeParse({
      action: 'accept',
      operation: 'sendBitcoinTransaction',
      criteria: [],
    })
    expect(result.success).toBe(false)
  })
})
