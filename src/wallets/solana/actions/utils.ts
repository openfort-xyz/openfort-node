import type { SolanaCluster } from '../types'
import {
  USDC_DEVNET_MINT_ADDRESS,
  USDC_MAINNET_MINT_ADDRESS,
} from './constants'

/**
 * Get the USDC mint address for the given cluster.
 *
 * @param cluster - The Solana cluster
 * @returns The USDC mint address
 */
export function getUsdcMintAddress(cluster: SolanaCluster): string {
  if (cluster === 'mainnet-beta') {
    return USDC_MAINNET_MINT_ADDRESS
  }
  return USDC_DEVNET_MINT_ADDRESS
}

/**
 * Get the default RPC endpoint for the given cluster.
 *
 * @param cluster - The Solana cluster
 * @returns The RPC endpoint URL
 */
export function getRpcEndpoint(cluster: SolanaCluster): string {
  return cluster === 'mainnet-beta'
    ? 'https://api.mainnet-beta.solana.com'
    : 'https://api.devnet.solana.com'
}

/**
 * Get the default WebSocket endpoint for the given cluster.
 *
 * @param cluster - The Solana cluster
 * @returns The WebSocket endpoint URL
 */
export function getWsEndpoint(cluster: SolanaCluster): string {
  return cluster === 'mainnet-beta'
    ? 'wss://api.mainnet-beta.solana.com'
    : 'wss://api.devnet.solana.com'
}
