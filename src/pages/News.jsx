import React from 'react'

import NavPage from '../components/NavPage'
import BodyNews from '../components/BodyNews'
import FooterPage from '../components/FooterPage'
import AgendaOfDays from '../components/AgendaOfDays'



function News() {
  return (
   <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <BodyNews/>
        <AgendaOfDays/>
        
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default News