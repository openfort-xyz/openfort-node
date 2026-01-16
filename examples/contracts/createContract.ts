// Usage: npx tsx contracts/createContract.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a contract reference
const contract = await openfort.contracts.create({
  name: "My Token Contract",
  chainId,
  address: "0xbabe0001489722187FbaF0689C47B2f5E97545C5",
  // Optional: provide ABI for function name validation
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

console.log("Created contract:");
console.log("  ID:", contract.id);
console.log("  Name:", contract.name);
console.log("  Address:", contract.address);
console.log("  Chain ID:", contract.chainId);
