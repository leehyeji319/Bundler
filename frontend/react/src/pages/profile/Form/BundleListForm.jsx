// [Import - Design]
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
// import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React from "react";
// import PropTypes from "prop-types";

import bundlerRabbit from "assets/images/bundler/bundler_rabbit_6.png";
import sorryRabbit from "assets/images/bundler/bundler_rabbit_8-removebg-preview.png";
import MDTypography from "components/MDTypography";
import BundleThumbnail2 from "../components/thumBundle/BundleCard";

// import bundleTemp from "../data/bundleTemp0213.json";
// import bundleInfinite from "../data/bundleInfinite.json";
// BundlelistTabForm Template
function BundleListTab(props) {
  // const tempBundleData = bundleInfinite;
  const dataprop = props.data;
  const BundleLastData = dataprop;
  console.log(BundleLastData);
  // console.log(BundleLastData[0]);
  // const fbd = BundleLastData[0].bundleDefault;
  // console.log(fbd);
  // console.log(typeof fbd);

  return (
    <MDBox
      sx={{
        marginLeft: "3%",
        marginTop: "7%",
        marginRight: "3%",
      }}
    >
      {BundleLastData.length === 0 ? (
        <MDBox
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "700px",
          }}
        >
          <MDBox // 토끼사진과 번들없다는 글자
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "50px",
            }}
          >
            <MDBox // 토끼사진만
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src={sorryRabbit} alt="noBundle" style={{ height: "200px", width: "200px" }} />
            </MDBox>
            <MDTypography fontSize="50px" mt={1}>
              해당하는 번들이 없어요!
            </MDTypography>
          </MDBox>
        </MDBox>
      ) : (
        <Grid container spacing={3}>
          {/* {tempBundleData.map((oneBundle) => ( */}
          {BundleLastData.map((oneBundle) => (
            <Grid item xs={12} md={6} lg={3}>
              {oneBundle.bundleThumbnail === null ? (
                <BundleThumbnail2
                  bundleId={oneBundle.bundleId}
                  feedTitle={oneBundle.feedTitle}
                  // bundleLike={oneBundle.bundleLike}
                  bundleLike={oneBundle.feedLikeCnt}
                  // isBundlePrivate={oneBundle.isBundlePrivate}
                  isBundlePrivate={oneBundle.bundlePrivate}
                  bundleThumbnail={bundlerRabbit}
                  bundleThumbnailText={oneBundle.bundleThumbnailText}
                  // isBundleDefault={oneBundle.isBundleDefault}
                  isBundleDefault={oneBundle.bundleDefault}
                />
              ) : (
                <BundleThumbnail2
                  bundleId={oneBundle.bundleId}
                  feedTitle={oneBundle.feedTitle}
                  // bundleLike={oneBundle.bundleLike}
                  bundleLike={oneBundle.feedLikeCnt}
                  // isBundlePrivate={oneBundle.isBundlePrivate}
                  isBundlePrivate={oneBundle.bundlePrivate}
                  bundleThumbnail={oneBundle.bundleThumbnail}
                  bundleThumbnailText={oneBundle.bundleThumbnailText}
                  // isBundleDefault={oneBundle.isBundleDefault}
                  isBundleDefault={oneBundle.bundleDefault}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </MDBox>
  );
}

export default BundleListTab;
