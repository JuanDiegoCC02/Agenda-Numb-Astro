import React from 'react'

import "../styles/BodyContact.css"

function BodyContact() {
  return (
    <div>
      <div className='containerInfoPage'>
        <h2 className='titlePage'>Numb Astro</h2><br />
        <p className='infoPage'>Numb Astro is a universe-inspired organizational tool designed to help you plan your tasks with clear deadlines and achievable goals.
         More than just a to-do list, it aims to motivate you to develop healthy habits, stay focused, and build a routine that brings you closer to your goals every day.</p>
       <p className='infoPage'> With an immersive design and a focus on well-being, Numb Astro turns your to-do list into a star map that guides you toward a more balanced and productive lifestyle.</p>
      </div>


<div className='container_AllInfoContact'>
    <div className='containerTitleC'>
        <h2 className='titleContact'>Contact Us</h2>
    </div>
<div className='containerContactPosition'>
    <div className='containerInfoContact'>
      <h4 className='titlePhone'>By Phone</h4>
      <p className='phone'>8827-0216</p>
    </div>

    <div className='containerInfoContact'>
      <h4 className='titleEmail'>By Email</h4>
      <p className='email'>NumbAstro@gmail.com</p>
    </div>
  </div>
</div>
    <div className='containerThanks'>
      <p className='textThanks'> Thank you for being part of the Numb Astro universe 💫</p>

      <p className='textThanks'> Without you, Numb Astro would be nothing more than a dream in space.
    Thank you for joining us and helping us shine. Your perseverance is what lights up the stars. 🌠</p>
    </div>

    </div>
  )
}

export default BodyContact