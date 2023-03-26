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
