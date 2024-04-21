import React from 'react'
import { MouseEvent } from 'react'
type FormSigninProps = {
    switcher: (e: any) => void;
    switchClass: string;

    }
const FormSignin = (source:FormSigninProps) => {

  return (
    <form className={`sign-in-form absolute inset-0 z-1  ${source.switchClass} xl:mt-5`} >
            
        <div className="account-type flex flex-row justify-center items-center mb-3">
            <input className='hidden' type="radio" id="intership-seeker" name="account-type" value="intership-seeker" />
            <label className='cursor-pointer p-2 text-[#4640DE] font-semibold m-1 checkbox-label' htmlFor="intership-seeker">Intership Seeker</label>
            <input className='hidden' type="radio" id="company" name="account-type" value="company" />
            <label className='cursor-pointer p-2 text-[#4640DE] font-semibold checkbox-label' htmlFor="company">Company</label> 
        </div>

        <div className="input-group flex flex-col justify-start items-start mb-2">
            <h3 className='text-[28px] font-bold text-center mb-12 w-full'>Welcome Back, Dude</h3>
            <div className="login-txt w-fit mx-auto">
                <p className='spc-text w-fit mx-auto p-1 relative text-[#202430] mb-6 '>Or login with with email</p>
            </div>
            <label htmlFor="email" className='mb-3 font-semibold text-[#515B6F]'>Email Address</label>
            <input type="email" placeholder='Email Address' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="email" />
            <label htmlFor="password" className='mb-3 font-semibold text-[#515B6F]'>Password</label>
            <input type="password" placeholder='Enter password' className='input w-full py-3 px-2 border-solid border rounded-sm ' id="password" />
            <div className="flex flex-row justify-between items-center my-4">
                <div className="remember-me flex flex-row justify-start items-center">
                    <input type="checkbox" id="remember-me" className='mr-2 rounded-md' />
                    <label htmlFor="remember-me" className='text-[#515B6F]'>Remember me</label>
                </div>
            </div>
            <button className='btn w-full py-3 px-2 text-white font-semibold bg-[#4640DE]'>Login</button>
            <p className='text-[#969AB8] w-fit px-12 mt-5 text-center sm:text-left'>
                Don&apos;t have an account ? {" "}
                <button className='text-[#0062FF] font-semibold' onClick={e => source.switcher(e)}>
                    Sign up
                </button>
            </p>
        </div>
        <a href="" className='w-full mx-auto'>
                <p className='text-[#4640DE] font-semibold mt-5 text-center w-fit mx-auto'>Forgot password?</p>
        </a>
    </form>
  )
}

export default FormSignin