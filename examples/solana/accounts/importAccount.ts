// Usage: npx tsx solana/accounts/importAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// For demonstration, we'll use a random 32-byte hex key
// In production, you would use an actual Solana private key (base58 or hex format)
const privateKeyHex = Array.from({ length: 64 }, () =>
  Math.floor(Math.random() * 16).toString(16)
).join("");

console.log("Private key (hex):", privateKeyHex);

// Import the account to Openfort
// Openfort accepts both base58 and hex format for Solana keys
const account = await openfort.accounts.solana.backend.import({
  privateKey: privateKeyHex, // Can also be base58 format
  name: "ImportedSolanaWallet",
});

console.log("\nImported Solana account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
