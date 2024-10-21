import React from 'react'
import Carousel from './Carousel'
import Notification from './Carousel/Notification'

export default function Banner() {
  return (
    <div className="banner">
      <Carousel />
      <Notification />
    </div>
  )
}
