import React from 'react'
import AccountType from './AccounType'
type FormSignupProps = {
    switcher: (e: any) => void;
    switchClass: string;
    }
const FormSignup = (source:FormSignupProps) => {
  return (
    <form className={`sign-up-form w-full z-4 inset-4 ${source.switchClass} mt-40 xl:mt-32`}>
        <AccountType name="account-type-sign-up" intershipId='intership-seeker-1' companyId='company-1'/>

        <div className="input-group flex flex-col justify-start items-start mb-2 bg-white">
            <h3 className='text-[28px] font-bold text-center mb-12 w-full'>Get more opportunities</h3>
            <div className="login-txt w-fit mx-auto">
                <p className='spc-text w-fit mx-auto p-1 relative text-[#202430] mb-6 '>Or sign up with email</p>
            </div>
            <label htmlFor="fullname" className='mb-3 font-semibold text-[#515B6F]'>Full name</label>
            <input type="text" placeholder='Enter your full name' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="fullname" />
            <label htmlFor="email-1" className='mb-3 font-semibold text-[#515B6F]'>Email Address</label>
            <input type="email" placeholder='Email Address' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="email-1" />
            <label htmlFor="password-1" className='mb-3 font-semibold text-[#515B6F]'>Password</label>
            <input type="password" placeholder='Enter password' className='input w-full py-3 px-2 border-solid border rounded-sm ' id="password-1" />
            <button className='btn w-full py-3 px-2 text-white font-semibold bg-[#4640DE] mt-3'>Continue</button>
            <p className='text-[#969AB8] w-fit mt-5 text-left mb-5'>
                Already have an account? {" "}
                <button className='text-[#0062FF] font-semibold' onClick={(e) =>source.switcher(e)}>
                    Login
                </button>
            </p>
            <p className='w-fit text-xs text-[#969AB8]'>
                By clicking &apos;Continue&apos;, you acknowledge that you have read <br /> and accept the Terms of Service and <span className='text-[#4640DE]'>Privacy Policy</span>.
            </p>
        </div>

    </form>
  )
}

export default FormSignup