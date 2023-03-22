import styled from "styled-components";

type Props = {
  ControlMordal: () => void;
};

const NftBuyMordalComponent: React.FC<Props> = ({ ControlMordal }) => {
  return (
    <>
      <Background onClick={ControlMordal}></Background>
      <Mordal>
        <Title>
          구매하시겠습니까?
          <button onClick={ControlMordal}>x</button>
        </Title>
        <Contents>0.15 ETH입니다.</Contents>
      </Mordal>
    </>
  );
};

export default NftBuyMordalComponent;

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
  }
`;
const Contents = styled.div`
  padding: 10px 20px 0 20px;
  font-size: 1rem;
`;

const Mordal = styled.div`
  z-index: 1;

  position: fixed;
  border: 1px solid gray;
  border-radius: 10px;
  width: 800px;
  height: 400px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;
