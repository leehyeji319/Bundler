import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import "./index.css";

// import template
import SignUpTemplate from "pages/signup/signupTemplate/signupTemplate";

function SignUp() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SignUpTemplate />
    </DashboardLayout>
  );
}

export default SignUp;
