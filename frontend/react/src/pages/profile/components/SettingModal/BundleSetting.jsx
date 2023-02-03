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
import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDButton from "components/MDButton";

// Modal
// import { useState } from "react";
// import { Box } from "@mui/material";

// Image
import imgty from "../../../../assets/images/Profile/안태윤.png";
import imghj from "../../../../assets/images/Profile/이혜지.jpg";
import imglion from "../../../../assets/images/Profile/라이언.png";
import imgdnk from "../../../../assets/images/Profile/다나카.jpeg";
import bunny from "../../../../assets/images/bundler/bundlerRabbit.png";

// Icon

function ProfileSetBox({ profileImage, nickname, email, introduction, group }) {
  return (
    <MDBox // 전체 외부 설정페이지 박스
      sx={{
        height: "650px",
        width: "1050px",
        backgroundColor: "#282535",
        border: "1px solid #ffffff",
        borderRadius: "20px",
      }}
    >
      <MDBox // 글자 있는 박스
        sx={{
          width: "100%",
        }}
        style={{
          justifyContent: "center",
        }}
      >
        <MDTypography
          sx={{
            fontSize: "25px",
            marginLeft: "10%",
            marginTop: "5%",
          }}
        >
          프로필 설정
        </MDTypography>
      </MDBox>
      <MDBox // 흰 줄
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 20px",
        }}
      ></MDBox>
    </MDBox>
  );
}

ProfileSetBox.propTypes = {
  profileImage: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

export default ProfileSetBox;
