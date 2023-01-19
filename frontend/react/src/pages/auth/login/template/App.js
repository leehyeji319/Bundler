import { React, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Login from "./components/Login";
// App함수를 실행하면
function App() {
  // setIsLogin 함수로 isLogin에 대응 하는 값을 변경할 수 있게 useState 생성
  const [isLogin, setIsLogin] = useState(false);
  // setUser 함수로 user에 대응 하는 값을 변경할 수 있게 useState 생성
  const [user, setUser] = useState({});
  // 로그아웃 함수
  const logout = () => {
    // 로그아웃 함수가 실행되면 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8123/logout",
      method: "POST",
      withCredentials: true,
    })
      // 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.status === 200) {
          window.open("/auth/login", "_self");
        }
      });
  };
  // useEffect 함수가 실행되면
  useEffect(() => {
    try {
      // 아래와 같은 조건으로 axios 보냄
      axios({
        url: "http://localhost:8123/login/success",
        method: "GET",
        withCredentials: true,
      })
        // 성공하면 결과 값을 받아 isLogin, user 값 변경해줌
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            setUser(result.data);
          }
        })
        // 실패하면 error 띄움
        .catch((error) => {
          console.log(error);
        });
      // 실패하면 error 띄움
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        {/* isLogin이 있다면 로그인이 성공화면을 보여줌 */}
        {isLogin ? (
          <>
            <h3>{user.username} 님이 로그인했습니다.</h3>
            {/* 버튼을 누르면 logout 함수 실행 */}
            <button type="button" onClick={logout} className="loginButton">
              Logout
            </button>
          </>
        ) : (
          // 없다면 로그인 화면을 보여줌
          <Login />
        )}
      </header>
    </div>
  );
}
// App을 모듈로 꺼내준다
export default App;
