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
import NftInfoContainer from "./components/nftinfo/Container";
import GameContainer from "./components/game/Container";
import { useWeb3 } from "./modules/useWeb3";
import { useEffect } from "react";

function App() {
  const { web3, account, logIn } = useWeb3();

  useEffect(() => {
    logIn();
  }, [account]);

  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>{" "}
        <Route path="/css-demo" element={<CSSDemoContainer />} />
        <Route path="/multer-test" element={<MulterComponent />} />
        <Route
          path="/pick"
          element={<PickContainer account={account} web3={web3} />}
        />
        <Route path="/sale" element={<SaleContainer />} />
        <Route path="/rank" element={<RankContainer />} />
        <Route
          path="/mypage/:owner"
          element={<MyPageContainer account={account} web3={web3} />}
        />
        <Route path="/test" element={<NftContainer />}></Route>
        <Route path="/nftinfo/:nftHash" element={<NftInfoContainer />}></Route>
        <Route path="/game" element={<GameContainer />} />
      </Routes>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
