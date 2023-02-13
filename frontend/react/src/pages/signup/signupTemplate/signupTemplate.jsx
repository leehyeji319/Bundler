import { React, useState } from "react";
import axios from "axios";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
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
  // setPasswordQuestion 함수로 passwordQuestion 대응 하는 값을 변경할 수 있게 useState 생성
  const [passwordQuestion, setPasswordQuestion] = useState("");
  // setPasswordQuestionAnswer 함수로 passwordQuestionAnswer 대응 하는 값을 변경할 수 있게 useState 생성
  const [passwordQuestionAnswer, setPasswordQuestionAnswer] = useState("");
  // setOneline 함수로 oneline 대응 하는 값을 변경할 수 있게 useState 생성
  const [userIntroduction, setOneline] = useState("");

  // signUp 함수를 실행하면
  const signUp = () => {
    // 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8087/api/v1/auth/signup",
      method: "POST",
      withCredentials: true,
      data: {
        userEmail,
        userNickname,
        userPassword,
        confirmPassword,
        passwordQuestion,
        passwordQuestionAnswer,
        userIntroduction,
      },
    })
      // axios 요청이 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.status === 200) {
          window.open("/auth/login", "_self");
        }
      });
  };

  return (
    <div className="container">
      <Card sx={{ minWidth: 500, maxWidth: 600 }}>
        <div className="container">
          <div className="greenbox">
            <div className="welcome">
              <img className="rabbit" src={bundlerRabbit} alt="signupimg" width={125} />
              <p>환영합니다</p>
              <div className="stretch">나만의 학습카드 번들러, 지금 바로 시작해보세요.</div>
            </div>
          </div>
        </div>
        {/* 이메일 비밀번호 받기 */}
        <div className="container3">
          <MDBox component="form" role="form" width={350}>
            <MDBox mt={1} mb={2}>
              <TextField
                label="이메일"
                id="Email"
                bgColor="#81D8CF"
                fullWidth
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="닉네임"
                id="nickname"
                fullWidth
                value={userNickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="비밀번호"
                id="password"
                fullWidth
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="비밀번호 재확인"
                id="confirmPassword"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="비밀번호 찾기 질문"
                id="passwordQuestion"
                fullWidth
                value={passwordQuestion}
                onChange={(e) => setPasswordQuestion(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="비밀번호 찾기 정답"
                id="passwordQuestionAnswer"
                fullWidth
                value={passwordQuestionAnswer}
                onChange={(e) => setPasswordQuestionAnswer(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                label="한 줄 소개"
                id="oneline"
                fullWidth
                value={userIntroduction}
                onChange={(e) => setOneline(e.target.value)}
              />
            </MDBox>

            {/* 가입 버튼 */}
            <MDBox mt={4} mb={1}>
              <Button
                type="button"
                onClick={signUp}
                className="signUpButton"
                sx={{
                  bgcolor: "#81D8CF",
                  color: "#000000",
                  fontSize: "midium",
                  fontWeight: "bold",
                }}
                variant="contained"
                fullWidth
              >
                가입하기
              </Button>
            </MDBox>
            {/* github 가입하기 */}
            <MDBox mt={0} mb={5} textAlign="center">
              <MDBox mt={4} mb={3} component={MuiLink} to="">
                <Button
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
                  GitHub 계정으로 가입하기
                </Button>
              </MDBox>
            </MDBox>
          </MDBox>
        </div>
      </Card>
    </div>
  );
}

export default SignUpTemplate;
