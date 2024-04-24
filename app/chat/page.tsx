"use client";
import React from 'react';
import Image from 'next/image';
import chat from '../../public/2.2 Dashboard - Message.png';
import SideBar from '../_components/SideBar';
const Messages = () => {


  return (
    <div className='flex flex-row w-full'>
      <SideBar />
      <div className="chat w-4/5">
        <Image src={chat} alt='chat' className='w-full' />
      </div>
    </div>
  )
}

export default Messages