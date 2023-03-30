import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import IMonsterData from "../../../interfaces/Monster.interface";
import InftData from "../../../interfaces/NftData.interface";
import Iposition from "../../../interfaces/Position.interface";
import { dequeue, enqueue } from "../../../redux/Action";
import { useAppSelector } from "../../../redux/hooks";
import { setWidth, WidthState } from "../../../redux/width";
import { positionConfig, MpositionConfig } from "../data/positionData";
import { IActionState } from "../../../redux/Action";
import IAction from "../../../interfaces/Action.interface";
import { setUserFrontLine } from "../../../api";

type Props = {
  isMonster?: boolean;
  character: InftData | IMonsterData | undefined;
  index: number;
  characterList: Array<InftData> | Array<IMonsterData | undefined>;
  timer: number;
  position: Iposition;
  actionQueue: IAction[];
  setActionQueue: React.Dispatch<React.SetStateAction<IAction[]>>;
  setMonsterList: React.Dispatch<
    React.SetStateAction<(IMonsterData | undefined)[]>
  >;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  account?: string;
  stage: number;
};

interface styledProps {
  myPosition?: Iposition;
  targetPosition?: Iposition;
  clientWidth: WidthState;
  isMonster?: boolean;
}

interface hpProps {
  maxHealth: number;
  health: number;
}

const FSM: React.FC<Props> = ({
  isMonster,
  character,
  index,
  characterList,
  timer,
  position,
  actionQueue,
  setActionQueue,
  setMonsterList,
  setGameState,
  account,
  stage,
}) => {
  const [anima, setAnima] = useState(0);
  const [target, setTarget] = useState<Iposition>();
  const [gauge, setGauge] = useState(0);
  const [charSpd, setCharSpd] = useState(0);
  const [targetPool, setTargetPool] = useState<Array<number>>([]);
  const [health, setHealth] = useState<number>(100);

  const Attack = async () => {
    const _to = findIndexFunction();

    setActionQueue((state) => [
      ...state,
      {
        index: isMonster ? index + 6 : index,
        to: _to,
        from: index,
        name: "attack",
      },
    ]);
  };

  const clientWidth = useAppSelector((state) => state.setWidth);

  const dequeueFunction = () => {
    setActionQueue(actionQueue.slice(1));
  };

  useEffect(() => {
    if (character) {
      let jobModifier = 1;
      let healthModifier = 1;
      if (character.job) {
        switch (character.job) {
          case 1:
            jobModifier = 0.7;
            healthModifier = 1.5;
            break;
          case 2:
            jobModifier = 1.5;
            healthModifier = 0.8;
            break;
          case 3:
            healthModifier = 0.8;
            break;
          case 4:
            jobModifier = 2;
            break;
          default:
            break;
        }
        setHealth(character.health * healthModifier);
        setCharSpd((character.speed + 1) * jobModifier);
      } else {
        jobModifier = 0.5;
        setCharSpd(character.speed * jobModifier);
        setHealth(character.health);
      }
    }
  }, [character]);

  useEffect(() => {
    if (gauge == 100) return;
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
    if (gauge == 100 && !actionQueue.find((item) => item.from == index)) {
      Attack();
    }
  }, [gauge]);

  useEffect(() => {
    let tempPool: Array<number> = [];
    characterList?.map((item, index) => {
      if (item) {
        tempPool.push(index);
      }
    });
    setTargetPool([...tempPool]);
  }, [characterList, actionQueue]);

  const findIndexFunction = () => {
    const randomNum = Math.floor(Math.random() * targetPool.length);
    return targetPool[randomNum];
  };

  useEffect(() => {
    if (actionQueue[0]?.from == index) {
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
    if (!actionQueue.length) return;
    if (
      actionQueue[0].from == index &&
      ((isMonster && actionQueue[0].index >= 6) ||
        (!isMonster && actionQueue[0].index < 6))
    ) {
      const toIdx = actionQueue[0].to;
      let targetConfig;

      if (isMonster) {
        targetConfig = positionConfig;
      } else {
        targetConfig = MpositionConfig;
      }
      const targetPosition = targetConfig[toIdx];

      setTarget(targetPosition);
    }

    if (
      actionQueue[0].to == index &&
      ((isMonster && actionQueue[0].index < 6) ||
        (!isMonster && actionQueue[0].index >= 6))
    ) {
      const attacker = characterList[actionQueue[0].from];

      if (!attacker) return;
      if (actionQueue[0].from < 6 && isMonster) {
        setTimeout(() => {
          setHealth(health - attacker?.attack);
        }, 500);
      } else if (actionQueue[0].from >= 6 && !isMonster) {
        setTimeout(() => {
          setHealth(health - attacker?.attack);
        }, 500);
      }
    }
  }, [actionQueue]);

  useEffect(() => {
    // console.log(health);
    if (health <= 0) {
      setMonsterList((state) => {
        state[index] = undefined;
        if (!state.filter((item) => item != undefined).length && account) {
          setUserFrontLine(account, stage);
          setGameState("stage");
        }
        return state;
      });
    }
  }, [health]);

  useEffect(() => {
    if (anima) {
      setTimeout(() => {
        setAnima(0);
      }, 900);
    } else {
      setTarget(() => undefined);
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
        myPosition={position}
        targetPosition={target}
        clientWidth={clientWidth}
      >
        <img
          src={`./imgs/monster/${character?.name}_${"stand"}.gif`}
          alt={character?.name}
        />
        <GaugeBox gauge={gauge}></GaugeBox>
        <HpBox health={health}></HpBox>
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
        myPosition={position}
        targetPosition={target}
        clientWidth={clientWidth}
      >
        <img src={character?.img} alt="솩" />
        <GaugeBox gauge={gauge}></GaugeBox>
        <HpBox health={health}></HpBox>
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
  border-radius: 2px;
  z-index: 10;
`;

const HpBox = styled.div<{ health: number }>`
  transition: all 0.2s;
  width: ${({ health }) => health}px;
  border-radius: 2px;
  position: absolute;
  background-color: red;
  height: 10px;
  bottom: 15px;
  z-index: 10;
  right: 25px;
`;
