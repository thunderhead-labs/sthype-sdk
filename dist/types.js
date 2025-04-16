"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKError = void 0;
class SDKError extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = 'SDKError';
    }
}
exports.SDKError = SDKError;
