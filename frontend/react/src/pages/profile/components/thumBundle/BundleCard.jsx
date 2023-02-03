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
// import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";

import CardMedia from "@mui/material/CardMedia";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import BundleSetBox from "../SettingModal/BundleSetting";
// import CardImg from "assets/images/bundler/bundlerRabbit.png";
// import HomeCardModal from "./ThumnailCardModal";

function BundleThumbnail2({
  bundleId,
  bundleTitle,
  bundleLike,
  bundlePrivate,
  bundleImage,
  bundleThumtext,
  bundleDefault,
}) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const [open4, setOpen4] = useState(false);
  const BundleSetOpen = () => setOpen4(true);
  const BundleSetClose = () => setOpen4(false);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        marginBottom: "20px",
      }}
    >
      <Modal open={open4} onClose={BundleSetClose}>
        <BundleSetBox
          SelectBundleId={bundleId}
          bundleImage={bundleImage}
          bundleThumtext={bundleThumtext}
          bundleTitle={bundleTitle}
        />
      </Modal>
      {/* <MDBox p={3}>
        <MDBox // 설정 버튼 최상단
          sx = {{
            float : "right"
          }}>
          <SettingsIcon 
          sx = {{
            width : "24px",
            height : "24px",
          }}/>
        </MDBox> */}
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
            opacity: "50%",
            width: "400px",
            height: "220px",
          }}
        />
        <MDTypography // 번들 썸네일 텍스트
          position="absolute"
          sx={{
            top: "40%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          {bundleThumtext}
        </MDTypography>
      </MDBox>
      <MDBox mt={1} mx={0.5} mb={1.5}>
        <MDBox mb={1} />
        <MDBox mb={3} lineHeight={0}>
          <MDTypography
            variant="button"
            fontWeight="medium"
            color="white"
            fontSize="20px"
            sx={{ marginLeft: "10px" }}
          >
            {bundleTitle}
          </MDTypography>
        </MDBox>
        <MDBox // 번들 썸네일 하단 4개 컴퍼넌트
        >
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={6}>
              <MDBox // 썸네일 번들 하단 묶음 - 좋아요(default) + 잠금
                sx={{
                  display: "flex",
                  justifyContent: "spaceBetween",
                }}
              >
                {bundleDefault === "non" ? (
                  <MDBox // 썸네일 번들 하단 - 1. 좋아요와 좋아요 숫자
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    <FavoriteIcon
                      sx={{
                        width: "25px",
                        height: "25px",
                      }}
                      color="primary"
                      style={{
                        float: "left",
                      }}
                    />
                    <MDTypography
                      sx={{
                        marginLeft: "8px",
                        fontSize: "15px",
                      }}
                      style={{
                        float: "left",
                      }}
                    >
                      {bundleLike}
                    </MDTypography>
                  </MDBox>
                ) : (
                  <MDBox
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    <MDTypography>Default</MDTypography>
                  </MDBox>
                )}
                <MDBox // 썸네일 번들 하단 - 2. 잠금 표시
                  sx={{
                    float: "left",
                    marginLeft: "10px",
                  }}
                >
                  {bundlePrivate === "private" ? (
                    <MDBox>
                      <LockIcon
                        sx={{
                          width: "25px",
                          height: "25px",
                        }}
                        color="secondary"
                      />
                    </MDBox>
                  ) : (
                    <MDBox />
                  )}
                </MDBox>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox // 썸네일 번들 하단 묶음 - 상세보기 + 설정
                sx={{
                  display: "flex",
                  justifyContent: "spaceBetween",
                }}
              >
                <MDBox // 썸네일 번들 하단  - 3. 상세보기 버튼
                >
                  <MDButton
                    variant="outlined"
                    size="small"
                    style={
                      {
                        // marginLeft: "40px",
                      }
                    }
                  >
                    상세 보기
                  </MDButton>
                </MDBox>
                <MDBox // 썸네일 번들 하단 - 4. 썸네일 설정 버튼
                  sx={{
                    marginLeft: "20px",
                  }}
                >
                  <SettingsIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                    }}
                    color="secondary"
                    onClick={BundleSetOpen}
                  />
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// 썸네일 카드의 프롭타입 설정
BundleThumbnail2.propTypes = {
  bundleId: PropTypes.number.isRequired,
  bundleTitle: PropTypes.string.isRequired,
  bundleLike: PropTypes.number.isRequired,
  bundlePrivate: PropTypes.string.isRequired,
  bundleDefault: PropTypes.string.isRequired,
  // bundlePrivate: PropTypes.oneOf(["public", "private"]),
  // bundleDefault: PropTypes.oneOf(["non", "default"]),
  bundleImage: PropTypes.string.isRequired,
  bundleThumtext: PropTypes.string.isRequired,
};

export default BundleThumbnail2;
