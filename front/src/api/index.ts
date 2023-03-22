import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

// ex)
// export const userRegist = async (registInfo: object) => {
//   return await request.post("/user/regist", { registInfo: registInfo });
// };
