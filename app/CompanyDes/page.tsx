
import SideBar from '../_components/SideBar'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Intershipshome from "../_components/Intershipshome";
import Companie1 from "../_components/Companie1";
import Companie1auth from '../_components/Companie1auth';
function page() {
  return ( 
    <div>
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5">
      <div className="flex flex-row gap-6 py-20 items-center bg-bground px-10">
        <Image
          src="/Stripe.png"
                alt="Company Logo"
          width={100}
          height={80}
          className="mr-4 flex  "
        />
        <div className="flex flex-col">
          <div className="flex flex-row mb-4 ">
          <div className="mr-6">
          <h1 className="capitalize font-bold font-body text-[37px]">
            {" "}
            Stripe
          </h1>
          </div>

         
          <div className="border-[1.5px] border-primary  text-primary h-8 px-4 flex items-center mt-3">
          {" "}
          43 intesrsips
        </div>
        </div>
       
        <div className=" flex text-[15px]    items-center">
          <Link href="https://www.facebook.com/" className="text-primary ">
            hhtps://steipe.com
          </Link>
        </div>
        </div>
      </div>
      <div className="p-10 flex flex-col gap-3  ">
        <h1 className="capitalize font-bold font-body text-[22px]">
          {" "}
          Company profile
        </h1>
        <p className="text-p">
          Dropbox is a software platform for starting and running internet
          businesses. Millions of businesses rely on Stripe’s software tools to
          accept payments, expand globally, and manage their businesses online.
          Stripe has been at the forefront of expanding internet commerce,
          powering new business models, and supporting the latest platforms,
          from marketplaces to mobile commerce sites. We believe that growing
          the GDP of the internet is a problem rooted in code and design, not
          finance. Stripe is built for developers, makers, and creators. We work
          on solving the hard technical problems necessary to build global
          economic infrastructure—from designing highly reliable systems to
          developing advanced machine learning algorithms to prevent fraud.
        </p>
        <h1 className="capitalize font-bold font-body text-[22px]"> Contact</h1>
        <div className="flex flex-row gap-4">
          <div className="border-[1.5px] border-primary p-1.5 text-primary">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-primary text-lg mr-4"
                width={30}
                height={30}
              />
              twiter.com/dropbox
            </Link>
          </div>
          <div className="border-[1.5px] border-primary p-1.5 text-primary">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-primary text-lg mr-4"
                width={30}
                height={30}
              />
              facebook.com/dropbox
            </Link>
          </div>
        </div>
        <div className="border-[1.5px] border-primary p-1.5 text-primary w-[240px]">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-primary text-lg mr-4"
              width={30}
              height={30}
            />
            linkedin.com/dropbox
          </Link>
        </div>
      </div>
      <div className="">
        <Companie1auth />
      </div>
      </div>
    </div>
    </div>
  )
}

export default page

