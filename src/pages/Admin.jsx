import React from 'react'
import NavPage from '../components/NavPage'
import FooterPage from '../components/FooterPage'
import BodyAdministration from '../components/BodyAdministration'

function Admin() {
  return (
    <div>

        <nav>
        <NavPage/>
        </nav>
        <main>
       
        <BodyAdministration/>

        </main>
        <footer>
        <FooterPage/>
        </footer>


    </div>
    
  )
}

export default Admin