/*
 기본 홈 Page 구성  
 */

// Import - layout
import HomeLayout from "pages/home/layout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// Import - custom
import HomeNavbar from "pages/home/components/HomeNavbar";
import HomeInfiniteScroll from "pages/home/components/homeInfiniteScroll";

function Home() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <HomeInfiniteScroll />
      <Footer />
    </HomeLayout>
  );
}

export default Home;
