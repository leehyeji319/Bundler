/*
 기본 홈 Page 구성  
 */

// Import React
// import React, { useEffect } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useSelector } from "react-redux";

import SignOut from "../login/signOut";

function Make() {
  // const state = useSelector();
  const state22 = useSelector((state) => state.authToken);
  console.log(state22);

  // useEffect(() => {
  //   console.log(state22);
  // }, [state22]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>custom 공간</h1>
        <SignOut />
      </div>
    </DashboardLayout>
  );
}

export default Make;
