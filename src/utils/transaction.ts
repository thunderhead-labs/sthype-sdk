import { type Hash, type PublicClient, type TransactionReceipt } from 'viem';

export async function waitForTransaction(publicClient: PublicClient, hash: Hash): Promise<TransactionReceipt> {
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  return receipt;
}
