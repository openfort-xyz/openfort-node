// Usage: npx tsx solana/accounts/getAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a Solana backend account
const account = await openfort.accounts.solana.backend.create({
  name: `MySolanaWallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Retrieve account by ID
const accountById = await openfort.accounts.solana.backend.get({ id: account.id });
console.log("Retrieved account by ID:", accountById.address);

// Retrieve account by address
const accountByAddress = await openfort.accounts.solana.backend.get({
  address: account.address,
});
console.log("Retrieved account by address:", accountByAddress.address);
