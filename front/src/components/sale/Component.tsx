import styled from "styled-components";
import "../../nftrio.css";
import NftBuyMordalContainer from "../mordal/nftBuy/Container";

type Props = {
  priceClick: () => void;
  classClick: () => void;
  pricedd: boolean;
  classdd: boolean;
  buyBtn: number;
  mouseIn: (item: number) => void;
  number: number[];
  BuyMordalHandler: () => void;
  buyMordal: boolean;
};

const SaleComponent: React.FC<Props> = ({
  priceClick,
  classClick,
  pricedd,
  classdd,
  buyBtn,
  mouseIn,
  number,
  BuyMordalHandler,
  buyMordal,
}) => {
  return (
    <MainBoard>
      <img src="./imgs/mainnft.png" alt="main" />
      <NftImg>
        <img src="./imgs/nftmark.png" alt="mark" />
      </NftImg>
      <SaleWrap>
        <div className="nftrio-h">
          <h3>NFT 이름</h3>
        </div>
        <NftInfo>
          <div>Items 523</div>
          <div>Chain Ethereum</div>
          <div>Category Game</div>
        </NftInfo>
        <NftInfo>
          <div>NFT 설명 주저리주저리</div>
        </NftInfo>
        <NftPrice>
          <PriceInfo>
            <div>850 ETH</div>
            <div>total volume</div>
          </PriceInfo>
          <PriceInfo>
            <div>0.715ETH</div>
            <div>floor price</div>
          </PriceInfo>
          <PriceInfo>
            <div>1.666ETH</div>
            <div>top price</div>
          </PriceInfo>
          <PriceInfo>
            <div>441</div>
            <div>owners</div>
          </PriceInfo>
        </NftPrice>
        <Sort>
          Items
          <select>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </Sort>
        <BottomSaleWrap>
          <Filter>
            <DropTitle onClick={priceClick}>
              <div>price</div>
              {pricedd ? (
                <img src="./imgs/up.svg" alt="up" />
              ) : (
                <img src="./imgs/down.svg" alt="down" />
              )}
            </DropTitle>

            {pricedd ? (
              <DropMenu>
                <div>low to high</div>
                <div>high to low</div>
              </DropMenu>
            ) : (
              <></>
            )}
            <DropTitle onClick={classClick}>
              <div>class</div>
              {classdd ? (
                <img src="./imgs/up.svg" alt="up" />
              ) : (
                <img src="./imgs/down.svg" alt="down" />
              )}
            </DropTitle>

            {classdd ? (
              <DropMenu>
                <div>Warrior</div>
                <div>Assassin</div>
                <div>Archer</div>
                <div>Wizard</div>
              </DropMenu>
            ) : (
              <></>
            )}
          </Filter>
          <SailList>
            {number?.map((item, index) => {
              return (
                <SailItem
                  className={"nftrio-button fg-white bg-melon ac-pink "}
                  onMouseEnter={() => mouseIn(item)}
                  onMouseLeave={() => mouseIn(0)}
                  item={item}
                  key={`Sail-${index}`}
                >
                  <div>
                    <img
                      className={buyBtn == item ? "on" : ""}
                      src="./imgs/imsi.png"
                      alt="imimsi"
                    />
                  </div>
                  <div>NFT이름 #{item}</div>
                  <div>0.15 ETH</div>
                  <div>Last sale : 0.15 ETH</div>

                  <BuyBtn
                    className={buyBtn == item ? "on" : ""}
                    onClick={BuyMordalHandler}
                  >
                    구매
                  </BuyBtn>
                </SailItem>
              );
            })}
          </SailList>
        </BottomSaleWrap>
      </SaleWrap>
      {buyMordal ? <NftBuyMordalContainer></NftBuyMordalContainer> : <></>}
    </MainBoard>
  );
};

export default SaleComponent;
const DropMenu = styled.div`
  font-size: 0.8rem;
  color: gray;
`;

const BuyBtn = styled.div`
  position: absolute;
  left: 0;
  bottom: -50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 50px;
  background-color: cyan;
  text-align: center;
`;
const SailItem = styled.div<{ item: number }>`
  position: relative;
  width: 250px;
  margin: 5px 9px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;

  .on {
    bottom: 0;
    transition: bottom 0.5s ease-out;
  }

  div:first-child {
    width: 100px;
    margin: auto;
  }
  div:nth-child(2) {
    font-size: 0.6rem;
    color: black;
  }
  div:nth-child(3) {
    font-size: 0.6rem;
    color: black;
  }
  div:nth-child(4) {
    font-size: 0.6rem;
    color: gray;
  }
  img {
    width: 100px;
  }
`;
const Filter = styled.div`
  width: 20%;
  border: 1px solid pink;
`;
const SailList = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid pink;
  width: 75%;
`;

const BottomSaleWrap = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const SaleWrap = styled.div`
  max-width: 1800px;
  margin: 80px auto;
`;
const PriceInfo = styled.div`
  margin-right: 20px;
  div:first-child {
    font-size: 0.9rem;
  }
  div:last-child {
    font-size: 0.6rem;
    color: gray;
  }
`;
const MainBoard = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

const NftPrice = styled.div`
  display: flex;
`;

const NftInfo = styled.div`
  margin: 10px 0;
  display: flex;
  font-size: 0.6rem;
  div {
    margin-right: 10px;
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

const Sort = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;

  select {
    font-size: 1rem;
  }
`;

const DropTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-left: 10px;
  }
`;
