"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";

import SideBar from "../../components/SideBar";
import Image from "next/image";
import Link from "next/link";
import IntershipCard1 from "../../components/IntershipCard1";
import { FaRegCheckCircle } from "react-icons/fa";
import IntershipCard1auth from "../../components/IntershipCard1auth";
import Model from "../../components/Model";
import useAuth from "@/hooks/useAuth";
import RequireAuth from "../../components/auth/RequireAuth";
import PersistentLogin from "../../components/PersistentLogin";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

function Internship({ key: internshipid}: { key: number }) {
    
  const [showModel, setShowModel] = useState(false);
  const { auth }: any = useAuth();
  const [loading, setLoading] = useState(true);
  const [internship, setInternship] = useState<any>(null);
  const axiosPrivate = useAxiosPrivate();

  const handleCloseModel = () => {
    setShowModel(false);
  };

  useEffect(() => {
    if (showModel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModel]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axiosPrivate.get(`/intership/${internshipid}`);
        console.log(res.data);
        setInternship(res.data);
        setLoading(false);
        console.log(internship + " hhhhhhhhh");
      } catch (error) {
        console.log(error);
      }
    };

    fetchInternships();
  }, [internshipid, axiosPrivate]);

  return (
    <PersistentLogin Children={
      <RequireAuth allowedRoles={["INTERSHIP_SEEKER"]}>
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-row">
              <SideBar />
              <div className="w-4/5 hide-y-scroll overflow-hidden h-screen">
                <h1 className="text-[28px] font-bold font-body p-10 capitalize">
                  Internship description
                </h1>
                <hr />
                <div className="p-6">
                  <div className="bg-bground p-1">
                    <IntershipCard1auth
                      post={internship.title}
                      location={internship.place}
                      image={internship.company.user.image}
                      setShowModel={setShowModel}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-8 p-10">
                  <div className="lg:w-[1100px]">
                    <div className="flex flex-col gap-6">
                      <div>
                        <h1 className="capitalize font-bold font-body text-[22px]">
                          Description
                        </h1>
                        <p className="text-p mt-4">
                          {internship.description}
                        </p>
                      </div>
                      <div>
                        <h1 className="capitalize font-bold font-body text-[22px]">
                          Qualifications
                        </h1>
                        <ul className="mt-4">
                          {internship.qualifications.map((qualification: string, index: number) => (
                            <li key={index} className="flex flex-row items-center mt-2">
                              <FaRegCheckCircle style={{ color: `#56CDAD` }} />
                              <p className="text-p px-2">{qualification}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h1 className="capitalize font-bold font-body text-[22px]">
                          Who You Are
                        </h1>
                        <ul>
                          {internship.whoYouAre.map((trait: string, index: number) => (
                            <li key={index} className="flex flex-row items-center mt-2">
                              <FaRegCheckCircle style={{ color: `#56CDAD` }} />
                              <p className="text-p px-2">{trait}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[400px]">
                    <h1 className="font-bold font-body text-[22px]">
                      About this role
                    </h1>
                    <div className="flex flex-col mb-8">
                      <div className="mt-4 flex flex-row justify-between">
                        <p className="text-p capitalize text-[14px]">Apply before</p>
                        <p className="text-black font-semibold text-[12px]">
                          {internship.applyBefore}
                        </p>
                      </div>
                      <div className="mt-3 flex flex-row justify-between">
                        <p className="text-p capitalize text-[14px]">Internship Posted On</p>
                        <p className="text-black font-semibold text-[12px]">
                          {internship.postedOn}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between mt-3">
                        <p className="text-p capitalize text-[14px]">Internship Type</p>
                        <p className="text-black font-semibold text-[12px]">
                          {internship.type}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h1 className="capitalize font-bold font-body text-[22px] mt-4">
                        Categories
                      </h1>
                      <div className="flex flex-row justify-start gap-3 mt-4">
                        {internship.categories.map((category: string, index: number) => (
                          <button
                            key={index}
                            type="button"
                            className={`border-2 rounded-full px-1.5 text-${category === 'marketing' ? '[#56CDAD]' : '[#FFB836]'} border-${category === 'marketing' ? '[#56CDAD]' : '[#FFB836]'}`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Model
                isVisible={showModel}
                image="/Dropbox.png"
                post="social media assistant"
                location="nomad . Hamburg . Germany"
                onClose={handleCloseModel}
                internship={internship}
              />
            </div>
          )}
        </>
      </RequireAuth>
    } />
  );
}

export default Internship;
