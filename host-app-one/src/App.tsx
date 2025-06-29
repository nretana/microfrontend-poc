import { BaseApp } from '@nretana/microfrontend-lib';
import AppRouter from './components/route/AppRouter';
import { theme } from './configs/theme.config';

import '@nretana/microfrontend-lib/styles.css';
import './App.css';


const App = () => {

	const allRoutes = AppRouter();
	return (
		<BaseApp routes={allRoutes} theme={theme} />
	);
};

export default App;
