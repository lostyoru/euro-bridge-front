import Link from "next/link";

import Image from "next/image";
import IntershipCard from "./IntershipCard";
function Companie1() {
  return (
    <div className="bg-[#F8F8FD] mb-10 pb-20">
      <br />
      <div className="flex justify-between p-10  items-center  ">
        <p className="font-bold text-[30px] font-body ml-10  ">
          Other Dropbox Interships offers
        </p>
        <div className="mr-10">
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
      <div className=" mx-16 grid lg:grid-cols-2 gap-5 md:content-center content-start justify-items-center ">
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
        <IntershipCard
          post="Socail Media Assistant"
          location=" Paris Hamburg . germany"
        />
      </div>
    </div>
  );
}

export default Companie1;
