import React from 'react'
import Image from 'next/image';
import Search from './Search';
function Herosection() {
  return (
    <div className=" flex flex-col bg-[#F8F8FD] w-full"> 
    <div className="flex flex-row justify-around ml-20  ">
      <div className={`flex flex-col ml-5 mr-0 my-10 `}>
      <p className="text-[55px] leading-[4.5rem] mt-10 font-bold font-body w-1/3 " >
        Where <span className="text-[#26A4FF]"> <br/>Trainees </span> And <span className="text-[#26A4FF]">Traineeships </span> <span className="text-[#4640DE]" >Meet</span>
      </p>
      <p className="text-[#515B6F] mt-4">Launch Your European Career: Connect with Top  <br />Companies & Ignite Your Potential.</p>
      </div>
      <div>
         <Image src="/image.jpg" alt="logo" width={1000} height={700} className="rounded-l-[50px] mt-8 " />
      </div>
     
          
    </div>
    <Search/>
  
  
    
    </div>
  )
}

export default Herosection
