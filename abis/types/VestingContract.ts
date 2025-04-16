/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface VestingContractInterface extends utils.Interface {
  functions: {
    "FLIP()": FunctionFragment;
    "addressHolder()": FunctionFragment;
    "claimStProviderRewards(uint256)": FunctionFragment;
    "end()": FunctionFragment;
    "fundStateChainAccount(bytes32,uint256)": FunctionFragment;
    "getBeneficiary()": FunctionFragment;
    "getRevoker()": FunctionFragment;
    "release(address)": FunctionFragment;
    "retrieveRevokedFunds(address)": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "revoked()": FunctionFragment;
    "stTokenStaked()": FunctionFragment;
    "stTokenUnstaked()": FunctionFragment;
    "stakeToStProvider(uint256)": FunctionFragment;
    "transferBeneficiary(address)": FunctionFragment;
    "transferRevoker(address)": FunctionFragment;
    "transferableBeneficiary()": FunctionFragment;
    "unstakeFromStProvider(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FLIP"
      | "addressHolder"
      | "claimStProviderRewards"
      | "end"
      | "fundStateChainAccount"
      | "getBeneficiary"
      | "getRevoker"
      | "release"
      | "retrieveRevokedFunds"
      | "revoke"
      | "revoked"
      | "stTokenStaked"
      | "stTokenUnstaked"
      | "stakeToStProvider"
      | "transferBeneficiary"
      | "transferRevoker"
      | "transferableBeneficiary"
      | "unstakeFromStProvider"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "FLIP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addressHolder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimStProviderRewards",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundStateChainAccount",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRevoker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveRevokedFunds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "revoked", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stTokenStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stTokenUnstaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToStProvider",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferBeneficiary",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRevoker",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferableBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeFromStProvider",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "FLIP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimStProviderRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundStateChainAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRevoker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveRevokedFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revoked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stTokenStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stTokenUnstaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeToStProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRevoker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferableBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeFromStProvider",
    data: BytesLike
  ): Result;

  events: {
    "BeneficiaryTransferred(address,address)": EventFragment;
    "RevokerTransferred(address,address)": EventFragment;
    "TokenVestingRevoked(address,uint256)": EventFragment;
    "TokensReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BeneficiaryTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokerTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenVestingRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensReleased"): EventFragment;
}

export interface BeneficiaryTransferredEventObject {
  oldBeneficiary: string;
  newBeneficiary: string;
}
export type BeneficiaryTransferredEvent = TypedEvent<
  [string, string],
  BeneficiaryTransferredEventObject
>;

export type BeneficiaryTransferredEventFilter =
  TypedEventFilter<BeneficiaryTransferredEvent>;

export interface RevokerTransferredEventObject {
  oldRevoker: string;
  newRevoker: string;
}
export type RevokerTransferredEvent = TypedEvent<
  [string, string],
  RevokerTransferredEventObject
>;

export type RevokerTransferredEventFilter =
  TypedEventFilter<RevokerTransferredEvent>;

export interface TokenVestingRevokedEventObject {
  token: string;
  refund: BigNumber;
}
export type TokenVestingRevokedEvent = TypedEvent<
  [string, BigNumber],
  TokenVestingRevokedEventObject
>;

export type TokenVestingRevokedEventFilter =
  TypedEventFilter<TokenVestingRevokedEvent>;

export interface TokensReleasedEventObject {
  token: string;
  amount: BigNumber;
}
export type TokensReleasedEvent = TypedEvent<
  [string, BigNumber],
  TokensReleasedEventObject
>;

export type TokensReleasedEventFilter = TypedEventFilter<TokensReleasedEvent>;

