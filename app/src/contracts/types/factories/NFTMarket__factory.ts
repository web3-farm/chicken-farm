/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NFTMarket, NFTMarketInterface } from "../NFTMarket";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "createMarketSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchItemsCreated",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060045534801561001557600080fd5b50600160008190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506118618061006e6000396000f3fe6080604052600436106100555760003560e01c80630f08efe01461005a57806312e8558514610085578063202e3740146100b057806358eb2df5146100db578063c23b139e146100f7578063f064c32e14610113575b600080fd5b34801561006657600080fd5b5061006f61013e565b60405161007c919061130b565b60405180910390f35b34801561009157600080fd5b5061009a610407565b6040516100a7919061133c565b60405180910390f35b3480156100bc57600080fd5b506100c5610411565b6040516100d2919061130b565b60405180910390f35b6100f560048036038101906100f091906113b4565b61075d565b005b610111600480360381019061010c9190611407565b610a7b565b005b34801561011f57600080fd5b50610128610cee565b604051610135919061130b565b60405180910390f35b6060600061014c600161103a565b9050600061015a600261103a565b610164600161103a565b61016e9190611476565b90506000808267ffffffffffffffff81111561018d5761018c6114aa565b5b6040519080825280602002602001820160405280156101c657816020015b6101b36110b7565b8152602001906001900390816101ab5790505b50905060005b848110156103fc57600073ffffffffffffffffffffffffffffffffffffffff16600560006001846101fd91906114d9565b815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036103e957600060018261025991906114d9565b90506000600560008381526020019081526020016000209050806040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff1615151515815250508486815181106103cc576103cb61150d565b5b60200260200101819052506001856103e491906114d9565b945050505b80806103f49061153c565b9150506101cc565b508094505050505090565b6000600454905090565b6060600061041f600161103a565b905060008060005b838110156104c7573373ffffffffffffffffffffffffffffffffffffffff166005600060018461045791906114d9565b815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036104b4576001836104b191906114d9565b92505b80806104bf9061153c565b915050610427565b5060008267ffffffffffffffff8111156104e4576104e36114aa565b5b60405190808252806020026020018201604052801561051d57816020015b61050a6110b7565b8152602001906001900390816105025790505b50905060005b84811015610752573373ffffffffffffffffffffffffffffffffffffffff166005600060018461055391906114d9565b815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361073f5760006001826105af91906114d9565b90506000600560008381526020019081526020016000209050806040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff1615151515815250508486815181106107225761072161150d565b5b602002602001018190525060018561073a91906114d9565b945050505b808061074a9061153c565b915050610523565b508094505050505090565b610765611048565b600081116107a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079f906115e1565b60405180910390fd5b60045434146107ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e390611673565b60405180910390fd5b6107f66001611097565b6000610802600161103a565b90506040518060e001604052808281526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250600560008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c08201518160060160006101000a81548160ff0219169083151502179055509050508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016109e3939291906116a2565b600060405180830381600087803b1580156109fd57600080fd5b505af1158015610a11573d6000803e3d6000fd5b50505050828473ffffffffffffffffffffffffffffffffffffffff16827f045dfa01dcba2b36aba1d3dc4a874f4b0c5d2fbeb8d2c4b34a7d88c8d8f929d1336000876000604051610a6594939291906116e8565b60405180910390a450610a766110ad565b505050565b610a83611048565b600060056000838152602001908152602001600020600501549050600060056000848152602001908152602001600020600201549050813414610afb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af29061179f565b60405180910390fd5b6005600084815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b77573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b8152600401610bb5939291906116a2565b600060405180830381600087803b158015610bcf57600080fd5b505af1158015610be3573d6000803e3d6000fd5b50505050336005600085815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016005600085815260200190815260200160002060060160006101000a81548160ff021916908315150217905550610c756002611097565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050158015610cdf573d6000803e3d6000fd5b505050610cea6110ad565b5050565b60606000610cfc600161103a565b905060008060005b83811015610da4573373ffffffffffffffffffffffffffffffffffffffff1660056000600184610d3491906114d9565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610d9157600183610d8e91906114d9565b92505b8080610d9c9061153c565b915050610d04565b5060008267ffffffffffffffff811115610dc157610dc06114aa565b5b604051908082528060200260200182016040528015610dfa57816020015b610de76110b7565b815260200190600190039081610ddf5790505b50905060005b8481101561102f573373ffffffffffffffffffffffffffffffffffffffff1660056000600184610e3091906114d9565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361101c576000600182610e8c91906114d9565b90506000600560008381526020019081526020016000209050806040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff161515151581525050848681518110610fff57610ffe61150d565b5b602002602001018190525060018561101791906114d9565b945050505b80806110279061153c565b915050610e00565b508094505050505090565b600081600001549050919050565b60026000540361108d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110849061180b565b60405180910390fd5b6002600081905550565b6001816000016000828254019250508190555050565b6001600081905550565b6040518060e0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61117781611164565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111a88261117d565b9050919050565b6111b88161119d565b82525050565b60006111c98261117d565b9050919050565b6111d9816111be565b82525050565b60008115159050919050565b6111f4816111df565b82525050565b60e082016000820151611210600085018261116e565b50602082015161122360208501826111af565b506040820151611236604085018261116e565b50606082015161124960608501826111d0565b50608082015161125c60808501826111d0565b5060a082015161126f60a085018261116e565b5060c082015161128260c08501826111eb565b50505050565b600061129483836111fa565b60e08301905092915050565b6000602082019050919050565b60006112b882611138565b6112c28185611143565b93506112cd83611154565b8060005b838110156112fe5781516112e58882611288565b97506112f0836112a0565b9250506001810190506112d1565b5085935050505092915050565b6000602082019050818103600083015261132581846112ad565b905092915050565b61133681611164565b82525050565b6000602082019050611351600083018461132d565b92915050565b600080fd5b6113658161119d565b811461137057600080fd5b50565b6000813590506113828161135c565b92915050565b61139181611164565b811461139c57600080fd5b50565b6000813590506113ae81611388565b92915050565b6000806000606084860312156113cd576113cc611357565b5b60006113db86828701611373565b93505060206113ec8682870161139f565b92505060406113fd8682870161139f565b9150509250925092565b6000806040838503121561141e5761141d611357565b5b600061142c85828601611373565b925050602061143d8582860161139f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061148182611164565b915061148c83611164565b92508282039050818111156114a4576114a3611447565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006114e482611164565b91506114ef83611164565b925082820190508082111561150757611506611447565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061154782611164565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361157957611578611447565b5b600182019050919050565b600082825260208201905092915050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b60006115cb601c83611584565b91506115d682611595565b602082019050919050565b600060208201905081810360008301526115fa816115be565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b600061165d602483611584565b915061166882611601565b604082019050919050565b6000602082019050818103600083015261168c81611650565b9050919050565b61169c8161119d565b82525050565b60006060820190506116b76000830186611693565b6116c46020830185611693565b6116d1604083018461132d565b949350505050565b6116e2816111df565b82525050565b60006080820190506116fd6000830187611693565b61170a6020830186611693565b611717604083018561132d565b61172460608301846116d9565b95945050505050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b6000611789604083611584565b91506117948261172d565b604082019050919050565b600060208201905081810360008301526117b88161177c565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006117f5601f83611584565b9150611800826117bf565b602082019050919050565b60006020820190508181036000830152611824816117e8565b905091905056fea26469706673582212203f913ab00a8412b931d489bf3d4c8a55cad653f0ce7c2d3621961541316b42fd64736f6c63430008120033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "NFTMarket";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTMarket> {
    return super.deploy(overrides || {}) as Promise<NFTMarket>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  override connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }
  static readonly contractName: "NFTMarket";

  public readonly contractName: "NFTMarket";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}