'use client';
import Herosection from "./components/Herosection";
import Brand from "./components/Brands/Brand";
import Intershipshome from "./components/Intershipshome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/chat');
    }
  })

  return <>
  <Navbar/>
  <Herosection/>
  <Brand/>

  <Intershipshome/>
  <Footer/>
  </>;
}
