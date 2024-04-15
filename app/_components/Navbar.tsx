import Link from "next/link";
import Image from 'next/image'; // Import if using Next.js 10 or below

const Navbar = () => {
  return (
    <nav className="border-2 border-red-800 flexBetween gap-12 relative  py-5 max-container">
      <div className="flex-1 flexStart gap-10 " >
      <Link href="/">
          <Image src="/eurobridg.jpg" alt="logo" width={140} height={29} />
        </Link>

        <ul className=" h-full gap-12 xl:flex hidden text-small ">
           < a  className="regular-16 text-[#515B6F] flex justify-center cursor-pointer pb-1.5 transition-all hover:text-[#4640DE] " href="/">
           brows companies
          </a>
          
        </ul>
      </div>
      
      
    </nav>
  );
};

export default Navbar;
