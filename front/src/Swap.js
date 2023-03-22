export default {
  contractName: "Swap",
  abi: [
    {
      inputs: [
        {
          internalType: "contract TrioToken",
          name: "_token",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
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
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract TrioToken",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getToken",
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
      name: "getSwapBalance",
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
      inputs: [],
      name: "getThisAddress",
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
      name: "getMsgSender",
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
      name: "buyToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract TrioToken","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getMsgSender","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSwapBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getThisAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract TrioToken","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/Swap.sol":"Swap"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/Swap.sol":{"keccak256":"0xa8d9bb35c3f3ee831eda8b816513073729f39e169a7caf9a9be5fdad36b7844d","license":"MIT","urls":["bzz-raw://a77a25218dc80eb374102a895244ea7c49d54f38709a8be4f206a90703b24a5e","dweb:/ipfs/QmUSjhsmVKg7FzxDxQKVQRpzBytSFFhoJnXKVpo9nSugoN"]},"project:/contracts/TrioToken.sol":{"keccak256":"0x4b2a3b44d79cee2b2aba1238804d6000d5c0cd2db02e5044f7b0c38dbc68c52b","license":"MIT","urls":["bzz-raw://11386a040eba202ad0c7bcba1171dabfc6938c87744f2daeb7258be39e47fde3","dweb:/ipfs/Qmcy8bL5VJ61eMgda6d3jAuHH1mxecrAwAmDsKnGBwX6zS"]},"project:/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol":{"keccak256":"0x4ffc0547c02ad22925310c585c0f166f8759e2648a09e9b489100c42f15dd98d","license":"MIT","urls":["bzz-raw://15f52f51413a9de1ff191e2f6367c62178e1df7806d7880fe857a98b0b66253d","dweb:/ipfs/QmaQG1fwfgUt5E9nu2cccFiV47B2V78MM1tCy1qB7n4MsH"]},"project:/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b","license":"MIT","urls":["bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34","dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr"]},"project:/node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"project:/node_modules/@openzeppelin/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b506040516109473803806109478339818101604052810190610032919061012e565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061015b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b60006100fb826100de565b9050919050565b61010b816100f0565b811461011657600080fd5b50565b60008151905061012881610102565b92915050565b600060208284031215610144576101436100b9565b5b600061015284828501610119565b91505092915050565b6107dd8061016a6000396000f3fe6080604052600436106100705760003560e01c8063a48217191161004e578063a4821719146100f6578063c7b00aad14610100578063d39538221461012b578063fc0c546a1461015657610070565b806321df0da7146100755780637a6ce2e1146100a05780638da5cb5b146100cb575b600080fd5b34801561008157600080fd5b5061008a610181565b6040516100979190610504565b60405180910390f35b3480156100ac57600080fd5b506100b56101aa565b6040516100c29190610504565b60405180910390f35b3480156100d757600080fd5b506100e06101b2565b6040516100ed9190610504565b60405180910390f35b6100fe6101d8565b005b34801561010c57600080fd5b506101156103f5565b6040516101229190610538565b60405180910390f35b34801561013757600080fd5b50610140610497565b60405161014d9190610504565b60405180910390f35b34801561016257600080fd5b5061016b61049f565b60405161017891906105b2565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610246573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026a91906105fe565b34610275919061065a565b90508060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102d19190610504565b602060405180830381865afa1580156102ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031291906105fe565b1015610353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034a906106f9565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016103ae929190610719565b6020604051808303816000875af11580156103cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f1919061077a565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104519190610504565b602060405180830381865afa15801561046e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049291906105fe565b905090565b600030905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104ee826104c3565b9050919050565b6104fe816104e3565b82525050565b600060208201905061051960008301846104f5565b92915050565b6000819050919050565b6105328161051f565b82525050565b600060208201905061054d6000830184610529565b92915050565b6000819050919050565b600061057861057361056e846104c3565b610553565b6104c3565b9050919050565b600061058a8261055d565b9050919050565b600061059c8261057f565b9050919050565b6105ac81610591565b82525050565b60006020820190506105c760008301846105a3565b92915050565b600080fd5b6105db8161051f565b81146105e657600080fd5b50565b6000815190506105f8816105d2565b92915050565b600060208284031215610614576106136105cd565b5b6000610622848285016105e9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106658261051f565b91506106708361051f565b925082820261067e8161051f565b915082820484148315176106955761069461062b565b5b5092915050565b600082825260208201905092915050565b7f6572726f72205b315d0000000000000000000000000000000000000000000000600082015250565b60006106e360098361069c565b91506106ee826106ad565b602082019050919050565b60006020820190508181036000830152610712816106d6565b9050919050565b600060408201905061072e60008301856104f5565b61073b6020830184610529565b9392505050565b60008115159050919050565b61075781610742565b811461076257600080fd5b50565b6000815190506107748161074e565b92915050565b6000602082840312156107905761078f6105cd565b5b600061079e84828501610765565b9150509291505056fea26469706673582212206f3621428470fef168b1b2f3c52ecebe138d0f05683e097117b2f21cc5aab79064736f6c63430008130033",
  deployedBytecode:
    "0x6080604052600436106100705760003560e01c8063a48217191161004e578063a4821719146100f6578063c7b00aad14610100578063d39538221461012b578063fc0c546a1461015657610070565b806321df0da7146100755780637a6ce2e1146100a05780638da5cb5b146100cb575b600080fd5b34801561008157600080fd5b5061008a610181565b6040516100979190610504565b60405180910390f35b3480156100ac57600080fd5b506100b56101aa565b6040516100c29190610504565b60405180910390f35b3480156100d757600080fd5b506100e06101b2565b6040516100ed9190610504565b60405180910390f35b6100fe6101d8565b005b34801561010c57600080fd5b506101156103f5565b6040516101229190610538565b60405180910390f35b34801561013757600080fd5b50610140610497565b60405161014d9190610504565b60405180910390f35b34801561016257600080fd5b5061016b61049f565b60405161017891906105b2565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610246573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026a91906105fe565b34610275919061065a565b90508060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102d19190610504565b602060405180830381865afa1580156102ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031291906105fe565b1015610353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034a906106f9565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016103ae929190610719565b6020604051808303816000875af11580156103cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f1919061077a565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104519190610504565b602060405180830381865afa15801561046e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049291906105fe565b905090565b600030905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104ee826104c3565b9050919050565b6104fe816104e3565b82525050565b600060208201905061051960008301846104f5565b92915050565b6000819050919050565b6105328161051f565b82525050565b600060208201905061054d6000830184610529565b92915050565b6000819050919050565b600061057861057361056e846104c3565b610553565b6104c3565b9050919050565b600061058a8261055d565b9050919050565b600061059c8261057f565b9050919050565b6105ac81610591565b82525050565b60006020820190506105c760008301846105a3565b92915050565b600080fd5b6105db8161051f565b81146105e657600080fd5b50565b6000815190506105f8816105d2565b92915050565b600060208284031215610614576106136105cd565b5b6000610622848285016105e9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106658261051f565b91506106708361051f565b925082820261067e8161051f565b915082820484148315176106955761069461062b565b5b5092915050565b600082825260208201905092915050565b7f6572726f72205b315d0000000000000000000000000000000000000000000000600082015250565b60006106e360098361069c565b91506106ee826106ad565b602082019050919050565b60006020820190508181036000830152610712816106d6565b9050919050565b600060408201905061072e60008301856104f5565b61073b6020830184610529565b9392505050565b60008115159050919050565b61075781610742565b811461076257600080fd5b50565b6000815190506107748161074e565b92915050565b6000602082840312156107905761078f6105cd565b5b600061079e84828501610765565b9150509291505056fea26469706673582212206f3621428470fef168b1b2f3c52ecebe138d0f05683e097117b2f21cc5aab79064736f6c63430008130033",
  immutableReferences: {},
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:1436:25",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "47:35:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "57:19:25",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "73:2:25",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "67:5:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "67:9:25",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "57:6:25",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "40:6:25",
                type: "",
              },
            ],
            src: "7:75:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "177:28:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "194:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "197:1:25",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "187:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "187:12:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "187:12:25",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "88:117:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "300:28:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "317:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "320:1:25",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "310:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "310:12:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "310:12:25",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "211:117:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "379:81:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "389:65:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "404:5:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "411:42:25",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "400:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "400:54:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "389:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "361:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "371:7:25",
                type: "",
              },
            ],
            src: "334:126:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "519:51:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "529:35:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "558:5:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "540:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "540:24:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "529:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address_payable",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "501:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "511:7:25",
                type: "",
              },
            ],
            src: "466:104:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "638:59:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "648:43:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "685:5:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_address_payable",
                      nodeType: "YulIdentifier",
                      src: "659:25:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "659:32:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "648:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_contract$_TrioToken_$762",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "620:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "630:7:25",
                type: "",
              },
            ],
            src: "576:121:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "763:96:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "837:16:25",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "846:1:25",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "849:1:25",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "839:6:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "839:12:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "839:12:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "786:5:25",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "828:5:25",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_contract$_TrioToken_$762",
                              nodeType: "YulIdentifier",
                              src: "793:34:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "793:41:25",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "783:2:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "783:52:25",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "776:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "776:60:25",
                  },
                  nodeType: "YulIf",
                  src: "773:80:25",
                },
              ],
            },
            name: "validator_revert_t_contract$_TrioToken_$762",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "756:5:25",
                type: "",
              },
            ],
            src: "703:156:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "945:97:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "955:22:25",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "970:6:25",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "964:5:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "964:13:25",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "955:5:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1030:5:25",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_contract$_TrioToken_$762",
                      nodeType: "YulIdentifier",
                      src: "986:43:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "986:50:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "986:50:25",
                },
              ],
            },
            name: "abi_decode_t_contract$_TrioToken_$762_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "923:6:25",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "931:3:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "939:5:25",
                type: "",
              },
            ],
            src: "865:177:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1142:291:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1188:83:25",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "1190:77:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1190:79:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1190:79:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1163:7:25",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1172:9:25",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1159:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1159:23:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1184:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1155:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1155:32:25",
                  },
                  nodeType: "YulIf",
                  src: "1152:119:25",
                },
                {
                  nodeType: "YulBlock",
                  src: "1281:145:25",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1296:15:25",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1310:1:25",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1300:6:25",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1325:91:25",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1388:9:25",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1399:6:25",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1384:3:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1384:22:25",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1408:7:25",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_contract$_TrioToken_$762_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "1335:48:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1335:81:25",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1325:6:25",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_contract$_TrioToken_$762_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1112:9:25",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1123:7:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1135:6:25",
                type: "",
              },
            ],
            src: "1048:385:25",
          },
        ],
      },
      contents:
        "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_TrioToken_$762(value) -> cleaned {\n        cleaned := cleanup_t_address_payable(value)\n    }\n\n    function validator_revert_t_contract$_TrioToken_$762(value) {\n        if iszero(eq(value, cleanup_t_contract$_TrioToken_$762(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_TrioToken_$762_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_TrioToken_$762(value)\n    }\n\n    function abi_decode_tuple_t_contract$_TrioToken_$762_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_TrioToken_$762_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
      id: 25,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:5758:25",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "52:81:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "62:65:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "77:5:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "84:42:25",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "73:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "73:54:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "62:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "34:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "44:7:25",
                type: "",
              },
            ],
            src: "7:126:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "184:51:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "194:35:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "223:5:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "205:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "205:24:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "194:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "166:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "176:7:25",
                type: "",
              },
            ],
            src: "139:96:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "306:53:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "323:3:25",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "346:5:25",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_address",
                          nodeType: "YulIdentifier",
                          src: "328:17:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "328:24:25",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "316:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "316:37:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "316:37:25",
                },
              ],
            },
            name: "abi_encode_t_address_to_t_address_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "294:5:25",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "301:3:25",
                type: "",
              },
            ],
            src: "241:118:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "463:124:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "473:26:25",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "485:9:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "496:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "481:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "481:18:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "473:4:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "553:6:25",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "566:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "577:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "562:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "562:17:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "509:43:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "509:71:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "509:71:25",
                },
              ],
            },
            name: "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "435:9:25",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "447:6:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "458:4:25",
                type: "",
              },
            ],
            src: "365:222:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "638:32:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "648:16:25",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "659:5:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "648:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "620:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "630:7:25",
                type: "",
              },
            ],
            src: "593:77:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "741:53:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "758:3:25",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "781:5:25",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "763:17:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "763:24:25",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "751:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "751:37:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "751:37:25",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "729:5:25",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "736:3:25",
                type: "",
              },
            ],
            src: "676:118:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "898:124:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "908:26:25",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "920:9:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "931:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "916:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "916:18:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "908:4:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "988:6:25",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1001:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1012:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "997:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "997:17:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "944:43:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "944:71:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "944:71:25",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "870:9:25",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "882:6:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "893:4:25",
                type: "",
              },
            ],
            src: "800:222:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1060:28:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1070:12:25",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1077:5:25",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "1070:3:25",
                    },
                  ],
                },
              ],
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1046:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "1056:3:25",
                type: "",
              },
            ],
            src: "1028:60:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1154:82:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1164:66:25",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "1222:5:25",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint160",
                              nodeType: "YulIdentifier",
                              src: "1204:17:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1204:24:25",
                          },
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "1195:8:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1195:34:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "1177:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1177:53:25",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "1164:9:25",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_uint160_to_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1134:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "1144:9:25",
                type: "",
              },
            ],
            src: "1094:142:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1310:66:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1320:50:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1364:5:25",
                      },
                    ],
                    functionName: {
                      name: "convert_t_uint160_to_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "1333:30:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1333:37:25",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "1320:9:25",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_uint160_to_t_address_payable",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1290:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "1300:9:25",
                type: "",
              },
            ],
            src: "1242:134:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1467:74:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1477:58:25",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1529:5:25",
                      },
                    ],
                    functionName: {
                      name: "convert_t_uint160_to_t_address_payable",
                      nodeType: "YulIdentifier",
                      src: "1490:38:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1490:45:25",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "1477:9:25",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_contract$_TrioToken_$762_to_t_address_payable",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1447:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "1457:9:25",
                type: "",
              },
            ],
            src: "1382:159:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1637:91:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1654:3:25",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1715:5:25",
                          },
                        ],
                        functionName: {
                          name: "convert_t_contract$_TrioToken_$762_to_t_address_payable",
                          nodeType: "YulIdentifier",
                          src: "1659:55:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1659:62:25",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1647:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1647:75:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1647:75:25",
                },
              ],
            },
            name: "abi_encode_t_contract$_TrioToken_$762_to_t_address_payable_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1625:5:25",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1632:3:25",
                type: "",
              },
            ],
            src: "1547:181:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1857:149:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1867:26:25",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1879:9:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1890:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1875:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1875:18:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1867:4:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1972:6:25",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1985:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1996:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1981:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1981:17:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_contract$_TrioToken_$762_to_t_address_payable_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1903:68:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1903:96:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1903:96:25",
                },
              ],
            },
            name: "abi_encode_tuple_t_contract$_TrioToken_$762__to_t_address_payable__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1829:9:25",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1841:6:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1852:4:25",
                type: "",
              },
            ],
            src: "1734:272:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2052:35:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2062:19:25",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2078:2:25",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "2072:5:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2072:9:25",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "2062:6:25",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "2045:6:25",
                type: "",
              },
            ],
            src: "2012:75:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2182:28:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2199:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2202:1:25",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "2192:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2192:12:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2192:12:25",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "2093:117:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2305:28:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2322:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2325:1:25",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "2315:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2315:12:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2315:12:25",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "2216:117:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2382:79:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2439:16:25",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2448:1:25",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2451:1:25",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2441:6:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2441:12:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2441:12:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2405:5:25",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2430:5:25",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2412:17:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2412:24:25",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2402:2:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2402:35:25",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2395:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2395:43:25",
                  },
                  nodeType: "YulIf",
                  src: "2392:63:25",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2375:5:25",
                type: "",
              },
            ],
            src: "2339:122:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2530:80:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2540:22:25",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2555:6:25",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "2549:5:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2549:13:25",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2540:5:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2598:5:25",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2571:26:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2571:33:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2571:33:25",
                },
              ],
            },
            name: "abi_decode_t_uint256_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2508:6:25",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2516:3:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2524:5:25",
                type: "",
              },
            ],
            src: "2467:143:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2693:274:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2739:83:25",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2741:77:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2741:79:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2741:79:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2714:7:25",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2723:9:25",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2710:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2710:23:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2735:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2706:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2706:32:25",
                  },
                  nodeType: "YulIf",
                  src: "2703:119:25",
                },
                {
                  nodeType: "YulBlock",
                  src: "2832:128:25",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2847:15:25",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2861:1:25",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2851:6:25",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2876:74:25",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2922:9:25",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2933:6:25",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2918:3:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2918:22:25",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2942:7:25",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "2886:31:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2886:64:25",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2876:6:25",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_uint256_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2663:9:25",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2674:7:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2686:6:25",
                type: "",
              },
            ],
            src: "2616:351:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3001:152:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3018:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3021:77:25",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3011:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3011:88:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3011:88:25",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3115:1:25",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3118:4:25",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3108:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3108:15:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3108:15:25",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3139:1:25",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3142:4:25",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "3132:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3132:15:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3132:15:25",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "2973:180:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3207:362:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3217:25:25",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3240:1:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "3222:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3222:20:25",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "3217:1:25",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3251:25:25",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "3274:1:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "3256:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3256:20:25",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "3251:1:25",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3285:28:25",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3308:1:25",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "3311:1:25",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "3304:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3304:9:25",
                  },
                  variables: [
                    {
                      name: "product_raw",
                      nodeType: "YulTypedName",
                      src: "3289:11:25",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3322:41:25",
                  value: {
                    arguments: [
                      {
                        name: "product_raw",
                        nodeType: "YulIdentifier",
                        src: "3351:11:25",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "3333:17:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3333:30:25",
                  },
                  variableNames: [
                    {
                      name: "product",
                      nodeType: "YulIdentifier",
                      src: "3322:7:25",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3540:22:25",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "3542:16:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3542:18:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3542:18:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "3473:1:25",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "3466:6:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3466:9:25",
                          },
                          {
                            arguments: [
                              {
                                name: "y",
                                nodeType: "YulIdentifier",
                                src: "3496:1:25",
                              },
                              {
                                arguments: [
                                  {
                                    name: "product",
                                    nodeType: "YulIdentifier",
                                    src: "3503:7:25",
                                  },
                                  {
                                    name: "x",
                                    nodeType: "YulIdentifier",
                                    src: "3512:1:25",
                                  },
                                ],
                                functionName: {
                                  name: "div",
                                  nodeType: "YulIdentifier",
                                  src: "3499:3:25",
                                },
                                nodeType: "YulFunctionCall",
                                src: "3499:15:25",
                              },
                            ],
                            functionName: {
                              name: "eq",
                              nodeType: "YulIdentifier",
                              src: "3493:2:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3493:22:25",
                          },
                        ],
                        functionName: {
                          name: "or",
                          nodeType: "YulIdentifier",
                          src: "3446:2:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3446:83:25",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "3426:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3426:113:25",
                  },
                  nodeType: "YulIf",
                  src: "3423:139:25",
                },
              ],
            },
            name: "checked_mul_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "3190:1:25",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "3193:1:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "product",
                nodeType: "YulTypedName",
                src: "3199:7:25",
                type: "",
              },
            ],
            src: "3159:410:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3671:73:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3688:3:25",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3693:6:25",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3681:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3681:19:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3681:19:25",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3709:29:25",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3728:3:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3733:4:25",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3724:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3724:14:25",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "3709:11:25",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3643:3:25",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3648:6:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "3659:11:25",
                type: "",
              },
            ],
            src: "3575:169:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3856:53:25",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "3878:6:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3886:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3874:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3874:14:25",
                      },
                      {
                        hexValue: "6572726f72205b315d",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "3890:11:25",
                        type: "",
                        value: "error [1]",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3867:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3867:35:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3867:35:25",
                },
              ],
            },
            name: "store_literal_in_memory_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "3848:6:25",
                type: "",
              },
            ],
            src: "3750:159:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4061:219:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4071:73:25",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "4137:3:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4142:1:25",
                        type: "",
                        value: "9",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4078:58:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4078:66:25",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "4071:3:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "4242:3:25",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985",
                      nodeType: "YulIdentifier",
                      src: "4153:88:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4153:93:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4153:93:25",
                },
                {
                  nodeType: "YulAssignment",
                  src: "4255:19:25",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "4266:3:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4271:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4262:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4262:12:25",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "4255:3:25",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "4049:3:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "4057:3:25",
                type: "",
              },
            ],
            src: "3915:365:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4457:248:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4467:26:25",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4479:9:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4490:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4475:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4475:18:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4467:4:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4514:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4525:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4510:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4510:17:25",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "4533:4:25",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4539:9:25",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4529:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4529:20:25",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4503:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4503:47:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4503:47:25",
                },
                {
                  nodeType: "YulAssignment",
                  src: "4559:139:25",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "4693:4:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4567:124:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4567:131:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4559:4:25",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4437:9:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4452:4:25",
                type: "",
              },
            ],
            src: "4286:419:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4837:206:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4847:26:25",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4859:9:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4870:2:25",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4855:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4855:18:25",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4847:4:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "4927:6:25",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4940:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4951:1:25",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4936:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4936:17:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4883:43:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4883:71:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4883:71:25",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "5008:6:25",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5021:9:25",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5032:2:25",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5017:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5017:18:25",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4964:43:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4964:72:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4964:72:25",
                },
              ],
            },
            name: "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4801:9:25",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "4813:6:25",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4821:6:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4832:4:25",
                type: "",
              },
            ],
            src: "4711:332:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5091:48:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5101:32:25",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5126:5:25",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "5119:6:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5119:13:25",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5112:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5112:21:25",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "5101:7:25",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_bool",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5073:5:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "5083:7:25",
                type: "",
              },
            ],
            src: "5049:90:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5185:76:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5239:16:25",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5248:1:25",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5251:1:25",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "5241:6:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5241:12:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5241:12:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5208:5:25",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5230:5:25",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_bool",
                              nodeType: "YulIdentifier",
                              src: "5215:14:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5215:21:25",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "5205:2:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5205:32:25",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5198:6:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5198:40:25",
                  },
                  nodeType: "YulIf",
                  src: "5195:60:25",
                },
              ],
            },
            name: "validator_revert_t_bool",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5178:5:25",
                type: "",
              },
            ],
            src: "5145:116:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5327:77:25",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5337:22:25",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "5352:6:25",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "5346:5:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5346:13:25",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "5337:5:25",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5392:5:25",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_bool",
                      nodeType: "YulIdentifier",
                      src: "5368:23:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5368:30:25",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5368:30:25",
                },
              ],
            },
            name: "abi_decode_t_bool_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "5305:6:25",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "5313:3:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5321:5:25",
                type: "",
              },
            ],
            src: "5267:137:25",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5484:271:25",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5530:83:25",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "5532:77:25",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5532:79:25",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5532:79:25",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5505:7:25",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5514:9:25",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "5501:3:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5501:23:25",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5526:2:25",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "5497:3:25",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5497:32:25",
                  },
                  nodeType: "YulIf",
                  src: "5494:119:25",
                },
                {
                  nodeType: "YulBlock",
                  src: "5623:125:25",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5638:15:25",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5652:1:25",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5642:6:25",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5667:71:25",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5710:9:25",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5721:6:25",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5706:3:25",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5706:22:25",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5730:7:25",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_bool_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "5677:28:25",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5677:61:25",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "5667:6:25",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_bool_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5454:9:25",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "5465:7:25",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "5477:6:25",
                type: "",
              },
            ],
            src: "5410:345:25",
          },
        ],
      },
      contents:
        '{\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint160_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(identity(cleanup_t_uint160(value)))\n    }\n\n    function convert_t_uint160_to_t_address_payable(value) -> converted {\n        converted := convert_t_uint160_to_t_uint160(value)\n    }\n\n    function convert_t_contract$_TrioToken_$762_to_t_address_payable(value) -> converted {\n        converted := convert_t_uint160_to_t_address_payable(value)\n    }\n\n    function abi_encode_t_contract$_TrioToken_$762_to_t_address_payable_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_TrioToken_$762_to_t_address_payable(value))\n    }\n\n    function abi_encode_tuple_t_contract$_TrioToken_$762__to_t_address_payable__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_TrioToken_$762_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985(memPtr) {\n\n        mstore(add(memPtr, 0), "error [1]")\n\n    }\n\n    function abi_encode_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 9)\n        store_literal_in_memory_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n',
      id: 25,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "90:1444:2:-:0;;;183:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;228:6;220:5;;:14;;;;;;;;;;;;;;;;;;300:10;292:5;;:18;;;;;;;;;;;;;;;;;;183:133;90:1444;;88:117:25;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:104::-;511:7;540:24;558:5;540:24;:::i;:::-;529:35;;466:104;;;:::o;576:121::-;630:7;659:32;685:5;659:32;:::i;:::-;648:43;;576:121;;;:::o;703:156::-;793:41;828:5;793:41;:::i;:::-;786:5;783:52;773:80;;849:1;846;839:12;773:80;703:156;:::o;865:177::-;939:5;970:6;964:13;955:22;;986:50;1030:5;986:50;:::i;:::-;865:177;;;;:::o;1048:385::-;1135:6;1184:2;1172:9;1163:7;1159:23;1155:32;1152:119;;;1190:79;;:::i;:::-;1152:119;1310:1;1335:81;1408:7;1399:6;1388:9;1384:22;1335:81;:::i;:::-;1325:91;;1281:145;1048:385;;;;:::o;90:1444:2:-;;;;;;;",
  deployedSourceMap:
    "90:1444:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;322:127;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;890:147;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;156:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1261:270;;;:::i;:::-;;514:100;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;695:189;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;109:22;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;322:127;363:7;394:5;;;;;;;;;;;379:21;;322:127;:::o;890:147::-;935:7;958:10;951:17;;890:147;:::o;156:20::-;;;;;;;;;;;;;:::o;1261:270::-;1303:19;1337:5;;;;;;;;;;;:13;;;:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1325:9;:27;;;;:::i;:::-;1303:49;;1420:11;1386:5;;;;;;;;;;:15;;;1410:4;1386:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;1378:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;1452:5;;;;;;;;;;:14;;;1467:10;1479:11;1452:39;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1296:235;1261:270::o;514:100::-;561:4;581:5;;;;;;;;;;;:15;;;597:10;581:27;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;574:34;;514:100;:::o;695:189::-;742:7;773:4;758:20;;695:189;:::o;109:22::-;;;;;;;;;;;;:::o;7:126:25:-;44:7;84:42;77:5;73:54;62:65;;7:126;;;:::o;139:96::-;176:7;205:24;223:5;205:24;:::i;:::-;194:35;;139:96;;;:::o;241:118::-;328:24;346:5;328:24;:::i;:::-;323:3;316:37;241:118;;:::o;365:222::-;458:4;496:2;485:9;481:18;473:26;;509:71;577:1;566:9;562:17;553:6;509:71;:::i;:::-;365:222;;;;:::o;593:77::-;630:7;659:5;648:16;;593:77;;;:::o;676:118::-;763:24;781:5;763:24;:::i;:::-;758:3;751:37;676:118;;:::o;800:222::-;893:4;931:2;920:9;916:18;908:26;;944:71;1012:1;1001:9;997:17;988:6;944:71;:::i;:::-;800:222;;;;:::o;1028:60::-;1056:3;1077:5;1070:12;;1028:60;;;:::o;1094:142::-;1144:9;1177:53;1195:34;1204:24;1222:5;1204:24;:::i;:::-;1195:34;:::i;:::-;1177:53;:::i;:::-;1164:66;;1094:142;;;:::o;1242:134::-;1300:9;1333:37;1364:5;1333:37;:::i;:::-;1320:50;;1242:134;;;:::o;1382:159::-;1457:9;1490:45;1529:5;1490:45;:::i;:::-;1477:58;;1382:159;;;:::o;1547:181::-;1659:62;1715:5;1659:62;:::i;:::-;1654:3;1647:75;1547:181;;:::o;1734:272::-;1852:4;1890:2;1879:9;1875:18;1867:26;;1903:96;1996:1;1985:9;1981:17;1972:6;1903:96;:::i;:::-;1734:272;;;;:::o;2093:117::-;2202:1;2199;2192:12;2339:122;2412:24;2430:5;2412:24;:::i;:::-;2405:5;2402:35;2392:63;;2451:1;2448;2441:12;2392:63;2339:122;:::o;2467:143::-;2524:5;2555:6;2549:13;2540:22;;2571:33;2598:5;2571:33;:::i;:::-;2467:143;;;;:::o;2616:351::-;2686:6;2735:2;2723:9;2714:7;2710:23;2706:32;2703:119;;;2741:79;;:::i;:::-;2703:119;2861:1;2886:64;2942:7;2933:6;2922:9;2918:22;2886:64;:::i;:::-;2876:74;;2832:128;2616:351;;;;:::o;2973:180::-;3021:77;3018:1;3011:88;3118:4;3115:1;3108:15;3142:4;3139:1;3132:15;3159:410;3199:7;3222:20;3240:1;3222:20;:::i;:::-;3217:25;;3256:20;3274:1;3256:20;:::i;:::-;3251:25;;3311:1;3308;3304:9;3333:30;3351:11;3333:30;:::i;:::-;3322:41;;3512:1;3503:7;3499:15;3496:1;3493:22;3473:1;3466:9;3446:83;3423:139;;3542:18;;:::i;:::-;3423:139;3207:362;3159:410;;;;:::o;3575:169::-;3659:11;3693:6;3688:3;3681:19;3733:4;3728:3;3724:14;3709:29;;3575:169;;;;:::o;3750:159::-;3890:11;3886:1;3878:6;3874:14;3867:35;3750:159;:::o;3915:365::-;4057:3;4078:66;4142:1;4137:3;4078:66;:::i;:::-;4071:73;;4153:93;4242:3;4153:93;:::i;:::-;4271:2;4266:3;4262:12;4255:19;;3915:365;;;:::o;4286:419::-;4452:4;4490:2;4479:9;4475:18;4467:26;;4539:9;4533:4;4529:20;4525:1;4514:9;4510:17;4503:47;4567:131;4693:4;4567:131;:::i;:::-;4559:139;;4286:419;;;:::o;4711:332::-;4832:4;4870:2;4859:9;4855:18;4847:26;;4883:71;4951:1;4940:9;4936:17;4927:6;4883:71;:::i;:::-;4964:72;5032:2;5021:9;5017:18;5008:6;4964:72;:::i;:::-;4711:332;;;;;:::o;5049:90::-;5083:7;5126:5;5119:13;5112:21;5101:32;;5049:90;;;:::o;5145:116::-;5215:21;5230:5;5215:21;:::i;:::-;5208:5;5205:32;5195:60;;5251:1;5248;5241:12;5195:60;5145:116;:::o;5267:137::-;5321:5;5352:6;5346:13;5337:22;;5368:30;5392:5;5368:30;:::i;:::-;5267:137;;;;:::o;5410:345::-;5477:6;5526:2;5514:9;5505:7;5501:23;5497:32;5494:119;;;5532:79;;:::i;:::-;5494:119;5652:1;5677:61;5730:7;5721:6;5710:9;5706:22;5677:61;:::i;:::-;5667:71;;5623:125;5410:345;;;;:::o",
  source:
    '// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.19;\r\n\r\nimport "./TrioToken.sol";\r\n\r\ncontract Swap {\r\n  TrioToken public token; // CA 받을 변수\r\n  address public owner;\r\n\r\n  constructor(TrioToken _token) {\r\n    token = _token; // _token이라는 CA를 받아 token으로 정의\r\n    owner = msg.sender;\r\n  }\r\n\r\n  function getToken() public view returns (address) {\r\n    return address(token); // 이게 TrioToken이 배포될 때의 CA\r\n  }\r\n\r\n  // token변수가 가진 CA값을 return하는 함수\r\n\r\n  function getSwapBalance() public view returns (uint) {\r\n    return token.balanceOf(msg.sender);\r\n  }\r\n\r\n  // 함수를 호출한 계정의 토큰 잔액을 조회하는 함수\r\n\r\n  function getThisAddress() public view returns (address) {\r\n    return address(this); // this는 해당 컨트랙트 자체를 의미함(this = Swap)\r\n    // address(this) == Swap의 CA\r\n  }\r\n\r\n  function getMsgSender() public view returns (address) {\r\n    return msg.sender; // msg.sender == 해당 컨트랙트(Swap)를 실행한 사람\r\n  }\r\n\r\n  // function getTokenOwner() public view returns (address) {\r\n  //     return token._owner();\r\n  // }\r\n  // 생성한 ERC20 컨트랙트(TrioToken)를 배포시킨 토큰 발행자의 계정을 return하는 함수\r\n\r\n  function buyToken() public payable {\r\n    uint256 tokenAmount = msg.value * token.getRate(); // 1eth = 500token\r\n    require(token.balanceOf(address(this)) >= tokenAmount, "error [1]");\r\n    token.transfer(msg.sender, tokenAmount); // from: Swap CA, to : msg.sender\r\n  }\r\n}\r\n',
  sourcePath:
    "C:\\Users\\kawonlee\\Documents\\GitHub\\NFT-market-TeamProject\\back\\contracts\\Swap.sol",
  ast: {
    absolutePath: "project:/contracts/Swap.sol",
    exportedSymbols: {
      Context: [3521],
      ERC20: [1468],
      IERC20: [1546],
      IERC20Metadata: [1571],
      Swap: [674],
      TrioToken: [762],
    },
    id: 675,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 574,
        literals: ["solidity", "^", "0.8", ".19"],
        nodeType: "PragmaDirective",
        src: "33:24:2",
      },
      {
        absolutePath: "project:/contracts/TrioToken.sol",
        file: "./TrioToken.sol",
        id: 575,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 675,
        sourceUnit: 763,
        src: "61:25:2",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "Swap",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 674,
        linearizedBaseContracts: [674],
        name: "Swap",
        nameLocation: "99:4:2",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            functionSelector: "fc0c546a",
            id: 578,
            mutability: "mutable",
            name: "token",
            nameLocation: "126:5:2",
            nodeType: "VariableDeclaration",
            scope: 674,
            src: "109:22:2",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_contract$_TrioToken_$762",
              typeString: "contract TrioToken",
            },
            typeName: {
              id: 577,
              nodeType: "UserDefinedTypeName",
              pathNode: {
                id: 576,
                name: "TrioToken",
                nameLocations: ["109:9:2"],
                nodeType: "IdentifierPath",
                referencedDeclaration: 762,
                src: "109:9:2",
              },
              referencedDeclaration: 762,
              src: "109:9:2",
              typeDescriptions: {
                typeIdentifier: "t_contract$_TrioToken_$762",
                typeString: "contract TrioToken",
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "8da5cb5b",
            id: 580,
            mutability: "mutable",
            name: "owner",
            nameLocation: "171:5:2",
            nodeType: "VariableDeclaration",
            scope: 674,
            src: "156:20:2",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_address",
              typeString: "address",
            },
            typeName: {
              id: 579,
              name: "address",
              nodeType: "ElementaryTypeName",
              src: "156:7:2",
              stateMutability: "nonpayable",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
            },
            visibility: "public",
          },
          {
            body: {
              id: 595,
              nodeType: "Block",
              src: "213:103:2",
              statements: [
                {
                  expression: {
                    id: 588,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 586,
                      name: "token",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 578,
                      src: "220:5:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_TrioToken_$762",
                        typeString: "contract TrioToken",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 587,
                      name: "_token",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 583,
                      src: "228:6:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_TrioToken_$762",
                        typeString: "contract TrioToken",
                      },
                    },
                    src: "220:14:2",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_TrioToken_$762",
                      typeString: "contract TrioToken",
                    },
                  },
                  id: 589,
                  nodeType: "ExpressionStatement",
                  src: "220:14:2",
                },
                {
                  expression: {
                    id: 593,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 590,
                      name: "owner",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 580,
                      src: "292:5:2",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      expression: {
                        id: 591,
                        name: "msg",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967281,
                        src: "300:3:2",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_message",
                          typeString: "msg",
                        },
                      },
                      id: 592,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "304:6:2",
                      memberName: "sender",
                      nodeType: "MemberAccess",
                      src: "300:10:2",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    src: "292:18:2",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  id: 594,
                  nodeType: "ExpressionStatement",
                  src: "292:18:2",
                },
              ],
            },
            id: 596,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 584,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 583,
                  mutability: "mutable",
                  name: "_token",
                  nameLocation: "205:6:2",
                  nodeType: "VariableDeclaration",
                  scope: 596,
                  src: "195:16:2",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_TrioToken_$762",
                    typeString: "contract TrioToken",
                  },
                  typeName: {
                    id: 582,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 581,
                      name: "TrioToken",
                      nameLocations: ["195:9:2"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 762,
                      src: "195:9:2",
                    },
                    referencedDeclaration: 762,
                    src: "195:9:2",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_TrioToken_$762",
                      typeString: "contract TrioToken",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "194:18:2",
            },
            returnParameters: {
              id: 585,
              nodeType: "ParameterList",
              parameters: [],
              src: "213:0:2",
            },
            scope: 674,
            src: "183:133:2",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 606,
              nodeType: "Block",
              src: "372:77:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 603,
                        name: "token",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 578,
                        src: "394:5:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_TrioToken_$762",
                          typeString: "contract TrioToken",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_contract$_TrioToken_$762",
                          typeString: "contract TrioToken",
                        },
                      ],
                      id: 602,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "386:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_address_$",
                        typeString: "type(address)",
                      },
                      typeName: {
                        id: 601,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "386:7:2",
                        typeDescriptions: {},
                      },
                    },
                    id: 604,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "386:14:2",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  functionReturnParameters: 600,
                  id: 605,
                  nodeType: "Return",
                  src: "379:21:2",
                },
              ],
            },
            functionSelector: "21df0da7",
            id: 607,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getToken",
            nameLocation: "331:8:2",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 597,
              nodeType: "ParameterList",
              parameters: [],
              src: "339:2:2",
            },
            returnParameters: {
              id: 600,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 599,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 607,
                  src: "363:7:2",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 598,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "363:7:2",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "362:9:2",
            },
            scope: 674,
            src: "322:127:2",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 618,
              nodeType: "Block",
              src: "567:47:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 614,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "597:3:2",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 615,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "601:6:2",
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "597:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        id: 612,
                        name: "token",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 578,
                        src: "581:5:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_TrioToken_$762",
                          typeString: "contract TrioToken",
                        },
                      },
                      id: 613,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "587:9:2",
                      memberName: "balanceOf",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 980,
                      src: "581:15:2",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        typeString:
                          "function (address) view external returns (uint256)",
                      },
                    },
                    id: 616,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "581:27:2",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 611,
                  id: 617,
                  nodeType: "Return",
                  src: "574:34:2",
                },
              ],
            },
            functionSelector: "c7b00aad",
            id: 619,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getSwapBalance",
            nameLocation: "523:14:2",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 608,
              nodeType: "ParameterList",
              parameters: [],
              src: "537:2:2",
            },
            returnParameters: {
              id: 611,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 610,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 619,
                  src: "561:4:2",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 609,
                    name: "uint",
                    nodeType: "ElementaryTypeName",
                    src: "561:4:2",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "560:6:2",
            },
            scope: 674,
            src: "514:100:2",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 629,
              nodeType: "Block",
              src: "751:133:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 626,
                        name: "this",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967268,
                        src: "773:4:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Swap_$674",
                          typeString: "contract Swap",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_contract$_Swap_$674",
                          typeString: "contract Swap",
                        },
                      ],
                      id: 625,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "765:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_address_$",
                        typeString: "type(address)",
                      },
                      typeName: {
                        id: 624,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "765:7:2",
                        typeDescriptions: {},
                      },
                    },
                    id: 627,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "765:13:2",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  functionReturnParameters: 623,
                  id: 628,
                  nodeType: "Return",
                  src: "758:20:2",
                },
              ],
            },
            functionSelector: "d3953822",
            id: 630,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getThisAddress",
            nameLocation: "704:14:2",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 620,
              nodeType: "ParameterList",
              parameters: [],
              src: "718:2:2",
            },
            returnParameters: {
              id: 623,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 622,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 630,
                  src: "742:7:2",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 621,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "742:7:2",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "741:9:2",
            },
            scope: 674,
            src: "695:189:2",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 638,
              nodeType: "Block",
              src: "944:93:2",
              statements: [
                {
                  expression: {
                    expression: {
                      id: 635,
                      name: "msg",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4294967281,
                      src: "958:3:2",
                      typeDescriptions: {
                        typeIdentifier: "t_magic_message",
                        typeString: "msg",
                      },
                    },
                    id: 636,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "962:6:2",
                    memberName: "sender",
                    nodeType: "MemberAccess",
                    src: "958:10:2",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  functionReturnParameters: 634,
                  id: 637,
                  nodeType: "Return",
                  src: "951:17:2",
                },
              ],
            },
            functionSelector: "7a6ce2e1",
            id: 639,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getMsgSender",
            nameLocation: "899:12:2",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 631,
              nodeType: "ParameterList",
              parameters: [],
              src: "911:2:2",
            },
            returnParameters: {
              id: 634,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 633,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 639,
                  src: "935:7:2",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 632,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "935:7:2",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "934:9:2",
            },
            scope: 674,
            src: "890:147:2",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 672,
              nodeType: "Block",
              src: "1296:235:2",
              statements: [
                {
                  assignments: [643],
                  declarations: [
                    {
                      constant: false,
                      id: 643,
                      mutability: "mutable",
                      name: "tokenAmount",
                      nameLocation: "1311:11:2",
                      nodeType: "VariableDeclaration",
                      scope: 672,
                      src: "1303:19:2",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 642,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1303:7:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 650,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 649,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        id: 644,
                        name: "msg",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967281,
                        src: "1325:3:2",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_message",
                          typeString: "msg",
                        },
                      },
                      id: 645,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1329:5:2",
                      memberName: "value",
                      nodeType: "MemberAccess",
                      src: "1325:9:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      arguments: [],
                      expression: {
                        argumentTypes: [],
                        expression: {
                          id: 646,
                          name: "token",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 578,
                          src: "1337:5:2",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_TrioToken_$762",
                            typeString: "contract TrioToken",
                          },
                        },
                        id: 647,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1343:7:2",
                        memberName: "getRate",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 731,
                        src: "1337:13:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_external_view$__$returns$_t_uint256_$",
                          typeString:
                            "function () view external returns (uint256)",
                        },
                      },
                      id: 648,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1337:15:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1325:27:2",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1303:49:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 660,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  id: 656,
                                  name: "this",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: "1410:4:2",
                                  typeDescriptions: {
                                    typeIdentifier: "t_contract$_Swap_$674",
                                    typeString: "contract Swap",
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_contract$_Swap_$674",
                                    typeString: "contract Swap",
                                  },
                                ],
                                id: 655,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: "ElementaryTypeNameExpression",
                                src: "1402:7:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_type$_t_address_$",
                                  typeString: "type(address)",
                                },
                                typeName: {
                                  id: 654,
                                  name: "address",
                                  nodeType: "ElementaryTypeName",
                                  src: "1402:7:2",
                                  typeDescriptions: {},
                                },
                              },
                              id: 657,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "typeConversion",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1402:13:2",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            ],
                            expression: {
                              id: 652,
                              name: "token",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 578,
                              src: "1386:5:2",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_TrioToken_$762",
                                typeString: "contract TrioToken",
                              },
                            },
                            id: 653,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "1392:9:2",
                            memberName: "balanceOf",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 980,
                            src: "1386:15:2",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              typeString:
                                "function (address) view external returns (uint256)",
                            },
                          },
                          id: 658,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1386:30:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: ">=",
                        rightExpression: {
                          id: 659,
                          name: "tokenAmount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 643,
                          src: "1420:11:2",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "1386:45:2",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "6572726f72205b315d",
                        id: 661,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1433:11:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985",
                          typeString: 'literal_string "error [1]"',
                        },
                        value: "error [1]",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_d90ed0396e2e9a950b43d879784cfed35317ec9ec46d9fe3e459342c4705e985",
                          typeString: 'literal_string "error [1]"',
                        },
                      ],
                      id: 651,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "1378:7:2",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 662,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1378:67:2",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 663,
                  nodeType: "ExpressionStatement",
                  src: "1378:67:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 667,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "1467:3:2",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 668,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1471:6:2",
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "1467:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 669,
                        name: "tokenAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 643,
                        src: "1479:11:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        id: 664,
                        name: "token",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 578,
                        src: "1452:5:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_TrioToken_$762",
                          typeString: "contract TrioToken",
                        },
                      },
                      id: 666,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1458:8:2",
                      memberName: "transfer",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 1005,
                      src: "1452:14:2",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        typeString:
                          "function (address,uint256) external returns (bool)",
                      },
                    },
                    id: 670,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1452:39:2",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 671,
                  nodeType: "ExpressionStatement",
                  src: "1452:39:2",
                },
              ],
            },
            functionSelector: "a4821719",
            id: 673,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "buyToken",
            nameLocation: "1270:8:2",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 640,
              nodeType: "ParameterList",
              parameters: [],
              src: "1278:2:2",
            },
            returnParameters: {
              id: 641,
              nodeType: "ParameterList",
              parameters: [],
              src: "1296:0:2",
            },
            scope: 674,
            src: "1261:270:2",
            stateMutability: "payable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 675,
        src: "90:1444:2",
        usedErrors: [],
      },
    ],
    src: "33:1503:2",
  },
  compiler: {
    name: "solc",
    version: "0.8.19+commit.7dd6d404.Emscripten.clang",
  },
  networks: {},
  schemaVersion: "3.4.13",
  updatedAt: "2023-03-21T09:59:58.852Z",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};
