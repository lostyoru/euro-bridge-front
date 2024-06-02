/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react';
import useRefreshToken from '@/hooks/useRefreshToken';
import useAuth from '@/hooks/useAuth';

const PersistentLogin = ({
    Children
}: {
    Children: React.ReactNode
}) => {
    const [loading, setLoading] = useState(true);
    const refreshToken = useRefreshToken();
    const { auth }: any = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await refreshToken();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        !auth?.accessToke ? verifyToken() : setLoading(false);

    }, [])

    return (
        <>
        {loading ? 
            (<div>Loading...</div> ): Children 
        }
        </>
    )   
}

export default PersistentLogin