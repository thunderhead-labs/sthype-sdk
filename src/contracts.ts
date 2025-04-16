import { getContract, GetContractReturnType, PublicClient } from 'viem';
import { ABI_OVERSEER, ABI_STHYPE, ABI_WSTHYPE } from './abis';
import { MAINNET, TESTNET } from './constants';

interface ReadOnlyContracts {
  overseerContract: GetContractReturnType<typeof ABI_OVERSEER, PublicClient>;
  stHypeContract: GetContractReturnType<typeof ABI_STHYPE, PublicClient>;
  wstHypeContract: GetContractReturnType<typeof ABI_WSTHYPE, PublicClient>;
}

export const getReadOnlyContracts = (network: 'mainnet' | 'testnet', publicClient: PublicClient): ReadOnlyContracts => {
  const config = network === 'testnet' ? TESTNET : MAINNET;

  const overseerContract = getContract({
    address: config.OVERSEER,
    abi: ABI_OVERSEER,
    client: publicClient,
  });

  const stHypeContract = getContract({
    address: config.STAKED_TOKEN,
    abi: ABI_STHYPE,
    client: publicClient,
  });

  const wstHypeContract = getContract({
    address: config.WRAPPED_STAKED_TOKEN,
    abi: ABI_WSTHYPE,
    client: publicClient,
  });

  return {
    overseerContract,
    stHypeContract,
    wstHypeContract,
  };
};
