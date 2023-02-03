import { React, useState, useEffect } from "react";
import axios from "axios";
import defaultimg from "assets/images/bundler/bundler_rabbit_2.png";
import inputimg from "assets/images/bundler/input.png";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          placeholder="search"
          style={{
            backgroundImage: { inputimg },
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
          onChange={searchHandler}
        />
      </div>
      {resultId.map((item, i) => (
        <div
          // eslint-disable-next-line
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Userbox>
            <div
              style={{
                paddingTop: "15px",
                paddingBottom: "15px",
                width: "5rem",
                backgroundColor: "white",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  style={{
                    width: "80%",
                  }}
                />
              ) : (
                <img
                  src={defaultimg}
                  alt=""
                  style={{
                    width: "80%",
                  }}
                />
              )}
            </div>
            <div
              style={{
                paddingLeft: "20px",
              }}
            >
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
