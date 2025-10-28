import React, { useEffect, useState } from 'react'
import { getUsers, postUsers, updateUsers, deleteUsers } from '../services/llamadosUsers.js'

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
        <div>
            <h3>Users</h3>
        </div>

        <div>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    <h5>{user.userName}</h5>
                    <span>  {user.firstName} </span><br />
                    <span> {user.lastName} </span><br />
                    <span> {user.email} </span><br />
                    <span> {user.birthday} </span><br />
                    <span> {user.typeUser} </span><br />
                     <div>
                      <button onClick={()=> userDelete (user.id)}>delete</button>
                     </div>
                </li>

                ))}
            </ul>
        </div>

       

    </div>
  )
}

export default GetAdminUsers