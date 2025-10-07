import React from 'react'

import NavPage from '../components/NavPage'
import BodyNew from '../components/BodyNew'
import FooterPage from '../components/FooterPage'
import AgendaOfDays from '../components/AgendaOfDays'



function New() {
  return (
   <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <BodyNew/>
        <AgendaOfDays/>
        
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default New