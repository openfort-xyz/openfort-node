// Usage: pnpm tsx solana/policies/createSolMessagePolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy that only allows signing messages starting with "Openfort:"
const policy = await openfort.policies.create({
  scope: "account",
  description: "Allow messages with Openfort prefix only",
  rules: [
    {
      action: "accept",
      operation: "signSolMessage",
      criteria: [
        {
          type: "solMessage",
          operator: "match",
          pattern: "^Openfort:.*",
        },
      ],
    },
  ],
});

console.log("Created sol message policy: ", policy.id);
