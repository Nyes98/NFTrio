import { useEffect, useState } from "react";
import styled from "styled-components";
import IMonsterData from "../../../../../interfaces/Monster.interface";
import InftData from "../../../../../interfaces/NftData.interface";
import Iposition from "../../../../../interfaces/Position.interface";
import FSM from "../../../fsm/Component";

type Props = {
  character: InftData | IMonsterData;
  position: Iposition;
  index: number;
};

const CharacterComponent: React.FC<Props> = ({
  character,
  position,
  index,
}) => {
  const [curPosition, setCurPosition] = useState<Iposition>(position);
  const [curIntervalId, setCurIntervalId] = useState<NodeJS.Timer>();

  console.log(character);

  return (
    <CharacterBox>
      <FSM
        // state={state}
        isMonster={position.m}
        // monsterName={monsterName}
        index={index}
        character={character}
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
