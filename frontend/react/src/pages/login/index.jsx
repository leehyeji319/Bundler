// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// react-router-dom components
import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import { Button } from "@mui/material/";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import "./index.css";

// Images
// import Logo from "assets/images/bundler/loginlogo.png";

// import template
import GithubLoginButton from "pages/auth/login/template/components/GithubLoginButton";
import SignIn from "./signIn";

function AuthLogin() {
  return (
    <div className="container">
      <DashboardLayout>
        <DashboardNavbar />
        <Card sx={{ minWidth: 400, maxWidth: 500 }}>
          <div className="container5">
            {/* 로그인 버튼 */}
            <MDBox mt={0} mb={1}>
              <SignIn />
            </MDBox>
          </div>
          {/* <div className="container5">
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
          <div className="max-w-md w-full space-y-8">
            {/* 회원가입 버튼 */}
            <MDBox mt={0} mb={1} textAlign="center">
              <Link to="/signup">
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
              </Link>
            </MDBox>
          </div>
          {/* github 로그인 */}
          <GithubLoginButton />
        </Card>
      </DashboardLayout>
    </div>
  );
}

export default AuthLogin;
