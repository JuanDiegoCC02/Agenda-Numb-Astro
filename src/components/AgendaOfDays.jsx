import React, { useEffect, useState } from 'react'
 import { updateTasks, deleteTasks } from '../services/llamadosTasks.js'

import "../styles/AgendaOfDays.css"

function AgendaOfDays() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false)

  const [spacesForEDit, setSpacesForEdit] = useState(false)
  const [task, setTask]= useState(null)
  const [editDateTask, setEditDateTask]= useState("")
  const [editTitleTask, setEditTitleTask]= useState("")
  const [editDescriptionTask, setEditDescriptionTask]= useState("")


function newDateTask(e) {
  setEditDateTask(e.target.value)
}
function newTitleTask(e) {
  setEditTitleTask(e.target.value)
}
function newDescriptionTask(e) {
  setEditDescriptionTask(e.target.value)
}
async function editBtn(id) {
  const taskEdit ={
    "title": editTitleTask || task.title,
    "description": editDescriptionTask || task.description,
    "taskDay": editDateTask || task.taskDay
  }
  try {
    const updatedTask = await updateTasks(taskEdit, id)
    setTask(updatedTask)
    setSpacesForEdit(false)
  } catch (error) {
    console.log("Error updating task")
  }
}
function deleteBtn(id) {
  deleteTasks(id)
  setReload(!reload)
}



  // UseEffect for fetch of the tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetch tasks", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [reload]);

  // Change the Task State
  const changeTaskState = async (id, completed) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed })
      });

      // change Lc state 
      setTasks(prevTasks =>
        prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
        console.log ("Task state Change")
    } catch (error) {
      console.error("Error when Changing State:", error);
    }
  };

  if (loading){ return <p>loading task...</p>;
  }else if (tasks.length === 0){ return <p>There are no registered tasks.</p>;}

  // Assigning Tasks by date
  const tasksByDate = tasks.reduce((acc, task) => {
    if (!acc[task.taskDay]) {
      acc[task.taskDay] = [];
    }
    acc[task.taskDay].push(task);
    return acc;
  }, {});

  // Count tasks completed
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div>

      <div className='container_completeTask'> 
        <h1 className='Title_agendaTask'>Task Agenda</h1>

        <p className='counterTasks'>
          Tasks Completed: {completedCount} / {tasks.length}
        </p>

        {Object.keys(tasksByDate).map((date) => (
          <div className='container_task' key={date}>
            <h2 className='dateTasks'> {date}</h2>

            <ul className='ulByTasksDate'>
              {tasksByDate[date].map((task) => (

                <li className='liByTasksDate' key={task.id}>
                  <h3 className='titleTasks'> 
                    {task.title}
                  </h3>

                  <h5> {task.taskType} </h5>

                  <p className='descriptionTasks'>{task.description}</p>

                  <input type="checkbox" checked={task.completed}
                    onChange={() => changeTaskState(task.id, task.completed)}
                  />

                  <div>
                    <button className='btnEditTask' 
                    onClick={() => setSpacesForEdit(!spacesForEDit)}>Edit</button><br />
                    {spacesForEDit &&
                    <>
                    <input type="text" onChange={newDateTask} placeholder='Task Day' className='SpaceEditTask' />
                    <input type="text" onChange={newTitleTask} placeholder='Task Title' className='SpaceEditTask' />
                    <input type="text" onChange={newDescriptionTask} placeholder='Task Description' className='SpaceEditTask' />
                   <button className='confirmEdit' onClick={() => editBtn(task.id)}>Uptade</button>
                    </>
                    }
                  </div>
                  <div>
                    <button className='btnDeleteTask' 
                    onClick={e => deleteBtn(task.id)}>Delete</button>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default AgendaOfDays
