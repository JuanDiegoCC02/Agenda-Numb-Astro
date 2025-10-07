import React, { useState } from 'react'
import { postTasks } from '../services/llamadosTasks.js'
import  "../styles/FormTask.css"

function TaskForm() {
  const [Title, setTitle]=useState("")
  const [TaskType, setTaskType]=useState("")
  const [Description, setDescription]=useState("")
  const [TaskDay, setTaskDay]=useState("")
  const [reload, setReload]= useState(false)

  function title(e) {
    setTitle(e.target.value)
  }
  function  taskType(e) {
    setTaskType(e.target.value)
  }
  function description(e) {
    setDescription(e.target.value)
  }
  function taskDay(e) {
    setTaskDay(e.target.value)
  }

  function createTask(e) {
    if (!Title || !TaskType || !Description || !TaskDay) {
      console.log ("Complete all fields to create the task")
    } else {
      postTasks(Title, TaskType, Description, TaskDay, localStorage.getItem("Username"))
      setTitle("")
      setTaskType("")
      setDescription("")
      setTaskDay("")
      console.log("Task Created")
      setReload(!reload)
    }
  }

  return (
    <div>
      
       <div className='container_TitleForm'>
        <h3 className='titleForm'>Form of Task</h3>
       </div>

        <div className='container_FormTask'>
          <h4 className='titleTask'>Create Task</h4>
          <div className='containerInputLabelTask'>
           <label className='labelTask' htmlFor="">Title</label>
           <input className='inputTask' type="text" onChange={title} value={Title}/>
          </div>

          <div>
            <label htmlFor="">Task Type</label><br />
            <select name="TaskType" id="" onChange={taskType}>
              <option value="">Select the task type</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="hobbie">Hobbie</option>
              <option value="study">Study</option>
              <option value="other">Other</option>
            </select>
          </div><br />

          <div className='containerInputLabelTask'>
           <label className='labelTask' htmlFor="">Description</label>
           <input className='inputTask' type="text" onChange={description} value={Description}/>
          </div>

          <div className='containerInputLabelTask'>
           <label className='labelTask' htmlFor="">Task Day</label>
           <input className='inputTask' type="date" onChange={taskDay} value={TaskDay}/>
          </div>

          <div className='container_BtnFormTask'>
            <input className='inputBtnFormTask' type="button" value="Create" onClick={createTask}/>                                      
          </div>

        </div>
    </div>
  )
}

export default TaskForm