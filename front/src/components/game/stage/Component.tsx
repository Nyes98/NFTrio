import { useEffect, useState } from "react";
import styled from "styled-components";

interface IMonster {
  name: string;
  health: number;
  attack: number;
  speed: number;
  skill: number;
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
};

const StageComponent: React.FC<Props> = ({
  stage,
  setStage,
  curStage,
  getMonsterByName,
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

  return (
    <StageBox>
      <StageDiv onClick={() => setStage(0)}>0</StageDiv>
      <StageDiv onClick={() => setStage(1)}>1</StageDiv>
      <StageDiv onClick={() => setStage(2)}>2</StageDiv>
      <StageDiv onClick={() => setStage(3)}>3</StageDiv>
      <StageDiv onClick={() => setStage(4)}>4</StageDiv>
      <StageDiv onClick={() => setStage(5)}>5</StageDiv>
      <StageDiv onClick={() => setStage(6)}>6</StageDiv>
      <StageDiv onClick={() => setStage(7)}>7</StageDiv>
      <StageDiv onClick={() => setStage(8)}>8</StageDiv>
      <StageDiv onClick={() => setStage(9)}>9</StageDiv>
      <MonsterDetailBox className="bg-dark fg-white">
        <MonsterRowBox>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot1) onMouseEnterFunction(curStage?.slot1);
            }}
          >
            <img src={`./imgs/${curStage?.slot1}.gif`} alt="8" />
            {curStage?.slot1}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot2) onMouseEnterFunction(curStage?.slot2);
            }}
          >
            <img src={`./imgs/${curStage?.slot2}.gif`} alt="8" />
            {curStage?.slot2}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot3) onMouseEnterFunction(curStage?.slot3);
            }}
          >
            <img src={`./imgs/${curStage?.slot3}.gif`} alt="8" />
            {curStage?.slot3}
          </MonsterItem>
        </MonsterRowBox>
        <MonsterRowBox>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot4) onMouseEnterFunction(curStage?.slot4);
            }}
          >
            <img src={`./imgs/${curStage?.slot4}.gif`} alt="8" />
            {curStage?.slot4}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot5) onMouseEnterFunction(curStage?.slot5);
            }}
          >
            <img src={`./imgs/${curStage?.slot5}.gif`} alt="8" />
            {curStage?.slot5}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot6) onMouseEnterFunction(curStage?.slot6);
            }}
          >
            <img src={`./imgs/${curStage?.slot6}.gif`} alt="8" />
            {curStage?.slot6}
          </MonsterItem>
        </MonsterRowBox>
        <MonsterRowBox>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot7) onMouseEnterFunction(curStage?.slot7);
            }}
          >
            <img src={`./imgs/${curStage?.slot7}.gif`} alt="8" />
            {curStage?.slot7}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot8) onMouseEnterFunction(curStage?.slot8);
            }}
          >
            <img src={`./imgs/${curStage?.slot8}.gif`} alt="8" />
            {curStage?.slot8}
          </MonsterItem>
          <MonsterItem
            onMouseEnter={() => {
              if (curStage?.slot9) onMouseEnterFunction(curStage?.slot9);
            }}
          >
            <img src={`./imgs/${curStage?.slot9}.gif`} alt="8" />
            {curStage?.slot9}
          </MonsterItem>
        </MonsterRowBox>
      </MonsterDetailBox>
      <InfoBox className="bg-dark fg-white">
        <div className="fg-hotpink">{curMonster.name}</div>
        <div>health : {curMonster.health}</div>
        <div>speed : {curMonster.speed}</div>
        <div>attack : {curMonster.attack}</div>
        <div>skill : {curMonster.skill}</div>
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
  background-color: var(--melon);
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
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

const MonsterRowBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 40%;
  height: 25%;
  font-size: 0.5rem;
  > div {
    width: 30%;
    position: relative;
    ::after {
      content: " ";
      position: absolute;
      width: 50px;
      height: 20px;
      left: 10%;
      top: 40px;
      opacity: 0.3;
      border-radius: 50%;
      background-color: red;
    }
    img {
      z-index: 1;
      position: relative;
      margin: auto;
      display: block;
      width: 40%;
      height: 80px;
      object-fit: contain;
    }
  }
`;

const InfoBox = styled.div`
  position: absolute;
  right: -30%;
  width: 30%;
  height: 100%;
`;

const MonsterItem = styled.div``;