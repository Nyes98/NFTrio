import styled from "styled-components";

type Props = {};

const MintingModalComponent: React.FC<Props> = () => {
  return (
    <Modaldiv>
      <h2 className="fg-white">Loading...🚀</h2>
    </Modaldiv>
  );
};

export default MintingModalComponent;

const Modaldiv = styled.div`
  background-color: rgba(240, 240, 240, 1);
  width: 70vw;
  height: 70vh;
  margin: 15vh 15vw;
  position: relative;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

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
