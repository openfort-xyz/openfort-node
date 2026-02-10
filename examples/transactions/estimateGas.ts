// Usage: npx tsx transactions/estimateGas.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create an account (V1 legacy API)
const account = await openfort.accounts.v1.create({
  chainId,
});

// Create a policy
const policy = await openfort.feeSponsorship.create({
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
await openfort.feeSponsorship.rules.create({
  type: "contract_functions",
  functionName: "All functions",
  wildcard: true,
  policy: policy.id,
});
// Define transaction intent request
const transactionIntentRequest = {
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: contract.id,
      functionName: "mint",
      functionArgs: ['0x662D24Bf7Ea2dD6a7D0935F680a6056b94fE934d', '123'],
    },
  ],
};

// Estimate cost for the transaction before creating it
const estimate = await openfort.transactionIntents.estimateCost(
  transactionIntentRequest,
);

console.log("Cost estimate:");
console.log("  Estimated TX Gas:", estimate.estimatedTXGas);
console.log("  Estimated TX Gas Fee:", estimate.estimatedTXGasFee);
console.log("  Estimated TX Gas Fee (USD):", estimate.estimatedTXGasFeeUSD);
