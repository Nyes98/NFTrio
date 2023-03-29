import axios from "axios";
import InftData from "../interfaces/NftData.interface";

const request = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const RecentNft = async (
  page: number,
  pageLen: number,
  job?: number,
  priceFilter?: number
) => {
  return await request.post("/nft/recentAll", {
    page: page,
    pageLen: pageLen,
    job: job,
    priceFilter: priceFilter,
  });
};

export const NftCount = async () => {
  return await request.post("/nft/nftCount");
};

export const AllNft = async () => {
  return await request.post("/nft/all");
};

export const NftInfo = async (hash: string) => {
  return await request.post("/nft/nftInfo", { hash: hash });
};

export const MyNft = async (owner: string) => {
  return await request.post("/nft/myNft", { owner: owner });
};

export const SellNft = async (price: number, selHash: string) => {
  return await request.post("/nftmarket/sell", {
    price: price,
    selHash: selHash,
  });
};

export const MyNftOnSale = async () => {
  return await request.post("/nftmarket/list");
};

export const RegistUser = async (address?: string) => {
  return await request.post("/user/regist", { address: address });
};

export const NftBuy = async (
  hash?: string,
  price?: number,
  tokenId?: number,
  account?: string
) => {
  return await request.post("/nftmarket/buy", {
    hash: hash,
    price: price,
    tokenId: tokenId,
    account: account,
  });
};

export const NftCost = async (hash?: string) => {
  return await request.post("/nftmarket/cost", { hash: hash });
};

export const CallHistory = async (hash?: string) => {
  return await request.post("/nftmarket/history", { hash: hash });
};

export const PickNft = async (account: string) => {
  return await request.post("/nft/nftMint", { from: account });
};

export const CallUser = async (account: string) => {
  return await request.post("/user/call", { address: account });
};

export const SwapToken = async () => {
  return await request.post("/nft/trade");
};

export const ApproveToken = async (account: string) => {
  return await request.post("/nft/approve", { account: account });
};

export const SellNft2 = async (
  sellPrice: number,
  account: string,
  selTokenId: number
) => {
  return await request.post("/nft/saleToken", {
    price: sellPrice,
    account: account,
    tokenId: selTokenId,
  });
};

export const UseTicket = async (account: string, ticket: number) => {
  return await request.post("/user/useTicket", {
    account: account,
    mintNumber: ticket,
  });
};

export const InsertTokenId = async (tokenId: string) => {
  return await request.post("/nft/addTokenId", {
    tokenId: tokenId,
  });
};

export const SetUserFormation = async (
  account: string,
  formationIndex: number,
  characterHash: string
) => {
  const { data } = await CallUser(account);
  try {
    return await request.post("/user/setUserFormation", {
      account: data.address,
      formationIndex,
      characterHash,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ClearUserFormation = async (
  account: string,
  formationIndex: number,
  hash: string
) => {
  const { data } = await CallUser(account);
  try {
    return await request.post("/user/clearUserFormation", {
      account: data.address,
      formationIndex,
      hash,
    });
  } catch (err) {
    console.log(err);
  }
};

export const NftOwnerChange = async (hash?: string, owner?: string) => {
  return await request.post("/nft/ownerChange", { hash: hash, owner: owner });
};
export const CallStage = async (stage: number) => {
  return await request.post("/game/getStage", { stage: stage });
};

export const getMonsterData = async (monsterName: string) => {
  return (
    await request.post("/game/getMonsterByName", {
      monsterName: monsterName,
    })
  ).data;
};

export const getCharaterList = async (account: string) => {
  return await request.post("/user/getCharacterList", { account: account });
};
