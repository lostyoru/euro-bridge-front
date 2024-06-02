'use client';
import React from "react";
import Search from "../components/Search";
import Image from "next/image";
import FilterSection from "../components/FilterSection";
import IntershipCardAll from "../components/IntershipCardAll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter } from "@/types/filter";

export default function page() {

  const handleFilterChange = (filters: Filter[]) => {
    // Implement your logic here to filter internships based on the selected filters
    // You can update the filteredInternships state with the filtered results
    // For example:
    // const filtered = internships.filter(internship => {
    //   // Your filtering logic here
    // });
    // setFilteredInternships(filtered);
  };

  return (
    <div className="w-scrren">
      <Navbar />
      <div>
      <div className="flex flex-col justify-center items-center bg-[#F8F8FD]">
        <p className="text-[30px] leading-[4.5rem] mt-10 mb-8 font-bold w-1/3 text-center ">
          Find your {" "}
          <span className="text-[#26A4FF] relative w-fit pb-3">
            dream interships 
            <Image
              src="/Line.png"
              alt="logo"
              width={300}
              height={5}
              className="absolute left-0 right-0 bottom-0"
            />
          </span>
        </p>
        <p className="text-[#515B6F]  mr-6 text-[12px] mb-10">
          {" "}
          Find your next internship in Europe at companies like HubSpot, Nike,
          and Dropbox
        </p>

        <div className="mb-10">
          <Search />
          <p className="text-[#515B6F]">Popular : UI Designer, UX Researcher, Android, Admin</p>
        </div>
      </div>

      <div className="my-5 flex flex-row px-10">
      <FilterSection onFilterChange={handleFilterChange} />
        <div className="flex flex-col w-8/12 mx-10">
          <p className="text-[32px] font-bold mb-10">All interships</p>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
         
        </div>
      </div>
    </div>
    <Footer />  
    </div>
  );
}