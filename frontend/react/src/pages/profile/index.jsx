import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      info: "",
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
      // eslint-disable-next-line
      info: getUserInfo.data.name,
    });
  }

  render() {
    // eslint-disable-next-line
    const { accessToken } = this.props;

    if (!accessToken) {
      return <div style={{ color: "white" }}>로그인이 필요합니다</div>;
    }
    // eslint-disable-next-line
    return <div style={{ color: "white" }}>로그인 성공</div>;
  }
}

export default Profile;
