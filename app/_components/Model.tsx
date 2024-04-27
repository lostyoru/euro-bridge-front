import React from "react";
import Image from "next/image";

type Props = {
  image: any;
  isVisible: boolean;
  post: string;
  location: string;
  onClose: () => void;
};

function Model(source: Props) {
  if (!source.isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center overflow-y-auto">
      <div className="w-[650px] flex flex-col">
        <div className="bg-white p-10">
          <div className="flex justify-end">
          <button
        className=" font-body  mt-4 mr-2 text-xl z-10"
        onClick={source.onClose}
      >
        x
      </button>
          </div>
          <div className="flex flex-row gap-4 mb-10">
            <Image
              src={source.image}
              alt="intership"
              width={60}
              height={50}
              className="mr-5"
            />
            <div className="flex flex-col">
              <h1 className="font-bold capitalize text-[18px] font-body">
                {source.post}
              </h1>
              <p className="text-[#515B6F]">{source.location}</p>
            </div>
          </div>
          <hr />
          <h1 className="font-semibold text-[18px] mb-4 mt-4">
            Submit your application
          </h1>
          <p className="text-p text-[13px] mb-10">
            The following is required and will only be shared with nomad
          </p>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="job"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-1"
            >
              Current or previous job title
            </label>
            <input
              id="job"
              type="text"
              placeholder="What’s your current or previous job title?"
              className="rounded p-2 border hover:shadow-md outline-none duration-400"
            />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-1 mt-4"
              style={{ marginTop: "1rem" }}
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email Address"
              className="rounded p-2 border hover:shadow-md outline-none duration-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-1 mt-4"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Edit your number"
              className="rounded p-2 border hover:shadow-md outline-none duration-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="linkedin"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-1 mt-4"
            >
              LinkedIn URL
            </label>
            <input
              id="linkedin"
              type="text"
              placeholder="Link to your LinkedIn URL"
              className="rounded p-2 border hover:shadow-md outline-none duration-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="portfolio"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-1 mt-4"
            >
              Portfolio URL
            </label>
            <input
              id="portfolio"
              type="text"
              placeholder="Link to your Portfolio URL"
              className="rounded p-2 border hover:shadow-md outline-none duration-400"
            />
          </div>
          <hr />
          <div className="flex flex-col mt-6">
            <label
              htmlFor="exp"
              className="font-bold font-epilogue text-[#515B6F] whitespace-nowrap mb-4"
            >
              Experience
            </label>
            <textarea
              id="exp"
              className="p-2 border h-20 resize-none"
              rows={5}
              cols={40}
              placeholder="Add a cover letter or anything else you want to share"
            />
          </div>
          <div className="mt-10 mb-6 flex flex-row justify-between">
            <h1 className="font-semibold">Attach your resume</h1>
          </div>
          <hr />
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="flex justify-center text-white bg-primary py-3 w-[580px]"
            >
              Submit application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
