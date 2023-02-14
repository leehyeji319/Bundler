// GithubLogin을 Component로 사용하기 위해 import
import React from "react";
import { Button } from "@mui/material/";
// 버튼에 있는 github아이콘 import
import GitHubIcon from "@mui/icons-material/GitHub";

function GithubLoginButton() {
  const GithubLoginButtonClick = async () => {
    window.location.assign(
      // 서버용
      "http://i8a810.p.ssafy.io:8080/oauth2/authorization/github?redirect_uri=http://i8a810.p.ssafy.io:3000"
      // 시험용
      // `${process.env.REACT_APP_PORT_GLOBAL}/oauth2/authorization/github?redirect_uri=http://localhost:3000`
    );
  };

  return (
    <div>
      <Button
        onClick={GithubLoginButtonClick}
        id="bundlerBtn"
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
