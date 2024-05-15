"use client";
/* eslint-disable */
import React from 'react';
import SideBar from '../components/SideBar';
import { useState } from 'react';
// import { importedContacts } from './profile';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '@/contexts/SideBar/SideBarContext';
import Contacts from '../components/Contacts';
import ContactSearch from '../components/ContactSearch';
import ContactChat from '../components/ContactChat';
import { chatProfile } from '@/types/chatProfile';
import AuthContext from '@/contexts/auth/AuthProvider';
import axios from '@/api/axios';
import { SocketProvider } from '@/contexts/socket/SocketContext';
import { Suspense } from 'react';
const Messages = () => {
    const chatWidth = 'calc(100% - 73px)';
    const { auth }: any = useContext(AuthContext);
    const [contacts, setContacts] = useState<chatProfile[]>([]);
    const allContacts = contacts;
    const { links, settings, handleClick: handleSide, handleClickSettings, handleSideBar } = useContext(SideBarContext);
    const nonSelectedContact = {
        id: -1, 
        lastMessage: '',
        lastMessageTime: '',
        contact: {
          id: -1,
          name: '',
          email: '',
          work: '',
          image: '',
          coverImage: '',
        },
        messages: [],
        selected: false, 
      };

     const [selectedContact, setSelectedContact] = useState<chatProfile>(nonSelectedContact);
     const [switchClass, setSwitchClass] = useState('hidden');
     const handleClick = (index: number) => {
        const newContacts = contacts.map((contact, i):any => {
            if (i === index) {
                contact.selected = true;
            } else {
                contact.selected = false;
            }
            return contact;
        });
    
        setContacts(newContacts);
        setSelectedContact(newContacts[index]);
    }

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            setContacts(allContacts);
            return;
        }
        const newContacts: chatProfile[] = allContacts ? allContacts.filter(contact => contact.contact.name.toLowerCase().includes(e.target.value.toLowerCase())) : [];
        setContacts(newContacts);
        const newContactsforSelection = allContacts.map((contact, i) => {
            if (contact === selectedContact) {
                contact.selected = true;
            } else {
                contact.selected = false;
            }
            return contact;
        });
        setContacts(newContacts);
        setSelectedContact(selectedContact);
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token');
    }, [auth]);

    useEffect(() => {
        const newLinks = links.map((link, index) => {
          if (index === 0) {
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
        handleSideBar(newLinks, {...settings, active: false});
    }, [auth]);

    useEffect(() => {
        const newContacts = contacts.map(contact => {
            if (contact === selectedContact) {
                contact.selected = true;
            } else {
                contact.selected = false;
            }
            return contact;
        });
        setContacts(newContacts);
    }, [selectedContact]);

    useEffect(() => {
        console.log('refresh ' , auth);
        const res = axios.get(`/users/${auth?.user?.id}/contacts`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
                },
                withCredentials: true
            }
        ).then(res => {
            console.log(res.data);
            setContacts(res.data);
        });

    }, [auth]);


    return (
        <Suspense fallback={<div>Loading contacts...</div>}>
            {auth.user && contacts.length >= 0 && (
                <SocketProvider>
                    <div className='flex flex-row w-full h-screen overflow-hidden'>
                        <SideBar />
                        <div className="chat sm:w-4/5 h-[650px] lg:h-[905px]" style={{ 'width': chatWidth}}>
                            <h3 className='chat-title font-bold text-3xl capitalize px-2 lg:px-10 py-10 border-b border-solid border-[#CCCCF5] cursor-pointer' onClick={() => setSelectedContact(nonSelectedContact)}>messages</h3>
                            <div className="chat flex flex-row h-full relative">
                                <div className="contacts flex flex-col justify-start sm:justify-center w-full sm:w-5/12 md:w-1/3 border-r border-solid border-[#CCCCF5] py-10 px-2 lg:p-10 overflow-hidden h-full">
                                    <ContactSearch handleFilter={handleFilter} />
                                    <Contacts contacts={contacts} handleClick={handleClick} />
                                </div>
                                <ContactChat contact={selectedContact} selectedContact={selectedContact} contacts={contacts} handleChangeContacts={setContacts} />
                            </div>
                        </div>
                    </div>
                    </SocketProvider>) 
                } 
        </Suspense>
    )
}

export default Messages