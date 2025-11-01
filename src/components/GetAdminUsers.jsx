import React, { useEffect, useState } from 'react'
import { getUsers, postUsers, updateUsers, deleteUsers } from '../services/llamadosUsers.js'
import "../styles/GetAdminUsers.css"
import GetUsersChart from './GetUsersChart.jsx';

function GetAdminUsers() {
    const [users, setUsers]= useState([]);
    

    const [reload, setReload]= useState(false)

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
                    <span className='InfoUser'>  {user.firstName} </span><br />
                    <span className='InfoUser'>  {user.lastName} </span><br />
                    <span className='InfoUser'> {user.email} </span><br />
                    <span className='InfoUser'> {user.birthday} </span><br />
                    <span className='InfoUser'> {user.typeUser} </span><br />
                     <div className='InfoUser'>
                      <button className='btnDeleteUser' onClick={()=> userDelete (user.id)}>delete</button>
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