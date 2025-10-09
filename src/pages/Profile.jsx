import React from 'react'
import NavPage from '../components/NavPage'
import CardProfile from '../components/CardProfile'
import FooterPage from '../components/FooterPage'
import Achievements from '../components/Achievements'

function Profile() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <CardProfile/>
        <Achievements/>
        </main>
        <footer>
        <FooterPage/>
        </footer>

    </div>
  )
}

export default Profile