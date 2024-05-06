"use client";
/* eslint-disable */
import React, { useEffect } from 'react';
import { chatProfile } from '@/types/chatProfile';
import Image from 'next/image';
import { VscSend } from "react-icons/vsc";
import { useState } from 'react';
import { PiMessengerLogoBold } from "react-icons/pi";
import { useRef } from 'react';
import { useScrollChat } from '@/hooks/useScrollChat';
import { Message } from '@/types/message';
import { useContext } from 'react';
import AuthContext from '@/contexts/auth/AuthProvider';
import { io } from 'socket.io-client';
import axios from '@/api/axios';
type ContactChatProp = {
    contact: chatProfile;
    selectedContact: chatProfile;
}

const ContactChat = (source: ContactChatProp) => {
    const { auth }: any = useContext(AuthContext);
    const socket = io('http://localhost:3001');
    const selfPfp = auth.user.image;
    const { contact, selectedContact } = source;
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>(contact.messages);
    const chat = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useScrollChat(chat, contact, selectedContact); 
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message === '') return;
        const newMessage = {
            content: message,
            createdAt: `${new Date().toLocaleTimeString().slice(0, -3)}`,
            sender: auth.user,
            receiver: contact.contact,
        }
        const newMessages: Message[] = [...messages, newMessage];
        contact.messages = newMessages;
        socket.emit('send-message', {
            recipientEmail: contact.contact.email, 
            content: newMessage.content
        });
        console.log('Message sent!');
        setMessages(newMessages);
        console.log("new messages", newMessages);
        setMessage('');
    }


    useEffect(() => {

        const handleReceiveMessage = (data: Message) => {
            console.log('Message received!');
            console.log([...messages, {...data}]);
            const newMessages: Message[] = [...messages, {...data}];
            console.log("old messages", messages);
            console.log("new messages", newMessages);
            setMessages(newMessages);
        }
    
        socket.on('connect', () => {
            console.log('Socket connected!');
            socket.emit('join', auth.user.email );
        });
      
        socket.on('message', handleReceiveMessage);
    
        return () => {
            socket.off('message', handleReceiveMessage);
        };
    }, [socket, messages]);
  return (
    <>
    {contact.contact.name !== '' ? (
        <div className="messenger hidden sm:block sm:w-7/12 md:w-2/3 py-10 h-full overflow-hidden relative">
            <div className='border-b border-[#CCCCF5]'>
                <div className="recipient flex flex-row items-center pb-5 px-5">
                {contact.contact.image && <Image src={contact.contact.image} alt={contact.contact.name} className='rounded-full' width={70}  height={70}/>}
                 <div className="recipient-details ml-3">
                    <p className='font-bold text-xl'>{contact.contact.name}</p>
                    <p className='text-lg'>{contact.contact.work}</p>
                </div>
            </div>
        </div>
        <div className="messages-container py-5 hide-y-scroll h-5/6 mb-10" ref={chat}>
        <div className="reciptient-description flex flex-col justify-center items-center px-5 w-full">
            {contact.contact.image && <Image src={contact.contact.image} alt={contact.contact.name} className='rounded-full mb-2' width={80} height={80}/>}
            <div className="reciptient-details text-center border-b border-[#CCCCF5] w-full">
                <p className='font-bold text-2xl'>{contact.contact.name}</p>
                <p className='text-lg my-3'>{contact.contact.work}</p>
                <p className='text-lg mt-3 mb-10'>This is the very beginning of your direct message with {contact.contact.name}</p>
            </div>
        </div>

        <ul className="messages p-5 w-full flex flex-col h-full relative mb-5">
            {messages ? (messages.map((message, index) => (
                <li key={index} className={`flex  ${message.sender.email !== auth.user.email ? 'flex-row self-start ' : 'flex-row-reverse self-end' } items-start  w-10/12 my-5`}>
                    <div className={`message-pfp ${message.sender.email !== auth.user.email ? 'mr-2' : 'ml-2'} w-16 flex flex-row justify-center items-center`}>
                        {contact.contact.image && <Image src={message.sender.email !== auth.user.email ? contact.contact.image : selfPfp} alt="pfp" className='rounded-full' width={40} height={40}/>}
                    </div>
                    <div className="name-messages w-fit">
                        <p className={`font-bold -translate-y-1 ${message.sender.email !== auth.user.email ? '': 'text-right'} `}>{message.sender.email != auth.user.email ? contact.contact.name : 'You' }</p>
                        <div className={`message p-3 w-fit border border-[#CCCCF5] ${message.sender.email !== auth.user.email ? '' : 'bg-[#F8F8FD]'} `}>
                            <p>
                                {message.content}
                            </p>
                        </div>
                    </div>
                </li>
            ))):
                (
                    <li className='flex flex-row justify-center items-center w-full h-full'>
                        <PiMessengerLogoBold style={{'color': 'black'}} className='text-5xl'/>
                    </li>
                )
            }
            </ul>
            </div>
            <form className='send-message absolute bottom-0 w-full flex flex-row justify-center items-center p-5' onSubmit={(e) => sendMessage(e)} autoComplete='false'>
                <div className="send-msg-div w-full relative flex flex-row justify-center items-center border border-solid border-[#CCCCF5] h-14">
                    <input type="text" name="message" id="message" className='w-full h-full p-3 outline-none text-lg' placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} autoComplete='false' />
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