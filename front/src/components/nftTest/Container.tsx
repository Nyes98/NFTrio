import { useEffect } from "react";
import { useWeb3 } from "./useWeb3";
import { AbiItem } from "web3-utils";
import { Mint } from "./Mint";
import { List } from "./List";
import axios from "axios";
//abi 파일 없어야하고 deployed 없어야함

type Props = { pickNft: () => void; useWeb3: () => void; account: string };

const NftContainer = () => {
  const { web3, account, logIn } = useWeb3();
  async function tradeToken() {
    const result = (await axios.post("http://localhost:8080/api/nft/trade"))
      .data;
    console.log(result);
    const temp = await web3?.eth.sendTransaction({
      from: account,
      value: 1 * 10 ** 18,
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
      <List account={account} web3={web3} />
    </div>
  );
};

export default NftContainer;
