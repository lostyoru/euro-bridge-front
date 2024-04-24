import React from "react";
import SideBar from "../_components/SideBar";
import Search from "../_components/Search";
import CompanyCard from "../_components/CompanyCard";
import CompanyCardAuth from "../_components/CompanyCardAuth";

function page() {
  const companies = Array(6).fill([1, 2, 3, 4, 5, 6]);
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5 px-10">
        <div className="flex flex-col">
        <h1 className="text-[28px] font-bold font-body mt-10 mb-6 capitalize">
          Browse companies
        </h1>
        <hr />

        <div className="mt-6  flex justify-center ">
          <Search />
        </div>
        </div>
        <p className="text-[26px] font-bold  font-body mb-10">All companies</p>

        <div className="grid  grid-cols-3 gap-12 justify-items-center mt-8 ">
          {companies.map((company, index) => (
          
              <CompanyCardAuth
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
