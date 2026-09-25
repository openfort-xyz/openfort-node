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

const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY!, {
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

// Sign the compiled message bytes. The API returns the ed25519 signature for this
// account, not a signed transaction.
const messageBase64 = Buffer.from(
  compiledTransaction.messageBytes as unknown as Uint8Array,
).toString("base64");
const signatureHex = await account.signTransaction({ transaction: messageBase64 });
console.log("Signature:", signatureHex);

// Place the signature in the transaction and serialize it for broadcast.
const signature = new Uint8Array(Buffer.from(signatureHex.slice(2), "hex"));
const signedTransaction = {
  ...compiledTransaction,
  signatures: { ...compiledTransaction.signatures, [account.address]: signature },
} as typeof compiledTransaction;
console.log("Signed transaction (base64):", getBase64EncodedWireTransaction(signedTransaction));
