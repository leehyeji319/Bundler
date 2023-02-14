// import axios
import axios from "axios";

// 전역 설정
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

// 요청 주소
const BUNDLER_URL = "http://localhost:8080";

// basic Instance
const apiInstance = () => {
  const instance = axios.create({
    baseURL: BUNDLER_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
};

export default apiInstance;
