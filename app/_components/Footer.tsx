import React from "react";
import Image from "next/image";
import logo from "../../public/eurobridge.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-start items-center lg:flex-row lg:justify-evenly text-white lg:mb-14">
        <div className="flex flex-col justify-start items-center lg:items-start">
          <Image src={logo} alt="logo" width={200} className="lg:-ml-10" />
          <p className="text-xs w-56 footer-spc-color">
            Great platform for the job seeker that <br /> passionate about
            startups. Find your dream job easier.
          </p>
        </div>

        <div className="flex flex-col justify-start items-center lg:items-start mt-14 lg:mt-auto">
          <p className="text-sm font-bold mb-4 mt-5">Sign Up for Free</p>
          <p className="text-xs mb-5 w-56 footer-spc-color">
            Evokes a sense of beginning a new adventure
          </p>
          <button
            type="button"
            className="px-4 py-3 text-[#FFFFFF]  bg-[#4640DE] lg:mr-14 text-xs font-bold w-24"
          >
            Sign Up
          </button>
        </div>

        <div className="flex flex-col justify-start items-center mt-14 lg:items-start">
          <p className="footer-spc-color text-sm font-bold mb-3 lg:mb-7">
            Contact us
          </p>
          <p className="text-base mb-4 lg:m-auto">emailaddress@mail.com</p>
        </div>
      </div>

      <hr className="h-0.5 border-0 mb-8 w-4/5 bg-gray-700 mx-auto" />

      <div className="lg:pl-32 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <p className="footer-spc-color text-xs font-semibold mb-4 ml-1">
          2024 @ Eurobridge. All rights reserved.
        </p>
        <div className="social lg:pr-32">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-lg mr-4"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-lg mr-4"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-lg mr-4"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white text-lg mr-4"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
