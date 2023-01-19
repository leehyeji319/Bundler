/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// // @mui material components
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

// // Overview page components
// import Header from "layouts/profile/components/Header";
// import ProfileCard from "pages/profile/components/ProfileCard";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// // Data
// import profilesListData from "layouts/profile/data/profilesListData";

// icon
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupsIcon from '@mui/icons-material/Groups';

// // Images
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import homeDecor4 from "assets/images/home-decor-4.jpeg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import Catimage from "../../assets/images/cat.jpg";
import { Box, fontSize } from "@mui/system";
// import { Typography } from "@mui/material";
import Button from "@mui/material/Button"


function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDTypography variant="h2" color="white">
        프로필
      </MDTypography>
      {/* <ProfileCard /> */}
      <MDBox position="relative" mb={5}>
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
          }}
          >
          <MDBox //이미지와 이름, 이메일, 소속 담을 박스
            sx={{
              width: "400px",
              height: "110px",
              marginTop: "20px"
            }}
            style={{
              justifyContent:"flex-start"
            }}
          >
            <MDBox  // 그 사이 의미없는 박스
              style={{
                justifyContent:"flex-start"
              }}
              >
              <MDAvatar // 프로필 이미지
                alt="Dellojoon"
                src={Catimage}
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
                  dellojoon
                </MDTypography>
                <MDBox>
                  <AlternateEmailIcon sx = {{color : 'gray'}}></AlternateEmailIcon>
                  <MDTypography variant="h7" fontWeight="medium" color="white" sx = {{marginLeft :'10px'}}>
                    dellojoon7@gmail.com
                  </MDTypography>
                </MDBox>
                <MDBox sx={{alignItems : "left"}}>
                  <LocationCityIcon sx = {{color : 'gray'}}></LocationCityIcon>
                  <MDTypography variant="h7" fontWeight="medium" color="white" sx = {{marginLeft :'10px'}}>
                    싸피 8기
                  </MDTypography>
                </MDBox>
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
              많은 분들의 니즈를 충족시키는 프론트엔드 개발자가 되고 싶습니다.
            </MDTypography>
          </MDBox>
          <MDBox // 하단 환경설정 및 팔로잉 팔로워 버튼 담을 박스
           sx= {{
            height: "60px",
            marginTop: "10px"
           }}
          >
            <MDBox //팔로잉 버튼과 팔로워 버튼을 담을 박스
            style={{
              flexDirection: "row",
              justifyContent: "center"
            }}>
              <MDBox // 팔로잉 버튼
              sx={{
                backgroundColor : '#282535',
                width : '166px',
                height : '51px',
                borderRadius :'15px'
              }}
              style ={{
                float: "left",
                justifyContent: "space-between"
              }}>
                <PersonAddAlt1Icon 
                sx={{
                  color:'gray',
                  width : '28px',
                  height:'26px'
                  
                }}
                style={{
                  float : "left",
                }}>
                </PersonAddAlt1Icon>
                <MDBox //팔로잉 글자와 숫자
                  style={{
                    flexDirection: "colummn",
                    float : "left"
                  }}>
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
              }}
              style={{
                float: "left",
                justifyContent: "space-between"
              }}>
                <GroupsIcon 
                sx={{
                  color:'gray',
                  width : '28px',
                  height:'26px'
                  }}
                style={{
                  float: "left"
                }}>
                </GroupsIcon>
                <MDBox //팔로워 글자와 숫자
                  style={{
                    flexDirection: "colummn",
                    float: "left"
                  }}>
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
        <MDBox py={3}>
          <Grid item>
            <Button variant ="outlined">내가 작성한 카드</Button>
            <Button variant ="outlined" sx={{ marginLeft : '30px' }}>번들 리스트</Button>
            <Button variant ="outlined" sx={{ marginLeft : '30px' }}>통계</Button>
          </Grid>
          <MDBox 
          sx={{
            backgroundColor : "#282535"
          }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <SimpleBlogCard
                image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb"
                title="첫번째 글"
                description="나는 첫번째글이당"
                action={{
                  type: "external",
                  route: "/",
                  color: "secondary",
                }}
                />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );


  //   <DashboardLayout>
  //     <DashboardNavbar />
  //     <MDBox mb={2} />
  //     <Header>
  //       <MDBox mt={5} mb={3}>
  //         <Grid container spacing={1}>
  //           <Grid item xs={12} md={6} xl={4}>
  //             <PlatformSettings />
  //           </Grid>
  //           <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
  //             <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
  //             <ProfileInfoCard
  //               title="profile information"
  //               description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
  //               info={{
  //                 fullName: "Alec M. Thompson",
  //                 mobile: "(44) 123 1234 123",
  //                 email: "alecthompson@mail.com",
  //                 location: "USA",
  //               }}
  //               social={[
  //                 {
  //                   link: "https://www.facebook.com/CreativeTim/",
  //                   icon: <FacebookIcon />,
  //                   color: "facebook",
  //                 },
  //                 {
  //                   link: "https://twitter.com/creativetim",
  //                   icon: <TwitterIcon />,
  //                   color: "twitter",
  //                 },
  //                 {
  //                   link: "https://www.instagram.com/creativetimofficial/",
  //                   icon: <InstagramIcon />,
  //                   color: "instagram",
  //                 },
  //               ]}
  //               action={{ route: "", tooltip: "Edit Profile" }}
  //               shadow={false}
  //             />
  //             <Divider orientation="vertical" sx={{ mx: 0 }} />
  //           </Grid>
  //           <Grid item xs={12} xl={4}>
  //             <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
  //           </Grid>
  //         </Grid>
  //       </MDBox>
  //       <MDBox pt={2} px={2} lineHeight={1.25}>
  //         <MDTypography variant="h6" fontWeight="medium">
  //           Projects
  //         </MDTypography>
  //         <MDBox mb={1}>
  //           <MDTypography variant="button" color="text">
  //             Architects design houses
  //           </MDTypography>
  //         </MDBox>
  //       </MDBox>
  //       <MDBox p={2}>
  //         <Grid container spacing={6}>
  //           <Grid item xs={12} md={6} xl={3}>
  //             <DefaultProjectCard
  //               image={homeDecor1}
  //               label="project #2"
  //               title="modern"
  //               description="As Uber works through a huge amount of internal management turmoil."
  //               action={{
  //                 type: "internal",
  //                 route: "/pages/profile/profile-overview",
  //                 color: "info",
  //                 label: "view project",
  //               }}
  //               authors={[
  //                 { image: team1, name: "Elena Morison" },
  //                 { image: team2, name: "Ryan Milly" },
  //                 { image: team3, name: "Nick Daniel" },
  //                 { image: team4, name: "Peterson" },
  //               ]}
  //             />
  //           </Grid>
  //           <Grid item xs={12} md={6} xl={3}>
  //             <DefaultProjectCard
  //               image={homeDecor2}
  //               label="project #1"
  //               title="scandinavian"
  //               description="Music is something that everyone has their own specific opinion about."
  //               action={{
  //                 type: "internal",
  //                 route: "/pages/profile/profile-overview",
  //                 color: "info",
  //                 label: "view project",
  //               }}
  //               authors={[
  //                 { image: team3, name: "Nick Daniel" },
  //                 { image: team4, name: "Peterson" },
  //                 { image: team1, name: "Elena Morison" },
  //                 { image: team2, name: "Ryan Milly" },
  //               ]}
  //             />
  //           </Grid>
  //           <Grid item xs={12} md={6} xl={3}>
  //             <DefaultProjectCard
  //               image={homeDecor3}
  //               label="project #3"
  //               title="minimalist"
  //               description="Different people have different taste, and various types of music."
  //               action={{
  //                 type: "internal",
  //                 route: "/pages/profile/profile-overview",
  //                 color: "info",
  //                 label: "view project",
  //               }}
  //               authors={[
  //                 { image: team4, name: "Peterson" },
  //                 { image: team3, name: "Nick Daniel" },
  //                 { image: team2, name: "Ryan Milly" },
  //                 { image: team1, name: "Elena Morison" },
  //               ]}
  //             />
  //           </Grid>
  //           <Grid item xs={12} md={6} xl={3}>
  //             <DefaultProjectCard
  //               image={homeDecor4}
  //               label="project #4"
  //               title="gothic"
  //               description="Why would anyone pick blue over pink? Pink is obviously a better color."
  //               action={{
  //                 type: "internal",
  //                 route: "/pages/profile/profile-overview",
  //                 color: "info",
  //                 label: "view project",
  //               }}
  //               authors={[
  //                 { image: team4, name: "Peterson" },
  //                 { image: team3, name: "Nick Daniel" },
  //                 { image: team2, name: "Ryan Milly" },
  //                 { image: team1, name: "Elena Morison" },
  //               ]}
  //             />
  //           </Grid>
  //         </Grid>
  //       </MDBox>
  //     </Header>
  //     <Footer />
  //   </DashboardLayout>
  // );
}

export default Overview;
