import React from 'react'
import Navbar from '../../Navbar'
import { Outlet } from 'react-router-dom'
import './style.css'

export default function RootLayouts() {
  return (
    <div className="root-layout">
      <Navbar />
      <main className="root-main">
        <Outlet />
      </main>
    </div>
  )
}
