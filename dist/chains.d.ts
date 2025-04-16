export declare const hyperliquidMainnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Purrsec";
            readonly url: "https://purrsec.com";
        };
    };
    contracts?: {
        [x: string]: import("viem").ChainContract | {
            [sourceId: number]: import("viem").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
        universalSignatureVerifier?: import("viem").ChainContract | undefined;
    } | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 999;
    name: "Hyperliquid";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "HYPE";
        readonly symbol: "HYPE";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hyperliquid.xyz/evm"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    readonly network: "hyperliquid";
};
export declare const hyperliquidTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Purrsec";
            readonly url: "https://purrsec.com";
        };
    };
    contracts?: {
        [x: string]: import("viem").ChainContract | {
            [sourceId: number]: import("viem").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
        universalSignatureVerifier?: import("viem").ChainContract | undefined;
    } | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 999;
    name: "Hyperliquid Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "HYPE";
        readonly symbol: "HYPE";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hyperliquid.xyz/evm"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    readonly network: "hyperliquid-testnet";
};
export declare const transportMainnet: import("viem").HttpTransport<undefined, false>;
export declare const transportTestnet: import("viem").HttpTransport<undefined, false>;
