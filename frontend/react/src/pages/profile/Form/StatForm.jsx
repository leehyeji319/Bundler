// [Import - Design]
// import { Button, Box, TextField, Typography } from "@mui/material";
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";

// [Import - React Basic] react && props && mui
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

import piedata3 from "pages/profile/components/Statistic/piedata3.json";
import MyResponsivePie from "pages/profile/components/Statistic/pieChart";

import ActivityStat from "../components/Statistic/ActivityStat";
import ActivityBadge from "../components/Statistic/ActivityBadge";

import CompareStat from "../components/Statistic/CompareStat";

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
        backgroundColor: "#282535",
      }}>
      <MDBox // 역량 통계 전체
        sx ={{
          width: "100%",
          height: "100%",
          marginTop: "20px",
        }}>
        <MDBox // 역량 통계 - 제목 및 설명
          sx= {{
            marginLeft : "20px",
            marginTop : "30px",
          }}>
          <MDTypography
            sx={{
              fontSize: "35px",
              float: "left",
            }}>
              역량 통계
          </MDTypography>
          <MDTypography 
            sx= {{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}>
            내가 작성한 카드 기준
          </MDTypography>
        </MDBox>
        <MDBox // 역량 통계 - 차트 + 통계치 박스
          sx={{
            width: "100%",
          }}
        >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDBox // 역량 통계 - 차트
              >
              <MDBox style={{ width: 'auto', height: '500px', margin: '0 auto' }}>
                <MyResponsivePie data={piedata} />
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox // 역량 통계 - 통계치
              >
              <Grid container spacing={3}>
                {StatusList.map((category)=>(
                  <Grid item xs={12} md={6}>
                    <MDBox // 역량 통계 - 통계치 5개 개별
                    sx={{
                      // width: "320px",
                      // height: "200px",
                      backgroundColor: "#1F1D2B",
                      marginTop: "5px",
                      marginLeft: "20px",
                      flexDirection: "column",
                    }}
                      position="relative"
                      >
                      <MDBox // 역량 통계 - 통계치 - 대분류
                        sx ={{
                          marginTop : "30px",
                          marginLeft : "30px",
                          marginBottom: "10px",
                          width : "100%",
                          height : "40px",
                          justifyContent : "row",
                        }}
                        >
                        <MDTypography 
                          sx={{
                            marginTop: "10px",
                            fontSize : "20px",
                            float : "left",
                          }}>
                          {category.categoryName}
                        </MDTypography>
                        <MDTypography 
                          sx={{
                            marginLeft : "10px",
                            marginTop : "15px",
                            fontSize : "18px",
                            color : "gray",
                            float : "left",
                          }}>
                          ({category.proportion}%)
                        </MDTypography>
                      </MDBox>
                      <MDBox // 역량 통계 - 통계치 - 중분류 하위 
                        sx={{
                          flexDirection : "column",
                          marginTop: "5px",
                          marginLeft: "30px",
                          marginBottom: "10px",
                        }}>
                        {category.subCategories.map((subcategory) => (
                          <MDTypography 
                            sx={{
                              marginTop: "10px",
                              fontSize: "14px", 
                            }}>
                            - {subcategory.categoryName} ({subcategory.proportion}%)
                          </MDTypography>
                        ))}
                      </MDBox>
                    </MDBox>
                  </Grid>
                ))}
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
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
        <MDBox // 활동 통계 - 제목 및 설명
          sx= {{
            marginLeft : "20px",
            marginTop : "30px",
          }}>
          <MDTypography
            sx={{
              fontSize : "35px",
              float : "left",
            }}>
              활동 통계
          </MDTypography>
          <MDTypography 
            sx= {{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}>
            번들러에서의 활동
          </MDTypography>
        </MDBox>
        <MDBox // 활동 통계 - 내용 (수치 + 뱃지)
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox // 활동 통계 - 수치
              >
                <ActivityStat />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox // 활동 통계 - 뱃지
              >
                <ActivityBadge />
              </MDBox>
            </Grid>
          </Grid>
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
      <MDBox // 비교 통계 전체
      >
        <MDBox // 비교 통계 - 제목 및 설명
          sx= {{
            marginLeft: "20px",
            marginTop: "30px",
            height: "50px",
          }}>
          <MDTypography
            sx={{
              fontSize: "35px",
              float: "left",
            }}>
              비교 통계
          </MDTypography>
          <MDTypography 
            sx= {{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}>
            그룹 내 자신의 위치를 알려줍니다
          </MDTypography>
        </MDBox>
        <MDBox // 비교 통계 - 내용
        >
          <CompareStat />
        </MDBox>
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