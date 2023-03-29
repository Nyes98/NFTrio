import styled from "styled-components";
import CharacterItemComponent from "./CharacterItem/Component";
import InftData from "../../../interfaces/NftData.interface";
import SlotComponent from "./Slot/Component";
import Iposition from "../../../interfaces/Position.interface";
import { positionConfig } from "../data/positionData";

type Props = {
  curCharacterList: Array<InftData>;
  formationState: number;
  setFormationState: React.Dispatch<React.SetStateAction<number>>;
  account?: string;
  formationList: Array<string>;
  callUserFunction: () => Promise<void>;
};

const ReadyComponent: React.FC<Props> = ({
  curCharacterList,
  formationState,
  setFormationState,
  account,
  formationList,
  callUserFunction,
}) => {
  console.log(curCharacterList[formationState]?.name);
  return (
    <ReadyBox>
      <CharacterListBox id="charList">
        {curCharacterList.map((item, index) => {
          return (
            <CharacterItemComponent
              key={`char-${index}`}
              character={item}
              formationState={formationState}
              setFormationState={setFormationState}
              index={index}
            ></CharacterItemComponent>
          );
        })}
      </CharacterListBox>
      <FormationBox>
        {positionConfig.map((_, index) => {
          return (
            <SlotComponent
              key={`Slot-${index}`}
              character={formationList[index]}
              position={positionConfig[index]}
              index={index}
              account={account}
              formationState={formationState}
              selectedCharacter={curCharacterList[formationState]}
              callUserFunction={callUserFunction}
            />
          );
        })}
      </FormationBox>
      <InfoBox>
        <div>{curCharacterList[formationState]?.name}</div>
        <div>health : {curCharacterList[formationState]?.health}</div>
        <div>attack : {curCharacterList[formationState]?.attack}</div>
        <div>speed : {curCharacterList[formationState]?.speed}</div>
      </InfoBox>
    </ReadyBox>
  );
};

export default ReadyComponent;

const ReadyBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--pink);
  position: relative;
  background: url("./imgs/forestBg.png");
  background-repeat: no-repeat;
  background-size: cover;
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

const FormationBox = styled.div`
  display: flex;
  width: 50%;
`;

const InfoBox = styled.div`
  width: 30%;
  position: absolute;
  right: 25%;
  background-color: var(--dark);
  opacity: 0.8;
  height: 50%;
`;
