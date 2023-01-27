// aiox 객체 생성
// import axios
import axios from "axios";
// import { getToken } from "@SessionStorage" Token 가져오기.. 사용자 설정에 맞춰

// 기본 URL 주소
const BASE_URL = "localhost://8080"; // JAVA URL 기준

// 기본 axios 객체
const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });

  return instance;
};
