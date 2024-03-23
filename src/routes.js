import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//pages
import {
  AddUser,
  Dashboard,
  ForgotPassword,
  Login,
  Page404,
  Profile,
  Register,
  Settings,
  Users,
} from "./pages";
import Manu from "./pages/Manu/Manu";
import Catagory from "./pages/Catagory/Catagory";
import MyFavorites from "./pages/MyFavorites/MyFavorites";
import Random from "./pages/Random/Random";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "users", element: <Users /> },
        { path: "users/add-user", element: <AddUser /> },
        { path: "profile", element: <Profile /> },
        { path: "settings", element: <Settings /> },
        { path: "manu", element: <Manu /> },
        { path: "manu/catagory/:id", element: <Catagory /> },
        { path: "my_favorites", element: <MyFavorites /> },
        { path: "random", element: <Random /> },

        ,
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
