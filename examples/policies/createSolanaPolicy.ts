// Usage: npx tsx policies/createSolanaPolicy.ts
//
// Creates policies that control Solana signing operations.
// Demonstrates: SOL value limits, address allowlists, SPL token criteria,
// program ID restrictions, and Solana network constraints.

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// ---------------------------------------------------------------------------
// 1. Reject high-value SOL transfers (> 10 SOL)
// ---------------------------------------------------------------------------

const solValueBody: CreatePolicyBody = {
  scope: "project",
  description: "Reject SOL transfers above 10 SOL",
  rules: [
    {
      action: "reject",
      operation: "signSolTransaction",
      criteria: [
        {
          type: "solValue",
          operator: ">=",
          value: "10000000000", // 10 SOL in lamports
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(solValueBody);

const solValuePolicy = await openfort.policies.create(solValueBody);
console.log("Created SOL value limit policy:");
console.log("  ID:", solValuePolicy.id);

// ---------------------------------------------------------------------------
// 2. SOL address allowlist
// ---------------------------------------------------------------------------

const addressBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow transfers to known Solana addresses",
  rules: [
    {
      action: "accept",
      operation: "sendSolTransaction",
      criteria: [
        {
          type: "solAddress",
          operator: "in",
          addresses: [
            "DtdSSG8ZJRZVv5Jx7K1MeWp7Zxcu19GD5wQRGRpQ9uMF",
            "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d",
          ],
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(addressBody);

const addressPolicy = await openfort.policies.create(addressBody);
console.log("\nCreated SOL address allowlist policy:");
console.log("  ID:", addressPolicy.id);

// ---------------------------------------------------------------------------
// 3. SPL token transfer restrictions (e.g. USDC mint)
// ---------------------------------------------------------------------------

const splBody: CreatePolicyBody = {
  scope: "project",
  description: "Restrict SPL transfers to specific USDC mint and recipients",
  rules: [
    {
      action: "accept",
      operation: "signSolTransaction",
      criteria: [
        {
          type: "mintAddress",
          operator: "==",
          addresses: ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"], // USDC
        },
        {
          type: "splAddress",
          operator: "in",
          addresses: ["DtdSSG8ZJRZVv5Jx7K1MeWp7Zxcu19GD5wQRGRpQ9uMF"],
        },
        {
          type: "splValue",
          operator: "<=",
          value: "1000000000", // 1000 USDC (6 decimals)
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(splBody);

const splPolicy = await openfort.policies.create(splBody);
console.log("\nCreated SPL token policy:");
console.log("  ID:", splPolicy.id);

// ---------------------------------------------------------------------------
// 4. Program ID restriction with network constraint
// ---------------------------------------------------------------------------

const programBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow interactions with specific programs on mainnet",
  rules: [
    {
      action: "accept",
      operation: "sendSolTransaction",
      criteria: [
        {
          type: "programId",
          operator: "in",
          programIds: [
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", // Token Program
            "11111111111111111111111111111111", // System Program
          ],
        },
        {
          type: "solNetwork",
          operator: "in",
          networks: ["mainnet-beta"],
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(programBody);

const programPolicy = await openfort.policies.create(programBody);
console.log("\nCreated program ID + network policy:");
console.log("  ID:", programPolicy.id);

// ---------------------------------------------------------------------------
// 5. Sign Solana message — restrict to matching pattern
// ---------------------------------------------------------------------------

const messageBody: CreatePolicyBody = {
  scope: "project",
  description: "Only allow signing messages that match a known format",
  rules: [
    {
      action: "accept",
      operation: "signSolMessage",
      criteria: [
        {
          type: "solMessage",
          operator: "match",
          pattern: "^Sign in to MyApp:",
        },
      ],
    },
  ],
};

CreatePolicyBodySchema.parse(messageBody);

const messagePolicy = await openfort.policies.create(messageBody);
console.log("\nCreated Solana message policy:");
console.log("  ID:", messagePolicy.id);
