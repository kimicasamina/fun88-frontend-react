import React from 'react'
import { search } from '../../../../assets'
import './style.css'

export default function SearchBar({setSearchKeyword}) {
  return (
    <div className="searchBar">
        <img src={search} alt="" className="search-icon" />
        <input type="text" className="search-input" onChange={(e) => setSearchKeyword(e.target.value)} />
    </div>
  )
}
