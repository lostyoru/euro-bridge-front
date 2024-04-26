"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import sideBarSvg from '../../public/sideBarSvg.svg';
import logo from "../../public/eurobridg.svg";
import avatar from '../../public/Avatar.png';
import Link from 'next/link';
import { SideBarContext } from './contexts/SideBar/SideBarContext';
const SideBar = () => {
    const { links, settings, handleClick, handleClickSettings } = useContext(SideBarContext);

  return (
      <div className='side-bar text-[#7C8493] text-lg w-1/5 bg-[#F8F8FD] pb-52 overflow-hidden'>
        <Link href="/"><Image src={logo} alt='logo' className='w-56 mx-auto mt-5' /></Link>
        
        <ul className='side-bar-links pr-5 pl-5 pb-20 border-solid border-b-2 border-[#CCCCF5]'>

          {links.map((link, index) => (
            <li key={index} className={`flex flex-row justify-arround items-center my-3 px-1 py-3 relative ${link.active ? 'active-li' : ''}`} onClick={() => handleClick(index)}>
              {link.icon(link.active ? '#4640DE' : '#7C8493')}
              <Link href={link.link} className='side-bar-element w-full h-full'>{link.name}</Link>
            </li>
          ))}

        </ul>
        <div className="profile mt-10 flex flex-row justify-around items-center w-4/5 mx-auto">
          <div className="profile-pic">
            <Image src={avatar} alt="avatar" className="w-14 h-14 rounded-full" />
          </div>
          <div className="profile-details py-1 text-sm">
            <h3 className="profile-name font-bold text-black text-xl">John Doe</h3>
            <p className="profile-email">jakegyll@email.com</p>
          </div>
        </div>
        <div className="settings mt-10 p-5 relative">
          <p className='font-semibold'>Settings</p>
          <Image src={sideBarSvg} alt='sideBarSvg' className='mt-5 absolute -right-7 -top-52' />
          <ul className=''>
            <li className={`flex flex-row items-center mt-8 py-3 px-1 relative ${settings.active ? 'active-li' : ''}`} onClick={handleClickSettings}>
              {settings.icon(settings.active ? '#4640DE' : '#7C8493') }
              <Link href={settings.link} className="settings-link w-full h-full">{settings.name}</Link>
            </li>
          </ul>
        </div>
        
        
      </div>
  )
}

export default SideBar