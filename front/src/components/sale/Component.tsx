import styled from "styled-components";
import InftData from "../../interfaces/NftData.interface";
import "../../nftrio.css";
import NftBuyMordalContainer from "../mordal/nftBuy/Container";

type Props = {
  priceClick: () => void;
  classClick: () => void;
  pricedd: boolean;
  classdd: boolean;
  buyBtn: string;
  mouseIn: (item: string) => void;
  BuyMordalHandler: () => void;
  buyMordal: boolean;
  nftCount?: number;
  handleSelect: (e: any) => void;
  PriceSort: (e: any) => void;
  ClassSort: (e: any) => void;
  nftArr?: Array<any>;
  floorPrice?: number;
  topPrice?: number;
  totalPrice: number;
  move: (where: string) => void;
  CallSellNft: () => void;
  registedNft: Array<any>;
  callNftList: () => void;
};

const SaleComponent: React.FC<Props> = ({
  priceClick,
  classClick,
  pricedd,
  classdd,
  buyBtn,
  mouseIn,
  buyMordal,
  nftCount,
  handleSelect,
  PriceSort,
  ClassSort,
  nftArr,
  floorPrice,
  topPrice,
  totalPrice,
  move,
  CallSellNft,
  registedNft,
  callNftList,
}) => {
  console.log(registedNft);

  return (
    <MainBoard>
      <img src="./imgs/mainnft.png" alt="main" />
      <NftImg>
        <img src="./imgs/nftmark.png" alt="mark" />
      </NftImg>
      <SaleWrap>
        <div className="nftrio-h">
          <h3>Trio</h3>
        </div>
        <NftInfo>
          <div>Items {nftCount}</div>
          <div>Chain Ethereum</div>
          <div>Category Game</div>
        </NftInfo>
        <NftInfo>
          <div>NFT 설명 주저리주저리</div>
        </NftInfo>
        <NftPrice>
          <PriceInfo>
            <div>{totalPrice} ETH</div>
            <div>total volume</div>
          </PriceInfo>
          <PriceInfo>
            <div>{floorPrice}ETH</div>
            <div>floor price</div>
          </PriceInfo>
          <PriceInfo>
            <div>{topPrice}ETH</div>
            <div>top price</div>
          </PriceInfo>
        </NftPrice>

        <FilterBox>
          <Categori>
            <div onClick={callNftList}>All</div>
            <div onClick={CallSellNft}>On List</div>
          </Categori>
          <Sort>
            Items
            <select onChange={handleSelect}>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </Sort>
        </FilterBox>

        <BottomSaleWrap>
          <Filter>
            <DropTitle onClick={priceClick}>
              <div>Price</div>
              {pricedd ? (
                <img src="./imgs/up.svg" alt="up" />
              ) : (
                <img src="./imgs/down.svg" alt="down" />
              )}
            </DropTitle>

            {pricedd ? (
              <DropMenu>
                <div onClick={() => PriceSort(1)}>low to high</div>
                <div onClick={() => PriceSort(2)}>high to low</div>
              </DropMenu>
            ) : (
              <></>
            )}
            <DropTitle onClick={classClick}>
              <div>Class</div>
              {classdd ? (
                <img src="./imgs/up.svg" alt="up" />
              ) : (
                <img src="./imgs/down.svg" alt="down" />
              )}
            </DropTitle>

            {classdd ? (
              <DropMenu>
                <div onClick={() => ClassSort(1)}>Warrior</div>
                <div onClick={() => ClassSort(2)}>Wizard</div>
                <div onClick={() => ClassSort(3)}>Archer</div>
                <div onClick={() => ClassSort(4)}>Assassin</div>
              </DropMenu>
            ) : (
              <></>
            )}
          </Filter>
          {registedNft?.length ? (
            <SailList>
              {registedNft?.map((item, index) => {
                return (
                  <SailItem
                    className={"nftrio-button fg-white bg-melon ac-pink "}
                    onMouseEnter={() => mouseIn(item.hash)}
                    onMouseLeave={() => mouseIn("0")}
                    item={item.hash}
                    key={`Sail-${index}`}
                    onClick={() => move(item.hash)}
                  >
                    <div>
                      <img
                        className={buyBtn == item.hash ? "on" : ""}
                        src={`${item.img}`}
                        alt="imimsi"
                      />
                    </div>
                    <div>{item.name}</div>
                    {item.price == 0 ? (
                      <div className="fg-black">Not Sale</div>
                    ) : (
                      <div className="fg-hotpink">{item.price} Trio</div>
                    )}

                    {item.cost ? (
                      item.price == 0 ? (
                        <div className="fg-dark">
                          Last Sale : {item.cost} Trio
                        </div>
                      ) : (
                        <></>
                      )
                    ) : item.price == 0 ? (
                      <div className="fg-dark">New NFT</div>
                    ) : (
                      <div className="fg-dark">First Sale</div>
                    )}

                    <BuyBtn
                      className={buyBtn == item.hash ? "on fg-white" : ""}
                    >
                      상세보기
                    </BuyBtn>
                  </SailItem>
                );
              })}
            </SailList>
          ) : (
            <SailList>
              {nftArr?.map((item, index) => {
                return (
                  <SailItem
                    className={"nftrio-button fg-white bg-melon ac-pink "}
                    onMouseEnter={() => mouseIn(item.hash)}
                    onMouseLeave={() => mouseIn("0")}
                    item={item.hash}
                    key={`Sail-${index}`}
                    onClick={() => move(item.hash)}
                  >
                    <div>
                      <img
                        className={buyBtn == item.hash ? "on" : ""}
                        src={`${item.img}`}
                        alt="imimsi"
                      />
                    </div>
                    <div>{item.name}</div>
                    {item.price == 0 ? (
                      <div className="fg-black">Not Sale</div>
                    ) : (
                      <div className="fg-hotpink">{item.price} Trio</div>
                    )}

                    {item.cost ? (
                      item.price == 0 ? (
                        <div className="fg-dark">
                          Last Sale : {item.cost} Trio
                        </div>
                      ) : (
                        <></>
                      )
                    ) : item.price == 0 ? (
                      <div className="fg-dark">New NFT</div>
                    ) : (
                      <div className="fg-dark">First Sale</div>
                    )}

                    <BuyBtn
                      className={buyBtn == item.hash ? "on fg-white" : ""}
                    >
                      상세보기
                    </BuyBtn>
                  </SailItem>
                );
              })}
            </SailList>
          )}
        </BottomSaleWrap>
      </SaleWrap>
      {buyMordal ? <NftBuyMordalContainer></NftBuyMordalContainer> : <></>}
    </MainBoard>
  );
};

export default SaleComponent;
const FilterBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Categori = styled.div`
  display: flex;
  div {
    margin: 0 10px;
    border: 3px solid lightsalmon;
    border-radius: 10px;
    padding: 5px;
  }
`;
const DropMenu = styled.div`
  margin-left: 30px;
  font-size: 0.8rem;
  color: gray;
`;

const BuyBtn = styled.div`
  position: absolute;
  left: 0;
  bottom: -55px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 30px;
  background-color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;

  &&& {
    font-size: 0.7rem;
  }
`;
const SailItem = styled.div<{ item: string }>`
  position: relative;
  width: 318px;
  margin: 5px 9px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;

  .on {
    bottom: -5px;
    transition: bottom 0.5s ease-out;
  }

  div {
    margin: 5px 0;
  }

  div:first-child {
    width: 120px;
    margin: auto;
  }
  div:nth-child(2) {
    font-size: 0.5rem;
    color: black;
  }
  div:nth-child(3) {
    font-size: 0.6rem;
    color: black;
  }
  div:nth-child(4) {
    font-size: 0.6rem;
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

  select {
    font-size: 1rem;
  }
`;

const DropTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  img {
    width: 15px;
    margin-left: 10px;
  }
`;
