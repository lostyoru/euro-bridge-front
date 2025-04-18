import Link from "next/link";

import Image from "next/image";
import IntershipCard from "./IntershipCard";
function Intershipshome() {
  return (
    <div className="bg-[#F8F8FD] pb-36">
      <br />
      <div className="flex justify-between mx-20 items-center  ">
        <p className="font-bold text-[25px]  ">
          Latest <span className="text-[#26A4FF]"> Internships open</span>
        </p>
        <div>
          <Link href="/Interships" className="text-[#4640DE] flex flex-row ">
            Show all Internships
            <Image
              src="/Icon.png"
              alt="logo"
              width={15}
              height={10}
              className="ml-4"
            />
          </Link>
        </div>
      </div>
      <br />
      <div className=" grid grid-cols-2 gap-5  content-start justify-items-center mr-20">
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
      <IntershipCard post="Social Media Assistant" location=" Paris Hamburg . germany"/>
     
      </div>
    </div>
  );
}

export default Intershipshome;
