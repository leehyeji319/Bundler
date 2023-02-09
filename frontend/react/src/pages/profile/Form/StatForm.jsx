// [Import - Design]
// import { Button, Box, TextField, Typography } from "@mui/material";
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
// import axios from "axios";
// import PropTypes from "prop-types";
// import React, { useState, useEffect } from "react";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

// import ChartData from "pages/pr  ofile/components/Statistic/ChartData230206.json";
// import tempfull from "../components/Statistic/tempFullStat.json";

import MyResponsivePie from "pages/profile/components/Statistic/pieChart";

import ActivityStat from "../components/Statistic/ActivityStat";
import ActivityBadge from "../components/Statistic/ActivityBadge";

import CompareStat from "../components/Statistic/CompareStat";

// BundlelistTabForm Template
// function StatTab(userId) {
function StatTab(data) {
  // const fullStatData = {
  //   statCategory: [
  //     {
  //       proportion: 45.0,
  //       categoryMakeCount: 5,
  //       categoryName: "CS",
  //       subCategories: [
  //         {
  //           proportion: 60.0,
  //           categoryMakeCount: 3,
  //           categoryName: "운영체제",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "컴퓨터구조",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "네트워크",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "자료구조",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "데이터베이스",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "수학",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "CS 기타",
  //           subCategories: null,
  //         },
  //       ],
  //     },
  //     {
  //       proportion: 38.0,
  //       categoryMakeCount: 7,
  //       categoryName: "알고리즘",
  //       subCategories: [
  //         {
  //           proportion: 80.0,
  //           categoryMakeCount: 4,
  //           categoryName: "스택/큐/정렬",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "그래프 탐색(DFS/BFS/MST..)/트리/힙",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "탐욕/동적계획법/해시",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "완전탐색/이분탐색",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 0.0,
  //           categoryMakeCount: 0,
  //           categoryName: "알고리즘 기타",
  //           subCategories: null,
  //         },
  //       ],
  //     },
  //     {
  //       proportion: 22.0,
  //       categoryMakeCount: 3,
  //       categoryName: "언어",
  //       subCategories: [
  //         {
  //           proportion: 60.0,
  //           categoryMakeCount: 3,
  //           categoryName: "파이썬",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "JS/HTML/CSS",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "JAVA",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "언어 기타",
  //           subCategories: null,
  //         },
  //       ],
  //     },
  //     {
  //       proportion: 62.0,
  //       categoryMakeCount: 12,
  //       categoryName: "정보",
  //       subCategories: [
  //         {
  //           proportion: 60.0,
  //           categoryMakeCount: 3,
  //           categoryName: "기업 분석",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "IT기사/트렌드",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "자격증",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 20.0,
  //           categoryMakeCount: 1,
  //           categoryName: "정보 기타",
  //           subCategories: null,
  //         },
  //       ],
  //     },
  //     {
  //       proportion: 9.0,
  //       categoryMakeCount: 1,
  //       categoryName: "직무",
  //       subCategories: [
  //         {
  //           proportion: 100.0,
  //           categoryMakeCount: 8,
  //           categoryName: "프론트엔드",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 100.0,
  //           categoryMakeCount: 2,
  //           categoryName: "백엔드",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 100.0,
  //           categoryMakeCount: 9,
  //           categoryName: "인프라",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 100.0,
  //           categoryMakeCount: 1,
  //           categoryName: "면접",
  //           subCategories: null,
  //         },
  //         {
  //           proportion: 100.0,
  //           categoryMakeCount: 1,
  //           categoryName: "기타 직무",
  //           subCategories: null,
  //         },
  //       ],
  //     },
  //   ],
  //   registerDate: "2025-01-10",
  //   mutualFollows: 255,
  //   continuousCardMakeCnt: 33,
  //   totalFeedLikeCnt: 391,
  //   totalCardScrapCnt: 55,
  //   mostMakeCategory: "알고리즘",
  //   mostMakeSubCategory: "그래프 탐색(DFS/BFS/MST..)/트리/힙",
  //   feedLikeRankingFollowing: 21,
  //   cardScrapRankingFollowing: 11,
  //   feedLikeRankingTotal: 23,
  //   cardScrapRankingTotal: 44,
  //   cardMakeRankingTotal: 129,
  // };

  // const fullStatData = tempfull;
  // 통계탭 Axios 설정 (23.02.06)
  // 통계탭 Axios 연결 확인중 (23.02.08)
  // const [fullStatData, setStatisticData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats", {
  //         withCredentials: true,
  //       });
  //       setStatisticData(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(fullStatData);

  //   const fetchData = async () => {
  //     const response = await axios({
  //       url: "http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats",
  //       method: "get",
  //       withCredentials: true,
  //     }).then((result) => {
  //       console.log(result);
  //     });

  //     setStatisticData(response.data);
  //   };

  //   fetchData();
  // }, []);
  console.log(data);
  const fullStatData = data.data;
  console.log(fullStatData);

  const fullstatCategory = fullStatData.statCategory;
  const dataForPie = [
    {
      id: fullstatCategory[0].categoryName,
      label: fullstatCategory[0].categoryName,
      value: fullstatCategory[0].categoryMakeCount,
      color: "hsl(317, 70%, 50%)",
    },
    {
      id: fullstatCategory[1].categoryName,
      label: fullstatCategory[1].categoryName,
      value: fullstatCategory[1].categoryMakeCount,
      color: "hsl(27, 70%, 50%)",
    },
    {
      id: fullstatCategory[2].categoryName,
      label: fullstatCategory[2].categoryName,
      value: fullstatCategory[2].categoryMakeCount,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: fullstatCategory[3].categoryName,
      label: fullstatCategory[3].categoryName,
      value: fullstatCategory[3].categoryMakeCount,
      color: "hsl(173, 70%, 50%)",
    },
    {
      id: fullstatCategory[4].categoryName,
      label: fullstatCategory[4].categoryName,
      value: fullstatCategory[4].categoryMakeCount,
      color: "hsl(11, 70%, 50%)",
    },
  ];
  console.log(fullStatData);
  return (
    <MDBox // 전체 통계탭 박스
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#282535",
      }}
    >
      <MDBox // 역량 통계 전체
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "20px",
        }}
      >
        <MDBox // 역량 통계 - 제목 및 설명
          sx={{
            marginLeft: "20px",
            marginTop: "30px",
          }}
        >
          <MDTypography
            sx={{
              fontSize: "35px",
              float: "left",
            }}
          >
            역량 통계
          </MDTypography>
          <MDTypography
            sx={{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}
          >
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
                <MDBox style={{ width: "auto", height: "500px", margin: "0 auto" }}>
                  <MyResponsivePie data={dataForPie} />
                </MDBox>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox // 역량 통계 - 통계치
              >
                <Grid container spacing={1}>
                  {fullstatCategory.map((category) => (
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
                        <MDBox // 역량 통계 - 개별 통계치 - 내용 (대분류 + 중분류)
                          sx={{
                            paddingRight: "5px",
                            paddingBottom: "15px",
                          }}
                        >
                          <MDBox // 역량 통계 - 통계치 - 대분류
                            sx={{
                              marginTop: "30px",
                              marginLeft: "30px",
                              marginBottom: "10px",
                              width: "100%",
                              height: "auto",
                              justifyContent: "row",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12}>
                                <MDBox
                                  sx={{
                                    width: "auto",
                                  }}
                                >
                                  <MDTypography
                                    sx={{
                                      marginTop: "10px",
                                      fontSize: "20px",
                                      float: "left",
                                    }}
                                  >
                                    {category.categoryName}
                                  </MDTypography>
                                  <MDTypography
                                    sx={{
                                      marginLeft: "10px",
                                      marginTop: "15px",
                                      fontSize: "18px",
                                      color: "white",
                                      float: "left",
                                    }}
                                  >
                                    ({category.proportion}%)
                                  </MDTypography>
                                </MDBox>
                              </Grid>
                              <Grid item xs={12}>
                                <MDTypography
                                  sx={{
                                    marginLeft: "2px",
                                    marginTop: "5px",
                                    fontSize: "18px",
                                    color: "gray",
                                    float: "left",
                                  }}
                                >
                                  작성 카드 {category.categoryMakeCount}개
                                </MDTypography>
                              </Grid>
                            </Grid>
                          </MDBox>
                          <MDBox // 역량 통계 - 통계치 - 중분류 하위
                            sx={{
                              flexDirection: "column",
                              marginTop: "5px",
                              marginLeft: "30px",
                              marginBottom: "10px",
                            }}
                          >
                            {category.subCategories.map((subcategory) => (
                              <MDBox>
                                <MDTypography
                                  sx={{
                                    marginTop: "10px",
                                    fontSize: "14px",
                                  }}
                                >
                                  - {subcategory.categoryName} ({subcategory.proportion}%)
                                  <span style={{ color: "gray", marginLeft: "5px" }}>
                                    ({subcategory.categoryMakeCount}개)
                                  </span>
                                </MDTypography>
                              </MDBox>
                            ))}
                          </MDBox>
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
        }}
      />
      <MDBox // 활동 통계 전체
      >
        <MDBox // 활동 통계 - 제목 및 설명
          sx={{
            marginLeft: "20px",
            marginTop: "30px",
          }}
        >
          <MDTypography
            sx={{
              fontSize: "35px",
              float: "left",
            }}
          >
            활동 통계
          </MDTypography>
          <MDTypography
            sx={{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}
          >
            번들러에서의 활동
          </MDTypography>
        </MDBox>
        <MDBox // 활동 통계 - 내용 (수치 + 뱃지)
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox // 활동 통계 - 수치
              >
                <ActivityStat
                  registerDate={fullStatData.registerDate}
                  mutualFollows={fullStatData.mutualFollows}
                  continuousCardMakeCnt={fullStatData.continuousCardMakeCnt}
                  totalFeedLikeCnt={fullStatData.totalFeedLikeCnt}
                  totalCardScrapCnt={fullStatData.totalCardScrapCnt}
                  mostMakeCategory={fullStatData.mostMakeCategory}
                  mostMakeSubCategory={fullStatData.mostMakeSubCategory}
                />
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
        }}
      />
      <MDBox // 비교 통계 전체
      >
        <MDBox // 비교 통계 - 제목 및 설명
          sx={{
            marginLeft: "20px",
            marginTop: "30px",
            height: "50px",
          }}
        >
          <MDTypography
            sx={{
              fontSize: "35px",
              float: "left",
            }}
          >
            비교 통계
          </MDTypography>
          <MDTypography
            sx={{
              fontSize: "20px",
              marginLeft: "15px",
              marginTop: "15px",
              float: "left",
              color: "gray",
            }}
          >
            그룹 내 자신의 위치를 알려줍니다
          </MDTypography>
        </MDBox>
        <MDBox // 비교 통계 - 내용
        >
          <CompareStat
            feedLikeRankingTotal={fullStatData.feedLikeRankingTotal}
            feedLikeRankingFollowing={fullStatData.feedLikeRankingFollowing}
            cardScrapRankingTotal={fullStatData.cardScrapRankingTotal}
            cardScrapRankingFollowing={fullStatData.cardScrapRankingFollowing}
            cardMakeRankingTotal={fullStatData.cardMakeRankingTotal}
          />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// StatTab.propTypes = {
//   userId: PropTypes.number.isRequired,
// };

export default StatTab;

// // Typechecking props for the SelectedCategory
// BundleListTab.propTypes = {
//   selected: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };
