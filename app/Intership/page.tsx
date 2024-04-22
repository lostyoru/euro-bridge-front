import React from "react";
import Image from "next/image";
import Link from "next/link";
import IntershipCard1 from "../_components/IntershipCard1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Intership() {
  return (
    <div>
      <div className="bg-bground p-24 ">
        <IntershipCard1
          post="social Media Assistant"
          location="Dropbox .Paris.Full-Time"
          image="/Dropbox.png"
        />
      </div>
      <div className="flex flex-row gap-8 p-24">
        <div className=" lg:w-[1100px]  ">
          <div className="flex flex-col gap-6">
            <div >
              <h1 className="capitalize font-bold font-body text-[22px]">description</h1>
              <p className="text-p mt-4">
                Stripe is seeking a motivated Marketing Assistant to join our
                dynamic team in Paris. This internship offers hands-on
                experience in various aspects of marketing, including social
                media management, content creation, market research, and
                campaign analysis. The ideal candidate is passionate about
                marketing, creative, and eager to learn. This is a fantastic
                opportunity to gain valuable skills and contribute to innovative
                marketing initiatives in a fast-paced environment.
              </p>
            </div>
            <div>
              <h1 className="capitalize font-bold font-body text-[22px]">
                Qualificaations
              </h1>
              <div >
              <ul>
                <li>
                <FontAwesomeIcon
              icon={faCheckCircle}
              className=" text-lg mr-4"
              width={30}
              height={30}
            />
                  <p className="text-p mt-4">Currently enrolled in a Bachelor&apos;s or Master&apos;s degree program, preferably in Marketing, Business, or a related field</p>
                </li>
                <li>
                  <p className="text-p mt-2">Strong communication and writing skills</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
              
              </ul>
              </div>
            </div>
            <div>
              <h1 className="capitalize font-bold font-body text-[22px]">
               Who You Are
              </h1>
              <div >
              <ul>
                <li>
                  <p className="text-p mt-4">Currently enrolled in a Bachelor&apos;s or Master&apos;s degree program, preferably in Marketing, Business, or a related field</p>
                </li>
                <li>
                  <p className="text-p mt-2">Strong communication and writing skills</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
                <li>
                  <p className="text-p mt-2">Proficiency in social media platforms and Microsoft Office suite</p>
                </li>
              
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[400px]  ">
          <h1 className="font-bold font-body text-[22px]">About this role</h1>
          <div className="flex flex-col mb-8">
            <div className=" mt-4 flex flex-row justify-between">
              <p className="text-p capitalize  text-[14px]"> apply before</p>
              <p className="text-black font-semibold text-[12px]">
                July 31 ,2021
              </p>
            </div>
            <div className="mt-3 flex flex-row justify-between">
              <p className="text-p capitalize  text-[14px]">
                Internship Posted On
              </p>
              <p className="text-black font-semibold text-[12px]">
                July 1, 2021
              </p>
            </div>
            <div className="  flex flex-row justify-between mt-3">
              <p className="text-p capitalize  text-[14px]"> Internship Type</p>
              <p className="text-black font-semibold text-[12px]">Full-Time</p>
            </div>
          </div>
          <hr />
          <div>
          <h1 className="capitalize font-bold font-body text-[22px] mt-4">
               categories
              </h1>
              <div className="flex flex-row justify-start gap-3 mt-4">
              <button
              type="button"
              className=" border-2 border-[#56CDAD] rounded-full  px-1.5 text-[#56CDAD]"
            >
              {" "}
              marketing
            </button>
            <button
              type="button"
              className=" text-[#FFB836] border-2 border-[#FFB836]  rounded-full  px-1.5"
            >
              {" "}
              Design
            </button>
              </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Intership;
