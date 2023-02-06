// import { useEffect } from "react";
// import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCookieToken, removeCookieToken } from "redux/store/Cookie";
import { DELETE_TOKEN } from "redux/store/Auth";
import { logoutUser } from "apis/api/Users";

function SignOut() {
  // store에 저장된 Access Token 정보를 받아 온다
  const accessToken = useSelector((state) => state.authToken.accessToken);
  console.log(accessToken);
  console.log("5555555555555");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Cookie에 저장된 Refresh Token 정보를 받아 온다
  const refreshToken = getCookieToken();
  // eslint-disable-next-line
  const logout = async () => {
    // 백으로부터 받은 응답
    const data = await logoutUser({ refresh_token: refreshToken }, accessToken);

    if (data.status) {
      console.log("44444444444444444");
      // store에 저장된 Access Token 정보를 삭제
      dispatch(DELETE_TOKEN());
      // Cookie에 저장된 Refresh Token 정보를 삭제
      removeCookieToken();
      // return navigate("/");
      console.log(accessToken);
    }
    console.log(2333333333333333);
  };

  // 해당 컴포넌트가 요청된 후 한 번만 실행되면 되기 때문에 useEffect 훅을 사용
  // useEffect(() => {
  //   logout();
  // }, []);

  return (
    <div>
      <button type="button" onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}

export default SignOut;
