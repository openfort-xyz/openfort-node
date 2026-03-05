import {
  MissingPublishableKeyError,
  UserInputValidationError,
} from '../../../errors'
import { getConfig } from '../../../openapi-client/openfortApiClient'
import type { SendSolanaTransactionOptions } from '../types'
import {
  DEFAULT_COMPUTE_UNIT_LIMIT,
  DEFAULT_COMPUTE_UNIT_PRICE,
} from './constants'
import { getRpcEndpoint, getWsEndpoint } from './utils'

/**
 * Sends a gasless Solana transaction via Kora.
 *
 * Orchestrates the Kora gasless flow using KoraClient:
 * 1. Get fee payer address from Kora
 * 2. Get blockhash from Kora
 * 3. Build transaction with compute budget + user-provided instructions
 * 4. Compile and manually sign with Openfort backend
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
 *   instructions: [...myInstructions],
 * });
 * console.log('Transaction signature:', result.signature);
 * ```
 */
export async function sendTransaction(
  options: SendSolanaTransactionOptions,
): Promise<{ signature: string }> {
  const {
    account,
    cluster,
    instructions,
    computeUnitLimit,
    computeUnitPrice,
    rpcUrl,
    wsUrl,
  } = options

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

  const userAddress = solanaKit.address(account.address)

  // Get publishable key from global config
  const clientConfig = getConfig()
  if (!clientConfig?.publishableKey) {
    throw new MissingPublishableKeyError('sendTransaction')
  }

  const basePath = clientConfig.basePath || 'https://api.openfort.io'
  // Initialize KoraClient with API key authentication
  const client = new koraModule.KoraClient({
    rpcUrl: `${basePath}/rpc/solana/${cluster}`,
    apiKey: `Bearer ${clientConfig.publishableKey}`,
  })

  // Initialize Solana RPC connections
  const rpc = solanaKit.createSolanaRpc(rpcUrl ?? getRpcEndpoint(cluster))
  const rpcSubscriptions = solanaKit.createSolanaRpcSubscriptions(wsUrl ?? getWsEndpoint(cluster))
  const confirmTransaction =
    transactionConfirmation.createRecentSignatureConfirmationPromiseFactory({
      rpc,
      rpcSubscriptions,
    })

  // Step 1: Get fee payer address from Kora
  const { signer_address } = await client.getPayerSigner()

  // Step 2: Get blockhash from Kora
  const blockhashResponse = await client.getBlockhash()

  // Step 3: Build transaction message (address-only fee payer, no signer framework)
  const txMsg = solanaKit.pipe(
    solanaKit.createTransactionMessage({ version: 0 }),
    (tx) =>
      solanaKit.setTransactionMessageFeePayer(
        solanaKit.address(signer_address),
        tx,
      ),
    (tx) =>
      solanaKit.setTransactionMessageLifetimeUsingBlockhash(
        {
          blockhash: blockhashResponse.blockhash,
          lastValidBlockHeight: 0n,
        },
        tx,
      ),
    (tx) =>
      computeBudget.updateOrAppendSetComputeUnitPriceInstruction(
        computeUnitPrice ?? DEFAULT_COMPUTE_UNIT_PRICE,
        tx,
      ),
    (tx) =>
      computeBudget.updateOrAppendSetComputeUnitLimitInstruction(
        computeUnitLimit ?? DEFAULT_COMPUTE_UNIT_LIMIT,
        tx,
      ),
    (tx) => solanaKit.appendTransactionMessageInstructions(instructions, tx),
  )

  // Step 4: Compile and sign manually (bypasses signer framework entirely)
  const compiled = solanaKit.compileTransaction(txMsg)
  const messageBase64 = Buffer.from(compiled.messageBytes).toString('base64')
  const signatureHex = await account.signTransaction({
    transaction: messageBase64,
  })
  const sigBytes = new Uint8Array(
    Buffer.from(signatureHex.replace(/^0x/, ''), 'hex'),
  )

  // Build signed transaction: real user sig + zero placeholder for fee payer (Kora fills it)
  const EMPTY_SIGNATURE = new Uint8Array(64)
  const signatures = Object.fromEntries(
    Object.entries(compiled.signatures).map(([addr]) => [
      addr,
      addr === userAddress ? sigBytes : EMPTY_SIGNATURE,
    ]),
  )
  const signed = { ...compiled, signatures }
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
