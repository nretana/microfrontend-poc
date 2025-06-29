import { NavigationTree } from '@/@core-types/navigation';
//import { featureNavigationRoutes } from '@/modules/features/config/featureNavigation.config';
//import { profileNavigationRoutes } from '@/modules/profile/config/profileNavigation.config';
import { DASHBOARD_KEY, DASHBOARD_PATH, 
         PROFILE_PANEL_KEY, PROFILE_KEY, PROFILE_PATH, 
         PAYMENT_KEY, PAYMENT_PATH } from '@/constants/app.constants';
import { ADMIN, USER } from '@/constants/roles.constants';
import { SINGLE_MENU_ITEM, COLLAPSE_MENU_ITEM } from '@/constants/app.constants';
import { IconLayoutGridAdd, IconUser, IconCreditCard,IconUserCog } from '@tabler/icons-react';


export const navigationRoutes: NavigationTree[] = [
    {
        key:  DASHBOARD_KEY,
        path: DASHBOARD_PATH,
        title: 'Dashboard',
        icon: IconLayoutGridAdd,
        type: SINGLE_MENU_ITEM,
        authority: [ADMIN, USER],
        subMenu: []
    },
    {
        key: PROFILE_PANEL_KEY,
        path: '',
        title: 'Profile',
        icon: IconUserCog,
        type: COLLAPSE_MENU_ITEM,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key:  PROFILE_KEY,
                path: PROFILE_PATH,
                title: 'Profile',
                icon: '',
                type: SINGLE_MENU_ITEM,
                authority: [ADMIN, USER],
                subMenu: []
            },
            {
                key:  PAYMENT_KEY,
                path: PAYMENT_PATH,
                title: 'Payment',
                icon: '',
                type: SINGLE_MENU_ITEM,
                authority: [ADMIN, USER],
                subMenu: []
            }
        ]
    }

    //...featureNavigationRoutes,
    //...profileNavigationRoutes
]  