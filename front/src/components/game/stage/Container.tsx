import axios from "axios";
import { useEffect, useState } from "react";
import StageComponent from "./Component";

type Props = {
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
};

const StageContainer: React.FC<Props> = ({ stage, setStage }) => {
  const [curStage, setCurStage] = useState({
    slot1: "",
    slot2: "",
    slot3: "",
    slot4: "",
    slot5: "",
    slot6: "",
    slot7: "",
    slot8: "",
    slot9: "",
  });

  const getMonsterByName = async (_name: string) => {
    const data = (
      await axios.post("http://localhost:8080/api/game/getMonsterByName", {
        monsterName: _name,
      })
    ).data;
    return data;
  };

  const getStage = (_stage: number) => {
    axios
      .post("http://localhost:8080/api/game/getStage", {
        stage,
      })
      .then(({ data }) => {
        setCurStage(data);
        console.log(data);
        return data;
      });
  };

  useEffect(() => {
    getStage(stage);
  }, [stage]);
  return (
    <StageComponent
      stage={stage}
      setStage={setStage}
      curStage={curStage}
      getMonsterByName={getMonsterByName}
    />
  );
};

export default StageContainer;
