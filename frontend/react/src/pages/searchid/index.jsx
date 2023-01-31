// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function SearchId() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>아이디 검색 custom 공간</h1>
      </div>
    </DashboardLayout>
  );
}

export default SearchId;
