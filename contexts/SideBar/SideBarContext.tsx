// SideBarContext.tsx
import React, { createContext, useState } from 'react';
import { SideBarElement } from '@/types/sideBarElement';
import { TbMessage2 } from 'react-icons/tb';
import { RxFileText } from 'react-icons/rx';
import { RiSearchLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineSettings } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';

type ContextType = {
  links: SideBarElement[];
  settings: SideBarElement;
  handleClick: (index: number) => void;
  handleClickSettings: () => void;
  handleSideBar: (newLinks: SideBarElement[], newSetting: SideBarElement) => void;
};

export const SideBarContext = createContext<ContextType>({
  links: [],
  settings: {
    name: '',
    icon: (color: string) => <></>,
    active: false,
    link: ''
  },
  handleClick: () => {},
  handleClickSettings: () => {},
  handleSideBar: () => {},
});


export const INTERSHIP_SEEKER_LINKS = [
  {
    name: 'Messages',
    icon: (color: string) => <TbMessage2 className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/chat'
  },
  {
    name: 'My Applications',
    icon: (color: string) => <RxFileText className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/myapplications'
  },
  {
    name: 'Find Interships',
    icon: (color: string) => <RiSearchLine className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/Intershipsauth'
  },
  {
    name: 'Browse Companies',
    icon: (color: string) => <TbBuildingSkyscraper className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/Companiesauth'
  },
  {
    name: 'My Public Profile',
    icon: (color: string) => <IoPersonOutline className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/MyProfile'
  }
];

export const COMPANY_LINKS = [
  {
    name: 'Messages',
    icon: (color: string) => <TbMessage2 className='mx-3 side-bar-icons' style={{ color }} />,
    active: true,
    link: 'http://localhost:3000/chat'
  },
  {
    name: 'Company Profile',
    icon: (color: string) => <IoPersonOutline className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/MyProfile'
  },
  {
    name: 'Intership Listing',
    icon: (color: string) => <LuClipboardList className='mx-3 side-bar-icons' style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/IntershipListing'
  }
];