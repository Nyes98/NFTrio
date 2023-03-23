import MainComponent from "./Component";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { move } from "../../redux/move";
import { useEffect, useState } from "react";
import { RecentNft } from "../../api";

const MainContainer = () => {
  // Redux 사용 예시
  const reduxTest = useAppSelector((state) => state.move.value);
  const dispatch = useDispatch();
  const [recentArr1, setRecentArr1] = useState();
  const [recentArr2, setRecentArr2] = useState();
  const [topPriceArr, setTopPriceArr] = useState();

  const ReduxFix = () => {
    dispatch(move("test"));
  };

  const callRecentNFT = async () => {
    const data = await RecentNft(0, 10, 0, 0);
    setRecentArr1(data.data.slice(0, 5));
    setRecentArr2(data.data.slice(5, 10));
  };

  const callTopPriceNFT = async () => {
    const data = await RecentNft(0, 6, 0, 2);
    console.log(data.data);
    setTopPriceArr(data.data);
  };

  useEffect(() => {
    callRecentNFT();
    callTopPriceNFT();
  }, []);

  return (
    <MainComponent
      recentArr1={recentArr1}
      recentArr2={recentArr2}
      topPriceArr={topPriceArr}
    ></MainComponent>
  );
};

export default MainContainer;
