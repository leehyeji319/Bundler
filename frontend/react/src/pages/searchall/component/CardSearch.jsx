import { React, useState } from "react";
import axios from "axios";

const PRODUCT_DATA = [
  { id: null, value: "카드 + 번들" },
  { id: "feed_card", value: "카드" },
  { id: "feed_bundle", value: "번들" },
];

function CardSearch() {
  // input에 검색어를 입력하면 setSearch 사용하여 search 변경
  const [search, setSearch] = useState("");
  // 검색어를 요청을 보내 받은 정보를 setResultId를 사용하여 resultId를 리스트 안에 저장
  // const [resultId, setResultId] = useState([]);

  // 카테고리 선택
  const [selectFeed, setSelectedFeed] = useState("");
  // onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
  const feedDropbox = (e) => {
    const { value } = e.target;
    // 상품코드에 넣을 데이터
    setSelectedFeed(PRODUCT_DATA.filter((el) => el.value === value)[0].id);
  };

  // clickSearchBtn 실행시켜 회원검색 진행
  const clickSearchBtn = () => {
    if (selectFeed === "feed_card") {
      console.log("0000000000000000");
      axios({
        url: "http://localhost:8080/api/v4/feeds/cards",
        method: "get",
        params: { search },
        withCredentials: true,
      }).then((result) => {
        if (result.data) {
          console.log(result.data);
          // const resultId = result.data.userInfo;
          // setResultId(result.data.userInfo);
        }
      });
    } else if (selectFeed === "feed_bundle") {
      console.log("1111111111111111");
      axios({
        url: "http://localhost:8080/api/v1/feeds/bundles",
        method: "get",
        params: { search },
        withCredentials: true,
      }).then((result) => {
        if (result.data) {
          console.log(result.data);

          // const resultId = result.data.userInfo;
          // setResultId(result.data.userInfo);
        }
      });
    } else {
      console.log("222222222222222");
      axios({
        url: "http://localhost:8080/api/v4/feeds/cards",
        method: "get",
        params: { search },
        withCredentials: true,
      }).then((result) => {
        if (result.data) {
          console.log(result.data);
          // const resultId = result.data.userInfo;
          // setResultId(result.data.userInfo);
        }
      });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 검색어 입력 */}
        <input
          placeholder="search"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "16px",
            paddingLeft: "30px",
            borderRadius: "15px",
            border: "0px",
            display: "block",
            margin: "15px",
            width: "70%",
            color: "white",
            fontSize: "18px",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={clickSearchBtn}
          sx={{
            bgcolor: "#81D8CF",
            color: "#000000",
            fontSize: "midium",
            fontWeight: "bold",
          }}
          variant="contained"
          fullWidth
        >
          검색하기
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 카테고리 */}
        <select onChange={feedDropbox}>
          {PRODUCT_DATA.map((el) => (
            <option key={el.id}>{el.value}</option>
          ))}
        </select>
        {/* 카테고리별 저장값 */}
        <div>
          <p>{selectFeed}</p>
        </div>
      </div>
    </div>
  );
}

export default CardSearch;
