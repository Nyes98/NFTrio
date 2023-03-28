import styled from "styled-components";
import "../../nftrio.css";
import InftData from "../../interfaces/NftData.interface";
import NftSellMordalContainer from "../mordal/nftSell/Container";
import IuserData from "../../interfaces/UserData.interface";
import Web3 from "web3";

type Props = {
  account: string | undefined;
  userNftData?: Array<InftData>;
  move: (where: string) => void;
  BuyMordalHandler: () => void;
  buyMordal: boolean;
  SelectHash: (hash: string, tokenId: number) => void;
  selHash: string;
  registedNft: Array<string>;
  mouseIn: (hash: string) => void;
  sellBtn: string;
  userData?: IuserData;
  TradeToken: () => void;
  web3?: Web3;
  selTokenId: number;
};

const MyPageComponent: React.FC<Props> = ({
  account,
  userNftData,
  move,
  BuyMordalHandler,
  buyMordal,
  SelectHash,
  selHash,
  registedNft,
  mouseIn,
  sellBtn,
  userData,
  TradeToken,
  selTokenId,
  web3,
}) => {
  return (
    <MainBoard>
      <img src="../imgs/mainnft.png" alt="main" />
      <NftImg>
        <img src="../imgs/nftmark.png" alt="mark" />
      </NftImg>
      <Wrap>
        <div className="nftrio-h">
          <h3>My Profile</h3>
          <MintBox>
            <div>
              <img src="../imgs/ticket.svg" alt="" />
            </div>
            <div>{userData?.mintNumber}</div>
            <SwapBtn
              className="
            nftrio-button fg-hotpink bg-white ac-dark 
            "
              onClick={TradeToken}
            >
              토큰 교환
            </SwapBtn>
          </MintBox>
        </div>

        <NftInfo>
          <div>
            <img src="../imgs/ethereum.svg" alt="eth" />
          </div>
          <div>{account}</div>
        </NftInfo>

        <Title>
          <div>ITEM</div>
          <div>LISTING PRICE</div>
          <div>COST</div>
          <div>DIFFERENCE</div>
        </Title>
        {userNftData?.map((item, index) => (
          <InfoLine key={`userNft-${index}`}>
            <div>
              <div onClick={() => move(item.hash)}>
                <img src={item.img} alt="imsi" />
                {item.name}
              </div>
            </div>
            <div
              onClick={() => {
                BuyMordalHandler();
                SelectHash(item.hash, item.tokenId);
              }}
              onMouseEnter={() => mouseIn(item.hash)}
              onMouseLeave={() => mouseIn("")}
            >
              {registedNft.includes(item.hash) ? (
                <>
                  <Green>
                    {sellBtn == item.hash ? (
                      <SellBtn>Edit listing</SellBtn>
                    ) : (
                      <></>
                    )}
                    <img src="/imgs/dot.svg" alt="greenDot" />
                    {item.price} Trio
                  </Green>
                </>
              ) : (
                <>
                  <Gray>
                    {sellBtn == item.hash ? (
                      <SellBtn>List for sail</SellBtn>
                    ) : (
                      <></>
                    )}
                    <img src="/imgs/dot.svg" alt="grayDot" /> Not listed
                  </Gray>
                </>
              )}
            </div>
            <div>{item.cost ? <>{item.cost} Trio</> : <>--</>}</div>
            <div>
              {item.price && item.cost ? (
                <>
                  {(((item.price - item.cost) / item.cost) * 100).toFixed(2)} %
                </>
              ) : (
                <>--</>
              )}
            </div>
          </InfoLine>
        ))}
      </Wrap>
      {buyMordal ? (
        <NftSellMordalContainer
          selHash={selHash}
          selTokenId={selTokenId}
          account={account}
          web3={web3}
        ></NftSellMordalContainer>
      ) : (
        <></>
      )}
    </MainBoard>
  );
};

export default MyPageComponent;

const MintBox = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;

  &&& img {
    width: 30px;
    margin-right: 10px;
    margin-top: 10px;
  }
`;

const SellBtn = styled.div`
  position: absolute;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: white;
  top: 1px;
  display: flex;
  justify-content: center;

  &&& {
    font-size: 0.5rem;
    width: 100px;
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 0.6rem;
  margin: 40px 0 10px 0;

  div {
    width: 15%;
  }

  div:first-child {
    width: 50%;
  }
`;
const Green = styled.p`
  position: relative;
`;

const Gray = styled.span`
  position: relative;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  cursor: pointer;

  div {
    width: 15%;
  }

  div:first-child {
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    img {
      width: 60px;
      margin-right: 30px;
    }
  }

  div:nth-child(2) {
    img {
      margin-bottom: 3px;
      margin-right: 3px;
      width: 7px;
      filter: invert(97%) sepia(2%) saturate(844%) hue-rotate(179deg)
        brightness(83%) contrast(92%);
    }

    p > img {
      filter: invert(66%) sepia(29%) saturate(912%) hue-rotate(97deg)
        brightness(92%) contrast(92%);
    }
  }
`;

const MainBoard = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

const NftImg = styled.div`
  position: absolute;
  top: 200px;
  left: 55px;
  background-color: white;
  border: 3px solid pink;
  border-radius: 15px;
  width: 200px;
  height: 200px;
  text-align: center;
  img {
    margin-top: 20px;
    width: 100px;
  }
`;

const NftInfo = styled.div`
  margin: 10px 0;
  display: flex;
  font-size: 0.6rem;
  div {
    margin-right: 10px;
    img {
      width: 10px;
      filter: invert(52%) sepia(11%) saturate(4%) hue-rotate(321deg)
        brightness(94%) contrast(88%);
    }
  }
`;
const Wrap = styled.div`
  max-width: 1800px;
  margin: 80px auto;
`;

const SwapBtn = styled.div`
  margin-left: 100px;
  margin-bottom: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border-radius: 10px;
`;
