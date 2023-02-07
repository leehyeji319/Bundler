//
import { Outlet } from "react-router";
import { useLocation, Navigate } from "react-router-dom";
import LoadingModal from "components/LoadingModal";
//
// import AuthLogin from "pages/login";
import CheckToken from "./auth/CheckToken";
// import LoadingModal from "../component/LoadingModal";

export default function PrivateRoute() {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  console.log(isAuth);
  if (isAuth === "Failed") {
    console.log("isAuth fffffffffffff");
    return <Navigate to="/login" />;
    // eslint-disable-next-line
  } else if (isAuth === "Loading") {
    return <LoadingModal />;
  }
  return <Outlet />;
}
