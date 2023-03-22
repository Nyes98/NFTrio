import styled from "styled-components";
import "../../nftrio.css";

type Props = {};

const FooterComponent: React.FC<Props> = ({}) => {
  return (
    <WrapBox className="bg-cyan fg-white">
      <HighBox>
        <IntroBox>
          <div>Introduce NFTrio</div>
          <LinkBox>
            <div>
              Github Link :{" "}
              <a
                href=" https://github.com/Nyes98/NFTrio-TeamProject"
                className="nftrio-a"
              >
                https://github.com/Nyes98/NFTrio-TeamProject
              </a>
            </div>
            <div>
              Notion Link :
              <a
                href=" https://github.com/Nyes98/NFTrio-TeamProject"
                className="nftrio-a"
              >
                https://hollow-william-604.notion.site/NFTrio-Solidity-b98bdda251f74a9dbaea4799c744dfff
              </a>
            </div>
          </LinkBox>
        </IntroBox>
        <TeamBox>
          <div>박예성 : Front End</div>
          <div>김정규 : Back End</div>
          <div>이가원 : Block Chain</div>
        </TeamBox>
        <div>
          <div>Our Skill Stack</div>
          <StackBox>
            <img src="./imgs/skill1.png" alt="stack1" />
            <img src="./imgs/skill2.png" alt="stack1" />
            <img src="./imgs/skill3.png" alt="stack1" />
            <img src="./imgs/skill4.png" alt="stack1" />
            <img src="./imgs/skill5.png" alt="stack1" />
            <img src="./imgs/skill6.png" alt="stack1" />
            <img src="./imgs/skill7.png" alt="stack1" />
          </StackBox>
        </div>
      </HighBox>
    </WrapBox>
  );
};

export default FooterComponent;

const StackBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    margin: 0 10px 15px 10px;
  }
`;

const IntroBox = styled.div``;
const HighBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  margin: auto;
`;

const WrapBox = styled.div``;
const TeamBox = styled.div``;
const LinkBox = styled.div`
  font-size: 0.8rem;
  width: 790px;
`;
