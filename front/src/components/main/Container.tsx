import MainComponent from "./Component";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { RecentNft } from "../../api";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  // Redux 사용 예시
  const reduxTest = useAppSelector((state) => state.move.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [recentArr1, setRecentArr1] = useState();
  const [recentArr2, setRecentArr2] = useState();
  const [topPriceArr, setTopPriceArr] = useState();
  const [jobFilter, setJobFilter] = useState(0);

  const jobArr = ["All", "Warrior", "Wizard", "Archer", "Assassin"];

  const move = (where: string) => {
    navigate(`/nftinfo/${where}`);
  };

  const move2 = (where: string) => {
    navigate(where);
  };

  const selJob = (index: number) => {
    setJobFilter(index);

    if (jobFilter == index) setJobFilter(0);
    console.log(jobFilter);
  };

  const callRecentNFT = async () => {
    const data = await RecentNft(0, 10, jobFilter, 0);
    setRecentArr1(data.data.slice(0, 5));
    setRecentArr2(data.data.slice(5, 10));
  };

  const callTopPriceNFT = async () => {
    const data = await RecentNft(0, 6, 0, 2);
    console.log(data.data);
    setTopPriceArr(data.data);
  };

  useEffect(() => {
    callTopPriceNFT();
  }, []);

  useEffect(() => {
    callRecentNFT();
  }, [jobFilter]);

  return (
    <MainComponent
      recentArr1={recentArr1}
      recentArr2={recentArr2}
      topPriceArr={topPriceArr}
      move={move}
      move2={move2}
      jobArr={jobArr}
      selJob={selJob}
      jobFilter={jobFilter}
    ></MainComponent>
  );
};

export default MainContainer;
