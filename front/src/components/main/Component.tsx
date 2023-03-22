import styled from "styled-components";

interface recent {
  // attack: number;
  // createAt: string;
  // deletedAt?: string;
  // gender: number;
  // hash: string;
  // health: number;
  // id: number;
  // img: string;
  // job: string;
  // name: string;
  // owner_address?: string;
  // price: string;
  // skill: string;
  // speed: number;
  // updatedAt: string;
}

type Props = {
  recent10?: Array<any>;
};

const MainComponent: React.FC<Props> = ({ recent10 }) => {
  console.log(recent10);
  return (
    <Wrap>
      <MainBoard>
        <img src="./imgs/mainboard.avif" alt="main" />
        <a className="fg-dark nftrio-a">Enter Stage</a>
      </MainBoard>
      <SailBoard>
        <FilterWrap>
          <SailTitle>
            <div>Recent</div>
            <div>All</div>
          </SailTitle>
          <FilterBoard>
            <div>전사</div>
            <div>법사</div>
            <div>궁수</div>
            <div>사제</div>
          </FilterBoard>
        </FilterWrap>
        <BoardHalf>
          <BoardWrap>
            <BoardTitle>
              <div>INFO</div>
              <div>FLOOR PRICE</div>
            </BoardTitle>
            <BoardInfo>
              <div>
                <div>1</div>
                <div>
                  <img src="./imgs/imsi.png" alt="imsi" />
                </div>
                <div>NFT 이름 얼마나 길어도 되는지 확인좀</div>
              </div>

              <div>1.5 ETH</div>
            </BoardInfo>{" "}
            <BoardInfo>
              <div>
                <div>2</div>
                <div>
                  <img src="./imgs/imsi.png" alt="imsi" />
                </div>
                <div>NFT 이름</div>
              </div>

              <div>1.5 ETH</div>
            </BoardInfo>
          </BoardWrap>
          <BoardWrap>
            <BoardTitle>
              <div>INFO</div>
              <div>FLOOR PRICE</div>
            </BoardTitle>
            <BoardInfo>
              <div>
                <div>1</div>
                <div>
                  <img src="./imgs/imsi.png" alt="imsi" />
                </div>
                <div>NFT 이름 얼마나 길어도 되는지 확인좀</div>
              </div>

              <div>1.5 ETH</div>
            </BoardInfo>{" "}
            <BoardInfo>
              <div>
                <div>2</div>
                <div>
                  <img src="./imgs/imsi.png" alt="imsi" />
                </div>
                <div>NFT 이름</div>
              </div>

              <div>1.5 ETH</div>
            </BoardInfo>
          </BoardWrap>
        </BoardHalf>
      </SailBoard>

      <Title>Top Price NFT</Title>
      <TopSaleWrap>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
        <TopSale>
          <ImgBox>
            <img src="./imgs/imsi.png" alt="imsi2" />
          </ImgBox>
          <NftInfo>
            <div>NFT 이름</div>
            <div>가격</div>
          </NftInfo>
        </TopSale>
      </TopSaleWrap>
    </Wrap>
  );
};

export default MainComponent;

const Title = styled.div`
  margin: 70px 0 30px 0;
`;
const TopSaleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NftInfo = styled.div`
  border: 1px solid gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  div {
    width: 90%;
    margin: auto;
  }
`;
const ImgBox = styled.div`
  text-align: center;
  background-color: pink;
  padding: 35px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Wrap = styled.div`
  max-width: 1800px;
  margin: auto;
`;

const TopSale = styled.div`
  margin: 30px 0;
  width: 15%;
`;

const BoardHalf = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BoardWrap = styled.div`
  width: 45%;
`;
const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: gray;
`;

const MainBoard = styled.div`
  margin: 30px 0;
  text-align: center;
  img {
    width: 100%;
    border-radius: 50px;
  }
`;

const SailBoard = styled.div``;
const SailTitle = styled.div`
  display: flex;
  div {
    margin-right: 30px;
  }
`;
const FilterBoard = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;

  div {
    margin: 0 10px;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const BoardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    div:first-child {
      width: 50px;
    }

    div:nth-child(2) {
      width: 100px;
    }
  }
`;
