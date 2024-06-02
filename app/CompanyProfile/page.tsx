"use client";
/* eslint-disable */
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import SideBar from "../components/SideBar";
import uploadImage from "@/public/EditWhite.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function page() {
  const [pfp, setPfp] = React.useState("/Nomad.png");
  const handleUpload = () => {
    const uploadPfp = document.getElementById("upload-pfp");
    uploadPfp?.click();
    const profilePfp = document.getElementById("profilepfp");
    uploadPfp?.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files;
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          if (profilePfp) {
            setPfp(reader.result as string);
            profilePfp.setAttribute("src", reader.result as string);
          }
        };
        reader.readAsDataURL(file[0]);
      }
    });
  };
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
      <div className="w-4/5 hide-y-scroll overflow-hidden h-screen">
        <div className="flex flex-row  gap-4 p-8 justify-start items-start ">
          <Image src="/Nomad.png" alt="Company Logo" width={60} height={50} />
          <div className="flex flex-col items-center gap-1">
            <p className="text-p text-[18px]">Company</p>
            <h1 className="text-[18px] font-bold font-body capitalize">
              Nomad
            </h1>
          </div>
        </div>

        <hr />
        <div className="p-8">
          <div className="flex flex-row gap-4 items-center ">
            <div className="realtive">
              <div className="absolute ml-1 mt-2">
                <input
                  type="file"
                  name="upload-pfp"
                  id="upload-pfp"
                  className=" z-10 opacity-0 "
                />
                <Image
                  src={uploadImage}
                  onClick={handleUpload}
                  alt="Company Logo"
                  width={30}
                  height={50}
                />
              </div>
              <div>
                <Image
                  src={pfp}
                  alt="profile"
                 
                  width={140}
                  height={50}
                  className="rounded-full"
                  id="profilepfp"
                />
              </div>
              {/* <Image
                src={pfp}
                alt="Company Logo"
                width={140}
                height={50}
              /> */}
            </div>

            <p className="text-primary  mr-20 self-end ">hhtps://nomad.com</p>
            <h1 className="font-bold text-[40px] font-body ml-20 ">Nomad</h1>
          </div>
        </div>
        <hr />
        <div className="p-8 mb-4">
          <div className="flex flex-row justify-between mb-4 ">
            <h1 className="font-bold  font-body text-[22px]">
              Company profile
            </h1>
            <button type="button" onClick={handleEditClick}>
              <img
                src="/EditBlue.png"
                alt="Edit About Me"
                width={40}
                height={80}
              />
            </button>
          </div>
          <textarea
            id="exp"
            className={`p-2 ${isEditable ? "border" : ""} h-20 resize-none`}
            rows={5}
            cols={135}
            placeholder="Add a cover letter or anything else you want to share"
            value={content}
            readOnly={!isEditable}
            onChange={handleChange}
            onKeyDown={handleSave}
          />
        </div>
        <hr />
        <div className="p-8 mb-4">
          <div className="flex flex-row justify-between items-center mb-4">
            <h1 className="font-bold  font-body text-[22px]">Contact</h1>
            <button type="button" onClick={handleEditClick}>
              <img
                src="/EditBlue.png"
                alt="Edit About Me"
                width={40}
                height={80}
              />
            </button>
          </div>

          {/* <div className="flex flex-row justify-between mb-4 "> */}

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="border-[1.5px] border-primary p-1.5 text-primary">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-primary text-lg mr-2"
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
                    className="text-primary text-lg mr-2"
                    width={30}
                    height={30}
                  />
                  facebook.com/dropbox
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-1 ">
              <div className="border-[1.5px] border-primary p-1.5 text-primary w-[240px]  ">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-primary text-lg mr-2"
                    width={30}
                    height={30}
                  />
                  linkedin.com/dropbox
                </Link>
              </div>

              <div className="border-[1.5px] border-primary p-1.5 text-primary w-[240px]  flex flex-row gap-3 items-center">
                <MdOutlineMail />

                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nomad@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    // </div>
  );
}

export default page;
