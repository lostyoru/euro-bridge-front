"use client";
/* eslint-disable  */
import React, { useEffect } from 'react'
import AccountType from './AccounType'
import { authType } from '@/types/authType';
import { useRouter } from 'next/navigation'
import axios from '@/api/axios';
type FormSignupProps = {
    switcher: (e: any) => void;
    switchClass: string;
    formsProps: authType;
    }
const FULL_NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=|\[\]{};':",<.>/?\\])[0-9a-zA-Z!@#$%^&*()_+-=|\[\]{};':",<.>/?]{8,}$/;
const FormSignup = (source:FormSignupProps) => {
    const router = useRouter();
    const { 
        fullname, 
        setFullname, 
        email, 
        setEmail, 
        password, 
        setPassword, 
        accountType, 
        setAccountType
    } = source.formsProps;

    const [error, setError] = React.useState('');
    const [showError, setShowError] = React.useState(false);
    const [validName, setValidName] = React.useState(false);
    const [validEmail, setValidEmail] = React.useState(false);
    const [validPassword, setValidPassword] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    useEffect(() => {
        setEmail('');
        setPassword('');
        setFullname('');
        setAccountType('');
    }, [source.switchClass]);

    const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const v1 = FULL_NAME_REGEX.test(fullname);
        const v2 = PASSWORD_REGEX.test(password);
        const v3 = email.includes('@');
        if(!v1 || !v2 || !v3) {
            setShowError(true);
            setError('Invalid email, password or name');
            return;
        }
        try {
            const res = await axios.post(`/auth/signup`, 
             JSON.stringify({ email, password, name: fullname, role: accountType }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.accessToken);
                setShowError(false);
                router.push('/chat');
            });
        } catch (error: any) {
            if(!error.response) {
                setError('Network Error');
            }
            else if(error.response?.status === 409) {
                setError('Username Taken');
            } else {
                setError('Registration Failed')
            }
            console.log(error);
        }
    }

    useEffect(() => {
        if(FULL_NAME_REGEX.test(fullname)) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }, [fullname]);

    useEffect(() => {
        if(PASSWORD_REGEX.test(password)) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }, [password]);

    useEffect(() => {
        if(email.includes('@')) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }, [email]);

    useEffect(() => {
        setError('');
    }, [fullname, email, password]);


  return (
    <form className={`sign-up-form w-full z-4 inset-4 ${source.switchClass} mt-40 xl:mt-32`} onSubmit={handleSubmite}>
        <AccountType name="account-type-sign-up" intershipId='intership-seeker-1' companyId='company-1' setAccountType={setAccountType}/>

        <div className="input-group flex flex-col justify-start items-start mb-2 bg-white">
            <h3 className='text-[28px] font-bold text-center mb-12 w-full'>Get more opportunities</h3>
            <div className="login-txt w-fit mx-auto">
                <p className='spc-text w-fit mx-auto p-1 relative text-[#202430] mb-6 '>Or sign up with email</p>
            </div>
            <div className={`mb-3 w-full flex justify-center items-center text-center bg-red-400 text-white`}>
                {showError && <p className={error? "m-3" : "m-0"}>{error}</p>}
            </div>
            <label htmlFor="fullname" className='mb-3 font-semibold text-[#515B6F]'>Full name</label>
            <input type="text" placeholder='Enter your full name' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            <div className={`${fullname && !validName ? "block" : "hidden"} w-full flex justify-center items-center text-center bg-red-400 p-3 text-white`}>
                <p>Invalid name</p>
            </div>
            <label htmlFor="email-1" className='mb-3 font-semibold text-[#515B6F]'>Email Address</label>
            <input type="email" placeholder='Email Address' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="email-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div className={`${email && !validEmail ? "block" : "hidden"} w-full flex justify-center items-center text-center bg-red-400 p-3 text-white`}>
                <p>Invalid email</p>
            </div>
            <label htmlFor="password-1" className='mb-3 font-semibold text-[#515B6F]'>Password</label>
            <input type="password" placeholder='Enter password' className='input w-full py-3 px-2 border-solid border rounded-sm ' id="password-1" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={`${password && !validPassword ? "block" : "hidden"} w-full flex justify-center items-center text-center bg-red-400 p-3 text-white text-sm mt-3`}>
                <p>
                    Invalid password
                    <br />
                    password must contain
                    <br />
                    8 characters, 1 uppercase
                    <br />
                    1 lowercase letter, 1 number
                    <br />
                    and 1 special character at least
                </p>
            </div>
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