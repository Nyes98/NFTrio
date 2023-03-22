import styled from "styled-components";
import "../../nftrio.css";

type Props = {
  CagetoriControl: (num: number) => void;
  categori: number;
};

const RankComponent: React.FC<Props> = ({ CagetoriControl, categori }) => {
  return (
    <RankWarp>
      <h1 className="nftrio-h">Ranking</h1>
      <Categori>
        <div onClick={() => CagetoriControl(1)}>User</div>
        <div onClick={() => CagetoriControl(2)}>Stage</div>
      </Categori>
      {categori == 1 ? (
        <>
          <RankTable>
            <div>Rank</div>
            <div>UserName</div>
            <div>Clear Stage</div>
            <div>Use NFT Deck</div>
            <div>Use Formation</div>
          </RankTable>
          <RankLine>
            <div>1</div>
            <div>예성맨</div>
            <div>6-5</div>
            <div>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
            </div>
            <div>
              <img src="imgs/for1.png" alt="formation" />
            </div>
          </RankLine>
          <RankLine>
            <div>2</div>
            <div>가원걸</div>
            <div>3-5</div>
            <div>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
            </div>
            <div>
              <img src="imgs/for1.png" alt="formation" />
            </div>
          </RankLine>
        </>
      ) : (
        <>
          <StageRankTable>
            <div>Stage</div>
            <div>1st Clear Deck</div>
            <div>1st Clear Formation</div>
            <div>Top5 Class Select Rate</div>
            <div>Formation Select Rate</div>
          </StageRankTable>
          <StageRankLine>
            <div>1</div>
            <div>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
            </div>
            <div>
              <img src="imgs/for1.png" alt="formation" />
            </div>
            <div>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
              <UseDeck>
                <img src="imgs/imsi.png" alt="imsi" />
              </UseDeck>
            </div>
            <div>
              <img src="imgs/for1.png" alt="formation" />
            </div>
          </StageRankLine>
        </>
      )}
    </RankWarp>
  );
};

export default RankComponent;

const RankWarp = styled.div`
  max-width: 1800px;
  margin: auto;
`;

const RankTable = styled.div`
  display: flex;

  div:first-child {
    width: 10%;
  }
  div:nth-child(2) {
    width: 20%;
  }
  div:nth-child(3) {
    width: 20%;
  }
  div:nth-child(4) {
    width: 35%;
  }
  div:nth-child(5) {
    width: 15%;
  }
`;

const RankLine = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  div:first-child {
    width: 10%;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;

    div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin: 0 2px;
      img {
        width: 30px;
      }
    }
  }
  div:nth-child(3) {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
  div:nth-child(4) {
    width: 35%;
    display: flex;

    div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin: 0 2px;
      img {
        width: 30px;
      }
    }
  }
  div:nth-child(5) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
`;

const StageRankTable = styled.div`
  display: flex;

  div:first-child {
    width: 7%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 18%;
  }
  div:nth-child(4) {
    width: 25%;
  }
  div:nth-child(5) {
    width: 25%;
  }
`;

const StageRankLine = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  div:first-child {
    width: 7%;
  }
  div:nth-child(2) {
    width: 25%;
    display: flex;

    div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin: 0 2px;
      img {
        width: 30px;
      }
    }
  }
  div:nth-child(3) {
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
  div:nth-child(4) {
    width: 25%;
    display: flex;

    div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin: 0 2px;
      img {
        width: 30px;
      }
    }
  }
  div:nth-child(5) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
`;

const UseDeck = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0;
`;

const Categori = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin: 20px 0;

  div {
    margin-right: 20px;
    cursor: pointer;
  }
`;
