import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { games } from '../../../constants'
import { useContext } from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import { star, startOutline } from '../../../assets'
import './style.css'
import { GlobalContext } from '../../../context/useGlobalContext'
import { GlobalContextType } from '../../../context/useGlobalContext'
interface Game {
  id: number,
  name: string,
  img: string,
  link: string
}



export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [searchGames, setSearchGames] = useState<Game[]>([])
  const [showStar, setShowStar] = useState<boolean>(false)
  const starRef = useRef(null)
  const {favorites, addFavorite, updateFavorites, removeFavorite} = React.useContext(GlobalContext) as GlobalContextType;

  useEffect(() => {
    const result = games.filter((item) => {
      if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())){
        return item
      }
    })

    setSearchGames(result)
  }, [searchKeyword])

  function handleAddToFavorites(e, game: Game){
    e.preventDefault()
    console.log(game)
    addFavorite(game)
  }

  console.log("FAVORITES", favorites)

  function handleMouseEnter(id){
    console.log("HOVER EFFECT", id)
    console.log(starRef.current)
    setShowStar((prev) => prev = true)
    starRef.current = id
  }

  function handleMouseLeave(id){
    setShowStar((prev) => prev = false)
    starRef.current = null
  }


  return (
    <div className="search container">
      <div className="top">
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <Filter  />
      </div>
      <ul className="list">
        {
          searchKeyword === '' && games ? (
            games.map((game) => (
              <Link to={game.link} className="item" key={game.id} 
              onMouseLeave={(e) => handleMouseLeave(game.id)} onMouseEnter={(e) => handleMouseEnter(game.id)} >
                <img src={game.img} alt="" className="item-img" />
                <button className={`star-btn ${showStar && starRef.current == game.id ? "isVisible":""} ${favorites.some(element => element.id === game.id) ? 'isVisible':''}`} ref={starRef} onClick={(e) => handleAddToFavorites(e, game)}>
                  <img src={startOutline} alt="" className="star-icon" />
                </button>
              </Link>
            ))
          ):(null)
        }
        {
          searchKeyword !== '' ? (
            searchGames.map((game) => (
              <Link to={game.link} className="item" key={game.id} 
              onMouseLeave={(e) => handleMouseLeave(game.id)} onMouseEnter={(e) => handleMouseEnter(game.id)} >
                <img src={game.img} alt="" className="item-img" />
                <button className={`star-btn ${showStar && starRef.current == game.id ? "isVisible":""}`} ref={starRef} onClick={(e) => handleAddToFavorites(e, game)}>
                  <img src={startOutline} alt="" className="star-icon" />
                </button>
              </Link>
            ))
          ):(null)
        }
      </ul>
    </div>
  )
}
