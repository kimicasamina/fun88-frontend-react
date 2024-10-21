import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function TopMenu() {
  return (
    <div className="top-menu">
      <Link to="/search">Search</Link>
      <Link to="/start">Start</Link>
      <Link to="/new">New</Link>
    </div>
  )
}
