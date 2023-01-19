import { React, useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios({
      url: "http://localhost:8123/login",
      method: "POST",
      withCredentials: true,
      data: { email, password },
    }).then((result) => {
      if (result.status === 200) {
        window.open("/auth/login", "_self");
      }
    });
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="inputGroup">
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
        <button type="button" onClick={login} className="loginButton">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
