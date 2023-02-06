//
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import LoadingModal from "components/LoadingModal";
//
import AuthLogin from "pages/login";
import CheckToken from "./auth/CheckToken";
// import LoadingModal from "../component/LoadingModal";

export default function PrivateRoute() {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  console.log(isAuth);
  if (isAuth === "Failed") {
    console.log("isAuth fffffffffffff");
    return <AuthLogin />;
    // eslint-disable-next-line
  } else if (isAuth === "Loading") {
    return <LoadingModal />;
  }
  return <Outlet />;
}
