"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportTestnet = exports.transportMainnet = exports.hyperliquidTestnet = exports.hyperliquidMainnet = void 0;
const viem_1 = require("viem");
exports.hyperliquidMainnet = (0, viem_1.defineChain)({
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
exports.hyperliquidTestnet = (0, viem_1.defineChain)({
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
exports.transportMainnet = (0, viem_1.http)('https://rpc.hyperliquid.xyz/evm');
exports.transportTestnet = (0, viem_1.http)('https://rpc.hyperliquid-testnet.xyz/evm');
