import { useEffect, useState } from 'react';
import { Box, ScrollArea } from '@mantine/core';
import { Menu } from '../vertical-menu/Menu';
import type { NavigationTree } from '@/core/@core-types/navigation';
import classes from './SideNav.module.scss'

export type SideNavProps = {
    navigationRoutes: NavigationTree[]
}

export const SideNav: React.FC<SideNavProps> = ({ navigationRoutes }) => {

    return(<nav className={classes.sidenav}>
            <ScrollArea type='hover' h={350} className={classes['sidenav-scroll']}>
                <Box mih={220} py='md'>
                    <Menu navigationRoutes={navigationRoutes} />
                </Box>
            </ScrollArea>
           </nav>)
}