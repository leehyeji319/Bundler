// [Import] api instance
import { apiInstance } from "apis/utils/axios";

// api Instance 생성
const api = apiInstance();

// controller default page url
const FEED_CONTROLLER = "/api";

const apiGetFeeds = async () => {
  try {
    const response = await api.get(`${FEED_CONTROLLER}/v1/feeds`);
    return response;
  } catch (error) {
    console.log("FeedList Get 실패");
    return error;
  }
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
export { apiGetFeeds, apiPost, apiDelete, apiAuth };
