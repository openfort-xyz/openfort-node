import 'dotenv/config'
import Openfort, { getDelegatedAccount, Hex } from '@openfort/openfort-node'
import { hashAuthorization } from 'viem/utils'
import { createPublicClient, http } from 'viem'
import { baseSepolia } from 'viem/chains'
import { get } from 'node:http'

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  walletSecret: process.env.OPENFORT_WALLET_SECRET!,
})


// 1. Create an EVM backend account
const account = await openfort.accounts.evm.backend.create()
// const signedAuthorization = await account.sign({ hash: authHash })

const interactions = [
  { to: '0x0000000000000000000000000000000000000000', value: '0', data: '0x' },
]

console.log("=== Full delegation + signing flow via sendTransaction() ===")
// 2. First call: account is new -> delegates via EIP-7702, then sends the transaction
console.time('create')
const result = await openfort.transactionIntents.create({
  account: account.id,
  chainId: 84532, // Base Sepolia
  interactions,
})
console.timeEnd('create')
console.log("First tx", result.response?.transactionHash)

// 3. Second call: account is already delegated -> skips delegation, sends directly
// const result2 = await openfort.transactionIntents.create({
//   account: account.id ,
//   chainId: 84532,
//   interactions,
// })
// console.log("Second tx", result2.response?.transactionHash)



console.log("\n=== Full manual flow ===")
const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
})

const eoaNonce = await publicClient.getTransactionCount({
  address: account.address as Hex,
})

const implementationAddress: Hex = '0x000000009b1d0af20d8c6d0a44e162d11f9b8f00'
const chainId = 84532 // Base Sepolia

const authHash = hashAuthorization({
  contractAddress: implementationAddress,
  chainId,
  nonce: eoaNonce,
})

const authSignature = await account.sign({ hash: authHash })

const updated = await getDelegatedAccount(account.id, { chainId })

const txIntent = await openfort.transactionIntents.create({
  chainId: 84532,
  account: updated.id, 
  signedAuthorization: authSignature,
  interactions
})

console.log("Manual flow tx", txIntent.response?.transactionHash)


