// Usage: pnpm tsx evm/policies/updatePolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "account",
  description: "Initial Allowlist Policy",
  rules: [
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "evmAddress",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
          operator: "in",
        },
      ],
    },
  ],
});

const updatedPolicy = await openfort.policies.update(policy.id, {
  description: "Updated Denylist Policy",
  rules: [
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "evmAddress",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
          operator: "not in",
        },
      ],
    },
  ],
});
console.log("Updated policy: ", JSON.stringify(updatedPolicy, null, 2));
