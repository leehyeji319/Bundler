// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Make() {
  return (
    <div className="container">
      <DashboardLayout>
        <DashboardNavbar />
        Make
      </DashboardLayout>
    </div>
  );
}

export default Make;
