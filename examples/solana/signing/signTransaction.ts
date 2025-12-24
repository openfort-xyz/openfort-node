// Usage: npx tsx solana/signing/signTransaction.ts

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
console.log("Created Solana account:", account.address);

// Create a sample transaction (base64 encoded)
// In production, you would create this using @solana/web3.js
// This is a placeholder transaction for demonstration
const sampleTransaction = Buffer.from("sample-transaction-data").toString(
  "base64"
);

console.log("\nTransaction (base64):", sampleTransaction);

// Sign the transaction
// Note: This example uses a placeholder. In production, create a proper
// Solana transaction using @solana/web3.js or @solana/kit and serialize it to base64
try {
  const signedTransaction = await account.signTransaction({
    transaction: sampleTransaction,
  });
  console.log("Signed transaction:", signedTransaction);
} catch (error) {
  console.log(
    "\nNote: This example uses a placeholder transaction."
  );
  console.log(
    "In production, create a valid Solana transaction using @solana/web3.js"
  );
}
