"use client";
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { FaTwitter } from "react-icons/fa";
import { SiWebauthn } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { IoLanguageSharp } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
const Page = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState("");

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleSave = (event: any) => {
    if (event.key === "Enter") {
      // Save logic here
      console.log("Content saved:", content);
      setIsEditable(false); // Assuming you want to make it non-editable after saving
    }
  };

  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5">
        <h1 className="text-[28px] font-bold font-body p-8 capitalize">
          My Profile
        </h1>
        <hr />
        <div className="p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-6">
              <div className="profile flex-grow w-3/5 ">
                <div className="relative bg-profile h-[140px] bg-cover ">
                  <div className="absolute top-6 right-3">
                    <Link href="/">
                      <Image
                        src="/Edit.png"
                        alt="Company Logo"
                        width={40}
                        height={80}
                        className="mr-4 flex"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row px-5 py-6 gap-10 justify-around items-center">
                  <div className="  overflow-visible flex flex-row items-center relative z-10 ">
                    <Image
                      src="/AvatarPro.png"
                      alt="Company Logo"
                      width={130}
                      height={80}
                      className="mr-4 -mt-16"
                    />
                    <div className="flex flex-col gap-1 self-start">
                    <h1 className="font-bold text-[18px] font-body">
                      {" "}
                      mohamed tahar
                    </h1>
                    <p className="text-p ">front end developer at eurobridg</p>
                    <div className="flex flex-row text-p gap-2">
                      <IoLocationOutline />
                      <p>bejaia amizour</p>
                    </div>
                  </div>
                  </div>

                  <div className="text-primary p-2 border-primary border-2 ">
                    <Link href="/Setings">
                      <button type="button">Edit profile</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[250px] p-4 border-2">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="font-semibold text-[20px] capitalize ">
                    {" "}
                    additional Details
                  </h1>

                  <Link href="/">
                    <Image
                      src="/EditBlue.png"
                      alt="Edit Button"
                      width={40}
                      height={80}
                      className="  "
                    />
                  </Link>
                </div>
                <div className="flex flex-row gap-4 mb-4 items-center">
                  {/* <img
                    src="/Email.png"
                    alt="Email"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <MdOutlineMail />
                  <div className="flex flex-col text-[14px]">
                    <h1 className="text-p ">Email</h1>
                    <p>moh@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mb-4 items-center">
                  {/* <img
                    src="/Phone.png"
                    alt="Phone"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <IoPhonePortraitOutline />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">Phone</h1>
                    <p>0552871633</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 text-[14px] items-center ">
                  {/* <img
                    src="/Translate.png"
                    alt="Translate"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <IoLanguageSharp />
                  <div className="flex flex-col ">
                    <h1 className="text-p">Languages</h1>
                    <p>english .french</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="border-2 flex-grow w-3/5 p-6">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="font-semibold capitalize">About Me</h1>
                  <button type="button" onClick={handleEditClick}>
                    <Image
                      src="/EditBlue.png"
                      alt="Edit About Me"
                      width={40}
                      height={80}
                    />
                  </button>
                </div>
                <div className="mt-6">
                  <textarea
                    id="exp"
                    className={`p-2 ${
                      isEditable ? "border" : ""
                    } h-20 resize-none`}
                    rows={5}
                    cols={86}
                    placeholder="Add a cover letter or anything else you want to share"
                    value={content}
                    readOnly={!isEditable}
                    onChange={handleChange}
                    onKeyDown={handleSave}
                  />
                </div>
              </div>
              <div className="w-[250px] border-2 mt-1 p-4">
                <div className="flex flex-row justify-between items-center ">
                  <h1 className="font-semibold text-[20px] capitalize mr-4">
                    {" "}
                    social links
                  </h1>

                  <Link href="/">
                    <Image
                      src="/EditBlue.png"
                      alt="Edit Button"
                      width={40}
                      height={80}
                      className="  "
                    />
                  </Link>
                </div>
                <div className="flex flex-row gap-4 mb-4 items-center">
                  {/* <img
                    src="/Email.png"
                    alt="Email"
                    width={18}
                    height={10}
                    className="  "
                  /> */}
                  <FaInstagram />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p capitalize">instgram</h1>
                    <p className="text-primary">instagram.com/jakegyll</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4  items-center mb-4">
                  {/* <img
                    src="/Phone.png"
                    alt="Phone"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <FaTwitter />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">twiter</h1>
                    <p className="text-primary">twitter.com/jakegyll</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center ">
                  {/* <img
                    src="/Translate.png"
                    alt="Translate"
                    width={18}
                    height={80}
                    className="  "
                  /> */}
                  <SiWebauthn />
                  <div className="flex flex-col text-[14px] ">
                    <h1 className="text-p">website</h1>
                    <p className="text-primary"> mouh.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
