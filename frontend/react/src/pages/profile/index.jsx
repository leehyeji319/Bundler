/*
기본 홈 Page 구성  
*/
// // Mui-Material components
// import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";
// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import PropTypes from "prop-types";

// [Import - React Basic] react && props && mui
import React, { useState, useEffect } from "react";

import MDBox from "components/MDBox";
// import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ProfileCard from "./components/ProfileCard/ProfileCard";
// import CardThumbnailCard from "./components/thumCard/ThumnailCard";

// import BundleThumbnail2 from 'pages/profile/components/thumBundle/BundleCard';

// Images
// import trendimg from "../../assets/images/trend.jpg"
// import itimg from "../../assets/images/ai-icons.jpeg"
// import bundlerRabbit from "../../assets/images/bundler_rabbit_6.png"
import Catimage from "../../assets/images/cat.jpg";

// 각 탭 form들을 import 
import BundleListTab from "./Form/BundleListForm";
import CardListTab from "./Form/CardListForm";
import StatTab from "./Form/StatForm";


// import { ResponsiveCalendar } from '@nivo/calendar'

// import strickdata2 from "../searchall/strickdata.json"

function SelectedTab({ selected }) {
  switch (selected) {
    case "bundleTab":
      return <BundleListTab />;
    case "statTab":
      return <StatTab />;
    default:
      return <CardListTab />;
  }
}

SelectedTab.propTypes = {
  selected: PropTypes.string.isRequired,
};

function Profile() {

  // const data1  = strickdata2

  // const thisyear = "2023"
  const [tabvalue, setTabValue] = React.useState("cardTab");

  const handleChangeTab = (tabevent) => {
    setTabValue(tabevent.target.value);
  };


  // console.log(tabevent.target);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2}>
        <MDTypography variant="h2" color="white">
          프로필
        </MDTypography>
      </MDBox>
      <MDBox 
      position="relative" 
      mb={5}>
        <MDBox 
        sx={{
            width : "1700px",
            height : "400px",
            flexDirection : "row",
            // justifyContent : "spaceBetween"
          }}>

          <ProfileCard
            profileImage={Catimage}
            nickname="dellojoon2"
            email="dellojoon7@gmail.com"
            introduction="많은 분들의 니즈를 충족시키는 프론트엔드 개발자가 되고 싶습니다."
            group="싸피 8기"
            sx = {{
              float : "left",
            }}
          />
          {/* <MDBox
            style = {{ 
            width: "600px",
            height: "300px",
            backgroundColor: "#1C1A25",
            marginTop: "30px",
            marginLeft: "30px",
            border: "1px solid #ffffff",
            borderRadius: "21px",
            float : "left",
            position : "relative",
            }}>
            <MDBox style={{ width: 'auto', height: '300px', margin: '0 auto' }}>
              <MDTypography 
                sx = {{
                  fontSize : "20px",
                  marginTop : "2%",
                  marginLeft : "2%",
                }}>
                {thisyear}년도 카드 작성일
              </MDTypography>
              <ResponsiveCalendar
                data={data1}
                from="2016-01-01"
                to="2016-07-12"
                emptyColor="#eeeeee"
                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
            />
          </MDBox>

        </MDBox> */}
      </MDBox>
        <MDBox py={3} sx={{ marginTop : "30px"}}>
          <Grid container style={{ justifyContent :"space-around" }}>
            <Grid item>
              <Button
                value="cardTab" 
                variant="outlined" 
                onClick={handleChangeTab}
                sx={{ fontSize : "20px", backgroundColor : "#81D8C3", color : "#000000",}}>
                내가 작성한 카드
              </Button>
              <Button
                value="bundleTab"
                variant="outlined"
                onClick={handleChangeTab}
                sx={{ marginLeft : '30px', fontSize : "20px" , backgroundColor : "#81D8C3", color : "#000000",}}>
                번들 리스트
              </Button>
              <Button
                value="statTab"
                variant="outlined"
                onClick={handleChangeTab}
                sx={{ marginLeft : '30px', fontSize : "20px" , backgroundColor : "#81D8C3", color : "#000000",}}>
                통계
              </Button>
            </Grid>
          </Grid>
          <MDBox // 카드 및 번들을 렌더링
            sx={{
              backgroundColor : "#282535",
              marginTop : "5%",
              borderRadius : "40px",
            }}
          >
            <SelectedTab selected={tabvalue} />
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Profile;
