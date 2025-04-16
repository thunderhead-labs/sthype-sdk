import { type Hash, type PublicClient, type TransactionReceipt } from 'viem';
export declare function waitForTransaction(publicClient: PublicClient, hash: Hash): Promise<TransactionReceipt>;
