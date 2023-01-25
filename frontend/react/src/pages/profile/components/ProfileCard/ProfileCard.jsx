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
// import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDButton from "components/MDButton";

// Modal
// import { useState } from "react";
// import { Box } from "@mui/material";

// Icon
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupsIcon from '@mui/icons-material/Groups';

function ProfileCard({ profileImage, nickname, email, introduction, group }) {

  return (
    <MDBox
    sx={{
      width: 491,
      height: 279,
      backgroundColor: "#1C1A25",
      marginTop: "30px",
      marginLeft: "30px",
      border: "1px solid #ffffff",
      borderRadius: "21px",
    }}
    style={{
      justifyContent:"flex-start"
    }}>
    <MDBox // 이미지와 이름, 이메일, 소속 담을 박스
      sx={{
        width: "400px",
        height: "110px",
        marginTop: "20px"
      }}
      style={{
        justifyContent:"flex-start"
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
        flexDirection= "row" 
        sx={{
          verticalAlign: "top",
          marginLeft: "40px"
        }}
        style={{
          float: "left",
          position:"realtive",
          justifyContent:"flex-start", 
        }}
        >
        <MDTypography variant="h4" fontweight= "medium" color="white">
          {nickname}
        </MDTypography>
        <MDBox>
          <AlternateEmailIcon sx = {{color : 'gray'}}/>
          <MDTypography variant="h7" fontWeight="medium" color="white" sx = {{marginLeft :'10px'}}>
            {email}
          </MDTypography>
        </MDBox>
        <MDBox sx={{alignItems : "left"}}>
          <LocationCityIcon sx = {{color : 'gray'}}/>
          <MDTypography variant="h7" fontWeight="medium" color="white" sx = {{marginLeft :'10px'}}>
            {group}
          </MDTypography>
        </MDBox>
      </MDBox> 
    </MDBox>
    <MDBox // 프로필 소개 담을 박스 
      sx={{
      backgroundColor : '#808191',
      width : '443px',
      height : '63px',
      borderRadius : '15px', 
      marginLeft : '15px ', 
      marginTop : '5px'
    }}>
      <MDTypography
        sx= {{
          color: "white",
          marginLeft: "15px",
          marginTop: "5px",
          fontSize: "15px",
          fontWeight: "medium"
        }}>
        {introduction}
      </MDTypography>
    </MDBox>
    <MDBox // 하단 환경설정 및 팔로잉 팔로워 버튼 담을 박스
     sx= {{
      height: "60px",
      marginTop: "10px"
     }}
    >
      <MDBox // 팔로잉 버튼과 팔로워 버튼을 담을 박스
      style={{
        flexDirection: "row",
        justifyContent: "center"
      }}
      sx= {{
        marginLeft : "15%",
      }}
      >
        <MDBox // 팔로잉 버튼
        sx={{
          backgroundColor : '#282535',
          width : '166px',
          height : '51px',
          borderRadius :'15px',
          border: "1px solid #ffffff",
        }}
        style ={{
          float: "left",
          justifyContent: "space-between"
        }}>
          <PersonAddAlt1Icon 
          sx={{
            color:'gray',
            width : '28px',
            height:'26px',
            marginLeft : "20%",
            marginTop : "5%",
          }}
          style={{
            float : "left",
          }}/>
          <MDBox // 팔로잉 글자와 숫자
            style={{
              flexDirection: "colummn",
              float : "left"
            }}
            sx={{
              marginLeft : "10%",
            }}
            >
            <MDTypography 
            sx={{
              fontSize: "13px",
              fontweight: "medium"
            }}>
              팔로잉
            </MDTypography>
            <MDTypography
              sx={{
                fontSize: "20px",
                fontWeight: "medium",
              }}>
              373
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox // 팔로워 버튼
        sx={{
          backgroundColor : '#282535',
          width : '166px',
          height : '51px',
          borderRadius :'15px',
          marginLeft : "15px",
          border: "1px solid #ffffff",
        }}
        style={{
          float: "left",
          justifyContent: "space-between"
        }}>
          <GroupsIcon 
          sx={{
            color:'gray',
            width : '28px',
            height:'26px',
            marginLeft : "20%",
            marginTop : "5%",
            }}
          style={{
            float: "left"
          }}/>
          <MDBox // 팔로워 글자와 숫자
            style={{
              flexDirection: "colummn",
              float: "left"
            }}
            sx={{
              marginLeft : "10%",
            }}
            >
            <MDTypography 
            sx={{
              fontSize: "13px",
              fontweight: "medium"
            }}>
              팔로워
            </MDTypography>
            <MDTypography
              sx={{
                fontSize: "20px",
                fontWeight: "medium",
              }}>
              359
            </MDTypography>
            </MDBox>
        </MDBox>
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
  nickname : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  introduction : PropTypes.string.isRequired,
  group : PropTypes.string.isRequired,
};

export default ProfileCard;
