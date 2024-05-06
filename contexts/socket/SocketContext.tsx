// SocketContext.js
import React from 'react';
import { io } from 'socket.io-client';
import { createContext, useEffect } from 'react';

export const SocketContext:any = createContext(null);

export const SocketProvider = ({ children }:
    { children: React.ReactNode }
) => {
  const socket = io('http://localhost:3001');

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};