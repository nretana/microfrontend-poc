import { LogoHeader } from '@/core/components/template/logo-header/LogoHeader';
import { SideNav } from '@/core/components/template/sidenav/SideNav';
import classes from './SideBar.module.scss';

export const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      {/* <div className={classes['sidebar-header']}>
        <LogoHeader />
      </div>
      <SideNav />
      <div className={classes['sidebar-footer']}>
        <span>Footer</span>
      </div> */}
    </div>
  );
};
