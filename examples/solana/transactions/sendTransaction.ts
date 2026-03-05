// Usage: pnpm tsx solana/transactions/sendTransaction.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
  publishableKey: process.env.OPENFORT_PUBLISHABLE_KEY,
});

// Create a Solana backend account
const account = await openfort.accounts.solana.backend.create();
console.log("Created Solana account:", account.address);

// To send the transaction without native token in the wallet, use a fee sponsor.
// https://www.openfort.io/docs/configuration/gas-sponsorship

const result = await openfort.accounts.solana.backend.sendTransaction({
  account,
  cluster: "devnet",
  destination: "FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc",
  amount: 0n,
});

console.log("Transaction signature:", result.signature);


const result2 = await openfort.accounts.solana.backend.sendTransaction({
  account,
  cluster: "devnet",
  destination: "FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc",
  amount: 0n,
});
console.log("Transaction signature:", result2.signature);