import { Link } from 'react-router-dom'
import './style.css'
import { categoryBottomMenu } from '../../../../constants'

export default function BottomMenu() {
  return (
    <div className="bottom-menu">
      {
        categoryBottomMenu ? (
          categoryBottomMenu.map((item) => (
            <Link to={item.link} key={item.id} className='link'>
              <img src={item.icon} alt="" className="link-icon" />
              <span className="link-name">{item.name}</span>
            </Link>
          ))
        ):(null)
      }
    </div>
  )
}
