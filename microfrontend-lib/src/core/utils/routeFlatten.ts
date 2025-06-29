import type { RouteTree } from '@/core/@core-types/routes';

export const routeFlatten = (routes: RouteTree[]) => {
    let flattenArr: RouteTree[] = [];

    routes.forEach((route: RouteTree) => {
        route.subRoute.length > 0 && flattenArr.push(...routeFlatten(route.subRoute));
        flattenArr.push({ ...route, subRoute: [] });

    });
    
    return flattenArr;
}