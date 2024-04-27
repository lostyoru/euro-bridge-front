import React, { createContext, useState } from 'react';
import { TbMessage2 } from "react-icons/tb";
import { RxFileText } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { SideBarElement } from '@/types/sideBarElement';
export const SideBarContext = createContext({
  links: [
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
  ],
  settings: {
    name: 'Settings',
    icon(color: string){ 
      return (
        <MdOutlineSettings className="side-bar-icons ml-2 mr-3" style={{ color: `${color}` }} />
      )
    },
    active: false,
    link: "http://localhost:3000/profile/settings"
  },
  handleClick: (index: number):void => {},
  handleClickSettings: () => {},
  handleSideBar: (newLinks: SideBarElement[], newSetting: SideBarElement): void => {}
});