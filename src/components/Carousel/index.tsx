import React from 'react'
import { banner } from '../../assets'
import './style.css'

export default function Carousel() {
  return (
    <div className='carousel'>
      <img src={banner} alt="" className="carousel-img" />
    </div>
  )
}
