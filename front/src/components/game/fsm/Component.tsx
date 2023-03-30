import { Action } from "@remix-run/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { transform } from "typescript";
import IMonsterData from "../../../interfaces/Monster.interface";
import InftData from "../../../interfaces/NftData.interface";
import Iposition from "../../../interfaces/Position.interface";
import { dequeue, enqueue } from "../../../redux/Action";
import { useAppSelector } from "../../../redux/hooks";
import { setWidth, WidthState } from "../../../redux/width";
import { positionConfig, MpositionConfig } from "../data/positionData";

type Props = {
  isMonster?: boolean;
  character: InftData | IMonsterData;
  index: number;
  characterList?: Array<InftData> | Array<IMonsterData>;
  timer: number;
};

interface styledProps {
  myPosition?: Iposition;
  targetPosition?: Iposition;
  clientWidth: WidthState;
  isMonster?: boolean;
}

const FSM: React.FC<Props> = ({
  isMonster,
  character,
  index,
  characterList,
  timer,
}) => {
  const ActionIndex = useAppSelector((state) => state.action);
  const dispatch = useDispatch();
  const [anima, setAnima] = useState(0);
  const [location, setLocation] = useState<Iposition>();
  const [target, setTarget] = useState<Iposition>();
  const [gauge, setGauge] = useState(0);
  const [charSpd, setCharSpd] = useState(0);

  const Attack = async (_to: number) => {
    dispatch(
      enqueue({
        index: isMonster ? index + 6 : index,
        to: _to,
        from: index,
        name: "attack",
      })
    );
  };

  const clientWidth = useAppSelector((state) => state.setWidth);

  const dequeueFunction = () => {
    dispatch(dequeue({}));
  };

  useEffect(() => {
    if (character) {
      let jobModifier = 1;
      if (character.job) {
        switch (character.job) {
          case 1:
            jobModifier = 0.7;
            break;
          case 2:
            jobModifier = 1.5;
            break;
          case 3:
            break;
          case 4:
            jobModifier = 2;
            break;
          default:
            break;
        }
        setCharSpd((character.speed + 1) * jobModifier);
      } else {
        jobModifier = 0.5;
        setCharSpd(character.speed * jobModifier);
      }
    }
  }, [character]);

  useEffect(() => {
    if (isMonster) {
      if (gauge < 100) {
        setGauge(gauge + charSpd);
      } else {
        setGauge(100);
      }
    } else {
      if (gauge < 100) {
        setGauge(gauge + charSpd);
      } else {
        setGauge(100);
      }
    }
  }, [timer]);

  useEffect(() => {
    if (
      characterList &&
      gauge == 100 &&
      !ActionIndex.find((item) => item.from == index)
    ) {
      let targetIndex;

      while (characterList[Math.floor(Math.random() * 9)]) {
        targetIndex = Math.floor(Math.random() * 9);
        console.log(
          "누가누가",
          character.name,
          "찾는중이얌",
          characterList[targetIndex]?.name
        );
      }

      if (targetIndex) {
        Attack(targetIndex);
      }
    }
  }, [gauge]);

  const findIndexFunction = () => {
    let curNum = Math.floor(Math.random() * 8);
    if (characterList && characterList[curNum]) {
      return curNum;
    }
  };

  useEffect(() => {
    if (ActionIndex[0]?.from == index) {
      if (!target) {
        setTimeout(() => {
          dequeueFunction();
          setGauge(0);
        }, 100);
      }
    }
    if (target) {
      setAnima(1);
    }
  }, [target]);

  useEffect(() => {
    if (
      ActionIndex.length &&
      ActionIndex[0].from == index &&
      characterList &&
      ((isMonster && ActionIndex[0].index >= 6) ||
        (!isMonster && ActionIndex[0].index < 6))
    ) {
      const toIdx = ActionIndex[0].to;
      const curTarget = characterList[toIdx];
      let myConfig;
      let targetConfig;

      if (isMonster) {
        myConfig = MpositionConfig;
        targetConfig = positionConfig;
      } else {
        myConfig = positionConfig;
        targetConfig = MpositionConfig;
      }
      const targetPosition = targetConfig[toIdx];
      const myLocation = myConfig[index];

      setTarget(() => targetPosition);
      setLocation(myLocation);
    }
  }, [ActionIndex]);

  useEffect(() => {
    if (anima) {
      setTimeout(() => {
        setAnima(0);
      }, 900);
    } else {
      setTarget((_) => undefined);
    }
  }, [anima]);

  if (isMonster) {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <MonsterBox
        className={anima ? "on2" : ""}
        myPosition={location}
        targetPosition={target}
        clientWidth={clientWidth}
      >
        <img
          src={`./imgs/monster/${character?.name}_${"stand"}.gif`}
          alt={character?.name}
        />
        <GaugeBox gauge={gauge}></GaugeBox>
      </MonsterBox>
    );
  } else {
    // switch (state) {
    //   case "stand":
    //     break;
    // }
    return (
      <CharBox
        className={anima ? "on" : ""}
        myPosition={location}
        targetPosition={target}
        clientWidth={clientWidth}
      >
        <img src={character?.img} alt="솩" />
        <GaugeBox gauge={gauge}></GaugeBox>
      </CharBox>
    );
  }
};

export default FSM;

const CharBox = styled.div<styledProps>`
  z-index: 2;
  /* ani */

  &.on {
    animation: attack 1s ease-in-out;

    @keyframes attack {
      from {
        transform: translate(0px, 0px) scaleX(-1);
      }
      40% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) -
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      50% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) -
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      75% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) -
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      76% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) -
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      to {
        transform: translate(0px, 0px);
      }
    }
  }

  transform: translate(0px, 0px) scaleX(-1);
`;

const MonsterBox = styled.div<styledProps>`
  > div {
    left: -30px;
    bottom: -30px;
  }

  &.on2 {
    animation: attack2 1s ease-in-out;

    @keyframes attack2 {
      from {
        transform: translate(0px, 0px) scaleX(-1);
      }
      40% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) +
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      50% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) +
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      75% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) +
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      76% {
        transform: translate(
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.x && myPosition?.x) {
                const diffX =
                  (clientWidth.width / 100) *
                    (targetPosition?.x - myPosition?.x) +
                  50;

                return diffX + "px";
              }
            }},
            ${({ myPosition, targetPosition, clientWidth }) => {
              if (targetPosition?.y && myPosition?.y) {
                const diffY =
                  (clientWidth.height / 100) *
                  (targetPosition?.y - myPosition?.y);

                return diffY + "px";
              }
            }}
          )
          scaleX(-1);
      }
      to {
        transform: translate(0px, 0px);
      }
    }
  }
`;

const GaugeBox = styled.div<{ gauge: number }>`
  transition: all 0.04s;
  width: ${({ gauge }) => gauge * 0.8 + "px"};
  background-color: yellow;
  height: 10px;
  position: absolute;
  bottom: 0;
  right: 25px;
  z-index: 10;
`;
