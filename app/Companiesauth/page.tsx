"use client";
/* eslint-disable */
import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Search from "../components/Search";
import CompanyCard from "../components/CompanyCard";
import CompanyCardAuth from "../components/CompanyCardAuth";
import { SideBarContext } from "@/contexts/SideBar/SideBarContext";
import { useContext } from "react";
import useAuth from "@/hooks/useAuth";
import RequireAuth from "../components/auth/RequireAuth";
import PersistentLogin from "../components/PersistentLogin";
import { useState } from "react";
function Companieauth() {
  const companies = Array(6).fill([1, 2, 3, 4, 5, 6]);
  const { auth }: any = useAuth();
  const { links, settings, handleClick, handleClickSettings, handleSideBar } = useContext(SideBarContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const newLinks = links.map((link, index) => {
      if (index === 3) {
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
    <PersistentLogin Children={
      <RequireAuth allowedRoles={["INTERSHIP_SEEKER"]}>
            <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5 px-10 hide-y-scroll overflow-hidden h-screen pb-10">
        <div className="flex flex-col">
        <h1 className="text-[28px] font-bold font-body mt-10 mb-6 capitalize">
          Browse companies
        </h1>
        <hr />

        <div className="mt-6  flex justify-center ">
          <Search onChange={handleSearchChange}/>
        </div>
        </div>
        <p className="text-[26px] font-bold  font-body mb-10">All companies</p>

        <div className="grid  grid-cols-3 gap-12 justify-items-center mt-8 ">
          {companies.map((company, index) => (
          
              <CompanyCardAuth
              name="Discord"
              image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
              post="We'd love to work with someone like you. We care about creating a delightful experience."
              type="Business Service"
              number={3}
              key={index}
            />
          ))}
        </div>

      </div>
    </div>
      </RequireAuth>
    } />
  );
}

export default Companieauth;