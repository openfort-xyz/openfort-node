// Usage: npx tsx transactions/createTransactionIntent.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy for gas sponsorship
const policy = await openfort.policies.create({
  name: `TxPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

const contract = await openfort.contracts.create({
  name: "My Token Contract",
  chainId,
  address: "0xbabe0001489722187FbaF0689C47B2f5E97545C5",
  // Optional: provide ABI for function name validation
  // abi: [...]
});

// Create a policy rule to allow all account functions
await openfort.policyRules.create({
  type: "contract_functions",
  functionName: "All functions",
  wildcard: true,
  policy: policy.id,
  contract: contract.id,
});

// Create a transaction intent
const transactionIntent = await openfort.transactionIntents.create({
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: contract.id,
      functionName: "mint",
      functionArgs: ['0x662D24Bf7Ea2dD6a7D0935F680a6056b94fE934d', '123'],
    },
  ],
});

console.log("Created transaction intent:");
console.log("  ID:", transactionIntent.id);
console.log("  Chain ID:", transactionIntent.chainId);
console.log("  Player:", transactionIntent.player?.id);
console.log("  Policy:", transactionIntent.policy?.id);
