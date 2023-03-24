import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NftInfo } from "../../api";
import NftInfoComponent from "./Component";

const NftInfoContainer = () => {
  const params = useParams();
  const [nftData, setNftData] = useState();

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

  return <NftInfoComponent nftData={nftData}></NftInfoComponent>;
};

export default NftInfoContainer;
