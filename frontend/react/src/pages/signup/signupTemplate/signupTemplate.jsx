import { React, useState } from "react";
import axios from "axios";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import MuiLink from "@mui/material/Link";
// import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import "./signupTemplate.css";

// Images
import bundlerRabbit from "assets/images/bundler/bundler_rabbit.png";

function SignUpTemplate() {
  // setEmail 함수로 email 대응 하는 값을 변경할 수 있게 useState 생성
  const [userEmail, setEmail] = useState("");
  // setNickname 함수로 nickname 대응 하는 값을 변경할 수 있게 useState 생성
  const [userNickname, setNickname] = useState("");
  // setPassword 함수로 password 대응 하는 값을 변경할 수 있게 useState 생성
  const [userPassword, setPassword] = useState("");
  // setConfirmPassword 함수로 confirmPassword 대응 하는 값을 변경할 수 있게 useState 생성
  const [confirmPassword, setConfirmPassword] = useState("");
  // setOneline 함수로 oneline 대응 하는 값을 변경할 수 있게 useState 생성
  const [userIntroduction, setOneline] = useState("");

  // signUp 함수를 실행하면
  const signUp = () => {
    // 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8087/signup",
      // url: "http://localhost:8080/signUp",
      method: "POST",
      withCredentials: true,
      data: {
        userEmail,
        userNickname,
        userPassword,
        confirmPassword,
        userIntroduction,
      },
    })
      // axios 요청이 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.status === 200) {
          window.open("/login");
        }
      });
  };

  return (
    <div className="container">
      <Card sx={{ minWidth: 400, maxWidth: 500 }}>
        <div className="container">
          <div className="greenbox">
            <div className="welcome">
              <img className="rabbit" src={bundlerRabbit} alt="signupimg" width={125} />
              <p>환영합니다</p>
              <div className="stretch">나만의 학습카드 번들러, 지금 바로 시작해보세요.</div>
            </div>
          </div>
        </div>
        {/* 회원 가입 form */}
        <form>
          <div className="signupMargin">
            {/* 이메일 받기 */}
            <label htmlFor="email">
              &nbsp;이메일
              <input
                className="inputinfo"
                type="text"
                pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]"
                placeholder="이메일을 입력해주세요"
                required="required"
                id="Email"
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          {/* 닉네임 받기 */}
          <div className="signupMargin">
            <label htmlFor="nickname">
              &nbsp;닉네임(영문)
              <input
                className="inputinfo"
                type="text"
                pattern="^([A-Za-z0-9]).{1,20}$"
                placeholder="닉네임을 입력해주세요"
                required="required"
                id="nickname"
                value={userNickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </label>
          </div>
          {/* 비밀번호 받기 */}
          <div className="signupMargin">
            <label htmlFor="password">
              &nbsp;비밀번호
              <input
                className="inputinfo"
                type="password"
                pattern="^([A-Za-z0-9])(?=.*[!@#$%^&*()]).{7,20}$"
                placeholder="비밀번호를 입력해주세요"
                required="required"
                id="password"
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {/* 비밀번호 확인 받기 */}
          <div className="signupMargin">
            <label htmlFor="password">
              &nbsp;비밀번호 확인
              <input
                className="inputinfo"
                type="password"
                pattern={userPassword}
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                required="required"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          {/* 한줄 소개 받기 */}
          <div className="signupMargin">
            <label htmlFor="online">
              &nbsp;한 줄 소개
              <input
                className="inputinfo"
                type="text"
                pattern="^([가-힣A-Za-z0-9]).{1,20}$"
                placeholder="한 줄 소개를 입력해주세요"
                required="required"
                id="oneline"
                value={userIntroduction}
                onChange={(e) => setOneline(e.target.value)}
              />
            </label>
          </div>
          {/* 로그인 버튼 */}
          <div className="signupMargin">
            <Button
              onClick={signUp}
              className="learn-more2"
              sx={{
                marginTop: "4%",
                bgcolor: "#81D8CF",
                color: "#000000",
                fontSize: "large",
                fontWeight: "bold",
              }}
              fullWidth
              type="submit"
            >
              가입 하기
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignUpTemplate;
