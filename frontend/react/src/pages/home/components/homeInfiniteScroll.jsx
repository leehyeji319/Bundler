// Import - react
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// Import - design
import { Button, Box, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

// Import - custom
import HomeCard from "pages/home/components/homeCard";
import HomeBundle from "pages/home/components/homeBundle";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

// Import - Api
import { apiGetFeed } from "apis/api/apiHomePage";

function HomeInfiniteScroll() {
  // ============== INIT 선언 ========================
  // Init declare
  // const dispatch = useDispatch();

  // ================= DATA ===========================
  // store - dummy Data
  const feedList = [
    {
      feedType: "BUNDLE",
      bundleTitle: "번들 제목",
      bundleAuthor: "jsk33a@naver.com",
      cardList: [
        {
          cardId: 1,
          cardImage: CardImg,
          category: "문제1 > 알고리즘",
          id: "jsk33a@naver.com",
          title: "제목인데 json 형식 test 중",
          description: "이 문제에 대해 설명 하시오",
          solution: "정답~~",
          answer: "내가 쓴 답~~",
          commentList: [
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
            { id: 10, name: "정세권", reply: "댓글 1" },
            { id: 11, name: "정둘권", reply: "댓글 2" },
          ],
        },
        {
          cardId: 2,
          cardImage: CardImg,
          category: "문제2 > 알고리즘",
          id: "sdfsdfsdf@naver.com",
          title: "제목인데 json 형식 test 중",
          description: "이 문제에 대해 설명 하시오",
          solution: "정답~~",
          answer: "내가 쓴 답~~",
          commentList: [
            { id: 12, name: "정세권", reply: "댓글 1" },
            { id: 13, name: "정둘권", reply: "댓글 2" },
          ],
        },
      ],
    },
    {
      feedType: "CARD",
      cardId: 3,
      cardImage: CardImg,
      category: "문제1 > 알고리즘",
      id: "jsk33a@naver.com",
      title: "제목인데 json 형식 test 중",
      description: "이 문제에 대해 설명 하시오",
      solution: "정답~~",
      answer: "내가 쓴 답~~",
      commentList: [
        { id: 14, name: "정세권", reply: "댓글 1" },
        { id: 15, name: "정둘권", reply: "댓글 2" },
      ],
    },
    {
      feedType: "CARD",
      cardId: 4,
      cardImage: CardImg,
      category: "문제2 > 알고리즘",
      id: "sdfsdfsdf@naver.com",
      title: "제목인데 json 형식 test 중",
      description: "이 문제에 대해 설명 하시오",
      solution: "정답~~",
      answer: "내가 쓴 답~~",
      commentList: [
        { id: 16, name: "정세권", reply: "댓글 1" },
        { id: 17, name: "정둘권", reply: "댓글 2" },
      ],
    },
  ];

  // component - local 데이터
  const [value, setValue] = useState({
    start: 0,
    range: 20,
  }); // range 범위 지정
  const [viewPosts, setViewPosts] = useState([]); // 리스트 내 POST
  const [morePosts, setMorePosts] = useState(true); // 추가 POST가 있는지 확인 여부

  // ================ FUNCTION ========================
  // Function 1 - 추가 POST 불러오기
  const getMorePosts = async () => {
    // 추가 POST가 true인 경우만 함수 실행
    if (morePosts) {
      await apiGetFeed()
        .then((res) => {
          const nextPosts = res.data.slice(value.start, value.start + value.range);
          if (nextPosts.length < value.range) {
            setMorePosts(false);
          }
          setValue({
            ...value,
            start: value.start + value.range,
          });
          setViewPosts([...viewPosts, ...nextPosts]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Function - Hooks useEffect
  useEffect(() => {
    const initCall = async () => {
      await apiGetFeed()
        .then((res) => {
          const firstPosts = res.data.slice(value.start, value.start + value.range);
          if (firstPosts.length < value.range) {
            setMorePosts(false);
          }
          setValue({
            ...value,
            start: value.start + value.range,
          });
          setViewPosts([...viewPosts, ...firstPosts]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    initCall();
  }, []);

  // ================= RETURN =========================
  return (
    <div>
      {feedList.map((feed) => {
        if (feed.feedType === "CARD")
          return (
            <div key={feed.cardId}>
              <HomeCard
                image={feed.cardImage}
                category={feed.category}
                id={feed.id}
                title={feed.title}
                description={feed.description}
                solution={feed.solution}
                answer={feed.answer}
                commentList={feed.commentList}
              />
            </div>
          );
        return (
          <div key={feed.cardId}>
            <HomeBundle
              bundleTitle={feed.bundleTitle}
              bundleAuthor={feed.bundleAuthor}
              cardList={feed.cardList}
            />
          </div>
        );
      })}
      <InfiniteScroll
        dataLength={viewPosts.length} // set the length of the data.This will unlock the subsequent calls to next
        next={getMorePosts} // 페이지 로딩 중 데이터가 더 있을때 끝에서 수행 할 함수
        hasMore={morePosts} // 페이지 로딩 중 데이터가 더 있다면 true / 없다면 false
        loader={<h4>loading..</h4>}
        endMessage={
          <Box sx={{ textAlign: "center" }}>
            <Button type="button" onClick={() => window.location.replace("/home")}>
              <RestartAltIcon fontSize="large" />
              <Typography>Reloading</Typography>
            </Button>
          </Box>
        }
      >
        {viewPosts.map((post) => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default HomeInfiniteScroll;
