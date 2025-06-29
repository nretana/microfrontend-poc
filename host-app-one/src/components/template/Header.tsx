//import ThemeToggle from './theme-toggle/ThemeToggle';
//import UserMenu from './user-menu/UserMenu';
//import SideBarToggle from './sidebar-toggle/SideBarToggle';
//import NotificationMenu from './notification-menu/NotificationMenu';

import {
  Header as HeaderLayout,
  NotificationMenu,
  SideBarToggle,
  ThemeToggle,
  UserMenu,
} from '@nretana/microfrontend-lib';


const Header = () => {

  return (
    <HeaderLayout>
      <div>
        <SideBarToggle />
      </div>
      <div className='flex items-center p-5'>
        <ThemeToggle className='me-2' />
        <NotificationMenu  />
        <UserMenu signOut={() => console.log("signout submit!")}/>
      </div>
    </HeaderLayout>
  );

  /* return(<header className='flex justify-between items-center w-full px-4 py-2'>
            <div>
                <SideBarToggle />
            </div>
            <div className='flex items-center'>
                <ThemeToggle />
                <NotificationMenu />
                <UserMenu />
            </div>
          </header>) */
};

export default Header;
