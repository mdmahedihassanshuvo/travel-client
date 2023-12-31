import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import About from "../../Pages/About/About";
import Service from "../../Pages/Service/Service";
import Contact from "../../Pages/Contact Us/Contact";
import Package from "../../Pages/Package/Package";
import Profile from "../../Pages/Profile/Profile";
import Dashboard from "../../Dashboard/Dashboard";
import Plan from "../../Components/Dashboard/Plan";
import Tour from "../../Components/Dashboard/Tour";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/package",
        element: <Package />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "selectedplan",
        element: <Plan />,
      },
      {
        path: "tour",
        element: <Tour />,
      },
    ],
  },
]);

export default router;
