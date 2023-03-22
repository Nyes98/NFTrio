import MainComponent from "./Component";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { move } from "../../redux/move";

const MainContainer = () => {
  // Redux 사용 예시
  const reduxTest = useAppSelector((state) => state.move.value);
  const dispatch = useDispatch();
  const ReduxFix = () => {
    dispatch(move("test"));
  };

  return <MainComponent></MainComponent>;
};

export default MainContainer;
