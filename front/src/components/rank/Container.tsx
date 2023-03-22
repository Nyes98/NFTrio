import { useState } from "react";
import RankComponent from "./Component";

const RankContainer = () => {
  const [categori, setCategori] = useState(1);

  const CagetoriControl = (num: number) => {
    setCategori(num);
  };
  return (
    <RankComponent
      CagetoriControl={CagetoriControl}
      categori={categori}
    ></RankComponent>
  );
};

export default RankContainer;
