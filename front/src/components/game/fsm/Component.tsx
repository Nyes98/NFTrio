import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { transform } from "typescript";
import IMonsterData from "../../../interfaces/Monster.interface";
import InftData from "../../../interfaces/NftData.interface";
import { dequeue, enqueue } from "../../../redux/Action";
import { useAppSelector } from "../../../redux/hooks";

type Props = {
  isMonster?: boolean;
  character: InftData | IMonsterData;
  index: number;
};

const FSM: React.FC<Props> = ({ isMonster, character, index }) => {
  const ActionIndex = useAppSelector((state) => state.action);
  const dispatch = useDispatch();
  const [anima, setAnima] = useState(-1);

  const Attack = async () => {
    const data = dispatch(
      enqueue({ index, to: 1, from: index, name: "attack" })
    );
  };

  // const dequeueF = async () => {
  //   dispatch(dequeue({}));
  // };

  useEffect(() => {
    if (index == 0) {
      Attack();
    }
  }, []);
  useEffect(() => {
    if (ActionIndex.length && ActionIndex[0].from == index) {
      console.log("emfjdhsi");
      setAnima(index);
      // ActionIndex[0].name;
    }
  }, [ActionIndex]);

  useEffect(() => {
    console.log(anima);
  }, [anima]);

  if (isMonster) {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <MonsterBox>
        <img
          src={`./imgs/monster/${character?.name}_${"stand"}.gif`}
          alt={character?.name}
        />
      </MonsterBox>
    );
  } else {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <CharBox className={index == anima ? "on" : ""}>
        <img src={character?.img} alt="솩" />
      </CharBox>
    );
  }
};

export default FSM;

const CharBox = styled.div`
  z-index: 2;
  /* ani */

  .on {
    animation: attack 1s ease-in-out;
  }

  transform: translate(0px, 0px) scaleX(-1);
  @keyframes attack {
    from {
      transform: translate(0px, 0px) scaleX(-1);
    }
    40% {
      transform: translate(100px, 200px) scaleX(-1);
    }
    50% {
      transform: translate(100px, 200px) scaleX(-1);
    }
    75% {
      transform: translate(100px, 200px) scaleX(-1);
    }
    76% {
      transform: translate(100px, 200px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }
`;

const MonsterBox = styled.div`
  /* ani */
`;
