/*
 기본 홈 Page 구성  
 */

// @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React Examples
import HomeNavbar from "pages/home/components/HomeNavbar";
import HomeCard from "pages/home/components/homeCard";

// Material Dashboard 2 React example components
import HomeLayout from "pages/home/layout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

function Home() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <HomeLayout>
      <HomeNavbar />
      <HomeCard
        image={CardImg}
        category="문제 > 알고리즘"
        id="jsk33a@naver.com"
        title="이 문제의 제목입니다."
        description="이 문제에 대해 설명 하시오"
        action={{
          type: "internal",
          route: "/home",
          color: "info",
          label: "상세 보기",
        }}
      />
      <Footer />
    </HomeLayout>
  );
}

export default Home;
