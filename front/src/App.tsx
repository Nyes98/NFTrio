import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/main/Container";
import HeaderContainer from "./components/header/Container";
import CSSDemoContainer from "./components/css-demo/Container";
import MulterComponent from "./components/multer-test/Component";

function App() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>{" "}
        <Route path="/css-demo" element={<CSSDemoContainer />} />
        <Route path="/multer-test" element={<MulterComponent />} />
      </Routes>
    </div>
  );
}

export default App;
