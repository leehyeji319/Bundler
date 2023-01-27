import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      login: "",
      html_url: "",
      public_repos: "",
    };
  }

  componentDidMount() {
    // component가 mount 될 때 getGitHubUserInfo를 실행한다
    this.getGitHubUserInfo();
  }

  async getGitHubUserInfo() {
    // 올바른 access_Token이 존재한다면 https://api.github.com/user로
    const getUserInfo = await axios({
      url: "https://api.github.com/user",
      method: "GET",
      // headers에 authorization: `token <access_token>`로 토큰을 붙여 요청을 보낸다
      // eslint-disable-next-line
      headers: { authorization: `token ${this.props.accessToken}` },
    });
    this.setState({
      name: getUserInfo.data.name,
      login: getUserInfo.data.login,
      html_url: getUserInfo.data.html_url,
      public_repos: getUserInfo.data.public_repos,
    });
  }

  render() {
    // eslint-disable-next-line
    const { accessToken } = this.props;

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
              {this.state.name}
            </span>
            님! GitHub 로그인이 완료되었습니다.
          </div>
          <div>
            <div className="item">
              나의 로그인 아이디:
              {/* eslint-disable-next-line */}
              <span id="login">{this.state.login}</span>
            </div>
            <div className="item">
              나의 GitHub 주소:
              {/* eslint-disable-next-line */}
              <span id="html_url">{this.state.html_url}</span>
            </div>
            <div className="item">
              나의 public 레포지토리 개수:
              {/* eslint-disable-next-line */}
              <span id="public_repos">{this.state.public_repos}</span>개
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
