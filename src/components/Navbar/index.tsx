import React from 'react'
import { menu, wallet, logo, user } from '../assets'
import './style.css'

export default function Navbar() {
  const moneyAmount = 1990.6
  return (
    <nav className="navbar">
        <div className="branding">
          <img src={menu} alt="" className="" />
          <img src={logo} alt="" className="" />
        </div>
        <div className="account">
          <div className="wallet">
            <img src={wallet} alt="" className="" />
            <p className="">${moneyAmount}</p>
          </div>
          <img src={user} alt="" className="avatar" />
        </div>
    </nav>
  )
}
