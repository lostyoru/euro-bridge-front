import React from 'react'
import Image from 'next/image';
import Search from './Search';
function Herosection() {
  return (
    <div className=" flex flex-col bg-bground w-full"> 
    <div className="flex flex-row justify-around ml-20  ">
      <div className={`flex flex-col ml-5 mr-0 my-10 `}>
      <p className="text-[60px] leading-[4.5rem]  mt-20 ml-10 font-bold font-body " >
        Where  <br /> <span className="text-[#26A4FF]"> Trainees </span> And <span className="text-[#26A4FF]"> Traineeships </span> <br /><span className="text-primary" >Meet</span>
      </p>
      <p className="text-p mt-4 ml-10">Launch Your European Career: Connect with Top  <br />Companies & Ignite Your Potential.</p>
      </div>
      <div>
         <Image src="/image.jpg" alt="logo" width={700} height={700} className="rounded-l-[50px] mt-8 " />
      </div>
     
          
    </div>
    <Search/>
  
  
    
    </div>
  )
}

export default Herosection
