import { React, useState } from "react";
import "./login.css";
import axios from "axios";
// 로그인 함수를 실행해서
function Login() {
  // setEmail 함수로 email 대응 하는 값을 변경할 수 있게 useState 생성
  const [email, setEmail] = useState("");
  // setPassword 함수로 password 대응 하는 값을 변경할 수 있게 useState 생성
  const [password, setPassword] = useState("");
  // login 함수를 실행하면
  const login = () => {
    // 아래와 같은 조건으로 axios 보냄
    axios({
      url: "http://localhost:8123/login",
      method: "POST",
      withCredentials: true,
      data: { email, password },
    })
      // axios 요청이 성공한다면 200과 함께 로그인 화면을 보여줌
      .then((result) => {
        if (result.status === 200) {
          window.open("/auth/login", "_self");
        }
      });
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="inputGroup">
          {/* 이메일을 받기 위한 input */}
          <label className="inputLabel" htmlFor="emailLogin">
            email
            <input
              type="email"
              placeholder="email"
              className="inputValue"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="inputGroup">
          {/* password를 받기 위한 input */}
          <label className="inputLabel" htmlFor="passwordLogin">
            password
            <input
              type="password"
              placeholder="password"
              className="inputValue"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        {/* input 받은 정보를 보내는 버튼 / login 함수를 실행시켜 axios 요청으로 전송 */}
        <button type="button" onClick={login} className="loginButton">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
