'use client'
import React, { useState } from "react";
import SideBar from "../_components/SideBar";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SiWebauthn } from "react-icons/si";
function page() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)};
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5 ">
        <div className="flex flex-row  gap-4 p-8 justify-start items-start ">
          <Image src="/Nomad.png" alt="Company Logo" width={60} height={50} />
          <div className="flex flex-col items-center gap-1">
            <p className="text-p text-[18px]">Company</p>
            <h1 className="text-[18px] font-bold font-body capitalize">
              Nomad
            </h1>
          </div>
        </div>

        <hr />
        <div className="p-8">
          <h1 className="capitalize font-bold font-body text-[22px] mb-8 text-[#25324B]">
            {" "}
            Applicant details
          </h1>

          <div className="flex flex-row  gap-5">
            <div className=" w-[340px]   border-[1px] p-4 flex flex-col relative ">
              <div className=" flex flex-row gap-3 justify-start items-center mb-2">
                <Image
                  src="/Chinwi.png"
                  alt="Company Logo"
                  width={80}
                  height={50}
                />
                <div className="flex flex-col  gap-1 ">
                  <h1 className="font-bold text-[18px] font-body">
                    {" "}
                    Mohamed tahar
                  </h1>
                  <p className="text-p">Product Designer</p>
                </div>
              </div>

              <div className="bg-bground p-2 flex flex-col gap-1 my-4">
                <p className="text-p capitalize"> applied interships</p>
                <hr />
                <h1 className="font-semibold capitalize  text-[19px]">
                  product development
                </h1>
                <p className="text-p capitalize text-[14px]">
                  marketing . Full.Time
                </p>
              </div>
              <button type="button" className="mb-4">
                <Image
                  src="/Chat.png"
                  alt="Company Logo"
                  width={30}
                  height={50}
                />
              </button>
              <hr />
              <div className="flex flex-col gap-2 mt-3">
                <h1 className="text-[18px] font-bold font-body capitalize">
                  contact
                </h1>
                <div className="flex flex-row gap-4 mb-4 items-center">
                  {/* <img
                    src="/Email.png"
                    alt="Email"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <MdOutlineMail />
                  <div className="flex flex-col text-[14px]">
                    <h1 className="text-p ">Email</h1>
                    <p>moh@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mb-4 items-center">
                  {/* <img
                    src="/Phone.png"
                    alt="Phone"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <IoPhonePortraitOutline />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">Phone</h1>
                    <p>0552871633</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 text-[14px] items-center mb-4 ">
                  {/* <img
                    src="/Translate.png"
                    alt="Translate"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <IoLanguageSharp />
                  <div className="flex flex-col ">
                    <h1 className="text-p">Languages</h1>
                    <p>english .french</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center mb-4">
                  {/* <img
                    src="/Translate.png"
                    alt="Translate"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <SiWebauthn />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">Portofolio</h1>
                    <p className="text-primary"> www.mouh.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center ">
                  <FaLinkedin />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">Portofolio</h1>
                    <p className="text-primary"> www.mouh.com</p>
                  </div>
                </div>
                <div className="  mt-10 bg-bground p-4 w-[150px] flex justify-center mx-auto  border-2 border-primary border-dashed">
                  <button type="button">
                    <p>Resume/Cv</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-4/5 border-[1px] ">
              <div className="flex-row flex justify-between items-center   ml-8 ">
                <div
                  className=" 
              border-b-4  border-b-primary"
                >
                  <h1 className="font-bold capitalize pt-4 font-body text-[18px] flex mb-2  ">
                    {" "}
                    applicant profilie
                  </h1>
                </div>
                <div style={{ position: 'relative' }}>
      <button
        type="button"
        className="text-[#FFFFFF] px-14 h-14 text-[18px] flex items-center font-bold bg-primary"
        onClick={togglePopup}
      >
        Status
      </button>
      
      {showPopup && (
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          backgroundColor: 'white', 
          padding: '10px', 
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: '999'  /* Ensure the popup is above other elements */
        }}>
         <div className="flex flex-col gap-4">
          <h1 className="text-[18px]font-bold">status</h1>
          <div>
          <button
              type="button"
              className=" border-2 rounded-full  px-1.5 text-[#FFB836] border-[#FFB836]  my-2"
            >
              {" "}
             interviw
            </button>
            <button
              type="button"
              className=" text-[#6A0DAD] border-2 border-[#6A0DAD]  rounded-full  px-1.5 my-2"
            >
              {" "}
              interviewing
            </button>
            <button
              type="button"
              className=" text-[#FF6550] border-2 border-[#FF6550]  rounded-full  px-1.5 my-2"
            >
              {" "}
            declined
            </button>
            <button
              type="button"
              className=" text-primary border-2 border-primary rounded-full  px-1.5 my-2"
            >
              {" "}
          hired
            </button>
          </div>

         </div>
        </div>
      )}
    </div>
              </div>
              <hr />
              <div className="p-8">
                <h1 className="font-bold text-[18px] capitalize mb-3">
                  personal info
                </h1>
                <div className=" flex flex-row gap-2">
                  <div className=" flex flex-col w-2/5  gap-3 ">
                    <div>
                    <p className="text-p capitalize text-[18px]  "> full name</p>
                    <p className="font-semibold capitalize text-[#25324B]"> mohamed tahar</p>
                    </div>
                    <div>
                    <p className="text-p capitalize text-[18px] "> date of birth</p>
                    <p className="font-semibold capitalize text-[#25324B]"> june 04 2003 </p>
                    </div>
                    <div>
                    <p className="text-p capitalize text-[18px] "> address</p>
                    <p className="font-semibold capitalize text-[#25324B]"> cite mahmoud zebsa oued zenati guelma</p>
                    </div>
                    <div>

                    </div>
                

                  </div>
                  <div className=" flex flex-col flex-grow  gap-3">
                  <div>
                    <p className="text-p capitalize text-[18px] "> gender</p>
                    <p className="font-semibold capitalize text-[#25324B]"> male</p>
                    </div>
                    <div>
                    <p className="text-p capitalize text-[18px] "> language</p>
                    <p className="font-semibold capitalize text-[#25324B]"> arabic, french,english</p>
                    </div>
                  </div>
                </div>
               
              </div>
              <hr />
              <div className="p-8 flex flex-col gap-4">
              <h1 className="font-bold text-[18px] capitalize ">
                  profissional info
                </h1>
                <p className="text-p capitalize text-[18px] "> about me</p>
                <p className="font-semibold text-[16px] text-[#25324B]">
                I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.{""} <br />
                For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
                </p>
                <p className="text-p text-[18px] capitalize"> aditional information</p>
                <p className="font-semibold text-[16px] text-[#25324B]">
                I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.{""} <br />
                For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
