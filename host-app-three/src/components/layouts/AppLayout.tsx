import React, { lazy, Suspense, useCallback, useEffect, useMemo } from 'react';
import type { RouteTree, RouteType } from '@nretana/microfrontend-lib';
import { AuthorityGuard, LoadingContent, MainLayout, ViewRoute } from '@nretana/microfrontend-lib';
import { PROTECTED_ROUTE, PUBLIC_ROUTE, OTHER_ROUTE } from '@/constants/routes.constants';
import { useAppDispatch, useAppSelector } from '@nretana/microfrontend-lib';
import { useSession } from '@nretana/microfrontend-lib';
import { setCurrentRouteKey } from '@nretana/microfrontend-lib';
import { ErrorBoundary } from 'react-error-boundary';
import ModuleFallbackContent from '../shared/ModuleFallbackContent';

import SideBar from '../template/sidebar/SideBar';
import Header from '../template/Header';


type AppLayoutProps = {
  route: RouteTree;
  routeType?: RouteType;
  layoutType?: string
};

const AppLayout: React.FC<AppLayoutProps> = ({ route, routeType, layoutType = 'cover' }) => {
  const dispatch = useAppDispatch();
  const userAuthority = useAppSelector(state => state.auth.user.authority) as string[];
  //const token = useAppSelector(state => state.auth.session.token);
  //const signedIn = useAppSelector(state => state.base.currentRouteKey);

  const { authenticated } = useSession();
  //const authenticated = token && signedIn;

  const onChangeRouteKey = useCallback(() => {
    dispatch(setCurrentRouteKey(route.key));
  }, [route.key]);

  useEffect(() => {
    onChangeRouteKey()
  }, [onChangeRouteKey]);

  const Layout = useMemo(() => {
    if (authenticated) {
      return MainLayout;
    }

    return lazy(() => import('@/components/layouts/DefaultExport'));
    
  }, [authenticated]);

  console.log('AUTHENTICATED: ', authenticated);

  return (
    <Suspense fallback={<LoadingContent />}>
      {routeType === PROTECTED_ROUTE &&
        <Layout sideBar={<SideBar />} header={<Header />}>
          <AuthorityGuard userAuthority={userAuthority} 
                          authority={route.authority}>
            <ErrorBoundary key={`error_${route.key}`} FallbackComponent={ModuleFallbackContent}>
              <ViewRoute routeKey={route.key} 
                         component={route.component} />
            </ErrorBoundary>
          </AuthorityGuard>
        </Layout>}

      {routeType === PUBLIC_ROUTE &&
        <Layout sideBar={<SideBar />} header={<Header />}>
          <ViewRoute routeKey={route.key} 
                     component={route.component} />
        </Layout>}
      
      {routeType === OTHER_ROUTE && 
        <ViewRoute routeKey={route.key} 
                   component={route.component} />
      }
    </Suspense>
  );
};

export default AppLayout;
