import { React, useState } from "react";
import axios from "axios";

function DataSearch() {
  const [SearchItem, setSearchItem] = useState("");

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   searchHandler();
  // }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
    // 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8123/search",
      method: "get",
      withCredentials: true,
      data: {
        SearchItem,
      },
    })
      // axios 요청이 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.data) {
          console.log(result);
          console.log("Success");
        }
      });
  };

  return (
    <div>
      <div>
        <input
          placeholder="search"
          style={{
            width: 200,
          }}
          value={SearchItem}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default DataSearch;
