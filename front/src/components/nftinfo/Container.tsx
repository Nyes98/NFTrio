import MyPageComponent from "./Component";
import { useWeb3 } from "../../modules/useWeb3";
import { useEffect, useState } from "react";

const MyPageContainer = () => {
  const { web3, chainId, account, logIn } = useWeb3();

  const [categori, setCategori] = useState(1);

  const CagetoriControl = (num: number) => {
    setCategori(num);
  };

  useEffect(() => {
    logIn();
  }, []);

  return (
    <MyPageComponent
      account={account}
      CagetoriControl={CagetoriControl}
      categori={categori}
    ></MyPageComponent>
  );
};

export default MyPageContainer;
