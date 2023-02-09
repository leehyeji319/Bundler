import React, { useState, useEffect } from "react";

import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";
import Button from "@mui/material/Button";
// import PropTypes from "prop-types";

// Image
import imgty from "../../../../assets/images/Profile/안태윤.png";
import imghj from "../../../../assets/images/Profile/이혜지.jpg";
import imglion from "../../../../assets/images/Profile/라이언.png";
import imgdnk from "../../../../assets/images/Profile/다나카.jpeg";
import bunny from "../../../../assets/images/bundler/bundlerRabbit.png";

function InfiniteScrollingModal2() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // const nickname = nickname;
  const dummydata = {
    userId: 1,
    followingList: [
      {
        userId: 3,
        userNickname: "khj635400",
        userProfileImageUrl: bunny,
        userIntroduction: "강효진2",
        followId: 2,
      },
      {
        userId: 5,
        userNickname: "asdfg",
        userProfileImageUrl: null,
        userIntroduction: "목목",
        followId: 5,
      },
      {
        userId: 7,
        userNickname: "안태윤",
        userProfileImageUrl: imgty,
        userIntroduction: "킹갓윤",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "라이언",
        userProfileImageUrl: imglion,
        userIntroduction: "카카오",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "이혜지",
        userProfileImageUrl: imghj,
        userIntroduction: "백엔드의 신입니다",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: imglion,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "다나카",
        userProfileImageUrl: imgdnk,
        userIntroduction: "모에모에 뀽",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드 개발자가 되고 싶어요요요요요요요요요요요요요용요요ㅛ요요요용",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
      {
        userId: 7,
        userNickname: "트렌드개발자",
        userProfileImageUrl: bunny,
        userIntroduction: "트렌드",
        followId: 99,
      },
    ],
  };
  const userId = 273;

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(`https://api.example.com/data?page=${page}`);
      const response = await fetch(`http://localhost:8080/api/v1/users/${userId}/followings`);
      const newData = await response.json();

      if (!newData.length) {
        setHasMore(false);
        return;
      }

      setData(data.concat(newData));
      setPage(page + 1);
    }

    fetchData();
  }, [page]);

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && hasMore) {
      setPage(page + 1);
    }
  };

  return (
    <MDBox // 전체 팔로잉 박스
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "800px",
        width: "550px",
        backgroundColor: "#282535",
        border: "1px solid #ffffff",
        borderRadius: "20px",
      }}
    >
      <MDBox // 글자 있는 박스
        sx={{
          width: "100%",
        }}
        style={{
          justifyContent: "center",
        }}
      >
        <MDTypography
          sx={{
            fontSize: "25px",
            marginLeft: "10%",
            marginTop: "5%",
          }}
        >
          {/* {nickname}님의 팔로잉 */}
          팔로잉 목록
        </MDTypography>
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
      <MDBox
        sx={{
          backgroundColor: "#282535",
          height: "auto",
        }}
      >
        <div onScroll={handleScroll} style={{ height: "80vh", overflow: "scroll" }}>
          {/* {data.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))} */}
          {dummydata.followingList.map((following) => (
            <MDBox
              key={following.id}
              sx={{
                height: "60px",
              }}
            >
              <MDBox
                style={{
                  flexDirection: "row",
                  // justifyContent: "space-between"
                }}
              >
                <MDAvatar
                  src={following.userProfileImageUrl}
                  sx={{
                    width: "46px",
                    height: "46px",
                    left: "35px",
                  }}
                  style={{
                    float: "left",
                  }}
                />
                <MDBox // 팔로우 이름, 자기소개
                  sx={{
                    marginLeft: "20%",
                  }}
                  style={{
                    flexDirection: "colummn",
                    float: "left",
                  }}
                >
                  <MDTypography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {following.userNickname}
                  </MDTypography>
                  <MDTypography
                    sx={{
                      fontSize: "14px",
                      color: "gray",
                    }}
                  >
                    {following.userIntroduction.slice(0, 16)}
                  </MDTypography>
                </MDBox>
                <MDBox>
                  <Button
                    variant="contained"
                    style={{
                      float: "right",
                    }}
                    sx={{
                      marginRight: "10px",
                      fontSize: "14px",
                      fontWeight: "bolder",
                      color: "#000000",
                      backgroundColor: "#81D8C3",
                    }}
                  >
                    팔로잉
                  </Button>
                </MDBox>
              </MDBox>
            </MDBox>
          ))}
          <style>
            {`
          ::-webkit-scrollbar {
            width: 0.2em;
            background-color: #282535;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: #81D8C3;
          }
          
          ::-webkit-scrollbar-track {
            background-color: #282535;
          }
          ::-webkit-scrollbar-corner {
            background-color: #282535;
          }
        `}
          </style>
          {hasMore && <div>Loading...</div>}
        </div>
      </MDBox>
    </MDBox>
  );
}
InfiniteScrollingModal2.propTypes = {
  // nickname: PropTypes.string.isRequired,
  // userId: PropTypes.number.isRequired,
};
export default InfiniteScrollingModal2;
