/*
  axios 객체 생성 utils
  [참고] https://yamoo9.github.io/axios/guide/api.html
*/
// import axios
import axios from "axios";

// 전역 설정
// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

// 요청 주소
const BUNDLER_URL = "http://localhost:8080";
const AUTH_URL = "https://i8a810.p.ssafy.io";
const TEST_URL = "https://jsonplaceholder.typicode.com";

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

// Auth
const apiLogin = () => {
  // 아래와 같은 조건으로 axios 보냄
  const instance = axios.create({
    baseURL: AUTH_URL,
  });
  return instance;
};

// Home TEST URL by 정세권
const apiFeedInstance = () => {
  const instance = axios.create({
    baseURL: TEST_URL,
    // headers: {
    //   "Content-Type": "application/json;charset=utf-8",
    // },
  });
  return instance;
};

// Auth Token apiInstance 추가 생성하면 될듯

// 기본 Url로 하는 이유는 토큰을 isntance 만드는 시점에 가져오기 때문에
// 아직 사용자 인증 요청을 안한 상태일 수 있다.
// 이를 해결하기 위해, axios interceptor 적용
// import interceptors from "apis/utils/axiosInterceptor";

// const authInstace = (options) => {
//   return axios.create({
//     const instance = axios.create({
//         baseURL: process.env.BASE_URL,
//         ...options,
//       })
//     interceptors(instance)
//     return instance;
//   })
// }

export { apiInstance, apiLogin, apiFeedInstance };
