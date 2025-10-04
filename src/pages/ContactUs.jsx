import React from 'react'
import NavPage from '../components/NavPage'
import FooterPage from '../components/FooterPage'
import BodyContact from '../components/BodyContact'

function ContactUs() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <BodyContact/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default ContactUs