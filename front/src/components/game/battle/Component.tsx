import { useEffect, useState } from "react";
import styled from "styled-components";
import { CallUser, NftInfo } from "../../../api";
import Iposition from "../../../interfaces/Position.interface";
import InftData from "../../../interfaces/NftData.interface";
import { useWeb3 } from "../../../modules/useWeb3";
import BattleSlotComponent from "./BattleSlot/Component";
import { positionConfig, MpositionConfig } from "../data/positionData";
import IMonsterData from "../../../interfaces/Monster.interface";
import { useDispatch } from "react-redux";
import { setWidth, setHeight } from "../../../redux/width";
import IAction from "../../../interfaces/Action.interface";

type Props = {
  bgUrl: string;
  bgOnLoad: boolean;
  setBgOnLoad: React.Dispatch<React.SetStateAction<boolean>>;
  monsterList: Array<IMonsterData | undefined>;
  timer: number;
  actionQueue: IAction[];
  setActionQueue: React.Dispatch<React.SetStateAction<IAction[]>>;
  setMonsterList: React.Dispatch<
    React.SetStateAction<(IMonsterData | undefined)[]>
  >;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  stage: number;
};

const BattleComponent: React.FC<Props> = ({
  bgUrl,
  monsterList,
  timer,
  actionQueue,
  setActionQueue,
  setMonsterList,
  setGameState,
  stage,
}) => {
  const { account, logIn } = useWeb3();
  const [formationList, setFormationList] = useState<Array<string>>([]);
  const [characterList, setCharacterList] = useState<Array<InftData | any>>([]);

  const dispatch = useDispatch();

  const callUserFunction = async () => {
    if (account) {
      const { data } = await CallUser(account);
      setFormationList([
        data.formation_1,
        data.formation_2,
        data.formation_3,
        data.formation_4,
        data.formation_5,
        data.formation_6,
      ]);
    }
  };

  const getCharacterList = async () => {
    let tempList = [...characterList];
    if (formationList.length) {
      for (let i = 0; i < formationList.length; ++i) {
        if (formationList[i]) {
          const curCharacter = await NftInfo(formationList[i]);
          tempList[i] = curCharacter.data;
        } else {
          tempList[i] = "";
        }
      }
    }
    setCharacterList(tempList);
  };

  useEffect(() => {
    const cliWidth = document.getElementById("BattleBox")?.clientWidth;
    const cliHeight = document.getElementById("BattleBox")?.clientHeight;
    if (cliWidth && cliHeight) {
      dispatch(setWidth(cliWidth));
      dispatch(setHeight(cliHeight));
    }
  }, []);

  useEffect(() => {
    if (!account) logIn();
    callUserFunction();
  }, [account]);

  useEffect(() => {
    if (formationList.length) {
      getCharacterList();
    }
  }, [formationList]);

  return (
    <BattleBox bgUrl={bgUrl} id={"BattleBox"}>
      {positionConfig.map((item, index) => {
        if (characterList[index])
          return (
            <BattleSlotComponent
              key={`battleSlot-${index}`}
              position={item}
              index={index}
              account={account}
              character={characterList[index]}
              characterList={monsterList}
              timer={timer}
              actionQueue={actionQueue}
              setActionQueue={setActionQueue}
              setMonsterList={setMonsterList}
              setGameState={setGameState}
              stage={stage}
            ></BattleSlotComponent>
          );
      })}
      {MpositionConfig.map((item, index) => {
        if (monsterList[index])
          return (
            <BattleSlotComponent
              key={`battleSlot-${index}`}
              position={item}
              index={index}
              account={account}
              character={monsterList[index]}
              characterList={characterList}
              timer={timer}
              actionQueue={actionQueue}
              setActionQueue={setActionQueue}
              setMonsterList={setMonsterList}
              setGameState={setGameState}
              stage={stage}
            ></BattleSlotComponent>
          );
      })}
    </BattleBox>
  );
};

export default BattleComponent;

const BtnBox = styled.div`
  div {
    background-color: blue;
    width: 100px;
    margin: 5px;
  }
  position: absolute;
  display: flex;
  top: 0;
`;

const BattleBox = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  ::before {
    content: " ";
    display: inherit;
    width: 100%;
    opacity: ${({ bgUrl }) => (bgUrl ? 0.6 : 1)};
    height: 100%;
    background: url(${({ bgUrl }) => (bgUrl ? bgUrl : "./imgs/minting.gif")});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
