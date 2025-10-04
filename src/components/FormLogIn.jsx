import React, { useState, useEffect } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { getUsers, postUsers, updateUsers, deleteUser } from '../services/llamadosUsers.js'
import LogoNA from '../imagenes/LogoNA.png'
import "../styles/FormLogIn.css"

function FormLogIn() {
    const [Username, setUsername]=useState("");
    const [Password, setPassword]=useState("");
    const [UsersDatas, setUsersDatas]=useState([]);
    const Navigate = useNavigate ()

    useEffect(()=>{
        async function fetchDataUser() {
            const data = await getUsers ()
            setUsersDatas(data)
        };
        fetchDataUser()
    }, []);

    function username(e) {
        setUsername(e.target.value)
    }
    function password(e) {
        setPassword(e.target.value)
    }
    function enter() {
        const found = UsersDatas.find(UserData => UserData.userName===Username && UserData.password===Password)
        if (found && found.typeUser === "User") {
            localStorage.setItem("Username", found.userName)
            localStorage.setItem("Firstname", found.firstName)
            localStorage.setItem("Lastname", found.lastName)
            localStorage.setItem("Email", found.email)
            localStorage.setItem("Birthday", found.birthday)
            localStorage.setItem("ID", found.id)
            localStorage.setItem("TypeUser", found.typeUser)
            Navigate ('/')

        } else {
            console.log ("Invalid Credentials")
        }
    }

  return (
    <div>
        <div className='container_Logo'>
            <Link to ="/">
             <img src={LogoNA} alt="Logo" style={{ width: '250px' }} />
            </Link>
        </div>

        <div className='container_title'>
            <h1 className='title_NamePage'>Numb Astro</h1>
        </div>

        <div className='container_Form'>

        <div className='container_tittleLogIn'> 
            <h3 className='tittle_LogIn'>Log In</h3>
        </div>

        <div className='container_LabelInputLogIn'>
            <label className='label_formLogIn' htmlFor="">Username</label>
            <input className='input_formLogIn' type="text" onChange={username} value={Username} />
        </div>
        
        <div className='container_LabelInputLogIn'>
            <label className='label_formLogIn' htmlFor="">Password</label>
            <input className='input_formLogIn' type="password" onChange={password} value={Password} />
        </div>
        
        <div className='container_btnEnter'>
            <input className='btnEnter' type="button" value="Enter" onClick={enter} />
        </div>

     </div>

        <div className='container_linkRegister'>
            <a className='linkRegister' href="/register">Register</a>
        </div>

    </div>
  )
}

export default FormLogIn