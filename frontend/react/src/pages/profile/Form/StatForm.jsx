// [Import - Design]
import { Button, Box, TextField, Typography } from "@mui/material";
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

import piedata3 from "pages/profile/components/Statistic/piedata3.json";
import MyResponsivePie from "pages/profile/components/Statistic/pieChart";

// BundlelistTabForm Template
function StatTab() {
  const piedata = piedata3
  const StatusList = [
    {
      "categoryName":"알고리즘",
      "proportion":29,
      "subCategories":[
        {
          "categoryName":"DP",		
          "proportion":29,
        },
        {
          "categoryName":"완전탐색",		
          "proportion":22,
        },
        {
          "categoryName":"DFS",		
          "proportion":20,
        },
        {
          "categoryName":"트리",		
          "proportion":17,
        },
        {
          "categoryName":"위상정렬",		
          "proportion":12,
        },
      ]
    },
    {
      "categoryName":"CS",
      "proportion":22,
      "subCategories":[
        {
          "categoryName":"네트워크",		
          "proportion":40,
        },
        {
          "categoryName":"운영체제",		
          "proportion":30,
        },
        {
          "categoryName":"자료구조",		
          "proportion":20,
        },
        {
          "categoryName":"데이터베이스",		
          "proportion":10,
        },
      ]
    },
    {
      "categoryName":"언어",
      "proportion":20,
      "subCategories":[
        {
          "categoryName":"Python",		
          "proportion":40,
        },
        {
          "categoryName":"JAVA",		
          "proportion":30,
        },
        {
          "categoryName":"JavaScript",		
          "proportion":17,
        },
        {
          "categoryName":"C++",		
          "proportion":10,
        },
        {
          "categoryName":"Kotlin",		
          "proportion":3,
        },
      ]
    },
    {
      "categoryName":"정보",
      "proportion":17,
      "subCategories":[
        {
          "categoryName":"기업분석",		
          "proportion":30,
        },
        {
          "categoryName":"트렌드",		
          "proportion":40,
        },
        {
          "categoryName":"정보",		
          "proportion":30,
        },
      ]
    },
    {
      "categoryName":"직무",
      "proportion":12,
      "subCategories":[
        {
          "categoryName":"프론트엔드",		
          "proportion":80,
        },
        {
          "categoryName":"백엔드",		
          "proportion":11,
        },
        {
          "categoryName":"임베디드",		
          "proportion":0,
        },
        {
          "categoryName":"기타",		
          "proportion":1,
        },
        {
          "categoryName":"DB",		
          "proportion":5,
        },
      ]
    },
  ]
  

  return (
    <MDBox // 전체 통계탭 박스
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor : "#282535",
      }}>
      <MDBox // 역량 통계 전체
        sx ={{
          width : "100%",
          height : "100%",
        }}>
        <MDBox // 역량 통계 - 제목 및 설명
          sx= {{
            marginLeft : "20px",
            marginTop : "30px",
          }}>
          <MDTypography
            sx={{
              fontSize : "35px",
              float : "left",
            }}>
              역량 통계
          </MDTypography>
          <MDTypography 
            sx= {{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              Color: "gray",
            }}>
            내가 작성한 카드 기준
          </MDTypography>
        </MDBox>
        <MDBox // 역량 통계 - 차트 + 통계치 박스
          sx={{
            width : "100%",
          }}
        >
          <MDBox // 역량 통계 - 차트
            sx={{
              width: "40%",
              height: "auto",
              float: "left",
            }}
          >
            <MDBox style={{ width: 'auto', height: '400px', margin: '0 auto' }}>
              <MyResponsivePie data={piedata} />
            </MDBox>
          </MDBox>
          <MDBox // 역량 통계 - 통계치
            sx={{
              width: "60%",
              heigt: "auto",
              float: "right",
            }}
          >
            {StatusList.map((category)=>(
              <MDBox // 역량 통계 - 통계치 5개 개별
                sx={{
                  width: "320px",
                  height: "200px",
                  backgroundColor: "#1F1D2B",
                  marginTop: "10px",
                  marginLeft: "20px",
                  flexDirection: "column",
                }}
                position="relative"
                >
                <MDBox // 역량 통계 - 통계치 - 대분류
                  sx ={{
                    marginTop : "30px",
                    marginLeft : "30px",
                    width : "100%",
                    height : "30px",
                    justifyContent : "row",
                  }}
                  >
                  <MDTypography 
                    sx={{
                      fontSize : "20px",
                      float : "left",
                    }}>
                    {category.categoryName}
                  </MDTypography>
                  <MDTypography 
                    sx={{
                      marginLeft : "10px",
                      marginTop : "5px",
                      fontSize : "18px",
                      color : "gray",
                      float : "left",
                    }}>
                    ({category.proportion}%)
                  </MDTypography>
                </MDBox>
                <MDBox
                  sx={{
                    flexDirection : "column",
                    height: "100%",
                    width: "80%",
                    marginTop: "5px",
                    marginLeft: "30px",
                  }}>
                  {category.subCategories.map((subcategory) => (
                    <MDTypography 
                      sx={{
                        fontSize: "14px", 
                      }}>
                      - {subcategory.categoryName} ({subcategory.proportion}%)
                    </MDTypography>
                  ))}
                </MDBox>
              </MDBox>
            ))}
          </MDBox>
        </MDBox>
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
      <MDBox // 활동 통계 전체 
      >

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
      <MDBox // 비교 톻계 전체
      >

      </MDBox>
    </MDBox>
  )
};

export default StatTab;

// // Typechecking props for the SelectedCategory
// BundleListTab.propTypes = {
//   selected: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };