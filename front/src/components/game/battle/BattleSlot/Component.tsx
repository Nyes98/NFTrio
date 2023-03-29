import { useState } from "react";
import styled from "styled-components";
import InftData from "../../../../interfaces/NftData.interface";
import Iposition from "../../../../interfaces/Position.interface";
import CharacterComponent from "./Character/Component";
import FSM from "../../fsm/Component";
import IMonsterData from "../../../../interfaces/Monster.interface";

type Props = {
  position: Iposition;
  index: number;
  account?: string;
  character: IMonsterData | InftData;
};

const BattleSlotComponent: React.FC<Props> = ({
  position,
  character,
  index,
}) => {
  const [state, setState] = useState("stand");
  const [monsterName, setMonsterName] = useState("curseEye");

  const Attack = () => {};
  return (
    <SlotBox position={position} className={"bg-melon fg-dark"}>
      <CharacterComponent
        position={position}
        character={character}
        index={index}
      ></CharacterComponent>
      {/* <img src={character?.img} alt="" /> */}
      {/* <img src={character?.img} alt="" /> */}
    </SlotBox>
  );
};

export default BattleSlotComponent;

const SlotBox = styled.div<{ position: Iposition }>`
  width: 10%;
  height: 7%;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ position }) => position.x + "%"};
  top: ${({ position }) => position.y + "%"};
  border-radius: 50%;
  > img {
    pointer-events: none;
    z-index: 11;
    position: absolute;
    bottom: -20px;
    /* transform: scaleX(-1); */
  }
`;
