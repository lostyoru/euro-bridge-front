// components/RequireAuth.tsx
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

type RequireAuthProps = {
    allowedRoles: string[],
    children: React.ReactNode
}
const RequireAuth = ({
    allowedRoles,
    children
    }: RequireAuthProps) => {
    const { auth }: any = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth?.user) {
            router.push(`/auth`);
        } else if (!allowedRoles.includes(auth?.user.role)) {
            router.replace('/auth/unauthorized');
        }
    }, [auth, allowedRoles, router]);

    if (!auth?.user || !allowedRoles.includes(auth?.user.role)) {
        return null; // or a loading spinner if you want
    }

    if(allowedRoles.includes(auth?.user.role) && auth?.user) {
        console.log('is allowed');
    }

    return children;
};

export default RequireAuth;
