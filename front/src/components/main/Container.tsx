import MainComponent from "./Component";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { move } from "../../redux/move";
import { useEffect, useState } from "react";
import { RecentNFT } from "../../api";

const MainContainer = () => {
  // Redux 사용 예시
  const reduxTest = useAppSelector((state) => state.move.value);
  const dispatch = useDispatch();
  const [recent10, setRecent10] = useState();

  const ReduxFix = () => {
    dispatch(move("test"));
  };

  const callRecentNFT = async () => {
    const data = await RecentNFT(0, 10);
    console.log(data.data);
    setRecent10(data.data);
  };

  useEffect(() => {
    callRecentNFT();
  }, []);

  return <MainComponent recent10={recent10}></MainComponent>;
};

export default MainContainer;
