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
import Sports from "../components/Category/Sports";
import Favorites from "../components/Category/Favorites";
import Invite from "../components/Category/Invite";
import CasinoLive from "../components/Category/CasinoLive";
import Cashier from "../components/Category/Cashier";
import RootLayout from "../components/Layout/RootLayout/RootLayout";

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
            {
              path: "/sports",
              element: <Sports />
            },
            {
              path: "/favorites",
              element: <Favorites />
            },
            {
              path: "/invite",
              element: <Invite />
            },
            {
              path: "/casinolive",
              element: <CasinoLive />
            },
            {
              path: "/cashier",
              element: <Cashier />
            },

          ]
        }
      ],
    },
  ]);