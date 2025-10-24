import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/CarouselHome.css";
import homePagNA from '../imagenes/homePagNA.PNG'
import formTPagNA from '../imagenes/formTPagNA.PNG'
import getTPagNA from '../imagenes/getTPagNA.PNG'
import mapPagNA from '../imagenes/mapPagNA.PNG'
import lootPagNA from '../imagenes/lootPagNA.PNG'
import profilePagNa from '../imagenes/profilePagNa.PNG'


function CarouselHome() {
      const images = [
        { src: homePagNA, title: "🌌 Welcome to Numb Astro", desc: "Your cosmic space to organize, focus, and grow. Transform your tasks into a stellar journey toward your goals. Plan with clarity, cultivate healthy habits, and find balance every day." },
        { src: formTPagNA, title: "Create a Task", desc: "Create a task to generate new habit and embark on a new stellar journey." },
        { src: getTPagNA, title: "Update or complete a Task", desc: "Uptading or Marking a task to continue moving forward on the star journey." },
        { src: mapPagNA, title: "Discover Stars", desc: "Discover stars on the star map by completing tasks and progressing through your habits.." },
        { src: lootPagNA, title: "Get Stellar Memories", desc: "Obtain star memories by advancing on the star map and discovering new memories left by the stars.." },
        { src: profilePagNa, title: "Profile", desc: "Explain profile." }
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