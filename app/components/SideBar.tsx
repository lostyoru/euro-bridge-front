"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import sideBarSvg from '../../public/sideBarSvg.svg';
import logo from "../../public/eurobridg.svg";
import Link from 'next/link';
import { SideBarContext } from '@/contexts/SideBar/SideBarContext';
import AuthContext from '@/contexts/auth/AuthProvider';
import { Suspense } from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '@/hooks/useLogout';
import { useRouter } from 'next/navigation';
import { INTERSHIP_SEEKER_LINKS, COMPANY_LINKS } from '@/contexts/SideBar/SideBarContext';
const SideBar = () => {
    const { auth }: any = useContext(AuthContext);
    const { links, settings, handleClick, handleClickSettings } = useContext(SideBarContext);
    const logout = useLogout();
    const router = useRouter();
    const defaultPfp = 'https://res.cloudinary.com/dekmr7qlp/image/upload/v1701910051/default-pfp_uc7yn8.jpg';
    const [pfp, setPfp] = useState(auth.user.image || defaultPfp);
    const signout = async (e:any) => {
      e.preventDefault();
      await logout();
      console.log(auth);
      router.push('/');
    }

    useEffect(() => {
      console.log(auth);
      setPfp(auth.user.image || defaultPfp);
    }, [auth]);



  return (
            <div className='side-bar text-[#7C8493] text-lg w-20 sm:w-1/5 bg-[#F8F8FD] pb-5 overflow-hidden h-screen '>
            <Link href="/"><Image src={logo} alt='logo' className='hidden sm:block w-56 mx-auto mt-5' /></Link>
            
            <ul className='side-bar-links px-2 pb-5 md:pr-5 md:pl-5 md:pb-5 border-solid border-b-2 border-[#CCCCF5]'>
    
              {links.map((link, index) => (
                <li key={index} className={`my-3 px-1 py-2 relative ${link.active ? 'active-li' : ''}`} onClick={() => handleClick(index)}>
                  <Link href={link.link} className='side-bar-elemen bg-red flex flex-row justify-arround items-center text-sm w-full h-full ml-1'>
                    {link.icon(link.active ? '#4640DE' : '#7C8493')}
                    <p className='hidden sm:block ml-1 cursor-pointer bg-blue-50 h-full'>
                      {link.name}
                    </p>
                    </Link>
                </li>
              ))}
    
            </ul>
            <div className="profile mt-3 text-center flex flex-col justify-center md:text-left md:flex-row md:justify-around items-center w-fit mx-auto md:ml-5">
              <div className="profile-pic relative z-10 rounded-full w-10 h-10 flex items-center mx-2">
                <Image src={pfp} alt="avatar" className="w-10 sm:w-14 sm:h-14 rounded-full mr-2"  width={50} height={50} layout='responsive' quality={100} />
              </div>
              <div className="profile-details py-1 text-xs md:text-sm">
                <h3 className="profile-name font-bold text-black text-xs hidden sm:block">{auth.user.name}</h3>
                <p className="profile-email hidden sm:block text-xs">{auth.user.email}</p>
              </div>
            </div>
            <div className="settings sm:p-5 relative">
              <p className='font-semibold hidden sm:block sm:text-sm lg:text-base relative z-10'>Settings</p>
              <Image src={sideBarSvg} alt='sideBarSvg' className='mt-5 absolute -right-7 -top-52' />
              <ul>
                <li className={`mt-3 py-3 px-1 relative ${settings.active ? 'active-li' : ''}`} onClick={handleClickSettings}>
                  {/* {settings.icon(settings.active ? '#4640DE' : '#7C8493') } */}
                  <Link href={settings.link} className="settings-link flex flex-row justify-around sm:justify-start items-center text-sm w-full h-full">
                    {settings.icon(settings.active ? '#4640DE' : '#7C8493') }
                    <p className='hidden sm:block ml-1'>
                    {settings.name}
                    </p>
                  </Link>
                </li>
              </ul>

              <button className="logout cursor-pointer px-1 my-3" onClick={(e) => signout(e)}>
                <RiLogoutBoxLine className="text-[#7C8493] text-lg" />
              </button>
            </div>
            
            
          </div>
  )
}

export default SideBar