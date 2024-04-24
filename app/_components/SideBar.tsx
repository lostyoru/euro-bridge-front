import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { TbMessage2 } from "react-icons/tb";
import { RxFileText } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import sideBarSvg from '../../public/sideBarSvg.svg';
import logo from "../../public/eurobridg.svg";
import avatar from '../../public/Avatar.png';
import { SideBarElement } from '@/types/sideBarElement';
const SideBar = () => {

    const [links, setLinks] = useState<SideBarElement[]>([
        {
          name: 'Messages',
          icon(color: string){ 
            return (
              <TbMessage2 className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: true
        },
        {
          name: 'My Applications',
          icon(color: string){ 
            return (
              <RxFileText className='mx-3 side-bar-icons'  style={{ color: `${color}` }}/>
            )
          },
          active: false
        },
        {
          name: 'Find Interships',
          icon(color: string){ 
            return (
              <RiSearchLine className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false
        },
        {
          name: 'Browse Companies',
          icon(color: string){ 
            return (
              <TbBuildingSkyscraper className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false
        },
        {
          name: 'My Public Profile',
          icon(color: string){ 
            return (
              <IoPersonOutline className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false
        }
      ])
    
      const [settings, setSettings] = useState<SideBarElement>({
        name: 'Settings',
        icon(color: string){ 
          return (
            <MdOutlineSettings className="side-bar-icons ml-2 mr-3" style={{ color: `${color}` }} />
          )
        },
        active: false
      })
    
      const handleClick = (index: number) => {
        setSettings({
          ...settings,
          active: false
        });
        const newLinks = links.map((link, i) => {
          if (i === index) {
            return {
              ...link,
              active: true
            }
          } else {
            return {
              ...link,
              active: false
            }
          }
        })
    
        setLinks(newLinks)
      }
    
      const handleClickSettings = () => {
        setSettings({
          ...settings,
          active: true
        });
        const newLinks = links.map((link) => {
          return {
            ...link,
            active: false
          }
        })
    
        setLinks(newLinks)
      }

  return (
      <div className='side-bar text-[#7C8493] text-lg w-1/5 bg-[#F8F8FD] pb-52 overflow-hidden'>
        <Image src={logo} alt='logo' className='w-56 mx-auto mt-5' />
        <ul className='side-bar-links pr-5 pl-5 pb-20 border-solid border-b-2 border-[#CCCCF5]'>

          {links.map((link, index) => (
            <li key={index} className={`flex flex-row justify-arround items-center my-3 px-1 py-3 relative ${link.active ? 'active-li' : ''}`} onClick={() => handleClick(index)}>
              {link.icon(link.active ? '#4640DE' : '#7C8493')}
              <a href='#' className='side-bar-element'>{link.name}</a>
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
              <a href="#" className="settings-link">{settings.name}</a>
            </li>
          </ul>
        </div>
        
        
      </div>
  )
}

export default SideBar