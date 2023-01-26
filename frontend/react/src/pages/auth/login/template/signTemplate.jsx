// react components
import React, { Component } from "react";
// react-router-dom components
import { Link } from "react-router-dom";
// axios
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import "./signTemplate.css";

// Images
import Logo from "assets/images/bundler/loginlogo.png";

// pages
import GithubLogin from "./components/GithubLogin";
import Profile from "../../../profile";

class SignTemplate extends Component {
  // SignTemplate 컴포넌트가 실행될 때 constructor가 실행
  constructor() {
    super();
    // isLogin은 flase // accessToken은 "" undefined으로 state 생성
    this.state = {
      isLogin: false,
      accessToken: "",
    };
    // 아래에서 getAccessToken 함수를 실행하기 위해 필요함
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  componentDidMount() {
    // component가 mount될 때 url을 가져와서
    const url = new URL(window.location.href);
    // authorization Server에서 callback url로 리디렉션 시키면서 params에 authorization code가 전달된 것을 code 부분만 authorizationCode에 저장한다
    const authorizationCode = url.searchParams.get("code");
    // authorizationCode값이 있다면
    if (authorizationCode) {
      // getAccessToken 함수를 authorizationCode 인자를 가지고 실행한다
      this.getAccessToken(authorizationCode);
    }
  }

  // authorizationCode 값이 있어 getAccessToken함수가 실행되었다면 아래의 함수가 실행된다
  async getAccessToken(authorizationCode) {
    // authorizationCode는 github에 요청해서 access token을 받을 수 있다
    // access token은 authorizationCode와 달리 보안이 필요하므로 frontend 쪽에서 직접 요청하지 않는다
    // 따라서 authorizationCode를 서버로 보내주어 서버가 access token을 받아오도록한다
    // 서버에 post로 authorizationCode를 보내준다

    const getAccessToken = await axios({
      url: "http://localhost:8123/oauth",
      method: "POST",
      withCredentials: true,
      data: { authorizationCode },
    });

    // .post("http://localhost:8123/oauth", withCredentials: true, data:{
    //   authorizationCode,
    // });

    // authorizationCode 보낸준 요청에 server가 access token을 보내줬다면
    // isLogin을 true로 바꿔 로그인 상태로 표시해주고
    // 응답받은 access token을 상태 변경 함수를 통해 Overview로 넘겨준다
    this.setState({
      isLogin: true,
      accessToken: getAccessToken.data.accessToken,
    });
  }

  render() {
    const { isLogin, accessToken } = this.state;
    console.log(isLogin, accessToken);
    return (
      <div className="container">
        {/* isLogin 값의 여부로 보여주는 화면 결정 */}
        {isLogin ? (
          // isLogin이 true일 때 accessToken을 가지고 Profile 컴포넌트 렌더링
          <Profile accessToken={accessToken} />
        ) : (
          // isLogin이 false일 때 로그인 화면 렌더링
          <Card sx={{ minWidth: 500, maxWidth: 600 }}>
            <div className="container">
              <Link to="pages\home">
                <img src={Logo} alt="mainlogo" width={250} />
              </Link>
            </div>
            {/* 이메일 비밀번호 받기 */}
            <div className="container">
              <MDBox component="form" role="form">
                <MDBox mt={-3} mb={2}>
                  <TextField label="이메일" id="Email" bgColor="#81D8CF" />
                </MDBox>
                <MDBox mb={2}>
                  <TextField label="비밀번호" id="password" />
                </MDBox>

                {/* 로그인 버튼 */}
                <MDBox mt={4} mb={1}>
                  <Button
                    sx={{
                      bgcolor: "#81D8CF",
                      color: "#000000",
                      fontSize: "midium",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                    fullWidth
                  >
                    로그인
                  </Button>
                </MDBox>
                {/* 회원가입 버튼 */}
                <MDBox mt={0} mb={1} textAlign="center">
                  <MDBox mt={4} mb={1} component={Link} to="/authentication/sign-up">
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
                  </MDBox>
                </MDBox>
                {/* github 로그인 */}
                <MDBox mt={0} mb={1} textAlign="center">
                  <MDBox mt={4} mb={3} component={MuiLink} to="">
                    {/* github 로그인 컴포넌트를 불러온다 */}
                    <GithubLogin />
                  </MDBox>
                </MDBox>
              </MDBox>
            </div>
          </Card>
        )}
      </div>
    );
  }
}
export default SignTemplate;
