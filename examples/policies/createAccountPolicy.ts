// Usage: npx tsx policies/createAccountPolicy.ts
//
// Creates an account-scoped policy (as opposed to project-scoped).
// Account policies apply only to a specific wallet account.

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an EVM backend wallet to attach the policy to
const account = await openfort.accounts.evm.backend.create({
  name: `PolicyAccount-${Date.now()}`,
});
console.log("Created account:", account.id);

// ---------------------------------------------------------------------------
// Create an account-scoped policy
// ---------------------------------------------------------------------------

const body: CreatePolicyBody = {
  scope: "account",
  accountId: account.id,
  description: "Account-level allowlist for this specific wallet",
  enabled: true,
  priority: 10,
  rules: [
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "evmAddress",
          operator: "in",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
        },
        {
          type: "ethValue",
          operator: "<=",
          ethValue: "500000000000000000", // 0.5 ETH
        },
      ],
    },
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
  ],
};

CreatePolicyBodySchema.parse(body);

const policy = await openfort.policies.create(body);

console.log("\nCreated account-scoped policy:");
console.log("  ID:", policy.id);
console.log("  Scope:", policy.scope);
console.log("  Account:", policy.accountId);
console.log("  Priority:", policy.priority);
console.log("  Rules:", policy.rules.length);
