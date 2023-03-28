import styled from "styled-components";
import InftData from "../../../interfaces/NftData.interface";
import LoadingModalComponent from "../loading/Components";

type Props = {
  ControlMordal: () => void;
  nftData?: InftData;
  nftBuy: () => void;
  loading: boolean;
};

const NftBuyMordalComponent: React.FC<Props> = ({
  ControlMordal,
  nftData,
  nftBuy,
  loading,
}) => {
  return (
    <>
      <Background onClick={ControlMordal}></Background>
      <Mordal>
        <Title>
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
                <div>{nftData?.id}</div>
                <div>{nftData?.name}</div>
              </div>
            </div>
          </SubTitle>
          <ConfirmBox>
            <div>해당 NFT의 가격은 {nftData?.price} ETH입니다.</div>
            <div>구매 하시겠습니까?</div>
          </ConfirmBox>
          <BtnBox>
            <div
              className="nftrio-button fg-dark bg-melon ac-white"
              onClick={nftBuy}
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

export default NftBuyMordalComponent;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
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
  width: 800px;
  height: 500px;
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

const ConfirmBox = styled.div``;
