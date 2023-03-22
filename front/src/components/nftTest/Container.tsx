import { useEffect } from "react";
import NftComponent from "./Component";
import { useWeb3 } from "./useWeb3";
import TrioToken from "../../TrioToken";
import { AbiItem } from "web3-utils";
import EthSwap from "../../Swap";
import { Mint } from "./Mint";
import { List } from "./List";
import axios from "axios";
//abi 파일 없어야하고 deployed 없어야함

const NftContainer = () => {
  const { web3, account, logIn } = useWeb3();

  async function tradeToken() {
    const result = (await axios.post("http://localhost:8080/api/nft/trade"))
      .data;
    console.log(result);
    const temp = await web3?.eth.sendTransaction({
      from: account,
      value: 1 * 10 ** 17,
      ...result,
    });
    console.log(temp);
  }
  useEffect(() => {
    // tradeToken();
  }, []);
  return (
    <div>
      <div>
        {account && web3 ? (
          <div>
            <div>Account : {account}</div>
            <Mint web3={web3} account={account} />
            <div
              onClick={() => {
                tradeToken();
              }}
            >
              교환
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                logIn();
              }}
            >
              MetaMask Log In
            </button>
          </div>
        )}
      </div>
      <List account={account} />
    </div>
  );
};

export default NftContainer;
