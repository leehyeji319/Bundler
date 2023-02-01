import { React, useState, useEffect } from "react";
import axios from "axios";

function DataSearch() {
  const [SearchItem, setSearchItem] = useState("");
  // searchId를 실행시켜 회원검색 진행
  const searchId = () => {
    axios({
      url: "http://localhost:8123/searchId",
      method: "get",
      params: { SearchItem },
      withCredentials: true,
    }).then((result) => {
      if (result.data) {
        console.log(result.data.userInfo);
      }
    });
  };
  // input 창에 입력값이 있을 때 onchange로 실해되는 함수
  const searchHandler = (e) => {
    e.preventDefault();
    console.log("s", e.target.value);
    // SearchItem값을 e.target.value로 바꿔줌
    setSearchItem(e.target.value);
  };
  // SearchItem 값이 변경이 생길 때 실행되는 함수
  useEffect(() => {
    // console.log(SearchItem);
    // searchId를 실행시켜 회원검색 진행
    searchId();
  }, [SearchItem]);

  return (
    <div>
      <div>
        <input
          placeholder="search"
          style={{
            width: 200,
          }}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default DataSearch;
