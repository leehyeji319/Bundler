/*
 기본 홈 Page 구성  
 */
// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import MDBox from "components/MDBox";
// import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ProfileCard from "./components/ProfileCard/ProfileCard";
// import CardThumbnailCard from "./components/thumCard/ThumnailCard";

import BundleThumbnail2 from "./components/thumBundle/BundleCard";

// Images
import trendimg from "../../assets/images/trend.jpg";
import itimg from "../../assets/images/ai-icons.jpeg";
import bundlerRabbit from "../../assets/images/bundler_rabbit_6.png";
import Catimage from "../../assets/images/cat.jpg";

// import { ResponsiveCalendar } from '@nivo/calendar'

// import strickdata2 from "../searchall/strickdata.json"

function Profile() {
  // const data1  = strickdata2

  // const thisyear = "2023";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2}>
        <MDTypography variant="h2" color="white">
          프로필
        </MDTypography>
      </MDBox>
      <MDBox position="relative" mb={5}>
        <MDBox
          sx={{
            width: "1700px",
            height: "400px",
            flexDirection: "row",
            // justifyContent : "spaceBetween"
          }}
        >
          <ProfileCard
            profileImage={Catimage}
            nickname="dellojoon2"
            email="dellojoon7@gmail.com"
            introduction="많은 분들의 니즈를 충족시키는 프론트엔드 개발자가 되고 싶습니다."
            group="싸피 8기"
            sx={{
              float: "left",
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
        <MDBox py={3} sx={{ marginTop: "30px" }}>
          <Grid container style={{ justifyContent: "space-around" }}>
            <Grid item>
              <Button variant="outlined" sx={{ fontSize: "20px" }}>
                내가 작성한 카드
              </Button>
              <Button variant="outlined" sx={{ marginLeft: "30px", fontSize: "20px" }}>
                번들 리스트
              </Button>
              <Button variant="outlined" sx={{ marginLeft: "30px", fontSize: "20px" }}>
                통계
              </Button>
            </Grid>
          </Grid>
          <MDBox // 카드 및 번들을 렌더링
            sx={{
              backgroundColor: "#282535",
              marginTop: "5%",
              borderRadius: "40px",
            }}
          >
            <MDBox
              sx={{
                marginLeft: "3%",
                marginTop: "7%",
                marginRight: "3%",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  {/* <SimpleBlogCard
                  image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb"
                  title="첫번째 글"
                  description="나는 첫번째글이당"
                  action={{
                    type: "external",
                    route: "/",
                    color: "secondary",
                  }}
                  /> */}
                  {/* <CardThumbnailCard
                    cardId="3"
                    cardType="카드 > 문제"
                    cardTitle="Q. Java Garbage Collector에 대한 설명으로 틀린 것은?"
                    cardLike="183"
                    cardScrap="22"
                    // action={{
                    //   type: "external",
                    //   route: "/",
                    //   color: "secondary",
                    // }}
                    /> */}
                  <BundleThumbnail2
                    bundleImage={bundlerRabbit}
                    bundleTitle="스크랩한 내 카드 (기본 번들)"
                    bundleThumtext="스크랩한 내 카드"
                    bundleLike="0"
                    bundlePrivate="public"
                    bundleDefault="default"
                  />
                  <BundleThumbnail2
                    bundleImage={trendimg}
                    bundleTitle="2023년 IT 트렌드"
                    bundleThumtext="이것이 트렌드"
                    bundleLike="425"
                    bundlePrivate="public"
                    bundleDefault="non"
                  />
                  <BundleThumbnail2
                    bundleImage={itimg}
                    bundleTitle="나만 볼꺼야 번들"
                    bundleThumtext="리액트 마스터"
                    bundleLike="0"
                    bundlePrivate="private"
                    bundleDefault="non"
                  />
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Profile;
