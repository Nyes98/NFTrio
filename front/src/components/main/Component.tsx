import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InftData from "../../interfaces/NftData.interface";

type Props = {
  recentArr1?: Array<InftData>;
  recentArr2?: Array<InftData>;
  topPriceArr?: Array<InftData>;
  move: (where: string) => void;
  move2: (where: string) => void;
  jobArr: Array<string>;
  selJob: (index: number) => void;
  jobFilter: number;
};

const MainComponent: React.FC<Props> = ({
  recentArr1,
  recentArr2,
  topPriceArr,
  move,
  move2,
  jobArr,
  selJob,
  jobFilter,
}) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <MainBoard>
        <img src="./imgs/mainboard.avif" alt="main" />
        <a
          className="fg-dark nftrio-a"
          onClick={() => {
            navigate("/game");
          }}
        >
          Enter Stage
        </a>
      </MainBoard>
      <SailBoard>
        <FilterWrap>
          <SailTitle>
            {/* <div>Recent</div>
            <div onClick={() => move2("sale")}>All</div> */}
          </SailTitle>
          <FilterBoard>
            {jobArr.map((item, index) => (
              <div
                key={`filter-${index}`}
                onClick={() => selJob(index)}
                className={index == jobFilter ? "on" : ""}
              >
                <img src={`./imgs/${item}.png`} alt="" />
              </div>
            ))}
          </FilterBoard>
        </FilterWrap>
        <BoardHalf>
          <BoardWrap>
            <BoardTitle>
              <div>INFO</div>
              <div>PRICE</div>
            </BoardTitle>
            {recentArr1?.map((item, index) => (
              <BoardInfo
                key={`Arr1-${index}`}
                onClick={() => {
                  move(item.hash);
                }}
              >
                <div>
                  <div>{index + 1}</div>
                  <div>
                    <img src={item.img} alt="imsi" />
                  </div>
                  <div>{item.name}</div>
                </div>

                <div>{item.price}</div>
              </BoardInfo>
            ))}
          </BoardWrap>
          <BoardWrap>
            <BoardTitle>
              <div>INFO</div>
              <div>PRICE</div>
            </BoardTitle>
            {recentArr2?.map((item, index) => (
              <BoardInfo
                key={`Arr2-${index}`}
                onClick={() => {
                  move(item.hash);
                }}
              >
                <div>
                  <div>{index + 6}</div>
                  <div>
                    <img src={item.img} alt="imsi" />
                  </div>
                  <div>{item.name}</div>
                </div>

                <div>{item.price}</div>
              </BoardInfo>
            ))}
          </BoardWrap>
        </BoardHalf>
      </SailBoard>

      <Title>Top Price NFT</Title>
      <TopSaleWrap>
        {topPriceArr?.map((item, index) => (
          <TopSale
            key={`topPrice-${index}`}
            onClick={() => {
              move(item.hash);
            }}
          >
            <ImgBox>
              <img src={item.img} alt="topPrice" />
            </ImgBox>
            <NftInfo>
              <div className="fg-dark">{item.name}</div>
              <div>{item.price} Trio</div>
            </NftInfo>
          </TopSale>
        ))}
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
  font-size: 0.8rem;
  border: 1px solid gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  div {
    margin: auto;
    padding: 10px;
  }

  div:first-child {
    font-size: 0.6rem;
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
  cursor: pointer;
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
    cursor: pointer;
    border: 4px solid hotpink;
    border-radius: 10px;
    padding: 5px;
  }

  div:last-child {
    border: 4px solid pink;

    &:hover {
      border: 4px solid hotpink;
    }
  }
`;
const FilterBoard = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  div {
    margin: 0 10px;
    cursor: pointer;
  }
  .on {
    border: 3px solid red;
    border-radius: 35px;
    width: 70px;
    height: 70px;
  }

  img {
    width: 64px;
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
  cursor: pointer;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    div:first-child {
      width: 50px;
    }

    div:nth-child(2) {
      width: 120px;
    }
  }
`;
