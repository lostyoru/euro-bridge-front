import React from 'react'
import FormSignin from './FormSignin'
import FormSignup from './FormSignup'
type AuthFormProps = {
    switcher: (e: any) => void;
    signinClass: string;
    signupClass: string;
}
const AuthForm = (source: AuthFormProps) => {

  return (
    <div className="relative form w-full xl:w-1/2 bg-white ">
        <FormSignin switcher={source.switcher} switchClass={source.signinClass} />
        <FormSignup switcher={source.switcher} switchClass={source.signupClass}/>
    </div>  
  )
}

export default AuthForm