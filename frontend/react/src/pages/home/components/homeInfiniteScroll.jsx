// import React, { useState, useEffect } from "react";
// import infiniteScroll from "react-infinite-scroll-component";
// import { useDispatch, useSelector } from "react-redux";

// Import - Api
import { apiGetFeed } from "apis/api/apiHomePage";

function HomeInfiniteScroll() {
  // ============== INIT 선언 ========================
  // Init declare
  // const dispatch = useDispatch();

  // ================= DATA ===========================
  // store - global 데이터
  // const { loginInfo } = useSelector((state) => state.homeReducer);

  // component - local 데이터
  // const [viewPosts, setViewPosts] = useState([]); // 리스트 내 POST
  // const [morePosts, setMorePosts] = useState(true); // 추가 POST가 있는지 확인 여부

  // ================ FUNCTION ========================
  const getPost = async () => {
    await apiGetFeed()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Function 1 - 추가 POST 불러오기
  // const getMorePosts = () => {
  //   let params = {
  //     lastPostingId: viewPosts[viewPosts.length - 1].id,
  //     userId: loginInfo.userId
  //   };
  //   // 추가 POST가 true인 경우만 함수 실행
  //   if (morePosts) {
  //     const result = actAddCard(values);
  //     dispatch(result);

  //     dispatch()
  //   }
  // };

  // ================= RETURN =========================
  return (
    <>
      <div>hello</div>
      <button type="button" onClick={getPost}>
        get Post
      </button>
    </>
  );
}

export default HomeInfiniteScroll;
