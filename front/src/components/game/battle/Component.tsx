import styled from "styled-components";

type Props = {
  bgUrl: string;
  bgOnLoad: boolean;
  setBgOnLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

const BattleComponent: React.FC<Props> = ({ bgUrl, bgOnLoad, setBgOnLoad }) => {
  return <BattleBox bgUrl={bgUrl}></BattleBox>;
};

export default BattleComponent;

const BattleBox = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  ::before {
    content: " ";
    display: inherit;
    width: 100%;
    opacity: ${({ bgUrl }) => (bgUrl ? 0.6 : 1)};
    height: 100%;
    background: url(${({ bgUrl }) => (bgUrl ? bgUrl : "./imgs/minting.gif")});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
