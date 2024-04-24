import React from "react";
import SideBar from "../_components/SideBar";

import FilterSection from "../_components/FilterSection";
import Search from "../_components/Search";
import Image from "next/image";
import IntershipCardAllauth from "../_components/IntershipCardAllauth";
function page() {
  return (
    <div className="flex flex-row  ">
      <SideBar />

      <div className="w-4/5 px-10 ">
        
          <div className="flex flex-col ">
            <h1 className="text-[28px] font-bold mt-10 mb-6 capitalize">
              find interships
            </h1>
            <hr />
           <div className="mt-6  flex justify-center ">
           <Search />
           </div>
            
          </div>

          <div className=" py-8  flex flex-row">
            <div className="flex flex-row gap-4">
            <div className=" mr-10 mt-2">
              <FilterSection/>
            </div>
              <div className="flex-grow">
              <p className="text-[26px] font-bold mb-10">All interships</p>
              <div className=" grid grid-cols-1  gap-5  content-start justify-items-center ">
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
                <IntershipCardAllauth
                  image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
                  post="Social Media Assistant"
                  location=" Paris Hamburg . germany"
                />
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    
  );
}

export default page;
