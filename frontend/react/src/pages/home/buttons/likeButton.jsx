// Import React
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// Import mui/style
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";

// Import apis
import { apiPostLike } from "apis/api/apiHomePage";

function LikeButton({ likeCnt, feedId }) {
  const { loginInfo } = useSelector((state) => state.homeReducer);
  const [value, setValue] = useState({
    isChecked: false,
    notice: 0,
  });

  const handleToggle = (e) => {
    e.preventDefault();

    // local state 변경
    if (value.isChecked) {
      setValue({
        isChecked: false,
        notice: value.notice - 1,
      });
    } else {
      setValue({
        isChecked: true,
        notice: value.notice + 1,
      });
    }

    const params = { userId: loginInfo.userId };
    console.log(feedId, params);
    const likeToggle = async () => {
      await apiPostLike(feedId, params)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    likeToggle();
  };

  useEffect(() => {
    setValue({ ...value, notice: likeCnt });
  }, [likeCnt]);

  return (
    <Box className="icons-list">
      {value.isChecked ? (
        <>
          <FavoriteIcon
            sx={{ color: "red", cursor: "pointer", transition: { transform: "300ms ease" } }}
            fontSize="large"
            className="button"
            onClick={handleToggle}
          />
          <Typography variant="h6" align="center">
            {value.notice}
          </Typography>
        </>
      ) : (
        <>
          <FavoriteBorderIcon
            sx={{ cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }}
            fontSize="large"
            transition="1.2"
            className="button"
            onClick={handleToggle}
          />
          <Typography variant="h6" align="center">
            {value.notice}
          </Typography>
        </>
      )}
    </Box>
  );
}

LikeButton.defaultProps = {
  likeCnt: 0,
  feedId: 0,
};

LikeButton.propTypes = {
  likeCnt: PropTypes.number,
  feedId: PropTypes.number,
};

export default LikeButton;
