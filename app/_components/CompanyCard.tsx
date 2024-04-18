import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  name: string;
  post: string;
  type: string;
  number: number;
};
function CompanyCard(source: Props) {
  return (
    <div className="flex flex-col px-4 justify-start gap-10 p-4 border-2 border-[#D6DDEB] h-[340px] w-[340px]">
      <div className="flex mt-4 flex-row justify-between  items-start">
        <Link href="/" >
          <Image
            src="/Dropbox.png"
            alt="dropbox"
            width={50}
            height={50}
            
          />
        </Link>
        <div className="text-[#4640DE] bg-[#F8F8FD]">
          {source.number}Interships
        </div>
      </div>
      <h1 className="font-semibold text-[20px]">{source.name}</h1>
      <p className="text-[14px] text-[#515B6F]">{source.post}</p>
      <button
        type="button"
        className=" self-start px-1.5 text-[#FFB836] border-2 border-[#FFB836]  rounded-full "
      >
        {source.type}
      </button>
    </div>
  );
}

export default CompanyCard;
