import React from 'react';
import { Group, Box, ThemeIcon, UnstyledButton, rem } from '@mantine/core';
import type { Icon } from '@tabler/icons-react';
import type { NavigationTree } from '@/core/@core-types/navigation';
import { useNavigate } from 'react-router-dom';
import classes from './SingleMenuItem.module.scss';


export type MenuItemProps = {
  route: NavigationTree,
  routeKeyActive: string,
  initiallyOpened?: boolean
}

export const SingleMenuItem: React.FC<MenuItemProps> = ({ route, routeKeyActive }) => {
  
  const navigate = useNavigate();
  const Icon = route.icon as Icon;

  return (
    <>
      <UnstyledButton type='button' 
                      onClick={(event) => { navigate(route.path); } }
                      className={classes['single-menu-item']}
                      data-active={route.key === routeKeyActive || undefined}>
          <Group justify='space-between' gap={0}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon variant='light' size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml='md'>{route.title}</Box>
            </Box>
          </Group>
      </UnstyledButton>
    </>
  );
}