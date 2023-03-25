import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NftInfo } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import NftInfoComponent from "./Component";

const NftInfoContainer = () => {
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
      console.log(data);
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
    ></NftInfoComponent>
  );
};

export default NftInfoContainer;
