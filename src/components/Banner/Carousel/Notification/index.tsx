import React from 'react'
import { bell } from '../../../assets'
import './style.css'

export default function Notification() {
    const notificationMsg = '¡FELICIDADES artxxxxipa! GANADOR DESTACADO '
  return (
    <div className="notification">
        <img src={bell} alt="" className="notification-icon" />
        <p className="notification-msg">{notificationMsg}</p>
    </div>
  )
}
