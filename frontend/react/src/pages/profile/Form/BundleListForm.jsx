// [Import - Design]
import { Button, Box, TextField, Typography } from "@mui/material";
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
// import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

import trendimg from "assets/images/trend.jpg";
import itimg from "assets/images/ai-icons.jpeg";
import bundlerRabbit from "assets/images/bundler_rabbit_6.png";

import BundleThumbnail2 from "../components/thumBundle/BundleCard";

// BundlelistTabForm Template
function BundleListTab() {
  return (
    <MDBox
      sx={{
        marginLeft: "3%",
        marginTop: "7%",
        marginRight: "3%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <BundleThumbnail2 
            bundleImage={bundlerRabbit}
            bundleTitle="스크랩한 내 카드 (기본 번들)"
            bundleThumtext="스크랩한 내 카드"
            bundleLike="0"
            bundlePrivate="public"
            bundleDefault="default"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <BundleThumbnail2 
            bundleImage={trendimg}
            bundleTitle="2023년 IT 트렌드"
            bundleThumtext="이것이 트렌드"
            bundleLike="425"
            bundlePrivate="public"
            bundleDefault="non"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <BundleThumbnail2 
            bundleImage={itimg}
            bundleTitle="나만 볼꺼야 번들"
            bundleThumtext="리액트 마스터"
            bundleLike="0"
            bundlePrivate="private"
            bundleDefault="non"
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default BundleListTab;

// // Typechecking props for the SelectedCategory
// BundleListTab.propTypes = {
//   selected: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };