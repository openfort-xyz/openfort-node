import { Hash, Hex } from "../types"
import { http, createPublicClient, getAddress } from "viem"
import { hashAuthorization } from "viem/utils"
import { DelegationError } from "../../../errors"
import { getAccountsV2, createTransactionIntent } from "../../../openapi-client"
import { SendTransactionOptions, TransactionIntentResponse } from "../types"
import * as chains from 'viem/chains'
import { signature as submitSignature } from "../../../openapi-client"
import { update } from "./updateToDelegated"
/**
   * Delegates an EVM account via EIP-7702 and sends a gasless transaction in one call.
   *
   * Internally: registers delegation -> fetches EOA nonce via RPC -> hashes and signs
   * EIP-7702 authorization -> creates transaction intent -> signs and submits if needed.
   *
   * @param options - Transaction options including account ID, chain, interactions, and optional policy
   * @returns The transaction intent response
   *
   * @example
   * ```typescript
   * const result = await openfort.accounts.evm.backend.sendTransaction({
   *   id: 'acc_...',
   *   chainId: 84532,
   *   interactions: [{ to: '0x...', data: '0x...' }],
   *   policy: 'pol_...',
   * });
   * console.log(result.response?.transactionHash);
   * ```
   */
export async function sendTransaction(
    options: SendTransactionOptions,
): Promise<TransactionIntentResponse> {
    const { account, chainId, interactions, policy, rpcUrl } = options

    // 1. Resolve chain + RPC
    const transport = rpcUrl ? http(rpcUrl) : http()
    const allChains = Object.values(chains) as chains.Chain[]
    const chain = allChains.find((c) => c.id === chainId)
    if (!chain) {
        throw new DelegationError(
            `Unknown chain ID ${chainId}. Provide a custom rpcUrl for unsupported chains.`,
        )
    }
    const publicClient = createPublicClient({ chain, transport })

    // 2. Get or create delegated account
    let signedAuthorization: string | undefined
    let txAccountId: string

    const response = await getAccountsV2({
        address: getAddress(account.address),
        accountType: 'Delegated Account',
        chainType: 'EVM',
        chainId: chainId,
    })

    if (response.data.length === 0) {
        // No delegation yet - register it
        const updated = await update({
            walletId: account.walletId,
            chainId,
            implementationType: 'Calibur',
            accountId: account.id,
        })
        txAccountId = updated.id

        const implementationAddress: Hex = '0x000000009b1d0af20d8c6d0a44e162d11f9b8f00'

        // 2.1. Sign EIP-7702 authorization if not yet delegated on-chain
        const eoaNonce = await publicClient.getTransactionCount({
            address: account.address,
        })
        const authHash = hashAuthorization({
            contractAddress: implementationAddress,
            chainId,
            nonce: eoaNonce,
        })
        signedAuthorization = await account.sign({ hash: authHash })
    } else {
        txAccountId = response.data[0].id
    }

    // 3. Create transaction intent
    const txIntent = await createTransactionIntent({
        chainId,
        account: txAccountId,
        policy,
        signedAuthorization,
        interactions,
    })

    // 4. Sign and submit if needed
    if (!txIntent.nextAction?.payload?.signableHash) {
        return txIntent
    }

    const txSignature = await account.sign({
        hash: txIntent.nextAction.payload.signableHash as Hash,
    })

    return submitSignature(txIntent.id, {
        signature: txSignature,
    })
}
