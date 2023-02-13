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

// import trendimg from "assets/images/trend.jpg";
// import itimg from "assets/images/ai-icons.jpeg";
import bundlerRabbit from "assets/images/bundler_rabbit_6.png";
// import ryan from "assets/images/kakaoRyan.jpg";
// import robotimg from "assets/images/robot.jpg";

import BundleThumbnail2 from "../components/thumBundle/BundleCard";

// import bundleTemp from "../data/bundleTemp0213.json";
import bundleInfinite from "../data/bundleInfinite.json";
// BundlelistTabForm Template
function BundleListTab() {
  const tempBundleData = bundleInfinite;

  return (
    <MDBox
      sx={{
        marginLeft: "3%",
        marginTop: "7%",
        marginRight: "3%",
      }}
    >
      <Grid container spacing={3}>
        {tempBundleData.map((oneBundle) => (
          <Grid item xs={12} md={6} lg={3}>
            {oneBundle.bundleThumbnail === null ? (
              <BundleThumbnail2
                bundleId={oneBundle.bundleId}
                feedTitle={oneBundle.feedTitle}
                bundleLike={oneBundle.bundleLike}
                isBundlePrivate={oneBundle.isBundlePrivate}
                bundleThumbnail={bundlerRabbit}
                bundleThumbnailText={oneBundle.bundleThumbnailText}
                isBundleDefault={oneBundle.isBundleDefault}
              />
            ) : (
              <BundleThumbnail2
                bundleId={oneBundle.bundleId}
                feedTitle={oneBundle.feedTitle}
                bundleLike={oneBundle.bundleLike}
                isBundlePrivate={oneBundle.isBundlePrivate}
                bundleThumbnail={oneBundle.bundleThumbnail}
                bundleThumbnailText={oneBundle.bundleThumbnailText}
                isBundleDefault={oneBundle.isBundleDefault}
              />
            )}
          </Grid>
        ))}
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
