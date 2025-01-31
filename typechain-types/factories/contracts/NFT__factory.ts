/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { NFT, NFTInterface } from "../../contracts/NFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sendETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052600060085534801561001557600080fd5b506040516133f83803806133f883398181016040528101906100379190610320565b338282816000908161004991906105b9565b50806001908161005991906105b9565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100ce5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100c591906106cc565b60405180910390fd5b6100dd816100e560201b60201c565b5050506106e7565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610212826101c9565b810181811067ffffffffffffffff82111715610231576102306101da565b5b80604052505050565b60006102446101ab565b90506102508282610209565b919050565b600067ffffffffffffffff8211156102705761026f6101da565b5b610279826101c9565b9050602081019050919050565b60005b838110156102a4578082015181840152602081019050610289565b60008484015250505050565b60006102c36102be84610255565b61023a565b9050828152602081018484840111156102df576102de6101c4565b5b6102ea848285610286565b509392505050565b600082601f830112610307576103066101bf565b5b81516103178482602086016102b0565b91505092915050565b60008060408385031215610337576103366101b5565b5b600083015167ffffffffffffffff811115610355576103546101ba565b5b610361858286016102f2565b925050602083015167ffffffffffffffff811115610382576103816101ba565b5b61038e858286016102f2565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103ea57607f821691505b6020821081036103fd576103fc6103a3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610428565b61046f8683610428565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006104b66104b16104ac84610487565b610491565b610487565b9050919050565b6000819050919050565b6104d08361049b565b6104e46104dc826104bd565b848454610435565b825550505050565b600090565b6104f96104ec565b6105048184846104c7565b505050565b5b818110156105285761051d6000826104f1565b60018101905061050a565b5050565b601f82111561056d5761053e81610403565b61054784610418565b81016020851015610556578190505b61056a61056285610418565b830182610509565b50505b505050565b600082821c905092915050565b600061059060001984600802610572565b1980831691505092915050565b60006105a9838361057f565b9150826002028217905092915050565b6105c282610398565b67ffffffffffffffff8111156105db576105da6101da565b5b6105e582546103d2565b6105f082828561052c565b600060209050601f8311600181146106235760008415610611578287015190505b61061b858261059d565b865550610683565b601f19841661063186610403565b60005b8281101561065957848901518255600182019150602085019450602081019050610634565b868310156106765784890151610672601f89168261057f565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b68261068b565b9050919050565b6106c6816106ab565b82525050565b60006020820190506106e160008301846106bd565b92915050565b612d02806106f66000396000f3fe6080604052600436106101235760003560e01c8063715018a6116100a0578063b88d4fde11610064578063b88d4fde146103cf578063c87b56dd146103f8578063d0def52114610435578063e985e9c514610472578063f2fde38b146104af5761012a565b8063715018a6146103105780638da5cb5b1461032757806394ab67fe1461035257806395d89b411461037b578063a22cb465146103a65761012a565b806321b1e5f8116100e757806321b1e5f81461022857806323b872dd1461024457806342842e0e1461026d5780636352211e1461029657806370a08231146102d35761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d457806312065fe0146101fd5761012a565b3661012a57005b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190611f3f565b6104d8565b6040516101639190611f87565b60405180910390f35b34801561017857600080fd5b50610181610539565b60405161018e9190612032565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b9919061208a565b6105cb565b6040516101cb91906120f8565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f6919061213f565b6105e7565b005b34801561020957600080fd5b506102126105fd565b60405161021f919061218e565b60405180910390f35b610242600480360381019061023d91906121e7565b610605565b005b34801561025057600080fd5b5061026b60048036038101906102669190612214565b610692565b005b34801561027957600080fd5b50610294600480360381019061028f9190612214565b610794565b005b3480156102a257600080fd5b506102bd60048036038101906102b8919061208a565b6107b4565b6040516102ca91906120f8565b60405180910390f35b3480156102df57600080fd5b506102fa60048036038101906102f59190612267565b6107c6565b604051610307919061218e565b60405180910390f35b34801561031c57600080fd5b50610325610880565b005b34801561033357600080fd5b5061033c610894565b60405161034991906120f8565b60405180910390f35b34801561035e57600080fd5b506103796004803603810190610374919061213f565b6108be565b005b34801561038757600080fd5b50610390610943565b60405161039d9190612032565b60405180910390f35b3480156103b257600080fd5b506103cd60048036038101906103c891906122c0565b6109d5565b005b3480156103db57600080fd5b506103f660048036038101906103f19190612435565b6109eb565b005b34801561040457600080fd5b5061041f600480360381019061041a919061208a565b610a10565b60405161042c9190612032565b60405180910390f35b34801561044157600080fd5b5061045c60048036038101906104579190612559565b610b23565b604051610469919061218e565b60405180910390f35b34801561047e57600080fd5b50610499600480360381019061049491906125b5565b610c1d565b6040516104a69190611f87565b60405180910390f35b3480156104bb57600080fd5b506104d660048036038101906104d19190612267565b610cb1565b005b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610532575061053182610d37565b5b9050919050565b60606000805461054890612624565b80601f016020809104026020016040519081016040528092919081815260200182805461057490612624565b80156105c15780601f10610596576101008083540402835291602001916105c1565b820191906000526020600020905b8154815290600101906020018083116105a457829003601f168201915b5050505050905090565b60006105d682610e19565b506105e082610ea1565b9050919050565b6105f982826105f4610ede565b610ee6565b5050565b600047905090565b60003411610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f906126a1565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561068e573d6000803e3d6000fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107045760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016106fb91906120f8565b60405180910390fd5b60006107188383610713610ede565b610ef8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461078e578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610785939291906126c1565b60405180910390fd5b50505050565b6107af838383604051806020016040528060008152506109eb565b505050565b60006107bf82610e19565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108395760006040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161083091906120f8565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610888611112565b6108926000611199565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff166108de826107b4565b73ffffffffffffffffffffffffffffffffffffffff1614610934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092b90612744565b60405180910390fd5b61093f33838361125f565b5050565b60606001805461095290612624565b80601f016020809104026020016040519081016040528092919081815260200182805461097e90612624565b80156109cb5780601f106109a0576101008083540402835291602001916109cb565b820191906000526020600020905b8154815290600101906020018083116109ae57829003601f168201915b5050505050905090565b6109e76109e0610ede565b83836113cc565b5050565b6109f6848484610692565b610a0a610a01610ede565b8585858561153b565b50505050565b6060610a1b82610e19565b506000600660008481526020019081526020016000208054610a3c90612624565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6890612624565b8015610ab55780601f10610a8a57610100808354040283529160200191610ab5565b820191906000526020600020905b815481529060010190602001808311610a9857829003601f168201915b505050505090506000610ac66116ec565b90506000815103610adb578192505050610b1e565b600082511115610b10578082604051602001610af89291906127a0565b60405160208183030381529060405292505050610b1e565b610b1984611703565b925050505b919050565b6000610b2d611112565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9390612810565b60405180910390fd5b6000825111610be0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd79061287c565b60405180910390fd5b6000600854905060086000815480929190610bfa906128cb565b9190505550610c09848261176c565b610c138184611865565b8091505092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610cb9611112565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d2b5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610d2291906120f8565b60405180910390fd5b610d3481611199565b50565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610e0257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610e125750610e11826118c1565b5b9050919050565b600080610e258361192b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e9857826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610e8f919061218e565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610ef38383836001611968565b505050565b600080610f048461192b565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610f4657610f45818486611b2d565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fd757610f88600085600080611968565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461105a576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b61111a610ede565b73ffffffffffffffffffffffffffffffffffffffff16611138610894565b73ffffffffffffffffffffffffffffffffffffffff16146111975761115b610ede565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161118e91906120f8565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112d15760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112c891906120f8565b60405180910390fd5b60006112df83836000610ef8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361135257816040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611349919061218e565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113c6578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016113bd939291906126c1565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361143d57816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161143491906120f8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161152e9190611f87565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156116e5578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161159a9493929190612968565b6020604051808303816000875af19250505080156115d657506040513d601f19601f820116820180604052508101906115d391906129c9565b60015b61165a573d8060008114611606576040519150601f19603f3d011682016040523d82523d6000602084013e61160b565b606091505b50600081510361165257836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161164991906120f8565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146116e357836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016116da91906120f8565b60405180910390fd5b505b5050505050565b606060405180602001604052806000815250905090565b606061170e82610e19565b5060006117196116ec565b905060008151116117395760405180602001604052806000815250611764565b8061174384611bf1565b6040516020016117549291906127a0565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117de5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016117d591906120f8565b60405180910390fd5b60006117ec83836000610ef8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118605760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161185791906120f8565b60405180910390fd5b505050565b806006600084815260200190815260200160002090816118859190612ba2565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516118b5919061218e565b60405180910390a15050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806119a15750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611ad55760006119b184610e19565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611a1c57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611a2f5750611a2d8184610c1d565b155b15611a7157826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611a6891906120f8565b60405180910390fd5b8115611ad357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611b38838383611cbf565b611bec57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611bad57806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611ba4919061218e565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611be3929190612c74565b60405180910390fd5b505050565b606060006001611c0084611d80565b01905060008167ffffffffffffffff811115611c1f57611c1e61230a565b5b6040519080825280601f01601f191660200182016040528015611c515781602001600182028036833780820191505090505b509050600082602001820190505b600115611cb4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611ca857611ca7612c9d565b5b04945060008503611c5f575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611d7757508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611d385750611d378484610c1d565b5b80611d7657508273ffffffffffffffffffffffffffffffffffffffff16611d5e83610ea1565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611dde577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611dd457611dd3612c9d565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611e1b576d04ee2d6d415b85acef81000000008381611e1157611e10612c9d565b5b0492506020810190505b662386f26fc100008310611e4a57662386f26fc100008381611e4057611e3f612c9d565b5b0492506010810190505b6305f5e1008310611e73576305f5e1008381611e6957611e68612c9d565b5b0492506008810190505b6127108310611e98576127108381611e8e57611e8d612c9d565b5b0492506004810190505b60648310611ebb5760648381611eb157611eb0612c9d565b5b0492506002810190505b600a8310611eca576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611f1c81611ee7565b8114611f2757600080fd5b50565b600081359050611f3981611f13565b92915050565b600060208284031215611f5557611f54611edd565b5b6000611f6384828501611f2a565b91505092915050565b60008115159050919050565b611f8181611f6c565b82525050565b6000602082019050611f9c6000830184611f78565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611fdc578082015181840152602081019050611fc1565b60008484015250505050565b6000601f19601f8301169050919050565b600061200482611fa2565b61200e8185611fad565b935061201e818560208601611fbe565b61202781611fe8565b840191505092915050565b6000602082019050818103600083015261204c8184611ff9565b905092915050565b6000819050919050565b61206781612054565b811461207257600080fd5b50565b6000813590506120848161205e565b92915050565b6000602082840312156120a05761209f611edd565b5b60006120ae84828501612075565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006120e2826120b7565b9050919050565b6120f2816120d7565b82525050565b600060208201905061210d60008301846120e9565b92915050565b61211c816120d7565b811461212757600080fd5b50565b60008135905061213981612113565b92915050565b6000806040838503121561215657612155611edd565b5b60006121648582860161212a565b925050602061217585828601612075565b9150509250929050565b61218881612054565b82525050565b60006020820190506121a3600083018461217f565b92915050565b60006121b4826120b7565b9050919050565b6121c4816121a9565b81146121cf57600080fd5b50565b6000813590506121e1816121bb565b92915050565b6000602082840312156121fd576121fc611edd565b5b600061220b848285016121d2565b91505092915050565b60008060006060848603121561222d5761222c611edd565b5b600061223b8682870161212a565b935050602061224c8682870161212a565b925050604061225d86828701612075565b9150509250925092565b60006020828403121561227d5761227c611edd565b5b600061228b8482850161212a565b91505092915050565b61229d81611f6c565b81146122a857600080fd5b50565b6000813590506122ba81612294565b92915050565b600080604083850312156122d7576122d6611edd565b5b60006122e58582860161212a565b92505060206122f6858286016122ab565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61234282611fe8565b810181811067ffffffffffffffff821117156123615761236061230a565b5b80604052505050565b6000612374611ed3565b90506123808282612339565b919050565b600067ffffffffffffffff8211156123a05761239f61230a565b5b6123a982611fe8565b9050602081019050919050565b82818337600083830152505050565b60006123d86123d384612385565b61236a565b9050828152602081018484840111156123f4576123f3612305565b5b6123ff8482856123b6565b509392505050565b600082601f83011261241c5761241b612300565b5b813561242c8482602086016123c5565b91505092915050565b6000806000806080858703121561244f5761244e611edd565b5b600061245d8782880161212a565b945050602061246e8782880161212a565b935050604061247f87828801612075565b925050606085013567ffffffffffffffff8111156124a05761249f611ee2565b5b6124ac87828801612407565b91505092959194509250565b600067ffffffffffffffff8211156124d3576124d261230a565b5b6124dc82611fe8565b9050602081019050919050565b60006124fc6124f7846124b8565b61236a565b90508281526020810184848401111561251857612517612305565b5b6125238482856123b6565b509392505050565b600082601f8301126125405761253f612300565b5b81356125508482602086016124e9565b91505092915050565b600080604083850312156125705761256f611edd565b5b600061257e8582860161212a565b925050602083013567ffffffffffffffff81111561259f5761259e611ee2565b5b6125ab8582860161252b565b9150509250929050565b600080604083850312156125cc576125cb611edd565b5b60006125da8582860161212a565b92505060206125eb8582860161212a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061263c57607f821691505b60208210810361264f5761264e6125f5565b5b50919050565b7f4d7573742073656e6420736f6d65204554480000000000000000000000000000600082015250565b600061268b601283611fad565b915061269682612655565b602082019050919050565b600060208201905081810360008301526126ba8161267e565b9050919050565b60006060820190506126d660008301866120e9565b6126e3602083018561217f565b6126f060408301846120e9565b949350505050565b7f596f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b600061272e601583611fad565b9150612739826126f8565b602082019050919050565b6000602082019050818103600083015261275d81612721565b9050919050565b600081905092915050565b600061277a82611fa2565b6127848185612764565b9350612794818560208601611fbe565b80840191505092915050565b60006127ac828561276f565b91506127b8828461276f565b91508190509392505050565b7f43616e6e6f74206d696e7420746f207a65726f20616464726573730000000000600082015250565b60006127fa601b83611fad565b9150612805826127c4565b602082019050919050565b60006020820190508181036000830152612829816127ed565b9050919050565b7f555249206d757374206e6f7420626520656d7074790000000000000000000000600082015250565b6000612866601583611fad565b915061287182612830565b602082019050919050565b6000602082019050818103600083015261289581612859565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128d682612054565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036129085761290761289c565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b600061293a82612913565b612944818561291e565b9350612954818560208601611fbe565b61295d81611fe8565b840191505092915050565b600060808201905061297d60008301876120e9565b61298a60208301866120e9565b612997604083018561217f565b81810360608301526129a9818461292f565b905095945050505050565b6000815190506129c381611f13565b92915050565b6000602082840312156129df576129de611edd565b5b60006129ed848285016129b4565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612a587fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612a1b565b612a628683612a1b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612a9f612a9a612a9584612054565b612a7a565b612054565b9050919050565b6000819050919050565b612ab983612a84565b612acd612ac582612aa6565b848454612a28565b825550505050565b600090565b612ae2612ad5565b612aed818484612ab0565b505050565b5b81811015612b1157612b06600082612ada565b600181019050612af3565b5050565b601f821115612b5657612b27816129f6565b612b3084612a0b565b81016020851015612b3f578190505b612b53612b4b85612a0b565b830182612af2565b50505b505050565b600082821c905092915050565b6000612b7960001984600802612b5b565b1980831691505092915050565b6000612b928383612b68565b9150826002028217905092915050565b612bab82611fa2565b67ffffffffffffffff811115612bc457612bc361230a565b5b612bce8254612624565b612bd9828285612b15565b600060209050601f831160018114612c0c5760008415612bfa578287015190505b612c048582612b86565b865550612c6c565b601f198416612c1a866129f6565b60005b82811015612c4257848901518255600182019150602085019450602081019050612c1d565b86831015612c5f5784890151612c5b601f891682612b68565b8355505b6001600288020188555050505b505050505050565b6000604082019050612c8960008301856120e9565b612c96602083018461217f565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220ebae5fcc23a7760f3ca14756bcae6ff176087a34167c35c2393a55b4eac7598464736f6c634300081c0033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override deploy(
    _name: string,
    _symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<
      NFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFT__factory {
    return super.connect(runner) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new Interface(_abi) as NFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFT {
    return new Contract(address, _abi, runner) as unknown as NFT;
  }
}
