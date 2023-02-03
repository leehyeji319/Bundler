// [Import - Design]
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
// import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React from "react";
// import PropTypes from "prop-types";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

import trendimg from "assets/images/trend.jpg";
import itimg from "assets/images/ai-icons.jpeg";
import bundlerRabbit from "assets/images/bundler_rabbit_6.png";
import ryan from "assets/images/kakaoRyan.jpg";
import robotimg from "assets/images/robot.jpg";

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
            bundleId={1}
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
            bundleId={2}
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
            bundleId={3}
            bundleImage={itimg}
            bundleTitle="나만 볼꺼야 번들"
            bundleThumtext="리액트 마스터"
            bundleLike="0"
            bundlePrivate="private"
            bundleDefault="non"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <BundleThumbnail2
            bundleId={4}
            bundleImage={robotimg}
            bundleTitle="알고리즘 마스터가 되기 위한 번들"
            bundleThumtext="알고리즘의 신"
            bundleLike="1026"
            bundlePrivate="public"
            bundleDefault="non"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <BundleThumbnail2
            bundleId={5}
            bundleImage={ryan}
            bundleTitle="카카오 개발자가 되기 위해 한땀한땀 모은 번들"
            bundleThumtext="for KAKAO"
            bundleLike="56"
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
