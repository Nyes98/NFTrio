// 자체 토큰과 스왑토큰 불러오는 함수(혹시나 몰라 백업해둠)
async function init() {
  console.log(account);
  if (web3) {
    const abi = TrioToken.abi;
    const bytecode = TrioToken.bytecode;
    const contract = new web3.eth.Contract(abi);
    // console.log(contract.deploy);
    const instance = await contract
      .deploy({ data: bytecode, arguments: ["TrioToken", "TRIO", "1000"] })
      .send({
        from: account,
      });

    console.log(instance.options.address);
  }
}
// init();
// 0x496E4bd17E7439fcf87a760d086aCCfe74bA7EAB << token CA

async function ethSwap() {
  if (web3) {
    const abi = EthSwap.abi;
    const bytecode = EthSwap.bytecode;
    const contract = new web3.eth.Contract(abi);
    const instance = await contract
      .deploy({
        data: bytecode,
        arguments: ["0x496E4bd17E7439fcf87a760d086aCCfe74bA7EAB"],
      })
      .send({ from: account });

    console.log(instance.options.address); // 얘가 swap 컨트랙트의 ca
  }
}
// ethSwap();
// 0x1c1702A63eC949748B9C1e99733b7cc2EeD0d3c4 << swap CA
