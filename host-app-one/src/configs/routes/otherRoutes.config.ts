import { lazy } from 'react';
import { RouteTree } from '@/@core-types/routes';
import { ADMIN, USER } from '@/constants/roles.constants';
import { SSO_CALLBACK_KEY, 
         SSO_CALLBACK_PATH, 
         NOT_FOUND_KEY, 
         NOT_FOUND_PATH,
         INTERNAL_SERVER_ERROR_KEY,
         INTERNAL_SERVER_ERROR_PATH } from '@/constants/routes.constants';
         

export const otherRoutes: RouteTree[] = [
    {
        key: SSO_CALLBACK_KEY,
        path: SSO_CALLBACK_PATH,
        component: lazy(() => import('../../views/SSOCallbackView')),
        authority: [ADMIN, USER],
        subRoute: []
    },
    {
        key: NOT_FOUND_KEY,
        path: NOT_FOUND_PATH,
        component: lazy(() => import('../../views/NotFoundView')),
        authority: [ADMIN, USER],
        subRoute: []
    },
    {
        key: INTERNAL_SERVER_ERROR_KEY,
        path: INTERNAL_SERVER_ERROR_PATH,
        component: lazy(() => import('../../views/InternalServerErrorView')),
        authority: [ADMIN, USER],
        subRoute: []
    }
];

export const errorRoutes: RouteTree[] = [
    
];