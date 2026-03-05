// Usage: pnpm tsx solana/policies/createSplTokenLimitsPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy that allows sending up to 1 USDC on Solana devnet
const policy = await openfort.policies.create({
  scope: "account",
  description: "SPL Token Limits Policy",
  rules: [
    {
      action: "accept",
      operation: "sendSolTransaction",
      criteria: [
        {
          type: "splValue",
          value: "1000000",
          operator: "<=",
        },
        {
          type: "mintAddress",
          addresses: ["4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"],
          operator: "in",
        },
      ],
    },
  ],
});
console.log("Created spl token limits policy: ", policy.id);
