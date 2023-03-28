import { useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import { PickNft, UseTicket, InsertTokenId } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { loadingMordalOpen } from "../../redux/mordal";
import PickComponent from "./Component";

type Props = {
  web3?: Web3;
  account?: string;
};

const PickContainer: React.FC<Props> = ({ web3, account }) => {
  const dispatch = useDispatch();
  const [tokenId, setTokenId] = useState<string | undefined>("");

  const pickNft = async () => {
    dispatch(loadingMordalOpen());

    if (account) {
      const data = await PickNft(account);
      const data2 = await web3?.eth.sendTransaction(data.data.obj);
      setTokenId(data2?.logs[0].topics[3]);
      const data3 = data2?.logs[0].topics[3];

      if (data3) {
        const insert = await InsertTokenId(data3);
        console.log(insert);
      }

      if (data2) {
        console.log(data2);
        dispatch(loadingMordalOpen());
        UseTicket(account);
      }
    }
  };

  const loadingMordal = useAppSelector(
    (state) => state.loadingMordalOpen.loadingMordal
  );

  return (
    <PickComponent
      pickNft={pickNft}
      loadingMordal={loadingMordal}
    ></PickComponent>
  );
};

export default PickContainer;
