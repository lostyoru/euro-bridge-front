"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import SideBar from "../_components/SideBar";

import Image from "next/image";
import Post from "../_components/Post";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function Page() {
  const [activeStep, setActiveStep] = useState(1); // State to track active step, default to step 1
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };


 
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-4/5">
        <div className="flex flex-row gap-4 p-8 justify-start items-start">
          <Image src="/Nomad.png" alt="Company Logo" width={60} height={50} />
          <div className="flex flex-col items-center gap-1">
            <p className="text-p text-[18px]">Company</p>
            <h1 className="text-[18px] font-bold font-body capitalize">
              Nomad
            </h1>
          </div>
        </div>
        <hr />
        <div className="p-10">
          <h1 className="capitalize font-bold font-body text-[28px] mb-8 text-[#25324B]">
            {" "}
            post intership
          </h1>
          <div className="border-[1px] w-full mx-auto flex flex-row p-5 gap-10 justify-start">
            <button
              type="button"
              className={`flex flex-row justify-start gap-5 items-center border-r-[2px] mr-16 ${
                activeStep === 1 ? "text-black" : ""
              }`}
              onClick={() => setActiveStep(1)}
            >
              {activeStep === 1 && (
                <>
                  <div>
                    <Image
                      src="/PostIcon.png"
                      alt="Company Logo"
                      width={55}
                      height={50}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 mr-20">
                    <p className="text-primary">step 1/2</p>
                    <h1 className="font-semibold text-black">Information</h1>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div>
                    {/* Content for step 1 goes here */}
                    <Image
                      src="/PostIcon2.png"
                      alt="Company Logo"
                      width={55}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 mr-20">
                    <p className="text-p">step 1/2</p>
                    <h1 className="font-semibold text-p">Information</h1>
                  </div>
                </>
              )}
            </button>
            <button
              type="button"
              className={`flex flex-row justify-start gap-5 items-center w-1/5 ${
                activeStep === 2 ? "text-black" : ""
              }`}
              onClick={() => setActiveStep(2)}
            >
              {activeStep === 1 && (
                <>
                  <Image
                    src="/DesIcon.png"
                    alt="Company Logo"
                    width={55}
                    height={50}
                  />{" "}
                  <div className="flex flex-col items-start gap-2 ">
                    <p className="text-p">step 2/2</p>
                    <h1 className="font-semibold cpitalize text-p">
                      Description
                    </h1>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  {/* Content for step 1 goes here */}
                  <Image
                    src="/DesIcon2.png"
                    alt="Company Logo"
                    width={55}
                    height={50}
                  />

                  <div className="flex flex-col items-start gap-2 ">
                    <p className="text-primary">step 2/2</p>
                    <h1 className="font-semibold cpitalize text-black">
                      Description
                    </h1>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
        <div>
          {activeStep === 2 && (
            <div className="flex flex-col gap-4 px-8">
              <div className="mb-2">
                <h1 className="font-bold mb-2">Details</h1>
                <p className="text-p">
                  Add the description of the Internships, responsibilities, who
                  you are, and nice-to-haves.
                </p>
              </div>

              <hr />
              <div className=" flex flex-row gap-14 justify-start my-4">
                <div className=" flex flex-col mr-18 ">
                  <h1 className="font-bold  mb-2"> Intership Description</h1>
                  <p className="text-p">
                    Internships titles must be describe one position
                  </p>
                </div>
                <textarea
                  name=""
                  id=""
                  className="w-full p-4 border-[1.5px] h-[140px] "
                  placeholder="Enter Internships description"
                ></textarea>
              </div>
              <hr />
              <div className=" flex flex-row gap-16 justify-start my-4">
                <div className=" flex flex-col mr-2 ">
                  <h1 className="font-bold  mb-2"> Qualifications</h1>
                  <p className="text-p">
                    Outline the core Qualifications of the positio
                  </p>
                </div>
                <textarea
                  name=""
                  id=""
                  className="w-full p-4 border-[1.5px] h-[140px] "
                  placeholder="   Enter interships Qualifications"
                ></textarea>
              </div>
              <hr />
              <div className=" flex flex-row gap-12 justify-start my-4">
                <div className=" flex flex-col mr-8">
                  <h1 className="font-bold  mb-2"> Who You Are</h1>
                  <p className="text-p">
                    Add your preferred candidates <br />
                    qualifications
                  </p>
                </div>
                <textarea
                  name=""
                  id=""
                  className=" p-4 border-[1.5px] h-[130px] "
                  placeholder="Enter qualifications"
                ></textarea>
              </div>
              <hr />
              <div className=" flex flex-row justify-end mt-2">
                <button
                  type="button"
                  className="  text-[#FFFFFF] px-8 h-12  w-[25px]items-center bg-primary"
                >
                  Apply
                </button>
              </div>
              <br />
            </div>
          )}
          {activeStep === 1 && (
            <div className="flex flex-col gap-4 px-8">
              <div className="mb-2">
                <h1 className="font-bold mb-2">Basic Information</h1>
                <p className="text-p">
                  this information will be displayed publicly
                </p>
              </div>
              <hr />
              <div className="flex-row flex justify-start items-start gap-24 mb-4 ">
                <div className="flex-col flex gap-3">
                  <h1 className="font-bold"> Intership Title </h1>
                  <p className="text-p">
                    Internship titles must be <br></br>describe one position
                  </p>
                </div>
                <div className="border-[1.5px] w-2/6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g. Software Engineer"
                    className="p-2 w-full"
                  />
                </div>
              </div>
              <hr />
              <div className="flex-row flex gap-12 justify-start items-start mt-4">
                <div className="flex-col flex gap-2">
                  <h1 className="font-semibold">Type of Employment</h1>
                  <p className="text-p">
                    You can select multiple type of <br></br>employment
                  </p>
                </div>
                <div className="">
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Full Time"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Part Time"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Remote"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex-row flex justify-start items-start gap-20 mt-2 mb-8 ">
                  <div className="flex-col flex gap-3">
                    <h1 className="font-bold"> Field of Studies </h1>
                    <p className="text-p">
                      Please specify the Field of <br></br> Studies
                    </p>
                  </div>
                  <div className="border-[1.5px] w-2/6">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="e.g. Computer science"
                      className="p-2 w-full"
                    />
                  </div>
                </div>
                <hr />
                {/* <div className=" cat flex-row flex gap-20 mt-4 items-start mb-4">
                  <div className="flex-col flex gap-3">
                    <h1 className="font-semibold"> Categories</h1>
                    <p className="text-p">
                      You can select multiple job <br></br>
                      categories
                    </p>
                  </div>
                  <div className="flex-col flex  justify-center items-start mb-4">
                    <h1 className="font-semibold"> Select Job categories</h1>
                    <div>
               
                      <div>
                        <FormControl
                          variant="standard"
                          sx={{ m: 0, minWidth: 220 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            select intership categories
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>social media assistant</MenuItem>
                            <MenuItem value={20}>software engeineer</MenuItem>
                            <MenuItem value={30}>computer scientist</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div> */}
                <hr />
                <div className=" flex flex-row justify-end mt-2">
                <button
                  type="button"
                  className="  text-[#FFFFFF] px-8 h-12  w-[25px]items-center bg-primary"
                  onClick={() => setActiveStep(2)} >
                  Next Step
                </button>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
