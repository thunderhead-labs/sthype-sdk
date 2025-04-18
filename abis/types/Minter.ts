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

export interface MinterInterface extends utils.Interface {
  functions: {
    "_acceptGov()": FunctionFragment;
    "_setOutput(address)": FunctionFragment;
    "_setPendingGov(address)": FunctionFragment;
    "flip()": FunctionFragment;
    "gov()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "output()": FunctionFragment;
    "pendingGov()": FunctionFragment;
    "stflip()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acceptGov"
      | "_setOutput"
      | "_setPendingGov"
      | "flip"
      | "gov"
      | "mint"
      | "output"
      | "pendingGov"
      | "stflip"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_acceptGov",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_setOutput",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_setPendingGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "flip", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "output", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stflip", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_acceptGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_setOutput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_setPendingGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "output", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stflip", data: BytesLike): Result;

  events: {
    "Mint(address,uint256)": EventFragment;
    "NewGov(address,address)": EventFragment;
    "NewPendingGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewGov"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingGov"): EventFragment;
}

export interface MintEventObject {
  to: string;
  amount: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface NewGovEventObject {
  oldGov: string;
  newGov: string;
}
export type NewGovEvent = TypedEvent<[string, string], NewGovEventObject>;

export type NewGovEventFilter = TypedEventFilter<NewGovEvent>;

export interface NewPendingGovEventObject {
  oldPendingGov: string;
  newPendingGov: string;
}
export type NewPendingGovEvent = TypedEvent<
  [string, string],
  NewPendingGovEventObject
>;

export type NewPendingGovEventFilter = TypedEventFilter<NewPendingGovEvent>;

export interface Minter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MinterInterface;

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
    _acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _setOutput(
      output_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _setPendingGov(
      pendingGov_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flip(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    output(overrides?: CallOverrides): Promise<[string]>;

    pendingGov(overrides?: CallOverrides): Promise<[string]>;

    stflip(overrides?: CallOverrides): Promise<[string]>;
  };

  _acceptGov(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _setOutput(
    output_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _setPendingGov(
    pendingGov_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flip(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  mint(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  output(overrides?: CallOverrides): Promise<string>;

  pendingGov(overrides?: CallOverrides): Promise<string>;

  stflip(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _acceptGov(overrides?: CallOverrides): Promise<void>;

    _setOutput(
      output_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    _setPendingGov(
      pendingGov_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    flip(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    output(overrides?: CallOverrides): Promise<string>;

    pendingGov(overrides?: CallOverrides): Promise<string>;

    stflip(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Mint(address,uint256)"(to?: null, amount?: null): MintEventFilter;
    Mint(to?: null, amount?: null): MintEventFilter;

    "NewGov(address,address)"(oldGov?: null, newGov?: null): NewGovEventFilter;
    NewGov(oldGov?: null, newGov?: null): NewGovEventFilter;

    "NewPendingGov(address,address)"(
      oldPendingGov?: null,
      newPendingGov?: null
    ): NewPendingGovEventFilter;
    NewPendingGov(
      oldPendingGov?: null,
      newPendingGov?: null
    ): NewPendingGovEventFilter;
  };

  estimateGas: {
    _acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _setOutput(
      output_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _setPendingGov(
      pendingGov_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flip(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    output(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGov(overrides?: CallOverrides): Promise<BigNumber>;

    stflip(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _setOutput(
      output_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _setPendingGov(
      pendingGov_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flip(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    output(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stflip(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
