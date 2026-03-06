// Usage: pnpm tsx evm/policies/validation.ts

import { CreatePolicyBodySchema, UpdatePolicyBodySchema } from "@openfort/openfort-node";

const invalidPolicy = {
  description: 'Bad description with !#@ characters, also is wayyyyy toooooo long!!',
  rules: [
    {
      action: 'accept',
      operation: 'signEvmTransaction',
      criteria: [
        {
          type: 'ethValue',
          ethValue: 'not a number',
          operator: '<='
        },
        {
          type: 'evmAddress',
          addresses: ["not an address"],
          operator: 'in'
        },
        {
          type: 'evmAddress',
          addresses: ["not an address"],
          operator: 'invalid operator'
        }
      ]
    },
    {
      action: 'accept',
      operation: 'unknownOperation',
      criteria: []
    },
    {
      action: 'accept',
      operation: 'signEvmTransaction',
      criteria: []
    }
  ]
}

// Validate a new Policy with several issues, will throw a ZodError with actionable validation errors
CreatePolicyBodySchema.parse(invalidPolicy)
// OR
UpdatePolicyBodySchema.parse(invalidPolicy)
