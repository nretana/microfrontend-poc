import { COLLAPSE_MENU_ITEM } from '@/core/constants/app.constants';
import type { NavigationTree } from '@/core/@core-types/navigation';
import { SingleMenuItem } from './single-menu-item/SingleMenuItem';
import { CollapsibleMenuItem } from './collapse-menu-item/CollapseMenuItem';
import { useMenuActive } from '@/core/hooks/useMenuActive';
import { useAppSelector } from '@/core/store';

export type MenuProps = {
    navigationRoutes: NavigationTree[]
}

export const Menu: React.FC<MenuProps> = ({ navigationRoutes }) => {

    const routeKey = useAppSelector(state => state.base.currentRouteKey);
    const userRoles = useAppSelector(state => state.auth.user.authority);

    //const {} = useMenuActive(NavigationRoutes, routeKey);

    const authorizedRoutes = navigationRoutes.filter(route => route.authority.some(role => userRoles?.includes(role)))
                                             .map(route => ({ ...route, 
                                                              subMenu: (route.subMenu.filter(subMenu => 
                                                                        subMenu.authority.some(role => userRoles?.includes(role) )))
                                              }));

    const menuItems = authorizedRoutes.map(route => route.type === COLLAPSE_MENU_ITEM ? 
                                                            <CollapsibleMenuItem key={route.key}
                                                                                 route={route}
                                                                                 routeKeyActive={routeKey}
                                                                                 initiallyOpened={false} /> :
                                                            <SingleMenuItem key={route.key}
                                                                            route={route}
                                                                            routeKeyActive={routeKey} />);
    return(<>{menuItems}</>)
}