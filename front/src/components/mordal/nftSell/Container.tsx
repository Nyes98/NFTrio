import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import { NftInfo, SellNft, SellNft2 } from "../../../api";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NftSellMordalComponent from "./Component";

type Props = {
  selHash: string;
  account?: string;
  web3?: Web3;
  selTokenId: number;
};

const NftSellMordalContainer: React.FC<Props> = ({
  selHash,
  account,
  web3,
  selTokenId,
}) => {
  const [nftData, setNftData] = useState();
  const [sellPrice, setSellPrice] = useState(0);

  const dispatch = useDispatch();

  const CallNftInfo = async () => {
    const data = await NftInfo(selHash);
    console.log(data.data);
    setNftData(data.data);
  };

  const InputSellPrice = (e: any) => {
    setSellPrice(e.target.value);
    console.log(selHash);
    console.log(sellPrice);
  };

  const ControlMordal = () => {
    dispatch(nftBuyMordalOpen());
  };

  const SellNftF = async () => {
    const data = await SellNft(sellPrice, selHash);
    console.log(data);
  };

  const SellNftf2 = async () => {
    if (account) {
      const data = await SellNft2(sellPrice, account, selTokenId);

      web3?.eth.sendTransaction(data.data);
    }
  };

  useEffect(() => {
    CallNftInfo();
  }, []);

  return (
    <NftSellMordalComponent
      ControlMordal={ControlMordal}
      nftData={nftData}
      InputSellPrice={InputSellPrice}
      sellPrice={sellPrice}
      SellNftF={SellNftF}
      SellNftf2={SellNftf2}
    ></NftSellMordalComponent>
  );
};

export default NftSellMordalContainer;
