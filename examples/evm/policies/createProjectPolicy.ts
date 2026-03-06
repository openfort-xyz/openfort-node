// Usage: pnpm tsx evm/policies/createProjectPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "project",
  description: "Project Allowlist Example",
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
    {
      action: "accept",
      operation: "sendEvmTransaction",
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
        {
          type: "evmNetwork",
          chainIds: [8453],
          operator: "in",
        },
      ],
    },
  ],
});
console.log("Created project policy: ", policy.id);
