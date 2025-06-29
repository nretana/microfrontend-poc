import { Navigate, Outlet } from 'react-router-dom';
import appConfig from '@/core/configs/app.config';
import { useSession } from '@/core/hooks/useSession';

type PublicRouteProps = {
    redirectTo: string
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ redirectTo }) => {

    const { authenticated } = useSession();

    return(authenticated ? <Navigate to={redirectTo} /> : <Outlet />)
}