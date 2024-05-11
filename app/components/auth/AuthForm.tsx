'use client';
import React, { useEffect } from 'react';
import FormSignin from './FormSignin';
import FormSignup from './FormSignup';
import { useState } from 'react';
import { authType } from '@/types/authType';
import { useContext } from 'react';
import AuthContext from '@/contexts/auth/AuthProvider';
import { useRouter } from 'next/navigation';
type AuthFormProps = {
    switcher: (e: any) => void;
    signinClass: string;
    signupClass: string;
}

const AuthForm = (source: AuthFormProps) => {
    // const { auth } : any = useContext(AuthContext);
    const router = useRouter();
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [accountType, setAccountType] = useState<string>('');
    const formsProps: authType = { fullname, setFullname, email, setEmail, password, setPassword, accountType, setAccountType };

    // useEffect(() => {
    //     if (auth) {
    //         router.push('/chat');
    //     }
    // }, [auth]);

  return (
    <div className="relative form w-full xl:w-1/2 bg-white ">
        <FormSignin switcher={source.switcher} switchClass={source.signinClass} formsProps={formsProps} />
        <FormSignup switcher={source.switcher} switchClass={source.signupClass} formsProps={formsProps}/>
    </div>  
  )
}

export default AuthForm