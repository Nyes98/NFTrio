import { useEffect, useState } from "react";
import styled from "styled-components";
import InftData from "../../../../interfaces/NftData.interface";
import Iposition from "../../../../interfaces/Position.interface";
import { NftInfo, SetUserFormation, ClearUserFormation } from "../../../../api";

type Props = {
  character: string;
  position: Iposition;
  index: number;
  account?: string;
  formationState?: number;
  selectedCharacter: InftData;
  callUserFunction: () => Promise<void>;
};

const SlotComponent: React.FC<Props> = ({
  character,
  position,
  index,
  account,
  formationState,
  selectedCharacter,
  callUserFunction,
}) => {
  const [curCharacter, setCurCharacter] = useState<InftData>();
  const [removeState, setRemoveState] = useState(false);
  const getCharacterNft = async () => {
    if (!character) return;
    const { data } = await NftInfo(character);
    setCurCharacter(data);
  };

  useEffect(() => {
    getCharacterNft();
    if (!character) {
      setCurCharacter(undefined);
    }
  }, [character]);

  const slotOnClickFunction = async () => {
    if (!removeState && formationState == -1 && curCharacter) {
      return setRemoveState((state) => !state);
    }
    if (curCharacter) setRemoveState((state) => !state);
    if (formationState == -1 || !account) return;
    const result = await SetUserFormation(
      account,
      index,
      selectedCharacter.hash
    );
    await callUserFunction();
  };
  const slotRemoveFunction = async () => {
    setRemoveState(true);
    if (!curCharacter || !account) return;
    const result = await ClearUserFormation(account, index, character);
    await callUserFunction();
  };

  return (
    <SlotBox
      id={"formation-select"}
      className={"fg-dark bg-melon"}
      position={position}
      onClick={() => {
        slotOnClickFunction();
      }}
    >
      <div className="arrow">
        {!curCharacter ? <img src={"/imgs/downArrow.gif"} alt="" /> : ""}
      </div>
      <img src={curCharacter?.img} alt="" />
      {removeState ? (
        <RemoveBox
          onClick={() => {
            slotRemoveFunction();
          }}
        >
          X
        </RemoveBox>
      ) : (
        ""
      )}
    </SlotBox>
  );
};

export default SlotComponent;

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
  .arrow {
    img {
      width: 50%;
      height: 50%;
    }
  }
  > img {
    pointer-events: none;
    z-index: 11;
    position: absolute;
    bottom: -20px;
  }
`;

const RemoveBox = styled.div`
  background-color: var(--hotpink);
  font-size: 0.5rem;
  width: 30%;
  position: absolute;
  z-index: 15;
  right: -10px;
  top: -50px;
  border: 2px solid red;
`;
