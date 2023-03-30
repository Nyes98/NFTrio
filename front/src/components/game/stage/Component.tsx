import { useEffect, useState } from "react";
import styled from "styled-components";

interface IMonster {
  name: string;
  health: number;
  attack: number;
  speed: number;
  skill: number;
}

interface position {
  x: number;
  y: number;
}

type Props = {
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  curStage: {
    slot1?: string;
    slot2?: string;
    slot3?: string;
    slot4?: string;
    slot5?: string;
    slot6?: string;
    slot7?: string;
    slot8?: string;
    slot9?: string;
  };
  getMonsterByName: (_name: string) => Promise<any>;
  skillList: {
    monster: string | undefined;
    name: string | undefined;
    description: string | undefined;
  }[];
  getSkillInfo: () => Promise<any>;
  stageInfolist: {
    stage: number;
    totalMonster: string | undefined;
    monsterType: string | undefined;
    clearHint: string | undefined;
  }[];
  getStageInfo: () => Promise<any>;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
};

const StageComponent: React.FC<Props> = ({
  stage,
  setStage,
  curStage,
  getMonsterByName,
  skillList,
  getSkillInfo,
  stageInfolist,
  getStageInfo,
  setGameState,
}) => {
  const [curMonster, setCurMonster] = useState<IMonster>({
    name: "",
    health: 0,
    attack: 0,
    speed: 0,
    skill: 0,
  });
  const [monsterList, setMonsterList] = useState<Array<IMonster>>([]);
  /**
   * @param _monsterName
   * @returns
   * 마우스를 몬스터에 올렸을 때,
   * 몬스터 정보를 받아오지만 이미 받아온 몬스터면 불러오지 않는다.
   */
  const onMouseEnterFunction = (_monsterName: string) => {
    for (let i = 0; i < monsterList.length; ++i) {
      if (monsterList[i].name == _monsterName) {
        setCurMonster({ ...monsterList[i] });
        return;
      }
    }
    getMonsterByName(_monsterName).then((data) => {
      setCurMonster({ ...data });
      setMonsterList([...monsterList, { ...data }]);
    });
  };

  useEffect(() => {
    if (curStage?.slot1) onMouseEnterFunction(curStage?.slot1);
  }, [curStage]);

  useEffect(() => {
    getSkillInfo();
    getStageInfo();
  }, []);

  console.log("스킬", skillList);
  const xBase = 20;
  const yBase = 25;
  const positionConfig: Array<position> = [
    { x: xBase + 10, y: yBase + 10 },
    { x: xBase + 10, y: yBase + 30 },
    { x: xBase + 0, y: yBase + 0 },
    { x: xBase + 0, y: yBase + 20 },
    { x: xBase + 0, y: yBase + 40 },
    { x: xBase - 10, y: yBase - 10 },
    { x: xBase - 10, y: yBase + 10 },
    { x: xBase - 10, y: yBase + 30 },
    { x: xBase - 10, y: yBase + 50 },
  ];

  const stageArr: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <StageBox>
      {stageArr?.map((item, index) => {
        return (
          <StageDiv
            key={`stageDiv-${index}`}
            style={{
              backgroundColor: `${
                stage == index ? "var(--dark)" : "var(--melon)"
              }`,
            }}
            onClick={() => setStage(index)}
          >
            {item}
          </StageDiv>
        );
      })}

      {/* <MonsterDetailBox className="bg-dark fg-white"> */}
      <MonsterDetailBox className="fg-white">
        <MonsterLeftBox className="fg-dark">
          {stage == stageInfolist[stage]?.stage ? (
            <div>
              <div>
                <span>Stage:</span> {stageInfolist[stage]?.stage}
              </div>
              <div>
                <span>Total Monster:</span> {stageInfolist[stage]?.totalMonster}
              </div>
              <div>
                <span>Monster:</span> {stageInfolist[stage]?.monsterType}
              </div>
              <div>
                <span>Hint:</span> {stageInfolist[stage]?.clearHint}
              </div>
            </div>
          ) : (
            <></>
          )}
        </MonsterLeftBox>
        <MonsterRightBox>
          {!curStage.slot1 ? (
            <MonsterItem
              position={positionConfig[0]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[0]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot1) onMouseEnterFunction(curStage?.slot1);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot1}_stand.gif`}
                alt="8"
              />
              {curStage?.slot1}
            </MonsterItem>
          )}

          {!curStage.slot2 ? (
            <MonsterItem
              position={positionConfig[1]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[1]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot2) onMouseEnterFunction(curStage?.slot2);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot2}_stand.gif`}
                alt="8"
              />
              {curStage?.slot2}
            </MonsterItem>
          )}
          {!curStage.slot3 ? (
            <MonsterItem
              position={positionConfig[2]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[2]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot3) onMouseEnterFunction(curStage?.slot3);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot3}_stand.gif`}
                alt="8"
              />
              {curStage?.slot3}
            </MonsterItem>
          )}
          {!curStage.slot4 ? (
            <MonsterItem
              position={positionConfig[3]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[3]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot4) onMouseEnterFunction(curStage?.slot4);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot4}_stand.gif`}
                alt="8"
              />
              {curStage?.slot4}
            </MonsterItem>
          )}
          {!curStage.slot5 ? (
            <MonsterItem
              position={positionConfig[4]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[4]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot5) onMouseEnterFunction(curStage?.slot5);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot5}_stand.gif`}
                alt="8"
              />
              {curStage?.slot5}
            </MonsterItem>
          )}
          {!curStage.slot6 ? (
            <MonsterItem
              position={positionConfig[5]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[5]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot6) onMouseEnterFunction(curStage?.slot6);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot6}_stand.gif`}
                alt="8"
              />
              {curStage?.slot6}
            </MonsterItem>
          )}
          {!curStage.slot7 ? (
            <MonsterItem
              position={positionConfig[6]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[6]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot7) onMouseEnterFunction(curStage?.slot7);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot7}_stand.gif`}
                alt="8"
              />
              {curStage?.slot7}
            </MonsterItem>
          )}
          {!curStage.slot8 ? (
            <MonsterItem
              position={positionConfig[7]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[7]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot8) onMouseEnterFunction(curStage?.slot8);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot8}_stand.gif`}
                alt="8"
              />
              {curStage?.slot8}
            </MonsterItem>
          )}
          {!curStage.slot9 ? (
            <MonsterItem
              position={positionConfig[8]}
              stage={stage}
            ></MonsterItem>
          ) : (
            <MonsterItem
              position={positionConfig[8]}
              stage={stage}
              onMouseEnter={() => {
                if (curStage?.slot9) onMouseEnterFunction(curStage?.slot9);
              }}
            >
              <img
                src={`./imgs/monster/${curStage?.slot9}_stand.gif`}
                alt="8"
              />
              {curStage?.slot9}
            </MonsterItem>
          )}
        </MonsterRightBox>
      </MonsterDetailBox>
      <InfoBox className="bg-dark fg-white">
        <div>👾Monster Info👾</div>
        <div>
          <div className="fg-hotpink">{curMonster.name}</div>
          <div>health : {curMonster.health}</div>
          <div>speed : {curMonster.speed}</div>
          <div>attack : {curMonster.attack}</div>
          <div>
            {curMonster.name == skillList[curMonster.skill]?.monster ? (
              <>
                <div>skill : {skillList[curMonster.skill]?.name}</div>
                <div>
                  description : {skillList[curMonster?.skill]?.description}
                </div>
              </>
            ) : (
              "없음"
            )}
          </div>
        </div>
        <div>
          <button
            className="nftrio-button ac-melon bg-pink fg-dark "
            onClick={() => {
              setGameState("battle");
            }}
          >
            Start
          </button>
        </div>
      </InfoBox>
    </StageBox>
  );
};

