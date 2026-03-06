// Usage: pnpm tsx evm/policies/getPolicyById.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "account",
  description: "Account Policy",
  rules: [
    {
      action: "accept",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          ethValue: "1000000000000000000",
          operator: "<=",
        },
        {
          type: "evmAddress",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
          operator: "in",
        },
      ],
    },
  ],
});

const retrievedPolicy = await openfort.policies.get(policy.id);
console.log("Retrieved policy: ", JSON.stringify(retrievedPolicy, null, 2));
