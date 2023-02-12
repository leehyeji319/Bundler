// import axios
import axios from "axios";
import { useEffect } from "react";

// 전역 설정
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

// 요청 주소
// 서버용
const BUNDLER_URL = "https://i8a810.p.ssafy.io";
// 시험용
// const BUNDLER_URL = "http://localhost:8087";

// basic Instance
const apiInstance = () => {
  const state = store.getState();
  const authTokenAccessToken = state.authToken.accessToken;
  const instance = axios.create({
    baseURL: BUNDLER_URL,
    headers: {
      Authorization: `Bearer ${authTokenAccessToken}`,
    },
  });
  return instance;
};

useEffect(() => {
  apiInstance();
}, [accessToken]);

export { apiInstance };
