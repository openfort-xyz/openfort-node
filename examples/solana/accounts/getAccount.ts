// Usage: npx tsx solana/accounts/getAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a Solana account
const account = await openfort.solana.createAccount({
  name: `MySolanaWallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Retrieve account by ID
const accountById = await openfort.solana.getAccount({ id: account.id });
console.log("Retrieved account by ID:", accountById.address);

// Retrieve account by address
const accountByAddress = await openfort.solana.getAccount({
  address: account.address,
});
console.log("Retrieved account by address:", accountByAddress.address);
