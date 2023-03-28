import styled from "styled-components";
import InftData from "../../interfaces/NftData.interface";
import "../../nftrio.css";
import MyResponsiveLine from "../graph/line/Component";
import Web3 from "web3";
import NftBuyMordalContainer from "../mordal/nftBuy/Container";
import MyResponsiveRadar from "../graph/rader/component";

type Props = {
  nftData?: InftData;
  buyMordal: boolean;
  BuyMordalHandler: () => void;
  web3?: Web3;
  account?: string;
  children?: JSX.Element | JSX.Element[];
};

const NftInfoComponent: React.FC<Props> = ({
  nftData,
  buyMordal,
  BuyMordalHandler,
  web3,
  account,
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
          <NftOwner className="fg-dark">
            Owner : {nftData?.owner_address}
          </NftOwner>
          <NftPrice>
            {nftData?.price ? (
              account != nftData?.owner_address ? (
                <>
                  <div>
                    <div>Current Price</div>
                    <div>{nftData?.price} Trio</div>
                  </div>
                  <div>
                    <div
                      className="nftrio-button fg-dark bg-melon ac-white"
                      onClick={BuyMordalHandler}
                    >
                      Buy Nft
                    </div>
                  </div>
                </>
              ) : (
                <p>나의 NFT</p>
              )
            ) : (
              <p>현재 판매 등록되지 않은 NFT 입니다.</p>
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
      <NftStat>
        <div>
          <MyResponsiveRadar nftData={nftData} />
        </div>
        {nftData?.job == "1" ? (
          <div>Class : 전사</div>
        ) : nftData?.job == "2" ? (
          <div>Class : 법사</div>
        ) : nftData?.job == "3" ? (
          <div>Class : 궁수</div>
        ) : (
          <div>Class : 도적</div>
        )}
      </NftStat>

      {buyMordal ? (
        <NftBuyMordalContainer
          nftData={nftData}
          account={account}
          web3={web3}
        ></NftBuyMordalContainer>
      ) : (
        <></>
      )}
    </MainBoard>
  );
};

export default NftInfoComponent;

const NftStat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  & > div {
    width: 48%;
    height: 500px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
  }
`;

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
  height: 640px;
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
  margin: 20px 0;
  display: flex;
  align-items: center;

  div:first-child {
    font-size: 0.5rem;
  }

  div:last-child {
    display: flex;
    align-items: center;
    font-size: 1rem;
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
