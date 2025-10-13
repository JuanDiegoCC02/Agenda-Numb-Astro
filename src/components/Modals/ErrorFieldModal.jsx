import React from 'react'
import "./styles/ErrorFieldModalStyle.css"

function ErrorFieldModal({ErrorCompleteFields}) {
  return (
    <div className='containerErrorFields'>
        <h3 className='messageCompleteFields'> {ErrorCompleteFields} </h3>
    </div>
  )
}

export default ErrorFieldModal