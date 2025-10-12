import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoNA from '../imagenes/LogoNA.png'
import "../styles/NavPage.css"
import BtnCloseProfile from './BtnCloseProfile'
import UserConfg from '../icons/UserConfg.png'

function NavPage() {
  const [options, setOptions]= useState(false)
  
  return (
    <div>
     <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={LogoNA} alt="Logo" />
        </Link>
      </div>

      <div className='containerNav'>
      <ul className="navbar__links">
        {
        !localStorage.getItem("TypeUser") &&(
            <>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Log In</Link></li>
        </>
        )}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
          localStorage.getItem("TypeUser") &&(
        <>
        <li><Link to="/taskForm">Task Form</Link></li>
        <li><Link to="/new">New</Link></li>
        <li><Link to="/starsmap">Star Map</Link></li>
        <li><Link to="/loot">Loot</Link> </li>
        </>
        )}
      </ul>
      </div>
      
    </nav>
    {
      localStorage.getItem("TypeUser") &&
      <div>
       <button className='' onClick={()=> setOptions(!options)}> <img src={UserConfg} alt="" width={20} height={25} /> </button>
      {
      options &&
     <>
       <ul>
        <li><Link to="/profile">Profile</Link></li>

         <li><BtnCloseProfile/></li>
       
           </ul>
          </>
        }
      </div>
    }

   </div>
  )
}

export default NavPage