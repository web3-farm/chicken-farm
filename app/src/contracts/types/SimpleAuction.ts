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
  PayableOverrides,
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

export interface SimpleAuctionInterface extends utils.Interface {
  functions: {
    "InitializeAuction(address,uint256,uint256,uint32)": FunctionFragment;
    "activeAuctions(uint256)": FunctionFragment;
    "getActiveAuctions()": FunctionFragment;
    "getAmountFundedByAnAddress(address,uint256,address)": FunctionFragment;
    "getBeginningPriceOfTheNft(address,uint256)": FunctionFragment;
    "getBidOfAnAddress(address,uint256,address)": FunctionFragment;
    "getCurrentWinner(address,uint256)": FunctionFragment;
    "getIntervalOfNftAuction(address,uint256)": FunctionFragment;
    "getSellerOfTheNft(address,uint256)": FunctionFragment;
    "getSpecificAddress(address,uint256,uint256)": FunctionFragment;
    "getStartingTimeOfAuction(address,uint256)": FunctionFragment;
    "getStateOfAuction(address,uint256)": FunctionFragment;
    "getTemporaryHighestBid(address,uint256)": FunctionFragment;
    "makeBid(address,uint256)": FunctionFragment;
    "nftContractAuctions(address,uint256)": FunctionFragment;
    "receiveNft(address,uint256)": FunctionFragment;
    "withdrawNft(address,uint256)": FunctionFragment;
    "withdrawWinningBid(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "InitializeAuction"
      | "activeAuctions"
      | "getActiveAuctions"
      | "getAmountFundedByAnAddress"
      | "getBeginningPriceOfTheNft"
      | "getBidOfAnAddress"
      | "getCurrentWinner"
      | "getIntervalOfNftAuction"
      | "getSellerOfTheNft"
      | "getSpecificAddress"
      | "getStartingTimeOfAuction"
      | "getStateOfAuction"
      | "getTemporaryHighestBid"
      | "makeBid"
      | "nftContractAuctions"
      | "receiveNft"
      | "withdrawNft"
      | "withdrawWinningBid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "InitializeAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "activeAuctions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountFundedByAnAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getBeginningPriceOfTheNft",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBidOfAnAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentWinner",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntervalOfNftAuction",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellerOfTheNft",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpecificAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getStartingTimeOfAuction",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStateOfAuction",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTemporaryHighestBid",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeBid",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nftContractAuctions",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNft",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNft",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawWinningBid",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "InitializeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountFundedByAnAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeginningPriceOfTheNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBidOfAnAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntervalOfNftAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellerOfTheNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSpecificAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStartingTimeOfAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStateOfAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTemporaryHighestBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftContractAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawWinningBid",
    data: BytesLike
  ): Result;

  events: {
    "AuctionInitialized(address,uint256,address,uint256,uint32)": EventFragment;
    "BidMade(address,uint256,address,uint256)": EventFragment;
    "ReceiveWinningBidAfterAuction(address,uint256,address,uint256)": EventFragment;
    "WinNftAfterAuction(address,uint256,address,uint256)": EventFragment;
    "WithdrawNftAfterAuctionUnsuccesful(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidMade"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReceiveWinningBidAfterAuction"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinNftAfterAuction"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WithdrawNftAfterAuctionUnsuccesful"
  ): EventFragment;
}

export interface AuctionInitializedEventObject {
  nftAdress: string;
  tokenId: BigNumber;
  nftSellerAdress: string;
  minprice: BigNumber;
  interval: number;
}
export type AuctionInitializedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, number],
  AuctionInitializedEventObject
>;

export type AuctionInitializedEventFilter =
  TypedEventFilter<AuctionInitializedEvent>;

export interface BidMadeEventObject {
  nftAdress: string;
  tokenId: BigNumber;
  bidMakerAddress: string;
  price: BigNumber;
}
export type BidMadeEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  BidMadeEventObject
>;

export type BidMadeEventFilter = TypedEventFilter<BidMadeEvent>;

export interface ReceiveWinningBidAfterAuctionEventObject {
  nftAdress: string;
  tokenId: BigNumber;
  nftsellerAddress: string;
  winningBid: BigNumber;
}
export type ReceiveWinningBidAfterAuctionEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  ReceiveWinningBidAfterAuctionEventObject
>;

export type ReceiveWinningBidAfterAuctionEventFilter =
  TypedEventFilter<ReceiveWinningBidAfterAuctionEvent>;

export interface WinNftAfterAuctionEventObject {
  nftAdress: string;
  tokenId: BigNumber;
  nftWinnerAddress: string;
  finalPrice: BigNumber;
}
export type WinNftAfterAuctionEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  WinNftAfterAuctionEventObject
>;

export type WinNftAfterAuctionEventFilter =
  TypedEventFilter<WinNftAfterAuctionEvent>;

export interface WithdrawNftAfterAuctionUnsuccesfulEventObject {
  nftAdress: string;
  tokenId: BigNumber;
  nftsellerAddress: string;
}
export type WithdrawNftAfterAuctionUnsuccesfulEvent = TypedEvent<
  [string, BigNumber, string],
  WithdrawNftAfterAuctionUnsuccesfulEventObject
