// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Profile() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>Profile</h1>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
