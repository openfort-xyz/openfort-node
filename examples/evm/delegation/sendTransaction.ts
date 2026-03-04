import 'dotenv/config'
import Openfort from '@openfort/openfort-node'

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
const result = await openfort.accounts.evm.backend.sendTransaction({
  account: account,
  chainId: 84532, // Base Sepolia
  interactions,
})
console.log("First tx", result.response?.transactionHash)

// 3. Second call: account is already delegated -> skips delegation, sends directly
const result2 = await openfort.accounts.evm.backend.sendTransaction({
  account: account,
  chainId: 84532,
  interactions,
})
console.log("Second tx", result2.response?.transactionHash)


