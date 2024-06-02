'use client';
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Post from "../components/Post";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useAuth from "@/hooks/useAuth";
import PersistentLogin from "../components/PersistentLogin";
import RequireAuth from "../components/auth/RequireAuth";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import ResponsiveDatePickers from "../components/FinalDate";
function Page() {
  const { auth }: any = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [activeStep, setActiveStep] = useState(1);
  const [internshipDetails, setInternshipDetails] = useState({
    title: "",
    type: "",
    field: "",
    description: "",
    qualifications: "",
    whoYouAre: "",
    duration: "",
  });
  const [finalDate, setFinalDate] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInternshipDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(auth.user.location)
      const response = await axiosPrivate.post(`/users/${auth?.user?.id}`, {...internshipDetails, finalDate, fields: internshipDetails.field, whoyouare: internshipDetails.whoYouAre, qualifications: internshipDetails.qualifications, });
      console.log(response.data); // Assuming the response contains the created internship data
      // Reset the form after successful submission
      setInternshipDetails({
        title: "",
        type: "",
        field: "",
        description: "",
        qualifications: "",
        whoYouAre: "",
        duration: "",
      });
    } catch (error) {
      console.error("Error posting internship:", error);
    }
  };

  return (
    <PersistentLogin Children={
      <RequireAuth allowedRoles={["COMPANY"]}>
        <div className="flex flex-row h-screen">
          <SideBar />
          <div className="w-4/5 hide-y-scroll overflow-hidden p-10">
            <div className="flex flex-row gap-4 p-8 justify-start items-start">
              <Image src="/Nomad.png" alt="Company Logo" width={60} height={50} />
              <div className="flex flex-col items-center gap-1">
                <p className="text-p text-[18px]">Company</p>
                <h1 className="text-[18px] font-bold font-body capitalize">Nomad</h1>
              </div>
            </div>
            <hr />
            <div className="p-10">
              <h1 className="capitalize font-bold font-body text-[28px] mb-8 text-[#25324B]">post internship</h1>
              <div className="border-[1px] w-full mx-auto flex flex-row p-5 gap-10 justify-start">
                <button
                  type="button"
                  className={`flex flex-row justify-start gap-5 items-center border-r-[2px] mr-16 ${
                    activeStep === 1 ? "text-black" : ""
                  }`}
                  onClick={() => setActiveStep(1)}
                >
                  {/* Content for step 1 button */}
                </button>
                <button
                  type="button"
                  className={`flex flex-row justify-start gap-5 items-center w-1/5 ${
                    activeStep === 2 ? "text-black" : ""
                  }`}
                  onClick={() => setActiveStep(2)}
                >
                  {/* Content for step 2 button */}
                </button>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                {activeStep === 1 && (
                  <>
                    {/* Step 1 form content */}
                    <div className="flex flex-col gap-4 px-8">
                      <div className="mb-2">
                        <h1 className="font-bold mb-2">Basic Information</h1>
                        <p className="text-p">
                          This information will be displayed publicly
                        </p>
                      </div>
                      <hr />
                      <div className="flex-row flex justify-start items-start gap-24 mb-4">
                        <div className="flex-col flex gap-3">
                          <h1 className="font-bold">Internship Title</h1>
                          <p className="text-p">
                            Internship titles must describe one position
                          </p>
                        </div>
                        <div className="border-[1.5px] w-2/6">
                          <input
                            type="text"
                            name="title"
                            value={internshipDetails.title}
                            onChange={handleChange}
                            placeholder="e.g. Software Engineer"
                            className="p-2 w-full"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="flex-row flex gap-20 justify-start items-start mt-4">
                        <div className="flex-col flex gap-2">
                          <h1 className="font-semibold">Type of Employment</h1>
                          <p className="text-p">
                            You can select multiple types of employment
                          </p>
                        </div>
                        <div className="">
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="type"
                              value={internshipDetails.type}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="full-time"
                                control={<Radio />}
                                label="Full Time"
                              />
                              <FormControlLabel
                                value="part-time"
                                control={<Radio />}
                                label="Part Time"
                              />
                              <FormControlLabel
                                value="remote"
                                control={<Radio />}
                                label="Remote"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div className="flex-row flex justify-start items-start gap-28 mt-2 mb-8 ">
                          <div className="flex-col flex gap-3 mr-12">
                            <h1 className="font-bold">Field of Studies</h1>
                            <p className="text-p">
                              Please specify the Field of Studies
                            </p>
                          </div>
                          <div className="border-[1.5px] w-2/6">
                            <input
                              type="text"
                              name="field"
                              value={internshipDetails.field}
                              onChange={handleChange}
                              placeholder="e.g. Computer Science"
                              className="p-2 w-full"
                            />
                          </div>
                          <br />

                        </div>
                        <hr />
                        <div className="flex flex-row items-center justify-between my-4 pr-60">
                              <label htmlFor="finalDate" className="font-semibold text-[#515B6F]">
                                Final Date
                              </label>
                              <ResponsiveDatePickers finalDate={finalDate} setFinalDate={setFinalDate}/>
                          </div>
                        <hr />
                        <div className="my-3 flex flex-row items-center ">
                          <p className="font-bold mr-10">Duration</p>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="duration"
                              value={internshipDetails.duration}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="1 Month"
                                control={<Radio />}
                                label="1 Month"
                              />
                              <FormControlLabel
                                value="2 Months"
                                control={<Radio />}
                                label="2 Months"
                              />
                              <FormControlLabel
                                value="3 Months"
                                control={<Radio />}
                                label="3 Months"
                              />
                              <FormControlLabel
                                value="6 Months"
                                control={<Radio />}
                                label="6 Months"
                              />
                              <FormControlLabel
                                value="12 Months"
                                control={<Radio />}
                                label="12 Months"
                              />
                              <FormControlLabel
                                value="18 Months"
                                control={<Radio />}
                                label="18 Months"
                              />

                            </RadioGroup>
                          </FormControl>
                        </div>
                        <div className="flex flex-row justify-end mt-6">
                          <button
                            type="button"
                            className="text-[#FFFFFF] px-8 h-12 items-center bg-primary"
                            onClick={() => setActiveStep(2)}
                          >
                            Next Step
                          </button>
                        </div>
                      </div>

                    </div>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    {/* Step 2 form content */}
                    <div className="flex flex-col gap-4 px-8">
                      <div className="mb-2">
                        <h1 className="font-bold mb-2">Details</h1>
                        <p className="text-p">
                          Add the description of the Internships, responsibilities,
                          who you are, and nice-to-haves.
                        </p>
                      </div>
                      <hr />
                      <div className="flex flex-row gap-20 justify-start my-4">
                        <div className="flex flex-col mr-18">
                          <h1 className="font-bold mb-2">Internship Description</h1>
                          <p className="text-p">
                            Internship titles must describe one position
                          </p>
                        </div>
                        <textarea
                          name="description"
                          value={internshipDetails.description}
                          onChange={handleChange}
                          className="w-full p-4 border-[1.5px] h-[140px]"
                          placeholder="Enter Internship description"
                        ></textarea>
                      </div>
                      <hr />
                      <div className="flex flex-row gap-16 justify-start my-4">
                        <div className="flex flex-col mr-2">
                          <h1 className="font-bold mb-2">Qualifications</h1>
                          <p className="text-p">
                            Outline the core Qualifications of the position
                          </p>
                        </div>
                        <textarea
                          name="qualifications"
                          value={internshipDetails.qualifications}
                          onChange={handleChange}
                          className="w-full p-4 border-[1.5px] h-[140px]"
                          placeholder="Enter Internship Qualifications"
                        ></textarea>
                      </div>
                      <hr />
                      <div className="flex flex-row gap-12 justify-start my-4">
                        <div className="flex flex-col mr-8">
                          <h1 className="font-bold mb-2">Who You Are</h1>
                          <p className="text-p">
                            Add your preferred candidate <br /> qualifications
                          </p>
                        </div>
                        <textarea
                          name="whoYouAre"
                          value={internshipDetails.whoYouAre}
                          onChange={handleChange}
                          className="p-4 border-[1.5px] h-[130px]"
                          placeholder="Enter qualifications"
                        ></textarea>
                      </div>
                      <hr />
                      <div className="flex flex-row justify-end mt-2">
                        <button
                          type="submit"
                          className="text-[#FFFFFF] px-8 h-12 items-center bg-primary"
                        >
                          Apply
                        </button>
                      </div>
                      <br />
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </RequireAuth>
    } />
  );
}

export default Page;
