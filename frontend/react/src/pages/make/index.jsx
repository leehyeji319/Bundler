/*
 기본 홈 Page 구성  
 */

// React import
import React, { useState } from "react";
// import PropTypes from "prop-types";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Mui-Material components
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

// [Import - React-Redux]
// import { useSelector } from "react-redux";

// Import - custom
import MakeCategory from "pages/make/form/makeCategory";
import MakeProblem from "pages/make/form/makeProblem";
import MakeGeneral from "pages/make/form/makeGeneral";
import MakeLink from "pages/make/form/makeLink";
import MakeCardList from "pages/make/form/makeCardList";

// Typechecking props for the SelectedCategory
// SelectedCategory.propTypes = {
//   selected: PropTypes.string.isRequired,
// };

function Make() {
  // ===================== Data =================================
  // Data - global

  // Data - local
  // category 어떤 값은 선택햇는지 저장하는 state 값
  const [value, setValue] = useState("quiz");

  // ==================== Function ==============================
  // category 선택 결과를 저장하는 함수
  const handleChangeCategory = (event) => {
    setValue(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FormControl>
        <FormLabel id="card-category-select">
          <Typography variant="h6">유형 선택</Typography>
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="card-category-radio-buttons"
          name="row-radio-buttons-group"
          // defaultChecked="quiz"
          value={value}
          onChange={handleChangeCategory}
        >
          <FormControlLabel value="quiz" control={<Radio />} label="문제" />
          <FormControlLabel value="general" control={<Radio />} label="일반" />
          <FormControlLabel value="link" control={<Radio />} label="링크" />
        </RadioGroup>
      </FormControl>
      <MakeCategory />
      {value === "quiz" && <MakeProblem />}
      {value === "general" && <MakeGeneral />}
      {value === "link" && <MakeLink />}
      <MakeCardList />
    </DashboardLayout>
  );
}

export default Make;
