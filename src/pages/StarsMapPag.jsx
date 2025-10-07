import React from 'react'
import NavPage from '../components/NavPage'
import FooterPage from '../components/FooterPage'
import GoalsOfStars from '../components/GoalsOfStars'

function StarsMapPag() {
  return (
    <div>

        <nav>
        <NavPage/>
        </nav>
        <main>
        <GoalsOfStars/>
        </main>
        <footer>
        <FooterPage/>
        </footer>

    </div>
  )
}

export default StarsMapPag