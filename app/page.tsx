import Image from "next/image";

export default function Home() {
  return <main className=" flex flex-col bg-[#F8F8FD]"> 
  <div className="flex flex-row justify-evenly ml-10 ">
    <div className="flex flex-col mx-20 my-10">
    <h1 className="text-[65px] leading-[4.5rem] mt-10" >
      Where <strong className="text-[#26A4FF]"> <br/>Trainees</strong> And <strong className="text-[#26A4FF]">Traineeships  </strong> <strong className="text-[#4640DE]" >Meet</strong>
    </h1>
    <p className="text-[#515B6F] mt-4">Launch Your European Career: Connect with Top  <br />Companies & Ignite Your Potential.</p>
    </div>
    
    <Image src="/image.jpg" alt="logo" width={800} height={553} className="rounded-l-[50px] mt-8 " />
        
  </div>
  <div >search</div>


  
  </main>;
}
