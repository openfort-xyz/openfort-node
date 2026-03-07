// Usage: npx tsx solana/accounts/importAccount.ts

import Openfort from "@openfort/openfort-node";
import {
  createKeyPairFromPrivateKeyBytes,
  getAddressFromPublicKey,
} from "@solana/kit";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Generate a random 32-byte private key using @solana/kit
const privateKeyBytes = new Uint8Array(32);
crypto.getRandomValues(privateKeyBytes);

const { publicKey } = await createKeyPairFromPrivateKeyBytes(privateKeyBytes);
const solanaAddress = await getAddressFromPublicKey(publicKey);
console.log("Generated Solana address:", solanaAddress);

// Convert private key bytes to hex for import
const privateKeyHex = Buffer.from(privateKeyBytes).toString("hex");

// Import the account to Openfort
const account = await openfort.accounts.solana.backend.import({
  privateKey: privateKeyHex,
});

console.log("\nImported Solana account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