export default StageComponent;

const StageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  position: absolute;
  column-gap: 50px;
`;

const StageDiv = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;
  display: block;
  z-index: 10;
  text-align: center;

  &:nth-child(2n) {
    top: -30%;
  }
  &:nth-child(3n) {
    top: 30%;
  }
`;

const MonsterDetailBox = styled.div`
  width: 80%;
  height: 80%;
  bottom: 10px;
  left: 10%;
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: center;
  background-image: url("./imgs/forestC.jpg");
`;

const MonsterLeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  & > div {
    height: 60%;
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    justify-content: center;
    margin: auto;
    font-size: 0.5rem;

    & > div > span {
      font-size: 0.6rem;
    }
  }
  background-image: url("./imgs/paper.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const MonsterRightBox = styled.div`
  width: 50%;
  height: 100%;
`;

const InfoBox = styled.div`
  position: absolute;
  right: -30%;
  width: 30%;
  height: 100%;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  & > div:nth-child(2) {
    font-size: 0.7rem;
    margin-left: 15px;
  }

  & > div:nth-child(3) {
    margin: auto;
    & > button {
      border-radius: 25px;
    }
  }
`;

const MonsterItem = styled.div<{ position: position; stage: number }>`
  width: 10%;
  height: 7%;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${({ position }) => position.x + "%"};
  top: ${({ position }) => position.y + "%"};
  border-radius: 50%;
  font-size: 0.5rem;

  ::after {
    content: " ";
    position: absolute;
    width: 50px;
    height: 20px;
    right: 10%;
    top: 40px;
    opacity: 0.3;
    border-radius: 50%;
    background-color: red;
  }
  img {
    z-index: 1;
    position: absolute;
    margin: auto;
    display: block;
    top: 50%;
    width: ${({ stage }) => (stage == 4 || stage == 9 ? "100%" : "40%")};
    height: 50px;
    object-fit: contain;
  }
`;
