import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { games } from '../../../constants'
import SearchBar from './SearchBar'
import Filter from './Filter'
import './style.css'

interface Game {
  id: number,
  name: string,
  img: string,
  link: string
}

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [searchGames, setSearchGames] = useState<Game[]>([])
  const [showFilter, setShowFilter] = useState<boolean>(false)


  useEffect(() => {
    const result = games.filter((item) => {
      if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())){
        return item
      }
    })

    setSearchGames(result)
  }, [searchKeyword])

  // const fetchData = async (api) => {

  // }

  // useEffect(() => {
  //   fetchData(api)
  // }, [])

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
              <Link to={game.link} className="item" key={game.id}>
                <img src={game.img} alt="" className="item-img" />
              </Link>
            ))
          ):(null)
        }
        {
          searchKeyword !== '' ? (
            searchGames.map((game) => (
              <Link to={game.link} className="item" key={game.id}>
                <img src={game.img} alt="" className="item-img" />
              </Link>
            ))
          ):(null)
        }
      </ul>
    </div>
  )
}
