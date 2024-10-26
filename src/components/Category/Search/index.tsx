import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { games } from '../../../constants'
import SearchBar from './SearchBar'
import Filter from './Filter'
import { startOutline } from '../../../assets'
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
  const [gameData, setGameData] = useState<Game[] | null>(null)
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [searchGames, setSearchGames] = useState<Game[]>([])
  const [showStar, setShowStar] = useState<boolean>(false)
  const starRef = useRef<number | null>(null)
  const {favorites, addFavorite, removeFavorite} = React.useContext(GlobalContext) as GlobalContextType;

  useEffect(() => {
    if(gameData){
      const result = gameData.filter((item) => {
        if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())){
          return item
        }
      })
      setSearchGames(result)
    }

  }, [searchKeyword])

  async function fetchData() {
    setTimeout(() => {
      console.log('games', games)
      setGameData(games)
    }, 3000)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  function handleAddToFavorites(e: React.MouseEvent<HTMLElement>, game: Game){
    e.preventDefault()
    console.log(game)
    const existingItem = favorites?.findIndex((item) => item.id === game.id)
    if(existingItem === -1){
      addFavorite(game)
    } else {
      removeFavorite(game.id)
    }
  }

  console.log("FAVORITES", favorites)

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>, id: number){
    console.log("HOVER EFFECT", e)
    console.log(starRef.current)
    setShowStar(true)
    starRef.current = id
  }

  function handleMouseLeave(){
    setShowStar(false)
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
              onMouseLeave={handleMouseLeave} onMouseEnter={(e) => handleMouseEnter(e, game.id)} >
                <img src={game.img} alt="" className="item-img" />
                <button className={`star-btn ${showStar && starRef.current == game.id ? "isVisible":""} ${favorites?.some(element => element.id === game.id) ? 'isVisible':''}`} onClick={(e) => handleAddToFavorites(e, game)}>
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
              onMouseLeave={handleMouseLeave} onMouseEnter={(e) => handleMouseEnter(e, game.id)} >
                <img src={game.img} alt="" className="item-img" />
                <button className={`star-btn ${showStar && starRef.current == game.id ? "isVisible":""}`}  onClick={(e) => handleAddToFavorites(e, game)}>
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
