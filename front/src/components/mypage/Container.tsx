import MyPageComponent from "./Component";
import { useWeb3 } from "../../modules/useWeb3";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyNft, MyNftOnSale } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import { useDispatch } from "react-redux";
import InftData from "../../interfaces/NftData.interface";

const MyPageContainer = () => {
  const { web3, chainId, account, logIn } = useWeb3();
  const [userNftData, setUserNftData] = useState();
  const [categori, setCategori] = useState(1);
  const [selHash, setSelHash] = useState("");
  const [registedNft, setRegistedNft] = useState<Array<string>>([]);
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
      setUserNftData(data.data);
    }
  };

  const CallSellNft = async () => {
    const data = await MyNftOnSale();
    const data2: Array<string> = [];

    data.data.map((item: any) => {
      data2.push(item.Character.hash);
      if (item.Character) {
        setRegistedNft(data2);
      }
    });
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
    CallSellNft();
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
      registedNft={registedNft}
    ></MyPageComponent>
  );
};

export default MyPageContainer;
