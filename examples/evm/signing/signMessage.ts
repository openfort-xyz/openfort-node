// Usage: npx tsx evm/signing/signMessage.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { verifyMessage } from "viem";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an account
const account = await openfort.evm.createAccount({
  name: `Wallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Sign a message
const message = "Hello, Openfort!";
const signature = await account.signMessage({ message });

console.log("\nMessage:", message);
console.log("Signature:", signature);

// Verify the signature using viem
const isValid = await verifyMessage({
  address: account.address,
  message,
  signature,
});

console.log("Signature valid:", isValid);
