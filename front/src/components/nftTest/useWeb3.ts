// return으로 html을 반환하지 않는 것 => 훅이라고 생각하면 된다.
// custom Hook => 자주 쓸 함수(재사용), 로직들을 추상화해서 묶어서 재사용이 가능하도록 하는 함수

import { useCallback, useState } from "react";
import Web3 from "web3";

// 어떠한 정의들을 모아둔 파일(여러곳에서 재정의되지 않기 위해) => useWeb3.ts

// 클래스는 타입이 될 수 있다.
// react에서 type을 정의해줘야하는 것들
// 1. 변수 2. 함수 3. 상태(useState)
// const [_account] = ["asdfsdf"] => 그러면 서로 대괄호빠져서 그 값만을 _account로 정의한다. 구조분해할당 생각하면 될 듯
export const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [account, setAccount] = useState<string>("");
  const [chainId, setChainId] = useState<string | null>("");

  const logIn = useCallback(async () => {
    // useCallback => useEffect와 유사한데 함수를 정의할 때 뒤의 두번째 매개변수 조건에 따라(얘가 바뀔때마다) 해당 함수의 로직을 재정의하겠다.
    // 해당 함수는 태초에 한 번 랜더링 될 때 정의된 후 변경되지 않는다.
    // 콜백함수 => on으로 시작되는 애들 ex) onClick, onChange 등 이벤트 발생 시 실행되는 함수
    try {
      if (window.ethereum) {
        const _web3: Web3 = new Web3((window as any).ethereum);
        setWeb3(_web3);

        const [_account] = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as Array<string>;
        if (_account) {
          setAccount(_account);
        }

        window.ethereum.on("accountsChanged", async () => {
          if (window.ethereum) {
            const [_account] = (await window.ethereum.request({
              method: "eth_requestAccounts",
            })) as Array<string>;
            setAccount(_account);
          }
        });

        setChainId(window.ethereum.networkVersion);
      } else {
        console.log("MetaMask is not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { web3, account, chainId, logIn };
};
