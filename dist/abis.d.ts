export declare const ABI_OVERSEER: readonly [{
    readonly type: "function";
    readonly name: "maxRedeemable";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "burnAndRedeemIfPossible";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "to";
    }, {
        readonly type: "uint256";
        readonly name: "amount";
    }, {
        readonly type: "string";
        readonly name: "communityCode";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "mint";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "to";
    }, {
        readonly type: "string";
        readonly name: "communityCode";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "getBurns";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "account";
    }];
    readonly outputs: readonly [{
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "amount";
            readonly type: "uint88";
        }, {
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly name: "completed";
            readonly type: "bool";
        }, {
            readonly name: "sum";
            readonly type: "uint256";
        }];
    }, {
        readonly type: "uint256[]";
    }, {
        readonly type: "bool[]";
    }];
}, {
    readonly type: "function";
    readonly name: "redeem";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "burnId";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "redeemable";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "burnId";
    }];
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}];
export declare const ABI_STHYPE: readonly [{
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "who";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "balanceToShares";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "amount";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "sharesToBalance";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "shares";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "spender";
    }, {
        readonly type: "uint256";
        readonly name: "value";
    }];
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}];
export declare const ABI_WSTHYPE: readonly [{
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "who";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}];
