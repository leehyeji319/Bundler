// import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import "./signTemplate.css";

// Images
import Logo from "assets/images/bundler/loginlogo.png";

function SignTemplate() {
  return (
    <div className="container">
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
                  GitHub
                </Button>
              </MDBox>
            </MDBox>
          </MDBox>
        </div>
      </Card>
    </div>
  );
}

export default SignTemplate;
