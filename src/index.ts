import { createPublicClient, PublicClient, TransactionReceipt, WalletClient } from 'viem';
import { ABI_OVERSEER, ABI_STHYPE } from './abis';
import { hyperliquidMainnet, hyperliquidTestnet, transportMainnet, transportTestnet } from './chains';
import { GRAPHQL_URL_INDEXER, MAINNET, TESTNET } from './constants';
import { getReadOnlyContracts } from './contracts';
import {
  APYInfo,
  DetailedBurn,
  GetBurnsResponse,
  RawBurnData,
  SDKConfig,
  SDKError,
  StakeQuote,
  UnstakeQuote,
} from './types';
import { graphqlRequest } from './utils/graphql';
import { waitForTransaction } from './utils/transaction';

export { hyperliquidMainnet, hyperliquidTestnet };

export class StHYPESDK {
  private overseerAddress: `0x${string}`;
  private stHypeAddress: `0x${string}`;
  private publicClient: PublicClient;
  private network: 'mainnet' | 'testnet';
  private walletClient?: WalletClient;
  private contracts: ReturnType<typeof getReadOnlyContracts>;

  constructor(config: SDKConfig) {
    if (config.network && config.network !== 'mainnet' && config.network !== 'testnet') {
      throw new SDKError('Network must be either "mainnet" or "testnet"', 'INVALID_NETWORK');
    }

    this.network = config.network === 'testnet' ? 'testnet' : 'mainnet';
    const networkConfig = this.network === 'testnet' ? TESTNET : MAINNET;
    this.overseerAddress = networkConfig.OVERSEER;
    this.stHypeAddress = networkConfig.STAKED_TOKEN;
    this.publicClient = createPublicClient({
      chain: this.network === 'testnet' ? hyperliquidTestnet : hyperliquidMainnet,
      transport: this.network === 'testnet' ? transportTestnet : transportMainnet,
    });

    this.contracts = getReadOnlyContracts(this.network, this.publicClient);
  }

  public setWalletClient(walletClient: WalletClient): void {
    this.walletClient = walletClient;
  }

  private checkWalletClient(): void {
    if (!this.walletClient) {
      throw new SDKError('MISSING_WALLET_CLIENT', 'Wallet client not available');
    }
  }

  private getOverseerContract(): ReturnType<typeof getReadOnlyContracts>['overseerContract'] {
    return this.contracts.overseerContract;
  }

  private getStHypeContract(): ReturnType<typeof getReadOnlyContracts>['stHypeContract'] {
    return this.contracts.stHypeContract;
  }

  private getWrappedStHypeContract(): ReturnType<typeof getReadOnlyContracts>['wstHypeContract'] {
    return this.contracts.wstHypeContract;
  }

