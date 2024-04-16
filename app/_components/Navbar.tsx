import Link from "next/link";
import Image from "next/image"; // Import if using Next.js 10 or below

const Navbar = () => {
  return (
    <nav className="shadow-md flexBetween gap-12 relative  py-1 max-container">
      <div className="flexBetween ml-20">
        <Link href="/" className="mr-10">
          <Image src="/eurobridg.jpg" alt="logo" width={140} height={29} />
        </Link>

        <ul className=" h-full flex text-small ml-16  ">
          <Link
            className=" text-[15px] regular-16 text-[#515B6F] flex justify-center cursor-pointer pb-1.5 transition-all hover:text-[#4640DE] ml-24 capitalize"
            href="/"
          >
            find interships
          </Link>
        </ul>
      </div>
      <div className="flexBetween mr-18">
        <ul className=" h-full  flex mr-16   ">
          <Link
            className=" mr-24 text-[15px] regular-16 text-[#515B6F] flex justify-center cursor-pointer transition-all hover:text-[#4640DE] capitalize "
            href="/"
          >
            browse copmanies
          </Link>
        </ul>
        <div className="flex justify-around  font-semibold  ">
          <button
            type="button"
            className=" border-r-2 p-4 text-[#4640DE] ml-10 capitalize"
          >
            login
          </button>
          <button
            type="button"
            className=" p-4 text-[#FFFFFF]  bg-[#4640DE] mr-14 ml-8"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
