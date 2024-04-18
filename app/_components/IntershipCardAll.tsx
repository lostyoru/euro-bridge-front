import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  post: string;
  location: string;
};

function IntershipCardAll(source: Props) {
  return (
    
    <div className="flex flex-row justify-between border-2  bg-white w-[1000px] h-[130px] ">
      <div className=" flex flex-row justify-start gap-10 items-center ">
        
        <Link href="/" className="ml-8">
          <Image
            src="/Dropbox.png"
            alt="dropbox"
            width={50}
            height={50}
            className="ml-4"
          />
        </Link>
        <div className="flex flex-col leading-[1.8rem] ">
          <h1 className="text-black font-bold"> {source.post}</h1>
          <h2 className="text-[#515B6F]"> {source.location}</h2>
          <div className="flex flex-row justify-between gap-2 ">
            <button
              type="button"
              className="bg-white border-2 border-[#4640DE] rounded-full text-[#4640DE]  px-1.5 "
            >
              {" "}
              full time
            </button>
            <button
              type="button"
              className=" border-2 border-[#56CDAD] rounded-full  px-1.5 text-[#56CDAD]"
            >
              {" "}
              marketing
            </button>
            <button
              type="button"
              className=" text-[#FFB836] border-2 border-[#FFB836]  rounded-full  px-1.5"
            >
              {" "}
              Design
            </button>
          </div>
        </div>
      </div>
      <div className="mr-6 flex items-center  ">
      <Link href="/">
        <button
          type="button"
          className="  text-[#FFFFFF] px-8 h-10 flex items-center bg-[#4640DE]  "
        >
          Apply
        </button>
        </Link>
      </div>
    </div>
   
  );
}

export default IntershipCardAll;
