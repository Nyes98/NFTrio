import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import { PickNft, UseTicket, InsertTokenId, CallUser } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { loadingMordalOpen, mintResultMordalOpen } from "../../redux/mordal";
import PickComponent from "./Component";

type Props = {
  web3?: Web3;
  account?: string;
};

const PickContainer: React.FC<Props> = ({ web3, account }) => {
  const dispatch = useDispatch();
  const [tokenId, setTokenId] = useState<string | undefined>("");
  const [userTicket, setUserTicket] = useState(0);
  const [noTicket, setNoTicket] = useState(false);

  const ResultMordal = useAppSelector(
    (state) => state.mintResultMordalOpen.mintResultMordal
  );

  const ResultMordalControl = async () => {
    await dispatch(mintResultMordalOpen());
  };

  const callUser = async () => {
    if (account) {
      const data = await CallUser(account);
      console.log(data.data.mintNumber);
      setUserTicket(data.data.mintNumber);
    }
  };

  const pickNft = async () => {
    if (userTicket <= 0) {
      console.log("민팅권 부족");
      setNoTicket(!noTicket);
      return;
    }

    dispatch(loadingMordalOpen());

    if (account) {
      const data = await PickNft(account);
      const data2 = await web3?.eth.sendTransaction(data.data.obj);
      setTokenId(data2?.logs[0].topics[3]);
      const data3 = data2?.logs[0].topics[3];

      if (data3) {
        const insert = await InsertTokenId(data3);
      } else {
        dispatch(loadingMordalOpen());
      }

      if (data2) {
        const data4 = await UseTicket(account, userTicket);
        if (data4) {
          dispatch(loadingMordalOpen());
        }
      } else {
        dispatch(loadingMordalOpen());
      }
    }
  };

  const loadingMordal = useAppSelector(
    (state) => state.loadingMordalOpen.loadingMordal
  );

  useEffect(() => {
    callUser();
  }, [loadingMordal]);

  return (
    <PickComponent
      pickNft={pickNft}
      loadingMordal={loadingMordal}
      userTicket={userTicket}
      noTicket={noTicket}
      setNoTicket={setNoTicket}
      ResultMordal={ResultMordal}
      ResultMordalControl={ResultMordalControl}
    ></PickComponent>
  );
};

export default PickContainer;
