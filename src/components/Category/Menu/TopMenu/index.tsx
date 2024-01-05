import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { categoryTopMenu } from '../../../../constants'


export default function TopMenu() {
  return (
    <div className="top-menu">
      {
        categoryTopMenu ? (
          categoryTopMenu.map((item) => (
            <Link to={item.link} key={item.id} className='link'>
              <img src={item.icon} alt="" className="link-icon" />
              <span className="link-name">{item.name}</span>
            </Link>
          ))
        ):(null)
      }
    </div>
  )
}
