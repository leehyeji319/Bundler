// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import template
import App from "pages/auth/login/template/App";

function AuthLogin() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <App />
    </DashboardLayout>
  );
}

export default AuthLogin;
