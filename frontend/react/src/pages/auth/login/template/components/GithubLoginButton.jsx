// GithubLogin을 Component로 사용하기 위해 import
import React from "react";
// @mui material components
// import "./GithubLoginButton.css";
import { Button } from "@mui/material/";
// 버튼에 있는 github아이콘 import
import GitHubIcon from "@mui/icons-material/GitHub";
// axios
import axios from "axios";

function GithubLoginButton() {
  //   // // GITHUB_LOGIN_URL을 bind 함수를 통해 붙여준다
  //   // const socialLoginHandler = socialLoginHandler.bind(this);
  //   // client_id에 github 로그인을 위해 생성한 Oauth 앱의 id를 넣어준다
  //   const GITHUB_LOGIN_URL =
  //     "https://localhost:8087/oauth2/authorization/github?redirect_uri=http://localhost:3000/";

  //   const socialLoginHandler = () => {
  //     // 1. 해당 URL로 client_id 정보를 담아 해당 페이지로 이동 한다.
  //     window.location.assign(GITHUB_LOGIN_URL);
  //     //  2. 등록된 client_id가 입력이 되었다면 Resource Server는
  //     //   1) 깃허브 로그인이 안된 경우: 로그인 페이지를 제공한다.
  //     //   2) 깃허브 로그인이 되어있거나, 위 1)에서 로그인을 수행한 경우
  //     //    : authorization code를 담아 등록된 callback url(http://localhost:3000/auth/login) 으로 리디렉션한다.
  //   };

  const GithubLoginButtonClick = async () => {
    axios({
      url: "http://localhost:8087/oauth2/authorization/github?redirect_uri=http://localhost:3000/",
      method: "GET",
      withCredentials: true,
      // headers: { Authorization: `Token ${accessToken}` },
    })
      .then((result) => {
        console.log("깃헙 성공");
        console.log(result);
        // setName(result.data.name);
        // setLogin(result.data.login);
        // setHtmlUrl(result.data.html_url);
        // setPublicRepos(result.data.public_repos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button
        // 버튼을 클릭하면 socialLoginHandler를 실행한다
        onClick={GithubLoginButtonClick}
        className="learn-more"
        sx={{
          bgcolor: "#FFFFFF",
          color: "#000000",
          fontSize: "large",
          fontWeight: "bold",
          width: "350px",
        }}
        variant="contained"
      >
        <GitHubIcon />
        &nbsp;GitHub
      </Button>
    </div>
  );
}

export default GithubLoginButton;
