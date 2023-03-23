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
