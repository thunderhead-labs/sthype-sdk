import { type Abi } from 'viem';

export const ABI_OVERSEER = [
  {
    type: 'function',
    name: 'maxRedeemable',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'burnAndRedeemIfPossible',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: 'to' },
      { type: 'uint256', name: 'amount' },
      { type: 'string', name: 'communityCode' },
    ],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'mint',
    stateMutability: 'payable',
    inputs: [
      { type: 'address', name: 'to' },
      { type: 'string', name: 'communityCode' },
    ],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'getBurns',
    stateMutability: 'view',
    inputs: [{ type: 'address', name: 'account' }],
    outputs: [
      {
        type: 'tuple[]',
        components: [
          { name: 'amount', type: 'uint88' },
          { name: 'user', type: 'address' },
          { name: 'completed', type: 'bool' },
          { name: 'sum', type: 'uint256' },
        ],
      },
      { type: 'uint256[]' },
      { type: 'bool[]' },
    ],
  },
  {
    type: 'function',
    name: 'redeem',
    stateMutability: 'nonpayable',
    inputs: [{ type: 'uint256', name: 'burnId' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'redeemable',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'burnId' }],
    outputs: [{ type: 'bool' }],
  },
] as const satisfies Abi;

export const ABI_STHYPE = [
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ type: 'address', name: 'who' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'balanceToShares',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'amount' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'sharesToBalance',
    stateMutability: 'view',
    inputs: [{ type: 'uint256', name: 'shares' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'approve',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: 'spender' },
      { type: 'uint256', name: 'value' },
    ],
    outputs: [{ type: 'bool' }],
  },
] as const satisfies Abi;

export const ABI_WSTHYPE = [
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ type: 'address', name: 'who' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'decimals',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint8' }],
  },
] as const satisfies Abi;
