import Home from "views/Components/Home.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/contact", name: "LandingPage", component: LandingPage },
  { path: "/faq", name: "ProfilePage", component: ProfilePage },
  { path: "/join", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
