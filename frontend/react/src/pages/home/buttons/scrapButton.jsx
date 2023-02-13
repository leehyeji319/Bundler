// Import React
import React, { useState } from "react";
import PropTypes from "prop-types";

// Import mui/style
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/material";

// Import - custom
import ScrapButtonModal from "pages/home/buttons/scrapButtonModal";
import { apiPostBundleScrap } from "apis/api/apiHomePage";
import { useSelector } from "react-redux";

// scrap Button 상태 - 활성화/비활성화
function ScrapButton({ feedType, targetId, bundleList, handleBundleList }) {
  // Data Global
  const { loginInfo } = useSelector((state) => state.homeReducer);

  // scrap Button Modal Set
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // CARD Scrap Modal 창
  const handleToggle = (e) => {
    e.preventDefault();
    handleOpen(); // modal은 무조건 열리게
  };

  // BUNDLE Scrap function
  const handleBundleScrap = () => {
    const params = { userId: loginInfo.userId, bundleId: targetId };
    console.log(params);
    const added = async () => {
      await apiPostBundleScrap(params)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    };
    added();
  };

  return (
    <Box className="icons-list">
      <ScrapButtonModal
        open={open}
        handleClose={handleClose}
        targetId={targetId}
        bundleList={bundleList}
        handleBundleList={handleBundleList}
      />
      {feedType === "CARD" ? (
        <BookmarkBorderIcon
          sx={{ cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }}
          fontSize="large"
          transitio="1.2"
          className="button"
          onClick={handleToggle}
        />
      ) : (
        <BookmarkBorderIcon
          sx={{ cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }}
          fontSize="large"
          transitio="1.2"
          className="button"
          onClick={handleBundleScrap}
        />
      )}
    </Box>
  );
}

ScrapButton.defaultProps = {
  bundleList: [],
  handleBundleList: function async() {},
};

ScrapButton.propTypes = {
  feedType: PropTypes.string.isRequired,
  targetId: PropTypes.number.isRequired,
  bundleList: PropTypes.arrayOf(PropTypes.object),
  handleBundleList: PropTypes.func,
};

export default ScrapButton;
