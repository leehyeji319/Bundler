/*
기본 홈 Page 구성  
*/
// // Mui-Material components
// import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";
// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import PropTypes from "prop-types";

// [Import - React Basic] react && props && mui
// import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

import MDBox from "components/MDBox";
// import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { ResponsiveCalendar } from "@nivo/calendar";
// import { color } from "@mui/system";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import MySkill from "./components/Skill/SkillBox";
// import NewProfileCard2 from "./components/ProfileCard/NewProfileCard2";
// import strickdata from "./components/Statistic/stricktemp.json";
// import CardThumbnailCard from "./components/thumCard/ThumnailCard";

// import BundleThumbnail2 from 'pages/profile/components/thumBundle/BundleCard';

// Images
// import trendimg from "../../assets/images/trend.jpg"
// import itimg from "../../assets/images/ai-icons.jpeg"
// import bundlerRabbit from "../../assets/images/bundler_rabbit_6.png"
// import Catimage from "../../assets/images/cat.jpg";

// 각 탭 form들을 import
// import BundleListTab from "./Form/BundleListForm";
// import CardListTab from "./Form/CardListForm";
// import StatTab from "./Form/StatForm";
import SelectedTab from "./Form/TabSelect";
import profiletestdata from "./data/profileTest0209.json";

function Profile() {
  const [tabvalue, setTabValue] = useState("cardTab");

  const handleChangeTab = (tabevent) => {
    setTabValue(tabevent.target.value);
  };
  // const data1 = strickdata;

  const profiledata = profiletestdata;
  // const profiletempdata = {
  //   userId: 273,
  //   userEmail: "dellojoon7@gmail.com",
  //   userNickname: "dellojoon3",
  //   userIntroduction: "많은 분들의 니즈를 충족시키는 프론트엔드 개발자가 될거야!!",
  //   userProfileImage:
  //     "https://w.namu.la/s/dc42bb0527e08b0d65f370f3a8ad1c471ccbd90a5f01b85343e6471c7f4100486b9be8514d380c33651c70fdc1c7da610cd2effaa9696b1226d29082faa22131e41b8bd7a75491abd0819c4789a517c0e206180d8bb08310fc445866544fcef6a8103f5621ef9e444cfe37611314391c",
  //   userGithubUrl: "sssungjooon",
  //   userFollowingCount: 400,
  //   userFollowerCount: 500,
  // };

  // const [profileDataGet, setProfileData] = useState([]);
  console.log("test");
  const [StatData, setStatisticData] = useState([]);

  // -----다중 axios일 때의 코드 (23.02.09) -----
  // useEffect(() => {
  //   // console.log("test000");
  //   axios
  //     .all([
  //       axios.get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/mypage"),
  //       axios.get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats"),
  //     ])
  //     .then(
  //       axios.spread((res1, res2) => {
  //         setProfileData(res1.data);
  //         setStatisticData(res2.data);
  //         console.log("hi11-YOUR DATA OK");
  //       })
  //     )
  //     .catch((error) => {
  //       console.error(error);
  //       console.log("hi22-YOUR DATA ERROR");
  //     });
  // }, []);

  // 프로필 axios를 통해 먼저 렌더링
  // useEffect(() => {
  //   console.log("test011");
  //   axios
  //     .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/mypage")
  //     .then((res) => {
  //       setProfileData(res.data);
  //       console.log("hi11-YOUR DATA OK");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       console.log("hi22-YOUR DATA ERROR");
  //     });
  // }, []);

  console.log("test2222");
  // -----stat만 axios 하나로 받고, 프로필이 json 파일 일때의 axios (23.02.09)-----
  useEffect(() => {
    console.log("test012");
    axios
      .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats")
      .then((res2) => {
        setStatisticData(res2.data);
        console.log("hi11-YOUR DATA OK");
      })
      .catch((error) => {
        console.error(error);
        console.log("hi22-YOUR DATA ERROR");
      });
  }, []);

  // console.log(profileDataGet);
  // const profiledata = profileDataGet;

  // const profiledata = profiletestdata;0
  // console.log(profileDataGet);
  // console.log(StatData);
  const thisyear = profiledata.userCalendar.year;
  const startDate = `${thisyear}-01-01`;
  const endDate = `${thisyear}-12-31`;
  // console.log(endDate);
  const calendarData = profiledata.userCalendar.dates;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2}>
        <MDTypography variant="h2" color="white">
          프로필
        </MDTypography>
      </MDBox>
      <MDBox position="relative" mb={5} sx={{ width: "auto" }}>
        <MDBox // 프로필 카드 + 스트릭 (3개 버튼 상단)
          sx={{ width: "auto" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} xl={6}>
              <ProfileCard
                userId={profiledata.userId}
                profileImage={profiledata.userProfileImage}
                nickname={profiledata.userNickName}
                email={profiledata.userEmail}
                introduction={profiledata.userIntroduction}
                group={profiledata.userGithubUrl}
                FollowingCount={profiledata.userFollowingCount}
                FollowerCount={profiledata.userFollowerCount}
                sx={{
                  float: "left",
                }}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <MySkill />
            </Grid>
            <Grid item xs={12} xl={12}>
              <MDBox
                style={{
                  width: "95%",
                  height: "auto",
                  backgroundColor: "#1C1A25",
                  marginTop: "30px",
                  // marginLeft: "30px",
                  marginRight: "30px",
                  border: "1px solid #ffffff",
                  borderRadius: "21px",
                  float: "left",
                  position: "relative",
                }}
              >
                <MDBox style={{ width: "auto", height: "300px", margin: "0 auto" }}>
                  <MDTypography
                    sx={{
                      fontSize: "20px",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    {thisyear}년도 카드 작성일
                  </MDTypography>
                  <ResponsiveCalendar
                    data={calendarData}
                    from={startDate}
                    to={endDate}
                    emptyColor="#eeeeee"
                    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor="#f7c0c0"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    theme={{
                      textColor: "#ffffff",
                      fontSize: "20px",
                    }}
                    legends={[
                      {
                        anchor: "bottom-right",
                        direction: "row",
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: "right-to-left",
                      },
                    ]}
                  />
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox py={3} sx={{ marginTop: "30px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <MDBox
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                value="cardTab"
                variant="outlined"
                onClick={handleChangeTab}
                sx={{
                  fontSize: "20px",
                  width: "50%",
                  backgroundColor: "#81D8C3",
                  color: "#000000",
                }}
              >
                내가 작성한 카드
              </Button>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                value="bundleTab"
                variant="outlined"
                onClick={handleChangeTab}
                sx={{
                  marginLeft: "30px",
                  fontSize: "20px",
                  width: "50%",
                  backgroundColor: "#81D8C3",
                  color: "#000000",
                }}
              >
                번들 리스트
              </Button>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                value="statTab"
                variant="outlined"
                onClick={handleChangeTab}
                sx={{
                  marginLeft: "30px",
                  fontSize: "20px",
                  width: "50%",
                  backgroundColor: "#81D8C3",
                  color: "#000000",
                }}
              >
                통계
              </Button>
            </MDBox>
          </Grid>
        </Grid>
        <MDBox // 카드 및 번들을 렌더링
          sx={{
            backgroundColor: "#282535",
            marginTop: "5%",
            borderRadius: "40px",
          }}
        >
          <SelectedTab selected={tabvalue} data={StatData} />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Profile;
