import { useState } from 'react'
import { filter } from '../../../../../assets'
import './style.css'

export default function FilterMenu() {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const gameCounts = 119

  return (
    <div className={`filtermenu ${showFilter ? 'isVisible':''}`}>
       
        {
            showFilter ? (
                <div className='filtermenu'>
                    <button className="filtermenu-btn" onClick={() => setShowFilter((prev) => prev = !prev)}>
                    <img src={filter} alt="" className="filtermenu-icon" />
                    </button>
                    <p className="filtermenu-title">Game Provider
                    </p>
                    <span className="filtermenu-crumbs">{gameCounts}</span>
                </div>
            ):(
                <button className="filtermenu-btn" onClick={() => setShowFilter((prev) => prev = !prev)}>
                <img src={filter} alt="" className="filtermenu-icon" />
            </button>
            )
        }
    </div>
  )
}
