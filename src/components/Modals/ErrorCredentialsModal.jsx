import React from 'react'
import "./styles/ErrorCredentialsModalStyle.css"

function ErrorCredentialsModal({ErrorCredent}) {
  return (
    <div>
        <div className='containerCredentials'>
            <h3 className='messageCredentials'> {ErrorCredent} </h3>
        </div>
    </div>
  )
}

export default ErrorCredentialsModal