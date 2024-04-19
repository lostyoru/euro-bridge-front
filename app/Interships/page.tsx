import React from "react";
import Search from "../_components/Search";
import Image from "next/image";
import FilterSection from "../_components/FilterSection";
import IntershipCardAll from "../_components/IntershipCardAll";

export default function page() {
  return (
    <div className="p-20">
      <div className="flex flex-col justify-center items-center bg-[#F8F8FD]">
        <p className="text-[32px] leading-[4.5rem] mt-10 mb-8 font-bold font-body w-1/3 ">
          Find your{" "}
          <span className="text-[#26A4FF] ">
            {" "}
            dream interships{" "}
            <Image
              src="/Line.png"
              alt="logo"
              width={300}
              height={30}
              className="translate-x-10 ml-20 "
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
        <p className="text-[22px] font-bold mb-10">All interships</p>
        <div className="  translate-x-10 ml-20 grid grid-cols-1  gap-5  content-start justify-items-center ">
        
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png" post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
         
        </div>
      </div>
      </div>
    </div>
  );
}
