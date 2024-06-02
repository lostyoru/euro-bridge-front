'use client';
import React, { useEffect, useState } from 'react';
import { SideBarContext } from './SideBarContext';
import useAuth from '@/hooks/useAuth';
import { SideBarElement } from '@/types/sideBarElement';
import { TbMessage2 } from 'react-icons/tb';
import { RxFileText } from 'react-icons/rx';
import { RiSearchLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineSettings } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';
import { INTERSHIP_SEEKER_LINKS, COMPANY_LINKS } from './SideBarContext';
const SideBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth }: any = useAuth();

  const [links, setLinks] = useState<SideBarElement[]>(() => {
    if (auth?.user?.role === 'INTERSHIP_SEEKER') {
      return [
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
    } else if (auth?.user?.role === 'COMPANY') {
      return [
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
    } else {
      return [];
    }
  });

  const [settings, setSettings] = useState<SideBarElement>({
    name: 'Settings',
    icon: (color: string) => <MdOutlineSettings className="side-bar-icons mx-3 sm:ml-2 sm:mr-3" style={{ color }} />,
    active: false,
    link: 'http://localhost:3000/profileSettings'
  });

  const handleClick = (index: number) => {
    setSettings(prevSettings => ({ ...prevSettings, active: false }));
    setLinks(prevLinks =>
      prevLinks.map((link, i) => ({
        ...link,
        active: i === index
      }))
    );
  };

  const handleClickSettings = () => {
    setSettings(prevSettings => ({ ...prevSettings, active: true }));
    setLinks(prevLinks =>
      prevLinks.map(link => ({
        ...link,
        active: false
      }))
    );
  };

  const handleSideBar = (newLinks: SideBarElement[], newSetting: SideBarElement) => {
    setLinks(newLinks);
    setSettings(newSetting);
  };

  useEffect(() => {
    setLinks(auth?.user?.role === 'INTERSHIP_SEEKER' ? INTERSHIP_SEEKER_LINKS : COMPANY_LINKS);
  }, [auth]);
    

  return (
    <SideBarContext.Provider value={{ links, settings, handleClick, handleClickSettings, handleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;