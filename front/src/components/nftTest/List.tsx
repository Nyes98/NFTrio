import axios from "axios";
import { useEffect, useState } from "react";
import Web3 from "web3";

interface nftData {
  name: string;
  description: string;
  image: string;
  tokenId: number;
  price: number;
}

export const List = ({ account, web3 }: { account: string; web3?: Web3 }) => {
  const [list, setList] = useState<Array<nftData>>([]);
  const [price, setPrice] = useState("");
  const [saleList, setSaleList] = useState<Array<nftData>>([]);
  // API Server에서 리스트 받아서 출력하자

  const getList = async () => {
    // console.log(
    //   await axios.get(
    //     "https://ipfs.io/ipfs/QmUBKJxcpnzAzgB2LgRwqpJD5NYPyMgSY5tLB8dZMuiA16"
    //     // pinata에서 Token업로드 한 토큰 json의 CID
    //     // 주소가 CID로 입력된 이유 => 애초에 토큰 발행은 1개만 되어있고(물론 sale, nft로 따지고보면 2개지만)
    //     // 실질적으로 minting을 통해 토큰을 생성하는건 해당 토큰의 balance가 추가되는 거라고 보면 된다.
    //     // .env쪽에 토큰의 CA를 정의한 것을 근거로 유추해볼 수 있는 내용이다.
    //   )
    // );
    console.log(account);
    const result = (
      await axios.post("http://localhost:8080/api/nft/list", {
        from: account,
      })
    ).data;
    console.log("리스트 결과", result);
    setList(result);
  };

  const saleToken = async (_tokenId: number) => {
    const result = (
      await axios.post("http://localhost:8080/api/nft/saleToken", {
        price: price,
        tokenId: _tokenId,
        account: account,
      })
    ).data;
    console.log("판매등록", result);
    console.log(web3);
    web3?.eth.sendTransaction(result);
    // web3?.eth.sendTransaction({ from: account, to: result.to, ...result });
    // 이 코드가 권한등록하는 sendTransaction
    // console.log("세일토큰", saleTk);
  };

  const getSaleList = async () => {
    const temp = (await axios.post("http://localhost:8080/api/nft/getSaleList"))
      .data;
    console.log("판매리스트", temp);
    setSaleList(temp);
  };

  const approveToken = async (_price: number) => {
    const temp = (
      await axios.post("http://localhost:8080/api/nft/approvePurchase", {
        price: _price,
        from: account,
      })
    ).data;
    web3?.eth.sendTransaction(temp);
  };
  const purchaseToken = async (_tokenId: number) => {
    const purchase = (
      await axios.post("http://localhost:8080/api/nft/purchaseToken", {
        tokenId: _tokenId,
        from: account,
      })
    ).data;
    console.log(web3);
    await web3?.eth.sendTransaction(purchase);
  };

  useEffect(() => {
    getList();
  }, [account]);
  return (
    <ul>
      {list.map((item: nftData, idx) => (
        <div key={`comp-${idx}`}>
          <li>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>tokenId: {item.tokenId}</div>
            <div>
              <img src={item.image} />
            </div>
          </li>
          <input
            key={`box-${idx}`}
            placeholder={"판매 금액"}
            value={price}
            type={"number"}
            onInput={(e: any) => {
              setPrice(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            key={`btn-${idx}`}
            onClick={() => {
              saleToken(item.tokenId);
            }}
          >
            판매
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          getSaleList();
        }}
      >
        판매 목록
      </button>
      {!saleList ? (
        <div>판매 목록이 없습니다.</div>
      ) : (
        <div>
          {saleList?.map((item: nftData, idx) => (
            <div>
              <div>
                <img src={item.image} />
              </div>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>tokenId: {item.tokenId}</div>
              <div>판매금액 : {item.price}</div>
              <button
                onClick={() => {
                  purchaseToken(item.tokenId);
                }}
              >
                구매
              </button>
              <button
                onClick={() => {
                  approveToken(item.price);
                }}
              >
                구매 권한
              </button>
            </div>
          ))}
        </div>
      )}
    </ul>
  );
};
