// @mui material components
import MDBox from "components/MDBox";
// import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

import imgchart from "../../../../assets/images/Chart.png";

import { ResponsivePie } from '@nivo/pie'
import piedata3 from "./piedata3.json"




// Images


function MyStat() {

  const piedata = piedata3

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
        height : "5000px",
      }}>
      <MDBox // 역량통계 전체
        sx= {{
          width : "100%",
          height : "100%",
          // backgroundColor : "#282535",
        }}>
        <MDBox // 역량 통계 - 제목 및 설명
          sx = {{
            marginLeft : "20px",
            marginTop : "30px",
            // backgroundColor : "#282535",
          }}
          style = {{
            flexDirection : "row",
          }}
          >
          <MDTypography
            sx={{
              fontSize : "35px",
              float : "left",
            }}>
            역량 통계
          </MDTypography>
          <MDTypography
            sx = {{
              fontSize : "20px",
              marginLeft : "15px",
              marginTop : "15px",
              float : "left",
              Color : "gray",
            }}>
            내가 작성한 카드 기준
          </MDTypography>
        </MDBox>
        <MDBox>
          {/* <MDBox>
            <img src={imgchart} alt="chartImg" style={{ float : "left" }}/>
          </MDBox> */}
        <MDBox style = {{ 
          width : "40%",
          height : "auto",
          backgroundColor : "#282535"}}>
        <MDBox style={{ width: 'auto', height: '400px', margin: '0 auto' }}>
          <ResponsivePie
            data={piedata}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#FFFFFF"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
        </MDBox>

      </MDBox>
          <MDBox  
            sx = {{
              float : "left",
              backgroundColor : "#282535",
              width : "50%"
            }}
            >
            <MDBox>
              {/* <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}> */}
                  {StatusList.map((category)=>(
                    <MDBox
                      sx={{
                        width : "320px",
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
      <MDBox // 흰 줄
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 20px",
        }}>
      </MDBox>
      <MDBox>
        <MDBox // 활동 통계 - 제목 및 설명
          sx = {{
            marginLeft : "20px",
            marginTop : "30px",
            backgroundColor : "#282535",
          }}
          style = {{
            flexDirection : "row",
          }}
          >
          <MDTypography
            sx={{
              fontSize : "35px",
              float : "left",
            }}>
            활동 통계
          </MDTypography>
          <MDTypography
            sx = {{
              fontSize : "20px",
              marginLeft : "15px",
              marginTop : "15px",
              float : "left",
              Color : "gray",
            }}>
            번들러에서의 활동
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox>

      </MDBox>
    </MDBox>
  )
}

export default MyStat;
