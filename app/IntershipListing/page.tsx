'use client';
import React from 'react'
import PersistentLogin from '../components/PersistentLogin'
import RequireAuth from '../components/auth/RequireAuth'
import SideBar from '../components/SideBar'
import Link from 'next/link'
import IntershipListings from '../components/IntershipsListings/IntershipsListing'
const page = () => {
  return (
    <PersistentLogin Children={
        <RequireAuth allowedRoles={['INTERSHIP_SEEKER', 'COMPANY']}>
        <div className="flex flex-row w-full">
          <SideBar />
          <div className="settings p-8 w-full hide-y-scroll overflow-hidden h-screen">
              <div className="flex flex-row justify-between items-center">
                <h2 className='capitalize font-bold text-xl my-4 py-3'>Intership Listing</h2>
                <button
                  type="button"
                  className=" px-10 text-[#FFFFFF] font-semibold h-fit py-3  bg-primary"
                >
                  <Link href="/PostIntership" >Post Intership</Link>
                </button>
              </div>
              <hr className='w-full mt-2 h-1 mb-5'/>
              <IntershipListings />
          </div>
          </div>
        </RequireAuth>
    } />
  )
}

export default page