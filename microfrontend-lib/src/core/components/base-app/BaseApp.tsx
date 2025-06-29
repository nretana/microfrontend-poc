import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import type { MantineThemeOverride } from '@mantine/core';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { localTheme } from '@/core/configs/theme.config';
import { persistor, store } from '@/core/store/index';


export type BaseAppProps = {
  routes: RouteObject[],
  theme?: MantineThemeOverride,
  className?: string | undefined
}

export const BaseApp: React.FC<BaseAppProps> = ({ routes, theme }) => {

  const allRoutes = createBrowserRouter(routes, { future: {
    v7_relativeSplatPath: true,
    v7_partialHydration: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
    v7_fetcherPersist: true
  }});

    return(<Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <MantineProvider theme={theme ||localTheme}>
                <RouterProvider router={allRoutes} future={{ v7_startTransition: true }} />
              </MantineProvider>
            </PersistGate>
          </Provider>)
}
