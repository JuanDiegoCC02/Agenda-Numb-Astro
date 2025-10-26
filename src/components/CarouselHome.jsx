import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/CarouselHome.css";
import homeNA from '../imagenes/homeNA.png'
import formTaskNA from '../imagenes/formTaskNA.PNG'
import getTaskNA from '../imagenes/getTaskNA.PNG'
import starsMapNA from '../imagenes/starsMapNA.PNG'
import lootNA from '../imagenes/lootNA.PNG'
import profileNa from '../imagenes/profileNa.PNG'


function CarouselHome() {
      const images = [
        { src: homeNA, title: "🌌 Welcome to Numb Astro", desc: "Your cosmic space to organize, focus, and grow. Transform your tasks into a stellar journey toward your goals. Plan with clarity, cultivate healthy habits, and find balance every day." },
        { src: formTaskNA, title: "Create Task", desc: "Create a task to generate new habit and embark on a new stellar journey." },
        { src: getTaskNA, title: "Update Task", desc: "Uptading or Marking a task to continue moving forward on the star journey." },
        { src: starsMapNA, title: "Star Map", desc: "Discover stars on the star map by completing tasks and progressing through your habits.." },
        { src: lootNA, title: "  Stellar Memories", desc: "Obtain star memories by advancing on the star map and discovering new memories left by the stars.." },
        { src: profileNa, title: "Profile", desc: "The page has a profile so that the user can see their progress and certain achievements." }
      ];
    
      const [index, setIndex] = useState(0);
      const prevCardHome = ()=>{
        setIndex((index - 1 + images.length) % images.length)
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