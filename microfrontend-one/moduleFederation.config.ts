import { dependencies } from './package.json';

export const sharedDependencies = {
    react: {
        requiredVersion: dependencies.react,
        singleton: true
    },
    'react-dom': { 
        requiredVersion: dependencies['react-dom'], 
        singleton: true
    },
    'react-redux': { 
        requiredVersion: dependencies['react-redux'], 
        singleton: true
    },
    '@reduxjs/toolkit': { 
        requiredVersion: dependencies['@reduxjs/toolkit'], 
        singleton: true
    },
    /* '@nretana/microfrontend-lib': { // not in used
						requiredVersion: dependencies['@nretana/microfrontend-lib'],
						singleton: true
					}, */
    '@mantine/core': {
        requiredVersion: dependencies['@mantine/core'],
        singleton: true
    },
    '@mantine/hooks': {
        requiredVersion: dependencies['@mantine/hooks'],
        singleton: true
    }
}