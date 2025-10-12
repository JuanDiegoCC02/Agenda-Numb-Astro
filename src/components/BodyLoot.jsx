import React, { useEffect, useState } from 'react'
import { getMemoryStars } from '../services/llamadosMemoryStars'
import { getTasks } from '../services/llamadosTasks'
import "../styles/BodyLoot.css";


function BodyLoot() {
    const [starsM, setStarsM ]= useState([])
    const [tasks, setTasks]= useState([])
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false)
    

    useEffect(() => {
        getMemoryStars()
      .then(data => setStarsM(data))
      .catch(err => console.error("Error loading memoryStars:", err))
  }, [])

  useEffect (() => {
    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            const personLog = localStorage.getItem("Username")
            const personTasks = data.filter(task => task.userName === personLog)
            setTasks(personTasks)
            

        } catch (error) {
            console.error("Error fetch tasks", error);
            setLoading(false)
        }
    }
    fetchTasks()
  },[reload])
  
  const completedTasks = tasks.filter(task => task.completed).length
  const unlockedCount = Math.floor(completedTasks / 5)
  const unlockedStars = starsM.slice(0, unlockedCount)

  return (
<div>
  <div className='containerTitleBdLoot'>
    <h3 className='titleBdLoot'>Star Loot</h3>
  </div>

     <div className='containerBdLoot'>
     <ul className='ulBdLoot'>
        {unlockedStars.length > 0 ? (
          unlockedStars.map((star, index) => (
            <li key={star.id || index} className='liBdLoot'>
              <h3 className='titleMtStar'>{star.title}</h3>
              <p className='descMtStar'>{star.description}</p>
            </li>
          ))
        ) : (
          <p className='MsjFaield'>Complete tasks to unlock your Star-Loot ✨</p>
        )}
      </ul>
     </div>

 </div>
  )
}

export default BodyLoot