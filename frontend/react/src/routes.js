/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
// import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "pages/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// Bundler Project Pages import
import Home from "pages/home";
import Search from "pages/searchall";
import SearchId from "pages/searchid";
import Make from "pages/make";
import Profile from "pages/profile";
import AuthLogin from "pages/auth/login";
import SignUp from "pages/signup";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "홈",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "검색",
    key: "search",
    icon: <Icon fontSize="small">travel_explore_icon</Icon>,
    route: "/search",
    component: <Search />,
  },
  {
    type: "collapse",
    name: "아이디 검색",
    key: "searchid",
    icon: <Icon fontSize="small">person_search</Icon>,
    route: "/searchid",
    component: <SearchId />,
  },
  {
    type: "collapse",
    name: "만들기",
    key: "make",
    icon: <Icon fontSize="small">create</Icon>,
    route: "/make",
    component: <Make />,
  },
  {
    type: "collapse",
    name: "프로필",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "로그인",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/auth/login/",
    component: <AuthLogin />,
  },
  {
    type: "collapse",
    name: "회원가입",
    key: "signup",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/signup/",
    component: <SignUp />,
  },
];

export default routes;
