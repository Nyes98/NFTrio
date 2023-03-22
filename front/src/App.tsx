import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/main/Container";
import NftContainer from "./components/nftTest/Container";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route path="/test" element={<NftContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
