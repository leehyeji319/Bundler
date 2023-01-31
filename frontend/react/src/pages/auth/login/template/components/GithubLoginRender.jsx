// react components
import { React, useEffect, useState } from "react";
// axios
import axios from "axios";

function GithubLoginRender(props) {
  // eslint-disable-next-line
  const { accessToken } = props;
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [htmlUrl, setHtmlUrl] = useState("");
  const [publicRepos, setPublicRepos] = useState("");

  const getGitHubUserInfo = async () => {
    axios({
      url: "https://api.github.com/user",
      method: "GET",
      withCredentials: true,
      headers: { Authorization: `Token ${accessToken}` },
    })
      .then((result) => {
        setName(result.data.name);
        setLogin(result.data.login);
        setHtmlUrl(result.data.html_url);
        setPublicRepos(result.data.public_repos);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGitHubUserInfo();
  }, []);

  if (!accessToken) {
    return (
      <div style={{ color: "white" }}>
        로그인이 필요합니다
        {/* <button>login</button>; */}
      </div>
    );
  }
  return (
    <div style={{ color: "white" }}>
      <div className="mypageContainer">
        <h3>Mypage</h3>
        <hr />
        <div>
          안녕하세요.{" "}
          <span className="name" id="name">
            {/* eslint-disable-next-line */}
            {name}
          </span>
          님! GitHub 로그인이 완료되었습니다.
        </div>
        <div>
          <div className="item">
            나의 로그인 아이디:
            {/* eslint-disable-next-line */}
            <span id="login">{login}</span>
          </div>
          <div className="item">
            나의 GitHub 주소:
            {/* eslint-disable-next-line */}
            <span id="htmlUrl">{htmlUrl}</span>
          </div>
          <div className="item">
            나의 public 레포지토리 개수:
            {/* eslint-disable-next-line */}
            <span id="publicRepos">{publicRepos}</span>개
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubLoginRender;
