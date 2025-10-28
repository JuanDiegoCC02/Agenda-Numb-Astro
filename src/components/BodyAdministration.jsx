import React from 'react'
import GetAdminUsers from './GetAdminUsers'

function BodyAdministration() {
  return (
    <div>

    <div>
        <ul>
            <li>Users</li>
            <li>Tasks</li>
        </ul>
    </div>

    <div>
      <GetAdminUsers/>
    </div>

    </div>
  )
}

export default BodyAdministration