import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-800 flex justify-between  relative z-30 py-5  max-container ">
      <div className="flex justify-evenly">
        
        <Link href="/">
          <Image src="/eurobridg.jpg" alt="logo" width={140} height={29} />
        </Link>
       
      
       <ul className="hidden h-full gap-12  ">
        <Link href="/" className="regular-16 text-gray-50 flex justify-center cursor-pointer pb-1.5 transition-all font-bold"> brows companies </Link>
        </ul>
       </div>
     
      
    </nav>
  );
};

export default Navbar;
