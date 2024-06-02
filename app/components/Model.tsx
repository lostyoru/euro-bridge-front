import React, { useState, useEffect } from "react";
import Image from "next/image";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
type Props = {
  image: any;
  isVisible: boolean;
  post: string;
  location: string;
  internship: any;
  onClose: () => void;
};

const Model = ({ image, isVisible, post, location, onClose, internship }: Props) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [portfolioURL, setPortfolioURL] = useState("");
  const [additional, setAdditional] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const axiosPrivate = useAxiosPrivate();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedResume = event.target.files && event.target.files[0];
    if (selectedResume) {
      setCv(selectedResume);
    }
  };

  useEffect(() => {
    // Scroll to top when the component mounts or when step changes
    window.scrollTo(0, 0);
  }, [step]);

  if (!isVisible) return null;


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try { 
      const res = await axiosPrivate.post(`/users/intership/${internship.id}/apply`,
        {
          jobTitle,
          email,
          phone: phoneNumber,
          linkedin:linkedinURL,
          portfolio: portfolioURL,
          additional,
          cv,
        },
      ).then((res) => {
        console.log(res);
        onClose();
      });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center overflow-y-auto">
      <div className="w-[650px] flex flex-col">
        <form className="bg-white p-10 relative" onSubmit={handleSubmit}>
          <button
            className=" font-body   absolute top-4 right-1 text-xl  z-10"
            onClick={onClose}
          >
            <Image
              src="/Xi.png"
              alt="intership"
              width={30}
              height={50}
              className="mr-5"
            />
          </button>

          {step === 1 && (
            <>
              <div className="flex flex-row gap-4 mb-10 mt-10">
                <Image
                  src={image}
                  alt="intership"
                  width={60}
                  height={50}
                  className="mr-5"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold capitalize text-[18px] font-body">
                    {post}
                  </h1>
                  <p className="text-[#515B6F]">{location}</p>
                </div>
              </div>
              <hr />
              <h1 className="font-semibold text-[18px] mb-4 mt-4">
                Step 1: Personal Information
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
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  value={linkedinURL}
                  onChange={(e) => setLinkedinURL(e.target.value)}
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
                  value={portfolioURL}
                  onChange={(e) => setPortfolioURL(e.target.value)}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="font-semibold text-[18px] mb-4 mt-4">
                Step 2: Additional Information
              </h1>
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
                  value={additional}
                  onChange={(e) => setAdditional(e.target.value)}
                />
              </div>
              <div className="mt-10 mb-6 flex flex-row justify-between">
                <h1 className="font-semibold">Attach your resume</h1>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                />
              </div>
              <hr />
              <hr />
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="flex justify-center text-white bg-primary py-3 w-[580px]"
                >
                  Submit application
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="font-semibold text-[18px] mb-4 mt-4">
                Step 3: Review
              </h1>
              <div>
                <p>Job Title: {jobTitle}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>LinkedIn URL: {linkedinURL}</p>
                <p>Portfolio URL: {portfolioURL}</p>
                <p>Experience: {additional}</p>
                <p>Resume: {cv ? cv.name : "No file selected"}</p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Model;

