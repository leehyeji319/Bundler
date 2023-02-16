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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

import SelectedTab from "./Form/TabSelect";

// ---------------------------------------------------------------------------------------------------------------------
function Profile() {
  const { user } = useParams();

  console.log(user);
  // const pageUser = 1;
  // const pageUser = user2.user;
  const pageUser = user;
  console.log(pageUser);
  const [tabvalue, setTabValue] = useState("cardTab");

  const handleChangeTab = (tabevent) => {
    setTabValue(tabevent.target.value);
  };

  const userId = useSelector((state) => state.authToken.userId);
  console.log(userId);

  const [profileDataGet, setProfileData] = useState([]);
  const [CalendarData, setCalendar] = useState([]);
  const [CalendarDate, setDate] = useState([]);
  // 프로필 axios를 통해 먼저 렌더링
  useEffect(() => {
    console.log("test011");
    axios
      // .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/mypage")
      .get(`http://i8a810.p.ssafy.io:8080/api/v1/users/${pageUser}/mypage`)
      .then((res) => {
        setProfileData(res.data);
        setCalendar(res.data.userCalendar);
        setDate(res.data.userCalendar.dates);
        console.log("hi11-YOUR DATA OK");
      })
      .catch((error) => {
        console.error(error);
        console.log("hi22-YOUR DATA ERROR");
      });
  }, []);

  console.log(profileDataGet);

  // ---------------- 번들탭 Axios ------------------------------
  const [BundleData, setBundleData] = useState([]);

  // 어세스토큰 5분마다 리셋
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY3NjQ5MDkzNn0.S9flvhHYhCknKjABviz_CspCYGFQ2jTTlMWWh5fMPMw";
  // const [StatError, setStatError] = useState();
  useEffect(() => {
    console.log("test012");
    axios
      // .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats")
      // .get(`http://i8a810.p.ssafy.io:8080/api/v4/users/${pageUser}/feeds/bundles`, {
      .get(`http://localhost:8087/api/v4/users/${pageUser}/feeds/bundles`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res3) => {
        setBundleData(res3.data);
        // setStatError("");
        console.log("hi9999-YOUR DATA OK");
      })
      .catch((error) => {
        console.error(error);
        // setStatError("error_stat");
        console.log("hi8888-YOUR DATA ERROR");
      });
  }, []);

  console.log(BundleData);

  // -------------------- 카드탭 Axios ----------------------------
  const [CardData, setCardData] = useState([]);
  useEffect(() => {
    console.log("test0215");
    axios
      // .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats")
      // .get(`http://i8a810.p.ssafy.io:8080/api/v4/users/${pageUser}/feeds/bundles`, {
      .get(`http://localhost:8087/api/v5/users/${pageUser}/feeds/cards`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res4) => {
        setCardData(res4.data);
        // setStatError("");
        console.log("Card DATA OK");
      })
      .catch((error) => {
        console.error(error);
        // setStatError("error_stat");
        console.log("Card DATA ERROR");
      });
  }, []);

  console.log(CardData);

  // ------------------- 통계탭 Axios -------------------------------
  // -----stat만 axios 하나로 받고, 프로필이 json 파일 일때의 axios (23.02.09)-----
  const [StatData, setStatisticData] = useState([]);
  // const [StatError, setStatError] = useState();
  useEffect(() => {
    console.log("test012");
    axios
      // .get("http://i8a810.p.ssafy.io:8080/api/v1/users/1/stats")
      .get(`http://i8a810.p.ssafy.io:8080/api/v1/users/${pageUser}/stats`)
      .then((res2) => {
        setStatisticData(res2.data);
        // setStatError("");
        console.log("hi33-YOUR DATA OK");
      })
      .catch((error) => {
        console.error(error);
        // setStatError("error_stat");
        console.log("hi44-YOUR DATA ERROR");
      });
  }, []);

  // console.log(profileDataGet);
  const profiledata = profileDataGet;

  console.log(BundleData);
  console.log(StatData);
  console.log(profiledata);

  const thisyear = CalendarData.year;
  const startDate = `${thisyear}-01-01`;
  const endDate = `${thisyear}-12-31`;

  const cal2 = CalendarData.dates;
  console.log(cal2);
  const calendarData = CalendarDate;

  // const cardData = [];
  // // ------------ 탭 셀렉 시 데이터 고르기
  // const SelectData(tabvalue)
  // if (tabvalue === "bundleTab") {
  //   const SelectData = BundleData;
  //   return SelectData;
  // } else if (tabvalue === "statTab") {
  //   const SelectData = StatData;
  //   return SelectData;
  // } else if (tabvalue === "cardTab") {
  //   const SelectData = cardData;
  //   return SelectData;
  // }
  // console.log(SelectData)
  // const choosePage = () => {
  //   switch (tabvalue) {
  //     case "bundleTab":
  //       return <SelectedTab selected={tabvalue} data={BundleData} />;
  //     case "statTab":
  //       return <SelectedTab selected={tabvalue} data={StatData} />;
  //     case "cardTab":
  //       return <SelectedTab selected={tabvalue} data={StatData} />;
  //     default:
  //       return <SelectedTab selected={tabvalue} data={StatData} />;
  //   }
  // };

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
                // User={pageUser}
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
              <MySkill pageUser={pageUser} />
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
                      display: "flex",
                      justifyContent: "center",
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
                      // fontSize: "20px",
                      fontSize: "3vh",
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
          <SelectedTab selected={tabvalue} data1={CardData} data2={BundleData} data3={StatData} />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Profile;
