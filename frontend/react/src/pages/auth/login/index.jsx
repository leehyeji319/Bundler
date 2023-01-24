// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import template
import SignTemplate from "./template/signTemplate";

function AuthLogin() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SignTemplate />
    </DashboardLayout>
  );
}

export default AuthLogin;
