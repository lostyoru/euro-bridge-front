import { axiosPrivate } from "@/api/axios";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
    const { auth, handleChangeAuth }: any = useAuth();
    const refreshToken = useRefreshToken();

    useEffect(() => {


        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers.Authorization || !config.headers.authorization) {
                    config.headers['authorization'] = `Bearer ${auth.accessToken}`;
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }

                return config;
            }, error => {
                return Promise.reject(error);
            }
        );


        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async error => {
                const prevRequest = error?.config;
                if (error.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refreshToken();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate.request(prevRequest);
                }
                return Promise.reject(error);
            });
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }
    }, [auth, refreshToken]);
     

    return axiosPrivate
}

export default useAxiosPrivate;