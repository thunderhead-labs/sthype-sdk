# stHYPE SDK

A Frontend TypeScript SDK for interacting with the staked HYPE (stHYPE) native Hyperliquid liquid staking protocol.

## Demo

View a live demo at [https://sdk-sthype.vercel.app/](https://sdk-sthype.vercel.app/)

## Installation

```bash
pnpm add @sthype/sdk
```

## Dependencies

```bash
pnpm add viem
```

## Usage

```typescript
import { StHYPESDK, hyperliquidMainnet, hyperliquidTestnet } from '@sthype/sdk';

// Initialize the SDK
const sdk = new StHYPESDK({
  network: 'mainnet', // or 'testnet'
});

// Get staking information
const stHypeBalance = await sdk.getBalancesStHype('0x...');
const wrappedStHypeBalance = await sdk.getBalancesWrappedStHype('0x...');
const apy = await sdk.getAPY();
const totalSupply = await sdk.getTotalSupply();
const wstHypeRate = await sdk.getWstHypeRate();

// Get quotes
const stakeQuote = await sdk.getStakeQuote(BigInt(1e18));
const unstakeQuote = await sdk.getUnstakeQuote(BigInt(1e18));

// Stake HYPE
const stakeResult = await sdk.stake('0x...', BigInt(1e18), 'optional-community-code');

// Unstake stHYPE
const approveResult = await sdk.approveUnstake(BigInt(1e18));
const unstakeResult = await sdk.unstake('0x...', BigInt(1e18), 'optional-community-code');
```

## Configuration

The SDK can be initialized with the following configuration:

```typescript
interface SDKConfig {
  network?: 'mainnet' | 'testnet'; // Optional, defaults to 'mainnet'
}
```

The SDK will automatically use the correct contract addresses based on the selected network:
- Mainnet: Uses predefined mainnet addresses
- Testnet: Uses predefined testnet addresses

### Wallet Client Setup

Call setWalletClient when the wallet client is available, for example with React applications using wagmi.

```typescript
import { StHYPESDK } from '@sthype/sdk';
import { useWalletClient } from 'wagmi';
import { useMemo, useEffect, useState } from 'react';

function useStHypeSDK(): { sdk: StHYPESDK | null; error: string | null } {
  const { data: walletClient } = useWalletClient();
  
  const sdk = useMemo(() => {
    try {
      return new StHYPESDK({
        network: 'mainnet',
      });
    } catch (err) {
      console.error('SDK initialization error:', err);
      return null;
    }
  }, []);
  
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!sdk) {
      setError('Failed to initialize SDK. Please check your configuration.');
      return;
    }
    
    try {
      if (walletClient) {
        sdk.setWalletClient(walletClient);
        setError(null);
      }
    } catch (err) {
      console.error('Error setting wallet client:', err);
      setError('Failed to connect wallet to SDK.');
    }
  }, [sdk, walletClient]);

  return { sdk, error };
}

// In your React component
function App() {
  const { sdk, error } = useStHypeSDK();
  // Use sdk methods and handle errors...
}
```

Note: The wallet client must be set before calling any methods that require wallet interaction (stake, approveUnstake, unstake).

### Transaction Return Types

All transaction methods in the SDK (`stake`, `unstake`, `approveUnstake`, `redeem`) return a [`TransactionReceipt`](https://viem.sh/docs/glossary/types#transactionreceipt) object from viem. This object contains:

```typescript
interface TransactionReceipt {
  blockHash: `0x${string}`
  blockNumber: bigint
  contractAddress: `0x${string}` | null
  cumulativeGasUsed: bigint
  effectiveGasPrice: bigint
  from: `0x${string}`
  gasUsed: bigint
  logs: Log[]
  logsBloom: `0x${string}`
  status: 'success' | 'reverted'
  to: `0x${string}` | null
  transactionHash: `0x${string}`
  transactionIndex: number
  type: TransactionType
}
```

You can access properties like `transactionHash` to get the transaction hash, or `status` to check if the transaction was successful.

## Features

- Get staking information (balance, APY, total supply, wstHYPE rate)
- Get staking and unstaking quotes
- Stake HYPE tokens
- Unstake stHYPE tokens
- Support for both mainnet and testnet
- TypeScript support
- Error handling with detailed error messages

## API Reference

### Staking Information

#### `getBalancesStHype(walletAddress: string): Promise<bigint>`
Returns the stHYPE balance for a wallet address.

#### `getBalancesWrappedStHype(walletAddress: string): Promise<bigint>`
Returns the wrapped stHYPE (wstHYPE) balance for a wallet address.

#### `getAPY(): Promise<APYInfo>`
Returns the current APY for staking.

```typescript
interface APYInfo {
  apy: number;
}
```

#### `getTotalSupply(): Promise<bigint>`
Returns the total supply of stHYPE tokens.

```typescript
interface WstHypeRateInfo {
  rate: number;
  oneStHype: bigint;
  sharesForOne: bigint;
  decimals: number;
}
```

### Staking Operations

#### `getStakeQuote(amount: bigint): Promise<StakeQuote>`
Returns a quote for staking HYPE tokens.

```typescript
interface StakeQuote {
  inputAmount: bigint;
  outputAmount: bigint;
  ratio: number;
  wstHypeRate: number;
  wstHypeAmount: bigint;
  maxRedeemable: bigint;
}
```

#### `stake(address: string, amount: bigint, communityCode?: string): Promise<TransactionReceipt>`
Stakes HYPE tokens. Requires a connected wallet client.

### Unstaking Operations

#### `getUnstakeQuote(amount: bigint): Promise<UnstakeQuote>`
Returns a quote for unstaking stHYPE tokens.

```typescript
interface UnstakeQuote {
  amount: bigint;
  instantAmount: bigint;
  deferredAmount: bigint;
  maxInstantUnstake: bigint;
}
```

#### `getMaxRedeemable(): Promise<bigint>`
Returns the maximum amount of stHYPE tokens that can be instantly unstaked at the current time. This represents the protocol's available liquidity for instant unstaking.

#### `approveUnstake(amount: bigint): Promise<TransactionReceipt>`
Approves unstaking of stHYPE tokens. Must be called before unstaking. Requires a connected wallet client.

#### `unstake(address: string, amount: bigint, communityCode?: string): Promise<TransactionReceipt>`
Unstakes stHYPE tokens. Requires a connected wallet client and prior approval via `approveUnstake`.

#### `redeem(burnId: bigint): Promise<TransactionReceipt>`
Redeems a specific burn operation when it becomes available for redemption. Requires a connected wallet client.

#### `isRedeemable(burnId: bigint): Promise<boolean>`
Checks if a specific burn is available for redemption.

#### `getBurns(walletAddress: string): Promise<GetBurnsResponse>`
Returns detailed information about user's burn (unstaking) operations with data formatted for easy use.

```typescript
interface GetBurnsResponse {
  burns: DetailedBurn[];        // All burns formatted with additional data
  timestamps: bigint[];         // Original timestamp data
  completionStatus: boolean[];  // Original completion status data
}

interface DetailedBurn {
  amount: bigint;        // Amount of the burn
  user: string;          // Address that will receive the funds
  completed: boolean;    // Whether the burn is completed
  sum: bigint;           // Sum value from the contract
  id: bigint;            // Timestamp of the burn
  redeemable: boolean;   // Whether the burn is redeemable
  address: string;       // Address that requested the burn
  vestedBurn: boolean;   // If true, burn was performed by someone else
}
```

## Error Handling

The SDK uses a custom error class `SDKError` that includes:
- Error message
- Error code

Example error handling:

```typescript
try {
  const balance = await sdk.getBalancesStHype('0x...');
} catch (error) {
  if (error instanceof SDKError) {
    console.error(`Error code: ${error.code}`);
    console.error(`Error message: ${error.message}`);
  }
}
```

## Understanding the Unstaking Process

Unstaking stHYPE tokens involves a process that may not be immediate for all cases:

1. **Instant Unstaking**: A portion of your unstaking request (up to `maxInstantUnstake` or `getMaxRedeemable()`) can be processed immediately.
2. **Deferred Unstaking**: Any amount beyond the instant limit enters a queue as a "burn request".
3. **Burn Requests**: These are tracked on-chain and become redeemable when sufficient liquidity is available.
4. **Redeeming**: Once a burn request becomes redeemable, you must explicitly call the `redeem` function to receive your HYPE.

Each burn request has a unique ID and status that can be tracked using the `getBurns()` and `isRedeemable()` methods. The typical workflow for tracking unstaking is:

1. Call `getBurns(address)` to retrieve all burn requests for an address
2. Filter burns that are not completed
3. For each uncompleted burn, check if it's redeemable
4. Redeem burns that are available
5. Periodically check the status of remaining burns

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Test
npm test

# Lint
npm run lint

# Format
npm run format
```

## License

MIT