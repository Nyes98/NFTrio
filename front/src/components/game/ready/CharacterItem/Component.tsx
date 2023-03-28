import styled from "styled-components";
import InftData from "../../../../interfaces/NftData.interface";
type Props = {
  character: InftData;
  formationState: number;
  setFormationState: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

interface characterProps {
  formationState: number;
  index: number;
}

const CharacterItemComponent: React.FC<Props> = ({
  character,
  formationState,
  setFormationState,
  index,
}) => {
  return (
    <CharacterBox
      onClick={() => {
        setFormationState(index);
      }}
      id={"formation-select"}
      formationState={{ formationState, index }}
    >
      <img
        id={"formation-select"}
        src={character.img}
        alt={character.name + " 이미지"}
      />
    </CharacterBox>
  );
};

export default CharacterItemComponent;

const CharacterBox = styled.div<{ formationState: characterProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  width: 80%;
  height: 150px;
  background-color: ${({ formationState }) => {
    if (formationState.formationState !== formationState.index) {
      return "var(--melon)";
    } else {
      return "var(--hotpink)";
    }
  }};
  :first-child {
    margin-top: 20px;
  }
  margin-bottom: 20px;
`;
