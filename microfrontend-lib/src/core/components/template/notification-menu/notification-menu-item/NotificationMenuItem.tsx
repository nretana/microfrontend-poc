import cx from 'clsx';
import { Avatar, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import classes from './NotificationMenuItem.module.scss';

const NotificationMenuItem = () => {
  return (
    <div className={cx(classes['notification-menu-item'], 'px-3 p-2')}>
      <div className='flex justify-between w-full'>
        <div className='flex'>
          <Avatar color='yellow' size='md'>
            <IconUser />
          </Avatar>
          <div className='ps-2 flex justify-center flex-col'>
            <div>
              <Text size='sm' className='block font-bold'>
                Mike Adams
              </Text>
              <Text size='xs'>7 March 2023 <small>•</small> 12: 30 PM</Text>
            </div>
          </div>
        </div>
        <div className={classes['unread']}></div>
      </div>
    </div>
  );
};

export default NotificationMenuItem;
