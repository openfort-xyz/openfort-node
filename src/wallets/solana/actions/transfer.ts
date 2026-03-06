import type { Instruction } from '@solana/kit'
import { UserInputValidationError } from '../../../errors'
import type { TransferOptions } from '../types'
import { createRpcClient } from './rpc'
import { sendTransaction } from './sendTransaction'
import { getUsdcMintAddress } from './utils'

/**
 * Transfers SOL or SPL tokens between accounts.
 *
 * Routes to native SOL or SPL transfer based on the `token` option,
 * builds the appropriate instructions, and delegates to `sendTransaction()`
 * for the Openfort gasless flow.
 *
 * @param options - Transfer options
 * @returns The transfer result with transaction signature
 *
 * @example
 * ```typescript
 * // SOL transfer
 * await transfer({ account, to: "dest...", amount: 1_000_000n, cluster: "devnet" })
 *
 * // USDC by name
 * await transfer({ account, to: "dest...", amount: 1_000_000n, token: "usdc", cluster: "devnet" })
 *
 * // SPL by mint address
 * await transfer({ account, to: "dest...", amount: 100n, token: "4zMMC9...", cluster: "devnet" })
 * ```
 */
export async function transfer(
  options: TransferOptions,
): Promise<{ signature: string }> {
  const { account, cluster, rpcUrl, ...rest } = options

  const rpc = await createRpcClient(cluster, rpcUrl)

  const instructions =
    !options.token || options.token.toLowerCase() === 'sol'
      ? await getNativeTransferInstructions({
          from: account.address,
          to: options.to,
          amount: options.amount,
        })
      : await getSplTransferInstructions({
          rpc,
          from: account.address,
          to: options.to,
          mintAddress:
            options.token.toLowerCase() === 'usdc'
              ? getUsdcMintAddress(cluster)
              : options.token,
          amount: options.amount,
        })

  return sendTransaction({
    account,
    cluster,
    instructions,
    rpcUrl,
    computeUnitLimit: rest.computeUnitLimit,
    computeUnitPrice: rest.computeUnitPrice,
    wsUrl: rest.wsUrl,
  })
}

/** Options for building native SOL transfer instructions */
type GetNativeTransferOptions = {
  /** The sender's Solana address */
  from: string
  /** The recipient's Solana address */
  to: string
  /** Amount in lamports to transfer */
  amount: bigint
}

/**
 * Builds instructions for a native SOL transfer.
 *
 * @param options - The SOL transfer options
 * @returns The transfer instructions
 */
export async function getNativeTransferInstructions({
  from,
  to,
  amount,
}: GetNativeTransferOptions): Promise<Instruction[]> {
  let solanaKit: any
  let systemProgram: any
  try {
    solanaKit = await import('@solana/kit')
  } catch {
    throw new UserInputValidationError(
      '`@solana/kit` is required for transfer. Install it and try again.',
    )
  }
  try {
    systemProgram = await import('@solana-program/system')
  } catch {
    throw new UserInputValidationError(
      '`@solana-program/system` is required for SOL transfers. Install it and try again.',
    )
  }

  const fromAddr = solanaKit.address(from)
  const toAddr = solanaKit.address(to)

  return [
    systemProgram.getTransferSolInstruction({
      source: solanaKit.createNoopSigner(fromAddr),
      destination: toAddr,
      amount,
    }),
  ]
}

/** Options for building SPL token transfer instructions */
type GetSplTransferOptions = {
  /** The Solana RPC client instance */
  rpc: any
  /** The sender's Solana address */
  from: string
  /** The recipient's Solana address */
  to: string
  /** The SPL token mint address */
  mintAddress: string
  /** Amount of tokens to transfer (in smallest unit) */
  amount: bigint
}

/**
 * Builds instructions for an SPL token transfer.
 *
 * Derives ATAs, fetches decimals, validates balance,
 * creates destination ATA if needed, and uses `getTransferCheckedInstruction`.
 *
 * @param options - The SPL transfer options
 * @returns The transfer instructions
 */
export async function getSplTransferInstructions({
  rpc,
  from,
  to,
  mintAddress,
  amount,
}: GetSplTransferOptions): Promise<Instruction[]> {
  let solanaKit: any
  let tokenProgram: any
  try {
    solanaKit = await import('@solana/kit')
  } catch {
    throw new UserInputValidationError(
      '`@solana/kit` is required for transfer. Install it and try again.',
    )
  }
  try {
    tokenProgram = await import('@solana-program/token')
  } catch {
    throw new UserInputValidationError(
      '`@solana-program/token` is required for SPL transfers. Install it and try again.',
    )
  }

  const fromAddr = solanaKit.address(from)
  const toAddr = solanaKit.address(to)
  const mintAddr = solanaKit.address(mintAddress)

  const mintInfo = await tokenProgram.fetchMint(rpc, mintAddr).catch(() => {
    throw new UserInputValidationError(
      `Failed to fetch mint account for ${mintAddress}. Verify the mint address is correct.`,
    )
  })

  const [sourceAta] = await tokenProgram.findAssociatedTokenPda({
    mint: mintAddr,
    owner: fromAddr,
    tokenProgram: tokenProgram.TOKEN_PROGRAM_ADDRESS,
  })
  const [destAta] = await tokenProgram.findAssociatedTokenPda({
    mint: mintAddr,
    owner: toAddr,
    tokenProgram: tokenProgram.TOKEN_PROGRAM_ADDRESS,
  })

  const sourceAcct = await tokenProgram.fetchToken(rpc, sourceAta).catch(() => {
    throw new UserInputValidationError(
      `Source account has no token account for mint ${mintAddress}`,
    )
  })
  if (sourceAcct.data.amount < amount) {
    throw new UserInputValidationError(
      `Insufficient token balance: have ${sourceAcct.data.amount}, need ${amount}`,
    )
  }

  const instructions: Instruction[] = []

  // If destination ATA does not exist, add create instruction
  // Note: the sender pays ~0.002 SOL rent for ATA creation
  try {
    await tokenProgram.fetchToken(rpc, destAta)
  } catch {
    const createDestIx =
      await tokenProgram.getCreateAssociatedTokenInstructionAsync({
        payer: solanaKit.createNoopSigner(fromAddr),
        owner: toAddr,
        ata: destAta,
        mint: mintAddr,
      })
    instructions.push(createDestIx)
  }

  instructions.push(
    tokenProgram.getTransferCheckedInstruction({
      source: sourceAta,
      mint: mintAddr,
      destination: destAta,
      authority: solanaKit.createNoopSigner(fromAddr),
      amount,
      decimals: mintInfo.data.decimals,
    }),
  )

  return instructions
}
