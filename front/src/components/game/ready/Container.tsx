import ReadyComponent from "./Component";
import { MyNft } from "../../../api";
import { useEffect, useState } from "react";
import { useWeb3 } from "../../../modules/useWeb3";
import InftData from "../../../interfaces/NftData.interface";
import { CallUser } from "../../../api";

const ReadyContainer = () => {
  const { account, logIn } = useWeb3();
  const [curCharacterList, setCurCharacterList] = useState<Array<InftData>>([]);
  const [formationState, setFormationState] = useState(-1);
  const [formationList, setFormationList] = useState<Array<string>>([]);

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

  useEffect(() => {
    if (!account) logIn();
    callUserFunction();
    const charList = document.getElementById("charList");
    charList?.addEventListener("wheel", (e: WheelEvent) => {
      e.preventDefault();
      charList.scrollTop += e.deltaY;
    });
    document.onclick = (e: any) => {
      if (e.target.id !== "formation-select") {
        setFormationState(-1);
      }
    };

    return charList?.removeEventListener("wheel", (e: WheelEvent) => {
      e.preventDefault();
      charList.scrollTop += e.deltaY;
    });
  }, [account]);

  useEffect(() => {
    if (formationList.length) {
      getCharacterList();
    }
  }, [formationList]);

  const getCharacterList = async () => {
    if (account) {
      let { data } = await MyNft(account);
      data = data.filter(
        (item: InftData) => !formationList.includes(item.hash)
      );
      setCurCharacterList([...data]);
      return data;
    }
    return "null";
  };

  return (
    <ReadyComponent
      curCharacterList={curCharacterList}
      formationState={formationState}
      setFormationState={setFormationState}
      account={account ? account : undefined}
      formationList={formationList}
      callUserFunction={callUserFunction}
    />
  );
};

export default ReadyContainer;
