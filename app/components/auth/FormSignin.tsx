"use client";
/* eslint-disable */;
import React from 'react'
import { MouseEvent } from 'react'
import AccountType from './AccounType';
import { authType } from '@/types/authType';
import { useEffect } from 'react';
import axios from '@/api/axios';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

type FormSigninProps = {
    switcher: (e: any) => void;
    switchClass: string;
    formsProps: authType;
    }

const FormSignin = (source:FormSigninProps) => {
    const { handleChangeAuth, setAuth }:any = useAuth();
    const {email, setEmail, password, setPassword, accountType, setAccountType } = source.formsProps;
    const [error, setError] = React.useState('');
    const [showError, setShowError] = React.useState(false);
    const router = useRouter();
    useEffect(() => {
        setEmail('');
        setPassword('');
        setAccountType('');
    }, [source.switchClass]);

    const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res: any = await axios.post(`/auth/signin`, 
             JSON.stringify({ email, password }), {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            }).then(res => {
                console.log(res);
                console.log(res.data.user.role);
                localStorage.setItem('token', res.data.accessToken);
                setAuth(res.data);
                setShowError(false);
                router.push('/chat');

            });
        } catch (error: any) {
            if (!error?.response) {
                setError('No Server Response');
            } else if (error.response?.status === 400) {
                setError('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setError('Unauthorized');
            } else {
                setError('Login Failed');
            }
            console.log(error);
            setShowError(true);
            
        }
    }

    useEffect(() => {
        setError('');
    }, [email, password]);

  return (
    <form className={`sign-in-form absolute inset-0 z-1 w-full ${source.switchClass} xl:mt-5`} onSubmit={(e) => handleSubmite(e)} >

        <AccountType name="account-type-sign-in" intershipId='intership-seeker' companyId='company' setAccountType={setAccountType}/>
        <div className="input-group flex flex-col justify-start items-start mb-2 ">
            <h3 className='text-[28px] font-bold text-center mb-12 w-full'>Welcome Back, Dude</h3>
            <div className="login-txt w-fit mx-auto">
                <p className='spc-text w-fit mx-auto p-1 relative text-[#202430] mb-6 '>Or login with with email</p>
            </div>
            <div className={`w-full flex justify-center items-center text-center bg-red-400 text-white`}>
                {showError && <p className={error? "m-3" : "m-0"}>{error}</p>}
            </div>
            <label htmlFor="email" className='mb-3 font-semibold text-[#515B6F]'>Email Address</label>
            <input type="email" placeholder='Email Address' className='input w-full py-3 px-2 border-solid border rounded-sm mb-5' id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password" className='mb-3 font-semibold text-[#515B6F]'>Password</label>
            <input type="password" placeholder='Enter password' className='input w-full py-3 px-2 border-solid border rounded-sm ' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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