"use client"
import React from 'react'
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
import Link from 'next/link';
import { SideBarContext } from './SideBarContext';
function SideBarProvider({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [links, setLinks] = useState<SideBarElement[]>([
        {
          name: 'Messages',
          icon(color: string){ 
            return (
              <TbMessage2 className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: true,
          link: "http://localhost:3000/chat"
        },
        {
          name: 'My Applications',
          icon(color: string){ 
            return (
              <RxFileText className='mx-3 side-bar-icons'  style={{ color: `${color}` }}/>
            )
          },
          active: false,
          link: "http://localhost:3000/myapp"
        },
        {
          name: 'Find Interships',
          icon(color: string){ 
            return (
              <RiSearchLine className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false,
          link: "http://localhost:3000/Intershipsauth"
        },
        {
          name: 'Browse Companies',
          icon(color: string){ 
            return (
              <TbBuildingSkyscraper className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false,
          link: "http://localhost:3000/Companiesauth"
        },
        {
          name: 'My Public Profile',
          icon(color: string){ 
            return (
              <IoPersonOutline className='mx-3 side-bar-icons' style={{ color: `${color}` }}/>
            )
          },
          active: false,
          link: "http://localhost:3000/profile"
        }
      ])
    
      const [settings, setSettings] = useState<SideBarElement>({
        name: 'Settings',
        icon(color: string){ 
          return (
            <MdOutlineSettings className="side-bar-icons mx-3 sm:ml-2 sm:mr-3" style={{ color: `${color}` }} />
          )
        },
        active: false,
        link: "http://localhost:3000/profile/settings"
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
        console.log("the side bar state changed")
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
        console.log("the state changed")
      }

      const handleSideBar = (newLinks: SideBarElement[]) => {
        console.log("changing state");
        setLinks(newLinks);
      }
  return (
    <SideBarContext.Provider value={{ links, settings, handleClick, handleClickSettings }}>
    {children}
    </SideBarContext.Provider>
  )
}

export default SideBarProvider