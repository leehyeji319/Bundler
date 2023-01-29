/*
  axios 객체 생성 utils
  [참고] https://yamoo9.github.io/axios/guide/api.html
*/
// import axios
import axios from "axios";

// 요청 주소
const BUNDLER_URL = "http://localhost:8080";
const TEST_URL = "https://jsonplaceholder.typicode.com/todos";

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

// Test
const apiMock = () => {
  const instance = axios.create({
    baseURL: TEST_URL,
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

export { apiInstance, apiMock };
