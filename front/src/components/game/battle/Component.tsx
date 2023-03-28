import { useEffect, useState } from "react";
import styled from "styled-components";
import { CallUser, NftInfo } from "../../../api";
import Iposition from "../../../interfaces/Position.interface";
import InftData from "../../../interfaces/NftData.interface";
import { useWeb3 } from "../../../modules/useWeb3";
import BattleSlotComponent from "./BattleSlot/Component";

type Props = {
  bgUrl: string;
  bgOnLoad: boolean;
  setBgOnLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

const BattleComponent: React.FC<Props> = ({ bgUrl, bgOnLoad, setBgOnLoad }) => {
  const { account, logIn } = useWeb3();
  const [formationList, setFormationList] = useState<Array<string>>([]);
  const [characterList, setCharacterList] = useState<Array<InftData | any>>([]);

  const callUserFunction = async () => {
    if (account) {
      const { data } = await CallUser(account);
      setFormationList([
        data.formation_1,
        data.formation_2,
        data.formation_3,
        data.formation_4,
        data.formation_5,
        data.formation_6,
      ]);
    }
  };

  const getCharacterList = async () => {
    if (formationList.length) {
      for (let i = 0; i < formationList.length; ++i) {
        if (formationList[i]) {
          const curCharacter = await NftInfo(formationList[i]);
          const curList = characterList;
          curList[i] = curCharacter.data;
          setCharacterList(() => [...curList]);
        }
      }
    }
  };

  useEffect(() => {
    if (!account) logIn();
    callUserFunction();
  }, [account]);

  useEffect(() => {
    if (formationList.length) {
      getCharacterList();
    }
  }, [formationList]);

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  const xBase = 10;
  const yBase = 45;
  const positionConfig: Array<Iposition> = [
    { x: xBase + 0, y: yBase + 0 },
    { x: xBase + 0, y: yBase + 20 },
    { x: xBase + 10, y: yBase + 30 },
    { x: xBase + 20, y: yBase + 20 },
    { x: xBase + 10, y: yBase + 10 },
    { x: xBase + 0, y: yBase + 40 },
  ];
  return (
    <BattleBox bgUrl={bgUrl}>
      {positionConfig.map((item, index) => {
        return (
          <BattleSlotComponent
            key={`battleSlot-${index}`}
            position={item}
            index={index}
            account={account}
            character={characterList[index]}
          ></BattleSlotComponent>
        );
      })}
    </BattleBox>
  );
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
