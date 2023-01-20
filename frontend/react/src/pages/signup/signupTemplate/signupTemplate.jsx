// import { useState } from "react";

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
  return (
    <div className="container">
      <Card sx={{ minWidth: 500, maxWidth: 600 }}>
        <div className="container2">
          <div className="greenbox">
            <div className="welcome">
              <img className="rabbit" src={bundlerRabbit} alt="signupimg" width={125} />
              <p>환영합니다</p>
              <div className="stretch">나만의 학습카드 번들러, 지금 바로 시작해보세요.</div>
            </div>
          </div>
        </div>
        {/* 이메일 비밀번호 받기 */}
        <div className="container">
          <MDBox component="form" role="form">
            <MDBox mt={1} mb={2}>
              <TextField label="이메일" id="Email" bgColor="#81D8CF" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="닉네임" id="nickname" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="비밀번호" id="password" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="비밀번호 재확인" id="passwordReconfirm" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="비밀번호 찾기 질문" id="passwordQuestion" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="비밀번호 찾기 정답" id="passwordQuestionAnswer" />
            </MDBox>
            <MDBox mb={2}>
              <TextField label="한 줄 소개" id="oneline" />
            </MDBox>

            {/* 가입 버튼 */}
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
                가입하기
              </Button>
            </MDBox>
            {/* github 가입하기 */}
            <MDBox mt={0} mb={1} textAlign="center">
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
