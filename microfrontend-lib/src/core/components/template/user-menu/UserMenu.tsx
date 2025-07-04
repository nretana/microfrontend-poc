import cx from 'clsx';
import { Menu, Text, rem } from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
//import useAuth from '@/modules/auth/hooks/useAuth';
import { useAppSelector } from '@/core/store/hook';
import type { AuthResponse } from '@/core/@core-types/auth';
//import { notifications } from '@mantine/notifications';

import classes from './UserMenu.module.scss';

export type UserMenuProps = {
  signOut: () => void //Promise<AuthResponse | undefined>
}

export const UserMenu: React.FC<UserMenuProps> = ({ signOut }) => {

  //const { signOut } = useAuth();
  const currentUser = useAppSelector(state => state.auth.user);

  const onSignOut = async() => {
   /*  const response = await signOut();
    if (response?.status === 'failed'){
      notifications.show({ title: 'Error', 
                           message: `We couldn't sign out from the app.`,
                           color: 'red',
                           autoClose: false });
    } */
  }

  return (
    <Menu width={250}>
      <Menu.Target>
        <div className={cx(classes['user-menu-target'],
                           'flex items-stretch cursor-pointer px-2 p-2 h-full')}>
          <Avatar color='blue' size='lg'>
            <IconUser />
          </Avatar>
          <div className='ps-2 flex justify-center flex-col'>
            <div>
              <Text size='sm' className='block font-bold'>
                {currentUser.name}
              </Text>
              <Text size='sm'>
                {currentUser.email}
              </Text>
            </div>
          </div>
        </div>
      </Menu.Target>
      <Menu.Dropdown className={classes['user-menu']}>
        <Menu.Item leftSection={<IconSettings className={classes['icon']} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconUser className={classes['icon']} />}>Profile</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconLogout className={classes['icon']} />} 
                   onClick={onSignOut}>Sign Out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
