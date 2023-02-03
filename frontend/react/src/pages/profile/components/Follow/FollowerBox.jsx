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
import imgppap from "../../../../assets/images/Profile/PPAP.jpg";
import bunny from "../../../../assets/images/bundler/bundlerRabbit.png";

// Icon
// function FollowerBox({ profileImage, nickname, email, introduction, group }) {
function FollowerBox({ nickname }) {
  const friends = {
    nickname: "dellojoon",
    friendMember: [
      {
        frId: "1",
        frNick: "다나카",
        frIntro: "모에모에 뀽",
        frProfile: imgdnk,
      },
      {
        frId: "2",
        frNick: "정세권",
        frIntro: "최강 프론트엔드입니다",
        frProfile: bunny,
      },
      {
        frId: "3",
        frNick: "김영식",
        frIntro: "프로젝트 마스터",
        frProfile: bunny,
      },
      {
        frId: "4",
        frNick: "이혜지",
        frIntro: "백엔드의 신이 될꺼야",
        frProfile: imghj,
      },
      {
        frId: "5",
        frNick: "안태윤",
        frIntro: "킹갓윤",
        frProfile: imgty,
      },
      {
        frId: "6",
        frNick: "강효진",
        frIntro: "완벽주의 개발자",
        frProfile: imglion,
      },
      {
        frId: "7",
        frNick: "PPAP",
        frIntro: "펜파인애플 애플펜 이것은 팔로워",
        frProfile: imgppap,
      },
    ],
  };

  return (
    <MDBox // 전체 팔로잉 박스
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "540px",
        width: "500px",
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
          {nickname}님의 팔로워
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
      />
      <MDBox
        sx={{
          marginLeft: "6%",
          marginRight: "6%",
        }}
        style={{
          flexDirection: "column",
        }}
      >
        {friends.friendMember.map((follow) => (
          <MDBox
            sx={{
              height: "60px",
            }}
          >
            <MDBox
              style={{
                flexDirection: "row",
                // justifyContent: "space-between"
              }}
            >
              <MDAvatar
                src={follow.frProfile}
                sx={{
                  width: "46px",
                  height: "46px",
                  left: "35px",
                }}
                style={{
                  float: "left",
                }}
              />
              <MDBox // 팔로우 이름, 자기소개
                sx={{
                  marginLeft: "20%",
                }}
                style={{
                  flexDirection: "colummn",
                  float: "left",
                }}
              >
                <MDTypography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {follow.frNick}
                </MDTypography>
                <MDTypography
                  sx={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  {follow.frIntro.slice(0, 11)}
                </MDTypography>
              </MDBox>
              <MDBox>
                <Button
                  variant="contained"
                  style={{
                    float: "right",
                  }}
                  sx={{
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bolder",
                    color: "#000000",
                    backgroundColor: "#81D8C3",
                  }}
                >
                  팔로워
                </Button>
              </MDBox>
            </MDBox>
          </MDBox>
        ))}
      </MDBox>
    </MDBox>
  );
}

FollowerBox.propTypes = {
  // profileImage: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // introduction: PropTypes.string.isRequired,
  // group: PropTypes.string.isRequired,
};

export default FollowerBox;
