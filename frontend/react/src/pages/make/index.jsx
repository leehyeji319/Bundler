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

// Mui-Material components
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";

// [Import - React-Redux]
// import { useSelector } from "react-redux";

// 작성 Form
import MakeProblem from "pages/make/form/makeProblem";
import MakeGeneral from "pages/make/form/makeGeneral";
import MakeLink from "pages/make/form/makeLink";
import MakeCardList from "pages/make/form/makeCardList";

function SelectedCategory({ selected }) {
  switch (selected) {
    case "general":
      return <MakeGeneral />;
    case "link":
      return <MakeLink />;
    default:
      return <MakeProblem />;
  }
}

// Typechecking props for the SelectedCategory
SelectedCategory.propTypes = {
  selected: PropTypes.string.isRequired,
};

function Make() {
  // const state = useSelector();
  const state22 = useSelector((state) => state.authToken);
  console.log(state22);
  console.log("makemakemakemakemakemakemakemake");
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
