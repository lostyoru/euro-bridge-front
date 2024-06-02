"use client";
/* eslint-disable */
import React from "react";
import SideBar from "../components/SideBar";
import FilterSection from "../components/FilterSection";
import Search from "../components/Search";
import IntershipCardAllauth from "../components/IntershipCardAllauth";
import { SideBarContext } from "@/contexts/SideBar/SideBarContext";
import { useContext, useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import RequireAuth from "../components/auth/RequireAuth";
import PersistentLogin from "../components/PersistentLogin";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { Internship } from "@/types/filter";
function Intershipsauth() {
  const { auth, setAuth }: any = useAuth();
  const [internships, setInternships] = useState<any>([]);
  const [filteredInternships, setFilteredInternships] = useState<any>([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const axiosPrivate = useAxiosPrivate();
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

  useEffect(() => {
    const fetchInterships = async () =>{
      try {
        const res = await axiosPrivate.get('/intership/all');
        console.log(res.data);
        setInternships(res.data);
      }catch (error){
        console.log(error);
      }

    }

    fetchInterships()

  }, [auth])
  return (
    <PersistentLogin Children={
      <RequireAuth allowedRoles={["INTERSHIP_SEEKER"]}>
        <div className="flex flex-row  ">
        <SideBar  />

        <div className="w-4/5 px-10 hide-y-scroll overflow-hidden h-screen ">
          
            <div className="flex flex-col ">
              <h1 className="text-[28px] font-bold font-body mt-10 mb-6 capitalize">
                find interships
              </h1>
              <hr />
            <div className="mt-6  flex justify-center ">
            {/* <Search  /> */}
            </div>
              
            </div>

            <div className=" py-8  flex flex-row w-full">
              <div className="flex flex-row gap-4 w-full">
              <div className=" mr-10 mt-2">
                {/* <FilterSection /> */}
              </div>
                <div className="flex-grow w-full">
                <p className="text-[26px] font-bold font-body mb-10">All interships</p>
                <div className=" flex flex-col w-full ">
                {internships && internships.map((internship: any) => (
                    <li className="list-none">
                      <IntershipCardAllauth
                      key={internship.id}
                      image={internship.company.user.image}
                      post={internship.title}
                      location={internship.place}
                      intership={internship}
                      />
                    </li>
                ))}

                </div>
              </div>
              </div>
            
            </div>
          </div>
        </div>
      </RequireAuth>
    } />
    
  );
}

export default Intershipsauth;