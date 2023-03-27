import styled from "styled-components";

type Props = {};

const LoadingModalComponent: React.FC<Props> = () => {
  return (
    <>
      <Background></Background>
      <Mordal>
        <Modaldiv>
          <h2 className="fg-white">Loading...🚀</h2>
        </Modaldiv>
      </Mordal>
    </>
  );
};

export default LoadingModalComponent;

const Modaldiv = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("./imgs/minting.gif");
    opacity: 0.9;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    border-radius: 20px;
    z-index: -1;
  }

  & > h2 {
    animation: fontAni 4s linear infinite;
    margin-top: 200px;
  }

  @keyframes fontAni {
    0% {
      opacity: 1;
    }

    15% {
      opacity: 0.3;
    }

    30% {
      opacity: 1;
    }

    45% {
      opacity: 0.3;
    }

    60% {
      opacity: 1;
    }

    75% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Mordal = styled.div`
  z-index: 1;

  position: fixed;
  border: 1px solid gray;
  border-radius: 20px;
  width: 800px;
  height: 500px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const PriceInfo = styled.div`
  div:first-child {
    font-size: 0.8rem;
  }

  div:last-child {
    font-size: 0.6rem;
  }
`;
