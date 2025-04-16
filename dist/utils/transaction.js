"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForTransaction = waitForTransaction;
async function waitForTransaction(publicClient, hash) {
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    return receipt;
}
