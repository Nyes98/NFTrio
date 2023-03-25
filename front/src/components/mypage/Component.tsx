import styled from "styled-components";
import "../../nftrio.css";
import InftData from "../../interfaces/NftData.interface";
import NftSellMordalContainer from "../mordal/nftSell/Container";

type Props = {
  account: string | undefined;
  CagetoriControl: (num: number) => void;
  categori: number;
  userNftData?: Array<InftData>;
  move: (where: string) => void;
  BuyMordalHandler: () => void;
  buyMordal: boolean;
  SelectHash: (hash: string) => void;
  selHash: string;
};

const MyPageComponent: React.FC<Props> = ({
  account,
  CagetoriControl,
  categori,
  userNftData,
  move,
  BuyMordalHandler,
  buyMordal,
  SelectHash,
  selHash,
}) => {
  console.log(userNftData);
  return (
    <MainBoard>
      <img src="../imgs/mainnft.png" alt="main" />
      <NftImg>
        <img src="../imgs/nftmark.png" alt="mark" />
      </NftImg>
      <Wrap>
        <div className="nftrio-h">
          <h3>My Profile</h3>
        </div>
        <NftInfo>
          <div>
            <img src="../imgs/ethereum.svg" alt="eth" />
          </div>
          <div>{account}</div>
        </NftInfo>
        {/* <Categori>
          <div onClick={() => CagetoriControl(1)}>
            Collected {userNftData?.job}
          </div>
          <div onClick={() => CagetoriControl(2)}>Created 1</div>
        </Categori> */}

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
                SelectHash(item.hash);
              }}
            >
              <img src="/imgs/dot.svg" alt="" />
              Not listed
            </div>
            <div>{item.price}</div>
            <div>--</div>
          </InfoLine>
        ))}
      </Wrap>
      {buyMordal ? (
        <NftSellMordalContainer selHash={selHash}></NftSellMordalContainer>
      ) : (
        <></>
      )}
    </MainBoard>
  );
};

export default MyPageComponent;

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
  }
`;

const MainBoard = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;
const Categori = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin: 20px 0;
  div {
    margin-right: 20px;
    cursor: pointer;
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
