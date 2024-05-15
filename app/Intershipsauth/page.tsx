"use client";
/* eslint-disable */
import React from "react";
import SideBar from "../components/SideBar";
import FilterSection from "../components/FilterSection";
import Search from "../components/Search";
import IntershipCardAllauth from "../components/IntershipCardAllauth";
import { SideBarContext } from "@/contexts/SideBar/SideBarContext";
import { useContext, useEffect } from "react";
import AuthContext from "@/contexts/auth/AuthProvider";
function Intershipsauth() {
  const { auth }: any = useContext(AuthContext);
  const { links, settings, handleClick, handleClickSettings, handleSideBar } = useContext(SideBarContext);
  useEffect(() => {
    const newLinks = links.map((link, index) => {
      if (index === 2) {
        return {
          ...link,
          active: true
        }
      } else {
        return {
          ...link,
          active: false
        }
      }
    })
    handleSideBar(newLinks, {...settings, active: false});
  }, []);
  return (
    <div className="flex flex-row  ">
      <SideBar  />

      <div className="w-4/5 px-10 ">
        
          <div className="flex flex-col ">
            <h1 className="text-[28px] font-bold font-body mt-10 mb-6 capitalize">
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
              <p className="text-[26px] font-bold font-body mb-10">All interships</p>
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

export default Intershipsauth;