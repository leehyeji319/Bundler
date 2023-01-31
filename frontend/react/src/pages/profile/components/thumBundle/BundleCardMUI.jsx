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
import SettingsIcon from "@mui/icons-material/Settings";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CardImg from "assets/images/bundler/bundlerRabbit.png";
import HomeCardModal from "./ThumnailCardModal";

function BundleThumbnail3({
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
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={bundleImage}
          component="img"
          title={bundleTitle}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {bundleTitle}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {bundleTitle}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          ) : (
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display="flex">{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// 썸네일 카드의 프롭타입 설정
BundleThumbnail3.propTypes = {
  bundleId: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired,
  bundleTitle: PropTypes.string.isRequired,
  bundleLike: PropTypes.number.isRequired,
  bundlePrivate: PropTypes.oneOf(["public", "private"]),
  bundleImage: PropTypes.string.isRequired,
  bundleThumtext: PropTypes.string.isRequired,
};

export default BundleThumbnail3;
