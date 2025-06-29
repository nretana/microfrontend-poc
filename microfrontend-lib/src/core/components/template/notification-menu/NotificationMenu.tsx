import React, { forwardRef, useState } from 'react';
import { Menu, Divider, ScrollArea, Box, Paper, Popover, OptionalPortal, Portal, List, Text, Anchor  } from '@mantine/core';
import { IconButton, IconButtonProps } from '@/core/components/shared/icon-button/IconButton';
import { IconBell } from '@tabler/icons-react';
import NotificationMenuItem from './notification-menu-item/NotificationMenuItem';

import classes from './NotificationMenu.module.scss';


const NotificationToggle: React.FC<{ className?: string }> = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>((props, ref) => (
    <IconButton icon={IconBell}
                ariaLabel='Notification menu'
                ref={ref} 
                className={ props.className && props.className }
                {...props} />
));


export const NotificationMenu: React.FC<{ className?: string }> = ({ className }) => {

    const classArgs = className && className.trim().length > 0 ? className : '';

   return (<Popover width={350} withArrow={false} >
                <Popover.Target>
                    <NotificationToggle className={classArgs} />
                </Popover.Target>
                <Popover.Dropdown className={classes['notification-menu']}>
                    <Text size='xs' 
                          fw={500} 
                          className={classes['notification-menu-label']}>
                        Notifications
                    </Text>
                    <Divider />
                    <ScrollArea h={200}>
                        <List listStyleType='none' 
                              className='w-full' 
                              classNames={{ root: 'w-full', itemWrapper: 'w-full', itemLabel: 'w-full' }}>
                            <List.Item>
                                <NotificationMenuItem />
                            </List.Item>
                        </List>
                    </ScrollArea>
                    <Divider />
                    <Box className={classes['notification-menu-footer']}>
                        <Anchor href='/'>View all activities</Anchor>
                    </Box>
                </Popover.Dropdown>
            </Popover>)
}