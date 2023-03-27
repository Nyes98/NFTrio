import styled from "styled-components";
import "../../nftrio.css";

type Props = {
  move: (to: string) => void;
  account: string | undefined;
  logIn: () => void;
  web3: any;
};

const HeaderComponent: React.FC<Props> = ({ move, account, logIn, web3 }) => {
  return (
    <Background>
      <HeaderBox>
        <LogoBox onClick={() => move("")}>
          <img src="../imgs/Logo1.png" alt="Logo" />
          <div>NFTrio</div>
        </LogoBox>
        <CategoriBox>
          <div onClick={() => move("pick")}>Pick</div>
          <div onClick={() => move("sale")}>Sale</div>
          <div onClick={() => move("rank")}>Rank</div>
          <div>
            {account?.length ? (
              <div onClick={() => move(`mypage/${account}`)}>
                <img src="../imgs/skill7.png" alt="aflogin" />
              </div>
            ) : (
              <div onClick={() => logIn()}>
                <img src="../imgs/user.svg" alt="user" />
              </div>
            )}
          </div>
        </CategoriBox>
      </HeaderBox>
    </Background>
  );
};

export default HeaderComponent;

const Background = styled.div`
  background-color: black;
  padding: 10px 0;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  margin: auto;
  img {
    width: 40px;
    margin-right: 10px;
  }
  color: white;
`;

const LogoBox = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  img {
    width: 80px;
  }
`;

const CategoriBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;

  div {
    margin: 0 10px;
    cursor: pointer;
  }

  img {
    width: 24px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(98deg)
      brightness(102%) contrast(98%);
  }
`;
