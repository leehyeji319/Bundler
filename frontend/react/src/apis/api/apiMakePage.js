/*
  back에 api를 요청하고 응답 받는 모듈
  back 특정 controller url 과 연결하면 좋을 듯

  axios.get(url[, config])
  axios.post(url[, data[, config]])
  axios.put(url[, data[, config]])
  axios.patch(url[, data[, config]])
  axios.delete(url[, config])
  axios.request(config)
  axios.head(url[, config])
  axios.options(url[, config])
  axios.getUri([config])
*/

// [Import] api instance
import { apiInstance, apiMock } from "apis/utils/axios";

const api = apiInstance();
const mock = apiMock();

// Method 주소만 정의 -> 예시
const apiGetCard = async () => {
  try {
    const response = await mock.get(`/1`);
    return response;
  } catch (error) {
    return error;
  }
};

const apiGet = async (success, fail) => {
  await api.get(`/주소`).then(success).catch(fail);
};

const apiPost = async (params, success, fail) => {
  await api.post(`/주소`, params).then(success).catch(fail);
};

const apiDelete = async (success, fail) => {
  await api.delete(`/주소/${"id"}`).then(success).catch(fail);
};

const apiAuth = async (success, fail) => {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/kakao`).then(success).catch(fail);
};

// export 함수
export { apiGet, apiPost, apiDelete, apiAuth, apiGetCard };

// const getPost = async (selectChannel) => {
//   try {
//     const { data } = await apiInstance.get("!~~~~");
//     return data;
//   } catch (eroor) {
//     console.log(error);
//   }
// };
