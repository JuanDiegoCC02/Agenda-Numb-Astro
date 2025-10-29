import React, { useState } from 'react'
import GetAdminUsers from './GetAdminUsers'
import GetAdminTasks from './GetAdminTasks'
import GetTasksCompletedAdmin from './GetTasksCompletedAdmin'
import "../styles/BodyAdministration.css"

function BodyAdministration() {
  const [activeChange, setActiveChange]= useState("users")
  return (
    <div>

    <div className='containerAdminSelect'>
        <ul className='ulSelect'>
            <li  className={activeChange === "users"? "active-change": ""} 
            onClick={()=> setActiveChange("users")} >Users</li>

            <li className={activeChange === "tasks"? "active-change":""} 
            onClick={()=> setActiveChange("tasks")} >Tasks</li>

            <li className={activeChange === "comparativeTasks"? "active-change": ""}
            onClick={()=> setActiveChange("comparativeTasks")}>Comparative Tasks</li>
        </ul>
    </div>

    <div className='containerGetAdmin'>
     {activeChange === "users" && <GetAdminUsers/>}
     {activeChange === "tasks" && <GetAdminTasks/>}
     {activeChange === "comparativeTasks" && <GetTasksCompletedAdmin/>}
    </div>

    
     
    

    </div>
  )
}

export default BodyAdministration