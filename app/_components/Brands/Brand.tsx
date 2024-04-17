import { disney, amd, intel, talkit, vodafone } from "./imports";
import Image from "next/image";

import React from "react";

function Brand() {
  return (
    <div className=" flex flex-col justify-center items-center  ">
      <div>
        <div className=" mt-10   ml-20 text-[#75767b] ">
          <p> Companies we helped grow</p>
        </div>
        <div className=" my-6 grid grid-cols-5 gap-1  ">
          <div className=" flex justify-center items-center flex-1 max-w-[150px] min-w-[120px] mx-[4rem] ">
            <Image src={disney} alt={"disney"} />
          </div>
          <div className=" flex justify-center items-center flex-1 max-w-[150px] min-w-[120px] mx-[4rem] ">
            <Image src={amd} alt={"disney"} />
          </div>
          <div className=" flex justify-center items-center flex-1 max-w-[150px] min-w-[120px] mx-[4rem] ">
            <Image src={intel} alt={"disney"} />
          </div>
          <div className=" flex justify-center items-center flex-1 max-w-[150px] min-w-[120px] mx-[4rem] ">
            <Image src={talkit} alt={"disney"} />
          </div>
          <div className=" flex justify-center items-center flex-1 max-w-[150px] min-w-[120px] mx-[4rem] ">
            <Image src={vodafone} alt={"disney"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
