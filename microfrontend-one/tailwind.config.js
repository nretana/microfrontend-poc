/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@nretana/microfrontend-lib/configs/tailwind.config.js';
const theme = tailwindConfig.theme ? tailwindConfig.theme: {};

export default {
  content: ["./index.html", 
            "./src/**/*.{tsx,ts}"],
  theme: {
    ...theme,
    extend: {},
  },
  plugins: [],
}

