import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";
import { Button } from "@mui/material";
import "./signTemplate.css";

// Authentication layout components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";
// import CardImg from "assets/images/bundler/bundlerRabbit.png";

function SignTemplate() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <div className="container">
      <Card sx={{ minWidth: 500, maxWidth: 600 }}>
        {/* 이메일 비밀번호 받기 */}
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
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
              <MDBox mt={4} mb={1} component={MuiLink} to="">
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
        </MDBox>
      </Card>
    </div>
  );
}

export default SignTemplate;
