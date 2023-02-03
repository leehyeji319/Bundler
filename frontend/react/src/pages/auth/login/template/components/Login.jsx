import { React, useState } from "react";
import "./login.css";
import axios from "axios";

import apiPostLogin from "apis/api/apiAuth";
// @mui material components
import { Button } from "@mui/material/";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

// 로그인 함수를 실행해서
function Login() {
  // setEmail 함수로 email 대응 하는 값을 변경할 수 있게 useState 생성
  const [username, setEmail] = useState("");
  // setPassword 함수로 password 대응 하는 값을 변경할 수 있게 useState 생성
  const [password, setPassword] = useState("");
  // login 함수를 실행하면
  const requestLogin = async () => {
    await apiPostLogin(username, password).then((res) => {
      if (res.status === 200) {
        window.open("/auth/login", "_self");
      }
    });
  };

  return (
    <div>
      <div className="inputGroup">
        {/* 이메일을 받기 위한 input */}
        <label className="inputLabel" htmlFor="emailLogin">
          email
          <input
            type="email"
            placeholder="email"
            className="inputValue"
            onChange={(e) => setEmail(e.target.value)}
            value={username}
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
      <Button
        // 버튼을 클릭하면 login을 실행한다
        onClick={requestLogin}
        sx={{
          bgcolor: "#81D8CF",
          color: "#000000",
          fontSize: "midium",
          fontWeight: "bold",
        }}
        variant="contained"
        fullWidth
      >
        로그인
      </Button>
    </div>
  );
}

export default Login;
