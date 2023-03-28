import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NftBuy, NftInfo } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import Web3 from "web3";
import NftInfoComponent from "./Component";

type Props = {
  web3?: Web3;
  account?: string;
};

const NftInfoContainer: React.FC<Props> = ({ web3, account }) => {
  const params = useParams();
  const [nftData, setNftData] = useState();
  const dispatch = useDispatch();

  const buyMordal = useAppSelector(
    (state) => state.nftBuyMordalOpen.nftBuyMordal
  );

  const BuyMordalHandler = () => {
    dispatch(nftBuyMordalOpen());
  };

  const callNftInfo = async () => {
    if (params.nftHash) {
      const data = await NftInfo(params.nftHash);
      setNftData(data.data);
    }
  };

  useEffect(() => {
    callNftInfo();
  }, []);

  return (
    <NftInfoComponent
      nftData={nftData}
      buyMordal={buyMordal}
      BuyMordalHandler={BuyMordalHandler}
      account={account}
      web3={web3}
    ></NftInfoComponent>
  );
};

export default NftInfoContainer;
