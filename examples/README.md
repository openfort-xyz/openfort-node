# Openfort Node SDK Examples

This directory contains examples demonstrating how to use the Openfort Node SDK.

## Setup

1. Build the SDK and install dependencies:
```bash
pnpm setup
```

This will:
- Build the parent SDK package
- Install example dependencies (linked to local SDK)

2. Copy the environment template and configure your API keys:
```bash
cp .env.example .env
```

3. Edit `.env` with your Openfort API key:
```bash
OPENFORT_API_KEY=sk_test_...
CHAIN_ID=80002  # Polygon Amoy testnet
```

## Running Examples

Run any example using `pnpm example`:

```bash
pnpm example evm/accounts/createAccount.ts
```

Or directly with tsx:

```bash
npx tsx evm/accounts/createAccount.ts
```

## Development Workflow

When making changes to the SDK:

1. Make your changes in the parent `src/` directory
2. Rebuild the SDK:
```bash
pnpm build:sdk
```
3. Run an example to test:
```bash
pnpm example evm/accounts/createAccount.ts
```

## Examples Overview

### EVM Wallet Examples

#### Accounts (`evm/accounts/`)
| Example                 | Description                          |
| ----------------------- | ------------------------------------ |
| `createAccount.ts` | Create a new EVM account             |
| `getAccount.ts`    | Retrieve an account by ID or address |
| `listAccounts.ts`  | List all EVM accounts                |
| `importAccount.ts` | Import an account from private key   |
| `exportAccount.ts` | Export an account's private key      |

#### Signing (`evm/signing/`)
| Example              | Description                        |
| -------------------- | ---------------------------------- |
| `signMessage.ts`     | Sign a message with an EVM account |
| `signTypedData.ts`   | Sign EIP-712 typed data            |
| `signHash.ts`        | Sign a raw hash                    |
| `signTransaction.ts` | Sign a transaction                 |

### Solana Wallet Examples

#### Accounts (`solana/accounts/`)
| Example                 | Description                          |
| ----------------------- | ------------------------------------ |
| `createAccount.ts` | Create a new Solana account          |
| `getAccount.ts`    | Retrieve an account by ID or address |
| `listAccounts.ts`  | List all Solana accounts             |
| `importAccount.ts` | Import an account from private key   |
| `exportAccount.ts` | Export an account's private key      |

#### Signing (`solana/signing/`)
| Example              | Description                          |
| -------------------- | ------------------------------------ |
| `signMessage.ts`     | Sign a message with a Solana account |
| `signTransaction.ts` | Sign a Solana transaction            |


### Policies

| Example                           | Description                     |
| --------------------------------- | ------------------------------- |
| `policies/createPolicy.ts`        | Create a gas sponsorship policy |
| `policies/getPolicy.ts`           | Get a policy by ID              |
| `policies/listPolicies.ts`        | List all policies               |
| `policies/updatePolicy.ts`        | Update a policy                 |
| `policies/disableEnablePolicy.ts` | Enable/disable a policy         |
| `policies/createPolicyRule.ts`    | Create a policy rule            |
| `policies/listPolicyRules.ts`     | List policy rules               |

### Contracts

| Example                       | Description               |
| ----------------------------- | ------------------------- |
| `contracts/createContract.ts` | Register a contract       |
| `contracts/listContracts.ts`  | List all contracts        |
| `contracts/readContract.ts`   | Read data from a contract |

### Transaction Intents

| Example                                   | Description                    |
| ----------------------------------------- | ------------------------------ |
| `transactions/createTransactionIntent.ts` | Create a transaction intent    |
| `transactions/getTransactionIntent.ts`    | Get a transaction intent       |
| `transactions/listTransactionIntents.ts`  | List transaction intents       |
| `transactions/estimateGas.ts`             | Estimate gas for a transaction |

### Exchange / Swaps

| Example                  | Description                |
| ------------------------ | -------------------------- |
| `exchange/quoteSwap.ts`  | Get a quote for token swap |
| `exchange/createSwap.ts` | Execute a token swap       |


## Additional Resources

- [Openfort Documentation](https://www.openfort.io/docs)
- [Dashboard](https://dashboard.openfort.io)
