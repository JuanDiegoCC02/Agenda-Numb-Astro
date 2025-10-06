import React from 'react'
import NavPage from '../components/NavPage'
import TaskForm from '../components/TaskForm'
import FooterPage from '../components/FooterPage'

function TaskFormPag() {
  return (
    <div>
        <nav>
        <NavPage/>
        </nav>
        <main>
        <TaskForm/>
        </main>
        <footer>
        <FooterPage/>
        </footer>
    </div>
  )
}

export default TaskFormPag