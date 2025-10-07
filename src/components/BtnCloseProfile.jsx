import React from 'react'
import { useNavigate } from 'react-router-dom'

function BtnCloseProfile() {
    const navigate = useNavigate()
    const closeUser = ()=>{
        localStorage.clear();
        navigate('/logIn')
    }
  return (
    <div className='containerCloseSession'>
        <button className='btnCloseSession' onClick={closeUser}>Close Session</button>
    </div>
  )
}

export default BtnCloseProfile