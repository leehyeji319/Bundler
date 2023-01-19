import { React, useState } from "react";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isLogin ? <p>로그인성공</p> : <Login setIsLogin={setIsLogin} />}
      </header>
    </div>
  );
}

export default App;
