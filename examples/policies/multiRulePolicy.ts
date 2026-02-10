// Usage: npx tsx policies/multiRulePolicy.ts
//
// Creates a comprehensive policy with multiple rules covering different
// operations (EVM + Solana) in a single policy.

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const body: CreatePolicyBody = {
  scope: "project",
  description: "Comprehensive cross-chain policy",
  priority: 100,
  rules: [
    // Rule 1: Accept EVM transactions under 1 ETH to known addresses
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: "<=",
          ethValue: "1000000000000000000",
        },
        {
          type: "evmAddress",
          operator: "in",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
        },
      ],
    },

    // Rule 2: Accept EVM sends on specific networks
    {
      action: "accept",
      operation: "sendEvmTransaction",
      criteria: [
        {
          type: "evmNetwork",
          operator: "in",
          chainIds: [1, 137, 8453], // Ethereum, Polygon, Base
        },
        {
          type: "ethValue",
          operator: "<=",
          ethValue: "500000000000000000",
        },
      ],
    },

    // Rule 3: Accept EVM message signing matching login pattern
    {
      action: "accept",
      operation: "signEvmMessage",
      criteria: [
        {
          type: "evmMessage",
          operator: "match",
          pattern: "^Sign in to",
        },
      ],
    },

    // Rule 4: Reject all raw hash signing
    {
      action: "reject",
      operation: "signEvmHash",
    },

    // Rule 5: Accept SOL transfers under 5 SOL to known addresses
    {
      action: "accept",
      operation: "signSolTransaction",
      criteria: [
        {
          type: "solValue",
          operator: "<=",
          value: "5000000000", // 5 SOL
        },
        {
          type: "solAddress",
          operator: "in",
          addresses: ["DtdSSG8ZJRZVv5Jx7K1MeWp7Zxcu19GD5wQRGRpQ9uMF"],
        },
      ],
    },

    // Rule 6: Accept Solana sends on mainnet only
    {
      action: "accept",
      operation: "sendSolTransaction",
      criteria: [
        {
          type: "solNetwork",
          operator: "in",
          networks: ["mainnet-beta"],
        },
      ],
    },

    // Rule 7: Accept SOL message signing with known prefix
    {
      action: "accept",
      operation: "signSolMessage",
      criteria: [
        {
          type: "solMessage",
          operator: "match",
          pattern: "^Verify ownership:",
        },
      ],
    },
  ],
};

// Validate locally before sending
CreatePolicyBodySchema.parse(body);

const policy = await openfort.policies.create(body);

console.log("Created multi-rule policy:");
console.log("  ID:", policy.id);
console.log("  Priority:", policy.priority);
console.log("  Rules:", policy.rules.length);
for (const rule of policy.rules) {
  console.log(`    - ${rule.action} ${rule.operation}`);
}
