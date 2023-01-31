/*
 기본 홈 Page 구성  
 */

// React import
import * as React from "react";
import PropTypes from "prop-types";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

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
  // const { editCardType } = useSelector((state) => state.makeReducer);
  const [value, setValue] = React.useState("quiz");

  const handleChangeCategory = (event) => {
    setValue(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FormControl>
        <FormLabel id="card-category-select">카드 유형 선택</FormLabel>
        <RadioGroup
          row
          aria-labelledby="card-category-radio-buttons"
          name="row-radio-buttons-group"
          defaultChecked="quiz"
          value={value}
          onChange={handleChangeCategory}
        >
          <FormControlLabel value="quiz" control={<Radio />} label="문제" />
          <FormControlLabel value="general" control={<Radio />} label="일반" />
          <FormControlLabel value="link" control={<Radio />} label="링크" />
        </RadioGroup>
      </FormControl>
      <SelectedCategory selected={value} />
      <MakeCardList />
    </DashboardLayout>
  );
}

export default Make;
