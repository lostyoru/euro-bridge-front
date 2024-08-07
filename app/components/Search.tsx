"use client";
import React from 'react'
import countriesData from '@/data/countries.json';
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { useState } from 'react';

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search() {
  const [countries, setCountries] = useState(countriesData.countries);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='w-fit shadow-sm px-5 py-3 bg-white my-3'>
       <form action="" className='flex flex-row justify-between items-center h-full '>
          <div className="flex flex-row justify-center items-start h-10 mr-4 border-b">
            <FiSearch className='text-gray-400 self-center search-icons' />
            <input
              type="text"
              placeholder='Search'
              className='w-50 ml-1 p-2 h-full border-none focus:outline-none'
              // onChange={onChange}
            />
          </div>

          <div className='flex flex-row h-10 justify-center items-center'>
            <SlLocationPin className='text-gray-400 text-lg mr-2 search-icons' />
            <select className='h-full w-50 border-b outline-none'>
              <option value="">Select a country</option>
              {filteredCountries.map((country, index) => (
                <optgroup key={index} label={country.name}>
                  {country.cities.map((city, idx) => (
                    <option key={idx} value={`${city}, ${country.name}`}>{`${city}, ${country.name}`}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="px-10 py-2 text-[#FFFFFF]  bg-primary mx-3 text-lg"
          >
            Search
          </button>
       </form>
    </div>
  )
}

export default Search
