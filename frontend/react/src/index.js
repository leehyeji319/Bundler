import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// import Redux
import { Provider } from "react-redux"; // redux store.js에 접근 (Provider 선언으로 Redux를 사용할 수 있다.)
import store from "redux/store/store";
import { CookiesProvider } from "react-cookie"; // CookiesProvider 선언으로 Cookie를 사용할 수 있다.

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </Provider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
