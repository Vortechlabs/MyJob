
import React from 'react'
import SidebarPanel from '../../components/SidebarPanel'
import Users from '../../components/UsersTable'

function User() {
  return (
    <div className='flex justify-start flex-row w-full inset-0'>
      <SidebarPanel />
      <div>
        <Users />
      </div>
    </div>
   
  )
}

export default User