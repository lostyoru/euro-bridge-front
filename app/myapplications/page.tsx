import React from 'react'
import SideBar from '../components/SideBar'
import MyApplications from '../components/MyApplications'
const page = () => {
  return (
    <div className="flex flex-row w-full">
        <SideBar />
        <div className="settings p-8 w-full hide-y-scroll overflow-hidden h-screen">
            <h2 className='capitalize font-bold text-2xl my-4 py-3'>My Applications</h2>
            <hr className='w-full my-2 h-1'/>
            <div className='py-5'>
                <h2 className='text-xl font-bold my-5'>Keep it up, Jake</h2>
                <MyApplications />
            </div>
        </div>
    </div>
  )
}

export default page