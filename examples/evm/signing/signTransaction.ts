// Usage: npx tsx evm/signing/signTransaction.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { parseEther, parseTransaction } from "viem";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an account
const account = await openfort.evm.createAccount({
  name: `Wallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Define a transaction to sign
const transaction = {
  to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" as const,
  value: parseEther("0.001"),
  nonce: 0,
  gas: 21000n,
  maxFeePerGas: 20000000000n,
  maxPriorityFeePerGas: 1000000000n,
  chainId: Number(process.env.CHAIN_ID) || 80002,
};

console.log("\nTransaction to sign:");
console.log("  To:", transaction.to);
console.log("  Value:", transaction.value.toString(), "wei");
console.log("  Chain ID:", transaction.chainId);

// Sign the transaction
const signedTransaction = await account.signTransaction(transaction);

console.log("\nSigned transaction:", signedTransaction);

// Parse and display the signed transaction
const parsed = parseTransaction(signedTransaction);
console.log("\nParsed signed transaction:");
console.log("  To:", parsed.to);