  public async getStakeQuote(amount: bigint): Promise<StakeQuote> {
    try {
      const overseerContract = this.getOverseerContract();
      const [maxRedeemable] = await Promise.all([overseerContract.read.maxRedeemable() as Promise<bigint>]);
      const instantAmount = amount <= maxRedeemable ? amount : maxRedeemable;
      const deferredAmount = amount > maxRedeemable ? amount - maxRedeemable : BigInt(0);
      const outputAmount = amount;

      return {
        inputAmount: amount,
        outputAmount,
        instantAmount,
        deferredAmount,
        maxInstantUnstake: maxRedeemable,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  public async approveUnstake(amount: bigint): Promise<TransactionReceipt> {
    this.checkWalletClient();
    try {
      const { request } = await this.publicClient.simulateContract({
        address: this.stHypeAddress,
        abi: ABI_STHYPE,
        functionName: 'approve',
        args: [this.overseerAddress, amount],
        account: this.walletClient!.account,
      });

      const hash = await this.walletClient!.writeContract(request);
      return waitForTransaction(this.publicClient, hash);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async stake(address: `0x${string}`, amount: bigint, communityCode?: string): Promise<TransactionReceipt> {
    this.checkWalletClient();
    try {
      const { request } = await this.publicClient.simulateContract({
        address: this.overseerAddress,
        abi: ABI_OVERSEER,
        functionName: 'mint',
        args: [address, communityCode || ''],
        account: this.walletClient!.account,
        value: amount,
      });

      const hash = await this.walletClient!.writeContract(request);
      return waitForTransaction(this.publicClient, hash);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async unstake(address: `0x${string}`, amount: bigint, communityCode?: string): Promise<TransactionReceipt> {
    this.checkWalletClient();
    try {
      const { request } = await this.publicClient.simulateContract({
        address: this.overseerAddress,
        abi: ABI_OVERSEER,
        functionName: 'burnAndRedeemIfPossible',
        args: [address, amount, communityCode || ''],
        account: this.walletClient!.account,
      });

      const hash = await this.walletClient!.writeContract(request);
      return waitForTransaction(this.publicClient, hash);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async redeem(burnId: bigint): Promise<TransactionReceipt> {
    this.checkWalletClient();
    try {
      const contract = this.getOverseerContract();
      const isRedeemable = await contract.read.redeemable([burnId]);

      if (!isRedeemable) {
        throw new SDKError('Burn is not redeemable yet', 'NOT_REDEEMABLE');
      }

      const { request } = await this.publicClient.simulateContract({
        address: this.overseerAddress,
        abi: ABI_OVERSEER,
        functionName: 'redeem',
        args: [burnId],
        account: this.walletClient!.account,
      });

      const hash = await this.walletClient!.writeContract(request);
      return waitForTransaction(this.publicClient, hash);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async isRedeemable(burnId: bigint): Promise<boolean> {
    try {
      const contract = this.getOverseerContract();
      return contract.read.redeemable([burnId]);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getMaxRedeemable(): Promise<bigint> {
    try {
      const contract = this.getOverseerContract();
      return contract.read.maxRedeemable() as Promise<bigint>;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getBalancesStHype(walletAddress: string): Promise<bigint> {
    try {
      const contract = this.getStHypeContract();
      const balance = await contract.read.balanceOf([walletAddress as `0x${string}`]);
      return balance;
    } catch (error) {
      throw new SDKError(
        'BALANCE_READ_FAILED',
        `Failed to read balance: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  async getBalancesWrappedStHype(walletAddress: string): Promise<bigint> {
    try {
      const contract = this.getWrappedStHypeContract();
      const balance = await contract.read.balanceOf([walletAddress as `0x${string}`]);
      return balance;
    } catch (error) {
      throw new SDKError(
        'BALANCE_READ_FAILED',
        `Failed to read wrapped balance: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  public async getUnstakeQuote(amount: bigint): Promise<UnstakeQuote> {
    try {
      const contract = this.getOverseerContract();
      const maxInstantUnstake = await contract.read.maxRedeemable();
      const instantAmount = amount <= maxInstantUnstake ? amount : maxInstantUnstake;
      const deferredAmount = amount > maxInstantUnstake ? amount - maxInstantUnstake : BigInt(0);

      return {
        amount,
        instantAmount,
        deferredAmount,
        maxInstantUnstake,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getTotalSupply(): Promise<bigint> {
    try {
      const contract = this.getStHypeContract();
      const totalSupply = await contract.read.totalSupply();
      return totalSupply;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getAPY(): Promise<APYInfo> {
    try {
      const query = `
        query MyQuery {
          statsAtRebases {
            apr
          }
        }
      `;

      const data = await graphqlRequest<{ statsAtRebases: { apr: number } }>(GRAPHQL_URL_INDEXER, query);
      const apy = data.statsAtRebases.apr;
      if (apy === undefined) {
        throw new SDKError('APY data not found in response', 'MISSING_APY_DATA');
      }

      return {
        apy,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getBurns(walletAddress: `0x${string}`): Promise<GetBurnsResponse> {
    try {
      const contract = this.getOverseerContract();
      const response = await contract.read.getBurns([walletAddress]);
      const rawBurns = response[0] as RawBurnData[];
      const burnIds = response[1];
      const burnRedeemableStatus = response[2];
      const formattedBurns = rawBurns.map((burn: RawBurnData, index: number) => ({
        ...burn,
        id: burnIds[index],
        redeemable: burnRedeemableStatus[index],
        address: walletAddress,
        vestedBurn: walletAddress !== burn.user,
      })) as DetailedBurn[];

      return {
        burns: formattedBurns,
        timestamps: burnIds as bigint[],
        completionStatus: burnRedeemableStatus as boolean[],
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (error instanceof SDKError) {
      throw error;
    }

    if (error instanceof Error) {
      throw new SDKError(error.message, 'UNKNOWN_ERROR');
    }

    throw new SDKError('An unknown error occurred', 'UNKNOWN_ERROR');
  }
}
