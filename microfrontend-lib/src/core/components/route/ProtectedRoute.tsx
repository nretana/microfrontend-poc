import { Navigate, Outlet } from 'react-router-dom';
import appConfig from '@/core/configs/app.config';
import { useSession } from '@/core/hooks/useSession';
import React from 'react';

type ProtectedRouteProps = {
    redirectTo: string
}


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo }) => {

    const { authenticated } = useSession();

    return(!authenticated ? <Navigate to={redirectTo} /> : <Outlet />)
}