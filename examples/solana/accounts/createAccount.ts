// Usage: npx tsx solana/accounts/createAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a Solana account
const account = await openfort.solana.createAccount({
  name: `SolanaWallet-${Date.now()}`,
});

console.log("Created Solana account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
