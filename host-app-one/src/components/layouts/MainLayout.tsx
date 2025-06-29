import React from 'react';
import { CommonProps } from '@/@core-types/common';
import Header from '@/components/template/Header';
import SideBar from '@/components/template/sidebar/SideBar';

const MainLayout: React.FC<CommonProps> = ({ children }) => {
  return (
    <div className='flex items-stretch h-full w-full'>
      <SideBar />
      <div className='w-full relative flex flex-col'>
        <Header />
        <div className='p-4 flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;