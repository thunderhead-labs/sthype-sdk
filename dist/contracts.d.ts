import { GetContractReturnType, PublicClient } from 'viem';
import { ABI_OVERSEER, ABI_STHYPE, ABI_WSTHYPE } from './abis';
interface ReadOnlyContracts {
    overseerContract: GetContractReturnType<typeof ABI_OVERSEER, PublicClient>;
    stHypeContract: GetContractReturnType<typeof ABI_STHYPE, PublicClient>;
    wstHypeContract: GetContractReturnType<typeof ABI_WSTHYPE, PublicClient>;
}
export declare const getReadOnlyContracts: (network: "mainnet" | "testnet", publicClient: PublicClient) => ReadOnlyContracts;
export {};
