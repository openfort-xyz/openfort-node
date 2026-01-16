<div align="center">

![Openfort](https://github.com/user-attachments/assets/84796219-8196-40fb-a28a-6ca24a388818)

  <p>
    Server-side SDK for managing EVM and Solana wallets, gas sponsorship, and blockchain interactions.
  </p>

[![npm version](https://img.shields.io/npm/v/@openfort/openfort-node.svg)](https://www.npmjs.org/package/@openfort/openfort-node)
[![npm downloads](https://img.shields.io/npm/dm/@openfort/openfort-node.svg)](https://www.npmjs.org/package/@openfort/openfort-node)
[![Follow @openfort_hq](https://img.shields.io/twitter/follow/openfort_hq.svg?style=social)](https://x.com/openfort_hq)
[![MIT License](https://img.shields.io/badge/license-MIT-0052FF?style=flat-square)](https://github.com/openfort-xyz/openfort-node/blob/main/LICENSE)

</div>

<br />

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Features](#features)
  - [Wallet Management](#wallet-management)
  - [Signing](#signing)
  - [Gas Sponsorship](#gas-sponsorship)
  - [IAM \& Authentication](#iam--authentication)
- [Examples](#examples)
- [Documentation](#documentation)
- [Support](#support)
- [License](#license)

## Overview

The Openfort Node.js SDK provides convenient access to the [Openfort API](https://www.openfort.io/docs) for server-side applications. It enables developers to:

- Create and manage EVM and Solana backend wallets
- Sign messages, typed data, and transactions
- Execute gasless transactions with gas sponsorship policies
- Manage users, accounts, and transaction intents
- Integrate with smart contracts and token swaps

## Installation

Requires Node.js 14 or higher.

```bash
npm install @openfort/openfort-node
```

```bash
yarn add @openfort/openfort-node
```

```bash
pnpm add @openfort/openfort-node
```

## Quickstart

Get your API key from the [Openfort Dashboard](https://dashboard.openfort.io/api-keys).

```typescript
import Openfort from "@openfort/openfort-node";

const openfort = new Openfort("sk_test_...", {
  walletSecret: "your-wallet-secret", // Required for signing operations
});

// Create an EVM backend account
const account = await openfort.accounts.evm.backend.create({
  name: "MyWallet",
});
console.log("Account address:", account.address);

// Sign a message (methods are on the account object)
const signature = await account.signMessage({
  message: "Hello, Openfort!",
});
console.log("Signature:", signature);
```

## Features

### Wallet Management

Create and manage wallets across EVM chains and Solana:

```typescript
// EVM backend accounts
const evmAccount = await openfort.accounts.evm.backend.create({
  name: "MyEVMWallet",
});

// Solana backend accounts
const solanaAccount = await openfort.accounts.solana.backend.create({
  name: "MySolanaWallet",
});

// Import existing wallet
const imported = await openfort.accounts.evm.backend.import({
  privateKey: "0x...",
  name: "ImportedWallet",
});
```

### Signing

Sign messages, typed data, and transactions. Methods are called directly on the account object:

```typescript
// Sign message
const signature = await account.signMessage({
  message: "Hello, Openfort!",
});

// Sign EIP-712 typed data
const typedSig = await account.signTypedData({
  domain: { name: "MyApp", version: "1", chainId: 1 },
  types: {
    Person: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
  },
  primaryType: "Person",
  message: { name: "Alice", wallet: "0x..." },
});
```

### Gas Sponsorship

Sponsor gas fees for your users with policies:

```typescript
// Create a sponsorship policy
const policy = await openfort.policies.create({
  name: "Free gas for users",
  chainId: 80002,
  strategy: { sponsorSchema: "pay_for_user" },
});

// Register a contract
const contract = await openfort.contracts.create({
  name: "MyContract",
  chainId: 80002,
  address: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
});

// Add rules to control sponsorship
await openfort.policyRules.create({
  policy: policy.id,
  type: "account_functions",
  contract: contract.id,
  functionName: "mint",
});
```

### IAM & Authentication

Manage users and verify sessions:

```typescript
// List authenticated users
const users = await openfort.iam.users.list({ limit: 10 });

// Verify session from access token
const session = await openfort.iam.getSession({ accessToken });
console.log("User ID:", session.user.id);
console.log("Session expires:", session.session.expiresAt);
```


## Examples

The SDK includes comprehensive examples for all features. See the [examples directory](./examples) for runnable code.

| Category       | Examples                                           |
| -------------- | -------------------------------------------------- |
| EVM Wallets    | Create, import, export, sign messages/transactions |
| Solana Wallets | Create, import, export, sign messages/transactions |
| Policies       | Gas sponsorship, policy rules, enable/disable      |
| Transactions   | Create intents, estimate gas, read contracts       |
| Exchange       | Token swap quotes and execution                    |
| IAM            | User management, session verification              |

Run examples:

```bash
cd examples
cp .env.example .env
# Edit .env with your API key
pnpm example evm/accounts/createAccount.ts
```

## Documentation

- [Official Documentation](https://www.openfort.io/docs)
- [API Reference](https://www.openfort.io/docs/reference/api)
- [Dashboard](https://dashboard.openfort.io)

## Support

- [GitHub Issues](https://github.com/openfort-xyz/openfort-node/issues) - Report bugs and request features
- [Twitter](https://x.com/openfort_hq) - Follow for updates
- [Website](https://www.openfort.io) - Learn more about Openfort

New features and bug fixes are released on the latest major version. We recommend upgrading to the latest version for security updates and new functionality.

## License

This project is licensed under the MIT License.
