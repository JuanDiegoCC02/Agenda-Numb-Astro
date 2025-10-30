import React, { useEffect, useState } from 'react'
 import { updateTasks, deleteTasks } from '../services/llamadosTasks.js'
import "../styles/AgendaOfDays.css"
import ErrorUpdateModal from './Modals/ErrorUpdateModal.jsx';

function AgendaOfDays() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false)

  const [editForTaskID, setEditForTaskID] = useState(null)
  const [task, setTask]= useState(null)
  const [editDateTask, setEditDateTask]= useState("")
  const [editTitleTask, setEditTitleTask]= useState("")
  const [editDescriptionTask, setEditDescriptionTask]= useState("")
  const [filterType, setFilterType]= useState("All")
  const [errorUpdate, setErrorUpdate]= useState(false)


function newDateTask(e) {
  setEditDateTask(e.target.value)
}
function newTitleTask(e) {
  setEditTitleTask(e.target.value)
}
function newDescriptionTask(e) {
  setEditDescriptionTask(e.target.value)
}

/*Function edit with validations and select TaskID */
async function editBtn(id) {
  const anyFieldChanged = 
  (editTitleTask && editTitleTask !== task.title)||
  (editDescriptionTask && editDescriptionTask !== task.description)||
  (editDateTask && editDateTask !== task.taskDay)
  if (!anyFieldChanged) {
    setErrorUpdate(true)
    return
  }
  const taskEdit ={
    "title": editTitleTask || task.title,
    "description": editDescriptionTask || task.description,
    "taskDay": editDateTask || task.taskDay
  }
  try {
    const updatedTask = await updateTasks(taskEdit, id)
    setTask(updatedTask)

    setTasks(prev => 
      prev.map(task =>(task.id === id ? { ...task, ...updatedTask}: task))
    )
    setEditForTaskID(null)
    setReload(true)
   
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

        const personLog = localStorage.getItem("Username")
        const personTasks = data.filter(task => task.userName === personLog)
        setTasks(personTasks);
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


      // Change Lc state 
      setTasks(prevTasks =>
        prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
        console.log ("Task state Change")
    } catch (error) {
      console.error("Error when Changing State:", error);
    }
  };

  if (loading){ return <p>loading task...</p>;
  }else if (tasks.length === 0){ return <p>There are no registered tasks.</p>;}

  /* Select typeTask by filter */
  const filteredTasks =
  filterType === "All"
    ? tasks
    : tasks.filter(task => task.taskType === filterType);


  const sortedTasks = [...filteredTasks].sort((a, b) => new Date(b.taskDay) - new Date(a.taskDay));


  // Assigning Tasks by date
 const tasksByDate = sortedTasks.reduce((acc, task) => {
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
  <div className='containerTitleAgendaT'>
   <h1 className='Title_agendaTask'>Task Agenda</h1>
  </div>
  
  <div className='container_completeTask'> 
   

     <p className='counterTasks'>Tasks Completed: {completedCount} / {tasks.length} </p>

     <div className='containerNavTasks'>
      <ul className='ulNavTasks'>
        {["All", "Personal", "Work", "Hobbie", "Study", "Other"].map((type)=>(
           <li
                key={type}
                className={`liNavTasks ${filterType === type ? "activeNav" : ""}`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </li>
        ))}
     

      </ul>
    </div>
          

        {Object.keys(tasksByDate).map((date) => (
          <div className='container_task' key={date}>
            <h2 className='dateTasks'> {date}</h2>

            <ul className='ulByTasksDate'>
              {tasksByDate[date].map((task) => (

                <li className='liByTasksDate' key={task.id}>
                  <h3 className='titleTasks'> 
                    {task.title}
                  </h3>

                  <h5 className='getTaskType'>Task Type: {task.taskType} </h5>

                  <p className='descriptionTasks'>{task.description}</p>

                 

                  <div className='containerBtnsED'>
                   <label htmlFor="">Task Completed :</label>
                  <input type="checkbox" checked={task.completed}
                    onChange={() => changeTaskState(task.id, task.completed)}/> 


                  <div className='containerBtnEdit'>
                    <button className='btnEditTask' 
                    onClick={() =>{setTask(task);  setEditForTaskID(editForTaskID === task.id? null : task.id )}}>Edit</button>
                    {editForTaskID === task.id && 
                    <><br />
                    <input type="date" onChange={newDateTask} placeholder='Task Day' className='SpaceEditTask' />
                    <input type="text" onChange={newTitleTask} placeholder='Task Title' className='SpaceEditTask' />
                    <input type="text" onChange={newDescriptionTask} placeholder='Task Description' className='SpaceEditTask' />
                   <button className='confirmEdit' onClick={() => editBtn(task.id)}>Uptade</button>
                    <div>
                      {
                        errorUpdate && 
                        <ErrorUpdateModal ErrorPerformUpdate={"Perform an Update before updating"}/> 
                      }
                    </div>
                    </>
                    }

                  </div>

                  <div className='containerBtnDelete'>
                    <button className='btnDeleteTask' 
                    onClick={e => deleteBtn(task.id)}>Delete</button>
                  </div>
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
