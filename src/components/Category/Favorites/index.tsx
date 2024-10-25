import React from 'react'
import { GlobalContext } from '../../../context/useGlobalContext';
import { useContext } from 'react';
import { GlobalContextType } from '../../../context/useGlobalContext';
import './style.css'

export default function Favorites() {
    const {favorites, addFavorite, updateFavorites, removeFavorite} = React.useContext(GlobalContext) as GlobalContextType;
    
    console.log(favorites)
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
