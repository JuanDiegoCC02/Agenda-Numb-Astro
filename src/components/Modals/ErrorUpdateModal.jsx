import React from 'react'

function ErrorUpdateModal( {ErrorPerformUpdate}) {
  return (
    <div className='containerErrorUpdate'>
        <h3 className='mesaggeErrorUpdate'> {ErrorPerformUpdate} </h3>
    </div>
  )
}

export default ErrorUpdateModal