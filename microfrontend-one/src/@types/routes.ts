import { LazyExoticComponent } from 'react'

export type RouteTree = {
    key: string,
    path: string,
    component: LazyExoticComponent<<T>(props: T) => JSX.Element>
    authority: string[],
    layoutType?: "cover" | "side"
    subRoute: RouteTree[]
}

export type RouteType = "protected" | "public" | "other";
