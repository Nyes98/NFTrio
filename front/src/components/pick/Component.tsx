import styled from "styled-components";
import "../../nftrio.css";
import LoadingModalComponent from "../mordal/loading/Components";

type Props = {
  pickNft: () => void;
  loadingMordal: boolean;
};

const PickComponent: React.FC<Props> = ({ pickNft, loadingMordal }) => {
  return (
    <Background className="bg-melon">
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
