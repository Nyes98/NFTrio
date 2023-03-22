import { useDispatch } from "react-redux";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NftBuyMordalComponent from "./Component";

const NftBuyMordalContainer = ({}) => {
  const dispatch = useDispatch();

  const ControlMordal = () => {
    dispatch(nftBuyMordalOpen());
  };

  return (
    <NftBuyMordalComponent
      ControlMordal={ControlMordal}
    ></NftBuyMordalComponent>
  );
};

export default NftBuyMordalContainer;
