/*
 기본 홈 Page 구성  
 */

// Bundler Components
import HomeNavbar from "pages/home/components/HomeNavbar";
import HomeCard from "pages/home/components/homeCard";
import HomeBundle from "pages/home/components/homeBundle";

// Material Dashboard 2 React example components
import HomeLayout from "pages/home/layout";
import Footer from "examples/Footer";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";
import HomeInput from "pages/home/components/homeInput";

function Home() {
  // dummy Data Test용
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

  return (
    <HomeLayout>
      <HomeNavbar />
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
      <Footer />
    </HomeLayout>
  );
}

export default Home;
