import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import fs from 'fs-extra';
import { peerDependencies } from './package.json';
import path, { resolve } from 'path';
//import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            dts({ 
                  tsconfigPath: "./tsconfig.app.json", 
                  insertTypesEntry: true,
                  exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.ts'] }),
            {
              name: 'copy-configs',
              async closeBundle() {
                console.log('Copying config files...');
                const sourceFile = path.resolve(__dirname, 'tailwind.config.js');
                const destinationDir = path.resolve(__dirname, './dist/configs');
                const destinationFile = path.join(destinationDir, 'tailwind.config.js');
                
                await fs.ensureDir(destinationDir);
                await fs.copy(sourceFile, destinationFile);
              }
            } 
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'microfrontend-lib',
      fileName: (format) => `index.${format}.js`
      //formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { 
          globals: { 
            react: 'React', 
            'react-dom': 'ReactDOM',
            'react-router-dom': 'react-router-dom',
            '@mantine/core': '@mantine/core',
            '@mantine/hooks': '@mantine/hooks',
            'react-redux': 'react-redux',
            'redux-persist': 'redux-persist',
            '@reduxjs/toolkit': '@reduxjs/toolkit' }
            //tailwindcss: 'tailwindcss' }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    //cssCodeSplit: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@assets/styles/base/mantine" as mantine;`
      }
    },
  },
 /*  css: {
    postcss: {
      plugins: [tailwindcss],
    }
  } */
})
