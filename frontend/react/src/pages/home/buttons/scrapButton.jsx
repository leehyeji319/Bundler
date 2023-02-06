// Import React
import React, { useState } from "react";

// Import mui/style
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/material";

function ScrapButton() {
  const [value, setValue] = useState({
    isChecked: false,
    notice: "",
  });

  const handleToggle = (e) => {
    e.preventDefault();
    setValue({ ...value, isChecked: !value.isChecked });
    // value.isChecked
    //   ? setValue({
    //       isChecked: false,
    //       notice: "",
    //     })
    //   : setValue({
    //       isChecked: true,
    //       notice: "좋아요 1회",
    //     });
  };
  return (
    <Box className="icons-list">
      {value.isChecked ? (
        <BookmarkIcon
          sx={{ color: "red", cursor: "pointer", transition: { transform: "300ms ease" } }}
          fontSize="large"
          className="button"
          onClick={handleToggle}
        />
      ) : (
        <BookmarkBorderIcon
          sx={{ cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }}
          fontSize="large"
          transitio="1.2"
          className="button"
          onClick={handleToggle}
        />
      )}
    </Box>
  );
}
// style= {{fontSize: '50px', color:'red'}}
export default ScrapButton;
