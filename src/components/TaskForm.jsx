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
        <h3 className='titleForm'>Task Form</h3>
       </div>

        <div className='container_FormTask'>
          <h4 className='titleTask'>Create Task</h4>
          <div className='containerInputLabelTask'>
           <label className='labelTask' htmlFor="">Title</label>
           <input className='inputTask' type="text" onChange={title} value={Title}/>
          </div>

          <div className='containerInputLabelTask'>
            <label className='labelTask' htmlFor="">Task Type</label>
            <select className='selectTaskForm' name="TaskType" id="" onChange={taskType}>
              <option className='optionTaskForm' value="">Select the task type</option>
              <option className='optionTaskForm' value="Personal">Personal</option>
              <option className='optionTaskForm' value="Work">Work</option>
              <option className='optionTaskForm' value="Hobbie">Hobbie</option>
              <option className='optionTaskForm' value="Study">Study</option>
              <option className='optionTaskForm' value="Other">Other</option>
            </select>
          </div>

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