// Usage: pnpm tsx evm/policies/deletePolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "account",
  description: "Temporary Policy",
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

await openfort.policies.delete(policy.id);
console.log("Deleted policy: ", policy.id);