export interface VestingContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FLIP(overrides?: CallOverrides): Promise<[string]>;

    addressHolder(overrides?: CallOverrides): Promise<[string]>;

    claimStProviderRewards(
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    end(overrides?: CallOverrides): Promise<[BigNumber]>;

    fundStateChainAccount(
      nodeID: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBeneficiary(overrides?: CallOverrides): Promise<[string]>;

    getRevoker(overrides?: CallOverrides): Promise<[string]>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveRevokedFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revoked(overrides?: CallOverrides): Promise<[boolean]>;

    stTokenStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    stTokenUnstaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakeToStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferBeneficiary(
      beneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferRevoker(
      revoker_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferableBeneficiary(overrides?: CallOverrides): Promise<[boolean]>;

    unstakeFromStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  FLIP(overrides?: CallOverrides): Promise<string>;

  addressHolder(overrides?: CallOverrides): Promise<string>;

  claimStProviderRewards(
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  end(overrides?: CallOverrides): Promise<BigNumber>;

  fundStateChainAccount(
    nodeID: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBeneficiary(overrides?: CallOverrides): Promise<string>;

  getRevoker(overrides?: CallOverrides): Promise<string>;

  release(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveRevokedFunds(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revoke(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revoked(overrides?: CallOverrides): Promise<boolean>;

  stTokenStaked(overrides?: CallOverrides): Promise<BigNumber>;

  stTokenUnstaked(overrides?: CallOverrides): Promise<BigNumber>;

  stakeToStProvider(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferBeneficiary(
    beneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferRevoker(
    revoker_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferableBeneficiary(overrides?: CallOverrides): Promise<boolean>;

  unstakeFromStProvider(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FLIP(overrides?: CallOverrides): Promise<string>;

    addressHolder(overrides?: CallOverrides): Promise<string>;

    claimStProviderRewards(
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    end(overrides?: CallOverrides): Promise<BigNumber>;

    fundStateChainAccount(
      nodeID: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getBeneficiary(overrides?: CallOverrides): Promise<string>;

    getRevoker(overrides?: CallOverrides): Promise<string>;

    release(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    retrieveRevokedFunds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revoked(overrides?: CallOverrides): Promise<boolean>;

    stTokenStaked(overrides?: CallOverrides): Promise<BigNumber>;

    stTokenUnstaked(overrides?: CallOverrides): Promise<BigNumber>;

    stakeToStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferBeneficiary(
      beneficiary_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferRevoker(
      revoker_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferableBeneficiary(overrides?: CallOverrides): Promise<boolean>;

    unstakeFromStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "BeneficiaryTransferred(address,address)"(
      oldBeneficiary?: null,
      newBeneficiary?: null
    ): BeneficiaryTransferredEventFilter;
    BeneficiaryTransferred(
      oldBeneficiary?: null,
      newBeneficiary?: null
    ): BeneficiaryTransferredEventFilter;

    "RevokerTransferred(address,address)"(
      oldRevoker?: null,
      newRevoker?: null
    ): RevokerTransferredEventFilter;
    RevokerTransferred(
      oldRevoker?: null,
      newRevoker?: null
    ): RevokerTransferredEventFilter;

    "TokenVestingRevoked(address,uint256)"(
      token?: PromiseOrValue<string> | null,
      refund?: null
    ): TokenVestingRevokedEventFilter;
    TokenVestingRevoked(
      token?: PromiseOrValue<string> | null,
      refund?: null
    ): TokenVestingRevokedEventFilter;

    "TokensReleased(address,uint256)"(
      token?: PromiseOrValue<string> | null,
      amount?: null
    ): TokensReleasedEventFilter;
    TokensReleased(
      token?: PromiseOrValue<string> | null,
      amount?: null
    ): TokensReleasedEventFilter;
  };

  estimateGas: {
    FLIP(overrides?: CallOverrides): Promise<BigNumber>;

    addressHolder(overrides?: CallOverrides): Promise<BigNumber>;

    claimStProviderRewards(
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<BigNumber>;

    fundStateChainAccount(
      nodeID: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    getRevoker(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveRevokedFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revoked(overrides?: CallOverrides): Promise<BigNumber>;

    stTokenStaked(overrides?: CallOverrides): Promise<BigNumber>;

    stTokenUnstaked(overrides?: CallOverrides): Promise<BigNumber>;

    stakeToStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferBeneficiary(
      beneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferRevoker(
      revoker_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferableBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    unstakeFromStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FLIP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressHolder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimStProviderRewards(
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    end(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundStateChainAccount(
      nodeID: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBeneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRevoker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveRevokedFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revoked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stTokenStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stTokenUnstaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakeToStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferBeneficiary(
      beneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferRevoker(
      revoker_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferableBeneficiary(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unstakeFromStProvider(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
