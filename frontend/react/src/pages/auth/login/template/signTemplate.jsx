// react components
import { React, useEffect, useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";
// axios
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
// import MuiLink from "@mui/material/Link";
// import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import "./signTemplate.css";

// Images
import Logo from "assets/images/bundler/loginlogo.png";

// pages
import GithubLoginButton from "./components/GithubLoginButton";
import Login from "./components/Login";
import GithubLoginRender from "./components/GithubLoginRender";
import "./components/LoginRender.css";

function SignTemplate() {
  // setIsLogin 함수로 isLogin에 대응 하는 값을 변경할 수 있게 useState 생성
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  // authorizationCode 값이 있어 getAccessToken함수가 실행되었다면 아래의 함수가 실행된다
  // authorizationCode는 github에 요청해서 access token을 받을 수 있다
  // access token은 authorizationCode와 달리 보안이 필요하므로 frontend 쪽에서 직접 요청하지 않는다
  // 따라서 authorizationCode를 서버로 보내주어 서버가 access token을 받아오도록한다
  // 서버에 post로 authorizationCode를 보내준다
  const getAccessToken = async (authorizationCode) => {
    axios({
      url: "http://localhost:8123/oauth",
      method: "POST",
      withCredentials: true,
      data: { authorizationCode },
    })
      .then((result) => {
        setAccessToken(result.data.accessToken);
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // component가 mount될 때 url을 가져와서
    const url = new URL(window.location.href);
    // authorization Server에서 callback url로 리디렉션 시키면서 params에 authorization code가 전달된 것을 code 부분만 authorizationCode에 저장한다
    const authorizationCode = url.searchParams.get("code");
    // authorizationCode값이 있고 로그인이 안 된 상태라면
    if (authorizationCode) {
      // getAccessToken 함수를 authorizationCode 인자를 가지고 실행한다
      getAccessToken(authorizationCode);
    }
    // 마지막에 대괄호를 넣으면 state가 바뀌어도 다시 함수를 실행하지 않는다
  }, []);
  // --------------------------------------------JWT 로그인-------------------------------------------------------
  // setUser 함수로 user에 대응 하는 값을 변경할 수 있게 useState 생성
  const [user, setUser] = useState({});
  // 로그아웃 함수
  const logout = () => {
    // 로그아웃 함수가 실행되면 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8123/logout",
      method: "POST",
      withCredentials: true,
    })
      // 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.status === 200) {
          window.open("/auth/login", "_self");
        }
      });
  };
  // useEffect(hook)
  useEffect(() => {
    try {
      // 아래와 같은 조건으로 axios 보냄
      axios({
        url: "http://localhost:8123/login/success",
        method: "GET",
        withCredentials: true,
      })
        // 성공하면 결과 값을 받아 isLogin, user 값 변경해줌
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            setUser(result.data);
          }
        })
        // 실패하면 error 띄움
        .catch((error) => {
          console.log(error);
        });
      // 실패하면 error 띄움
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="container">
      {/* isLogin 값의 여부로 보여주는 화면 결정 */}
      {/* eslint-disable-next-line */}
      {isLogin && accessToken ? (
        // eslint-disable-next-line
        <GithubLoginRender accessToken={accessToken} />
      ) : isLogin ? (
        <>
          {/* eslint-disable-next-line */}
          <div className="container">
            <h3>{user.username} 님이 로그인했습니다.</h3>
            {/* 버튼을 누르면 logout 함수 실행 */}
            <button type="button" onClick={logout} className="loginButton">
              Logout
            </button>
          </div>
        </>
      ) : (
        // isLogin이 false일 때 로그인 화면 렌더링
        <Card sx={{ minWidth: 500, maxWidth: 600 }}>
          <div className="container4">
            <Link to="pages\home">
              <img src={Logo} alt="mainlogo" width={250} />
            </Link>
          </div>
          <div className="container5">
            {/* 로그인 버튼 */}
            <MDBox mt={0} mb={1}>
              <Login />
            </MDBox>
          </div>
          <div className="container5">
            {/* 회원가입 버튼 */}
            <MDBox mt={0} mb={1} textAlign="center">
              <Link to="/signup">
                <Button
                  sx={{
                    bgcolor: "#FFFFFF",
                    color: "#000000",
                    fontSize: "midium",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  fullWidth
                >
                  회원가입
                </Button>
              </Link>
            </MDBox>
          </div>
          <div className="container5">
            {/* github 로그인 */}
            <MDBox mt={0} mb={3} textAlign="center">
              {/* github 로그인 컴포넌트를 불러온다 */}
              <GithubLoginButton fullWidth />
            </MDBox>
          </div>
        </Card>
      )}
    </div>
  );
}

export default SignTemplate;
