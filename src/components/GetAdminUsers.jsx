import React, { useEffect, useState } from 'react'
import { getUsers, postUsers, updateUsers, deleteUsers } from '../services/llamadosUsers.js'
import "../styles/GetAdminUsers.css"
import GetUsersChart from './GetUsersChart.jsx';

function GetAdminUsers() {
    const [users, setUsers]= useState([]);
    const [ editUserName, setEditUserName ] = useState("")
    const [ editFirstName, setEditFirstName ] = useState("")
    const [ editLastName, setEditLastName ] = useState("")
    const [editUserId, setEditUserId] = useState(null)
    

    const [reload, setReload]= useState(false)

    const handleEditUser = (user) =>{
        if (editUserId === user.id) {
            setEditUserId(null)
        } else {
            setEditUserId(user.id)
            setEditUserName(user.userName)
            setEditFirstName(user.firstName)
            setEditLastName(user.lastName)
        }
    }
    function editFuntionUser(id) {
        const editUser = {
            "userName":editUserName,
            "firstName":editFirstName,
            "lastName":editLastName
        } 
        updateUsers (editUser, id)
        setEditUserId (null)
        setReload(!reload)
    }

    useEffect (() => {
        async function list() {
            const dataUsers = await  getUsers()
            setUsers (dataUsers)
            console.log (dataUsers)
        }
        list()
    }, [reload] )

    async function userDelete(id) {
        await deleteUsers(id)
        setReload(!reload)
    }

    
  return (
    <div>
        <div className='containerTitleUsers'>
            <h3 className='titleUsers'>Users</h3>
        </div>

        <div className='containerInfoUser'>
            <ul className='ulUser'>
                {users.map(user => (
                <li className='liUser' key={user.id}>
                    <h5 className='titleUsername'>{user.userName}</h5>
                    <span className='InfoUser'>  {user.firstName} </span>
                    <span className='InfoUser'>  {user.lastName} </span>
                    <span className='InfoUser'> {user.email} </span>
                    <span className='InfoUser'> {user.birthday} </span>
                    <span className='InfoUser'> {user.typeUser} </span>
                     <div className='InfoUser'>
                      <button className='btnDeleteUser' onClick={()=> userDelete (user.id)}>delete</button>
                     <button
                     className='btnEditUser'
                     onClick={()=> handleEditUser(user)}
                     aria-expanded={editUserId === user.id}>
                        {editUserId === user.id? 'close edit' : 'edit'}
                     </button>
                     {editUserId === user.id && 
                     <>
                     <input className='inpEditUser' onChange={(e)=> setEditUserName(e.target.value)} value={editUserName} type="text" placeholder='Edit Username' />
                     <input className='inpEditUser' onChange={(e)=> setEditFirstName(e.target.value)} value={editFirstName} type="text" placeholder='Edit Firstname' />
                     <input className='inpEditUser' onChange={(e)=> setEditLastName(e.target.value)} value={editLastName} type="text" placeholder='Edit Lastname' />
                     <button className='btnSaveEdit' onClick={()=> editFuntionUser(user.id)}complete edit>save edit</button>
                     </>
                     }
                     </div>
                </li>

                ))}
            </ul>
        </div><br /><br />
      <div><br /><br />
       <GetUsersChart/>
     </div>  
    </div>
  )
}

export default GetAdminUsers