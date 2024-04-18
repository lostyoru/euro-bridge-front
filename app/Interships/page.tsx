import React from "react";
import Search from "../_components/Search";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F8F8FD] h-[400px]">
    <p className="text-[35px] leading-[4.5rem] mt-10 mb-8 font-bold font-body w-1/3 ">
        Find your{" "}
        <span className="text-[#26A4FF] ">
          {" "}
          Dream interships{" "}
          <Image
            src="/Line.png"
            alt="logo"
            width={300}
            height={30}
            className="translate-x-20 ml-20 "
          />
        </span>
      </p>
      <p className="text-[#515B6F]  mr-6 text-[12px] mb-20"> Find your next internship in Europe at companies like HubSpot, Nike, and Dropbox</p>

      <Search />
    </div>
  );
}
