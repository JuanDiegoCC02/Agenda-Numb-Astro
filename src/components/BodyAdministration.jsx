import React, { useState } from 'react'
import GetAdminUsers from './GetAdminUsers'
import GetAdminTasks from './GetAdminTasks'
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
        </ul>
    </div>

    <div className='containerGetAdmin'>
     {activeChange === "users" && <GetAdminUsers/>}
     {activeChange === "tasks" && <GetAdminTasks/>}
    </div>

    
     
    

    </div>
  )
}

export default BodyAdministration