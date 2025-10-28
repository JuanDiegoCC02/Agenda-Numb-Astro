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

       {
        localStorage.getItem("TypeUser") === "admin" && (
         <>
         <li><Link to= "/admin">Administration</Link></li>
         </>
        )
       }
      </ul>
      </div>
      
    </nav>
    {
      localStorage.getItem("TypeUser") &&
      <div>
       <button className='btnAjustes' onClick={()=> setOptions(!options)}> <img src={UserConfg} alt="" width={20} height={25} /> </button>
      {
      options &&
     <>
     <div className='containerBtnAjustes'>
       <ul className='ulBtnAjustes'>
        <li className='liBtnAjustes'><Link className='btnProfile' to="/profile">Profile</Link></li>

         <li className='liBtnAjustes'><BtnCloseProfile/></li>
       </ul>
      </div>
          </>
        }
      </div>
    }

   </div>
  )
}

export default NavPage