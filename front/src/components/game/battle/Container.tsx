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
};

const BattleContainer: React.FC<Props> = ({ stage }) => {
  const [bgUrl, setBgUrl] = useState("");
  const [bgOnLoad, setBgOnLoad] = useState(false);
  const [battleState, setBattleState] = useState();
  const [timer, setTimer] = useState(0);
  const [monsterList, setMonsterList] = useState<Array<IMonsterData>>([]);
  const [characterList, setCharacterList] = useState<Array<InftData>>([]);

  const { account, logIn } = useWeb3();

  const ActionQueue = useAppSelector((state) => state.action);

  const dispatch = useDispatch();

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
        pushMonsterList(data, index);
      }
    );
  };

  const pushMonsterList = (_item: IMonsterData, index: number) => {
    const tempList = monsterList;
    tempList[index] = _item;
    setMonsterList(tempList);
  };

  const callCharacter = async () => {
    if (account) {
      const {
        data: { Characters },
      } = await getCharaterList(account);
      setCharacterList(Characters);
    }
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
    callCharacter();
  }, [account]);

  useEffect(() => {}, [monsterList]);

  useEffect(() => {
    setTimeout(() => {
      if (timer >= 100) {
        setTimer(0);
      } else {
        if (!ActionQueue.length) setTimer(timer + 1);
      }
    }, 1000 / 10);
  }, [timer, ActionQueue]);

  return (
    <BattleComponent
      bgUrl={bgUrl}
      bgOnLoad={bgOnLoad}
      setBgOnLoad={setBgOnLoad}
      monsterList={monsterList}
      timer={timer}
    />
  );
};

export default BattleContainer;
