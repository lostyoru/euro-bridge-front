"use client";
import React, { useEffect } from 'react';
import { chatProfile } from '@/types/chatProfile';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { VscSend } from "react-icons/vsc";
import { useState } from 'react';
import { PiMessengerLogoBold } from "react-icons/pi";
import { useRef } from 'react';
type ContactChatProp = {
    contact: chatProfile;
    selfPfp: StaticImageData;
    selectedContact: chatProfile;
}

const ContactChat = (source: ContactChatProp) => {
    const { contact, selfPfp, selectedContact } = source;
    const [message, setMessage] = useState<string>('');
    const chat = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (chat.current && contact.messages.length > 0) {
          chat.current.scrollTop = chat.current.scrollHeight;
        }
        if(chat.current && contact.messages.length == 0){
            chat.current.scrollTop = 0;
        }
      }, [contact.messages, selectedContact]);
  return (
    <>
    {contact.name !== '' ? (
        <div className="messenger hidden sm:block sm:w-7/12 md:w-2/3 py-10 h-full overflow-hidden relative">
            <div className='border-b border-[#CCCCF5]'>
                <div className="recipient flex flex-row items-center pb-5 px-5">
                {contact.profile && <Image src={contact.profile} alt={contact.name} className='rounded-full' width={70} />}
                 <div className="recipient-details ml-3">
                    <p className='font-bold text-xl'>{contact.name}</p>
                    <p className='text-lg'>{contact.work}</p>
                </div>
            </div>
        </div>
        <div className="messages-container py-5 hide-y-scroll h-5/6 mb-10" ref={chat}>
        <div className="reciptient-description flex flex-col justify-center items-center px-5 w-full">
            {contact.profile && <Image src={contact.profile} alt={contact.name} className='rounded-full mb-2' width={80} />}
            <div className="reciptient-details text-center border-b border-[#CCCCF5] w-full">
                <p className='font-bold text-2xl'>{contact.name}</p>
                <p className='text-lg my-3'>{contact.work}</p>
                <p className='text-lg mt-3 mb-10'>This is the very beginning of your direct message with {contact.name}</p>
            </div>
        </div>

        <ul className="messages p-5 w-full flex flex-col h-full relative mb-5">
            {contact.messages.map((message, index) => (
                <>
                <li key={index} className={`flex  ${message.user == 'Joe' ? 'flex-row self-start ' : 'flex-row-reverse self-end' } items-start  w-10/12 my-5`}>
                    <div className={`message-pfp ${message.user == 'Joe' ? 'mr-2' : 'ml-2'} w-16 flex flex-row justify-center items-center`}>
                        {contact.profile && <Image src={message.user == 'Joe' ? contact.profile : selfPfp} alt="pfp" width={40}/>}
                    </div>
                    <div className="name-messages w-fit">
                        <p className={`font-bold -translate-y-1 ${message.user == 'Joe' ? '': 'text-right'} `}>{message.user == 'Joe' ? message.user : 'You' }</p>
                        <div className={`message p-3 w-fit border border-[#CCCCF5] ${message.user == 'Joe' ? '' : 'bg-[#F8F8FD]'} `}>
                            <p>
                                {message.message}
                            </p>
                        </div>
                    </div>
                </li>
                </>
            ))}
            </ul>
            </div>
            <form className='send-message absolute bottom-0 w-full flex flex-row justify-center items-center p-5'>
                <div className="send-msg-div w-full relative flex flex-row justify-center items-center border border-solid border-[#CCCCF5] h-14">
                    <input type="text" name="message" id="message" className='w-full h-full p-3 outline-none text-lg' placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <div className="icon-msg absolute right-2 bg-[#4640DE] p-2 w-20 flex flex-row justify-center items-center h-5/6 cursor-pointer">
                        <VscSend style={{'color': 'white'}}/>
                    </div>
                </div>
            </form>
        </div>
        ) : (
            <div className="messenger hidden sm:block sm:w-7/12 md:w-2/3 lg:flex lg:flex-col lg:justify-center lg:items-center py-10 h-full overflow-hidden relative">
                <div className="recipient-details ml-3 h-full flex flex-col justify-center items-center">
                    <PiMessengerLogoBold style={{'color': 'black'}} className='text-5xl'/>
                    <p className='font-bold text-xl'>Messenger</p>
                    <p className='text-lg'>Send a message to start a conversation</p>
                </div>
            </div>
        )}
    </>
  )
}

export default ContactChat