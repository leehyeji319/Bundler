// react-router components
// import { Link } from "react-router-dom";
// import MuiLink from "@mui/material/Link";
// import MDButton from "components/MDButton";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// import Modal from "@mui/material/Modal";
import { useState } from "react";
// import Divider from "@mui/material/Divider";
// import Icon from "@mui/material/Icon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CardImg from "assets/images/bundler/bundlerRabbit.png";
import HomeCardModal from "./ThumnailCardModal";

function BundleThumbnail({
  bundleId,
  cardType,
  bundleTitle,
  bundleLike,
  bundlePrivate,
  bundleImage,
  bundleThumtext,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Card>
      <MDBox p={3}>
        <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {cardType}
        </MDTypography>
        <MDTypography variant="body2" component="p" color="text">
          {bundleTitle}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography>{bundleId}</MDTypography>
          <MDBox>
            <MDBox>
              <FavoriteIcon
                sx={{
                  width: "19px",
                  height: "20px",
                }}
                color="primary"
                style={{
                  float: "left",
                }}
              />
              <MDTypography
                sx={{
                  fontSize: "15px",
                }}
                style={{
                  float: "left",
                }}
              >
                {bundleLike}
              </MDTypography>
            </MDBox>
            <MDBox
              sx={{
                marginLeft: "10%",
              }}
            >
              <MobileScreenShareIcon
                sx={{
                  width: "19px",
                  height: "20px",
                }}
                color="white"
                style={{
                  float: "left",
                }}
              />
              <MDTypography
                sx={{
                  fontSize: "15px",
                }}
              >
                {bundlePrivate}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// 썸네일 카드의 프롭타입 설정
BundleThumbnail.propTypes = {
  bundleId: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired,
  bundleTitle: PropTypes.string.isRequired,
  bundleLike: PropTypes.number.isRequired,
  bundlePrivate: PropTypes.oneOf(["public", "private"]),
  bundleImage: PropTypes.string.isRequired,
  bundleThumtext: PropTypes.string.isRequired,
};

export default BundleThumbnail;
