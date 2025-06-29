import type { ComponentType } from 'react';

export type ViewRouteProps<T> = {
    component: ComponentType<T>,
    routeKey: string
}

export const ViewRoute = <T extends Record<string, unknown>> ({ component: Component, 
                                                         routeKey, 
                                                         ...props }: ViewRouteProps<T>) => {
    return(<Component {...props as T} />)
}