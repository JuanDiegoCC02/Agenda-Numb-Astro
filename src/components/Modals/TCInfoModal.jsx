import React from 'react'
import "./styles/TCInfoModalStyle.css"

function TCInfoModal({InfoTC}) {
  return (
    <div>
        <div className='containerInfoTC'>
            <h3 className='messageInfoTC'> {InfoTC} </h3>
        </div>
    </div>
  )
}

export default TCInfoModal