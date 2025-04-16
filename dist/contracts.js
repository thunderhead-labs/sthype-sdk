"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadOnlyContracts = void 0;
const viem_1 = require("viem");
const abis_1 = require("./abis");
const constants_1 = require("./constants");
const getReadOnlyContracts = (network, publicClient) => {
    const config = network === 'testnet' ? constants_1.TESTNET : constants_1.MAINNET;
    const overseerContract = (0, viem_1.getContract)({
        address: config.OVERSEER,
        abi: abis_1.ABI_OVERSEER,
        client: publicClient,
    });
    const stHypeContract = (0, viem_1.getContract)({
        address: config.STAKED_TOKEN,
        abi: abis_1.ABI_STHYPE,
        client: publicClient,
    });
    const wstHypeContract = (0, viem_1.getContract)({
        address: config.WRAPPED_STAKED_TOKEN,
        abi: abis_1.ABI_WSTHYPE,
        client: publicClient,
    });
    return {
        overseerContract,
        stHypeContract,
        wstHypeContract,
    };
};
exports.getReadOnlyContracts = getReadOnlyContracts;
