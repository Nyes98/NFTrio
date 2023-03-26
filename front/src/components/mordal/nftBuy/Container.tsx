import { useDispatch } from "react-redux";
import { NftBuy } from "../../../api";
import InftData from "../../../interfaces/NftData.interface";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NftBuyMordalComponent from "./Component";

type Props = {
  nftData?: InftData;
};

const NftBuyMordalContainer: React.FC<Props> = ({ nftData }) => {
  const dispatch = useDispatch();

  const ControlMordal = () => {
    dispatch(nftBuyMordalOpen());
  };

  const nftBuy = async () => {
    const data = await NftBuy(nftData?.hash, nftData?.price);
    console.log(data);
  };

  return (
    <NftBuyMordalComponent
      ControlMordal={ControlMordal}
      nftData={nftData}
      nftBuy={nftBuy}
    ></NftBuyMordalComponent>
  );
};

export default NftBuyMordalContainer;
