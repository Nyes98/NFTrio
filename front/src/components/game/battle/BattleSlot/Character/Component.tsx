import { useEffect, useState } from "react";
import styled from "styled-components";
import IMonsterData from "../../../../../interfaces/Monster.interface";
import InftData from "../../../../../interfaces/NftData.interface";
import Iposition from "../../../../../interfaces/Position.interface";
import FSM from "../../../fsm/Component";
import IAction from "../../../../../interfaces/Action.interface";

type Props = {
  character: InftData | IMonsterData | undefined;
  position: Iposition;
  index: number;
  characterList: Array<InftData> | Array<IMonsterData | undefined>;
  timer: number;
  actionQueue: IAction[];
  setActionQueue: React.Dispatch<React.SetStateAction<IAction[]>>;
  setMonsterList: React.Dispatch<
    React.SetStateAction<(IMonsterData | undefined)[]>
  >;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  account?: string;
  stage: number;
};

const CharacterComponent: React.FC<Props> = ({
  character,
  position,
  index,
  characterList,
  timer,
  actionQueue,
  setActionQueue,
  setMonsterList,
  setGameState,
  account,
  stage,
}) => {
  return (
    <CharacterBox>
      <FSM
        // state={state}
        isMonster={position.m}
        position={position}
        // monsterName={monsterName}
        index={index}
        character={character}
        characterList={characterList}
        timer={timer}
        actionQueue={actionQueue}
        setActionQueue={setActionQueue}
        setMonsterList={setMonsterList}
        setGameState={setGameState}
        account={account}
        stage={stage}
      ></FSM>
    </CharacterBox>
  );
};

export default CharacterComponent;

const CharacterBox = styled.div`
  width: 10%;
  height: 7%;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  > div {
    margin-bottom: 50px;
  }
`;
