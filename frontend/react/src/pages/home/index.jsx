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

function Home() {
  const bundle = {
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
          { id: 1, name: "정세권", reply: "댓글 1" },
          { id: 2, name: "정둘권", reply: "댓글 2" },
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
          { cmtId: 1, name: "정세권", reply: "댓글 1" },
          { cmtId: 2, name: "정둘권", reply: "댓글 2" },
        ],
      },
    ],
  };

  return (
    <HomeLayout>
      <HomeNavbar />
      {bundle.cardList.map((card) => (
        <HomeCard
          key={card.cardId}
          image={card.cardImage}
          category={card.category}
          id={card.id}
          title={card.title}
          description={card.description}
          solution={card.solution}
          answer={card.answer}
          commentList={card.commentList}
        />
      ))}
      <HomeBundle
        bundleTitle={bundle.bundleTitle}
        bundleAuthor={bundle.bundleAuthor}
        cardList={bundle.cardList}
      />
      <Footer />
    </HomeLayout>
  );
}

export default Home;
