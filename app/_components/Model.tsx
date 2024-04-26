import React from "react";
type Props = {
  image: any;
  isVisible: boolean;
  post:string;
  location:string;
//   onClose: boolean;
};
import Image from "next/image";
function Model(source: Props) {
  if (!source.isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center overflow-y-auto ">
      <div className="w-[650px] flex flex-col ">
        <button
          className="text-white text-xl place-self-end"
        //   onClick={() => source.onClose}
        >
          x
        </button>
        <div className="bg-white p-10  ">
            
            <div className="flex flex-row gap-4 mb-10">
            <Image
            src={source.image}
            alt="intership"
            width={60}
            height={50}
            className="mr-5"
          />
          <div className="flex flex-col  ">
            <h1 className="font-bold capitalize text-[18px]">{source.post}</h1>
            <p className="text-[#515B6F]">{source.location}</p>
          </div>
            </div>
            <hr />
            <h1 className="font-body font-semibold text-[18px] mb-4 mt-4 ">
Submit your application
            </h1>
            <p className="text-p text-[13px] mb-10">
            The following is required and will only be shared with nomad
            </p>
            <div className="flex flex-col gap-2 ">
            <label
                  htmlFor="phone"
                  className="  
                  text-[#515B6F]whitespace-nowrap mb-1"
                >
                  {" "}
                  Current or previous job title
                </label>
                <input
                  id="job"
                  
                
                  type="text"
                  placeholder="What’s your current or previous job title?"
                  className="rounded hover:shadow-lg hover:border-2  hover:border-grayColorx 
                p-1  border  shadow-sm outline-none duration-400"/>
                </div>
                <br /> 
                <hr />
                <br />
                <h1 className="font-body font-bold mb-4 text-[18px] ">
                    Links
                </h1>
                <div className="flex flex-col gap-2 ">
            <label
                  htmlFor="phone"
                  className="  
                  text-[#515B6F]whitespace-nowrap mb-1"
                >
                  {" "}
              Email 
                </label>
                <input
                  id="phone"
                  
                
                  type="text"
                  placeholder="Email Address"
                  className="rounded hover:shadow-lg hover:border-2  hover:border-grayColorx 
                p-1  border  shadow-sm outline-none duration-400"/>
                </div>
                <div className="flex flex-col gap-2 ">
            <label
                  htmlFor="phone"
                  className="  
                  text-[#515B6F]whitespace-nowrap mb-1 mt-4"
                >
                  {" "}
                  Phone Number
                </label>
                <input
                  id="phone"
                  
                
                  type="text"
                  placeholder="Edit ur number"
                  className="rounded hover:shadow-lg hover:border-2  hover:border-grayColorx 
                p-1  border  shadow-sm outline-none "/>
                </div>
                <div className="flex flex-col gap-2 ">
            <label
                  htmlFor="phone"
                  className="  
                  text-[#515B6F]whitespace-nowrap mb-1 mt-4"
                >
                  {" "}
                Linkdein URL
                </label>
                <input
                  id="phone"
                  
                
                  type="text"
                  placeholder="Link to your linkedin url"
                  className="rounded hover:shadow-lg hover:border-2  hover:border-grayColorx 
                p-1  border  shadow-sm outline-none duration-400"/>
                </div>
            <div className="flex flex-col gap-2 ">
            <label
                  htmlFor="phone"
                  className="  
                  text-[#515B6F]whitespace-nowrap mb-1 mt-4"
                >
                  {" "}
               Portofolio URl
                </label>
                <input
                  id="phone"
                  
                
                  type="text"
                  placeholder="LINK TO YOUR PORTOFOLIO URL"
                  className="rounded hover:shadow-lg hover:border-2  hover:border-grayColorx 
                p-1  border  shadow-sm outline-none duration-400
                mb-10
                "/>
                </div>
                <hr />
                <div className="flex flex-col mt-6">
                <label
                  htmlFor="exp"
                  className="  whitespace-nowrap mb-4
                  "
                >
                  Expirence
                </label>
                <textarea
                  id="exp"
                  className="p-2 border h-20 resize-none"
                 
                  value=""
                  rows={5} // Number of visible text lines
                  cols={40} // Number of visible text columns
                  placeholder="Add a cover letter or anything else you want to share"
                />
              </div>
              <div className="mt-10 mb-6 flex flex-row justify-between">
                <h1 className="font-semibold  "> attach your resume</h1>

              </div>
              <hr />
              <div className="flex justify-center mt-10">
              <button type="button" className="flex justify-center text-white 
                bg-primary py-3 w-[580px]">
            Submit application
              </button>
              </div>
              
        </div>
      </div>
    </div>
  );
}

export default Model;
