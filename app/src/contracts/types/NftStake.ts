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

export interface NftStakeInterface extends utils.Interface {
  functions: {
    "changeTokensPerblock(uint256)": FunctionFragment;
    "daoAdmin()": FunctionFragment;
    "erc20Token()": FunctionFragment;
    "getCurrentStakeEarned(uint256)": FunctionFragment;
    "getStakeContractBalance()": FunctionFragment;
    "getStakedNFTsByOwner(address)": FunctionFragment;
    "harvest(uint256)": FunctionFragment;
    "nftToken()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "ownerToStakedNFTs(address,uint256)": FunctionFragment;
    "receipt(uint256)": FunctionFragment;
    "reclaimTokens()": FunctionFragment;
    "stakeNFT(uint256[])": FunctionFragment;
    "tokensPerBlock()": FunctionFragment;
    "unStakeNFT(uint256)": FunctionFragment;
    "updateStakingReward(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeTokensPerblock"
      | "daoAdmin"
      | "erc20Token"
      | "getCurrentStakeEarned"
      | "getStakeContractBalance"
      | "getStakedNFTsByOwner"
      | "harvest"
      | "nftToken"
      | "onERC721Received"
      | "ownerToStakedNFTs"
      | "receipt"
      | "reclaimTokens"
      | "stakeNFT"
      | "tokensPerBlock"
      | "unStakeNFT"
      | "updateStakingReward"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeTokensPerblock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "daoAdmin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "erc20Token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentStakeEarned",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedNFTsByOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "nftToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerToStakedNFTs",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "receipt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaimTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeNFT",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unStakeNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStakingReward",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeTokensPerblock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "daoAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentStakeEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedNFTsByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerToStakedNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receipt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reclaimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unStakeNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStakingReward",
    data: BytesLike
  ): Result;

  events: {
    "NftStaked(address,uint256,uint256)": EventFragment;
    "NftUnStaked(address,uint256,uint256)": EventFragment;
    "StakePayout(address,uint256,uint256,uint256,uint256)": EventFragment;
    "StakeRewardUpdated(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NftStaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NftUnStaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakePayout"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeRewardUpdated"): EventFragment;
}

export interface NftStakedEventObject {
  staker: string;
  tokenId: BigNumber;
  blockNumber: BigNumber;
}
export type NftStakedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NftStakedEventObject
>;

export type NftStakedEventFilter = TypedEventFilter<NftStakedEvent>;

export interface NftUnStakedEventObject {
  staker: string;
  tokenId: BigNumber;
  blockNumber: BigNumber;
}
export type NftUnStakedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NftUnStakedEventObject
>;

export type NftUnStakedEventFilter = TypedEventFilter<NftUnStakedEvent>;

export interface StakePayoutEventObject {
  staker: string;
  tokenId: BigNumber;
  stakeAmount: BigNumber;
  fromBlock: BigNumber;
  toBlock: BigNumber;
}
export type StakePayoutEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  StakePayoutEventObject
>;

export type StakePayoutEventFilter = TypedEventFilter<StakePayoutEvent>;

export interface StakeRewardUpdatedEventObject {
  rewardPerBlock: BigNumber;
}
export type StakeRewardUpdatedEvent = TypedEvent<
  [BigNumber],
  StakeRewardUpdatedEventObject
>;

export type StakeRewardUpdatedEventFilter =
  TypedEventFilter<StakeRewardUpdatedEvent>;

export interface NftStake extends BaseContract {
  contractName: "NftStake";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NftStakeInterface;

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
    changeTokensPerblock(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    daoAdmin(overrides?: CallOverrides): Promise<[string]>;

    erc20Token(overrides?: CallOverrides): Promise<[string]>;

    getCurrentStakeEarned(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakeContractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakedNFTsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    harvest(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nftToken(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ownerToStakedNFTs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    receipt(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        tokenId: BigNumber;
        stakedFromBlock: BigNumber;
        owner: string;
      }
    >;

    reclaimTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeNFT(
      tokenId: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokensPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    unStakeNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStakingReward(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeTokensPerblock(
    _tokensPerBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  daoAdmin(overrides?: CallOverrides): Promise<string>;

  erc20Token(overrides?: CallOverrides): Promise<string>;

  getCurrentStakeEarned(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakeContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getStakedNFTsByOwner(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  harvest(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nftToken(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ownerToStakedNFTs(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receipt(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      tokenId: BigNumber;
      stakedFromBlock: BigNumber;
      owner: string;
    }
  >;

  reclaimTokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeNFT(
    tokenId: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokensPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  unStakeNFT(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStakingReward(
    _tokensPerBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeTokensPerblock(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    daoAdmin(overrides?: CallOverrides): Promise<string>;

    erc20Token(overrides?: CallOverrides): Promise<string>;

    getCurrentStakeEarned(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getStakedNFTsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    harvest(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    nftToken(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    ownerToStakedNFTs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receipt(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        tokenId: BigNumber;
        stakedFromBlock: BigNumber;
        owner: string;
      }
    >;

    reclaimTokens(overrides?: CallOverrides): Promise<void>;

    stakeNFT(
      tokenId: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokensPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    unStakeNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateStakingReward(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NftStaked(address,uint256,uint256)"(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      blockNumber?: null
    ): NftStakedEventFilter;
    NftStaked(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      blockNumber?: null
    ): NftStakedEventFilter;

    "NftUnStaked(address,uint256,uint256)"(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      blockNumber?: null
    ): NftUnStakedEventFilter;
    NftUnStaked(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      blockNumber?: null
    ): NftUnStakedEventFilter;

    "StakePayout(address,uint256,uint256,uint256,uint256)"(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      stakeAmount?: null,
      fromBlock?: null,
      toBlock?: null
    ): StakePayoutEventFilter;
    StakePayout(
      staker?: PromiseOrValue<string> | null,
      tokenId?: null,
      stakeAmount?: null,
      fromBlock?: null,
      toBlock?: null
    ): StakePayoutEventFilter;

    "StakeRewardUpdated(uint256)"(
      rewardPerBlock?: null
    ): StakeRewardUpdatedEventFilter;
    StakeRewardUpdated(rewardPerBlock?: null): StakeRewardUpdatedEventFilter;
  };

  estimateGas: {
    changeTokensPerblock(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    daoAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    erc20Token(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentStakeEarned(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getStakedNFTsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    harvest(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nftToken(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ownerToStakedNFTs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receipt(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reclaimTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeNFT(
      tokenId: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokensPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    unStakeNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStakingReward(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeTokensPerblock(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    daoAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentStakeEarned(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeContractBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakedNFTsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    harvest(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nftToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ownerToStakedNFTs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receipt(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reclaimTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeNFT(
      tokenId: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokensPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unStakeNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStakingReward(
      _tokensPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}