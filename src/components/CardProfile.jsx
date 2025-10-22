import React, { useEffect, useState } from 'react'
import { getUsers, updateUsers } from '../services/llamadosUsers.js'
import "../styles/CardProfile.css"
import ErrorUpdateModal from './Modals/ErrorUpdateModal.jsx';


function CardProfile() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);
  const IDLogueado = localStorage.getItem('ID'); 
  const personLog = localStorage.getItem("Username")
  

  const [getEditSpaces, setGetEditSpaces]= useState(false)
  
  const [editUsername, setEditUsername]= useState("")
  const [editFirstname, setEditFirstname]= useState("")
  const [editLastname, setEditLastname]= useState("")
  const [editEmail, setEditEmail]= useState("")
  const [reload, setReload] = useState(false)
  const [errorUpdate, setErrorUpdate]= useState(false)
  
  function newUsername(e) {
    setEditUsername(e.target.value)
  }
   function newFirstname(e) {
    setEditFirstname(e.target.value)
  }
   function newLastname(e) {
    setEditLastname(e.target.value)
  }
   function newEmail(e) {
    setEditEmail(e.target.value)
  }

async function editBtn(id) {
  const anyFieldChanged = 
    (editUsername && editUsername !== user.userName) ||
    (editFirstname && editFirstname !== user.firstName) ||
    (editLastname && editLastname !== user.lastName) ||
    (editEmail && editEmail !== user.email);

    if (!anyFieldChanged) {
      setErrorUpdate(true)
      return
    }

  const profileEdit ={
    "userName": editUsername || user.userName,
    "firstName": editFirstname || user.firstName,
    "lastName": editLastname || user.lastName,
    "email": editEmail || user.email
  }


  try {
     const updatedUser = await updateUsers(id, profileEdit)
    setUser(updatedUser)
    setGetEditSpaces(false)
  } catch (error) {

    setErrorUpdate(true)
    console.log("Error updating user")
  }
}



  useEffect(() => {
    async function obtainUser() {
      if (!IDLogueado) {
        console.warn("No hay ID en localStorage");
        return;
      }
      try {
        const data_users = await getUsers("http://localhost:3000/users");
        console.log("Usuarios en DB:", data_users);
        console.log("ID buscado:", IDLogueado);

        const info_User = data_users.find(u => u.id === IDLogueado);
        setUser(info_User);
        console.log("User Logueado:", info_User);
      } catch (error) {
        console.error("Failed id User:", error);
      }
    };
    

      const fetchTasks = async () => {
        try {
          const response = await fetch("http://localhost:3000/tasks");
          const data = await response.json();
          const personTasks = data.filter(task => task.userName === personLog)
          const taskCompleted = personTasks.filter((t)=> t.completed === true)
          setTasks(taskCompleted);
          setLoading(false);
          console.log(tasks)

        } catch (error) {
          console.error("Error fetch tasks", error);
          setLoading(false);
        }
      };
  
      fetchTasks();
    obtainUser();
    
  }, [IDLogueado]);

  if (!user) {
    return <p>Cargando usuario...</p>;
  }

  return (
    <div>
      {/*------Perfil-------*/}
      <div className='containerTitleProfile'><br />
        <strong className='titleProfile'> Profile </strong><br />
      </div>

      <div className='containerDataProfile'><strong className='dataProfile'>Username</strong> <br /> {user.userName}</div>
      <div className='containerDataProfile'><strong className='dataProfile'>First Name</strong> <br /> {user.firstName}</div>
      <div className='containerDataProfile'><strong className='dataProfile'>Last Name</strong> <br /> {user.lastName}</div>
      <div className='containerDataProfile'><strong className='dataProfile'>Email</strong> <br /> {user.email}</div>

      <div className='containerEditProfile'>
        <button className='btnEditProfile' onClick={() => setGetEditSpaces(!getEditSpaces)}>Edit</button> <br />
        {getEditSpaces &&
        <>
        <input type="text" onChange={newUsername} placeholder='Username' className='spaceEditProfile'/>
        <input type="text" onChange={newFirstname} placeholder='Firstname' className='spaceEditProfile'/>
        <input type="text" onChange={newLastname} placeholder='Lastname' className='spaceEditProfile'/>
        <input type="text" onChange={newEmail} placeholder='Email' className='spaceEditProfile'/>
        <button className='confirmEdit' onClick={() => editBtn(user.id)}>Update</button>

        <div>
          {
            errorUpdate &&
              <ErrorUpdateModal ErrorPerformUpdate={"Perform an Update before updating"}/> 
          }
        </div>
        </>
        }
      </div>

      <div className='containerCounterTaskProfile'>
      <p className='counterTasksProfile'>
       Stars:  <a className='numStars' href="/starsMap">{tasks.length}   </a>
      </p>

      </div>

    </div>
  )
}

export default CardProfile
