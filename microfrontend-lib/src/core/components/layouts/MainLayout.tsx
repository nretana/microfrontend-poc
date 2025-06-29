import React, { ComponentType } from 'react';
/* import { CommonProps } from '@/core/@core-types/common';
import Header from '@/core/components/template/Header';
import SideBar from '@/core/components/template/sidebar/SideBar'; */

type MainLayoutProps = {
  sideBar: React.ReactNode
  header: React.ReactNode,
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ sideBar, header, children }) => {
  return (
    <div className='flex items-stretch h-full w-full'>
      {sideBar}
      <div className='w-full relative flex flex-col'>
        {header}
        <div className='p-4 flex-1'>{children}</div>
      </div>
    </div>
  );
};
