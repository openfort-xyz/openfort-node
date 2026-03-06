// Usage: pnpm tsx evm/policies/createAccountPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policy = await openfort.policies.create({
  scope: "account",
  description: "Account Allowlist Example",
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
    {
      action: "accept",
      operation: "signEvmHash",
    },
    {
      action: "accept",
      operation: "signEvmMessage",
      criteria: [
        {
          type: "evmMessage",
          operator: "match",
          pattern: ".*",
        },
      ],
    },
  ],
});
console.log("Created account policy: ", policy.id);
