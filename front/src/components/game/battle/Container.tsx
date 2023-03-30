import axios from "axios";
import { useEffect, useState } from "react";
import { CallStage, getCharaterList, getMonsterData } from "../../../api";
import IMonsterData from "../../../interfaces/Monster.interface";
import InftData from "../../../interfaces/NftData.interface";
import BattleComponent from "./Component";
import { useWeb3 } from "../../../modules/useWeb3";
import IAction from "../../../interfaces/Action.interface";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { enqueue, dequeue } from "../../../redux/Action";

type Props = {
  stage: number;
  actionQueue: IAction[];
  setActionQueue: React.Dispatch<React.SetStateAction<IAction[]>>;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
};

const BattleContainer: React.FC<Props> = ({
  stage,
  actionQueue,
  setActionQueue,
  setGameState,
}) => {
  const [bgUrl, setBgUrl] = useState("");
  const [bgOnLoad, setBgOnLoad] = useState(false);
  const [battleState, setBattleState] = useState();
  const [timer, setTimer] = useState(0);
  const [monsterList, setMonsterList] = useState<
    Array<IMonsterData | undefined>
  >([]);

  const { account, logIn } = useWeb3();

  const genAIPaint = () => {
    axios
      .post("http://localhost:8080/api/openai/getOpenAIPaint", {
        prompt: "Fantasy Forest game-styled",
      })
      .then(({ data }) => {
        setBgUrl(data.url);
      });
  };

  const callStage = async () => {
    const {
      data: { slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9 },
    } = await CallStage(stage);
    [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9].map(
      async (item, index) => {
        const data = await getMonsterData(item);
        if (data) {
          pushMonsterList(data, index);
        } else {
          pushMonsterList(undefined, index);
        }
      }
    );
  };

  const pushMonsterList = (_item: IMonsterData | undefined, index: number) => {
    const tempList = monsterList;
    tempList[index] = _item;
    setMonsterList(tempList);
  };

  function attack(_from: number, _to: number) {
    // dispatch();
  }

  function skill(_from: number, _to: number) {}

  useEffect(() => {
    logIn();
  }, []);

  useEffect(() => {
    // genAIPaint();
    if (monsterList.length == 0) callStage();
  }, [stage]);

  useEffect(() => {
    setTimeout(() => {
      if (timer + 1 >= 100) {
        setTimer(0);
      } else {
        if (!actionQueue.length) setTimer(timer + 1);
        else {
          setTimeout(() => {
            setTimer(timer + 1);
          }, 1100);
        }
      }
    }, 1000 / 10);
  }, [timer]);

  useEffect(() => {
    console.log(monsterList.filter((item) => item != undefined).length);
  }, [monsterList]);

  return (
    <BattleComponent
      bgUrl={bgUrl}
      bgOnLoad={bgOnLoad}
      setBgOnLoad={setBgOnLoad}
      monsterList={monsterList}
      setMonsterList={setMonsterList}
      timer={timer}
      actionQueue={actionQueue}
      setActionQueue={setActionQueue}
      setGameState={setGameState}
      stage={stage}
    />
  );
};

export default BattleContainer;
