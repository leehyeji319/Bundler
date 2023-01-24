// GithubLogin을 Component로 사용하기 위해 import
import React, { Component } from "react";
// @mui material components
import { Button } from "@mui/material/";
// 버튼에 있는 github아이콘 import
import GitHubIcon from "@mui/icons-material/GitHub";

class GithubLogin extends Component {
  constructor(props) {
    super(props);
    // GITHUB_LOGIN_URL을 bind 함수를 통해 붙여준다
    this.socialLoginHandler = this.socialLoginHandler.bind(this);
    // client_id에 github 로그인을 위해 생성한 Oauth 앱의 id를 넣어준다 'acbab22d3c358f0c4b43' ************.env파일에 넣어서 관리
    this.GITHUB_LOGIN_URL =
      "https://github.com/login/oauth/authorize?client_id=acbab22d3c358f0c4b43";
  }

  socialLoginHandler() {
    // 1. 해당 URL로 client_id 정보를 담아 해당 페이지로 이동 한다.
    window.location.assign(this.GITHUB_LOGIN_URL);
    //  2. 등록된 client_id가 입력이 되었다면 Resource Server는
    //   1) 깃허브 로그인이 안된 경우: 로그인 페이지를 제공한다.
    //   2) 깃허브 로그인이 되어있거나, 위 1)에서 로그인을 수행한 경우
    //    : authorization code를 담아 등록된 callback url(http://localhost:3000/home) 으로 리디렉션한다.
  }

  render() {
    return (
      <div className="loginContainer">
        <Button
          // 버튼을 클릭하면 socialLoginHandler를 실행한다
          onClick={this.socialLoginHandler}
          sx={{
            bgcolor: "#FFFFFF",
            color: "#000000",
            fontSize: "midium",
            fontWeight: "bold",
          }}
          variant="contained"
          fullWidth
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </div>
    );
  }
}

export default GithubLogin;
