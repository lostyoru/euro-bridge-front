import React, { use } from 'react'
import axios from '@/api/axios'
import useAuth from '@/hooks/useAuth'

const useRefreshToken = () => {
    const { auth, handleChangeAuth, setAuth }: any = useAuth();
    const refreshToken = async () => {
        try {
            const res: any = await axios.get(`/auth/refresh`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            }).then(res => {
                console.log(res.data.accessToken);
                localStorage.setItem('token', res.data.accessToken);
                setAuth((prev: any) => {
                    console.log('prev : ', prev);
                    return {user: res.data.user, accessToken: res.data.accessToken, ...prev}});
                console.log('refreshed');
                console.log('auth : ', auth);
                console.log('res : ', res.data);
                return res.data.accessToken;
            });
            
        } catch (error: any) {
            console.log(error);
        }
        return refreshToken;
    }

    return refreshToken;
}

export default useRefreshToken  