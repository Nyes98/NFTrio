import { useEffect } from "react";
import styled from "styled-components";
import { transform } from "typescript";
import InftData from "../../../interfaces/NftData.interface";

type Props = {
  state: string;
  isMonster?: boolean;
  monsterName: string;
  character: InftData;
};

const FSM: React.FC<Props> = ({ state, isMonster, monsterName, character }) => {
  if (isMonster) {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <MonsterBox>
        <img src={`./imgs/monster/${monsterName}_${state}.gif`} alt={state} />
      </MonsterBox>
    );
  } else {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <CharBox>
        <img src={character?.img} alt="솩" />
      </CharBox>
    );
  }
};

export default FSM;

const CharBox = styled.div`
  /* ani */
  transform: scaleX(-1);
`;

const MonsterBox = styled.div`
  /* ani */
`;
