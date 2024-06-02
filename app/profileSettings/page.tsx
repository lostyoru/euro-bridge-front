"use client";
import React from 'react'
import SideBar from '../components/SideBar'
import Settings from '../components/Settings'
import RequireAuth from '../components/auth/RequireAuth'
import useAuth from '@/hooks/useAuth';
import PersistentLogin from '../components/PersistentLogin';
const Page = () => {
  const { auth }: any = useAuth();

  
  return (
    <PersistentLogin Children={
        <RequireAuth allowedRoles={['INTERSHIP_SEEKER', 'COMPANY']}>
        <div className="flex flex-row w-full">
          <SideBar />
          <div className="settings p-8 w-full hide-y-scroll overflow-hidden h-screen">
              <h2 className='capitalize font-bold text-xl my-4 py-3'>settings</h2>
              <hr className='w-full my-2 h-1'/>
              <Settings />
          </div>
          </div>
        </RequireAuth>
    } />
  )
}

export default Page