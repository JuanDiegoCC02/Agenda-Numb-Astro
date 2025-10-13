import React from 'react'
import "./styles/ErrorTermsCondiModalStyle.css"

function ErrorTermsCondiModal({ErrorTC}) {
  return (
    <div>
        <div className='containerErrorTC'>
            <h3 className='messageErrorTC'> {ErrorTC} </h3>
        </div>
    </div>
  )
}

export default ErrorTermsCondiModal