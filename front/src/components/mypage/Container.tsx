import MyPageComponent from "./Component";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ApproveToken,
  CallUser,
  MyNft,
  MyNftOnSale,
  NftCost,
  SwapToken,
} from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import { useDispatch } from "react-redux";
import Web3 from "web3";

type Props = {
  web3?: Web3;
  account?: string;
};

const MyPageContainer: React.FC<Props> = ({ web3, account }) => {
  const [userNftData, setUserNftData] = useState();
  const [selHash, setSelHash] = useState("");
  const [selTokenId, setSelTokenId] = useState(1000);
  const [registedNft, setRegistedNft] = useState<Array<string>>([]);
  const params = useParams();
  const [sellBtn, setSellBtn] = useState("");
  const [userData, setUserData] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyMordal = useAppSelector(
    (state) => state.nftBuyMordalOpen.nftBuyMordal
  );

  const MyUserData = async () => {
    if (params.owner) {
      const data = await CallUser(params.owner);
      setUserData(data.data);
    }
  };

  const SelectHash = (hash: string, tokenId: number) => {
    setSelHash(hash);
    setSelTokenId(tokenId);
  };

  const mouseIn = (hash: string) => {
    setSellBtn(hash);
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

  const BuyMordalHandler = () => {
    dispatch(nftBuyMordalOpen());
  };

  const TradeToken = async () => {
    const data = await SwapToken();
    const temp = await web3?.eth.sendTransaction({
      from: account,
      value: 1 * 10 ** 17,
      ...data.data,
    });
  };

  const approveToken = async () => {
    const data = await ApproveToken();
    console.log(data.data);

    web3?.eth.sendTransaction({
      from: account,
      to: data.data.to,
      ...data.data,
    });
  };

  useEffect(() => {
    CallMyNft();
    CallSellNft();
    MyUserData();
    // approveToken();
  }, []);

  return (
    <MyPageComponent
      account={account}
      web3={web3}
      userNftData={userNftData}
      move={move}
      BuyMordalHandler={BuyMordalHandler}
      buyMordal={buyMordal}
      SelectHash={SelectHash}
      selHash={selHash}
      registedNft={registedNft}
      mouseIn={mouseIn}
      sellBtn={sellBtn}
      userData={userData}
      TradeToken={TradeToken}
      selTokenId={selTokenId}
    ></MyPageComponent>
  );
};

export default MyPageContainer;
