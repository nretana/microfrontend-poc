import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { sharedDependencies } from './moduleFederation.config.ts';
import path from 'path';
import tailwindcss from 'tailwindcss';


export default defineConfig(({ mode }) => {

	return {
		server: { 
			port: 4175
		},
		build: {
			target: 'chrome89',
			emptyOutDir: true,
		},
		base: '/',
		resolve: {
			alias: {
			'@': path.join(__dirname, 'src'),
			'@assets': path.join(__dirname, 'src/assets')
			}
		},
		plugins: [
			federation({
				name: 'host',
				remotes: {
					remote: {
						type: 'module',
						name: 'remote',
						entry: 'http://localhost:8680/remoteEntry.js',
						entryGlobalName: 'remote',
						shareScope: 'default',
					},
				},
				exposes: {},
				filename: 'remoteEntry.js',
				shared: { ...sharedDependencies }
			}),
			react({ babel: {
				plugins: [
				'babel-plugin-macros'
				]
			}
			}),
		],
		css: {
			postcss: {
				plugins: [tailwindcss],
			}
		}
	}
});
