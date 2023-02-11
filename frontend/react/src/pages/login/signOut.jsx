import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { getCookieToken, removeCookieToken } from "redux/store/Cookie";
import { DELETE_TOKEN } from "redux/store/Auth";
import { logoutUser } from "apis/api/Users";

function SignOut() {
  // store에 저장된 Access Token 정보를 받아 온다
  const accessToken = useSelector((state) => state.authToken.accessToken);
  console.log(accessToken);
  console.log("5555555555555");

  const dispatch = useDispatch();

  // Cookie에 저장된 Refresh Token 정보를 받아 온다
  const refreshToken = getCookieToken();
  // eslint-disable-next-line
  const logout = async () => {
    // 백으로부터 받은 응답
    const data = await logoutUser(refreshToken, accessToken);

    if (data.status) {
      console.log("44444444444444444");
      // store에 저장된 Access Token 정보를 삭제
      dispatch(DELETE_TOKEN());
      // Cookie에 저장된 Refresh Token 정보를 삭제
      removeCookieToken();

      console.log(accessToken);
      window.open("/login", "_self");
    }
  };

  return (
    <div>
      <Button
        onClick={() => logout()}
        className="learn-more2"
        sx={{
          marginTop: "0%",
          bgcolor: "#81D8CF",
          color: "#000000",
          fontSize: "medium",
          fontWeight: "bold",
        }}
        type="button"
      >
        logout
      </Button>
    </div>
  );
}

export default SignOut;
