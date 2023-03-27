import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
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

export const NftBuy = async (hash?: string, price?: number) => {
  return await request.post("/nftmarket/buy", { hash: hash, price: price });
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

export const ApproveToken = async () => {
  return await request.post("/nft/approve");
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

export const UseTicket = async (account: string) => {
  return await request.post("/user/useTicket", {
    account: account,
  });
};

export const InsertTokenId = async (tokenId: string) => {
  return await request.post("/nft/addTokenId", {
    tokenId: tokenId,
  });
};
