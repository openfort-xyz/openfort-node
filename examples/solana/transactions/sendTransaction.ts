// Usage: pnpm tsx solana/transactions/sendTransaction.ts
//
// Low-level example using raw instructions.
// For simple transfers, see solana/transfer.ts instead.

import Openfort from "@openfort/openfort-node";
import { getTransferSolInstruction } from "@solana-program/system";
import { address, createNoopSigner } from "@solana/kit";
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

const DESTINATION = address("FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc");

// Build a raw SOL transfer instruction
const solTransferIx = getTransferSolInstruction({
  source: createNoopSigner(address(account.address)),
  destination: DESTINATION,
  amount: 10n,
});


const result = await openfort.accounts.solana.backend.sendTransaction({
  account,
  cluster: "devnet",
  instructions: [solTransferIx],
});
console.log("Transaction signature:", result.signature);
