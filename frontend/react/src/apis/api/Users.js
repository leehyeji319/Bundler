import axios from "axios";

// 로그인 요청
const loginUser = async (info) => {
  const { email, password } = info;
  const response = await axios({
    // 서버용
    url: "https://i8a810.p.ssafy.io/api/v1/login",
    // 시험용
    // url: "http://localhost:8087/api/v1/login",
    method: "POST",
    withCredentials: true,
    data: {
      email,
      password,
    },
  });
  return response;
};

// 로그아웃 요청 (헤더에 accessToken 붙여서 요청)
const logoutUser = async (refreshToken, accessToken) => {
  const response = await axios({
    // 서버용
    url: "https://i8a810.p.ssafy.io/api/v1/logout",
    // 시험용
    // url: "http://localhost:8087/api/v1/logout",
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
    data: {
      refreshToken,
    },
  });
  return response;
};

// 토큰 재요청
const requestToken = async (refreshToken) => {
  const response = await axios({
    // 서버용
    url: "https://i8a810.p.ssafy.io/api/v1/requestToken",
    // 시험용
    // url: "http://localhost:8087/api/v1/requestToken",
    method: "POST",
    withCredentials: true,
    data: {
      refreshToken,
    },
  });
  return response;
};

export { loginUser, logoutUser, requestToken };
