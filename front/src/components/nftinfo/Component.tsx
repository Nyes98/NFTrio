import styled from "styled-components";
import InftData from "../../interfaces/NftData.interface";
import "../../nftrio.css";
import MyResponsiveLine from "../graph/Component";
import NftBuyMordalContainer from "../mordal/nftBuy/Container";

type Props = {
  nftData?: InftData;
  buyMordal: boolean;
  BuyMordalHandler: () => void;
};

const NftInfoComponent: React.FC<Props> = ({
  nftData,
  buyMordal,
  BuyMordalHandler,
}) => {
  return (
    <MainBoard>
      <InfoWrap>
        {nftData ? (
          <NftImg>
            <img src={`${nftData?.img}`} alt="nftImg" />
          </NftImg>
        ) : (
          <></>
        )}
        <NftText>
          <NftName>NFTrio</NftName>
          <NftOwner>Owner : {nftData?.owner_address}</NftOwner>
          <NftPrice>
            {nftData?.price ? (
              <>
                <div>Current Price</div>
                <div>{nftData?.price} Trio</div>

                <div
                  className="nftrio-button fg-dark bg-melon ac-white"
                  onClick={BuyMordalHandler}
                >
                  Buy Nft
                </div>
              </>
            ) : (
              <p>This is an NFT that is not registered for sale.</p>
            )}
          </NftPrice>
          <NftPriceHistory>
            <HistoryTitle>Price History</HistoryTitle>
            {nftData ? (
              <>
                <MyResponsiveLine nftData={nftData}></MyResponsiveLine>
              </>
            ) : (
              <></>
            )}
          </NftPriceHistory>
        </NftText>
      </InfoWrap>

      {buyMordal ? (
        <NftBuyMordalContainer nftData={nftData}></NftBuyMordalContainer>
      ) : (
        <></>
      )}
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
  height: 600px;
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
`;

const HistoryTitle = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
`;
