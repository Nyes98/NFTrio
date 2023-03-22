import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Component";
import { useWeb3 } from "../../modules/useWeb3";

const HeaderContainer = () => {
  const { web3, chainId, account, logIn } = useWeb3();
  const navigate = useNavigate();

  const move = (to: string) => {
    navigate(`/${to}`);
  };

  return (
    <HeaderComponent
      move={move}
      account={account}
      logIn={logIn}
      web3={web3}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
