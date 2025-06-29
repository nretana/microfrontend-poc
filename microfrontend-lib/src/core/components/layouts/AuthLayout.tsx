import React from 'react';
import type { CommonProps } from '@/core/@core-types/common';
import { COVER_LAYOUT, SIDE_LAYOUT } from '@/core/constants/app.constants';
import { CoverLayout } from './CoverLayout';
import { SideLayout } from './side-layout/SideLayout';


type AuthLayoutProps = CommonProps & {
    layoutType?: 'cover' | 'side'
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, layoutType = SIDE_LAYOUT }) => {
    return( <>
            {layoutType === COVER_LAYOUT ?
            <CoverLayout>
                {children}
            </CoverLayout> :
            <SideLayout>
                {children}
            </SideLayout>}
        </>)
}