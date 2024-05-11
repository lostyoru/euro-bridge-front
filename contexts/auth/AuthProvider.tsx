"use client";
import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [auth, setAuth] = useState({});
  const handleChangeAuth = (auth: any) => {
    setAuth(auth);
  }
  return (
    <AuthContext.Provider value={{ auth, setAuth, handleChangeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;