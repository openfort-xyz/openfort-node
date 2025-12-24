// Usage: npx tsx evm/signing/signTypedData.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { verifyTypedData } from "viem";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an account
const account = await openfort.evm.createAccount({
  name: `Wallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Define EIP-712 typed data
const domain = {
  name: "Example App",
  version: "1",
  chainId: 1,
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC" as const,
};

const types = {
  Person: [
    { name: "name", type: "string" },
    { name: "wallet", type: "address" },
  ],
  Mail: [
    { name: "from", type: "Person" },
    { name: "to", type: "Person" },
    { name: "contents", type: "string" },
  ],
} as const;

const message = {
  from: {
    name: "Alice",
    wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826" as const,
  },
  to: {
    name: "Bob",
    wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB" as const,
  },
  contents: "Hello, Bob!",
};

// Sign the typed data
const signature = await account.signTypedData({
  domain,
  types,
  primaryType: "Mail",
  message,
});

console.log("\nTyped data signed successfully!");
console.log("Signature:", signature);

// Verify the signature
const isValid = await verifyTypedData({
  address: account.address,
  domain,
  types,
  primaryType: "Mail",
  message,
  signature,
});

console.log("Signature valid:", isValid);
