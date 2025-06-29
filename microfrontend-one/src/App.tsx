import { useEffect } from 'react';
import { BaseApp } from '@nretana/microfrontend-lib';
import AppRouter from './components/route/AppRouter';
import { theme } from './configs/theme.config';

import './App.css';

export default () => {
	const allRoutes = AppRouter();
	return( process.env.NODE_ENV === 'development' ? <BaseApp routes={allRoutes} theme={theme} /> : <></>)
};
