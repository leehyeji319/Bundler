// Import React
import React, { useState } from "react";

// Import mui/style
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/material";

// Import - custom
import ScrapButtonModal from "pages/home/buttons/scrapButtonModal";

// scrap Button 상태 - 활성화/비활성화
function ScrapButton() {
  // scrap Button Modal Set
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState({
    isChecked: false,
    notice: "",
  });

  const handleIsAdded = (selectedBundle, isNew) => {
    console.log(selectedBundle);
    setValue({ ...value, isChecked: !value.isChecked });

    // axios 통신 데이터 보내기
    if (isNew) {
      console.log("새로운 번들");
    } else {
      console.log("기존에 있던 번들");
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    handleOpen(); // modal은 무조건 열리게
  };

  return (
    <Box className="icons-list">
      <ScrapButtonModal open={open} handleClose={handleClose} handleIsAdded={handleIsAdded} />
      {value.isChecked ? (
        <BookmarkIcon
          sx={{
            color: "red",
            cursor: "pointer",
            transition: { transform: "300ms ease" },
          }}
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
      {/* <Typography variant="caption" color="red">
        hello
      </Typography> */}
    </Box>
  );
}
// style= {{fontSize: '50px', color:'red'}}
export default ScrapButton;
