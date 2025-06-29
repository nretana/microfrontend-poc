/* import ThemeToggle from './theme-toggle/ThemeToggle';
import UserMenu from './user-menu/UserMenu';
import SideBarToggle from './sidebar-toggle/SideBarToggle';
import NotificationMenu from './notification-menu/NotificationMenu'; */
import React from 'react';
import { CommonProps } from '@/core/@core-types/common';


export const Header: React.FC<CommonProps> = ({ children }) => {

    return(<header className='flex justify-between items-center w-full px-4 py-2'>
        {children}
            {/* <div>
                <SideBarToggle />
            </div>
            <div className='flex items-center'>
                <ThemeToggle />
                <NotificationMenu />
                <UserMenu />
            </div> */}
          </header>)
}