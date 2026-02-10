// Usage: npx tsx policies/createEvmPolicy.ts
//
// Creates policies that control EVM signing operations.
// Demonstrates: ethValue limits, address allowlists, network restrictions,
// and combined criteria.

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// ---------------------------------------------------------------------------
// 1. Reject high-value EVM transactions (> 1 ETH)
// ---------------------------------------------------------------------------

const highValueBody: CreatePolicyBody = {
  scope: "project",
  description: "Reject transactions above 1 ETH",
  rules: [
    {
      action: "reject",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: ">",
          ethValue: "1000000000000000000", // 1 ETH in wei
        },
      ],
    },
  ],
};

// Validate with Zod before sending
CreatePolicyBodySchema.parse(highValueBody);

const highValuePolicy = await openfort.policies.create(highValueBody);
console.log("Created high-value rejection policy:");
console.log("  ID:", highValuePolicy.id);
console.log("  Scope:", highValuePolicy.scope);
console.log("  Rules:", highValuePolicy.rules.length);

// ---------------------------------------------------------------------------
// 2. Address allowlist — only allow transactions to known addresses
// ---------------------------------------------------------------------------

const allowlistBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow transfers to treasury and vault",
  rules: [
    {
      action: "accept",
      operation: "sendEvmTransaction",
      criteria: [
        {
          type: "evmAddress",
          operator: "in",
          addresses: [
            "0x000000000000000000000000000000000000dEaD",
            "0x1234567890abcdef1234567890abcdef12345678",
          ],
        },
        {
          type: "evmNetwork",
          operator: "in",
          chainIds: [1, 137, 8453], // Ethereum, Polygon, Base
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(allowlistBody);

const allowlistPolicy = await openfort.policies.create(allowlistBody);
console.log("\nCreated address allowlist policy:");
console.log("  ID:", allowlistPolicy.id);

// ---------------------------------------------------------------------------
// 3. Restrict EVM contract calls by ABI function
// ---------------------------------------------------------------------------

const dataBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow ERC-20 transfer calls",
  rules: [
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "evmData",
          operator: "==",
          abi: '[{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"type":"bool"}]}]',
          functionName: "transfer",
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(dataBody);

const dataPolicy = await openfort.policies.create(dataBody);
console.log("\nCreated ERC-20 transfer-only policy:");
console.log("  ID:", dataPolicy.id);

// ---------------------------------------------------------------------------
// 4. Combined: value cap + address allowlist + network restriction
// ---------------------------------------------------------------------------

const combinedBody: CreatePolicyBody = {
  scope: "project",
  description: "Accept low-value sends to known addresses on mainnet only",
  rules: [
    {
      action: "accept",
      operation: "sendEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: "<=",
          ethValue: "500000000000000000", // 0.5 ETH
        },
        {
          type: "evmAddress",
          operator: "in",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
        },
        {
          type: "evmNetwork",
          operator: "in",
          chainIds: [1], // Ethereum mainnet only
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(combinedBody);

const combinedPolicy = await openfort.policies.create(combinedBody);
console.log("\nCreated combined EVM policy:");
console.log("  ID:", combinedPolicy.id);
