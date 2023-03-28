import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import { NftInfo, SellNft, SellNft2 } from "../../../api";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NoTicketMordalComponent from "./Component";
import NftSellMordalComponent from "./Component";

type Props = {
  setNoTicket: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoTicketMordalContainer: React.FC<Props> = ({ setNoTicket }) => {
  return (
    <NoTicketMordalComponent
      setNoTicket={setNoTicket}
    ></NoTicketMordalComponent>
  );
};

export default NoTicketMordalContainer;
