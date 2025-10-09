import React, { useEffect, useState, useTransition } from 'react'
import { getTasks } from '../services/llamadosTasks'
import "../styles/Achievements.css"

function Achievements() {
    const [tasks, setTasks]= useState([])
    const [loading, setLoading]= useState(false)
    const personLog= localStorage.getItem("Username")

    useEffect (()=>{
        async function userTasksCompleted() {
              try {
            const data = await getTasks();
            const userTasks = data.filter(task=> task.userName === personLog)
            const tasksCompleted = userTasks.filter(task=> task.completed === true)
            setTasks(tasksCompleted);
        } catch (error) {
            setLoading(true)
                console.error("Error al obtener tareas:", error);
        } 
        }
     userTasksCompleted();
    })
    function getAchievement() {
        const countStars = tasks.length;

     if (countStars === 0) {
    return "🌌✨ Start completing Tasks to get Achievements ";
  } 
  else if (countStars < 5) {
    return "🪐🚀 Stellar beginner ";
  } 
  else if (countStars < 15) {
    return "🌙✨ Astro enthusiast ";
  } 
  else if (countStars < 30) {
    return " 🌠⭐ Bearer of Starlight ";
  } 
  else {
    return "🚀🌌 Cosmic Master";
  }
        
    }

  return (
    <div>

      <div className='containerCardAchievements'> 
        <h3 className='titleAchievements'>Achievements</h3>
        
        {loading ?(
            <p>Loading achievements</p>
        ):(
            <ul className='UlAchievements'>
                <li className='LiAchievements'>
                    <p className='infoAcgievements'> {getAchievement()} </p>
                </li>
            </ul>
        )
        }

      </div>

    </div>
  )
}

export default Achievements