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
pnpm example contracts/createContract.ts
```

Or directly with tsx:

```bash
npx tsx contracts/createContract.ts
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
pnpm example contracts/createContract.ts
```

## Examples Overview

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

### IAM (Identity & Access Management)

| Example                     | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `iam/listUsers.ts`          | List all authenticated users                     |
| `iam/getUser.ts`            | Get a user by ID                                 |
| `iam/deleteUser.ts`         | Delete a user                                    |
| `iam/pregenerateUser.ts`    | Pre-generate a user with embedded wallet         |
| `iam/getSession.ts`         | Verify auth token server-side                    |

> **Note:** The `pregenerateUser.ts` example requires additional Shield configuration. See `.env.example` for the required environment variables:
> - `SHIELD_API_KEY`
> - `SHIELD_API_SECRET`
> - `SHIELD_ENCRYPTION_SHARE`

### Webhooks

| Example            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `webhook/index.ts` | Express server to receive and verify webhook events |

## Additional Resources

- [Openfort Documentation](https://www.openfort.io/docs)
- [Dashboard](https://dashboard.openfort.io)
