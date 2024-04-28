"use client";
import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { useState } from 'react';
type ContactSearchProps = {
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ContactSearch = (source: ContactSearchProps) => {
    const { handleFilter } = source;
    const [search, setSearch] = useState('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        handleFilter(e);
    }
  return (
    <form className='search-contact-form flex flex-row justify-center items-center'>
        <div className="search-input w-11/12 lg:w-full flex flex-row px-3 py-4 border border-solid border-[#CCCCF5] justify-center items-center">
            <RiSearchLine className='lg:side-bar-icons' />
            <input type="text" name="search-contact" id="search-contact" className='w-full text-xs lg:text-lg outline-none px-3' placeholder='Search messages' value={search} onChange={(e) => handleSearch(e)}/>
        </div>
    </form>
  )
}

export default ContactSearch