// Usage: npx tsx solana/accounts/exportAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a player and Solana account
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});

const account = await openfort.solana.createAccount({
  user: player.id,
  name: "ExportTestSolanaWallet",
});

console.log("Created Solana account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);

// Export the account's private key
// Returns base58 encoded private key (standard Solana format)
const exportedPrivateKey = await openfort.solana.exportAccount({
  id: account.id,
});

console.log("\nExported private key (base58):", exportedPrivateKey);
console.log(
  "\nNote: This is the standard Solana private key format that can be used with Phantom, Solflare, etc."
);
