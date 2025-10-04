import React from 'react'
import NavPage from '../components/NavPage'
import FormTask from '../components/FormTask'
import FooterPage from '../components/FooterPage'

function FormTasks() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <FormTask/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default FormTasks