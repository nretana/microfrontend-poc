import { lazy } from 'react'
import { RouteTree } from '@nretana/microfrontend-lib'


export const routes: RouteTree[] = [
     {
        key: 'app-key',
        path: '/',
        component: lazy(() => import('../views/DefaultView.tsx')),
        authority: [],
        subRoute: []
    },
    {
        key: 'profile-key',
        path: '/profile',
        component: lazy(() => import('../views/ProfileView.tsx')),
        authority: [],
        subRoute: []
    },
    {
        key: 'payment-key',
        path: '/payments',
        component: lazy(() => import('../views/PaymentsView.tsx')),
        authority: [],
        subRoute: []
    },
]