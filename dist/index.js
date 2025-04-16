"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StHYPESDK = exports.hyperliquidTestnet = exports.hyperliquidMainnet = void 0;
const viem_1 = require("viem");
const abis_1 = require("./abis");
const chains_1 = require("./chains");
Object.defineProperty(exports, "hyperliquidMainnet", { enumerable: true, get: function () { return chains_1.hyperliquidMainnet; } });
Object.defineProperty(exports, "hyperliquidTestnet", { enumerable: true, get: function () { return chains_1.hyperliquidTestnet; } });
const constants_1 = require("./constants");
const contracts_1 = require("./contracts");
const types_1 = require("./types");
const graphql_1 = require("./utils/graphql");
const transaction_1 = require("./utils/transaction");
class StHYPESDK {
    constructor(config) {
        if (config.network && config.network !== 'mainnet' && config.network !== 'testnet') {
            throw new types_1.SDKError('Network must be either "mainnet" or "testnet"', 'INVALID_NETWORK');
        }
        this.network = config.network === 'testnet' ? 'testnet' : 'mainnet';
        const networkConfig = this.network === 'testnet' ? constants_1.TESTNET : constants_1.MAINNET;
        this.overseerAddress = networkConfig.OVERSEER;
        this.stHypeAddress = networkConfig.STAKED_TOKEN;
        this.publicClient = (0, viem_1.createPublicClient)({
            chain: this.network === 'testnet' ? chains_1.hyperliquidTestnet : chains_1.hyperliquidMainnet,
            transport: this.network === 'testnet' ? chains_1.transportTestnet : chains_1.transportMainnet,
        });
        this.contracts = (0, contracts_1.getReadOnlyContracts)(this.network, this.publicClient);
    }
    setWalletClient(walletClient) {
        this.walletClient = walletClient;
    }
    checkWalletClient() {
        if (!this.walletClient) {
            throw new types_1.SDKError('MISSING_WALLET_CLIENT', 'Wallet client not available');
        }
    }
    getOverseerContract() {
        return this.contracts.overseerContract;
    }
    getStHypeContract() {
        return this.contracts.stHypeContract;
    }
    getWrappedStHypeContract() {
        return this.contracts.wstHypeContract;
    }
    async getStakeQuote(amount) {
        try {
            const stHypeContract = this.getStHypeContract();
            const overseerContract = this.getOverseerContract();
            const oneStHype = BigInt(1e18);
            const [sharesForOne, maxRedeemable] = await Promise.all([
                stHypeContract.read.balanceToShares([oneStHype]),
                overseerContract.read.maxRedeemable(),
            ]);
            const rate = Number(sharesForOne) / 1e18;
            const outputAmount = amount;
            const wstHypeAmount = BigInt(Math.floor(Number(amount) * rate));
            return {
                inputAmount: amount,
                outputAmount,
                ratio: 1,
                wstHypeRate: rate,
                wstHypeAmount,
                maxRedeemable,
            };
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async approveUnstake(amount) {
        this.checkWalletClient();
        try {
            const { request } = await this.publicClient.simulateContract({
                address: this.stHypeAddress,
                abi: abis_1.ABI_STHYPE,
                functionName: 'approve',
                args: [this.overseerAddress, amount],
                account: this.walletClient.account,
            });
            const hash = await this.walletClient.writeContract(request);
            return (0, transaction_1.waitForTransaction)(this.publicClient, hash);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async stake(address, amount, communityCode) {
        this.checkWalletClient();
        try {
            const { request } = await this.publicClient.simulateContract({
                address: this.overseerAddress,
                abi: abis_1.ABI_OVERSEER,
                functionName: 'mint',
                args: [address, communityCode || ''],
                account: this.walletClient.account,
                value: amount,
            });
            const hash = await this.walletClient.writeContract(request);
            return (0, transaction_1.waitForTransaction)(this.publicClient, hash);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async unstake(address, amount, communityCode) {
        this.checkWalletClient();
        try {
            const { request } = await this.publicClient.simulateContract({
                address: this.overseerAddress,
                abi: abis_1.ABI_OVERSEER,
                functionName: 'burnAndRedeemIfPossible',
                args: [address, amount, communityCode || ''],
                account: this.walletClient.account,
            });
            const hash = await this.walletClient.writeContract(request);
            return (0, transaction_1.waitForTransaction)(this.publicClient, hash);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async redeem(burnId) {
        this.checkWalletClient();
        try {
            const contract = this.getOverseerContract();
            const isRedeemable = await contract.read.redeemable([burnId]);
            if (!isRedeemable) {
                throw new types_1.SDKError('Burn is not redeemable yet', 'NOT_REDEEMABLE');
            }
            const { request } = await this.publicClient.simulateContract({
                address: this.overseerAddress,
                abi: abis_1.ABI_OVERSEER,
                functionName: 'redeem',
                args: [burnId],
                account: this.walletClient.account,
            });
            const hash = await this.walletClient.writeContract(request);
            return (0, transaction_1.waitForTransaction)(this.publicClient, hash);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async isRedeemable(burnId) {
        try {
            const contract = this.getOverseerContract();
            return contract.read.redeemable([burnId]);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getMaxRedeemable() {
        try {
            const contract = this.getOverseerContract();
            return contract.read.maxRedeemable();
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getBalancesStHype(walletAddress) {
        try {
            const contract = this.getStHypeContract();
            const balance = await contract.read.balanceOf([walletAddress]);
            return balance;
        }
        catch (error) {
            throw new types_1.SDKError('BALANCE_READ_FAILED', `Failed to read balance: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    async getBalancesWrappedStHype(walletAddress) {
        try {
            const contract = this.getWrappedStHypeContract();
            const balance = await contract.read.balanceOf([walletAddress]);
            return balance;
        }
        catch (error) {
            throw new types_1.SDKError('BALANCE_READ_FAILED', `Failed to read wrapped balance: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    async getUnstakeQuote(amount) {
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
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getTotalSupply() {
        try {
            const contract = this.getStHypeContract();
            const totalSupply = await contract.read.totalSupply();
            return totalSupply;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getAPY() {
        try {
            const query = `
        query MyQuery {
          statsAtRebases {
            apr
          }
        }
      `;
            const data = await (0, graphql_1.graphqlRequest)(constants_1.GRAPHQL_URL_INDEXER, query);
            const apy = data.statsAtRebases.apr;
            if (apy === undefined) {
                throw new types_1.SDKError('APY data not found in response', 'MISSING_APY_DATA');
            }
            return {
                apy,
            };
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getBurns(walletAddress) {
        try {
            const contract = this.getOverseerContract();
            const response = await contract.read.getBurns([walletAddress]);
            const rawBurns = response[0];
            const burnIds = response[1];
            const burnRedeemableStatus = response[2];
            const formattedBurns = rawBurns.map((burn, index) => ({
                ...burn,
                id: burnIds[index],
                redeemable: burnRedeemableStatus[index],
                address: walletAddress,
                vestedBurn: walletAddress !== burn.user,
            }));
            return {
                burns: formattedBurns,
                timestamps: burnIds,
                completionStatus: burnRedeemableStatus,
            };
        }
        catch (error) {
            this.handleError(error);
        }
    }
    handleError(error) {
        if (error instanceof types_1.SDKError) {
            throw error;
        }
        if (error instanceof Error) {
            throw new types_1.SDKError(error.message, 'UNKNOWN_ERROR');
        }
        throw new types_1.SDKError('An unknown error occurred', 'UNKNOWN_ERROR');
    }
}
exports.StHYPESDK = StHYPESDK;
