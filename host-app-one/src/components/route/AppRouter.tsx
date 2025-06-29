import { createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import type { RouteTree } from '@/@core-types/routes';
import { protectedRoutes, publicRoutes, miscRoutes, errorRoutes } from '@/configs/routes/allRoutes.config';
import appConfig from '@/configs/app.config';
import { PROTECTED_ROUTE, PUBLIC_ROUTE, OTHER_ROUTE } from '@/constants/routes.constants';
import AppLayout from '@/components/layouts/AppLayout';
import { ProtectedRoute, PublicRoute, FallbackContent } from '@nretana/microfrontend-lib';


const AppRouter = () => {

    const allRoutes = createRoutesFromElements(
        <Route errorElement={<FallbackContent />}>
            <Route>
                <Route path='/' element={<ProtectedRoute redirectTo={appConfig.unAuthenticatedEntryPath} />}>
                    <Route path='/' element={<Navigate replace to={appConfig.authenticatedEntryPath} />} />
                    {protectedRoutes.map((route: RouteTree) => <Route key={route.key}
                                                                      path={route.path} 
                                                                      element={<AppLayout route={route} 
                                                                                          routeType={PROTECTED_ROUTE} />} />)}
                </Route>
                <Route path='/' element={<PublicRoute redirectTo={appConfig.authenticatedEntryPath} />}>
                    {publicRoutes.map((route: RouteTree) => <Route key={route.key}
                                                                   path={route.path}
                                                                   element={<AppLayout route={route} 
                                                                                       routeType={PUBLIC_ROUTE} />} />)}
                </Route>
                {miscRoutes.map((route: RouteTree) => <Route key={route.key} 
                                                             path={route.path} 
                                                             element={<AppLayout route={route} routeType={OTHER_ROUTE} />} /> )}
            </Route>
            {errorRoutes.map((route: RouteTree) => <Route key={route.key} 
                                                            path={route.path} 
                                                            element={<AppLayout route={route} 
                                                                                routeType={OTHER_ROUTE} />} /> )}
        </Route>);


    return allRoutes;
}

export default AppRouter;