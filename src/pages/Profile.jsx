import React from 'react'
import NavPage from '../components/NavPage'
import CardProfile from '../components/CardProfile'
import FooterPage from '../components/FooterPage'

function Profile() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <CardProfile/>
        </main>
        <footer>
        <FooterPage/>
        </footer>

    </div>
  )
}

export default Profile