"use client";
import React, { useState } from "react";
import SideBar from "../_components/SideBar";
import Image from "next/image";

function Page() {
  const [activeStep, setActiveStep] = useState(1); // State to track active step, default to step 1

  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5">
        <div className="flex flex-row gap-4 p-8 justify-start items-start">
          <Image src="/Nomad.png" alt="Company Logo" width={60} height={50} />
          <div className="flex flex-col items-center gap-1">
            <p className="text-p text-[18px]">Company</p>
            <h1 className="text-[18px] font-bold font-body capitalize">
              Nomad
            </h1>
          </div>
        </div>
        <hr />
        <div className="p-10">
          <h1 className="capitalize font-bold font-body text-[28px] mb-8 text-[#25324B]">
            {" "}
            post intership
          </h1>
          <div className="border-[1px] w-full mx-auto flex flex-row p-5 gap-10 justify-start">
            <button
              type="button"
              className={`flex flex-row justify-start gap-5 items-center border-r-[2px] mr-16 ${
                activeStep === 1 ? "text-black" : ""
              }`}
              onClick={() => setActiveStep(1)}
            >
              {activeStep === 1 && (
                <>
                <div>
                <Image
                    src="/PostIcon.png"
                    alt="Company Logo"
                    width={55}
                    height={50}
                  />
                </div>
               
                
               <div className="flex flex-col items-start gap-2 mr-20">
               <p className="text-primary">step 1/2</p>
               <h1 className="font-semibold text-black">Information</h1>
             </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div>
                    {/* Content for step 1 goes here */}
                    <Image
                      src="/PostIcon2.png"
                      alt="Company Logo"
                      width={55}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 mr-20">
                    <p className="text-p">step 1/2</p>
                    <h1 className="font-semibold text-p">Information</h1>
                  </div>
                </>
              )}
            </button>
            <button
              type="button"
              className={`flex flex-row justify-start gap-5 items-center w-1/5 ${
                activeStep === 2 ? "text-black" : ""
              }`}
              onClick={() => setActiveStep(2)}
            >
              {activeStep === 1 && (
                <>
                   <Image
                  src="/DesIcon.png"
                  alt="Company Logo"
                  width={55}
                  height={50}
                /> <div className="flex flex-col items-start gap-2 ">
                <p className="text-p">step 2/2</p>
                <h1 className="font-semibold cpitalize text-p">Description</h1>
              </div>
                </>
             
              )}
              {activeStep === 2 && (
                <>
                
                  {/* Content for step 1 goes here */}
                  <Image
                    src="/DesIcon2.png"
                    alt="Company Logo"
                    width={55}
                    height={50}
                  />
                
                 <div className="flex flex-col items-start gap-2 ">
                 <p className="text-primary">step 2/2</p>
                 <h1 className="font-semibold cpitalize text-black">Description</h1>
               </div>
               </>
              )}

             
            </button>
          </div>
          <div>
            {activeStep === 1 && (
              <div>
                {/* Content for step 1 goes here */}
                Step 1 content
              </div>
            )}
            {activeStep === 2 && (
              <div>
                {/* Content for step 2 goes here */}
                Step 2 content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
