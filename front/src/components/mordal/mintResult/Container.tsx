import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import { NftInfo, SellNft, SellNft2 } from "../../../api";
import { useAppSelector } from "../../../redux/hooks";
import {
  loadingMordalOpen,
  mintResultMordalOpen,
  nftBuyMordalOpen,
} from "../../../redux/mordal";
import MintResultComponent from "./Component";

type Props = {};

const MintResultContainer: React.FC<Props> = ({}) => {
  const [nftData, setNftData] = useState();
  const [sellPrice, setSellPrice] = useState(0);

  const dispatch = useDispatch();

  const ControlMordal = () => {
    dispatch(mintResultMordalOpen());
  };

  return (
    <MintResultComponent ControlMordal={ControlMordal}></MintResultComponent>
  );
};

export default MintResultContainer;