>;

export type WithdrawNftAfterAuctionUnsuccesfulEventFilter =
  TypedEventFilter<WithdrawNftAfterAuctionUnsuccesfulEvent>;

export interface SimpleAuction extends BaseContract {
  contractName: "SimpleAuction";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleAuctionInterface;

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
    InitializeAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _minPrice: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    activeAuctions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getActiveAuctions(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getAmountFundedByAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBeginningPriceOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBidOfAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentWinner(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getIntervalOfNftAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getSellerOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSpecificAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStartingTimeOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStateOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getTemporaryHighestBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    makeBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nftContractAuctions(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, string, string, boolean] & {
        i_interval: number;
        minPrice: BigNumber;
        s_lastTimeStamp: BigNumber;
        temporaryHighestBid: BigNumber;
        currentWinner: string;
        nftSeller: string;
        auctionStarted: boolean;
      }
    >;

    receiveNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawWinningBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  InitializeAuction(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _minPrice: PromiseOrValue<BigNumberish>,
    interval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  activeAuctions(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getActiveAuctions(overrides?: CallOverrides): Promise<BigNumber[]>;

  getAmountFundedByAnAddress(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBeginningPriceOfTheNft(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBidOfAnAddress(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentWinner(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getIntervalOfNftAuction(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getSellerOfTheNft(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSpecificAddress(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getStartingTimeOfAuction(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStateOfAuction(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getTemporaryHighestBid(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  makeBid(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nftContractAuctions(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, BigNumber, string, string, boolean] & {
      i_interval: number;
      minPrice: BigNumber;
      s_lastTimeStamp: BigNumber;
      temporaryHighestBid: BigNumber;
      currentWinner: string;
      nftSeller: string;
      auctionStarted: boolean;
    }
  >;

  receiveNft(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawNft(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawWinningBid(
    _nftContractAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    InitializeAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _minPrice: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    activeAuctions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActiveAuctions(overrides?: CallOverrides): Promise<BigNumber[]>;

    getAmountFundedByAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBeginningPriceOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBidOfAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentWinner(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getIntervalOfNftAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getSellerOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSpecificAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getStartingTimeOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStateOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getTemporaryHighestBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    nftContractAuctions(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, string, string, boolean] & {
        i_interval: number;
        minPrice: BigNumber;
        s_lastTimeStamp: BigNumber;
        temporaryHighestBid: BigNumber;
        currentWinner: string;
        nftSeller: string;
        auctionStarted: boolean;
      }
    >;

    receiveNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawWinningBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuctionInitialized(address,uint256,address,uint256,uint32)"(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftSellerAdress?: PromiseOrValue<string> | null,
      minprice?: null,
      interval?: null
    ): AuctionInitializedEventFilter;
    AuctionInitialized(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftSellerAdress?: PromiseOrValue<string> | null,
      minprice?: null,
      interval?: null
    ): AuctionInitializedEventFilter;

    "BidMade(address,uint256,address,uint256)"(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      bidMakerAddress?: PromiseOrValue<string> | null,
      price?: null
    ): BidMadeEventFilter;
    BidMade(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      bidMakerAddress?: PromiseOrValue<string> | null,
      price?: null
    ): BidMadeEventFilter;

    "ReceiveWinningBidAfterAuction(address,uint256,address,uint256)"(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftsellerAddress?: PromiseOrValue<string> | null,
      winningBid?: null
    ): ReceiveWinningBidAfterAuctionEventFilter;
    ReceiveWinningBidAfterAuction(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftsellerAddress?: PromiseOrValue<string> | null,
      winningBid?: null
    ): ReceiveWinningBidAfterAuctionEventFilter;

    "WinNftAfterAuction(address,uint256,address,uint256)"(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftWinnerAddress?: PromiseOrValue<string> | null,
      finalPrice?: null
    ): WinNftAfterAuctionEventFilter;
    WinNftAfterAuction(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftWinnerAddress?: PromiseOrValue<string> | null,
      finalPrice?: null
    ): WinNftAfterAuctionEventFilter;

    "WithdrawNftAfterAuctionUnsuccesful(address,uint256,address)"(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftsellerAddress?: PromiseOrValue<string> | null
    ): WithdrawNftAfterAuctionUnsuccesfulEventFilter;
    WithdrawNftAfterAuctionUnsuccesful(
      nftAdress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      nftsellerAddress?: PromiseOrValue<string> | null
    ): WithdrawNftAfterAuctionUnsuccesfulEventFilter;
  };

  estimateGas: {
    InitializeAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _minPrice: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    activeAuctions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActiveAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountFundedByAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBeginningPriceOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBidOfAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentWinner(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervalOfNftAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellerOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpecificAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStartingTimeOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStateOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTemporaryHighestBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nftContractAuctions(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawWinningBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    InitializeAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _minPrice: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    activeAuctions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActiveAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountFundedByAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBeginningPriceOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBidOfAnAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentWinner(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntervalOfNftAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellerOfTheNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSpecificAddress(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStartingTimeOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStateOfAuction(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTemporaryHighestBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nftContractAuctions(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawNft(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawWinningBid(
      _nftContractAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
