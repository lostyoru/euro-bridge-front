import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  name: string;
  post: string;
  type: string;
  number: number;
  image: string;
  key: number;
};




function CompanyCard(source: Props) {
  return (
    <div className="flex flex-col px-4 justify-start gap-10 p-4 border-2 border-[#D6DDEB] h-[340px] w-[340px]">
      <div className="flex mt-4 flex-row justify-between  items-start">
        <Link href="/" >
          <Image
            src={source.image}
            alt="Company Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="text-primary bg-[#F8F8FD] py-2 px-3">
          {source.number + ` `}Interships
        </div>
      </div>
      <p className="font-bold text-[20px] p-0">{source.name}</p>
      <p className="text-[14px] text-p">{source.post}</p>
      <button
        type="button"
        className=" self-start px-3 text-[#FFB836] border-2 border-[#FFB836]  rounded-full "
      >
        {source.type}
      </button>
    </div>
  );
}

export default CompanyCard;
