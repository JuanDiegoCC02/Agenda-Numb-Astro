import React from 'react'
import { getUsers, postUsers, updateUsers, deleteUser } from '../services/llamadosUsers.js'
import { Link, useNavigate } from 'react-router-dom'
import LogoNA from '../imagenes/LogoNA.png'
import "../styles/FormRegister.css"
import { useState } from 'react'

function FormRegister() {
const [Username, setUsername]=useState("");
const [Firstname, setFirstname]=useState("");
const [Lastname, setLastname]=useState(""); 
const [Email, setEmail]=useState(""); 
const [Birthday, setBirthday]=useState(""); 
const [Password, setPassword]=useState(""); 
const [TermsCondi, setTermsCondi]=useState(false);
const navigate = useNavigate ();

function userName(e) {
  setUsername(e.target.value)
}
function firstName(e) {
  setFirstname(e.target.value)
}
function lastName(e) {
  setLastname(e.target.value)
}
function email(e) {
  setEmail(e.target.value)
}
function birthday(e) {
  setBirthday(e.target.value)
}
function password(e) {
  setPassword(e.target.value)
}
function termscondiHandle(e) {
  setTermsCondi(e.target.value)
  
}
function register(e) {
  if (!Username||!Firstname||!Lastname||!Email||!Birthday||!Password) {
    console.log("Complete all fields")
  } else {
    postUsers(Username, Firstname, Lastname, Email, Birthday, Password, "User")
    navigate ('/login')
  }
}


  return (
    <div>

          <div className='container_Logo'>
            <Link to ="/">
              <img src={LogoNA} alt="logo" style={{ width: '250px' }} />
            </Link>
          </div>

          

        <div className='container_title'>
            <h1 className='title_NamePage'>Numb Astro</h1>
        </div>


      <div className='container_Form'>

        <div className='container_titleRegister'>
        <h3 className='title_Register'>Register</h3>
        </div>

        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">Username</label>
        <input className='input_FormRegister' type="text" onChange={userName} value={Username} />
        </div>
        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">First Name</label>
        <input className='input_FormRegister' type="text" onChange={firstName} value={Firstname} />
        </div>
        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">Last Name</label>
        <input className='input_FormRegister' type="text" onChange={lastName} value={Lastname} />
        </div>
        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">Email</label>
        <input className='input_FormRegister' type="email" onChange={email} value={Email} />
        </div>
        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">BirthDate</label>
        <input className='input_FormRegister' type="text" onChange={birthday} value={Birthday} />
        </div>
        <div className='container_LabelInputRegister'>
        <label className='label_FormRegister' htmlFor="">Password</label>
        <input className='input_FormRegister' type="password" onChange={password} value={Password} />
        </div>

        <div className='container_LabelCheckboxRegister'>
          <label className='label_CheckboxRegister' htmlFor="">Terms and Conditions</label>
          <input className='checkbox_FormRegister' type="checkbox" name="" id="" value={TermsCondi} onChange={termscondiHandle} />
        </div>

        <div className='container_btnRegister'> 
            <input className='btnRegister' type="button" value="Register" onClick={register} />
        </div>
      </div>

      <div className='container_linkLogIn'>
        <a className='linkLogIn' href="/login">Log In</a>
      </div>

    </div>
  )
}

export default FormRegister