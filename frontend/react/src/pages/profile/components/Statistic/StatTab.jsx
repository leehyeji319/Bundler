// @mui material components
import MDBox from "components/MDBox";
// import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

import imgchart from "../../../../assets/images/Chart.png";


// Images


function MyStat() {

  const StatusList = 
  [
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
        backgroundColor : "#282535",
        width : "100%",
      }}>
      <MDBox>
        <MDBox // 역량 통계 - 제목 및 설명
          sx = {{
            marginLeft : "20px",
            marginTop : "30px",
          }}
          style = {{
            flexDirection : "row",
          }}
          >
          <MDTypography
            sx={{
              fontSize : "35px",
            }}>
            역량 통계
          </MDTypography>
          <MDTypography
            sx = {{
              fontSize : "20px",
            }}>
            내가 작성한 카드 기준
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDBox>
            <img src={imgchart} alt="chartImg" style={{ float : "left" }}/>
          </MDBox>
          <MDBox 
            sx = {{
              float : "left",
            }}>
            <MDBox>
              {/* <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}> */}
                  {StatusList.map((category)=>(
                    <MDBox
                      sx={{
                        width : "400px",
                        height : "200px",
                        backgroundColor : "#1F1D2B",
                        marginTop : "10px",
                        marginLeft : "20px",
                        flexDirection : "column",
                      }}
                      position="relative"
                      >
                      <MDBox
                        sx={{
                          marginTop : "30px",
                          marginLeft : "30px",
                          width : "100%",
                          height : "30px",
                        }}
                        style ={{
                          justifyContent : "row",
                        }}
                        >
                        <MDTypography
                          sx = {{
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
                        sx = {{
                          flexDirection : "column",
                          height : "100%",
                          width : "80%",
                          marginTop : "5px",
                          marginLeft : "30px",
                          // float : "left",
                        }}>
                        {category.subCategories.map((subcategory) => (
                          <MDTypography 
                          sx={{
                            fontSize : "14px", 
                          }}>
                            - {subcategory.categoryName} ({subcategory.proportion}%)
                          </MDTypography>
                        ))}
                      </MDBox>
                    </MDBox>
                  ))}
                  
                {/* </Grid>
              </Grid> */}
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox>

      </MDBox>
      <MDBox>

      </MDBox>
    </MDBox>
  )
}

export default MyStat;
