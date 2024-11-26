
import React from 'react'
import SidebarPanel from '../../components/SidebarPanel'
import Users from '../../components/UsersTable'
import JobVacanciesTable from '../../components/JobVacanciesTable'

function Dashboard() {
  return (
    <div className='flex justify-start flex-row w-full inset-0'>
      <SidebarPanel />
      <div>
        <JobVacanciesTable />
      </div>
    </div>
   
  )
}

export default Dashboard