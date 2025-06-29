import { appRoutes } from './appRoutes.config';
import { authRoutes } from './authRoutes.config';
import { otherRoutes, errorRoutes as errRoutes } from './otherRoutes.config';

export const protectedRoutes = [ ...appRoutes ];
export const publicRoutes = [ ...authRoutes ];
export const miscRoutes = [ ...otherRoutes, ...errRoutes ];
export const errorRoutes = [ ...errRoutes ];