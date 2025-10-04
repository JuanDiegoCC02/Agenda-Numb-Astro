import React from 'react'
import BodyHome from '../components/BodyHome'
import NavPage from '../components/NavPage'
import CarouselHome from '../components/CarouselHome'
import FooterPage from '../components/FooterPage'

function Home() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <BodyHome/>
        <CarouselHome/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default Home