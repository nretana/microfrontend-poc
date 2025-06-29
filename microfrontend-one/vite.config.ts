import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { sharedDependencies } from './moduleFederation.config.ts';


export default defineConfig(({ mode }) => {
	const sharedDependenciesByMode : any = {}
	if(mode === 'development'){
		sharedDependenciesByMode['react'] = sharedDependencies['react'],
		sharedDependenciesByMode['react-dom'] = sharedDependencies['react-dom'],
		sharedDependenciesByMode['react-redux'] = sharedDependencies['react-redux'],
		sharedDependenciesByMode['@reduxjs/toolkit'] = sharedDependencies['@reduxjs/toolkit']
	}
	else {
		sharedDependenciesByMode['react'] = sharedDependencies['react'],
		sharedDependenciesByMode['react-dom'] = sharedDependencies['react-dom'],
		sharedDependenciesByMode['react-redux'] = sharedDependencies['react-redux'],
		sharedDependenciesByMode['@reduxjs/toolkit'] = sharedDependencies['@reduxjs/toolkit'],
		sharedDependenciesByMode['@mantine/core'] = sharedDependencies['@mantine/core']
	}

	return {
		server: {
			port: 4174
		},
		build: {
			target: 'chrome89',
			assetsDir: 'assets',
			cssCodeSplit: false,
			emptyOutDir: true
		},
		base: '/',
		resolve: {
			alias: {
			  '@': path.join(__dirname, 'src'),
			  '@assets': path.join(__dirname, 'src/assets')
			}
		},
		plugins: [
			react(),
			federation({
				filename: 'remoteEntry.js',
				name: 'remote',
				exposes: {
					'./remote-profile': './src/components/profile/Profile.tsx',
					'./remote-profile-slice': './src/store/slices/profileSlice',
					'./remote-payment': './src/components/PaymentMethodList.tsx',
				},
				//getPublicPath: `function() {return "http://localhost:8680/"}`,
				remotes: {},
				shared: { ...sharedDependenciesByMode }
			})
		],
		css: {
			postcss: {
				plugins: [tailwindcss],
			}
		}
	}
});
