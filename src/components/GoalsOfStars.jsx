import React, { useEffect, useState } from 'react'
import { getTasks } from '../services/llamadosTasks'
import StarsMap from "./StarsMap";
import "../styles/GoalsOfStars.css";

function GoalsOfStars() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    async function loadTasks() {
      const allTasks = await getTasks();
      const personLog = localStorage.getItem("Username")
      const personTasks = allTasks.filter(task => task.userName === personLog)
      const taskCompleted = personTasks.filter((t) => t.completed === true);

      setTasks(taskCompleted);
    }
    loadTasks();
  }, []);

  // 📍 Posición aleatoria para cada estrella
  const randomPosition = () => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
  });
  return (
          <div className="goals-board">
      <h2 className="goals-title">🌌 Galaxia de Tareas Completadas</h2>

      <div className="stars-container">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="star"
            style={randomPosition()}
            onClick={() => setSelectedTask(task)}
            title={task.title}
          ></div>
        ))}
      </div>

      {selectedTask && (
        <StarsMap goal={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  )
}

export default GoalsOfStars