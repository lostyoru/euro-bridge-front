"use client";
import React from 'react';
import Image from 'next/image';
import { RiSearchLine } from "react-icons/ri";
import SideBar from '../_components/SideBar';
import { useState } from 'react';
import { importedContacts } from './profile';
import Avatar from '../../public/profiles/Avatar.png';
import selfPfp from '../../public/Avatar.png';
import { VscSend } from "react-icons/vsc";
import { JoeMessages } from '@/types/message';
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
    const messages = JoeMessages;
    console.log(messages);
    return (
        <div className='flex flex-row w-full'>
            <SideBar />
            <div className="chat w-fit sm:w-4/5 h-[650px] lg:h-[905px]">
                <h3 className='chat-title font-bold text-3xl capitalize px-2 lg:px-10 py-10 border-b border-solid border-[#CCCCF5]'>messages</h3>
                <div className="chat flex flex-row h-full relative">
                    <div className="contacts flex flex-col justify-start sm:justify-center w-full sm:w-5/12 md:w-1/3 border-r border-solid border-[#CCCCF5] py-10 px-2 lg:p-10 overflow-hidden h-full">
                        <form className='search-contact-form flex flex-row justify-center items-center'>
                            <div className="search-input w-11/12 lg:w-full flex flex-row px-3 py-4 border border-solid border-[#CCCCF5] justify-center items-center">
                                <RiSearchLine className='lg:side-bar-icons' />
                                <input type="text" name="search-contact" id="search-contact" className='w-full text-xs lg:text-lg outline-none px-3' placeholder='Search messages' />
                            </div>
                        </form>
                        <div className="contacts hide-y-scroll py-5 w-full h-full">
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

                    <div className="messenger hidden sm:block sm:w-7/12 md:w-2/3 py-10 h-full overflow-hidden relative">
                        <div className='border-b border-[#CCCCF5]'>
                            <div className="recipient flex flex-row items-center pb-5 px-5">
                            <Image src={Avatar} alt={contacts[0].name} className='rounded-full' width={70} />
                            <div className="recipient-details ml-3">
                                <p className='font-bold text-xl'>Jan Mayer</p>
                                <p className='text-lg'>Recruiter at Nomad</p>
                            </div>
                            </div>
                        </div>
                        <div className="messages-container py-5 hide-y-scroll h-5/6 mb-10">
                            <div className="reciptient-description flex flex-col justify-center items-center px-5 w-full">
                                <Image src={Avatar} alt={contacts[0].name} className='rounded-full mb-2' width={80} />
                                <div className="reciptient-details text-center border-b border-[#CCCCF5] w-full">
                                    <p className='font-bold text-2xl'>Jan Mayer</p>
                                    <p className='text-lg my-3'>Recruiter at Nomad</p>
                                    <p className='text-lg mt-3 mb-10'>This is the very beginning of your direct message with {contacts[0].name}</p>
                                </div>
                            </div>

                            <div className="messages p-5 w-full flex flex-col h-full relative mb-5">
                                {contacts[0].messages.map((message, index) => (
                                    <>
                                    <div className={`flex  ${message.user == 'Joe' ? 'flex-row self-start ' : 'flex-row-reverse self-end' } items-start  w-10/12 my-5`}>
                                        <div className={`message-pfp ${message.user == 'Joe' ? 'mr-2' : 'ml-2'} w-16 flex flex-row justify-center items-center`}>
                                            <Image src={message.user == 'Joe' ? contacts[0].profile : selfPfp} alt="pfp" width={40}/>
                                        </div>
                                        <div className="name-messages w-fit">
                                            <p className={`font-bold -translate-y-1 ${message.user == 'Joe' ? '': 'text-right'} `}>{message.user == 'Joe' ? message.user : 'You' }</p>
                                            <div className={`message p-3 w-fit border border-[#CCCCF5] ${message.user == 'Joe' ? '' : 'bg-[#F8F8FD]'} `}>
                                                <p>
                                                    {message.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                ))}
                                    </div>
                                </div>
                                <form className='send-message absolute bottom-0 w-full flex flex-row justify-center items-center p-5'>
                                    <div className="send-msg-div w-full relative flex flex-row justify-center items-center border border-solid border-[#CCCCF5] h-14">
                                        <input type="text" name="message" id="message" className='w-full h-full p-3 outline-none text-lg' placeholder='Type a message...'/>
                                        <div className="icon-msg absolute right-2 bg-[#4640DE] p-2 w-20 flex flex-row justify-center items-center h-5/6 cursor-pointer">
                                            <VscSend style={{'color': 'white'}}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Messages