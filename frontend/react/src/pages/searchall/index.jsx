/*
 기본 홈 Page 구성  
 */

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function SearchAll() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>search all</div>
    </DashboardLayout>
  );
}

export default SearchAll;
