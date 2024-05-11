import React from "react";
import Search from "../_components/Search";
import Image from "next/image";
import FilterSection from "../_components/FilterSection";
import IntershipCardAll from "../_components/IntershipCardAll";

export default function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F8F8FD]">
        <p className="text-[30px] leading-[4.5rem] mt-10 mb-8 font-bold w-1/3 ">
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
        <p className="text-[#515B6F]  mr-6 text-[12px] mb-20">
          {" "}
          Find your next internship in Europe at companies like HubSpot, Nike,
          and Dropbox
        </p>

        <Search />
      </div>

      <div className=" py-8 px-20 mx-10 flex flex-row">
      <FilterSection />
        <div className="px-10">
        <p className="text-[32px] font-bold mb-10">All interships</p>
        <div className=" grid grid-cols-1  gap-5  content-start justify-items-center ">
        
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Social Media Assistant" location=" Paris Hamburg . germany"/>
         
        </div>
      </div>
      </div>
    </div>
  );
}