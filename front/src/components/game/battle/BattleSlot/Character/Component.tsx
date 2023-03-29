import { useEffect, useState } from "react";
import styled from "styled-components";
import InftData from "../../../../../interfaces/NftData.interface";
import Iposition from "../../../../../interfaces/Position.interface";

type Props = {
  character: InftData;
  position: Iposition;
};

const CharacterComponent: React.FC<Props> = ({ character, position }) => {
  const [curPosition, setCurPosition] = useState<Iposition>(position);
  const [curIntervalId, setCurIntervalId] = useState<NodeJS.Timer>();

  const moveFunc = (_from: Iposition, _to: Iposition) => {
    let count = 0;
    setCurIntervalId(
      setInterval(() => {
        setCurPosition(() => ({
          x: _from.x + (_to.x - _from.x) * (count / 100),
          y: _from.y + (_to.y - _from.y) * (count / 100),
        }));
        count++;
      }, 1000 / 60)
    );
  };

  useEffect(() => {
    moveFunc(curPosition, { x: 1000, y: 80 });
  }, []);

  useEffect(() => {
    if (curPosition.x >= 1000) {
      clearInterval(curIntervalId);
    }
  }, [curPosition.x]);

  return (
    <CharacterBox position={curPosition}>
      <img src={character?.img} alt="" />
    </CharacterBox>
  );
};

export default CharacterComponent;

const CharacterBox = styled.div<{ position: Iposition }>`
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
    transform: scaleX(-1);
  }
`;
