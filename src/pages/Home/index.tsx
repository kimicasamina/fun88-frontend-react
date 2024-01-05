import React from "react";
import Carousel from "../../components/Carousel";
import Notification from "../../components/Notification";
import TopMenu from "../../components/Category/Menu/TopMenu";
import BottomMenu from "../../components/Category/Menu/BottomeMenu";
import { Outlet } from "react-router-dom";
import './style.css'


export default function Home() {
  return <div className="home">
    <Carousel />
    <Notification />
    <TopMenu />
    <main className="main">
      <Outlet />
    </main>
    <BottomMenu />
  </div>
}
