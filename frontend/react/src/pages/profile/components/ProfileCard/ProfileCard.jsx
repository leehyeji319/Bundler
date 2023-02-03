/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// react-router components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Card from "@mui/material/Card";
// import MuiLink from "@mui/material/Link";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Modal
// import { useState } from "react";
// import { Box } from "@mui/material";

// Icon
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

import { useState } from "react";
import FollowingBox from "pages/profile/components/Follow/FollowingBox";
import FollowerBox from "../Follow/FollowerBox";
import ProfileSetBox from "../SettingModal/ProfileSetting";

function ProfileCard({ profileImage, nickname, email, introduction, group }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const FollowerOpen = () => setOpen2(true);
  const FollowerClose = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const ProfileSetOpen = () => setOpen3(true);
  const ProfileSetClose = () => setOpen3(false);

  return (
    <MDBox
      sx={{
        width: 500,
        height: 279,
        backgroundColor: "#1C1A25",
        marginTop: "30px",
        marginLeft: "30px",
        border: "1px solid #ffffff",
        borderRadius: "21px",
      }}
      style={{
        justifyContent: "flex-start",
      }}
    >
      <Modal open={open} onClose={handleClose}>
        <FollowingBox nickname="임성준" />
      </Modal>
      <Modal open={open2} onClose={FollowerClose}>
        <FollowerBox nickname="임성준" />
      </Modal>
      <Modal open={open3} onClose={ProfileSetClose}>
        <ProfileSetBox />
      </Modal>
      <MDBox // 이미지와 이름, 이메일, 소속 담을 박스
        sx={{
          width: "450px",
          height: "110px",
          marginTop: "20px",
        }}
        style={{
          justifyContent: "flex-start",
        }}
      >
        <MDAvatar // 프로필 이미지
          alt={nickname}
          src={profileImage}
          sx={{
            width: "100px",
            height: "100px",
            left: "20px",
          }}
          style={{
            float: "left",
          }}
        />
        <MDBox // 이름, 이메일, 소속 정보만 담을 박스 (이미지 x)
          flexDirection="row"
          sx={{
            verticalAlign: "top",
            marginLeft: "40px",
          }}
          style={{
            float: "left",
            position: "realtive",
            justifyContent: "flex-start",
          }}
        >
          <MDTypography variant="h4" fontweight="medium" color="white">
            {nickname}
          </MDTypography>
          <MDBox>
            <AlternateEmailIcon sx={{ color: "gray" }} />
            <MDTypography
              variant="h7"
              fontWeight="medium"
              color="white"
              sx={{ marginLeft: "10px", fontSize: "17px" }}
            >
              {email}
            </MDTypography>
          </MDBox>
          <MDBox sx={{ alignItems: "left" }}>
            <LocationCityIcon sx={{ color: "gray" }} />
            <MDTypography
              variant="h7"
              fontWeight="medium"
              color="white"
              sx={{ marginLeft: "10px", fontSize: "17px" }}
            >
              {group}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox // 프로필 설정 아이콘 담을 박스
          style={{
            marginLeft: "50px",
            float: "right",
          }}
        >
          <SettingsIcon // 프로필 설정 아이콘
            sx={{
              color: "gray",
              width: "30px",
              height: "30px",
            }}
            onClick={ProfileSetOpen}
            // style = {{
            //   float : "right",
            // }}
          />
        </MDBox>
      </MDBox>
      <MDBox // 프로필 소개 담을 박스
        sx={{
          backgroundColor: "#808191",
          width: "443px",
          height: "63px",
          borderRadius: "15px",
          marginLeft: "15px ",
          marginTop: "5px",
        }}
      >
        <MDTypography
          sx={{
            color: "white",
            marginLeft: "15px",
            marginTop: "5px",
            fontSize: "15px",
            fontWeight: "medium",
          }}
        >
          {introduction}
        </MDTypography>
      </MDBox>
      <MDBox // 하단 환경설정 및 팔로잉 팔로워 버튼 담을 박스
        sx={{
          height: "60px",
          marginTop: "10px",
        }}
      >
        <MDBox // 팔로잉 버튼과 팔로워 버튼을 담을 박스
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
          sx={{
            marginLeft: "15%",
          }}
        >
          <MDButton // 팔로잉 버튼
            onClick={handleOpen}
            sx={{
              backgroundColor: "#282535",
              width: "166px",
              height: "51px",
              borderRadius: "15px",
              border: "1px solid #ffffff",
            }}
            style={{
              float: "left",
              justifyContent: "space-between",
            }}
          >
            <PersonAddAlt1Icon
              sx={{
                color: "gray",
                width: "28px",
                height: "26px",
                marginLeft: "20%",
                marginTop: "5%",
              }}
              style={{
                float: "left",
              }}
            />
            <MDBox // 팔로잉 글자와 숫자
              style={{
                flexDirection: "colummn",
                float: "left",
              }}
              sx={{
                marginLeft: "10%",
              }}
            >
              <MDTypography
                sx={{
                  fontSize: "13px",
                  fontweight: "medium",
                }}
              >
                팔로잉
              </MDTypography>
              <MDTypography
                sx={{
                  fontSize: "20px",
                  fontWeight: "medium",
                }}
              >
                373
              </MDTypography>
            </MDBox>
          </MDButton>
          <MDButton // 팔로워 버튼
            onClick={FollowerOpen}
            sx={{
              backgroundColor: "#282535",
              width: "166px",
              height: "51px",
              borderRadius: "15px",
              marginLeft: "15px",
              border: "1px solid #ffffff",
            }}
            style={{
              float: "left",
              justifyContent: "space-between",
            }}
          >
            <GroupsIcon
              sx={{
                color: "gray",
                width: "28px",
                height: "26px",
                marginLeft: "20%",
                marginTop: "5%",
              }}
              style={{
                float: "left",
              }}
            />
            <MDBox // 팔로워 글자와 숫자
              style={{
                flexDirection: "colummn",
                float: "left",
              }}
              sx={{
                marginLeft: "10%",
              }}
            >
              <MDTypography
                sx={{
                  fontSize: "13px",
                  fontweight: "medium",
                }}
              >
                팔로워
              </MDTypography>
              <MDTypography
                sx={{
                  fontSize: "20px",
                  fontWeight: "medium",
                }}
              >
                359
              </MDTypography>
            </MDBox>
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Default Vlaue
// HomeCard.defaultProps = {
//   commentList: null,
// };

// Typechecking props for the SimpleBlogCard
ProfileCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

export default ProfileCard;
