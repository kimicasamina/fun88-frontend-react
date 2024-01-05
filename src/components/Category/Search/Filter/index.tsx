import React, { useState } from 'react'
import { filter } from '../../../../assets'
import './style.css'
import FilterMenu from './filterMenu'
import { gameProviders } from '../../../../constants'

export default function Filter() {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const gameCounts = 119

  return (
    <div className={`filter ${showFilter ? 'isVisible':''}`}>
        {
            showFilter ? (
                <div className="menu">
                    <img src={filter} alt="" className="filter-icon" onClick={(e) => setShowFilter((prev) => !prev)}/>
                    <p className="filter-title">Game Provider</p>
                    <span className="countCrumbs">{gameCounts}</span>
                </div>
            ):(
                <div className="menu">
                    <img src={filter} alt="" className="filter-icon" onClick={(e) => setShowFilter((prev) => !prev)}/>
                </div>
            )
        }
        {
            showFilter ? (

            <ul className="providers">
                {
                    gameProviders && gameProviders.map((item) => (
                        <li className="company" key={item.id}>
                            <img src={item.logo} alt="" className="company-img" />
                        </li>
                    ))
                }
            </ul>
            ):(null)
        }
    </div>
  )
}
