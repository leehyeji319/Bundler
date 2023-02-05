// Import - react
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Import - @mui/material
import { Box, Typography, MenuItem, FormControl, Select } from "@mui/material";

function MakeCategory({ handleCategory }) {
  const [value, setValue] = useState({
    first: 1,
    second: "",
  });

  const handleChangeOne = (event) => {
    event.preventDefault();
    handleCategory(event, event.target.value, "");
    setValue({ ...value, first: event.target.value, second: "" });
  };

  const handleChangeTwo = (event) => {
    event.preventDefault();
    handleCategory(event, value.first, event.target.value);
    setValue({ ...value, second: event.target.value });
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Box mt={2}>
      <Typography variant="h6">카테고리 선택</Typography>
      <FormControl sx={{ mt: 2, mr: 2, minWidth: 120 }}>
        <Select
          required
          labelId="card-category-one-label"
          id="card-category-one"
          value={value.first}
          onChange={handleChangeOne}
          autoWidth
          sx={{ height: "50px" }}
        >
          <MenuItem value={1}>[Default] 대분류 1</MenuItem>
          <MenuItem value={2}>대분류 2</MenuItem>
          <MenuItem value={3}>대분류 3</MenuItem>
        </Select>
      </FormControl>
      {value.first === 1 && (
        <FormControl sx={{ mt: 2, minWidth: 120 }}>
          <Select
            labelId="card-category-two-label"
            id="card-category-two"
            value={value.second}
            onChange={handleChangeTwo}
            autoWidth
            displayEmpty
            sx={{ height: "50px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={91}>중분류 91</MenuItem>
            <MenuItem value={92}>대분류 92</MenuItem>
            <MenuItem value={93}>대분류 93</MenuItem>
          </Select>
        </FormControl>
      )}
    </Box>
  );
}

MakeCategory.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default MakeCategory;
