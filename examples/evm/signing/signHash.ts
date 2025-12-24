// Usage: npx tsx evm/signing/signHash.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { keccak256, toBytes } from "viem";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an account
const account = await openfort.evm.createAccount({
  name: `Wallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Create a hash to sign
const message = "Hello, Openfort!";
const hash = keccak256(toBytes(message));

console.log("\nOriginal message:", message);
console.log("Hash:", hash);

// Sign the hash directly
const signature = await account.sign({ hash });

console.log("Signature:", signature);
