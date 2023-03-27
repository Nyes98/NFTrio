import axios from "axios";
import { useEffect, useState } from "react";
import BattleComponent from "./Component";

const BattleContainer = () => {
  const [bgUrl, setBgUrl] = useState("");
  const [bgOnLoad, setBgOnLoad] = useState(false);
  const genAIPaint = () => {
    axios
      .post("http://localhost:8080/api/openai/getOpenAIPaint", {
        prompt: "Fantasy Forest game-styled",
      })
      .then(({ data }) => {
        console.log(data);
        setBgUrl(data.url);
      });
  };

  useEffect(() => {
    // genAIPaint();
  }, []);

  return (
    <BattleComponent
      bgUrl={bgUrl}
      bgOnLoad={bgOnLoad}
      setBgOnLoad={setBgOnLoad}
    />
  );
};

export default BattleContainer;
