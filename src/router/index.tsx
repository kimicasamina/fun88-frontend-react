import {
    createBrowserRouter,
  } from "react-router-dom";
import Search from "../components/Category/Search";
import New from "../components/Category/New";
import Start from "../components/Category/Start";
import Home from "../pages/Home";
import RootLayout from "../components/Layout/RootLayout/RootLayout";
import CategoryLayout from "../components/Layout/CategoryLayout";

export const router = createBrowserRouter([
    {   
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "/search",
              element: <Search />,
            },
            {
                path: "/start",
                element: <Start />
            },
            {
                path: "/new",
                element: <New />
            },
          ]
        }
      ],
    },
  ]);