'use client';
import React, { Children } from 'react';
import SideBar from '../components/SideBar';
import MyApplications from '../components/MyApplications';
import RequireAuth from '../components/auth/RequireAuth';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
const Page = () => {
  const { auth }: any = useAuth();

  return (
    <RequireAuth allowedRoles={['INTERSHIP_SEEKER']} >
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
    </RequireAuth>
  )
}

export default Page