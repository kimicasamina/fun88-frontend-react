import React from 'react'
import { GlobalContext } from '../../../context/useGlobalContext';
import { GlobalContextType } from '../../../context/useGlobalContext';
import './style.css'

export default function Favorites() {
    const {favorites} = React.useContext(GlobalContext) as GlobalContextType;
    
    
  return (
    <div className="favorites">
        <ul className="list">
            {
                favorites && favorites.length > 0 ? (
                    favorites.map((item) => (
                        <li className='item' key={item.id}>
                            <img src={item.img} alt="" className="item-img" />
                        </li>
                    ))
                ):(null)     
            }
        </ul>
    </div>
  )
}
