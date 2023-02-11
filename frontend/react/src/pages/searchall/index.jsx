import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CardSearch from "./component/CardSearch";

function SearchCard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>search all</div>
    </DashboardLayout>
  );
}

export default SearchCard;
