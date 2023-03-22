import "./App.css";
import "./nftrio.css";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/main/Container";
import HeaderContainer from "./components/header/Container";
import CSSDemoContainer from "./components/css-demo/Container";
import MulterComponent from "./components/multer-test/Component";
import FooterContainer from "./components/footer/Container";
import PickContainer from "./components/pick/Container";
import SaleContainer from "./components/sale/Container";
import RankContainer from "./components/rank/Container";
import MyPageContainer from "./components/mypage/Container";
import NftContainer from "./components/nftTest/Container";

function App() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>{" "}
        <Route path="/css-demo" element={<CSSDemoContainer />} />
        <Route path="/multer-test" element={<MulterComponent />} />
        <Route path="/pick" element={<PickContainer />} />
        <Route path="/sale" element={<SaleContainer />} />
        <Route path="/rank" element={<RankContainer />} />
        <Route path="/mypage" element={<MyPageContainer />} />
      </Routes>
      <FooterContainer></FooterContainer>
      <Routes>
        <Route path="/test" element={<NftContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
