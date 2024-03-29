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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface EGGSBurnLeaderboardInterface extends utils.Interface {
  functions: {
    "burnTokens(uint256)": FunctionFragment;
    "burnedTokens(address)": FunctionFragment;
    "eggsToken()": FunctionFragment;
    "getBurnerAtIndex(uint256)": FunctionFragment;
    "getBurnerCount()": FunctionFragment;
    "getTopBurners(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnTokens"
      | "burnedTokens"
      | "eggsToken"
      | "getBurnerAtIndex"
      | "getBurnerCount"
      | "getTopBurners"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "burnedTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "eggsToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBurnerAtIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBurnerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTopBurners",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "burnTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eggsToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBurnerAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBurnerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTopBurners",
    data: BytesLike
  ): Result;

  events: {};
}

export interface EGGSBurnLeaderboard extends BaseContract {
  contractName: "EGGSBurnLeaderboard";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EGGSBurnLeaderboardInterface;

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
    burnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    eggsToken(overrides?: CallOverrides): Promise<[string]>;

    getBurnerAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBurnerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTopBurners(
      top: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;
  };

  burnTokens(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnedTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  eggsToken(overrides?: CallOverrides): Promise<string>;

  getBurnerAtIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getBurnerCount(overrides?: CallOverrides): Promise<BigNumber>;

  getTopBurners(
    top: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  callStatic: {
    burnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    burnedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eggsToken(overrides?: CallOverrides): Promise<string>;

    getBurnerAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getBurnerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTopBurners(
      top: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    burnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eggsToken(overrides?: CallOverrides): Promise<BigNumber>;

    getBurnerAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBurnerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTopBurners(
      top: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eggsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBurnerAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBurnerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTopBurners(
      top: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
