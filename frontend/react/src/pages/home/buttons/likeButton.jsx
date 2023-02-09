// Import React
import React, { useState } from "react";

// Import mui/style
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";

function LikeButton() {
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
        <FavoriteIcon
          sx={{ color: "red", cursor: "pointer", transition: { transform: "300ms ease" } }}
          fontSize="large"
          className="button"
          onClick={handleToggle}
        />
      ) : (
        <FavoriteBorderIcon
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
export default LikeButton;
