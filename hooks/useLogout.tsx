import axios from '@/api/axios';
import useAuth from '@/hooks/useAuth';

const useLogout = () => {
    const { setAuth, auth }: any = useAuth();
    const logout = async () => {
        setAuth({
            user: null,
            accessToken: null,
        });
        console.log('logging out and auth : ', auth);
        try { 
            const response = await axios.get('/auth/signout', {
                withCredentials: true
            });
            localStorage.removeItem('token');
            console.log('logged out and auth : ', auth);
            console.log('response : ', response);
        }catch(error) {
            console.log('error');
            console.log(error);
        }

    }
    return logout;
}

export default useLogout;