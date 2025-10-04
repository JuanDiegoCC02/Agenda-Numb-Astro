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

      <ul className="navbar__links">
        
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/formTasks">Tasks Form</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
   </div>
  )
}

export default NavPage