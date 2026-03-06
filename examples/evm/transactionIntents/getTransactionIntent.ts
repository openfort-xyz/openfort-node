// Usage: npx tsx transactions/getTransactionIntent.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy for gas sponsorship
const policy = await openfort.policies.create({
  scope: "project",
  rules: [
    {
      action: "accept",
      operation: "sponsorEvmTransaction",
      criteria: [
        { type: "evmNetwork", operator: "in", chainIds: [chainId] },
      ],
    },
  ],
});

// Create a fee sponsorship linked to the policy
const sponsorship = await openfort.feeSponsorship.create({
  name: `TxPolicy-${Date.now()}`,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
  policyId: policy.id,
});

const contract = await openfort.contracts.create({
  name: "My Token Contract",
  chainId,
  address: "0xbabe0001489722187FbaF0689C47B2f5E97545C5",
  // Optional: provide ABI for function name validation
  // abi: [...]
});

// Create a transaction intent
const created = await openfort.transactionIntents.create({
  chainId,
  policy: sponsorship.id,
  interactions: [
    {
      contract: contract.id,
      functionName: "mint",
      functionArgs: ['0x662D24Bf7Ea2dD6a7D0935F680a6056b94fE934d', '123'],
    },
  ],
});

console.log("Created transaction intent:", created.id);

// Retrieve the transaction intent
const intent = await openfort.transactionIntents.get(created.id);

console.log("\nRetrieved transaction intent:");
console.log("  ID:", intent.id);
console.log("  Chain ID:", intent.chainId);
console.log("  Player:", intent.player?.id);
console.log("  Account:", intent.account?.id);
console.log("  Created:", intent.createdAt);
