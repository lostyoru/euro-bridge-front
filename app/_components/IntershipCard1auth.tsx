import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: string;
  location: string;
  image: string;
  setShowModel: (show: boolean) => void; // Define the type of setShowModel
};

function IntershipCard1auth({ post, location, image, setShowModel }: Props) {
  return (
    <div className="border-2 bg-white border-[#D6DDEB] p-8 m-10 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-start gap-6">
        <div className="">
          <Image src={image} alt="intership" width={60} height={60} className="ml-4" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold capitalize text-[18px]">{post}</h1>
          <p className="text-p capitalize">{location}</p>
        </div>
      </div>
      <div className="mr-6 flex items-center  ">
        <button
          type="button"
          className="text-[#FFFFFF] px-8 h-10 flex items-center bg-primary"
          onClick={() => setShowModel(true)} // Change setShowModel to true
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default IntershipCard1auth;
