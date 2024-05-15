"use client";
import React from 'react'
import eclips from '../../public/Ellipse 1 (5).png'
import man from '../../public/man.png'
import group110 from '../../public/110.png'
import Image from 'next/image'
import AuthForm from '../components/auth/AuthForm'
import { useState } from 'react'

function Auth()  {
    const [inSignin, setInSignin] = useState<boolean>(true);
    const [signupClass, setSignupClass] = useState<string>('hidden');
    const [signinClass, setSigninClass] = useState<string>('flex flex-col justify-center items-center');

    const handleFormSwitch = (e: any) => {
        e.preventDefault();
        console.log('switching form');
        if (inSignin) {
            setInSignin(false);
            setSigninClass('hidden');
            setSignupClass('flex flex-col justify-center items-center');
        } else {
            setInSignin(true);
            setSigninClass('flex flex-col justify-center items-center');
            setSignupClass('hidden');
        }   
    }

  return (
    <>
        <div className="flex flex-row justify-center items-center xl:justify-start xl:items-center h-screen">
            <AuthForm switcher={handleFormSwitch} signinClass={signinClass} signupClass={signupClass} />
            
            <div className="image relative overflow-hidden hidden w-1/2 xl:block 2xl:ml-96 ">
                <div className="ellipse relative overflow-hidden z-0">
                    <Image src={eclips} alt='ellipse' />
                </div>
                <div className="man absolute z-1 bottom-0">
                    <Image src={man} alt="man"/>
                </div>
                <div className="group110 absolute z-1 top-32 -right-10 ">
                    <Image src={group110} alt="group110"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Auth