import Image from "next/image";
import { Open_Sans } from 'next/font/google';
import Herosection from "./_components/Herosection";
import Brand from "./_components/Brands/Brand";
import Intershipshome from "./_components/Intershipshome";

export default function Home() {
  return <main > 
  <Herosection/>
  <Brand/>

<Intershipshome/>
  
  </main>;
}
