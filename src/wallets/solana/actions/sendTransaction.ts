import {
  MissingPublishableKeyError,
  UserInputValidationError,
} from '../../../errors'
import { getConfig } from '../../../openapi-client/openfortApiClient'
import type { SendSolanaTransactionOptions } from '../types'

const NATIVE_SOL = '11111111111111111111111111111111'

/**
 * Sends a gasless Solana transaction via Kora.
 *
 * Orchestrates the Kora gasless flow using KoraClient:
 * 1. Get fee payer signer from Kora
 * 2. Get transfer instructions via transferTransaction
 * 3. Build transaction with compute budget + returned instructions + signers
 * 4. Sign with all signers (fee payer NoopSigner + custom Openfort TransactionPartialSigner)
 * 5. Kora co-signs, send via RPC
 * 6. Confirm on Solana
 *
 * Requires `@solana/kit`, `@solana-program/compute-budget`, `@solana/kora`,
 * and `@solana/transaction-confirmation` as peer dependencies.
 *
 * @param options - Transaction options
 * @returns Object with the transaction signature
 *
 * @example
 * ```typescript
 * const account = await openfort.accounts.solana.backend.create();
 * const result = await openfort.accounts.solana.backend.sendTransaction({
 *   account,
 *   cluster: 'devnet',
 *   destination: 'FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc',
 *   amount: 1000n,
 * });
 * console.log('Transaction signature:', result.signature);
 * ```
 */
export async function sendTransaction(
  options: SendSolanaTransactionOptions,
): Promise<{ signature: string }> {
  const { account, cluster, destination, amount, token, rpcUrl, wsUrl } =
    options

  // Dynamic imports for optional peer dependencies
  let solanaKit: any
  let computeBudget: any
  let transactionConfirmation: any
  let koraModule: any
  try {
    solanaKit = await import('@solana/kit')
  } catch {
    throw new UserInputValidationError(
      '@solana/kit is required for sendTransaction. Install it: pnpm add @solana/kit',
    )
  }
  try {
    computeBudget = await import('@solana-program/compute-budget')
  } catch {
    throw new UserInputValidationError(
      '@solana-program/compute-budget is required for sendTransaction. Install it: pnpm add @solana-program/compute-budget',
    )
  }
  try {
    koraModule = await import('@solana/kora')
  } catch {
    throw new UserInputValidationError(
      '@solana/kora is required for sendTransaction. Install it: pnpm add @solana/kora',
    )
  }
  try {
    transactionConfirmation = await import('@solana/transaction-confirmation')
  } catch {
    throw new UserInputValidationError(
      '@solana/transaction-confirmation is required for sendTransaction. Install it: pnpm add @solana/transaction-confirmation',
    )
  }

  // Create custom TransactionPartialSigner for Openfort backend signing
  const userAddress = solanaKit.address(account.address)
  const openfortSigner = {
    address: userAddress,
    signTransactions: async (transactions: any[]) => {
      return Promise.all(
        transactions.map(async (tx: any) => {
          const messageBase64 = Buffer.from(tx.messageBytes).toString('base64')
          const signatureHex = await account.signTransaction({
            transaction: messageBase64,
          })
          const sigBytes = new Uint8Array(
            Buffer.from(signatureHex.replace(/^0x/, ''), 'hex'),
          )
          return Object.freeze({ [userAddress]: sigBytes })
        }),
      )
    },
  }

  // Get publishable key from global config
  const clientConfig = getConfig()
  if (!clientConfig?.publishableKey) {
    throw new MissingPublishableKeyError('sendTransaction')
  }

  // Configuration
  const basePath = clientConfig.basePath || 'https://api.openfort.io'
  const CONFIG = {
    computeUnitLimit: 200_000,
    computeUnitPrice: 1_000_000n,
    transactionVersion: 0,
    solanaRpcUrl:
      rpcUrl ??
      (cluster === 'mainnet-beta'
        ? 'https://api.mainnet-beta.solana.com'
        : 'https://api.devnet.solana.com'),
    solanaWsUrl:
      wsUrl ??
      (cluster === 'mainnet-beta'
        ? 'wss://api.mainnet-beta.solana.com'
        : 'wss://api.devnet.solana.com'),
    koraRpcUrl: `${basePath}/rpc/solana/${cluster}`,
  }

  // Initialize KoraClient with API key authentication
  const client = new koraModule.KoraClient({
    rpcUrl: CONFIG.koraRpcUrl,
    apiKey: `Bearer ${clientConfig.publishableKey}`,
  })

  // Initialize Solana RPC connections
  const rpc = solanaKit.createSolanaRpc(CONFIG.solanaRpcUrl)
  const rpcSubscriptions = solanaKit.createSolanaRpcSubscriptions(
    CONFIG.solanaWsUrl,
  )
  const confirmTransaction =
    transactionConfirmation.createRecentSignatureConfirmationPromiseFactory({
      rpc,
      rpcSubscriptions,
    })

  // Step 1: Get fee payer signer from Kora
  const { signer_address } = await client.getPayerSigner()
  const noopSigner = solanaKit.createNoopSigner(
    solanaKit.address(signer_address),
  )

  // Step 2: Get transfer instructions from Kora (includes payment instructions)
  const transferResponse = await client.transferTransaction({
    amount: Number(amount),
    token: token ?? NATIVE_SOL,
    source: account.address,
    destination,
    signer_key: signer_address,
  })

  // Step 3: Build transaction
  const txMsg = solanaKit.pipe(
    solanaKit.createTransactionMessage({
      version: CONFIG.transactionVersion,
    }),
    (tx) => solanaKit.setTransactionMessageFeePayerSigner(noopSigner, tx),
    (tx) =>
      solanaKit.setTransactionMessageLifetimeUsingBlockhash(
        {
          blockhash: transferResponse.blockhash,
          lastValidBlockHeight: 0n,
        },
        tx,
      ),
    (tx) =>
      computeBudget.updateOrAppendSetComputeUnitPriceInstruction(
        CONFIG.computeUnitPrice,
        tx,
      ),
    (tx) =>
      computeBudget.updateOrAppendSetComputeUnitLimitInstruction(
        CONFIG.computeUnitLimit,
        tx,
      ),
    (tx) =>
      solanaKit.appendTransactionMessageInstructions(
        transferResponse.instructions,
        tx,
      ),
    (tx) => solanaKit.addSignersToTransactionMessage([openfortSigner], tx),
  )

  // Step 4: Sign with all signers (fee payer NoopSigner + Openfort backend signer)
  const signed =
    await solanaKit.partiallySignTransactionMessageWithSigners(txMsg)
  const base64Full = solanaKit.getBase64EncodedWireTransaction(signed)

  // Step 5: Kora co-signs, then send via RPC
  const { signed_transaction } = await client.signTransaction({
    transaction: base64Full,
    signer_key: signer_address,
  })
  const signature = await rpc
    .sendTransaction(signed_transaction, { encoding: 'base64' })
    .send()

  await confirmTransaction({
    commitment: 'confirmed',
    signature,
    abortSignal: AbortSignal.timeout(60_000),
  })

  return { signature }
}
