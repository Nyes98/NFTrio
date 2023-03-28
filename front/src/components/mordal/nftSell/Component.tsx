import styled from "styled-components";
import InftData from "../../../interfaces/NftData.interface";
import MyResponsiveRadar from "../../graph/rader/component";
import LoadingModalComponent from "../loading/Components";

type Props = {
  ControlMordal: () => void;
  nftData?: InftData;
  InputSellPrice: (e: any) => void;
  sellPrice: number;
  SellNftf2: () => void;
  loading: boolean;
};

const NftSellMordalComponent: React.FC<Props> = ({
  ControlMordal,
  nftData,
  InputSellPrice,
  sellPrice,
  SellNftf2,
  loading,
}) => {
  return (
    <>
      <Background onClick={ControlMordal}></Background>
      <Mordal>
        <Title className="fg-black">
          Make an offer
          <button onClick={ControlMordal}>x</button>
        </Title>
        <Contents>
          <SubTitle>
            <div>
              <div>
                <img src={nftData?.img} alt="imgs" />
              </div>
              <div>
                <div className="fg-dark">{nftData?.name}</div>
              </div>
            </div>
            <PriceInfo>
              <div>{sellPrice} Trio</div>
              <div className="fg-pink">{sellPrice / 500} ETH</div>
            </PriceInfo>
          </SubTitle>
          <StatBox>
            <MyResponsiveRadar nftData={nftData} />
          </StatBox>
          <ConfirmBox>
            <div>
              <div className="fg-dark">판매할 가격 : </div>
              <input type="number" onChange={InputSellPrice} />
            </div>
            <div>
              &#8251; 등록 후, 가격을 수정하거나 판매를 취소 할 수 없습니다.
            </div>
          </ConfirmBox>
          <BtnBox>
            <div
              className="nftrio-button fg-dark bg-melon ac-white"
              onClick={() => {
                SellNftf2();
              }}
            >
              예
            </div>
            <div
              className="nftrio-button fg-dark bg-melon ac-white"
              onClick={ControlMordal}
            >
              아니오
            </div>
          </BtnBox>
        </Contents>
      </Mordal>
      {loading ? <LoadingModalComponent></LoadingModalComponent> : <></>}
    </>
  );
};

export default NftSellMordalComponent;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
const StatBox = styled.div`
  height: 250px;
`;
const Title = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 800;
  border-bottom: 1px solid lightgray;

  button {
    position: absolute;
    border-radius: 5px;
    right: 5px;
    top: 5px;
    border: none;
    padding: 3px 8px;
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  div:first-child {
    display: flex;
    align-items: center;

    div {
      margin: 0 10px;
    }
    div:first-child {
      font-size: 0.8rem;
    }
    div:last-child {
      font-size: 0.6rem;
    }
  }
`;
const Contents = styled.div`
  padding: 10px 20px 0 20px;
  font-size: 1rem;
  text-align: center;
`;

const Mordal = styled.div`
  z-index: 1;

  position: fixed;
  border: 1px solid gray;
  border-radius: 10px;
  width: 600px;
  height: 750px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const PriceInfo = styled.div`
  div:first-child {
    font-size: 0.8rem;
  }

  div:last-child {
    font-size: 0.6rem;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  div {
    text-align: center;
    font-size: 0.8rem;
    width: 180px;
    border-radius: 20px;
  }
`;

const ConfirmBox = styled.div`
  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    input {
      margin-left: 20px;
    }
  }

  & > div:nth-child(2) {
    font-size: 0.8rem;
  }
  input {
    padding: 10px;
  }
`;
