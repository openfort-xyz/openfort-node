import { AccountV2Response, createAccountV2 } from "../../../openapi-client"
import { UpdateEvmAccountOptions } from "../types"

/**
   * Updates an EVM backend wallet.
   *
   * Currently supports upgrading an EVM EOA to a Delegated Account (EIP-7702).
   *
   * @param options - Update options including account ID and delegation parameters
   * @returns The updated backend wallet response
   *
   * @example
   * ```typescript
   * const updated = await openfort.accounts.evm.backend.update({
   *   id: 'acc_...',
   *   accountType: 'Delegated Account',
   *   chain: { chainType: 'EVM', chainId: 8453 },
   *   implementationType: 'Calibur',
   * });
   * ```
   */
export async function update(
    options: UpdateEvmAccountOptions,
  ): Promise<AccountV2Response> {
    //* Debatable, here we could introduce a new structure
    const { chainId, walletId, implementationType, accountId } = options
    return createAccountV2({
      accountType: 'Delegated Account',
      chainType: 'EVM',
      chainId,
      user: walletId,
      implementationType,
      account: accountId,
    })
  }