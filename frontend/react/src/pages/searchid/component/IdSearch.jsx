import { React, useState, useEffect } from "react";
import axios from "axios";
import defaultimg from "assets/images/bundler/bundler_rabbit_2.png";
import { Userbox } from "./userbox";

function IdSearch() {
  const [SearchItem, setSearchItem] = useState("");
  const [resultId, setResultId] = useState([]);
  // searchId를 실행시켜 회원검색 진행
  const searchId = () => {
    axios({
      url: "http://localhost:8123/searchId",
      method: "get",
      params: { SearchItem },
      withCredentials: true,
    }).then((result) => {
      if (result.data) {
        // const resultId = result.data.userInfo;
        setResultId(result.data.userInfo);
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
      <input
        placeholder="search"
        style={{
          width: 200,
        }}
        onChange={searchHandler}
      />
      {resultId.map((item, i) => (
        // eslint-disable-next-line
        <div key={i}>
          <Userbox>
            {item.thumbnailUrl ? (
              <img src={item.thumbnailUrl} alt="" />
            ) : (
              // <p>asdasd</p>
              <img
                src={defaultimg}
                alt=""
                style={{
                  width: "100px",
                }}
              />
            )}
            <div>
              <h3>{item.username}</h3>
              <p>{item.email}</p>
            </div>
          </Userbox>
        </div>
      ))}
    </div>
  );
}

export default IdSearch;
