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
import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// Modal
// import { useState } from "react";
// import { Box } from "@mui/material";

// Image
import imgty from "../../../../assets/images/Profile/안태윤.png"
import imghj from "../../../../assets/images/Profile/이혜지.jpg"
import imglion from "../../../../assets/images/Profile/라이언.png"
import imgdnk from "../../../../assets/images/Profile/다나카.jpeg"
import bunny from "../../../../assets/images/bundler/bundlerRabbit.png"

// Icon

function ProfileSetBox({ userId, profileImage, nickname, email, introduction, group }) {

  return (
    <MDBox // 전체 외부 설정페이지 박스
      sx={{
        height: "650px",
        width: "1050px",
        backgroundColor: "#282535",
        border: "1px solid #ffffff",
        borderRadius: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
      <MDBox // 글자 있는 박스
          sx={{
            width: "100%"
          }}
          style={{
            justifyContent: "center",
          }}
          >
          <MDTypography
            sx={{
              fontSize: "30px",
              marginLeft : "10%",
              marginTop : "5%",
            }}>
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
          }}>
        </MDBox>
        <MDBox // 프로필 설정 전체 박스 밑 내용이 담길 박스들
          sx = {{
            width : "1000px",
            height : "420px",
          }}
          style = {{
            flexDirection : "row",
          }}>
          <MDBox  // 프로필 사진과 이미지 변경 있는 박스 
            sx= {{
              marginTop : "20px",
              width : "300px",
              height : "350px",
            }}
            style = {{
              flexDirection : "column",
              float : "left",
              justifyContent : "center",
            }}>
            <MDAvatar 
            src = {imgdnk}
            sx = {{
              width : "200px",
              height : "200px",
              left : "60px",
            }}
            />
            <Button
              variant="contained"
              sx={{
                marginLeft : "80px",
                marginRight : "10px",
                marginTop : "25px",
                fontSize : "14px",
                fontWeight : "bolder",
                color : "white",
                backgroundColor: "#FF6F6F",
              }}>
              프로필 이미지 변경
            </Button>
          </MDBox>
          <MDBox // 설정 제목 및 인풋 값이 담길 박스
            sx= {{
              marginLeft : "80px",
            }}
            style = {{
              flexDirection : "column",
              float : "left",
            }}>
            <MDBox>
              <MDTypography>
                닉네임
              </MDTypography>
              <MDInput
                sx = {{
                  width : "600px",
                }}
              >
                dellojoon
              </MDInput>
            </MDBox>
            <MDBox
              sx={{
                marginTop : "20px",
              }}
              >
              <MDTypography>
                자기 소개 (50자 이내)
              </MDTypography>
              <MDInput
                sx = {{
                  width : "600px",
                }}
              >
                많은 분들의 니즈를 충족시키는 프론트엔드
              </MDInput>
            </MDBox>
            <MDBox
              sx={{
                marginTop : "20px",
              }}
            >
              <MDTypography>
                소속 그룹
              </MDTypography>
              <MDInput
                sx = {{
                  width : "600px",
                }}
              >
                싸피 8기
              </MDInput>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox // 밑에 버튼 두개 담을 박스
          sx = {{
            marginRight : "35px",
            marginBottom : "20px",
            marginTop : "20px"
          }}
          >
          <Button // 취소 버튼
            // onClick={ProfileSetClose}
            variant="contained" 
            style={{ 
              float : "right",
            }}
            sx={{
              marginRight : "10px",
              fontSize : "14px",
              fontWeight : "bolder",
              color : "#000000",
              backgroundColor: "#81D8C3",
            }}>
            취소
          </Button>
          <Button 
            variant="contained" 
            style={{ 
              float : "right",
            }}
            sx={{
              marginRight : "10px",
              fontSize : "14px",
              fontWeight : "bolder",
              color : "#000000",
              backgroundColor: "#81D8C3",
            }}>
            설정 완료
          </Button>
        </MDBox>

      
    </MDBox>
  )}
      

  ProfileSetBox.propTypes = {
    userId : PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    nickname : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    introduction : PropTypes.string.isRequired,
    group : PropTypes.string.isRequired,
};


export default ProfileSetBox;
