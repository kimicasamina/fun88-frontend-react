import { search } from '../../../../assets'
import './style.css'

type Props = {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({setSearchKeyword} : Props) {
  return (
    <div className="searchBar">
        <img src={search} alt="" className="search-icon" />
        <input type="text" className="search-input" onChange={(e) => setSearchKeyword(e.target.value)} />
    </div>
  )
}
