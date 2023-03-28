import { useDispatch } from "react-redux";
import { NftBuy, NftOwnerChange } from "../../../api";
import InftData from "../../../interfaces/NftData.interface";
import { loadingMordalOpen, nftBuyMordalOpen } from "../../../redux/mordal";
import Web3 from "web3";
import NftBuyMordalComponent from "./Component";
import { useAppSelector } from "../../../redux/hooks";

type Props = {
  nftData?: InftData;
  web3?: Web3;
  account?: string;
};

const NftBuyMordalContainer: React.FC<Props> = ({ nftData, web3, account }) => {
  console.log(nftData);
  const dispatch = useDispatch();

  const loading = useAppSelector(
    (state) => state.loadingMordalOpen.loadingMordal
  );

  const ControlLoading = () => {
    dispatch(loadingMordalOpen());
  };

  const ControlMordal = () => {
    dispatch(nftBuyMordalOpen());
  };

  const nftBuy = async () => {
    ControlLoading();
    const data = await NftBuy(
      nftData?.hash,
      nftData?.price,
      nftData?.tokenId,
      account
    );
    console.log(data.data.approve);
    console.log(data.data.buy);
    const data2 = await web3?.eth.sendTransaction(data.data.approve);
    console.log("권한완료", data2);
    if (data2) {
      const data3 = await web3?.eth.sendTransaction(data.data.buy);
      console.log("거래완료", data3);
      if (data3) {
        const data4 = await NftOwnerChange(nftData?.hash, account);
        if (data4) {
          ControlLoading();
        } else {
          console.log("비정상 종료");
          ControlLoading();
        }
      }
    }
  };

  // const nftPurchase = async () => {
  //   const data = await BuyNft
  // };

  return (
    <NftBuyMordalComponent
      ControlMordal={ControlMordal}
      nftData={nftData}
      nftBuy={nftBuy}
      loading={loading}
    ></NftBuyMordalComponent>
  );
};

export default NftBuyMordalContainer;
