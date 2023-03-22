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
  const [recentArr1, setRecentArr1] = useState();
  const [recentArr2, setRecentArr2] = useState();

  const ReduxFix = () => {
    dispatch(move("test"));
  };

  const callRecentNFT = async () => {
    const data = await RecentNFT(0, 10);
    setRecentArr1(data.data.slice(0, 5));
    setRecentArr2(data.data.slice(5, 10));
  };

  useEffect(() => {
    callRecentNFT();
  }, []);

  return (
    <MainComponent
      recentArr1={recentArr1}
      recentArr2={recentArr2}
    ></MainComponent>
  );
};

export default MainContainer;
