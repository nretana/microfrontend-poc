import { LogoHeader, SideNav } from '@nretana/microfrontend-lib';
import { navigationRoutes } from '@/configs/navigation.config';
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes['sidebar-header']}>
        <LogoHeader />
      </div>
      <SideNav navigationRoutes={navigationRoutes} />
      {/* <div className={classes['sidebar-footer']}>
        <span>Footer</span>
      </div> */}
    </div>
  );
};

export default SideBar;
