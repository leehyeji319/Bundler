// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import ShowAllData from "./component/ShowAllData";
import DataSearch from "./component/DataSearch";

function SearchId() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>아이디 검색 custom 공간</h1>
        {/* <ShowAllData /> */}
        <DataSearch />
      </div>
    </DashboardLayout>
  );
}

export default SearchId;
