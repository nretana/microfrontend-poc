import { lazy } from 'react';
import { RouteTree } from '@/@core-types/routes';
import { ADMIN, USER } from '@/constants/roles.constants';
import { DASHBOARD_KEY, DASHBOARD_PATH,
         PROFILE_KEY, PROFILE_PATH,
         PAYMENT_KEY, PAYMENT_PATH } from '@/constants/app.constants';
//import { featureRoutes } from '@/modules/features/config/featureRoutes.config';
//import { profileRoutes } from '@/modules/profile/config/profileRoutes.config';


export const authRoutes: RouteTree[] = [
   {
      key: 'sign-in-key',
      path: '/sign-in',
      component: lazy(() => import('../../views/SignInView')),
      authority: [ADMIN, USER],
      subRoute: []
  },
];