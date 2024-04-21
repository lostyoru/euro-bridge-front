import Link from "next/link";

import Image from "next/image";
import IntershipCard from "./IntershipCard";
function Companie1() {
  return (
    <div className="bg-[#F8F8FD] pb-36">
      <br />
      <div className="flex justify-between px-24 items-center  ">
        <p className="font-bold text-[30px] font-body mt-8 ">
          Other Dropbox Interships offers
        </p>
        <div>
          <Link href="/Interships" className="text-[#4640DE] flex flex-row mr-10">
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
