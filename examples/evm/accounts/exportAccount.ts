// Usage: npx tsx evm/accounts/exportAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// First import an account so we can export it
const originalPrivateKey = generatePrivateKey();
const originalAccount = privateKeyToAccount(originalPrivateKey);

console.log("Original private key:", originalPrivateKey);
console.log("Original address:", originalAccount.address);

const account = await openfort.accounts.evm.backend.import({
  privateKey: originalPrivateKey,
  name: "ExportTestWallet",
});

console.log("\nImported account ID:", account.id);

// Export the account's private key
const exportedPrivateKey = await openfort.accounts.evm.backend.export({
  id: account.id,
});

console.log("\nExported private key:", `0x${exportedPrivateKey}`);

// Verify the exported key matches
const derivedAccount = privateKeyToAccount(`0x${exportedPrivateKey}`);
console.log("Derived address:", derivedAccount.address);
console.log(
  "Keys match:",
  originalPrivateKey.toLowerCase() === `0x${exportedPrivateKey}`.toLowerCase()
);
