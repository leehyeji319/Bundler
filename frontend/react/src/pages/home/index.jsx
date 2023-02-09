/*
 기본 홈 Page 구성  
 */

// Import - layout
import HomeLayout from "pages/home/layout";
import Footer from "examples/Footer";

// Import - custom
import HomeNavbar from "pages/home/components/HomeNavbar";
import HomeInfiniteScroll from "pages/home/components/homeInfiniteScroll";

function Home() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <HomeInfiniteScroll />
      <Footer />
    </HomeLayout>
  );
}

export default Home;
