import {
    createBrowserRouter,
  } from "react-router-dom";
import Search from "../components/Category/Search";
import New from "../components/Category/New";
import Start from "../components/Category/Start";
import Slots from "../components/Category/Slots";
import Live from "../components/Category/Live";
import Jackpot from "../components/Jackpot";
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
            {
              path: "/slots",
              element: <Slots />
            },
            {
                path: "/live",
                element: <Live />
            },
            {
              path: "/jackpot",
              element: <Jackpot />
            },
          ]
        }
      ],
    },
  ]);