"use client";
import React from 'react';
import Image from 'next/image';
import { RiSearchLine } from "react-icons/ri";
import SideBar from '../_components/SideBar';
import { useState } from 'react';
import { importedContacts } from './profile';
import Avatar from '../../public/profiles/Avatar.png';
const Messages = () => {


    const [contacts, setContacts] = useState(importedContacts);
    const handleClick = (index: number) => {
        const newContacts = contacts.map((contact, i) => {
            if (i === index) {
                contact.selected = true;
            } else {
                contact.selected = false;
            }
            return contact;
        });
        setContacts(newContacts);
    }

    return (
        <div className='flex flex-row w-full'>
            <SideBar />
            <div className="chat w-11/12 sm:w-4/5">
                <h3 className='chat-title font-bold text-3xl capitalize px-2 lg:px-10 py-10 border-b border-solid border-[#CCCCF5]'>messages</h3>
                <div className="chat flex flex-row">
                    <div className="contacts flex flex-col justify-start sm:justify-center w-full sm:w-5/12 md:w-1/3 border-r border-solid border-[#CCCCF5] py-10 px-2 lg:p-10 overflow-hidden">
                        <form className='search-contact-form flex flex-row justify-center items-center'>
                            <div className="search-input w-11/12 lg:w-full flex flex-row px-3 py-4 border border-solid border-[#CCCCF5] justify-center items-center">
                                <RiSearchLine className='lg:side-bar-icons' />
                                <input type="text" name="search-contact" id="search-contact" className='w-full text-xs lg:text-lg outline-none px-3' placeholder='Search messages' />
                            </div>
                        </form>
                        <div className="contacts py-5 w-full">
                            {contacts.map((contact, index) => (
                                <div key={index} className={`contact ${contact.selected ? 'selected-contact' : ''} flex flex-row justify-start lg:justify-center items-center border-b border-[#CCCCF5] w-full py-2 px-5 lg:p-2 cursor-pointer`} onClick={() => handleClick(index)}>
                                    <div className="contact-profile mr-1 lg:mr-3 lg:block">
                                        <Image src={contact.profile} alt={contact.name} width={50} />
                                    </div>
                                    <div className="contact-details w-full md:w-10/12 lg:w-9/12 overflow-hidden">
                                        <div className="name-time flex flex-row justify-between items-center">
                                            <p className='contact-name font-bold text-xs lg:text-base'>{contact.name}</p>
                                            <p className='contact-time text-xs lg:text-sm text-right'>{contact.lastMessageTime}</p>
                                        </div>
                                        <p className='contact-last-message text-nowrap text-sm overflow-hidden text-ellipsis my-1'>{contact.lastMessage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="messenger hidden sm:block sm:w-7/12 md:w-2/3 py-10 ">
                        <div className="recipient flex flex-row items-center pb-5 px-5">
                          <Image src={Avatar} alt={contacts[0].name} className='rounded-full' width={70} />
                          <div className="recipient-details ml-3">
                            <p className='font-bold text-xl'>Jan Mayer</p>
                            <p className='text-lg'>Recruiter at Nomad</p>
                          </div>
                        </div>

                    </div>        

                </div>
            </div>
        </div>
    )
}

export default Messages