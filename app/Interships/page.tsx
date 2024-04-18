import React from "react";
import Search from "../_components/Search";
import Image from "next/image";
import FilterSection from "../_components/FilterSection";
import IntershipCardAll from "../_components/IntershipCardAll";

export default function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F8F8FD] h-[400px]">
        <p className="text-[35px] leading-[4.5rem] mt-10 mb-8 font-bold font-body w-1/3 ">
          Find your{" "}
          <span className="text-[#26A4FF] ">
            {" "}
            Dream interships{" "}
            <Image
              src="/Line.png"
              alt="logo"
              width={300}
              height={30}
              className="translate-x-20 ml-20 "
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

      <div className=" bg- py-8 px-20 mx-10 flex flex-row h-[1100px]  ">
      <FilterSection />
        <div>
        <h1 className="text-[22px] font-bold translate-x-20 mx-12 mb-10"> all interships</h1>
        <div className="  translate-x-10 ml-20 grid grid-cols-1 h-56  gap-5  content-start justify-items-center mr-20 ">
        
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
          <IntershipCardAll post="Socail Media Assistant" location=" Paris Hamburg . germany"/>
         
        </div>
      </div>
      </div>
    </div>
  );
}
