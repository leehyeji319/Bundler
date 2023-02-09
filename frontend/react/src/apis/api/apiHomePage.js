// [Import] api instance
import { apiInstance } from "apis/utils/axios";

// api Instance 생성
const api = apiInstance();

// controller default page url
const FEED_CONTROLLER = "/api/v1";

// Feed List 가져오기
const apiGetFeeds = async () => {
  try {
    const response = await api.get(`/api/v1/feeds`);
    return response;
  } catch (error) {
    console.log("FeedList Get 실패");
    return error;
  }
};

// 스크랩 버튼 클릭 시 -> 내가 가지고 있는 번들 lsit 목록 불러오기
const apiGetBundle = async (userId) => {
  try {
    const response = await api.get(`${FEED_CONTROLLER}/users/${userId}/bundles/summary`);
    return response;
  } catch (error) {
    console.log("번들 List 조회 실패");
    return error;
  }
};

// 스크랩 : 기존 "번들"에 "카드" 추가
const apiPutCardScrap = async (params) => {
  try {
    const response = await api.put(`${FEED_CONTROLLER}/scrap/cards`, params);
    return response;
  } catch (error) {
    console.log("Card Scrap 실패");
    return error;
  }
};

// 스크랩 : 기존 "번들"에 "카드" 추가
const apiPostCardScrap = async (feedId, params) => {
  try {
    const response = await api.post(`${FEED_CONTROLLER}/scrap/cards/bundles/${feedId}`, params);
    return response;
  } catch (error) {
    console.log("Card Create Scrap 실패");
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
export {
  apiGetFeeds,
  apiGetBundle,
  apiPutCardScrap,
  apiPostCardScrap,
  apiPost,
  apiDelete,
  apiAuth,
};
