import React from "react";
import Banner from "../../components/Banner";
import TopMenu from "../../components/Category/Menu/TopMenu";
import BottomMenu from "../../components/Category/Menu/BottomeMenu";
import { Outlet } from "react-router-dom";
import './style.css'

export default function Home() {
  return <div className="home">
    <Banner />
    <TopMenu />
    <main className="main">
        <Outlet />
    </main>
    <BottomMenu />
  </div>
}
