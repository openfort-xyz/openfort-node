// Usage: npx tsx policies/createTypedDataPolicy.ts
//
// Creates policies for EVM typed-data signing (EIP-712) and message signing
// operations.

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// ---------------------------------------------------------------------------
// 1. Restrict typed-data signing to specific verifying contracts
// ---------------------------------------------------------------------------

const verifyingContractBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow signing typed data from known contracts",
  rules: [
    {
      action: "accept",
      operation: "signEvmTypedData",
      criteria: [
        {
          type: "evmTypedDataVerifyingContract",
          operator: "in",
          addresses: [
            "0x000000000000000000000000000000000000dEaD",
            "0x1234567890abcdef1234567890abcdef12345678",
          ],
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(verifyingContractBody);

const verifyingPolicy = await openfort.policies.create(
  verifyingContractBody,
);
console.log("Created verifying-contract typed-data policy:");
console.log("  ID:", verifyingPolicy.id);

// ---------------------------------------------------------------------------
// 2. Restrict typed-data field values (e.g. limit order amount)
// ---------------------------------------------------------------------------

const fieldBody: CreatePolicyBody = {
  scope: "project",
  description: "Restrict Order.amount to known values",
  rules: [
    {
      action: "accept",
      operation: "signEvmTypedData",
      criteria: [
        {
          type: "evmTypedDataField",
          operator: "in",
          fieldPath: "Order.amount",
          values: ["100", "200", "500"],
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(fieldBody);

const fieldPolicy = await openfort.policies.create(fieldBody);
console.log("\nCreated typed-data field restriction policy:");
console.log("  ID:", fieldPolicy.id);

// ---------------------------------------------------------------------------
// 3. Combined: verifying contract + field constraint
// ---------------------------------------------------------------------------

const combinedBody: CreatePolicyBody = {
  scope: "project",
  description: "Accept orders from known contract with capped amount",
  rules: [
    {
      action: "accept",
      operation: "signEvmTypedData",
      criteria: [
        {
          type: "evmTypedDataVerifyingContract",
          operator: "in",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
        },
        {
          type: "evmTypedDataField",
          operator: "<=",
          fieldPath: "Order.amount",
          value: "1000",
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(combinedBody);

const combinedPolicy = await openfort.policies.create(combinedBody);
console.log("\nCreated combined typed-data policy:");
console.log("  ID:", combinedPolicy.id);

// ---------------------------------------------------------------------------
// 4. EVM message signing — restrict to known pattern
// ---------------------------------------------------------------------------

const messageBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow signing messages that match the login format",
  rules: [
    {
      action: "accept",
      operation: "signEvmMessage",
      criteria: [
        {
          type: "evmMessage",
          operator: "match",
          pattern: "^Sign in to MyApp: nonce=",
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(messageBody);

const messagePolicy = await openfort.policies.create(messageBody);
console.log("\nCreated EVM message signing policy:");
console.log("  ID:", messagePolicy.id);

// ---------------------------------------------------------------------------
// 5. Reject all raw hash signing (no criteria = blanket rule)
// ---------------------------------------------------------------------------

const hashBody: CreatePolicyBody = {
  scope: "project",
  description: "Reject all raw hash signing operations",
  rules: [
    {
      action: "reject",
      operation: "signEvmHash",
    },
  ],
};

CreatePolicyBodySchema.parse(hashBody);

const hashPolicy = await openfort.policies.create(hashBody);
console.log("\nCreated hash signing rejection policy:");
console.log("  ID:", hashPolicy.id);
