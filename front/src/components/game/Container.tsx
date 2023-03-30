import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3 } from "../../modules/useWeb3";
import GameComponent from "./Component";
import IAction from "../../interfaces/Action.interface";

const GameContainer = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState("ready");
  const [stage, setStage] = useState(0);
  const { account, logIn } = useWeb3();
  const [actionQueue, setActionQueue] = useState<Array<IAction>>([]);

  useEffect(() => {
    logIn();
  }, []);
  useEffect(() => {
    if (!account) return;
    axios
      .post("http://localhost:8080/api/user/getStage", { account: account })
      .then(({ data }) => {
        console.log(data);
        if (data) setStage(data);
        else setStage(0);
      });
  }, [account]);

  const move = (where: string) => {
    navigate(`/${where}`);
  };
  return (
    <GameComponent
      move={move}
      gameState={gameState}
      setGameState={setGameState}
      stage={stage}
      setStage={setStage}
      actionQueue={actionQueue}
      setActionQueue={setActionQueue}
    ></GameComponent>
  );
};

export default GameContainer;
