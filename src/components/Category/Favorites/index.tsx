import React from 'react'
import { favorites } from '../../../constants'
import './style.css'

export default function Favorites() {

  return (
    <div className="favorites">
        <ul className="list">
            {
                favorites.map((item) => (
                    <li className='item'>
                        <img src={item.img} alt="" className="item-img" />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
