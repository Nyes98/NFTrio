import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import Web3 from "web3";

export const Mint = ({ web3, account }: { web3: Web3; account: string }) => {
  const [NftName, setName] = useState<string>("");
  const [NftDescription, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [img, setImg] = useState<string | ArrayBuffer>("");

  const nameInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }, []);

  const descriptionInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  }, []);

  const fileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      console.log("이미지선택했다", e.currentTarget.files[0]);
      console.log(e.currentTarget.files);
      setFile(e.currentTarget.files[0]);

      const reader = new FileReader();
      // 파일을 읽는 객체를 만든다. 클래스도 객체다.
      reader.readAsDataURL(e.currentTarget.files[0]);
      // 파일 내용을 가지고 element에서 띄울 수 있게 준비하도록 시킨다.
      reader.onload = () => {
        // 준비가 끝나면
        if (reader.result) {
          console.log(reader.result.toString());
          setImg(reader.result);
        }
      };
    }
  }, []);

  const mint = async () => {
    if (!NftName || !NftDescription || !file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", NftName);
    formData.append("description", NftDescription);
    formData.append("from", account);
    // 키와 값으로 정의했다. file: file, name:NftName => name이라는 키의 값은 NftName이다.
    const result = (
      await axios.post("http://localhost:8080/api/nft/mint", formData)
    ).data;
    console.log("결과", result);
    web3.eth.sendTransaction(result); // metamask에 transaction
  };

  return (
    <div>
      <input type="text" onInput={nameInput} placeholder={"NFT Name"} />
      <input
        type="text"
        onInput={descriptionInput}
        placeholder={"NFT Description"}
      />
      <input type="file" onChange={fileChange} />
      {img && (
        <div>
          <img src={img.toString()} />
        </div>
      )}
      <button onClick={mint}>Mint</button>
    </div>
  );
};
