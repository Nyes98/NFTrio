import axios from "axios";
import { useEffect, useState } from "react";

interface nftData {
  name: string;
  description: string;
  image: string;
}

export const List = ({ account }: { account: string }) => {
  const [list, setList] = useState<Array<nftData>>([]);
  // API Server에서 리스트 받아서 출력하자
  useEffect(() => {
    (async () => {
      console.log(
        await axios.get(
          "https://ipfs.io/ipfs/QmY4kcPs31ZyGPjL6wCuKy96HPTSXFuAZPYactxGZzaLiT"
          // pinata에서 Token업로드 한 토큰 json의 CID
          // 주소가 CID로 입력된 이유 => 애초에 토큰 발행은 1개만 되어있고(물론 sale, nft로 따지고보면 2개지만)
          // 실질적으로 minting을 통해 토큰을 생성하는건 해당 토큰의 balance가 추가되는 거라고 보면 된다.
          // .env쪽에 토큰의 CA를 정의한 것을 근거로 유추해볼 수 있는 내용이다.
        )
      );
      setList(
        (
          await axios.post("http://localhost:8080/api/nft/list", {
            from: account,
          })
        ).data
      );
    })();
  }, [account]);
  return (
    <ul>
      {list.map((item, idx) => (
        <Item item={item} key={`item-${idx}`} />
      ))}
    </ul>
  );
};

const Item = ({ item: { name, description, image } }: { item: nftData }) => {
  return (
    <li>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <img src={image} />
      </div>
    </li>
  );
};
