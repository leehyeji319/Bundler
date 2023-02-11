import axios from "axios";

// server로 로그인 요청
// 백으로 유저 정보와 함께 로그인 요청을 보낸다. 받은 응답 코드에 따라 에러 또는 응답 받은 json 정보를 리턴한다.
const loginUser = async (info) => {
  const { email, password } = info;
  const response = await axios({
    url: "https://i8a810.p.ssafy.io/api/v1/login",
    // url: "http://localhost:8123/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true,
    data: {
      email,
      password,
    },
  });
  return response;
  // axios 요청이 성공
  // .then((result) => {
  //   console.log(result);
  // });
};

const logoutUser = async (refreshToken, accessToken) => {
  const response = await axios({
    url: "https://i8a810.p.ssafy.io/api/v1/logout",
    // url: "http://localhost:8123/logout",
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

const requestToken = async (refreshToken) => {
  const response = await axios({
    url: "https://i8a810.p.ssafy.io/api/v1/requestToken",
    // url: "http://localhost:8123/requestToken",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true,
    data: {
      refreshToken,
    },
  });
  return response;
};

export { loginUser, logoutUser, requestToken };
