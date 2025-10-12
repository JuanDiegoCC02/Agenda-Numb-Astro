import React from 'react'
import FooterPage from '../components/FooterPage'
import NavPage from '../components/NavPage'
import BodyLoot from '../components/BodyLoot'

function LootPag() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <BodyLoot/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default LootPag