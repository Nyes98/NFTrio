import MyPageComponent from "./Component";
import { useWeb3 } from "../../modules/useWeb3";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyNft } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import { useDispatch } from "react-redux";

const MyPageContainer = () => {
  const { web3, chainId, account, logIn } = useWeb3();
  const [userNftData, setUserNftData] = useState();
  const [categori, setCategori] = useState(1);
  const [selHash, setSelHash] = useState("");
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyMordal = useAppSelector(
    (state) => state.nftBuyMordalOpen.nftBuyMordal
  );

  const SelectHash = (hash: string) => {
    setSelHash(hash);
  };

  const move = (where: string) => {
    navigate(`/nftInfo/${where}`);
  };

  const CallMyNft = async () => {
    if (params.owner) {
      const data = await MyNft(params.owner);
      console.log(data.data);
      setUserNftData(data.data);
    }
  };

  const CagetoriControl = (num: number) => {
    setCategori(num);
  };

  const BuyMordalHandler = () => {
    dispatch(nftBuyMordalOpen());
  };

  useEffect(() => {
    logIn();
    CallMyNft();
  }, []);

  return (
    <MyPageComponent
      account={account}
      CagetoriControl={CagetoriControl}
      categori={categori}
      userNftData={userNftData}
      move={move}
      BuyMordalHandler={BuyMordalHandler}
      buyMordal={buyMordal}
      SelectHash={SelectHash}
      selHash={selHash}
    ></MyPageComponent>
  );
};

export default MyPageContainer;
