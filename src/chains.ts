import { defineChain, http } from 'viem';

export const hyperliquidMainnet = defineChain({
  id: 999,
  name: 'Hyperliquid',
  network: 'hyperliquid',
  nativeCurrency: {
    decimals: 18,
    name: 'HYPE',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Purrsec',
      url: 'https://purrsec.com',
    },
  },
  testnet: false,
});

export const hyperliquidTestnet = defineChain({
  id: 999,
  name: 'Hyperliquid Testnet',
  network: 'hyperliquid-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'HYPE',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Purrsec',
      url: 'https://purrsec.com',
    },
  },
  testnet: true,
});

export const transportMainnet = http('https://rpc.hyperliquid.xyz/evm');
export const transportTestnet = http('https://rpc.hyperliquid-testnet.xyz/evm');
