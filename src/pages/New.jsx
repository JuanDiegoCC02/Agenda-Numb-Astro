import React from 'react'

import NavPage from '../components/NavPage'

import FooterPage from '../components/FooterPage'
import AgendaOfDays from '../components/AgendaOfDays'



function New() {
  return (
   <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <AgendaOfDays/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default New