import styled from "styled-components";
import "../../nftrio.css";

interface InftData {
  attack: number;
  gender: number;
  health: number;
  id: number;
  price: number;
  speed: number;
  createdAt: string;
  deletedAt?: string;
  hash: string;
  img: string;
  job: string;
  name: string;
  owner_address?: string;
  skill: string;
  updatedAt: string;
}

type Props = {
  nftData?: InftData;
};

const NftInfoComponent: React.FC<Props> = ({ nftData }) => {
  return (
    <MainBoard>
      <InfoWrap>
        {nftData ? (
          <NftImg>
            <img src={`../imgs/${nftData?.img}`} alt="nftImg" />
          </NftImg>
        ) : (
          <></>
        )}
        <NftText>
          <NftName>NFTrio</NftName>
          <NftNum>{nftData?.id}</NftNum>
          <NftOwner>주인주소{nftData?.owner_address}</NftOwner>
          <NftPrice>
            <div>Current Price</div>
            <div>{nftData?.price} Trio</div>
            <div className="nftrio-button fg-dark bg-melon ac-white">
              Buy Nft
            </div>
          </NftPrice>
          <NftPriceHistory>
            <div>Price History</div>
            <div>zz</div>
          </NftPriceHistory>
        </NftText>
      </InfoWrap>
    </MainBoard>
  );
};

export default NftInfoComponent;

const MainBoard = styled.div`
  max-width: 1800px;
  margin: auto;
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const NftImg = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
  }
`;
const NftText = styled.div`
  width: 65%;
`;

const NftName = styled.div``;
const NftNum = styled.div``;
const NftOwner = styled.div``;
const NftPrice = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 0;

  div:first-child {
    font-size: 0.5rem;
  }
  div:last-child {
    font-size: 1rem;
    margin: 10px 0;
    width: 230px;
    border-radius: 20px;
  }
`;

const NftPriceHistory = styled.div`
  margin: 30px 0;
  border: 1px solid black;
  border-radius: 10px;

  div {
    padding: 20px;
  }

  div:first-child {
    border-bottom: 1px solid black;
  }
`;
