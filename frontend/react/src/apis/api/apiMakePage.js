// [Import] api instance
import apiInstance from "apis/utils/axios";

// api Instance 생성
const api = apiInstance();

// controller default page url
const CARD_CONTROLLER = "/api/v1/cards";
const BUNDLE_CONTROLLER = "/api/v1/bundles";

// 카드 - 리스트 생성
const apiPostCardList = async (params) => {
  try {
    const response = await api.post(`${CARD_CONTROLLER}/list`, params);
    return response;
  } catch (error) {
    return error;
  }
};

// 카드 - 개별 생성
const apiPostCard = async (params) => {
  try {
    const response = await api.post(`${CARD_CONTROLLER}`, params);
    return response;
  } catch (error) {
    return error;
  }
};

const apiPostBundle = async (params) => {
  try {
    const response = await api.post(`${BUNDLE_CONTROLLER}`, params);
    return response;
  } catch (error) {
    return error;
  }
};

// export 함수
export { apiPostCardList, apiPostCard, apiPostBundle };

// Method 주소만 정의 -> 예시
// const apiGetCard = async () => {
//   try {
//     const response = await mock.get(`/comments`);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
