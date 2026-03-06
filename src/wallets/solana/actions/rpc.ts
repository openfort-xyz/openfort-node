import { UserInputValidationError } from '../../../errors'
import type { SolanaCluster } from '../types'
import { getRpcEndpoint } from './utils'

/**
 * Create a Solana RPC client for the given cluster.
 *
 * @param cluster - The Solana cluster
 * @param rpcUrl - Optional custom RPC URL override
 * @returns The RPC client
 */
export async function createRpcClient(cluster: SolanaCluster, rpcUrl?: string) {
  let solanaKit: any
  try {
    solanaKit = await import('@solana/kit')
  } catch {
    throw new UserInputValidationError(
      '@solana/kit is required. Install it: pnpm add @solana/kit',
    )
  }
  return solanaKit.createSolanaRpc(rpcUrl ?? getRpcEndpoint(cluster))
}
