// Usage: pnpm tsx solana/transactions/sendRawTransaction.ts
//
// Requires: pnpm add @solana/kit @solana/transaction-confirmation @solana-program/compute-budget @solana/kora

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
  publishableKey: process.env.OPENFORT_PUBLISHABLE_KEY,
});

const account = await openfort.accounts.solana.backend.get({
  address: "o24A5URLU3JNKg7AoeUrPsfsAo1NQeeAB4uQViAkpjq",
});
console.log("Solana account:", account.address);

const base64Transaction = "AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAIAAgVNIUjL89213czrp82aA7pwQtVnJ433tRk70i1jD6x8RgvJ6NInwPBPRE1nsK0uFlw4un64nQPWoQ5z6rMgnEa401TyQ9UGEEZNtkD5WCpVzr4hzSQjxMXpK3bGAFWS+d8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAALajv1ShJYnJUlo8NjFHgtGjF+2MgsBy4LMtqcDvTyfUDBAAJA0BCDwAAAAAABAAFAkANAwADAgECDAIAAAAKAAAAAAAAAAA=";

const result = await account.sendRawTransaction({
  cluster: "devnet",
  transaction: base64Transaction,
});
console.log("Transaction signature:", result.signature);
