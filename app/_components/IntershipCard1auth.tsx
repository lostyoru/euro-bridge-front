import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  post: string;
  location: string;
  image: string;
};
function IntershipCard1auth(source: Props) {
  return (
    <div className="border-2 bg-white  border-[#D6DDEB] p-8 m-10 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-start gap-6">
        <div className="">
          <Link href="/">
            <Image
              src={source.image}
              alt="intership"
              width={60}
              height={60}
              className="ml-4"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold capitalize text-[18px]">{source.post}</h1>
          <p className="text-p capitalize">{source.location}</p>
        </div>
      </div>
      <div className="mr-6 flex items-center  ">
        <Link href="/IntershipDes">
          <button
            type="button"
            className="  text-[#FFFFFF] px-8 h-10 flex items-center bg-primary  "
          >
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IntershipCard1auth;
