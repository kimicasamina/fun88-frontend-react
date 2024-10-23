import React, {useEffect, useRef, useState} from 'react'
import { banner, bigBadWolf } from '../../assets'
import './style.css'

const images = [
  {
    id: 1,
    img: banner
  },
  {
    id: 2,
    img: bigBadWolf
  }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const slides = [banner, bigBadWolf]
  console.log(slides)

  function prevSlides(){
    console.log(index)
    if (index <= 0) {
      // let index = slides.length - 1;
      setIndex(slides.length - 1)
    }
    else {
      // index--
      setIndex(index - 1)
    }
  }

  function nextSlides(){
    console.log(index)
    if (index >= slides.length - 1) {
      // index = 0;
      setIndex(0)
    }
    else {
      // index++;
      setIndex(index + 1)
    }
  }


  function animateSliderInfinitely() {
    // nextSlides();
    setInterval(() => {
      nextSlides();
    }, 2000);
  }


  useEffect(() => {
    // animateSliderInfinitely()
  }, [])
  return (
    <div className='carousel'>
      <button className="prev-btn" onClick={prevSlides}>Prev</button>
      <button className="next-btn" onClick={nextSlides}>Next</button>
      <img src={slides[index]} alt="" className="carousel-img" />
    </div>
  )
}
