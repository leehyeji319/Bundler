import { configureStore } from "@reduxjs/toolkit";
// 관리할 slice를 tokenReducer로 import
import tokenReducer from "./Auth";

// Auth.jsx에 선언된 reducer를 사용하기 위해 configureStore 선언
export default configureStore({
  // 리듀서 맵. key는 액션 타입 문자열이 되고, 함수는 액션이 dispatch 될 때 실행되는 reducer
  reducer: {
    authToken: tokenReducer,
  },
});
