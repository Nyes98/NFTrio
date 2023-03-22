import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export const RecentNFT = async (page: number, pageLen: number) => {
  return await request.post("/user/recentAll", {
    page: page,
    pageLen: pageLen,
  });
};

// ex)
// export const userRegist = async (registInfo: object) => {
//   return await request.post("/user/regist", { registInfo: registInfo });
// };
