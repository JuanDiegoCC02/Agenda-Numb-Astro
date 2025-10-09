import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/CarouselHome.css";
import Consistency from '../imagenes/Constancy.png';
import Perseverance from '../imagenes/Perseverance.png';
import Focus from '../imagenes/Focus.png';

function CarouselHome() {
      const images = [
        { src: Consistency, title: "Constancy", desc: "Build habits with small daily steps." },
        { src: Perseverance, title: "Perseverance", desc: "Stay strong even when it's hard." },
        { src: Focus, title: "Focus", desc: "Direct your energy to what truly matters." }
      ];
    
      const [index, setIndex] = useState(0);
      const prevCardHome = ()=>{
        setIndex((index - 1 + images.length) % imgaenes.length)
      }
      const nextCardHome = ()=>{
        setIndex((index + 1) % images.length)
      }
     
    
  return (
    <div>

     {/* Carousel */}
      <div className='carousel'>
        <div className='card'>
          <img src={images[index].src} alt={images[index].title} />
          <h3>{images[index].title}</h3>
          <p>{images[index].desc}</p>
        </div>

        {/* Carousel Buttons */}
        <button className='prev' onClick={prevCardHome}> ❮</button>
        <button className='next' onClick={nextCardHome}> ❯</button>
      </div>


    </div>
  )
}

export default CarouselHome