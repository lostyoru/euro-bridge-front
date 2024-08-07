import React from "react";
import Image from "next/image";
import Link from "next/link";


type Props = {
  post: string;
  location: string;
  image: string;
  intership: any;
};

function IntershipCardAllauth({ post, location, image, intership }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between border-2 bg-white w-5/12 md:w-[calc(100%-4rem)] mx-auto p-4 md:p-6 mb-6 md:mb-0">
      <div className="flex flex-row justify-start gap-4 md:gap-10 items-center">
        <Link href={`/Intershipsauth/${intership.id}`}>
          <Image
            src={image}
            alt="intership"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-black font-bold my-2">{post}</h1>
          <h2 className="text-[#515B6F] mb-3">{location}</h2>
          <div className="flex flex-row gap-2">
            <button
              type="button"
              className="bg-white border-2 border-primary rounded-full text-primary px-2 py-1"
            >
              Full Time
            </button>
            <button
              type="button"
              className="border-2 border-[#56CDAD] rounded-full px-2 py-1 text-[#56CDAD]"
            >
              Marketing
            </button>
            <button
              type="button"
              className="text-[#FFB836] border-2 border-[#FFB836] rounded-full px-2 py-1"
            >
              Design
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 md:mt-0">
        <Link href={`/Intershipsauth/${intership.id}`}>
          <button
            type="button"
            className="text-white px-8 py-2 flex items-center bg-primary rounded-lg"
          >
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IntershipCardAllauth;
