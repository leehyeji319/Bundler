// import axios
import axios from "axios";
import store from "redux/store";

// 전역 설정
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

// basic Instance
const apiInstance = () => {
  const state = store.getState();
  const authTokenAccessToken = state.authToken.accessToken;
  const instance = axios.create({
    baseURL: process.env.REACT_APP_PORT_GLOBAL,
    headers: {
      Authorization: `Bearer ${authTokenAccessToken}`,
    },
  });
  return instance;
};

export default apiInstance;
