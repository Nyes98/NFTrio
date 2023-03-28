import { useEffect, useRef } from "react";
import styled from "styled-components";

interface position {
  x: number;
  y: number;
}

const ReadyComponent = () => {
  useEffect(() => {
    const charList = document.getElementById("charList");
    charList?.addEventListener("wheel", (e: WheelEvent) => {
      e.preventDefault();
      charList.scrollTop += e.deltaY;
    });
  }, []);

  const xBase = 20;
  const yBase = 25;
  const positionConfig: Array<position> = [
    { x: xBase + 0, y: yBase + 0 },
    { x: xBase + 0, y: yBase + 20 },
    { x: xBase + 10, y: yBase + 30 },
    { x: xBase + 20, y: yBase + 20 },
    { x: xBase + 10, y: yBase + 10 },
    { x: xBase + 0, y: yBase + 40 },
  ];
  return (
    <ReadyBox>
      <CharacterListBox id="charList">
        <CharacterBox></CharacterBox>
        <CharacterBox></CharacterBox>
        <CharacterBox></CharacterBox>
        <CharacterBox></CharacterBox>
        <CharacterBox></CharacterBox>
        <CharacterBox></CharacterBox>
      </CharacterListBox>
      <FormationBox>
        <SlotBox position={positionConfig[0]} className={"fg-dark bg-melon"}>
          1
        </SlotBox>
        <SlotBox position={positionConfig[1]} className={"fg-dark bg-melon"}>
          2
        </SlotBox>
        <SlotBox position={positionConfig[2]} className={"fg-dark bg-melon"}>
          3
        </SlotBox>
        <SlotBox position={positionConfig[3]} className={"fg-dark bg-melon"}>
          4
        </SlotBox>
        <SlotBox position={positionConfig[4]} className={"fg-dark bg-melon"}>
          5
        </SlotBox>
        <SlotBox position={positionConfig[5]} className={"fg-dark bg-melon"}>
          6
        </SlotBox>
      </FormationBox>
    </ReadyBox>
  );
};

export default ReadyComponent;

const ReadyBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--pink);
  position: relative;
`;

const CharacterListBox = styled.div`
  position: absolute;
  overflow-y: hidden;
  right: 0;
  width: 25%;
  height: 100%;
  background-color: var(--dark);
  color: white;
`;

const CharacterBox = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 150px;
  background-color: var(--melon);
  :first-child {
    margin-top: 20px;
  }
  margin-bottom: 20px;
`;

const FormationBox = styled.div`
  display: flex;
  width: 50%;
`;

const SlotBox = styled.div<{ position: position }>`
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
`;
