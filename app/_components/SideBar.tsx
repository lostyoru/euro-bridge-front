"use client"
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import sideBarSvg from '../../public/sideBarSvg.svg';
import logo from "../../public/eurobridg.svg";
import Link from 'next/link';
import { SideBarContext } from '@/contexts/SideBar/SideBarContext';
import AuthContext from '@/contexts/auth/AuthProvider';
import axios from '@/api/axios';

const SideBar = () => {
    const { auth }: any = useContext(AuthContext);
    const { links, settings, handleClick, handleClickSettings } = useContext(SideBarContext);
    const avatar = auth.user.image;

  return (
    <>
      {auth.user && (
            <div className='side-bar text-[#7C8493] text-lg w-20 sm:w-1/5 bg-[#F8F8FD] pb-52 overflow-hidden '>
            <Link href="/"><Image src={logo} alt='logo' className='hidden sm:block w-56 mx-auto mt-5' /></Link>
            
            <ul className='side-bar-links px-2 pb-10 md:pr-5 md:pl-5 md:pb-20 border-solid border-b-2 border-[#CCCCF5]'>
    
              {links.map((link, index) => (
                <li key={index} className={`my-3 px-1 py-3 relative ${link.active ? 'active-li' : ''}`} onClick={() => handleClick(index)}>
                  <Link href={link.link} className='side-bar-element flex flex-row justify-arround items-center sm:text-xs md:text-sm lg:text-lg w-full h-full'>
                    {link.icon(link.active ? '#4640DE' : '#7C8493')}
                    <p className='hidden sm:block'>
                      {link.name}
                    </p>
                    </Link>
                </li>
              ))}
    
            </ul>
            <div className="profile mt-10 text-center flex flex-col justify-center md:text-left md:flex-row md:justify-around items-center w-4/5 mx-auto ">
              <div className="profile-pic relative z-10 rounded-full h-14 w-14">
                <Image src={avatar} alt="avatar" className="w-10 sm:w-14 sm:h-14 rounded-full mr-2"  width={40} height={40} layout='responsive' loading='lazy' quality={80} />
              </div>
              <div className="profile-details py-1 text-xs md:text-sm">
                <h3 className="profile-name font-bold text-black text-xs hidden sm:block sm:text-sm lg:text-xl">{auth.user.name}</h3>
                <p className="profile-email hidden sm:block">{auth.user.email}</p>
              </div>
            </div>
            <div className="settings mt-10 sm:p-5 relative">
              <p className='font-semibold hidden sm:block sm:text-sm lg:text-base relative z-10'>Settings</p>
              <Image src={sideBarSvg} alt='sideBarSvg' className='mt-5 absolute -right-7 -top-52' />
              <ul>
                <li className={`mt-8 py-3 px-1 relative ${settings.active ? 'active-li' : ''}`} onClick={handleClickSettings}>
                  {/* {settings.icon(settings.active ? '#4640DE' : '#7C8493') } */}
                  <Link href={settings.link} className="settings-link flex flex-row justify-around sm:justify-start items-center sm:text-xs md:text-sm lg:text-lg w-full h-full">
                    {settings.icon(settings.active ? '#4640DE' : '#7C8493') }
                    <p className='hidden sm:block'>
                    {settings.name}
                    </p>
                  </Link>
                </li> 
              </ul>
            </div>
            
            
          </div>)}
    </>
  )
}

export default SideBar

