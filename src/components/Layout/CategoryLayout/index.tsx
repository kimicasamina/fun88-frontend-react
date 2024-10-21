import React from 'react'
import './style.css'
// import TopMenu from '../../Category/Menu/TopMenu'
// import BottomMenu from '../../Category/Menu/BottomeMenu'
import { Outlet } from 'react-router-dom'

export default function CategoryLayout() {
  return (
    <div className='category-layout'>
            <Outlet />
        {/* <TopMenu />
        <main className="category-main">
        </main>
        <BottomMenu /> */}
    </div>
  )
}
