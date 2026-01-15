// Usage: npx tsx transactions/createTransactionIntent.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create an account (V1 legacy API)
const account = await openfort.accounts.v1.create({
  chainId,
});

// Create a contract reference
const contract = await openfort.contracts.create({
  name: "My NFT Contract",
  chainId,
  address: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
  abi: [
        {
          "type": "function",
          "name": "transfer",
          "inputs": [
            {
              "name": "_to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_amount",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "balanceOf",
          "inputs": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        }
      ]
});

// Create a policy for gas sponsorship
const policy = await openfort.policies.create({
  name: `TxPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

// Create a policy rule to allow all contract functions
await openfort.policyRules.create({
  type: "contract_functions",
  policy: policy.id,
  functionName: "All functions",
  contract: contract.id,
});

// Create a transaction intent
const transactionIntent = await openfort.transactionIntents.create({
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: contract.id,
      functionName: "transfer",
      functionArgs: [account.address, 1],
    },
  ],
});

console.log("Created transaction intent:");
console.log("  ID:", transactionIntent.id);
console.log("  Chain ID:", transactionIntent.chainId);
console.log("  Player:", transactionIntent.player?.id);
console.log("  Policy:", transactionIntent.policy?.id);
