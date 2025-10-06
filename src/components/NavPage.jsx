import React from 'react'
import { Link } from 'react-router-dom'
import LogoNA from '../imagenes/LogoNA.png'
import "../styles/NavPage.css"

function NavPage() {
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
        <li><Link to="/news">News</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        </>
        )}
      </ul>
      </div>
    </nav>
   </div>
  )
}

export default NavPage