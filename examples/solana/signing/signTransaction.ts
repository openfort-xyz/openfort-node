// Usage: npx tsx solana/signing/signTransaction.ts

import Openfort from "@openfort/openfort-node";
import { getTransferSolInstruction } from "@solana-program/system";
import {
  address,
  createNoopSigner,
  createSolanaRpc,
  createTransactionMessage,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  appendTransactionMessageInstruction,
  compileTransaction,
  getBase64EncodedWireTransaction,
} from "@solana/kit";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a Solana backend account
const account = await openfort.accounts.solana.backend.create();
console.log("Created Solana account:", account.address);

// Build a transaction using @solana/kit
const rpc = createSolanaRpc("https://api.devnet.solana.com");
const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

const sender = createNoopSigner(address(account.address));
const destination = address("FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc");

const transferIx = getTransferSolInstruction({
  source: sender,
  destination,
  amount: 1_000n,
});

const transactionMessage = appendTransactionMessageInstruction(
  transferIx,
  setTransactionMessageLifetimeUsingBlockhash(
    latestBlockhash,
    setTransactionMessageFeePayerSigner(
      sender,
      createTransactionMessage({ version: 0 }),
    ),
  ),
);

const compiledTransaction = compileTransaction(transactionMessage);
const base64Transaction = getBase64EncodedWireTransaction(compiledTransaction);

console.log("\nTransaction (base64):", base64Transaction);

// Sign the transaction
const signedTransaction = await account.signTransaction({
  transaction: base64Transaction,
});
console.log("Signed transaction:", signedTransaction);
