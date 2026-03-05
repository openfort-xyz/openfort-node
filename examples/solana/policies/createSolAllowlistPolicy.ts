// Usage: pnpm tsx solana/policies/createSolAllowlistPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "account",
  description: "SOL Allowlist Policy",
  rules: [
    {
      action: "accept",
      operation: "signSolTransaction",
      criteria: [
        {
          type: "solAddress",
          addresses: ["DtdSSG8ZJRZVv5Jx7K1MeWp7Zxcu19GD5wQRGRpQ9uMF"],
          operator: "in",
        },
      ],
    },
  ],
});
console.log("Created sol allowlist policy: ", policy.id);
