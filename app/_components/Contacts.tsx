import { chatProfile } from '@/types/chatProfile'
import React, { useRef } from 'react'
import Image from 'next/image'
type ContactsProp = {
    contacts: chatProfile[],
    handleClick: (index: number) => void
}
const Contacts = (source: ContactsProp) => {
    const { contacts, handleClick } = source;
  return (
    <ul className="contacts hide-y-scroll py-5 w-full h-full mt-3">
    {contacts.map((contact, index) => (
        <li key={index} className={`contact ${contact.selected ? 'selected-contact' : ''} flex flex-row justify-start lg:justify-center items-center border-b border-[#CCCCF5] w-full py-2 px-5 lg:p-2 cursor-pointer`} onClick={() => handleClick(index)}>
            <div className="contact-profile mr-1 lg:mr-3 lg:block">
                {contact.profile && <Image src={contact.profile} alt={contact.name} width={50} />}
            </div>
            <div className="contact-details w-full md:w-10/12 lg:w-9/12 overflow-hidden">
                <div className="name-time flex flex-row justify-between items-center">
                    <p className='contact-name font-bold text-xs lg:text-base'>{contact.name}</p>
                    <p className='contact-time text-xs lg:text-sm text-right'>{contact.lastMessageTime}</p>
                </div>
                <p className='contact-last-message text-nowrap text-sm overflow-hidden text-ellipsis my-1'>{contact.lastMessage}</p>
            </div>
        </li>
    ))}
    </ul>
  )
}

export default Contacts