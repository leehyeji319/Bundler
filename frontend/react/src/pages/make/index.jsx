/*
 기본 홈 Page 구성  
 */

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Make() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>custom 공간</h1>
      </div>
    </DashboardLayout>
  );
}

export default Make;
