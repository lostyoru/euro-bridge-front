"use client";
import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import Image from "next/image";
import FilterSection from "../components/FilterSection";
import IntershipCardAll from "../components/IntershipCardAll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar"; // Import the SideBar component
import { Internship, SelectedFilters } from '@/types/filter';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import useAuth from '@/hooks/useAuth';

export default function Page() {
  const { auth }: any = useAuth();
  const [internships, setInternships] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredInternships, setFilteredInternships] = useState<any>([]);
  const [filters, setFilters] = useState<SelectedFilters>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const axiosPrivate = useAxiosPrivate();

  const handleFilterChange = (filters: SelectedFilters) => {
    console.log('Filters changed:', filters);
    setFilters(filters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axiosPrivate.get('/intership/all');
        console.log('Fetched internships:', response.data);
        setInternships(response.data);
        setFilteredInternships(response.data); // Update filteredInternships as well
        setLoading(false); // Set loading to false when data fetching is complete
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    };

    fetchInternships();
  }, [auth]); // Empty dependency array to fetch internships only once on component mount

  useEffect(() => {
    console.log('Applying filters...');
    console.log('Current filters:', filters);
    console.log('Current search term:', searchTerm);

    const filtered = internships.filter((internship: any) => {
      console.log('Checking internship:', internship);

      // Check filters
      for (let key in filters) {
        if (filters[key]?.length && !filters[key].includes(String(internship[key as keyof Internship]))) {
          console.log(`Internship ${internship.title} does not match filter ${key}:`, filters[key]);
          return false;
        }
      }

      // Check search term
      if (
        searchTerm &&
        !internship.title?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !internship.location?.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        console.log(`Internship ${internship.title} does not match search term:`, searchTerm);
        return false;
      }

      return true;
    });

    console.log('Filtered internships:', filtered);
    setFilteredInternships(filtered);
  }, [filters, searchTerm, internships]);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex">
        <div>
          <div className="flex flex-col justify-center items-center bg-[#F8F8FD]">
            {/* Your existing search and filter components */}
            <p className="text-[30px] leading-[4.5rem] mt-10 mb-8 font-bold w-1/3 text-center ">
              Find your{" "}
              <span className="text-[#26A4FF] relative w-fit pb-3">
                dream internships
                <Image
                  src="/Line.png"
                  alt="logo"
                  width={300}
                  height={5}
                  className="absolute left-0 right-0 bottom-0"
                />
              </span>
            </p>
            <p className="text-[#515B6F] mr-6 text-[12px] mb-10">
              Find your next internship in Europe at companies like HubSpot, Nike,
              and Dropbox
            </p>

            <div className="mb-10">
              <Search onChange={handleSearchChange} />
              <p className="text-[#515B6F]">Popular: UI Designer, UX Researcher, Android, Admin</p>
            </div>
          </div>

          <div className="my-5 flex flex-row px-10">
            <FilterSection onFilterChange={handleFilterChange} />
            <div className="flex flex-col w-8/12 mx-10">
              <p className="text-[32px] font-bold mb-10">All internships</p>
              {loading ? (
                <p>Loading...</p>
              ) : (
                filteredInternships.map((internship: any, index: any) => (
                  <IntershipCardAll
                    key={index}
                    image={internship.company?.user?.image} 
                    post={internship.title}
                    location={internship.location}
                    intership={internship}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
