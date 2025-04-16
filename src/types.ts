import { Address, WalletClient } from 'viem';

export type Network = 'mainnet' | 'testnet';

export type NetworkConfig = {
  NATIVE_TOKEN: `0x${string}`;
  STAKED_TOKEN: `0x${string}`;
  WRAPPED_STAKED_TOKEN: `0x${string}`;
  OVERSEER: `0x${string}`;
  VALANTIS: {
    STEX_AMM: `0x${string}`;
    SOVEREIGN_POOL: `0x${string}`;
    PROTOCOL_FACTORY: `0x${string}`;
  };
};

export type SDKConfig = {
  network?: 'mainnet' | 'testnet';
  walletClient?: WalletClient;
};

export type WriteOperationConfig = {
  walletClient: WalletClient;
};

export class SDKError extends Error {
  constructor(public message: string, public code: string) {
    super(message);
    this.name = 'SDKError';
  }
}

export interface StakeOptions {
  amount: bigint;
  account: Address;
  communityCode?: string;
}

export interface UnstakeOptions {
  amount: bigint;
  account: Address;
  communityCode?: string;
}

export interface ApproveUnstakeOptions {
  amount: bigint;
  account: Address;
}

export interface StakeResult {
  transactionHash: string;
  amount: bigint;
}

export interface UnstakeResult {
  transactionHash: string;
  amount: bigint;
}

export interface ApproveUnstakeResult {
  transactionHash: string;
  amount: bigint;
}

export interface StakingInfo {
  stakedAmount: bigint;
  rewards: bigint;
  lastUpdate: number;
}

export interface BurnInfo {
  to: Address;
  amount: bigint;
  code: string;
  timestamp: number;
}

export interface DetailedBurn {
  amount: bigint;
  user: Address;
  completed: boolean;
  sum: bigint;
  id: bigint;
  redeemable: boolean;
  address: Address;
  vestedBurn: boolean;
}

export interface GetBurnsResponse {
  burns: DetailedBurn[];
  timestamps: bigint[];
  completionStatus: boolean[];
}

export interface StakeQuote {
  inputAmount: bigint;
  outputAmount: bigint;
  ratio: number;
  wstHypeRate: number;
  wstHypeAmount: bigint;
  maxRedeemable: bigint;
}

export interface UnstakeQuote {
  amount: bigint;
  instantAmount: bigint;
  deferredAmount: bigint;
  maxInstantUnstake: bigint;
}

export interface ErrorResponse {
  code: string;
  message: string;
  details?: unknown;
}

export type ApiResponse<T> = { success: true; data: T } | { success: false; error: ErrorResponse };

export interface BalanceInfo {
  balance: bigint;
}

export interface WstHypeRateInfo {
  rate: number;
  decimals: number;
}

export interface APYInfo {
  apy: number;
}

export interface RawBurnData {
  amount: bigint;
  user: `0x${string}`;
  completed: boolean;
  sum: bigint;
}
