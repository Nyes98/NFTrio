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
          <NftImg
            style={{
              background: `${
                nftData?.skill == "1"
                  ? `url('/imgs/Background/Normal.png')`
                  : nftData?.skill == "2"
                  ? `url('/imgs/Background/UnCommon.png')`
                  : nftData?.skill == "3"
                  ? `url('/imgs/Background/Rare.png')`
                  : nftData?.skill == "4"
                  ? `url('/imgs/Background/SuperRare.png')`
                  : `url('/imgs/Background/UltraSuperRare.gif')`
              }`,
            }}
          >
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
        {nftData?.job == 1 ? (
          <div>
            {nftData?.skill == "1" ? (
              <div>Rarity: Common</div>
            ) : nftData?.skill == "2" ? (
              <div>Rarity: Uncommon</div>
            ) : nftData?.skill == "3" ? (
              <div>Rarity: Rare</div>
            ) : nftData?.skill == "4" ? (
              <div>Super</div>
            ) : nftData?.skill == "5" ? (
              <div>Ultra</div>
            ) : (
              <></>
            )}
            <div>Class : 전사</div>
            <div>Passive : 체력 단련</div>
            <div className="description fg-melon">
              꾸준한 체력 단련을 기반으로 다른 직업보다 높은 체력을 보유하고
              있다.
            </div>
            <div>Active : 내가 지킨다</div>
            <div className="description fg-melon">
              등급에 비례하여 일정 시간동안 아군이 받는 피해량을 감소시킨다.
            </div>
          </div>
        ) : nftData?.job == 2 ? (
          <div>
            {nftData?.skill == "1" ? (
              <div>Rarity: Common</div>
            ) : nftData?.skill == "2" ? (
              <div>Rarity: Uncommon</div>
            ) : nftData?.skill == "3" ? (
              <div>Rarity: Rare</div>
            ) : nftData?.skill == "4" ? (
              <div>Super</div>
            ) : nftData?.skill == "5" ? (
              <div>Ultra</div>
            ) : (
              <></>
            )}
            <div>Class : 법사</div>
            <div>Passive : 귀족</div>
            <div className="description fg-melon">
              기본 공격이 없는 대신 스킬의 쿨타임이 다른 직업에 비해 짧다.
            </div>
            <div>Active : 메테오</div>
            <div className="description fg-melon">
              하늘로부터 운석을 소환하여 다수의 적에게 공격을 시전한다.
            </div>
          </div>
        ) : nftData?.job == 3 ? (
          <div>
            {nftData?.skill == "1" ? (
              <div>Rarity : Common</div>
            ) : nftData?.skill == "2" ? (
              <div>Rarity : Uncommon</div>
            ) : nftData?.skill == "3" ? (
              <div>Rarity : Rare</div>
            ) : nftData?.skill == "4" ? (
              <div>Rarity : Super</div>
            ) : nftData?.skill == "5" ? (
              <div>Rarity : Ultra</div>
            ) : (
              <></>
            )}
            <div>Class : 궁수</div>
            <div>Passive : 선제 공격</div>
            <div className="description fg-melon">
              전투시작 시 쿨타임 없이 기본공격을 1회 시전한다.
            </div>
            <div>Active : 비장의 한발</div>
            <div className="description fg-melon">
              단일 타겟의 강력한 공격을 시전한다.
            </div>
          </div>
        ) : (
          <div>
            {nftData?.skill == "1" ? (
              <div>Rarity : Common</div>
            ) : nftData?.skill == "2" ? (
              <div>Rarity : Uncommon</div>
            ) : nftData?.skill == "3" ? (
              <div>Rarity : Rare</div>
            ) : nftData?.skill == "4" ? (
              <div>Rarity : Super</div>
            ) : nftData?.skill == "5" ? (
              <div>Rarity : Ultra</div>
            ) : (
              <></>
            )}
            <div>Class : 도적</div>
            <div>Passive : 본능</div>
            <div className="description fg-melon">
              등급에 따라 확률적으로 기본 공격과 Active 스킬에 치명타가
              적용됩니다. 치명타 적용 시 보다 강력한 데미지를 입힐 수 있습니다.
            </div>
            <div>Active : 암살</div>
            <div className="description fg-melon">
              가장 체력이 낮은 적에게 강력한 단일 공격을 시전합니다.
            </div>
          </div>
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

  .description {
    font-size: 0.8rem;
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
  position: relative;
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
