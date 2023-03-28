import styled from "styled-components";
import InftData from "../../../interfaces/NftData.interface";

type Props = {
  setNoTicket: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoTicketMordalComponent: React.FC<Props> = ({ setNoTicket }) => {
  return (
    <>
      <Background onClick={() => setNoTicket(false)}></Background>
      <Mordal>
        <Title>
          필요한 티켓이 부족합니다.
          <button onClick={() => setNoTicket(false)}>x</button>
        </Title>
        <Contents>티켓을 1개 이상 소유한 뒤, 다시 시도해주세요.</Contents>
      </Mordal>
    </>
  );
};

export default NoTicketMordalComponent;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Title = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 800;
  border-bottom: 1px solid lightgray;

  button {
    position: absolute;
    border-radius: 5px;
    right: 5px;
    top: 5px;
    border: none;
    padding: 3px 8px;
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

const Contents = styled.div`
  padding: 20px;
`;

const Mordal = styled.div`
  z-index: 1;

  position: fixed;
  border: 1px solid gray;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;
