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
| Example            | Description                          |
| ------------------ | ------------------------------------ |
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

#### Embedded Wallets (`evm/embedded/`)
| Example          | Description                              |
| ---------------- | ---------------------------------------- |
| `pregenerate.ts` | Pre-generate a user with embedded wallet |

> **Note:** The `pregenerate.ts` example requires Shield configuration. See `.env.example` for required environment variables:
> - `SHIELD_API_KEY`
> - `SHIELD_API_SECRET`
> - `SHIELD_ENCRYPTION_SHARE`

### Solana Wallet Examples

#### Accounts (`solana/accounts/`)
| Example            | Description                          |
| ------------------ | ------------------------------------ |
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


### Policies (`policies/`)

Policies provide fine-grained control over signing operations using Zod-validated rules with type-safe criteria.

| Example                     | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `createEvmPolicy.ts`        | EVM policies: value caps, address allowlists, ABI data |
| `createSolanaPolicy.ts`     | Solana policies: SOL/SPL limits, program IDs, messages |
| `createTypedDataPolicy.ts`  | EIP-712 typed-data and message signing policies        |
| `createAccountPolicy.ts`    | Account-scoped policy (vs project-scoped)              |
| `multiRulePolicy.ts`        | Multi-rule policy covering EVM + Solana operations     |
| `listPolicies.ts`           | List policies with scope filtering                     |
| `getPolicy.ts`              | Retrieve a policy by ID                                |
| `updatePolicy.ts`           | Update a policy's rules and description                |
| `deletePolicy.ts`           | Delete a policy                                        |
| `validatePolicy.ts`         | Client-side Zod validation without API calls           |

### Fee Sponsorship (`fee-sponsorship/`)

| Example                                  | Description                     |
| ---------------------------------------- | ------------------------------- |
| `fee-sponsorship/createPolicy.ts`        | Create a gas sponsorship policy |
| `fee-sponsorship/getPolicy.ts`           | Get a policy by ID              |
| `fee-sponsorship/listPolicies.ts`        | List all policies               |
| `fee-sponsorship/updatePolicy.ts`        | Update a policy                 |
| `fee-sponsorship/disableEnablePolicy.ts` | Enable/disable a policy         |
| `fee-sponsorship/createPolicyRule.ts`    | Create a policy rule            |
| `fee-sponsorship/listPolicyRules.ts`     | List policy rules               |

### Contracts

| Example                       | Description         |
| ----------------------------- | ------------------- |
| `contracts/createContract.ts` | Register a contract |
| `contracts/listContracts.ts`  | List all contracts  |

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

### IAM (Identity & Access Management)

| Example             | Description                   |
| ------------------- | ----------------------------- |
| `iam/listUsers.ts`  | List all authenticated users  |
| `iam/getUser.ts`    | Get a user by ID              |
| `iam/deleteUser.ts` | Delete a user                 |
| `iam/getSession.ts` | Verify auth token server-side |

### Webhooks

| Example            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `webhook/index.ts` | Express server to receive and verify webhook events |

## Additional Resources

- [Openfort Documentation](https://www.openfort.io/docs)
- [Dashboard](https://dashboard.openfort.io)
