import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NftInfo, SellNft } from "../../../api";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NftSellMordalComponent from "./Component";

type Props = {
  selHash: string;
};

const NftSellMordalContainer: React.FC<Props> = ({ selHash }) => {
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
    ></NftSellMordalComponent>
  );
};

export default NftSellMordalContainer;
