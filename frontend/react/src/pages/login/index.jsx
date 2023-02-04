// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import template
import SignIn from "./signIn";
// import SignTemplate from "./template/signTemplate";
// import App from "./template/App";

function AuthLogin() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SignIn />
    </DashboardLayout>
  );
}

export default AuthLogin;
