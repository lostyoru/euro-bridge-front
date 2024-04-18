import React from 'react'
import Search from "../_components/Search";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
    <p className="text-[35px] leading-[4.5rem] mt-10 mb-6 font-bold font-body w-1/3 ">
      Find your{" "}
      <span className="text-[#26A4FF] ">
        
        Dream companies
        <Image
          src="/Line.png"
          alt="logo"
          width={300}
          height={5}
          className="translate-x-20 ml-20  "
        />
      </span>
    </p>
    <p className="text-[#515B6F]  mr-6 text-[12px] mb-20"> Discover the companies of your dreams, where your ideal career awaits.</p>

    <Search />
  </div>
  )
}

export default page
