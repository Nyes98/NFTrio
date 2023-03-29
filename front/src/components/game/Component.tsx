import styled from "styled-components";
import StageContainer from "./stage/Container";
import BattleContainer from "./battle/Container";
import ReadyContainer from "./ready/Container";

type Props = {
  move: (where: string) => void;
  gameState: string;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
};
const GameComponent: React.FC<Props> = ({
  move,
  gameState,
  setGameState,
  stage,
  setStage,
}) => {
  const curView = () => {
    switch (gameState) {
      case "ready":
        return <ReadyContainer />;
      case "battle":
        return <BattleContainer stage={stage} />;
      case "stage":
        return (
          <StageContainer
            stage={stage}
            setStage={setStage}
            setGameState={setGameState}
          />
        );
      default:
        return (
          <StageContainer
            stage={stage}
            setStage={setStage}
            setGameState={setGameState}
          />
        );
    }
  };

  return (
    <GameBox>
      stage : {stage}
      <TitleBox className="fg-hotpink">NFTRIO</TitleBox>
      <ViewBox className="bg-pink">
        {curView()}
        <ReadyBtn gameState={gameState} onClick={() => setGameState("ready")}>
          Ready
        </ReadyBtn>
        <StageBtn gameState={gameState} onClick={() => setGameState("stage")}>
          Stage
        </StageBtn>
        <BattleBtn gameState={gameState} onClick={() => setGameState("battle")}>
          Battle
        </BattleBtn>
      </ViewBox>
    </GameBox>
  );
};

export default GameComponent;

const GameBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const TitleBox = styled.div`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding: 40px 0px;
`;

const ViewBox = styled.div`
  position: relative;
  width: 60%;
  height: 500px;
  margin: auto;
`;

const ReadyBtn = styled.div<{ gameState: string }>`
  position: absolute;
  left: -20%;
  top: 0;
  text-align: center;
  width: 20%;
  height: 50px;
  background-color: ${({ gameState }) =>
    gameState == "ready" ? "var(--dark)" : "transparent"};
  :hover {
    background-color: var(--melon);
  }
`;

const StageBtn = styled.div<{ gameState: string }>`
  position: absolute;
  left: -20%;
  top: 55px;
  text-align: center;
  width: 20%;
  height: 50px;
  background-color: ${({ gameState }) =>
    gameState == "stage" ? "var(--dark)" : "transparent"};
  :hover {
    background-color: var(--melon);
  }
`;

const BattleBtn = styled.div<{ gameState: string }>`
  position: absolute;
  left: -20%;
  top: 110px;
  text-align: center;
  width: 20%;
  height: 50px;
  background-color: ${({ gameState }) =>
    gameState == "battle" ? "var(--dark)" : "transparent"};
  :hover {
    background-color: var(--melon);
  }
`;
