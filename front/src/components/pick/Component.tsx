import styled from "styled-components";
import "../../nftrio.css";
import LoadingModalComponent from "../mordal/loading/Components";
import MintResultContainer from "../mordal/mintResult/Container";
import NoTicketMordalComponent from "../mordal/noTicket/Component";
import NoTicketMordalContainer from "../mordal/noTicket/Container";

type Props = {
  pickNft: () => void;
  loadingMordal: boolean;
  userTicket: number;
  noTicket: boolean;
  setNoTicket: React.Dispatch<React.SetStateAction<boolean>>;
  ResultMordal: boolean;
  ResultMordalControl: () => void;
};

const PickComponent: React.FC<Props> = ({
  pickNft,
  loadingMordal,
  userTicket,
  noTicket,
  setNoTicket,
  ResultMordal,
  ResultMordalControl,
}) => {
  return (
    <Background className="bg-melon">
      <div onClick={ResultMordalControl}>잠깐만</div>
      <TicketBox>
        <div>
          <img src="../imgs/ticket.svg" alt="" />
        </div>
        <div> : {userTicket}</div>
      </TicketBox>
      <ImgBox>
        <img src="./imgs/pick1.png" alt="pick1" />
        <img src="./imgs/pick3.png" alt="pick3" />
        <img src="./imgs/pick2.png" alt="pick2" />
      </ImgBox>
      <PickBtn className="bg-pink nftrio-button ac-cyan" onClick={pickNft}>
        NFT 캐릭터 랜덤 뽑기
      </PickBtn>
      <div>경고 : 원하지 않은 NFT가 나오지 않을 수 있습니다.</div>
      {loadingMordal ? <LoadingModalComponent></LoadingModalComponent> : <></>}
      {noTicket ? (
        <NoTicketMordalContainer
          setNoTicket={setNoTicket}
        ></NoTicketMordalContainer>
      ) : (
        <></>
      )}
      {ResultMordal ? <MintResultContainer></MintResultContainer> : <></>}
    </Background>
  );
};

export default PickComponent;

const Background = styled.div`
  padding: 40px 0;
  max-width: 1800px;
  text-align: center;
  border-radius: 20px;
  margin: 50px auto;
  border: 3px solid #aacb73;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    margin: 0 50px;
  }
`;
const PickBtn = styled.div`
  border-radius: 15px;
  width: 300px;
  margin: 40px auto;
`;

const TicketBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;

  img {
    width: 50px;
    margin-right: 20px;
  }
`;
