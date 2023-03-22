import styled from "styled-components";

type Props = {};

const HeaderComponent: React.FC<Props> = ({}) => {
  return (
    <Background>
      <HeaderBox>
        <LogoBox>
          <img src="./imgs/opensea.svg" alt="Logo" />
          <div>Open Sea</div>
        </LogoBox>
        <CategoriBox>
          <div>Pick NFT</div>
          <div>Sale List</div>
          <div>Rank</div>
          <div>
            <img src="./imgs/user.svg" alt="user" />
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
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
`;

const LogoBox = styled.div`
  display: flex;
`;

const CategoriBox = styled.div`
  display: flex;
  font-size: 1.7rem;

  div {
    margin: 0 10px;
  }

  img {
    margin-top: 5px;
    width: 24px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(98deg)
      brightness(102%) contrast(98%);
  }
`;
