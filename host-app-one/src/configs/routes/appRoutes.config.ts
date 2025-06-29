import { lazy } from 'react';
import { RouteTree } from '@/@core-types/routes';
import { ADMIN, USER } from '@/constants/roles.constants';
import { DASHBOARD_KEY, DASHBOARD_PATH,
         PROFILE_KEY, PROFILE_PATH,
         PAYMENT_KEY, PAYMENT_PATH } from '@/constants/app.constants';


import { withRemoteInjectReducer } from '@/components/hoc/withRemoteInjectReducer';

export const appRoutes: RouteTree[] = [
   {
      key: DASHBOARD_KEY,
      path: DASHBOARD_PATH,
      component: lazy(() => import('../../views/DashboardView')),
      authority: [ADMIN, USER],
      subRoute: []
  },
  {
      key: PROFILE_KEY,
      path: PROFILE_PATH,
      // @ts-ignore
      component: lazy(() => import('remote/remote-profile')
                              .then((module) => ({ default: withRemoteInjectReducer(module.default, 
                                                                                    { scope: 'remote',
                                                                                      module: 'remote-profile-slice', 
                                                                                      reducerKey: 'profile' })
                                                })) ),
      authority: [ADMIN, USER],
      subRoute: []
   },
   {
      key: PAYMENT_KEY,
      path: PAYMENT_PATH,
      // @ts-ignore
      component: lazy(() => import('remote/remote-payment')),
      authority: [ADMIN, USER],
      subRoute: []
   }
];