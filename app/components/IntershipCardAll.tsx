import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  post: string;
  location: string;
  image: string;
};



function IntershipCardAll(source: Props) {
  return (
    
    <div className="flex flex-row justify-between border-2  bg-white w-full my-3">
      <div className=" flex flex-row justify-start items-center ">
        
        <Link href="/Intership" className="mx-5">
          <Image
            src={source.image}
            alt="intership"
            width={50}
            height={50}
            className="ml-4"
          />
        </Link>
        <div className="flex flex-col leading-[1.8rem] p-5 ">
          <h1 className="text-black font-bold my-2"> {source.post}</h1>
          <h2 className="text-[#515B6F] mb-3"> {source.location}</h2>
          <div className="flex flex-row justify-between ">
            <button
              type="button"
              className="bg-white border-2 border-primary mx-1 rounded-full text-primary  px-1.5 "
            >
              {" "}
              full time
            </button>
            <button
              type="button"
              className=" border-2 border-[#56CDAD] rounded-full mx-1 px-1.5 text-[#56CDAD]"
            >
              {" "}
              marketing
            </button>
            <button
              type="button"
              className=" text-[#FFB836] border-2 border-[#FFB836] mx-1 rounded-full  px-1.5"
            >
              {" "}
              Design
            </button>
          </div>
        </div>
      </div>
      <div className="mr-6 flex items-center  ">
      <Link href="/Intership">
        <button
          type="button"
          className="  text-[#FFFFFF] px-8 h-10 flex items-center bg-primary  "
        >
          Apply
        </button>
        </Link>
      </div>
    </div>
   
  );
}

export default IntershipCardAll;
