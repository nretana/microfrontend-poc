import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { FallbackContent } from '@nretana/microfrontend-lib';
import { routes } from '@/configs/app.routes.config';
import { RouteTree } from '@nretana/microfrontend-lib';
import AppLayout from '../layouts/AppLayout';

const AppRouter = () => {
  const allRoutes = createRoutesFromElements(
    <Route errorElement={<FallbackContent />}>
      <Route path='/' element={<ProtectedRoute />}>
        {routes.map((route: RouteTree) => (
          <Route
            key={route.key}
            path={route.path}
            element={<AppLayout route={route} />}
          />
        ))}
      </Route>
    </Route>
  );

  console.log('ALL ROUTES: ', allRoutes);

  return allRoutes;
};

export default AppRouter;
