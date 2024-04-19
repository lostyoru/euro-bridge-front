import React from "react";
import Search from "../_components/Search";
import Image from "next/image";
import CompanyCard from "../_components/CompanyCard";

function page() {
  const companies = Array(6).fill([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <p className="text-[33px] leading-[4.5rem] mt-10 mb-8 font-bold w-1/3 ">
          Find your{" "}
          <span className="text-[#26A4FF]  static">
            dream companies
            <Image
              src="/Line.png"
              alt="logo"
              width={300}
              height={5}
              className="translate-x-20 ml-20 absolute  left-30"
            />
          </span>
        </p>
        <p className="text-[#515B6F]  mr-6 text-[14px] mb-20">
          {" "}
          Discover the companies of your dreams, where your ideal career awaits.
        </p>

        <Search />
      </div>
      <div className=" px-24 mr-28 translate-x-14 h-[1000px] mt-10">
        <h1 className="font-bold text-[30px]  mb-4">
          Recommended Companies
        </h1>
        <p className="text-[#7C8493] text-[14px]">
          Based on your profile, company preferences, and recent activity
        </p>
        <div className="grid  grid-cols-3 gap-12 justify-items-center mt-8 ">
          {companies.map((company, index) => (
              <CompanyCard
              name="Discord"
              image="https://res.cloudinary.com/dekmr7qlp/image/upload/v1713532458/Company_Logo_bfez8c.png"
              post="We'd love to work with someone like you. We care about creating a delightful experience."
              type="Business Service"
              number={3}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
